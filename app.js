// EQUA - Equal Medicine, Explained
// 10-Section Interactive Controller & Comprehensive Medicine Database

document.addEventListener('DOMContentLoaded', () => {
  initMedicineChecker();
  initEquaCardMockup();
  initDoctorNote();
  initDoctorEvidence();
  initFaqAccordion();
  initCallMeBackForm();
  if (typeof initBoth3D === 'function') initBoth3D();
});

// ==========================================
// 1. EXTENSIVE MEDICINE DATABASE (Proof in Action)
// ==========================================
const MEDICINES_DATA = [
  // --- BLOOD PRESSURE / HYPERTENSION ---
  {
    id: 'telmisartan-40',
    brandName: 'Telma 40',
    brandCompany: 'Glenmark Pharmaceuticals',
    saltName: 'Telmisartan IP',
    strength: '40 mg',
    form: 'Tablet',
    category: 'blood-pressure',
    categoryLabel: 'Blood Pressure',
    plainMeaning: 'Relaxes smooth muscle in blood vessels so blood flows with normal, steady resistance.',
    approvalLicense: 'Mfg Lic: G/25/1842 (CDSCO Regulated)',
    plantLocation: 'Licensed WHO-GMP Plant 04, Baddi',
    batchNumber: 'EQ26-0881',
    expiry: '09/2028',
    brandPrice: '₹142 / 10 tablets',
    equaPrice: '₹28 / 10 tablets',
    bioequivalenceProof: 'Dissolution profile matches originator within ±2.8% in testing'
  },
  {
    id: 'amlodipine-5',
    brandName: 'Amlong 5 / Norvasc 5',
    brandCompany: 'Micro Labs / Pfizer',
    saltName: 'Amlodipine Besylate IP',
    strength: '5 mg',
    form: 'Tablet',
    category: 'blood-pressure',
    categoryLabel: 'Blood Pressure',
    plainMeaning: 'Relaxes arterial walls to lower resistance against the heart muscle.',
    approvalLicense: 'Mfg Lic: KTK/25/488 (CDSCO Regulated)',
    plantLocation: 'Licensed WHO-GMP Plant, Bengaluru',
    batchNumber: 'EQ26-0931',
    expiry: '10/2028',
    brandPrice: '₹78 / 15 tablets',
    equaPrice: '₹16 / 15 tablets',
    bioequivalenceProof: '100% molecular equivalence verified under Indian Pharmacopoeia standards'
  },
  {
    id: 'losartan-50',
    brandName: 'Losar 50 / Cozaar 50',
    brandCompany: 'Unichem / Organon',
    saltName: 'Losartan Potassium IP',
    strength: '50 mg',
    form: 'Film-coated Tablet',
    category: 'blood-pressure',
    categoryLabel: 'Blood Pressure',
    plainMeaning: 'Blocks angiotensin receptors to keep chronic blood pressure relaxed and protect kidneys.',
    approvalLicense: 'Mfg Lic: G/28/1420 (CDSCO Regulated)',
    plantLocation: 'Licensed WHO-GMP Plant, Ankleshwar',
    batchNumber: 'EQ26-0618',
    expiry: '08/2028',
    brandPrice: '₹120 / 10 tablets',
    equaPrice: '₹24 / 10 tablets',
    bioequivalenceProof: 'Identical receptor affinity curve and dissolution kinetics'
  },
  {
    id: 'ramipril-5',
    brandName: 'Cardace 5 / Altace 5',
    brandCompany: 'Sanofi',
    saltName: 'Ramipril IP',
    strength: '5 mg',
    form: 'Capsule-shaped Tablet',
    category: 'blood-pressure',
    categoryLabel: 'Blood Pressure',
    plainMeaning: 'Inhibits ACE enzyme to widen blood vessels and relieve strain on cardiac pumping.',
    approvalLicense: 'Mfg Lic: MH/102/411 (CDSCO Regulated)',
    plantLocation: 'Licensed WHO-GMP Plant, Tarapur',
    batchNumber: 'EQ26-0745',
    expiry: '11/2028',
    brandPrice: '₹158 / 15 tablets',
    equaPrice: '₹34 / 15 tablets',
    bioequivalenceProof: 'Active metabolite absorption profile verified against originator'
  },
  {
    id: 'olmesartan-20',
    brandName: 'Olmy 20 / Benicar 20',
    brandCompany: 'Zydus / Daiichi Sankyo',
    saltName: 'Olmesartan Medoxomil IP',
    strength: '20 mg',
    form: 'Film-coated Tablet',
    category: 'blood-pressure',
    categoryLabel: 'Blood Pressure',
    plainMeaning: 'Provides steady 24-hour dilation of peripheral arteries for stable morning readings.',
    approvalLicense: 'Mfg Lic: G/25/1602 (CDSCO Regulated)',
    plantLocation: 'Licensed WHO-GMP Plant, Ahmedabad',
    batchNumber: 'EQ26-1022',
    expiry: '12/2028',
    brandPrice: '₹185 / 10 tablets',
    equaPrice: '₹38 / 10 tablets',
    bioequivalenceProof: '90% CI for Cmax and AUC strictly within regulatory envelope'
  },

  // --- DIABETES & GLUCOSE REGULATION ---
  {
    id: 'metformin-500',
    brandName: 'Glycomet 500 SR / Glucophage',
    brandCompany: 'USV / Merck',
    saltName: 'Metformin Hydrochloride IP (Sustained Release)',
    strength: '500 mg',
    form: 'Sustained Release Tablet',
    category: 'diabetes',
    categoryLabel: 'Diabetes',
    plainMeaning: 'Helps cells take in glucose from your blood and reduces excess glucose made by the liver.',
    approvalLicense: 'Mfg Lic: M/732/2019 (CDSCO Regulated)',
    plantLocation: 'Licensed WHO-GMP Facility, Haridwar',
    batchNumber: 'EQ26-1140',
    expiry: '11/2028',
    brandPrice: '₹85 / 10 tablets',
    equaPrice: '₹18 / 10 tablets',
    bioequivalenceProof: '12-hour sustained dissolution rate statistically identical to originator'
  },
  {
    id: 'glimepiride-2',
    brandName: 'Amaryl 2 / Glimestar 2',
    brandCompany: 'Sanofi / Mankind',
    saltName: 'Glimepiride IP',
    strength: '2 mg',
    form: 'Tablet',
    category: 'diabetes',
    categoryLabel: 'Diabetes',
    plainMeaning: 'Prompts pancreatic beta-cells to release natural insulin during mealtimes.',
    approvalLicense: 'Mfg Lic: HP/09/840 (CDSCO Regulated)',
    plantLocation: 'Licensed WHO-GMP Plant, Solan',
    batchNumber: 'EQ26-0319',
    expiry: '07/2028',
    brandPrice: '₹110 / 10 tablets',
    equaPrice: '₹22 / 10 tablets',
    bioequivalenceProof: 'Dissolution profile matches originator within ±2.5%'
  },
  {
    id: 'dapagliflozin-10',
    brandName: 'Forxiga 10 / Oxra 10',
    brandCompany: 'AstraZeneca / Sun Pharma',
    saltName: 'Dapagliflozin Propanediol Monohydrate',
    strength: '10 mg',
    form: 'Film-coated Tablet',
    category: 'diabetes',
    categoryLabel: 'Diabetes',
    plainMeaning: 'Filters excess blood sugar out through urine while protecting heart and kidney function.',
    approvalLicense: 'Mfg Lic: G/28/1932 (CDSCO Regulated)',
    plantLocation: 'Licensed WHO-GMP Plant, Vadodara',
    batchNumber: 'EQ26-0554',
    expiry: '09/2028',
    brandPrice: '₹580 / 14 tablets',
    equaPrice: '₹95 / 14 tablets',
    bioequivalenceProof: 'Bioequivalence established in healthy adult volunteers per CDSCO rules'
  },
  {
    id: 'teneligliptin-20',
    brandName: 'Zita Plus 20 / Tenglyn 20',
    brandCompany: 'Glenmark / Zydus',
    saltName: 'Teneligliptin Hydrobromide Hydrate',
    strength: '20 mg',
    form: 'Tablet',
    category: 'diabetes',
    categoryLabel: 'Diabetes',
    plainMeaning: 'Inhibits DPP-4 enzyme to prolong active incretin hormone levels after eating.',
    approvalLicense: 'Mfg Lic: MH/102/890 (CDSCO Regulated)',
    plantLocation: 'Licensed WHO-GMP Plant, Aurangabad',
    batchNumber: 'EQ26-0812',
    expiry: '10/2028',
    brandPrice: '₹165 / 15 tablets',
    equaPrice: '₹36 / 15 tablets',
    bioequivalenceProof: 'Enzyme inhibition curve aligns with standard formulation'
  },
  {
    id: 'vildagliptin-50',
    brandName: 'Galvus 50 / Jalra 50',
    brandCompany: 'Novartis / USV',
    saltName: 'Vildagliptin',
    strength: '50 mg',
    form: 'Tablet',
    category: 'diabetes',
    categoryLabel: 'Diabetes',
    plainMeaning: 'Supports physiological pancreatic release of insulin without causing hypoglycemia spikes.',
    approvalLicense: 'Mfg Lic: KTK/25/711 (CDSCO Regulated)',
    plantLocation: 'Licensed WHO-GMP Facility, Bengaluru',
    batchNumber: 'EQ26-0904',
    expiry: '12/2028',
    brandPrice: '₹320 / 14 tablets',
    equaPrice: '₹68 / 14 tablets',
    bioequivalenceProof: 'Dissolution > 85% within 15 minutes in standard buffer test'
  },

  // --- CHOLESTEROL & CARDIAC HEALTH ---
  {
    id: 'atorvastatin-10',
    brandName: 'Lipitor 10 / Atorva 10',
    brandCompany: 'Pfizer / Zydus',
    saltName: 'Atorvastatin Calcium IP',
    strength: '10 mg',
    form: 'Film-coated Tablet',
    category: 'cholesterol',
    categoryLabel: 'Cholesterol & Heart',
    plainMeaning: 'Slows down the HMG-CoA enzyme in your liver that synthesizes LDL cholesterol.',
    approvalLicense: 'Mfg Lic: G/28/1105 (CDSCO Regulated)',
    plantLocation: 'Licensed WHO-GMP Facility, Ahmedabad',
    batchNumber: 'EQ26-0422',
    expiry: '07/2028',
    brandPrice: '₹165 / 10 tablets',
    equaPrice: '₹32 / 10 tablets',
    bioequivalenceProof: '90% confidence interval for plasma absorption strictly within 80–125%'
  },
  {
    id: 'rosuvastatin-10',
    brandName: 'Rosuvas 10 / Crestor 10',
    brandCompany: 'Sun Pharma / AstraZeneca',
    saltName: 'Rosuvastatin Calcium IP',
    strength: '10 mg',
    form: 'Film-coated Tablet',
    category: 'cholesterol',
    categoryLabel: 'Cholesterol & Heart',
    plainMeaning: 'Strongly reduces LDL bad cholesterol and calms inflammation inside coronary arteries.',
    approvalLicense: 'Mfg Lic: G/25/2011 (CDSCO Regulated)',
    plantLocation: 'Licensed WHO-GMP Plant, Baddi',
    batchNumber: 'EQ26-1188',
    expiry: '11/2028',
    brandPrice: '₹240 / 10 tablets',
    equaPrice: '₹44 / 10 tablets',
    bioequivalenceProof: 'In-vitro dissolution profiles identical across pH 1.2, 4.5, and 6.8'
  },
  {
    id: 'clopidogrel-75',
    brandName: 'Deplatt 75 / Plavix 75',
    brandCompany: 'Torrent / Sanofi',
    saltName: 'Clopidogrel Bisulphate IP',
    strength: '75 mg',
    form: 'Tablet',
    category: 'cholesterol',
    categoryLabel: 'Cholesterol & Heart',
    plainMeaning: 'Prevents blood platelets from clustering together to avoid clot formation in arteries.',
    approvalLicense: 'Mfg Lic: G/25/940 (CDSCO Regulated)',
    plantLocation: 'Licensed WHO-GMP Plant, Indrad',
    batchNumber: 'EQ26-0271',
    expiry: '06/2028',
    brandPrice: '₹190 / 15 tablets',
    equaPrice: '₹38 / 15 tablets',
    bioequivalenceProof: 'Platelet aggregation inhibition statistically identical to originator'
  },
  {
    id: 'aspirin-75',
    brandName: 'Ecosprin 75',
    brandCompany: 'USV',
    saltName: 'Aspirin IP (Enteric Coated)',
    strength: '75 mg',
    form: 'Gastro-resistant Tablet',
    category: 'cholesterol',
    categoryLabel: 'Cholesterol & Heart',
    plainMeaning: 'Low-dose blood thinner with enteric protection to safeguard delicate stomach lining.',
    approvalLicense: 'Mfg Lic: MH/102/330 (CDSCO Regulated)',
    plantLocation: 'Licensed Facility, Mumbai',
    batchNumber: 'EQ26-0155',
    expiry: '05/2028',
    brandPrice: '₹18 / 14 tablets',
    equaPrice: '₹6 / 14 tablets',
    bioequivalenceProof: 'Enteric barrier passes 2-hour 0.1N HCl gastric resistance testing'
  },

  // --- ACIDITY & DIGESTION ---
  {
    id: 'pantoprazole-40',
    brandName: 'Pan 40 / Pantocid 40',
    brandCompany: 'Alkem / Sun Pharma',
    saltName: 'Pantoprazole Sodium IP (Gastro-Resistant)',
    strength: '40 mg',
    form: 'Enteric Coated Tablet',
    category: 'acidity',
    categoryLabel: 'Acidity & Digestion',
    plainMeaning: 'Temporarily switches off stomach proton pumps to let irritated lining heal and stop reflux.',
    approvalLicense: 'Mfg Lic: HP/09/521 (CDSCO Regulated)',
    plantLocation: 'Licensed WHO-GMP Plant, Paonta Sahib',
    batchNumber: 'EQ26-0715',
    expiry: '08/2028',
    brandPrice: '₹155 / 10 tablets',
    equaPrice: '₹32 / 10 tablets',
    bioequivalenceProof: 'Enteric coating resists gastric acid for 2 hours, releasing completely in intestinal pH'
  },
  {
    id: 'rabeprazole-20',
    brandName: 'Razo 20 / Aciphex 20',
    brandCompany: 'Dr. Reddy’s / Eisai',
    saltName: 'Rabeprazole Sodium IP',
    strength: '20 mg',
    form: 'Enteric Coated Tablet',
    category: 'acidity',
    categoryLabel: 'Acidity & Digestion',
    plainMeaning: 'Fast-acting suppression of stomach acid secretion for heartburn and ulcer healing.',
    approvalLicense: 'Mfg Lic: TS/25/619 (CDSCO Regulated)',
    plantLocation: 'Licensed WHO-GMP Plant, Hyderabad',
    batchNumber: 'EQ26-0830',
    expiry: '09/2028',
    brandPrice: '₹180 / 15 tablets',
    equaPrice: '₹36 / 15 tablets',
    bioequivalenceProof: 'Rapid intestinal release verified in dissolution profiling'
  },
  {
    id: 'omeprazole-20',
    brandName: 'Omez 20 / Prilosec 20',
    brandCompany: 'Dr. Reddy’s / Procter & Gamble',
    saltName: 'Omeprazole IP',
    strength: '20 mg',
    form: 'Capsule (Pellets)',
    category: 'acidity',
    categoryLabel: 'Acidity & Digestion',
    plainMeaning: 'Classic proton-pump inhibitor reducing acid production in gastritis and sour belching.',
    approvalLicense: 'Mfg Lic: TS/25/480 (CDSCO Regulated)',
    plantLocation: 'Licensed WHO-GMP Plant, Hyderabad',
    batchNumber: 'EQ26-0390',
    expiry: '07/2028',
    brandPrice: '₹75 / 10 capsules',
    equaPrice: '₹16 / 10 capsules',
    bioequivalenceProof: 'Pellet dissolution curve meets Indian Pharmacopoeia standard'
  },

  // --- PAIN & FEVER RELIEF ---
  {
    id: 'paracetamol-650',
    brandName: 'Dolo 650 / Calpol 650',
    brandCompany: 'Micro Labs / GSK',
    saltName: 'Paracetamol IP',
    strength: '650 mg',
    form: 'Tablet',
    category: 'pain',
    categoryLabel: 'Pain & Fever Relief',
    plainMeaning: 'Calms temperature signals in the brain and eases mild to moderate body aches.',
    approvalLicense: 'Mfg Lic: G/25/994 (CDSCO Regulated)',
    plantLocation: 'Licensed Facility, Ankleshwar',
    batchNumber: 'EQ26-1502',
    expiry: '12/2028',
    brandPrice: '₹34 / 15 tablets',
    equaPrice: '₹12 / 15 tablets',
    bioequivalenceProof: 'Pure API chemical assay > 99.8% verified per IP/BP standards'
  },
  {
    id: 'ibuprofen-400',
    brandName: 'Brufen 400',
    brandCompany: 'Abbott',
    saltName: 'Ibuprofen IP',
    strength: '400 mg',
    form: 'Film-coated Tablet',
    category: 'pain',
    categoryLabel: 'Pain & Fever Relief',
    plainMeaning: 'Non-steroidal anti-inflammatory reducing swelling, dental pain, and joint stiffness.',
    approvalLicense: 'Mfg Lic: HP/09/310 (CDSCO Regulated)',
    plantLocation: 'Licensed WHO-GMP Plant, Baddi',
    batchNumber: 'EQ26-0640',
    expiry: '08/2028',
    brandPrice: '₹42 / 15 tablets',
    equaPrice: '₹14 / 15 tablets',
    bioequivalenceProof: 'Complete dissolution within 30 minutes in neutral phosphate buffer'
  },
  {
    id: 'aceclofenac-paracetamol',
    brandName: 'Zerodol-P / Hifenac-P',
    brandCompany: 'Ipca / Intas',
    saltName: 'Aceclofenac IP (100mg) + Paracetamol IP (325mg)',
    strength: '100 mg + 325 mg',
    form: 'Tablet',
    category: 'pain',
    categoryLabel: 'Pain & Fever Relief',
    plainMeaning: 'Combination relief addressing muscular inflammation and acute pain together.',
    approvalLicense: 'Mfg Lic: MP/25/112 (CDSCO Regulated)',
    plantLocation: 'Licensed WHO-GMP Plant, Ratlam',
    batchNumber: 'EQ26-0925',
    expiry: '10/2028',
    brandPrice: '₹115 / 10 tablets',
    equaPrice: '₹26 / 10 tablets',
    bioequivalenceProof: 'Both active ingredients dissolve synchronously in compliance with dual assay'
  },

  // --- ALLERGY, RESPIRATORY & THYROID ---
  {
    id: 'montelukast-levocetirizine',
    brandName: 'Montair-LC / Telekast-L',
    brandCompany: 'Cipla / Lupin',
    saltName: 'Montelukast Sodium (10mg) + Levocetirizine (5mg)',
    strength: '10 mg + 5 mg',
    form: 'Tablet',
    category: 'respiratory',
    categoryLabel: 'Allergy & Breathing',
    plainMeaning: 'Opens bronchial airways and stops histamine-induced sneezing and runny nose.',
    approvalLicense: 'Mfg Lic: GA/28/402 (CDSCO Regulated)',
    plantLocation: 'Licensed WHO-GMP Facility, Verna, Goa',
    batchNumber: 'EQ26-0770',
    expiry: '09/2028',
    brandPrice: '₹290 / 10 tablets',
    equaPrice: '₹58 / 10 tablets',
    bioequivalenceProof: 'Receptor antagonism and bioequivalence verified in healthy volunteers'
  },
  {
    id: 'levocetirizine-5',
    brandName: 'Levocet 5 / Xyzal 5',
    brandCompany: 'Hetero / UCB',
    saltName: 'Levocetirizine Dihydrochloride IP',
    strength: '5 mg',
    form: 'Film-coated Tablet',
    category: 'respiratory',
    categoryLabel: 'Allergy & Breathing',
    plainMeaning: 'Blocks histamine H1 receptors to soothe pollen, dust, and skin allergy itching.',
    approvalLicense: 'Mfg Lic: TS/25/890 (CDSCO Regulated)',
    plantLocation: 'Licensed Facility, Hyderabad',
    batchNumber: 'EQ26-0442',
    expiry: '07/2028',
    brandPrice: '₹82 / 10 tablets',
    equaPrice: '₹16 / 10 tablets',
    bioequivalenceProof: 'Immediate dissolution > 90% within 10 minutes'
  },
  {
    id: 'levothyroxine-50',
    brandName: 'Thyronorm 50 mcg / Eltroxin 50 mcg',
    brandCompany: 'Abbott / GSK',
    saltName: 'Thyroxine Sodium IP (Levothyroxine)',
    strength: '50 mcg',
    form: 'Small Uncoated Tablet',
    category: 'thyroid',
    categoryLabel: 'Thyroid Hormone',
    plainMeaning: 'Restores natural synthetic T4 thyroid hormone levels for healthy daily metabolism.',
    approvalLicense: 'Mfg Lic: MH/102/551 (CDSCO Regulated)',
    plantLocation: 'Licensed Dedicated Hormone Suite, Goa',
    batchNumber: 'EQ26-0180',
    expiry: '06/2028',
    brandPrice: '₹170 / 120 tablets bottle',
    equaPrice: '₹55 / 120 tablets bottle',
    bioequivalenceProof: 'Narrow therapeutic ratio precision: content uniformity verified within ±1.5%'
  },

  // --- ANTIBIOTICS & ANTI-INFECTIVES ---
  {
    id: 'amoxicillin-clavulanic-625',
    brandName: 'Augmentin 625 Duo / Moxikind-CV 625',
    brandCompany: 'GSK / Mankind',
    saltName: 'Amoxicillin IP (500mg) + Potassium Clavulanate (125mg)',
    strength: '625 mg',
    form: 'Film-coated Tablet',
    category: 'antibiotics',
    categoryLabel: 'Infections & Antibiotics',
    plainMeaning: 'Broad-spectrum antibiotic with beta-lactamase protection against bacterial infections.',
    approvalLicense: 'Mfg Lic: G/25/1100 (CDSCO Regulated)',
    plantLocation: 'Licensed WHO-GMP Dedicated Antibiotic Block, Baddi',
    batchNumber: 'EQ26-0899',
    expiry: '10/2027',
    brandPrice: '₹220 / 10 tablets',
    equaPrice: '₹68 / 10 tablets',
    bioequivalenceProof: 'Potency and moisture barrier packaging validated per IP standard'
  },
  {
    id: 'azithromycin-500',
    brandName: 'Azee 500 / Azithral 500 / Zithromax',
    brandCompany: 'Cipla / Alembic / Pfizer',
    saltName: 'Azithromycin IP',
    strength: '500 mg',
    form: 'Film-coated Tablet',
    category: 'antibiotics',
    categoryLabel: 'Infections & Antibiotics',
    plainMeaning: 'Macrolide antibiotic that stops bacterial protein synthesis in chest, throat, and sinus infections.',
    approvalLicense: 'Mfg Lic: GA/28/315 (CDSCO Regulated)',
    plantLocation: 'Licensed WHO-GMP Facility, Goa',
    batchNumber: 'EQ26-0562',
    expiry: '08/2028',
    brandPrice: '₹140 / 5 tablets',
    equaPrice: '₹34 / 5 tablets',
    bioequivalenceProof: 'Bioavailability curve overlay matches originator standard strictly'
  }
];

let selectedMedicine = MEDICINES_DATA[0];

// ==========================================
// 2. MEDICINE CHECKER (Proof in Action)
// ==========================================
function initMedicineChecker() {
  const searchInput = document.getElementById('checkerSearch');
  const resultsContainer = document.getElementById('checkerResults');
  const countBadge = document.getElementById('medicineCountBadge');
  const filterPills = document.querySelectorAll('.cat-pill');

  let activeCategory = 'all';
  let searchTerm = '';

  function render() {
    if (!resultsContainer) return;
    const q = searchTerm.trim().toLowerCase();

    const matches = MEDICINES_DATA.filter(m => {
      const catMatch = activeCategory === 'all' || m.category === activeCategory;
      const queryMatch = !q ||
        m.brandName.toLowerCase().includes(q) ||
        m.saltName.toLowerCase().includes(q) ||
        m.categoryLabel.toLowerCase().includes(q) ||
        m.plainMeaning.toLowerCase().includes(q);
      return catMatch && queryMatch;
    });

    if (countBadge) {
      countBadge.textContent = `${matches.length} medicines shown`;
    }

    if (matches.length === 0) {
      resultsContainer.innerHTML = `
        <div class="p-10 text-center bg-white rounded-2xl border border-[#E5DFD3] text-sm text-[#597371]">
          <div class="w-12 h-12 rounded-full bg-[#EBF5F4] text-[#0A4A48] flex items-center justify-center mx-auto mb-3 font-bold text-lg">?</div>
          <p class="font-bold text-[#142322] text-base mb-1">No medicine match found for "${searchTerm}"</p>
          <p class="text-xs max-w-md mx-auto">
            Try typing common brands (e.g., Telma, Glycomet, Lipitor, Pan 40, Dolo, Augmentin, Thyronorm) or the active salt name.
          </p>
        </div>
      `;
      return;
    }

    resultsContainer.innerHTML = matches.map(m => `
      <div class="equa-card p-6 bg-white border border-[#E5DFD3] rounded-2xl hover:border-[#CBD8D6] transition">
        
        <div class="flex items-center justify-between pb-3 mb-4 border-b border-[#F2ECE1]">
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#EBF5F4] text-[#0A4A48]">
            <span class="w-1.5 h-1.5 rounded-full bg-[#2BB3A4]"></span>
            ${m.categoryLabel}
          </span>
          <span class="text-xs font-semibold text-[#597371]">${m.form}</span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
          
          <!-- Left: Brand Prescribed -->
          <div class="md:col-span-5 p-4 rounded-xl bg-[#FAF8F5] border border-[#EDE7DD]">
            <span class="text-[11px] font-bold text-[#8DA4A2] uppercase tracking-wider block mb-1">The Prescribed Brand</span>
            <h4 class="text-lg font-bold text-[#142322]">${m.brandName}</h4>
            <div class="text-xs text-[#597371] mt-0.5">Originator / Brand: <span class="text-[#2B3D3B] font-medium">${m.brandCompany}</span></div>
            <div class="text-xs text-[#8DA4A2] mt-2 font-semibold">Standard pharmacy price: ${m.brandPrice}</div>
          </div>

          <!-- Middle: Equality Symbol -->
          <div class="md:col-span-2 text-center flex flex-col items-center justify-center my-2 md:my-0">
            <div class="w-10 h-10 rounded-full bg-[#EBF5F4] text-[#0A4A48] flex items-center justify-center font-extrabold text-lg border border-[#CDE5E3] shadow-sm">
              =
            </div>
            <span class="text-[11px] font-bold text-[#0A4A48] mt-1">Exact Same Salt</span>
          </div>

          <!-- Right: EQUA Equivalent -->
          <div class="md:col-span-5 p-4 rounded-xl bg-[#EBF5F4] border-2 border-[#0A4A48] relative">
            <div class="flex items-center justify-between mb-1">
              <span class="text-[11px] font-extrabold text-[#0A4A48] uppercase tracking-wider">EQUA Equivalent</span>
              <span class="text-sm font-extrabold text-[#0A4A48]">${m.equaPrice}</span>
            </div>
            <h4 class="text-lg font-extrabold text-[#0A4A48]">${m.saltName}</h4>
            <div class="text-xs text-[#2B3D3B] font-semibold mt-0.5">Strength: <strong>${m.strength}</strong></div>
            <div class="text-xs text-[#2B3D3B] mt-2 bg-white/70 p-2 rounded-lg border border-[#CDE5E3] leading-relaxed">
              ${m.plainMeaning}
            </div>
          </div>

        </div>

        <!-- Action footer on card -->
        <div class="mt-4 pt-3.5 border-t border-[#F2ECE1] flex flex-wrap items-center justify-between gap-3 text-xs">
          <div class="text-[#597371] flex items-center gap-1.5">
            <img src="assets/badge-logo.png" alt="Verified" class="w-4 h-4 object-contain">
            <span><strong>Proof: </strong>${m.bioequivalenceProof}</span>
          </div>
          <div class="flex items-center gap-2">
            <button 
              onclick="loadMedicineToCard('${m.id}')"
              class="px-3.5 py-1.5 rounded-lg bg-[#0A4A48] text-white font-semibold hover:bg-[#11605D] transition flex items-center gap-1"
            >
              <span>See Pack in 3D</span>
              <span>&darr;</span>
            </button>
            <button 
              onclick="openDoctorNoteWithMedicine('${m.id}')"
              class="px-3.5 py-1.5 rounded-lg bg-white border border-[#CBD8D6] text-[#2B3D3B] font-semibold hover:border-[#0A4A48] transition"
            >
              Get Doctor Note Slip
            </button>
          </div>
        </div>

      </div>
    `).join('');
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchTerm = e.target.value;
      render();
    });
  }

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => {
        p.classList.remove('bg-[#0A4A48]', 'text-white');
        p.classList.add('bg-white', 'text-[#2B3D3B]');
      });
      pill.classList.remove('bg-white', 'text-[#2B3D3B]');
      pill.classList.add('bg-[#0A4A48]', 'text-white');
      activeCategory = pill.dataset.category || 'all';
      render();
    });
  });

  render();
}

// ==========================================
// 3. EQUA CARD & 3D PACK INTEGRATION
// ==========================================
window.loadMedicineToCard = function(id) {
  const med = MEDICINES_DATA.find(m => m.id === id);
  if (med) {
    selectedMedicine = med;
    updatePackVisual();
    const target = document.getElementById('equa-card-section');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  }
};

function initEquaCardMockup() {
  updatePackVisual();

  const hotspots = document.querySelectorAll('.pack-hotspot');
  hotspots.forEach(spot => {
    spot.addEventListener('click', () => {
      hotspots.forEach(s => s.classList.remove('active'));
      spot.classList.add('active');
      showHotspotExplanation(spot.dataset.field);
    });
  });
}

function updatePackVisual() {
  const saltEl = document.getElementById('packSaltName');
  const strengthEl = document.getElementById('packStrength');
  const formEl = document.getElementById('packForm');
  const licEl = document.getElementById('packLicense');
  const plantEl = document.getElementById('packPlant');
  const batchEl = document.getElementById('packBatch');
  const expEl = document.getElementById('packExpiry');

  if (saltEl) saltEl.textContent = selectedMedicine.saltName;
  if (strengthEl) strengthEl.textContent = selectedMedicine.strength;
  if (formEl) formEl.textContent = selectedMedicine.form;
  if (licEl) licEl.textContent = selectedMedicine.approvalLicense;
  if (plantEl) plantEl.textContent = selectedMedicine.plantLocation;
  if (batchEl) batchEl.textContent = selectedMedicine.batchNumber;
  if (expEl) expEl.textContent = selectedMedicine.expiry;

  showHotspotExplanation('salt');
}

function showHotspotExplanation(field) {
  const titleEl = document.getElementById('hotspotTitle');
  const textEl = document.getElementById('hotspotExplanation');
  const techEl = document.getElementById('hotspotTechnicalTerm');
  if (!titleEl || !textEl) return;

  switch (field) {
    case 'salt':
      titleEl.textContent = 'Active Salt / Molecule';
      techEl.textContent = 'Technical term: Active Pharmaceutical Ingredient (API)';
      textEl.textContent = `This is ${selectedMedicine.saltName}. It is the exact chemical molecule that treats the condition. By law, generic and brand medicines must contain this exact same molecule in identical purity.`;
      break;
    case 'strength':
      titleEl.textContent = 'Exact Dosage Strength';
      techEl.textContent = 'Technical term: Dosage quantification in milligrams (mg)';
      textEl.textContent = `This pack contains exactly ${selectedMedicine.strength} per tablet—the exact amount your physician prescribed. No less, no more.`;
      break;
    case 'lic':
      titleEl.textContent = 'Government Drug Approval';
      techEl.textContent = 'Technical term: Central Drugs Standard Control Organisation (CDSCO) license';
      textEl.textContent = `Licensed under ${selectedMedicine.approvalLicense}. This verifies that national health regulators have reviewed the formula, dissolution tests, and safety records before allowing it to be made.`;
      break;
    case 'plant':
      titleEl.textContent = 'Licensed Manufacturing Facility';
      techEl.textContent = 'Technical term: WHO-Good Manufacturing Practice (WHO-GMP)';
      textEl.textContent = `Manufactured at: ${selectedMedicine.plantLocation}. The plant is certified under World Health Organization standards for clean air, water purification, and regular government inspections.`;
      break;
    case 'batch':
      titleEl.textContent = 'Batch Number & Lab Test Records';
      techEl.textContent = 'Technical term: Batch Analytical Record / Certificate of Analysis';
      textEl.textContent = `Batch: ${selectedMedicine.batchNumber} (Expires ${selectedMedicine.expiry}). Every batch produced undergoes chemical dissolution testing in a certified lab. The record is permanently logged against this batch number.`;
      break;
    default:
      break;
  }
}

// ==========================================
// 4. TALK TO YOUR DOCTOR (Doctor Note Slip)
// ==========================================
window.openDoctorNoteWithMedicine = function(id) {
  const med = MEDICINES_DATA.find(m => m.id === id);
  if (med) selectedMedicine = med;
  openDoctorNote();
};

function initDoctorNote() {
  const openBtns = document.querySelectorAll('.open-doctor-note');
  const closeBtn = document.getElementById('closeDoctorNote');
  const modal = document.getElementById('doctorNoteModal');
  const printBtn = document.getElementById('printDoctorNote');

  openBtns.forEach(btn => {
    btn.addEventListener('click', openDoctorNote);
  });

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => modal.classList.add('hidden'));
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.add('hidden');
    });
  }

  if (printBtn) {
    printBtn.addEventListener('click', () => window.print());
  }
}

function openDoctorNote() {
  const modal = document.getElementById('doctorNoteModal');
  if (!modal) return;

  const noteBrand = document.getElementById('noteBrandName');
  const noteSalt = document.getElementById('noteSaltName');
  const noteStrength = document.getElementById('noteStrength');

  if (noteBrand) noteBrand.textContent = selectedMedicine.brandName;
  if (noteSalt) noteSalt.textContent = selectedMedicine.saltName;
  if (noteStrength) noteStrength.textContent = selectedMedicine.strength;

  modal.classList.remove('hidden');
}

// Doctor Evidence Sheet
function initDoctorEvidence() {
  const openBtns = document.querySelectorAll('.open-doctor-evidence');
  const closeBtn = document.getElementById('closeDoctorEvidence');
  const modal = document.getElementById('doctorEvidenceModal');

  openBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (modal) modal.classList.remove('hidden');
    });
  });

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => modal.classList.add('hidden'));
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.add('hidden');
    });
  }
}

// ==========================================
// 5. COMMON QUESTIONS (FAQ Accordion)
// ==========================================
function initFaqAccordion() {
  const items = document.querySelectorAll('.faq-item');
  items.forEach(item => {
    const q = item.querySelector('.faq-question');
    if (q) {
      q.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        items.forEach(i => i.classList.remove('active'));
        if (!isActive) item.classList.add('active');
      });
    }
  });
}

// ==========================================
// 6. CALL ME BACK FORM
// ==========================================
function initCallMeBackForm() {
  const form = document.getElementById('callBackForm');
  const successMsg = document.getElementById('callBackSuccess');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      form.classList.add('hidden');
      if (successMsg) successMsg.classList.remove('hidden');
    });
  }
}
