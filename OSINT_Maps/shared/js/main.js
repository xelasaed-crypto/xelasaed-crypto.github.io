/* ============================================================
   OSINT Maps — Shared Engine (data-agnostic)
   Requires: window.mapConfig, window.references, window[topicDataKey]
   ============================================================ */

// ── Config (set per-map before loading this script) ──────
//   window.mapConfig = {
//       topicDataKey:  "nuclearData" | "aiData" | …,
//       geoJsonUrl:    "https://…",
//       highlightColor: "#ff4d4d",
//       defaultColor:  "#00f3ff",
//       panelFields:   [ { label, value }, … ],
//       panelNotes:    true,
//       panelRefs:     true,
//       emptyMsg:      "…"
//   };

const cfg = window.mapConfig;
const topicData = window[cfg.topicDataKey] || {};

// ── Map Init ─────────────────────────────────────────────
const map = L.map('map', {
    zoomControl: true,
    attributionControl: true,
    minZoom: 2,
    maxZoom: 6
}).setView([20, 0], 2);

L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    maxZoom: 19,
    subdomains: 'abcd',
    attribution: '&copy; OpenStreetMap &copy; CARTO'
}).addTo(map);

let geojsonLayer = null;
let selectedCountryLayer = null;

// ── Style ────────────────────────────────────────────────
function style(feature) {
    const hasData = topicData.hasOwnProperty(feature.properties.name);
    return {
        fillColor: hasData ? cfg.highlightColor + '55' : cfg.defaultColor + '1a',
        weight: 1,
        opacity: 1,
        color: hasData ? cfg.highlightColor : cfg.defaultColor + '66',
        fillOpacity: hasData ? 0.4 : 0.1
    };
}

function highlightFeature(e) {
    const layer = e.target;
    if (layer !== selectedCountryLayer) {
        layer.setStyle({ weight: 2, color: '#fff', fillOpacity: 0.5 });
    }
}

function resetHighlight(e) {
    const layer = e.target;
    if (layer !== selectedCountryLayer) {
        geojsonLayer.resetStyle(layer);
    }
}

function onCountryClick(e) {
    const layer = e.target;
    const countryName = layer.feature.properties.name;

    if (selectedCountryLayer) {
        geojsonLayer.resetStyle(selectedCountryLayer);
    }

    selectedCountryLayer = layer;
    layer.setStyle({
        weight: 3,
        color: '#fff',
        fillColor: cfg.defaultColor + '66',
        fillOpacity: 0.4
    });

    showCountryPanel(countryName);
}

function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: onCountryClick
    });
}

// ── GeoJSON Load ─────────────────────────────────────────
const GEOJSON_URL = cfg.geoJsonUrl || 'https://cdn.jsdelivr.net/gh/johan/world.geo.json@master/countries.geo.json';

fetch(GEOJSON_URL)
    .then(response => {
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return response.json();
    })
    .then(data => {
        geojsonLayer = L.geoJson(data, {
            style: style,
            onEachFeature: onEachFeature
        }).addTo(map);

        const loader = document.getElementById('loader');
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => loader.remove(), 1000);
        }
    })
    .catch(err => {
        console.error('GeoJSON Load Failed:', err);
        const loader = document.getElementById('loader');
        if (loader) {
            loader.innerHTML = `<div class="loader-text" style="color:var(--alert,#ff4d4d);">ERROR: ${err.message}</div>`;
        }
    });

// ── Panel ────────────────────────────────────────────────
const sidePanel    = document.getElementById('sidePanel');
const panelContent  = document.getElementById('panelContent');
const countryNameEl = document.getElementById('countryName');
const closeBtn      = document.getElementById('closeBtn');

function buildRefsHtml(refIds) {
    let html = '';
    if (Array.isArray(refIds)) {
        refIds.forEach(id => {
            const ref = references[id];
            if (ref) {
                html += `
                    <li class="ref-item">
                        <strong>[${id}] ${ref.title}</strong>
                        ${ref.desc}<br>
                        <a href="${ref.url}" target="_blank">Source Link ↗</a>
                    </li>`;
            }
        });
    }
    return html || '<li style="color:#777">No sources listed for this entry.</li>';
}

function buildPanelHtml(data) {
    let html = '';
    const titles = cfg.sectionTitles || { fields: "Status", notes: "Intelligence Notes", refs: "Verified Sources" };

    // Field rows
    if (cfg.panelFields && cfg.panelFields.length) {
        html += `<div class="info-section"><div class="info-title">${titles.fields}</div>`;
        cfg.panelFields.forEach(f => {
            html += `
                <div class="info-row">
                    <span class="info-label">${f.label}</span>
                    <span class="info-value">${data[f.value] || '—'}</span>
                </div>`;
        });
        html += '</div>';
    }

    // Notes
    if (cfg.panelNotes && data.notes) {
        html += `
            <div class="info-section">
                <div class="info-title">${titles.notes}</div>
                <p>${data.notes}</p>
            </div>`;
    }

    // References
    if (cfg.panelRefs && data.refs) {
        html += `
            <div class="info-section">
                <div class="info-title">${titles.refs}</div>
                <ul class="ref-list">${buildRefsHtml(data.refs)}</ul>
            </div>`;
    }

    return html;
}

function showCountryPanel(name) {
    countryNameEl.textContent = name;
    sidePanel.classList.add('active');

    const data = topicData[name];

    if (data) {
        panelContent.innerHTML = buildPanelHtml(data);
    } else {
        panelContent.innerHTML = `
            <div class="info-section">
                <div class="info-title">Status</div>
                <p style="color:var(--secondary,#00ff9d);font-size:1.1rem;">${cfg.emptyMsg || 'Data Pending'}</p>
                <p style="margin-top:10px;color:#aaa;">No data available for this country in the current dataset.</p>
            </div>`;
    }
}

if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        sidePanel.classList.remove('active');
        if (selectedCountryLayer && geojsonLayer) {
            geojsonLayer.resetStyle(selectedCountryLayer);
            selectedCountryLayer = null;
        }
    });
}

document.addEventListener('click', (e) => {
    if (sidePanel.classList.contains('active') &&
        !sidePanel.contains(e.target) &&
        !e.target.closest('#map')) {
        sidePanel.classList.remove('active');
        if (selectedCountryLayer && geojsonLayer) {
            geojsonLayer.resetStyle(selectedCountryLayer);
            selectedCountryLayer = null;
        }
    }
});
