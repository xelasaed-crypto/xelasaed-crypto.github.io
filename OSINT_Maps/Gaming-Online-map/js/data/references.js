// Gaming online map - References
const references = {
    
    // ── UNITED KINGDOM ──────────────────────────────────
    101: {
        title: "UK Gambling Commission (UKGC)",
        desc: "The official regulatory body for gambling in Great Britain, overseeing the Licence Conditions and Codes of Practice (LCCP).",
        url: "https://www.gamblingcommission.gov.uk/"
    },
    102: {
        title: "Gambling Act Review White Paper",
        desc: "UK Government's comprehensive reform proposal for the 2005 Gambling Act, focusing on player protection and stake limits.",
        url: "https://www.gov.uk/government/publications/gambling-act-review-white-paper"
    },
    103: {
        title: "House of Lords Report: Gambling Harm – Time for Action",
        desc: "Landmark parliamentary report detailing the need for drastic regulatory overhaul and statutory levies for research.",
        url: "https://publications.parliament.uk/pa/ld5801/ldselect/ldsoci/126/12602.htm"
    },

    // ── UNITED STATES ───────────────────────────────────
    104: {
        title: "American Gaming Association (AGA)",
        desc: "Official commercial gaming revenue tracker and industry data for the US market.",
        url: "https://www.americangaming.org/"
    },
    105: {
        title: "New Jersey Division of Gaming Enforcement (NJDGE)",
        desc: "The regulatory framework and monthly revenue reports for the most mature US online casino market.",
        url: "https://www.njoag.gov/about/divisions-and-offices/division-of-gaming-enforcement-home/"
    },
    106: {
        title: "Supreme Court Decision: Murphy v. NCAA (2018)",
        desc: "The historic ruling that struck down PASPA, effectively repealing the federal ban on sports betting.",
        url: "https://www.supremecourt.gov/opinions/17pdf/16-476_7k48.pdf"
    },

    // ── AUSTRALIA ───────────────────────────────────────
    107: {
        title: "Interactive Gambling Act 2001 (IGA)",
        desc: "The primary federal legislation regulating interactive gambling services in Australia.",
        url: "https://www.legislation.gov.au/Details/C2024C00142"
    },
    108: {
        title: "National Consumer Protection Framework for Online Wagering",
        desc: "Australian government initiative establishing national standards for online betting, including BetStop.",
        url: "https://www.dss.gov.au/our-responsibilities/families-and-children/programmes-policy/national-consumer-protection-framework-for-online-wagering"
    },
    109: {
        title: "Australian Institute of Health and Welfare (AIHW)",
        desc: "National data and reports on gambling behaviors, harms, and mental health impacts in Australia.",
        url: "https://www.aihw.gov.au/reports/alcohol/australian-national-drug-strategy-survey-2019/contents/table-of-contents"
    },

    // ── MALTA ───────────────────────────────────────────
    110: {
        title: "Malta Gaming Authority (MGA)",
        desc: "The single regulatory body for all gaming activities in Malta, a major EU licensing hub.",
        url: "https://www.mga.org.mt/"
    },
    111: {
        title: "Gaming Compliance and Enforcement Framework",
        desc: "MGA's regulatory framework outlining AML, player protection, and compliance requirements for licensees.",
        url: "https://www.mga.org.mt/gaming-compliance-and-enforcement-framework/"
    },
    112: {
        title: "European Gaming and Betting Association (EGBA) - Malta",
        desc: "Industry overview of Malta's role as a centralized hub for European online gaming operators.",
        url: "https://www.egba.eu/"
    },

    // ── ITALY ───────────────────────────────────────────
    113: {
        title: "Agenzia delle Dogane e dei Monopoli (ADM)",
        desc: "The Italian Customs and Monopolies Agency, responsible for licensing and regulating the Italian gaming market.",
        url: "https://www.adm.gov.it/portale/web/guest/home"
    },
    114: {
        title: "Decreto Dignità (Law 96/2018)",
        desc: "The Italian legislative decree that introduced a total ban on gambling advertising, sponsorships, and promotions.",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legge:2018-07-12;87"
    },
    115: {
        title: "Italian Online Gaming Market Report",
        desc: "Analysis of Italy's regulated market, tax structures, and the impact of the advertising ban.",
        url: "https://www.egba.eu/"
    },

    // ── GERMANY ─────────────────────────────────────────
    116: {
        title: "Interstate Treaty on Gambling 2021 (GlüStV 2021)",
        desc: "The federal treaty that established the legal framework for online sports betting, slots, and poker in Germany.",
        url: "https://www.ggl-spiew.de/"
    },
    117: {
        title: "Joint Gambling Authority of the States (GGL)",
        desc: "The independent federal authority responsible for licensing and enforcing gambling regulations in Germany.",
        url: "https://www.ggl-spiew.de/"
    },
    118: {
        title: "German Regulatory Framework Overview",
        desc: "Detailed analysis of the €1,000 deposit limits, 5-second rules, and OASIS self-exclusion system.",
        url: "https://www.egba.eu/"
    },

    // ── NETHERLANDS ─────────────────────────────────────
    119: {
        title: "Kansspelautoriteit (KSA)",
        desc: "The Netherlands Gambling Authority, responsible for regulating the legal remote gambling market.",
        url: "https://www.toezichtopkansspelen.nl/en"
    },
    120: {
        title: "Remote Gambling Act (Wet KOA)",
        desc: "The legislation that legalized and established the licensing regime for online gambling in the Netherlands.",
        url: "https://wetten.overheid.nl/BWBR0046046/2021-10-01"
    },
    121: {
        title: "Dutch Advertising Ban Implementation",
        desc: "Ministry of Justice and Security guidelines on the ban on untargeted online gambling advertising.",
        url: "https://www.government.nl/topics/gambling"
    },

    // ── CANADA ──────────────────────────────────────────
    122: {
        title: "iGaming Ontario (iGO)",
        desc: "The regulatory body responsible for conducting and managing the open, competitive online gaming market in Ontario.",
        url: "https://igamingontario.ca/en/"
    },
    123: {
        title: "AGCO Registrar's Standards for Internet Gaming",
        desc: "The Alcohol and Gaming Commission of Ontario's technical and player protection standards for operators.",
        url: "https://www.agco.ca/en/regulatory-requirements/registrar-standards-internet-gaming"
    },
    124: {
        title: "Provincial Lottery & Gaming Overview",
        desc: "Overview of the fragmented Canadian landscape outside Ontario, dominated by provincial crown corporations.",
        url: "https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/lotteries-gaming.html"
    },

    // ── SWEDEN ──────────────────────────────────────────
    125: {
        title: "Spelinspektionen (Swedish Gambling Authority)",
        desc: "The central administrative authority responsible for supervising the Swedish gambling market.",
        url: "https://www.spelinspektionen.se/en/"
    },
    126: {
        title: "Swedish Gambling Act (Spellag 2018:1138)",
        desc: "The legislation that re-regulated the Swedish market in 2019, ending the state monopoly and introducing licensing.",
        url: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/spellag-20181138_sfs-2018-1138"
    },
    127: {
        title: "Swedish Market Regulation & Bonus Restrictions",
        desc: "Analysis of the strict one-bonus-per-license rule and frictionless BankID login requirements.",
        url: "https://www.egba.eu/"
    },

    // ── BRAZIL ──────────────────────────────────────────
    128: {
        title: "Secretaria de Prêmios e Apostas (SPA)",
        desc: "The Brazilian Ministry of Finance's secretariat responsible for regulating the fixed-odds betting market.",
        url: "https://www.gov.br/fazenda/pt-br/assuntos/spa"
    },
    129: {
        title: "Law No. 14,790/2023",
        desc: "The federal law that officially established the regulation of fixed-odds betting in Brazil.",
        url: "https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2023/lei/l14790.htm"
    },
    130: {
        title: "Brazilian Ministry of Finance - Ordinance on Licensing",
        desc: "Technical requirements, taxation (12% on GGR), and mandatory CPF verification rules for operators.",
        url: "https://www.gov.br/fazenda/pt-br/assuntos/noticias/2024/ministerio-da-fazenda-divulga-novas-regras-para-apostas-esportivas"
    },
        // ── FRANCE ──────────────────────────────────────────
    131: {
        title: "Autorité Nationale des Jeux (ANJ)",
        desc: "The French national gaming authority responsible for regulating online sports betting, horse racing, and poker.",
        url: "https://www.anj.fr/"
    },
    132: {
        title: "French Gambling Law Framework",
        desc: "Overview of the legal distinction between licensed activities (poker, sports) and prohibited online casino.",
        url: "https://www.egba.eu/"
    },
    133: {
        title: "ANJ Blocking Orders & Enforcement",
        desc: "Details on how the ANJ blocks unlicensed offshore gambling sites and payment processors.",
        url: "https://www.anj.fr/blocking-orders"
    },

    // ── SPAIN ───────────────────────────────────────────
    134: {
        title: "Dirección General de Ordenación del Juego (DGOJ)",
        desc: "Spain's national gambling regulator, overseeing licensing and enforcement of online gaming.",
        url: "https://www.ordenacionjuego.es/en"
    },
    135: {
        title: "Royal Decree 958/2020 on Gambling Advertising",
        desc: "The landmark regulation that severely restricted gambling advertising, sponsorships, and influencer marketing in Spain.",
        url: "https://www.boe.es/buscar/act.php?id=BOE-A-2020-11108"
    },
    136: {
        title: "Spanish Market Report: Addiction & Regulation",
        desc: "Analysis of the impact of advertising restrictions and regional enforcement on the Spanish iGaming market.",
        url: "https://www.egba.eu/"
    },

    // ── JAPAN ───────────────────────────────────────────
    137: {
        title: "Japan Racing Association (JRA)",
        desc: "The official body governing horse racing and legal pari-mutuel betting in Japan.",
        url: "https://www.jra.go.jp/en/"
    },
    138: {
        title: "Integrated Resorts (IR) Implementation Act",
        desc: "The 2018 law that legalized physical casino resorts in designated zones, while maintaining the ban on online casino.",
        url: "https://www.casino.go.jp/en/"
    },
    139: {
        title: "Pachinko Industry Overview & Legal Status",
        desc: "Explanation of how Pachinko operates in a legal gray zone as a 'prize exchange' rather than direct gambling.",
        url: "https://www.npa.go.jp/"
    },

    // ── INDIA ───────────────────────────────────────────
    140: {
        title: "Public Gambling Act, 1867",
        desc: "The outdated federal law that forms the basis of gambling prohibition in India, with state-level exceptions.",
        url: "https://www.indiacode.nic.in/handle/123456789/1610"
    },
    141: {
        title: "Skill vs. Chance: Indian Court Precedents",
        desc: "Landmark Supreme Court and High Court rulings distinguishing legal 'skill games' (rummy, poker) from illegal 'chance games'.",
        url: "https://www.livelaw.in/"
    },
    142: {
        title: "Proposed Online Gaming Regulation Bill",
        desc: "Overview of the federal government's efforts to create a unified regulatory framework for online gaming.",
        url: "https://www.meity.gov.in/"
    },

    // ── SINGAPORE ───────────────────────────────────────
    143: {
        title: "Gambling Regulatory Authority of Singapore (GRA)",
        desc: "The national body responsible for regulating all gambling activities, including the Remote Gambling Act.",
        url: "https://www.gra.gov.sg/"
    },
    144: {
        title: "Remote Gambling Act 2014",
        desc: "The strict law that prohibits all remote gambling in Singapore, with exemptions only for Singapore Pools and the Turf Club.",
        url: "https://sso.agc.gov.sg/Act/RGA2014"
    },
    145: {
        title: "Singapore Pools: Social Mission & Community Impact",
        desc: "How the state-owned monopoly channels gambling profits into community, sports, and arts development.",
        url: "https://www.singaporepools.com.sg/en/about-us/Pages/default.aspx"
    },
        // ── SOUTH AFRICA ────────────────────────────────────
    146: {
        title: "National Gambling Board (NGB) of South Africa",
        desc: "The national regulatory body overseeing gambling standards and provincial licensing coordination.",
        url: "https://www.ngb.org.za/"
    },
    147: {
        title: "National Gambling Act 7 of 2004",
        desc: "The foundational legislation governing gambling in South Africa, distinguishing between legal sports betting and prohibited interactive casino.",
        url: "https://www.gov.za/documents/national-gambling-act"
    },
    148: {
        title: "South African Betting Industry Report",
        desc: "Market analysis on mobile betting adoption, provincial licensing, and the economic impact of regulated sports betting.",
        url: "https://www.egba.eu/"
    },

    // ── PHILIPPINES ─────────────────────────────────────
    149: {
        title: "PAGCOR Official Portal",
        desc: "The Philippine Amusement and Gaming Corporation, acting as regulator and state gaming operator.",
        url: "https://www.pagcor.ph/"
    },
    150: {
        title: "Executive Order Banning POGOs (2023)",
        desc: "Presidential directive ordering the immediate cessation of all Philippine Offshore Gaming Operator activities due to crime and trafficking concerns.",
        url: "https://pco.gov.ph/"
    },
    151: {
        title: "Philippine Gaming & IR Market Overview",
        desc: "Analysis of the transition from offshore hub to domestic-focused Integrated Resort and regulated online betting market.",
        url: "https://www.egba.eu/"
    },

    // ── CZECHIA ─────────────────────────────────────────
    152: {
        title: "Czech Ministry of Finance - Gambling Regulation",
        desc: "Official regulatory framework under the Gambling Act of 2016, detailing licensing, taxes, and player protection.",
        url: "https://www.financnisprava.cz/cs/financni-sprava/doklady/hazardni-hry"
    },
    153: {
        title: "Central Register of Excluded Persons (CRP)",
        desc: "Mandatory national self-exclusion database integrated across all licensed Czech gambling operators.",
        url: "https://www.registrzakazu.cz/"
    },
    154: {
        title: "Czech Gambling Market Compliance Report",
        desc: "Data on high channelization rates, advertising restrictions, and enforcement against unlicensed operators.",
        url: "https://www.egba.eu/"
    },

    // ── ARGENTINA ───────────────────────────────────────
    155: {
        title: "LOTBA (Lotería de la Ciudad de Buenos Aires)",
        desc: "The regulatory and licensing authority for online gambling in Argentina's capital district.",
        url: "https://www.lotbaba.com.ar/"
    },
    156: {
        title: "Argentine Provincial Gambling Legislation",
        desc: "Overview of the decentralized regulatory framework where each province maintains independent licensing and enforcement powers.",
        url: "https://www.argentina.gob.ar/"
    },
    157: {
        title: "Argentina iGaming Market Analysis",
        desc: "Report on cross-provincial licensing, digital payment integration, and the role of football in betting culture.",
        url: "https://www.egba.eu/"
    },

    // ── PORTUGAL ────────────────────────────────────────
    158: {
        title: "SRIJ (Serviço de Regulação e Inspeção de Jogos)",
        desc: "Portugal's national gambling regulator responsible for licensing, supervision, and enforcement.",
        url: "https://www.srij.turismodeportugal.pt/"
    },
    159: {
        title: "Decree-Law 66/2015 (Online Gambling Regulation)",
        desc: "The legislative framework that legalized and established the licensing regime for remote gambling in Portugal.",
        url: "https://dre.pt/web/guest/pesquisa"
    },
    160: {
        title: "SRIJ Advertising & Player Protection Guidelines",
        desc: "Detailed rules on marketing restrictions, mandatory reality checks, and self-exclusion registry enforcement.",
        url: "https://www.srij.turismodeportugal.pt/"
    },
        // ── DENMARK ─────────────────────────────────────────
    161: {
        title: "Spillemyndigheden (Danish Gambling Authority)",
        desc: "The national regulator overseeing licensing, enforcement, and player protection in Denmark.",
        url: "https://www.spillemyndigheden.dk/en"
    },
    162: {
        title: "Danish Gambling Act (2012) & Bonus Ban",
        desc: "Legislative framework that liberalized the market while implementing a strict ban on gambling bonuses and loyalty schemes.",
        url: "https://www.spillemyndigheden.dk/en/gambling-act"
    },
    163: {
        title: "ROFUS Self-Exclusion Register",
        desc: "Mandatory national database allowing players to voluntarily exclude themselves from all licensed gambling operators.",
        url: "https://rofus.dk/en/"
    },

    // ── UNITED ARAB EMIRATES ────────────────────────────
    164: {
        title: "UAE Federal Decree-Law No. 34 of 2021 (Cybercrimes)",
        desc: "The primary legal framework criminalizing online gambling and digital betting activities in the UAE.",
        url: "https://u.ae/en/about-the-uae/strategies-initiatives-and-awards/federal-legislation"
    },
    165: {
        title: "UAE Telecommunications Regulatory Authority (TDRA)",
        desc: "Overview of ISP-level blocking measures against unlicensed gambling domains and offshore betting platforms.",
        url: "https://www.tdra.gov.ae/"
    },
    166: {
        title: "Ras Al Khaimah Gaming License Framework",
        desc: "Analysis of the neighboring emirate's new physical casino licensing model and its impact on regional gambling dynamics.",
        url: "https://www.rakftz.ae/"
    },

    // ── ROMANIA ─────────────────────────────────────────
    167: {
        title: "ONJN (National Gambling Office of Romania)",
        desc: "The official regulatory body responsible for licensing, supervision, and enforcement of the Romanian gambling market.",
        url: "https://onjn.gov.ro/"
    },
    168: {
        title: "Government Emergency Ordinance 77/2009",
        desc: "The foundational legislation establishing the legal framework for online and land-based gambling licensing in Romania.",
        url: "https://legislatie.just.ro/Public/DetaliiDocument/112033"
    },
    169: {
        title: "Romanian Gambling Market Compliance Report",
        desc: "Data on high taxation, AML enforcement, and market consolidation among major licensed operators.",
        url: "https://www.egba.eu/"
    },

    // ── VIETNAM ─────────────────────────────────────────
    170: {
        title: "Vietnam Ministry of Finance - Gambling Regulations",
        desc: "Official guidelines on state monopoly operations, pilot betting programs, and cross-border enforcement.",
        url: "https://mof.gov.vn/"
    },
    171: {
        title: "Decree 06/2017/ND-CP on Conditional Business Lines",
        desc: "Legislation outlining restricted gambling activities, licensing requirements, and pilot program parameters.",
        url: "https://vanban.chinhphu.vn/"
    },
    172: {
        title: "Vietnam Cybersecurity & Illegal Betting Crackdown",
        desc: "Report on police operations targeting offshore betting platforms, crypto gambling, and underground syndicates.",
        url: "https://en.congan.com.vn/"
    },

    // ── MEXICO ──────────────────────────────────────────
    173: {
        title: "SEGOB / Dirección General de Juegos y Sorteos",
        desc: "The federal authority responsible for licensing and regulating gambling activities across Mexico.",
        url: "https://www.gob.mx/segob"
    },
    174: {
        title: "Federal Law of Games and Sweepstakes",
        desc: "The legal framework establishing federal licensing, state compliance, and operational standards for online gaming.",
        url: "https://www.diputados.gob.mx/"
    },
    175: {
        title: "Mexico iGaming Market Growth Report",
        desc: "Analysis of mobile adoption, Liga MX betting integration, and the expansion of licensed domestic operators.",
        url: "https://www.egba.eu/"
    },
        // ── FINLAND ─────────────────────────────────────────
    176: {
        title: "Veikkaus Official Portal",
        desc: "The Finnish state-owned monopoly operator overseeing all legal gambling activities in Finland.",
        url: "https://www.veikkaus.fi/en"
    },
    177: {
        title: "Finnish Gambling Market Liberalization Report",
        desc: "Analysis of the EU-driven transition from state monopoly to a multi-license regulatory framework expected in 2026/2027.",
        url: "https://www.egba.eu/"
    },
    178: {
        title: "National Police Board - Gambling Supervision",
        desc: "Official guidelines on enforcement, unlicensed operator monitoring, and player protection under the current monopoly system.",
        url: "https://poliisi.fi/en/"
    },

    // ── SAUDI ARABIA ────────────────────────────────────
    179: {
        title: "Saudi Anti-Cyber Crime Law",
        desc: "Federal legislation criminalizing online gambling, digital betting platforms, and unauthorized payment routing.",
        url: "https://www.moi.gov.sa/"
    },
    180: {
        title: "Communications, Space & Technology Commission (CST)",
        desc: "Overview of ISP-level domain blocking, DNS filtering, and digital enforcement against illegal gambling sites.",
        url: "https://cst.gov.sa/en/"
    },
    181: {
        title: "Vision 2030 & Entertainment Sector Policy",
        desc: "Government strategy outlining controlled entertainment expansion while maintaining strict prohibitions on gambling activities.",
        url: "https://www.vision2030.gov.sa/"
    },

    // ── NIGERIA ─────────────────────────────────────────
    182: {
        title: "National Lottery Regulatory Commission (NLRC)",
        desc: "Federal regulatory body overseeing licensing, compliance, and enforcement of sports betting and lottery operations.",
        url: "https://nlrc.gov.ng/"
    },
    183: {
        title: "Lagos State Lotteries and Gaming Authority (LSLGA)",
        desc: "State-level regulatory framework for betting operators, taxation, and consumer protection in Nigeria's commercial hub.",
        url: "https://lslga.gov.ng/"
    },
    184: {
        title: "Nigerian Betting Industry & Mobile Economy Report",
        desc: "Data on agency banking integration, football culture impact, and the economic role of digital sports betting.",
        url: "https://www.egba.eu/"
    },

    // ── COLOMBIA ────────────────────────────────────────
    185: {
        title: "Coljuegos Official Portal",
        desc: "The national regulatory authority responsible for licensing, supervision, and enforcement of Colombia's online gambling market.",
        url: "https://www.coljuegos.gov.co/"
    },
    186: {
        title: "Decree 1619 of 2018 (Online Gambling Regulation)",
        desc: "Foundational legislation establishing licensing requirements, technical standards, and player protection mandates for remote operators.",
        url: "https://www.coljuegos.gov.co/"
    },
    187: {
        title: "Colombia iGaming Market Compliance Report",
        desc: "Analysis of high channelization rates, AML enforcement, and the regional impact of Colombia's regulatory model.",
        url: "https://www.egba.eu/"
    },

    // ── CHILE ───────────────────────────────────────────
    188: {
        title: "Superintendencia de Casinos de Juego (SCJ)",
        desc: "Chilean regulatory body overseeing land-based casinos and monitoring emerging online gambling activities.",
        url: "https://www.scj.cl/"
    },
    189: {
        title: "Online Gaming Bill (Proyecto de Ley de Juegos de Azar)",
        desc: "Pending legislative framework aimed at licensing, taxing, and regulating online sports betting and casino operations.",
        url: "https://www.camara.cl/"
    },
    190: {
        title: "Chile Digital Gaming Market Analysis",
        desc: "Report on gray market dominance, mobile payment adoption, and the economic impact of pending regulatory reform.",
        url: "https://www.egba.eu/"
    },
        // ── POLAND ──────────────────────────────────────────
    191: {
        title: "Ministry of Finance - Gambling Register",
        desc: "Official list of legal betting operators and the register of self-excluded persons in Poland.",
        url: "https://www.mf.gov.pl/web/ministerstwo-finansow/gry-hazardowe"
    },
    192: {
        title: "Gambling Act of 2009 (Ustawa Hazardowa)",
        desc: "The primary legislation governing gambling in Poland, establishing the state monopoly on casino games.",
        url: "https://isap.sejm.gov.pl/"
    },
    193: {
        title: "Poland Betting Market Analysis",
        desc: "Report on the dominance of licensed sportsbooks and the enforcement against illegal offshore casinos.",
        url: "https://www.egba.eu/"
    },

    // ── ESTONIA ─────────────────────────────────────────
    194: {
        title: "Estonian Tax and Customs Board (EMTA)",
        desc: "The regulatory authority responsible for licensing and supervising gambling in Estonia.",
        url: "https://www.emta.gov.ee/en"
    },
    195: {
        title: "Gambling Act of Estonia",
        desc: "Legislative framework establishing the online gambling tax and licensing requirements.",
        url: "https://www.riigiteataja.ee/en/"
    },
    196: {
        title: "Estonia Digital Gambling Framework",
        desc: "Analysis of Estonia's digital-first approach to regulation and its impact on the local tech sector.",
        url: "https://www.egba.eu/"
    },

    // ── THAILAND ────────────────────────────────────────
    197: {
        title: "Gambling Act B.E. 2478 (1935)",
        desc: "The foundational law prohibiting most forms of gambling in Thailand, with few exceptions.",
        url: "https://www.krisdika.go.th/"
    },
    198: {
        title: "Anti-Money Laundering Office (AMLO)",
        desc: "Overview of AMLO's role in tracking illegal gambling funds and transnational crime syndicates.",
        url: "https://www.amlo.go.th/"
    },
    199: {
        title: "Thailand Entertainment Complex Proposal",
        desc: "Government discussions on legalizing casinos and integrated resorts to boost tourism and tax revenue.",
        url: "https://www.tatnews.org/"
    },

    // ── MALAYSIA ────────────────────────────────────────
    200: {
        title: "Betting Act 1953",
        desc: "The primary legislation regulating betting activities in Malaysia, distinguishing between licensed and illegal operations.",
        url: "https://www.agc.gov.my/"
    },
    201: {
        title: "Royal Malaysia Police - Gambling Crackdown",
        desc: "Official reports on police operations against illegal gambling syndicates and online betting rings.",
        url: "https://www.rmp.gov.my/"
    },
    202: {
        title: "Malaysia Gaming Market Dual-System Analysis",
        desc: "Study on the interplay between civil law licensing and Syariah prohibitions in the Malaysian gambling sector.",
        url: "https://www.egba.eu/"
    },

    // ── BELGIUM ─────────────────────────────────────────
    203: {
        title: "Belgian Gaming Commission",
        desc: "The national regulator overseeing licensing, player protection, and enforcement of the Gambling Act.",
        url: "https://www.gamingcommission.be/"
    },
    204: {
        title: "Royal Decree on Online Casino Ban (2023)",
        desc: "The legislative reform that banned online slots and casino games to reduce gambling addiction risks.",
        url: "https://www.ejustice.just.fgov.be/"
    },
    205: {
        title: "Belgium Sports Betting Market Report",
        desc: "Analysis of the remaining legal online betting sector following the casino ban and advertising restrictions.",
        url: "https://www.egba.eu/"
    },
};
