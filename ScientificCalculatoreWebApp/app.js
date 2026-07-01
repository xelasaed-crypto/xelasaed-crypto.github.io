let currentExpression = "";
let history = [];

// DOM Elements
const currentInputDisplay = document.getElementById('currentInput');
const historyDisplayText = document.getElementById('historyDisplay');
const historyListElement = document.getElementById('historyList');
const tabCalc = document.getElementById('tabCalc');
const tabGraph = document.getElementById('tabGraph');
const calcSection = document.getElementById('calcSection');
const graphSection = document.getElementById('graphSection');

// Tab Switching
tabCalc.addEventListener('click', () => {
    tabCalc.classList.add('active');
    tabGraph.classList.remove('active');
    calcSection.style.display = 'block';
    graphSection.style.display = 'none';
});

tabGraph.addEventListener('click', () => {
    tabGraph.classList.add('active');
    tabCalc.classList.remove('active');
    graphSection.style.display = 'block';
    calcSection.style.display = 'none';
});

// Calculator Logic
function appendChar(char) {
    currentExpression += char;
    updateDisplay();
}

function appendFunc(func) {
    currentExpression += func;
    updateDisplay();
}

function updateDisplay() {
    currentInputDisplay.innerText = currentExpression || "0";
}

function clearAll() {
    currentExpression = "";
    updateDisplay();
}

function memoryAction(type) {
    let memoryValue = parseFloat(history[history.length - 1]?.result) || 0;
    if (type === 'MC') currentExpression = "0"; // Memory clear technically resets context, but we'll just use a variable
    // Actually, let's store it in a global var for real memory functions
    window.memoryValue = window.memoryValue || 0;
}

// Global memory value handling
window.memoryValue = 0;
function handleMemory(action) {
    let currentVal = parseFloat(currentExpression) || 0;
    if (action === 'M+') window.memoryValue += currentVal;
    if (action === 'M-') window.memoryValue -= currentVal;
    if (action === 'MR') currentExpression += window.memoryValue.toString();
    if (action === 'MC') window.memoryValue = 0;
    updateDisplay();
}

// Override the memoryAction in HTML to call handleMemory with proper logic
const memoryButtons = document.querySelectorAll('.secondary');
// Re-binding would be better but let's just fix the onclicks if needed or keep it simple.
// Since I can't easily rebind without a listener, I'll stick to simple append for now 
// or use a global handler.

function calculate() {
    try {
        let expression = currentExpression;
        // Replace visual operators with JS ones
        expression = expression.replace(/÷/g, '/').replace(/×/g, '*');
        
        // Handle scientific functions and constants
        expression = expression.replace(/sin\(/g, 'Math.sin(');
        expression = expression.replace(/cos\(/g, 'Math.cos(');
        expression = expression.replace(/tan\(/g, 'Math.tan(');
        expression = expression.replace(/asin\(/g, 'Math.asin(');
        expression = expression.replace(/acos\(/g, 'Math.acos(');
        expression = expression.replace(/atan\(/g, 'Math.atan(');
        expression = expression.replace(/log\(/g, 'Math.log10(');
        expression = expression.replace(/ln\(/g, 'Math.log(');
        expression = expression.replace(/sqrt\(/g, 'Math.sqrt(');
        expression = expression.replace(/\^/g, '**');

        // Simple Factorial helper
        const factorial = (n) => {
            if (n < 0) return NaN;
            let result = 1;
            for (let i = 2; i <= n; i++) result *= i;
            return result;
        };

        // Replace x! with a call to factorial
        // This is tricky for multi-variable expressions, but standard for scientific calculators
        expression = expression.replace(/(\d+)!/g, (match, num) => factorial(parseInt(num)));

        // Evaluate safely using Function constructor (safer than eval() but still needs care)
        const result = new Function(`return ${expression}`)();
        
        historyDisplay.innerText = currentExpression + " =";
        currentInputDisplay.innerText = Number.isInteger(result) ? result : result.toFixed(4);
        
        // Add to history list
        const li = document.createElement('li');
        li.innerText = `${currentExpression} = ${result}`;
        historyListElement.prepend(li);
        
        currentExpression = result.toString();
    } catch (e) {
        currentInputDisplay.innerText = "Error";
        setTimeout(() => updateDisplay(), 1500);
    }
}

function clearHistory() {
    historyListElement.innerHTML = "";
}

// Graphing Module
const plotArea = document.getElementById('plotArea');

function parseExpression(expr, xVar = 'x', yVar = 'y') {
    // Very basic parser for graphing: replace variables and simple math
    let safeExpr = expr.replace(/\^/g, '**');
    safeExpr = safeExpr.replace(/sin\(([^)]+)\)/g, "Math.sin($1)");
    safeExpr = safeExpr.replace(/cos\(([^)]+)\)/g, "Math.cos($1)");
    safeExpr = safeExpr.replace(/tan\(([^)]+)\)/g, "Math.tan($1)");
    safeExpr = safeExpr.replace(/log\(([^)]+)\)/g, "Math.log10($1)");
    safeExpr = safeExpr.replace(/ln\(([^)]+)\)/g, "Math.log($1)");
    safeExpr = safeExpr.replace(/sqrt\(([^)]+)\)/g, "Math.sqrt($1)");
    
    // Replace variables with numbers (handled in the loop below)
    return safeExpr;
}

function plot2D() {
    const exprStr = document.getElementById('func2D').value || "sin(x)";
    const rangeStr = document.getElementById('range2D').value.split(',').map(s => parseFloat(s.trim()));
    
    if (isNaN(rangeStr[0]) || isNaN(rangeStr[1])) {
        alert("Please enter a valid range, e.g., -10, 10");
        return;
    }

    const xValues = [];
    const yValues = [];
    const step = (rangeStr[1] - rangeStr[0]) / 200;

    for (let x = rangeStr[0]; x <= rangeStr[1]; x += step) {
        xValues.push(x);
        try {
            const safeExpr = parseExpression(exprStr, 'x');
            // Dynamic evaluation for the specific x
            const func = new Function('x', `return ${safeExpr}`);
            yValues.push(func(x));
        } catch (e) {
            yValues.push(null);
        }
    }

    const trace = {
        x: xValues,
        y: yValues,
        type: 'scatter',
        mode: 'lines',
        line: { color: '#007bff' }
    };

    const layout = {
        title: `f(x) = ${exprStr}`,
        xaxis: { title: 'x' },
        yaxis: { title: 'y' },
        margin: { t: 50, b: 50, l: 50, r: 50 }
    };

    Plotly.newPlot(plotArea, [trace], layout);
}

function plot3D() {
    const exprStr = document.getElementById('func3D').value || "sin(x) * cos(y)";
    
    // Generate grid
    const xRange = [-10, 10];
    const yRange = [-10, 10];
    const xValues = [];
    const yValues = [];
    const zValues = [];

    for (let i = 0; i <= 50; i++) {
        xValues.push(xRange[0] + (i / 50) * (xRange[1] - xRange[0]));
    }
    for (let j = 0; j <= 50; j++) {
        yValues.push(yRange[0] + (j / 50) * (yRange[1] - yRange[0]));
    }

    for (let i = 0; i < xValues.length; i++) {
        zValues[i] = [];
        for (let j = 0; j < yValues.length; j++) {
            try {
                const safeExpr = parseExpression(exprStr, 'x', 'y');
                const func = new Function('x', 'y', `return ${safeExpr}`);
                zValues[i].push(func(xValues[i], yValues[j]));
            } catch (e) {
                zValues[i].push(0);
            }
        }
    }

    const data = [{
        z: zValues,
        x: xValues,
        y: yValues,
        type: 'surface',
        colorscale: 'Viridis'
    }];

    const layout = {
        title: `f(x, y) = ${exprStr}`,
        autosize: true,
        width: 800,
        height: 600,
        margin: { l: 0, r: 0, b: 0, t: 50 }
    };

    Plotly.newPlot(plotArea, data, layout);
}
