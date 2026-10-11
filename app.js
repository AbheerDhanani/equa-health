// EQUA - Equal Medicine, Explained
// 10-Section Interactive Controller

document.addEventListener('DOMContentLoaded', () => {
  initMedicineChecker();
  initEquaCardMockup();
  initDoctorNote();
  initDoctorEvidence();
  initFaqAccordion();
  initCallMeBackForm();
  if (typeof initPack3D === 'function') initPack3D();
});

// ==========================================
// 1. MEDICINE DATABASE (Proof in Action)
// ==========================================
const MEDICINES_DATA = [
  {
    id: 'telmisartan-40',
    brandName: 'Telma 40',
    brandCompany: 'Glenmark',
    saltName: 'Telmisartan',
    strength: '40 mg',
    form: 'Tablet',
    category: 'Blood pressure',
    plainMeaning: 'Relaxes blood vessels so blood flows with normal, steady resistance.',
    approvalLicense: 'Mfg Lic: G/25/1842 (CDSCO Regulated)',
    plantLocation: 'Licensed WHO-GMP Plant 04, Baddi',
    batchNumber: 'EQ26-0881',
    expiry: '09/2028',
    brandPrice: '₹142 / 10 tablets',
    equaPrice: '₹28 / 10 tablets',
    bioequivalenceProof: 'Dissolution profile matches originator within ±2.8% in testing'
  },
  {
    id: 'metformin-500',
    brandName: 'Glycomet 500 SR',
    brandCompany: 'USV',
    saltName: 'Metformin Hydrochloride (Sustained Release)',
    strength: '500 mg',
    form: 'Sustained Release Tablet',
    category: 'Diabetes',
    plainMeaning: 'Helps cells take in glucose from your blood and reduces glucose made by your liver.',
    approvalLicense: 'Mfg Lic: M/732/2019 (CDSCO Regulated)',
    plantLocation: 'Licensed WHO-GMP Facility, Haridwar',
    batchNumber: 'EQ26-1140',
    expiry: '11/2028',
    brandPrice: '₹85 / 10 tablets',
    equaPrice: '₹18 / 10 tablets',
    bioequivalenceProof: '12-hour sustained dissolution rate statistically identical to originator'
  },
  {
    id: 'atorvastatin-10',
    brandName: 'Lipitor 10 / Atorva 10',
    brandCompany: 'Pfizer / Zydus',
    saltName: 'Atorvastatin Calcium',
    strength: '10 mg',
    form: 'Film-coated Tablet',
    category: 'Cholesterol',
    plainMeaning: 'Slows down the enzyme in your liver that produces LDL cholesterol.',
    approvalLicense: 'Mfg Lic: G/28/1105 (CDSCO Regulated)',
    plantLocation: 'Licensed WHO-GMP Facility, Ahmedabad',
    batchNumber: 'EQ26-0422',
    expiry: '07/2028',
    brandPrice: '₹165 / 10 tablets',
    equaPrice: '₹32 / 10 tablets',
    bioequivalenceProof: '90% confidence interval for plasma absorption strictly within 80–125%'
  },
  {
    id: 'amlodipine-5',
    brandName: 'Amlong 5 / Norvasc 5',
    brandCompany: 'Micro Labs / Pfizer',
    saltName: 'Amlodipine Besylate',
    strength: '5 mg',
    form: 'Tablet',
    category: 'Blood pressure',
    plainMeaning: 'Relaxes smooth muscle cells in arterial walls to lower pumping pressure.',
    approvalLicense: 'Mfg Lic: KTK/25/488 (CDSCO Regulated)',
    plantLocation: 'Licensed WHO-GMP Plant, Bengaluru',
    batchNumber: 'EQ26-0931',
    expiry: '10/2028',
    brandPrice: '₹78 / 15 tablets',
    equaPrice: '₹16 / 15 tablets',
    bioequivalenceProof: '100% molecular equivalence verified under Indian Pharmacopoeia standards'
  },
  {
    id: 'pantoprazole-40',
    brandName: 'Pan 40 / Pantocid 40',
    brandCompany: 'Alkem / Sun Pharma',
    saltName: 'Pantoprazole Sodium (Gastro-Resistant)',
    strength: '40 mg',
    form: 'Enteric Coated Tablet',
    category: 'Acidity & Reflux',
    plainMeaning: 'Temporarily switches off stomach acid pumps to let irritated stomach lining rest and heal.',
    approvalLicense: 'Mfg Lic: HP/09/521 (CDSCO Regulated)',
    plantLocation: 'Licensed WHO-GMP Plant, Paonta Sahib',
    batchNumber: 'EQ26-0715',
    expiry: '08/2028',
    brandPrice: '₹155 / 10 tablets',
    equaPrice: '₹32 / 10 tablets',
    bioequivalenceProof: 'Enteric coating resists gastric acid for 2 hours, releasing completely in intestinal pH'
  },
  {
    id: 'paracetamol-650',
    brandName: 'Dolo 650 / Calpol 650',
    brandCompany: 'Micro Labs / GSK',
    saltName: 'Paracetamol',
    strength: '650 mg',
    form: 'Tablet',
    category: 'Fever & Pain',
    plainMeaning: 'Calms temperature signals in the brain and eases mild to moderate aches.',
    approvalLicense: 'Mfg Lic: G/25/994 (CDSCO Regulated)',
    plantLocation: 'Licensed Facility, Ankleshwar',
    batchNumber: 'EQ26-1502',
    expiry: '12/2028',
    brandPrice: '₹34 / 15 tablets',
    equaPrice: '₹12 / 15 tablets',
    bioequivalenceProof: 'Pure API chemical assay > 99.8% verified per IP/BP standards'
  }
];

let selectedMedicine = MEDICINES_DATA[0];

// ==========================================
// 2. MEDICINE CHECKER
// ==========================================
function initMedicineChecker() {
  const searchInput = document.getElementById('checkerSearch');
  const resultsContainer = document.getElementById('checkerResults');

  function render(query = '') {
    if (!resultsContainer) return;
    const q = query.trim().toLowerCase();

    const matches = MEDICINES_DATA.filter(m => {
      if (!q) return true;
      return m.brandName.toLowerCase().includes(q) ||
             m.saltName.toLowerCase().includes(q) ||
             m.category.toLowerCase().includes(q);
    });

    if (matches.length === 0) {
      resultsContainer.innerHTML = `
        <div class="p-8 text-center bg-white rounded-2xl border border-[#E5DFD3] text-sm text-[#597371]">
          <p class="font-bold text-[#142322] mb-1">No medicine match found for "${query}"</p>
          <p class="text-xs">Try typing the brand name on your strip (e.g., Telma, Glycomet, Lipitor, Pan 40) or the salt name.</p>
        </div>
      `;
      return;
    }

    resultsContainer.innerHTML = matches.map(m => `
      <div class="equa-card p-6 bg-white border border-[#E5DFD3] rounded-2xl">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          
          <!-- Left: Brand side -->
          <div class="md:col-span-5 p-4 rounded-xl bg-[#FAF8F5] border border-[#EDE7DD]">
            <span class="text-[11px] font-bold text-[#8DA4A2] uppercase tracking-wider block mb-1">The Brand Prescribed</span>
            <h4 class="text-lg font-bold text-[#142322]">${m.brandName}</h4>
            <div class="text-xs text-[#597371] mt-1">Company: ${m.brandCompany}</div>
            <div class="text-xs text-[#8DA4A2] mt-2 font-medium">Standard price: ${m.brandPrice}</div>
          </div>

          <!-- Middle: Equality sign -->
          <div class="md:col-span-2 text-center flex flex-col items-center justify-center">
            <div class="w-10 h-10 rounded-full bg-[#EBF5F4] text-[#0A4A48] flex items-center justify-center font-bold text-sm border border-[#CDE5E3]">
              =
            </div>
            <span class="text-[11px] font-semibold text-[#0A4A48] mt-1">Same Salt & Strength</span>
          </div>

          <!-- Right: EQUA Equivalent -->
          <div class="md:col-span-5 p-4 rounded-xl bg-[#EBF5F4] border-2 border-[#0A4A48]">
            <div class="flex items-center justify-between mb-1">
              <span class="text-[11px] font-bold text-[#0A4A48] uppercase tracking-wider">EQUA Equivalent</span>
              <span class="text-xs font-bold text-[#0A4A48]">${m.equaPrice}</span>
            </div>
            <h4 class="text-lg font-bold text-[#0A4A48]">${m.saltName}</h4>
            <div class="text-xs text-[#2B3D3B] font-medium mt-1">Strength: <strong>${m.strength}</strong> (${m.form})</div>
            <div class="text-[11px] text-[#597371] mt-2">${m.plainMeaning}</div>
          </div>

        </div>

        <!-- Action footer on card -->
        <div class="mt-4 pt-4 border-t border-[#F2ECE1] flex flex-wrap items-center justify-between gap-3 text-xs">
          <div class="text-[#597371]">
            <span>Check: </span><strong class="text-[#142322]">${m.bioequivalenceProof}</strong>
          </div>
          <div class="flex items-center gap-2">
            <button 
              onclick="loadMedicineToCard('${m.id}')"
              class="px-3.5 py-1.5 rounded-lg bg-[#0A4A48] text-white font-semibold hover:bg-[#11605D] transition"
            >
              See EQUA Pack Details &darr;
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
      render(e.target.value);
    });
  }

  render();
}

// ==========================================
// 3. EQUA CARD (Interactive Pack Mock-up)
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

  // Attach tap listeners to pack hotspots
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

  // default to active salt explanation
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
