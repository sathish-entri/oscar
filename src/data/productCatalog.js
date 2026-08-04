export const COMPANY_INFO = {
  name: "OSCAR AUTO FLUX",
  legalName: "Oscar Auto Weld",
  tagline: "Agglomerated SAW Flux Specialists Since 2010",
  businessManager: "Sales & Technical Support",
  title: "Factory Operations Division",
  address: "S.F.No. 517/1, Veeranampalayam, Kangeyam, Tiruppur, Tamil Nadu - 638701, India",
  phone: "+91 8667753591",
  email: "info.oscarautoweld@gmail.com",
  certifications: ["ISO 9001:2015 QMS", "BHEL Approved", "L&T Approved", "ASME Sec II C 2023 Compliant"],
  stats: [
    { value: "14+", label: "Years Manufacturing Excellence" },
    { value: "7", label: "Specialized SAW Flux Grades" },
    { value: "100%", label: "ASME Sec II C Tested" },
    { value: "50,000+", label: "Tons Flux Supplied" }
  ]
};

export const FLUX_GRADES = [
  {
    id: "gr-1",
    name: "AUTOWELD Gr-1",
    type: "Acidic Aluminate-Rutile Type",
    awsClass: "AWS A5.17 / A5.23 F7A0-EL8",
    wirePairing: "EL8",
    basicityIndex: 0.8,
    grainSize: "0.5 - 2.0 mm",
    bulkDensity: "1.1 - 1.3 kg/L",
    consumptionRatio: "1 : 1.2 (Flux to Wire)",
    currentType: "AC / DC+ (up to 1000A)",
    badge: "Structural Leader",
    tagline: "High-Efficiency Acidic Agglomerated Flux for General Structural Fabrication",
    description: "AUTOWELD Gr-1 is an agglomerated acidic flux designed for high-speed single and multi-pass submerged arc welding of carbon steels. It offers outstanding arc stability, smooth weld bead appearance, and effortless slag detachment even in narrow deep grooves.",
    applications: [
      "Heavy structural steel columns & girders",
      "Bridge construction fabrications",
      "Automotive chassis & heavy equipment frames",
      "General machinery & plate fabrication"
    ],
    chemistry: {
      Al2O3: "42 - 48%",
      SiO2: "14 - 18%",
      TiO2: "18 - 22%",
      CaF2: "8 - 12%",
      MnO: "4 - 6%",
      MgO: "3 - 5%"
    },
    mechanicalProperties: {
      tensileStrength: "520 - 580 MPa",
      yieldStrength: "450 - 500 MPa",
      elongation: "26 - 30%",
      charpyImpact: "38 Joules @ 0°C",
      diffusibleHydrogen: "< 8 mL / 100g weld metal"
    },
    rebaking: "300°C - 350°C for 2 hours before welding if exposed to humidity."
  },
  {
    id: "gr-2",
    name: "AUTOWELD Gr-2",
    type: "Neutral Batch-Certified Type",
    awsClass: "AWS A5.17 F7A2-EM12K",
    wirePairing: "EM12K",
    basicityIndex: 1.0,
    grainSize: "0.4 - 1.6 mm",
    bulkDensity: "1.2 - 1.4 kg/L",
    consumptionRatio: "1 : 1.1 (Flux to Wire)",
    currentType: "AC / DC+ (up to 1200A)",
    badge: "Batch Certified",
    tagline: "Neutral Agglomerated Flux with Balanced Chemistry for Pressure Vessels",
    description: "AUTOWELD Gr-2 is a versatile neutral agglomerated flux engineered for multi-run welding of structural steel and pressure vessel plates. It maintains consistent weld metal chemistry across varying voltage levels and delivers superior sub-zero impact toughness.",
    applications: [
      "Unfired pressure vessels & tanks",
      "Heavy infrastructure & structural steel",
      "Shipbuilding hull structures & decks",
      "Batch-certified critical engineering projects"
    ],
    chemistry: {
      Al2O3: "32 - 38%",
      SiO2: "13 - 17%",
      CaO: "8 - 12%",
      MgO: "7 - 10%",
      TiO2: "8 - 12%",
      CaF2: "8 - 12%",
      MnO: "8 - 12%"
    },
    mechanicalProperties: {
      tensileStrength: "540 - 600 MPa",
      yieldStrength: "460 - 510 MPa",
      elongation: "28 - 32%",
      charpyImpact: "45 Joules @ -20°C",
      diffusibleHydrogen: "< 6 mL / 100g weld metal"
    },
    rebaking: "300°C - 350°C for 2 hours before welding."
  },
  {
    id: "gr-3",
    name: "AUTOWELD Gr-3",
    type: "High-Speed Neutral Aluminate-Rutile",
    awsClass: "AWS A5.17 F7A2-EM12K / F7A0-EL8",
    wirePairing: "EL8 / EM12K",
    basicityIndex: 0.9,
    grainSize: "0.4 - 1.2 mm",
    bulkDensity: "1.1 - 1.3 kg/L",
    consumptionRatio: "1 : 1.2 (Flux to Wire)",
    currentType: "AC / DC+ (High Speed)",
    badge: "High Speed Specialist",
    tagline: "Ultra Fast Longitudinal Seam Welding Flux for PEB & Tubular Structures",
    description: "AUTOWELD Gr-3 is formulated specifically for high travel speed submerged arc welding (exceeding 1.5 meters per minute). It produces a flat, ripple-free weld profile without undercut or surface porosity in longitudinal seams.",
    applications: [
      "Pre-Engineered Building (PEB) web and flange seams",
      "Octagonal & tubular lighting pole fabrication",
      "High-speed H-beam & I-beam automated lines",
      "Light-to-medium wall pipe seam welding"
    ],
    chemistry: {
      Al2O3: "40 - 46%",
      SiO2: "15 - 19%",
      TiO2: "16 - 20%",
      CaF2: "10 - 14%",
      MnO: "5 - 8%",
      MgO: "4 - 6%"
    },
    mechanicalProperties: {
      tensileStrength: "530 - 590 MPa",
      yieldStrength: "450 - 500 MPa",
      elongation: "27 - 31%",
      charpyImpact: "40 Joules @ -20°C (with EM12K)",
      diffusibleHydrogen: "< 7 mL / 100g weld metal"
    },
    rebaking: "300°C - 350°C for 2 hours before welding."
  },
  {
    id: "gr-4",
    name: "AUTOWELD Gr-4",
    type: "Basic Low-Hydrogen High-Toughness",
    awsClass: "AWS A5.17 / A5.23 F8A2-EA2 / F7P2-EM12K",
    wirePairing: "EM12K / EA2",
    basicityIndex: 1.7,
    grainSize: "0.3 - 2.0 mm",
    bulkDensity: "1.0 - 1.2 kg/L",
    consumptionRatio: "1 : 1.0 (Flux to Wire)",
    currentType: "DC+ (AC compatible up to 1000A)",
    badge: "Windmill & Boiler Grade",
    tagline: "Low Diffusible Hydrogen Basic Flux for Windmill Towers & Boilers (-40°C Impact)",
    description: "AUTOWELD Gr-4 is a fluoride-basic agglomerated flux engineered for critical heavy wall pressure vessels, boilers, and wind turbine towers. It guarantees ultra-low diffusible hydrogen (<5 mL/100g) and exceptional impact toughness down to -40°C.",
    applications: [
      "Windmill turbine tubular steel tower sections",
      "High-pressure steam boiler drums & headers",
      "Offshore oil platform jacket structures",
      "Heavy thickness pressure vessels & submarines"
    ],
    chemistry: {
      SiO2_TiO2: "20 - 30%",
      CaO_MgO: "25 - 35%",
      Al2O3_MnO: "20 - 30%",
      CaF2: "15 - 25%"
    },
    mechanicalProperties: {
      tensileStrength: "560 - 630 MPa",
      yieldStrength: "470 - 530 MPa",
      elongation: "24 - 28%",
      charpyImpact: "> 60 Joules @ -40°C",
      diffusibleHydrogen: "< 4.0 mL / 100g weld metal (H4 compliant)"
    },
    rebaking: "350°C - 400°C for 2 hours immediately prior to welding."
  },
  {
    id: "gr-5",
    name: "AUTOWELD Gr-5",
    type: "Acidic Fine-Grain LPG Cylinder Type",
    awsClass: "AWS A5.17 F6A0-EL8",
    wirePairing: "EL8",
    basicityIndex: 0.7,
    grainSize: "0.2 - 1.0 mm (Fine Mesh)",
    bulkDensity: "1.2 - 1.4 kg/L",
    consumptionRatio: "1 : 1.3 (Flux to Wire)",
    currentType: "AC / DC+",
    badge: "LPG Cylinder Expert",
    tagline: "Fine-Grained Low-Melting Flux for LPG Cylinders & Thin Sheet Seams",
    description: "AUTOWELD Gr-5 features a fine granulometry (0.2–1.0 mm) specially formulated for circumferential and longitudinal seam welding of LPG cylinders, compressor shells, and thin-walled vessels (2–4mm thickness) with effortless slag detachment on hot beads.",
    applications: [
      "Domestic & industrial LPG gas cylinders",
      "Hermetic compressor shells & receivers",
      "Thin-walled liquid storage containers",
      "High-speed light gauge circumferential seams"
    ],
    chemistry: {
      Al2O3: "45 - 52%",
      SiO2: "16 - 20%",
      TiO2: "18 - 22%",
      CaF2: "6 - 10%",
      MnO: "3 - 5%"
    },
    mechanicalProperties: {
      tensileStrength: "480 - 540 MPa",
      yieldStrength: "400 - 460 MPa",
      elongation: "25 - 29%",
      charpyImpact: "30 Joules @ 0°C",
      diffusibleHydrogen: "< 8 mL / 100g weld metal"
    },
    rebaking: "300°C - 350°C for 2 hours before welding."
  },
  {
    id: "gr-6",
    name: "AUTOWELD Gr-6",
    type: "High-Basic Cladding & Hardfacing Type",
    awsClass: "AWS A5.23 F8A4-ENi1 / F9A2-EF3",
    wirePairing: "Alloy Wires / SS 308L, 309L, 410 / Inconel",
    basicityIndex: 2.8,
    grainSize: "0.3 - 1.6 mm",
    bulkDensity: "1.0 - 1.2 kg/L",
    consumptionRatio: "1 : 0.9 (Flux to Wire)",
    currentType: "DC+",
    badge: "Cladding & Hardfacing",
    tagline: "High-Basic Neutral Flux for Stainless Steel & Corrosion-Resistant Alloy Cladding",
    description: "AUTOWELD Gr-6 is a metallurgical high-basic flux designed for corrosion-resistant overlay cladding and hardfacing. It limits iron dilution (<15% single pass), ensures high alloy element recovery (Cr, Ni, Mo), and yields crack-free stainless overlay deposits.",
    applications: [
      "Stainless steel internal cladding of vessel nozzles & shells",
      "Steel mill roll hardfacing & reconditioning",
      "Valve body corrosion-resistant alloy overlay",
      "Duplex stainless steel & nickel alloy joining"
    ],
    chemistry: {
      CaF2: "25 - 35%",
      CaO_MgO: "30 - 40%",
      Al2O3: "15 - 25%",
      SiO2: "< 15%"
    },
    mechanicalProperties: {
      tensileStrength: "600 - 720 MPa (depending on wire)",
      yieldStrength: "500 - 580 MPa",
      elongation: "22 - 26%",
      charpyImpact: "> 70 Joules @ -40°C",
      dilution: "< 15% single layer overlay"
    },
    rebaking: "350°C - 400°C for 2 hours before welding."
  },
  {
    id: "gr-7SP",
    name: "AUTOWELD Gr-7SP",
    type: "Neutral High-Speed Spiral Pipe Type",
    awsClass: "AWS A5.17 F7A2-EM12K",
    wirePairing: "EM12K",
    basicityIndex: 0.95,
    grainSize: "0.4 - 1.4 mm",
    bulkDensity: "1.1 - 1.3 kg/L",
    consumptionRatio: "1 : 1.2 (Flux to Wire)",
    currentType: "AC / DC+ (Multi-wire tandem compatible)",
    badge: "Spiral Pipe Specialist",
    tagline: "Tandem SAW Flux for High-Speed Spiral Water & Gas Transmission Pipes",
    description: "AUTOWELD Gr-7SP is engineered for multi-wire tandem submerged arc welding in continuous spiral pipe mills. It maintains rock-solid arc stability during simultaneous internal and external seam welding at elevated speeds.",
    applications: [
      "Helical / spiral seam water pipeline manufacturing",
      "Oil & gas transmission linepipe (API 5L grades)",
      "Piling pipes & heavy structural casing tubes",
      "Tandem double-wire & triple-wire SAW setups"
    ],
    chemistry: {
      Al2O3: "36 - 42%",
      SiO2: "14 - 18%",
      CaO_MgO: "16 - 20%",
      TiO2: "12 - 16%",
      CaF2: "10 - 14%"
    },
    mechanicalProperties: {
      tensileStrength: "550 - 610 MPa",
      yieldStrength: "470 - 520 MPa",
      elongation: "27 - 31%",
      charpyImpact: "48 Joules @ -20°C",
      diffusibleHydrogen: "< 6 mL / 100g weld metal"
    },
    rebaking: "300°C - 350°C for 2 hours before welding."
  }
];

export const INDUSTRIES = [
  {
    id: "structural",
    title: "Heavy Structural & Infrastructure",
    description: "Built-up girders, columns, and bridge beams welded at maximum deposition rates.",
    recommendedGrades: ["AUTOWELD Gr-1", "AUTOWELD Gr-3"],
    icon: "Building2"
  },
  {
    id: "pressure-vessels",
    title: "Pressure Vessels & Boilers",
    description: "ASME code-stamped steam drums, heat exchangers, and chemical reactors.",
    recommendedGrades: ["AUTOWELD Gr-2", "AUTOWELD Gr-4"],
    icon: "Container"
  },
  {
    id: "windmill",
    title: "Windmill Tower Generation",
    description: "Thick section tubular steel towers with low-temperature impact requirements down to -40°C.",
    recommendedGrades: ["AUTOWELD Gr-4"],
    icon: "Wind"
  },
  {
    id: "peb-poles",
    title: "PEB & Tubular Lighting Poles",
    description: "High-speed longitudinal seam welding on continuous automated production lines.",
    recommendedGrades: ["AUTOWELD Gr-3"],
    icon: "Zap"
  },
  {
    id: "lpg",
    title: "LPG Gas Cylinders",
    description: "Precision circumferential welds on thin sheet steel with smooth bead profile.",
    recommendedGrades: ["AUTOWELD Gr-5"],
    icon: "Flame"
  },
  {
    id: "cladding",
    title: "Hardfacing & Alloy Overlay",
    description: "Corrosion-resistant stainless steel and nickel alloy overlay for marine & valve parts.",
    recommendedGrades: ["AUTOWELD Gr-6"],
    icon: "ShieldCheck"
  },
  {
    id: "spiral-pipe",
    title: "Spiral Water & Line Pipes",
    description: "Tandem multi-wire SAW welding for cross-country water and energy transmission.",
    recommendedGrades: ["AUTOWELD Gr-7SP"],
    icon: "GitCommit"
  }
];
