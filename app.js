// EQUA - Equal Medicine, Explained
// Interactive Experience & State Management

document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initMedicineExplorer();
  initBioeqCanvas();
  initSavingsCalculator();
  initFaqAccordion();
  initDoctorSlip();
});

// ==========================================
// 1. MEDICINE DATABASE
// ==========================================
const MEDICINES_DATA = [
  {
    id: 'atorvastatin-10',
    genericName: 'Atorvastatin',
    strength: '10 mg',
    category: 'cholesterol',
    categoryLabel: 'Cholesterol & Heart',
    brandExample: 'Lipitor / Atorva / Storvas',
    purpose: 'Lowers LDL cholesterol and protects arteries from plaque buildup.',
    brandedPrice: 165,
    equaPrice: 32,
    stripCount: '10 tablets',
    bioequivalenceStatus: '100% Bioequivalent (WHO-GMP Certified)',
    approvalBody: 'CDSCO / DCGI Approved Formulation'
  },
  {
    id: 'telmisartan-40',
    genericName: 'Telmisartan',
    strength: '40 mg',
    category: 'blood-pressure',
    categoryLabel: 'Blood Pressure',
    brandExample: 'Telma / Micardis / Telmikind',
    purpose: 'Relaxes blood vessels to keep daily blood pressure in a safe, steady range.',
    brandedPrice: 142,
    equaPrice: 28,
    stripCount: '10 tablets',
    bioequivalenceStatus: 'Matches originator dissolution within ±3.2%',
    approvalBody: 'Tested to Indian Pharmacopoeia (IP) Standards'
  },
  {
    id: 'metformin-500-sr',
    genericName: 'Metformin Sustained Release',
    strength: '500 mg',
    category: 'diabetes',
    categoryLabel: 'Diabetes',
    brandExample: 'Glycomet / Glucophage / Cetapin',
    purpose: 'Helps your body naturally process insulin and keeps morning glucose balanced.',
    brandedPrice: 85,
    equaPrice: 18,
    stripCount: '10 tablets',
    bioequivalenceStatus: 'Dissolution profile identical over 12-hour window',
    approvalBody: 'WHO-GMP Compliant Manufacturing'
  },
  {
    id: 'amlodipine-5',
    genericName: 'Amlodipine',
    strength: '5 mg',
    category: 'blood-pressure',
    categoryLabel: 'Blood Pressure',
    brandExample: 'Norvasc / Amlong / Stamlo',
    purpose: 'Calmly widens blood vessels to ease workload on the heart muscle.',
    brandedPrice: 78,
    equaPrice: 16,
    stripCount: '15 tablets',
    bioequivalenceStatus: '100% molecular equivalence verified',
    approvalBody: 'Tested batch-by-batch before release'
  },
  {
    id: 'glimepiride-2',
    genericName: 'Glimepiride',
    strength: '2 mg',
    category: 'diabetes',
    categoryLabel: 'Diabetes',
    brandExample: 'Amaryl / Glimestar / Zoryl',
    purpose: 'Prompts the pancreas to release steady, physiological insulin with meals.',
    brandedPrice: 110,
    equaPrice: 24,
    stripCount: '10 tablets',
    bioequivalenceStatus: 'Bioavailability curve overlay matches originator standard',
    approvalBody: 'Regulated Good Manufacturing Practice'
  },
  {
    id: 'pantoprazole-40',
    genericName: 'Pantoprazole Gastro-Resistant',
    strength: '40 mg',
    category: 'acidity',
    categoryLabel: 'Acidity & Digestion',
    brandExample: 'Pan 40 / Pantocid / Protonix',
    purpose: 'Reduces stomach acid production to heal stomach lining and prevent acid reflux.',
    brandedPrice: 155,
    equaPrice: 32,
    stripCount: '10 tablets',
    bioequivalenceStatus: 'Identical acid-resistant enteric coating standard',
    approvalBody: 'CDSCO Validated Formulation'
  },
  {
    id: 'montelukast-10',
    genericName: 'Montelukast',
    strength: '10 mg',
    category: 'respiratory',
    categoryLabel: 'Breathing & Allergy',
    brandExample: 'Singulair / Montair / Romilast',
    purpose: 'Blocks inflammatory leukotrienes to ease night-time breathing and wheezing.',
    brandedPrice: 198,
    equaPrice: 42,
    stripCount: '10 tablets',
    bioequivalenceStatus: 'Exact active receptor affinity',
    approvalBody: 'US-FDA & WHO-GMP Facility Verified'
  },
  {
    id: 'paracetamol-650',
    genericName: 'Paracetamol',
    strength: '650 mg',
    category: 'pain',
    categoryLabel: 'Pain & Fever Relief',
    brandExample: 'Dolo 650 / Calpol / Crocin 650',
    purpose: 'Gentle, dependable reduction of temperature and daily body aches.',
    brandedPrice: 34,
    equaPrice: 12,
    stripCount: '15 tablets',
    bioequivalenceStatus: '99.8% pure API assay verified',
    approvalBody: 'IP / BP / USP Pharmacopeial Standard'
  }
];

// Doctor slip items selected by patient
let doctorSlipItems = [];

// ==========================================
// 2. MEDICINE EXPLORER RENDERING
// ==========================================
function initMedicineExplorer() {
  const container = document.getElementById('medicineList');
  const searchInput = document.getElementById('medicineSearch');
  const filterTabs = document.querySelectorAll('.filter-tab');

  let activeCategory = 'all';
  let searchTerm = '';

  function render() {
    if (!container) return;
    
    const filtered = MEDICINES_DATA.filter(med => {
      const matchCat = activeCategory === 'all' || med.category === activeCategory;
      const q = searchTerm.toLowerCase();
      const matchQuery = med.genericName.toLowerCase().includes(q) ||
                         med.brandExample.toLowerCase().includes(q) ||
                         med.purpose.toLowerCase().includes(q) ||
                         med.categoryLabel.toLowerCase().includes(q);
      return matchCat && matchQuery;
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="col-span-full text-center py-12 bg-white rounded-2xl border border-dashed border-[#CBD8D6] p-8">
          <div class="w-12 h-12 rounded-full bg-[#EBF5F4] text-[#0A4A48] flex items-center justify-center mx-auto mb-3 font-semibold text-xl">?</div>
          <h4 class="text-lg font-bold text-[#142322]">No medicine found matching "${searchTerm}"</h4>
          <p class="text-sm text-[#597371] max-w-md mx-auto mt-1">
            Try searching by the generic salt name (like Atorvastatin, Metformin) or the brand name written on your prescription.
          </p>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map(med => {
      const monthlySavings = (med.brandedPrice - med.equaPrice) * 3; // for typical 30-day course
      const annualSavings = monthlySavings * 12;
      const isAdded = doctorSlipItems.some(item => item.id === med.id);

      return `
        <div class="equa-card p-6 flex flex-col justify-between" id="card-${med.id}">
          <div>
            <div class="flex items-start justify-between gap-2 mb-3">
              <span class="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-[#EBF5F4] text-[#0A4A48] border border-[#CDE5E3]">
                ${med.categoryLabel}
              </span>
              <span class="text-xs font-medium text-[#597371] bg-[#F2ECE1] px-2.5 py-1 rounded-md">
                ${med.stripCount}
              </span>
            </div>

            <h3 class="text-xl font-bold text-[#142322] flex items-baseline gap-2">
              ${med.genericName}
              <span class="text-sm font-normal text-[#597371]">${med.strength}</span>
            </h3>

            <p class="text-xs text-[#597371] mt-1 mb-3">
              Common brand names: <strong class="text-[#2B3D3B] font-semibold">${med.brandExample}</strong>
            </p>

            <p class="text-sm text-[#2B3D3B] mb-5 leading-relaxed bg-[#FAF8F5] p-3 rounded-xl border border-[#EDE7DD]">
              ${med.purpose}
            </p>

            <!-- Price Comparison Box -->
            <div class="bg-[#F8FAF9] p-4 rounded-xl border border-[#DCE8E7] mb-4">
              <div class="flex justify-between items-center text-xs text-[#597371] mb-1">
                <span>Branded Market Average</span>
                <span class="line-through text-[#8DA4A2]">₹${med.brandedPrice}</span>
              </div>
              <div class="flex justify-between items-baseline mb-2">
                <div>
                  <span class="text-xs font-semibold text-[#0A4A48] uppercase tracking-wider block">EQUA Fair Price</span>
                  <span class="text-2xl font-extrabold text-[#0A4A48]">₹${med.equaPrice}</span>
                </div>
                <div class="text-right">
                  <span class="text-xs font-semibold text-[#EB6B47] bg-[#FDF1ED] px-2 py-0.5 rounded-full">
                    Saves ₹${med.brandedPrice - med.equaPrice} per strip
                  </span>
                </div>
              </div>
              
              <div class="text-[11px] text-[#597371] pt-2 border-t border-[#E5DFD3] flex items-center justify-between">
                <span>Annual family saving (30 tabs/mo):</span>
                <strong class="text-[#0A4A48] font-bold">₹${annualSavings.toLocaleString('en-IN')} / year</strong>
              </div>
            </div>

            <!-- Quality assurance note -->
            <div class="flex items-center gap-2 text-xs text-[#597371] mb-5">
              <svg class="w-4 h-4 text-[#2BB3A4] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              <span>${med.bioequivalenceStatus}</span>
            </div>
          </div>

          <!-- Action button -->
          <button 
            onclick="toggleDoctorSlipItem('${med.id}')"
            class="w-full py-2.5 px-4 rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
              isAdded 
                ? 'bg-[#EBF5F4] text-[#0A4A48] border border-[#2BB3A4]' 
                : 'bg-[#0A4A48] text-white hover:bg-[#11605D] shadow-sm'
            }"
          >
            ${isAdded ? `
              <svg class="w-4 h-4 text-[#0A4A48]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
              Added to Doctor Slip
            ` : `
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
              Add to Doctor Discussion Slip
            `}
          </button>
        </div>
      `;
    }).join('');
  }

  // Search input handler
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchTerm = e.target.value.trim();
      render();
    });
  }

  // Filter tabs
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeCategory = tab.dataset.category || 'all';
      render();
    });
  });

  // initial render
  render();
  window.refreshMedicineList = render;
}

// ==========================================
// 3. DOCTOR SLIP MODAL & MANAGEMENT
// ==========================================
window.toggleDoctorSlipItem = function(id) {
  const med = MEDICINES_DATA.find(m => m.id === id);
  if (!med) return;

  const idx = doctorSlipItems.findIndex(item => item.id === id);
  if (idx > -1) {
    doctorSlipItems.splice(idx, 1);
  } else {
    doctorSlipItems.push(med);
  }

  updateDoctorSlipBadge();
  if (window.refreshMedicineList) window.refreshMedicineList();
  renderDoctorSlipModal();
};

function updateDoctorSlipBadge() {
  const badge = document.getElementById('doctorSlipCount');
  const stickyBar = document.getElementById('stickyDoctorSlipBar');
  const countSpan = document.getElementById('stickySlipCount');
  
  if (badge) {
    badge.textContent = doctorSlipItems.length;
    badge.classList.toggle('hidden', doctorSlipItems.length === 0);
  }

  if (stickyBar && countSpan) {
    countSpan.textContent = doctorSlipItems.length;
    stickyBar.classList.toggle('hidden', doctorSlipItems.length === 0);
  }
}

function initDoctorSlip() {
  const openButtons = document.querySelectorAll('.open-doctor-slip');
  const closeButton = document.getElementById('closeDoctorSlip');
  const modal = document.getElementById('doctorSlipModal');
  const printButton = document.getElementById('printDoctorSlip');

  openButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      renderDoctorSlipModal();
      if (modal) modal.classList.remove('hidden');
    });
  });

  if (closeButton && modal) {
    closeButton.addEventListener('click', () => {
      modal.classList.add('hidden');
    });
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.add('hidden');
    });
  }

  if (printButton) {
    printButton.addEventListener('click', () => {
      window.print();
    });
  }
}

function renderDoctorSlipModal() {
  const container = document.getElementById('doctorSlipItemList');
  const emptyState = document.getElementById('doctorSlipEmpty');
  const totalSavingsEl = document.getElementById('doctorSlipTotalSavings');

  if (!container) return;

  if (doctorSlipItems.length === 0) {
    container.innerHTML = '';
    if (emptyState) emptyState.classList.remove('hidden');
    if (totalSavingsEl) totalSavingsEl.textContent = '₹0';
    return;
  }

  if (emptyState) emptyState.classList.add('hidden');

  let totalMonthlySavings = 0;

  container.innerHTML = doctorSlipItems.map(item => {
    const monthlyDiff = (item.brandedPrice - item.equaPrice) * 3;
    totalMonthlySavings += monthlyDiff;

    return `
      <div class="flex items-center justify-between p-3.5 bg-white rounded-xl border border-[#E5DFD3] text-sm">
        <div class="flex-1">
          <div class="font-bold text-[#142322]">${item.genericName} <span class="text-xs font-normal text-[#597371]">(${item.strength})</span></div>
          <div class="text-xs text-[#597371]">Currently Taking / Prescribed As: <strong class="text-[#2B3D3B]">${item.brandExample}</strong></div>
        </div>
        <div class="text-right mr-4">
          <div class="text-xs text-[#597371]">Equa Price / Strip</div>
          <div class="font-bold text-[#0A4A48]">₹${item.equaPrice}</div>
        </div>
        <button onclick="toggleDoctorSlipItem('${item.id}')" class="text-[#8DA4A2] hover:text-[#EB6B47] p-1.5 transition no-print" title="Remove">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
      </div>
    `;
  }).join('');

  if (totalSavingsEl) {
    totalSavingsEl.textContent = `₹${(totalMonthlySavings * 12).toLocaleString('en-IN')}`;
  }
}

// ==========================================
// 4. INTERACTIVE BIOEQUIVALENCE CANVAS
// ==========================================
function initBioeqCanvas() {
  const canvas = document.getElementById('bioeqCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize() {
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = 280 * dpr;
    ctx.scale(dpr, dpr);
    drawChart(rect.width, 280);
  }

  function drawChart(w, h) {
    ctx.clearRect(0, 0, w, h);

    const padLeft = 45;
    const padBottom = 35;
    const padTop = 25;
    const padRight = 20;

    const chartW = w - padLeft - padRight;
    const chartH = h - padTop - padBottom;

    // Draw background grid lines
    ctx.strokeStyle = '#EDF2F1';
    ctx.lineWidth = 1;

    for (let i = 0; i <= 4; i++) {
      const y = padTop + (chartH / 4) * i;
      ctx.beginPath();
      ctx.moveTo(padLeft, y);
      ctx.lineTo(padLeft + chartW, y);
      ctx.stroke();
    }

    // Strict 80% - 125% Bioequivalence Acceptance Band
    ctx.fillStyle = 'rgba(43, 179, 164, 0.08)';
    ctx.beginPath();
    // Originator peak is roughly around normalized 1.0 (h * 0.28)
    const bandTop = padTop + chartH * 0.18;
    const bandBottom = padTop + chartH * 0.45;
    ctx.fillRect(padLeft, bandTop, chartW, bandBottom - bandTop);

    // Label the regulatory band
    ctx.fillStyle = '#597371';
    ctx.font = '10px "Plus Jakarta Sans", sans-serif';
    ctx.textAlign = 'right';
    ctx.fillText('125% Upper FDA/CDSCO Limit', padLeft + chartW - 5, bandTop + 12);
    ctx.fillText('80% Lower Regulatory Limit', padLeft + chartW - 5, bandBottom - 6);

    // Axes
    ctx.strokeStyle = '#CBD8D6';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(padLeft, padTop);
    ctx.lineTo(padLeft, padTop + chartH);
    ctx.lineTo(padLeft + chartW, padTop + chartH);
    ctx.stroke();

    // Axis labels
    ctx.fillStyle = '#597371';
    ctx.font = '10px "Plus Jakarta Sans", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('0 hrs', padLeft + 5, padTop + chartH + 18);
    ctx.fillText('2 hrs (Cmax Peak)', padLeft + chartW * 0.25, padTop + chartH + 18);
    ctx.fillText('6 hrs', padLeft + chartW * 0.5, padTop + chartH + 18);
    ctx.fillText('12 hrs', padLeft + chartW * 0.75, padTop + chartH + 18);
    ctx.fillText('24 hrs', padLeft + chartW, padTop + chartH + 18);

    ctx.save();
    ctx.translate(14, padTop + chartH / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.textAlign = 'center';
    ctx.fillText('Blood Concentration (ng/mL)', 0, 0);
    ctx.restore();

    // Pharmacokinetic Bateman equation simulation: C(t) = k * (e^-k_e*t - e^-k_a*t)
    function getConcentration(t, variation = 1.0) {
      if (t <= 0) return 0;
      const ka = 1.2; // absorption rate
      const ke = 0.16; // elimination rate
      const val = (Math.exp(-ke * t) - Math.exp(-ka * t)) * 2.2 * variation;
      return Math.max(0, val);
    }

    // 1. Draw Originator Curve (Deep Slate Teal)
    ctx.beginPath();
    ctx.lineWidth = 2.5;
    ctx.strokeStyle = '#2A4864';
    for (let px = 0; px <= chartW; px++) {
      const t = (px / chartW) * 24;
      const c = getConcentration(t, 1.0);
      const y = padTop + chartH - c * (chartH * 0.75);
      if (px === 0) ctx.moveTo(padLeft + px, y);
      else ctx.lineTo(padLeft + px, y);
    }
    ctx.stroke();

    // 2. Draw EQUA Equal Generic Curve (Vibrant Aqua-Teal, tightly aligned ±1.5%)
    ctx.beginPath();
    ctx.lineWidth = 2.5;
    ctx.setLineDash([5, 4]);
    ctx.strokeStyle = '#EB6B47';
    for (let px = 0; px <= chartW; px++) {
      const t = (px / chartW) * 24;
      // Real-world high quality generic fluctuates within 1-2%
      const c = getConcentration(t, 0.985);
      const y = padTop + chartH - c * (chartH * 0.75);
      if (px === 0) ctx.moveTo(padLeft + px, y);
      else ctx.lineTo(padLeft + px, y);
    }
    ctx.stroke();
    ctx.setLineDash([]); // reset dash

    // Add peak dot
    const peakX = chartW * 0.15;
    const peakC = getConcentration(1.8, 1.0);
    const peakY = padTop + chartH - peakC * (chartH * 0.75);

    ctx.fillStyle = '#2A4864';
    ctx.beginPath();
    ctx.arc(padLeft + peakX, peakY, 4, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#EB6B47';
    ctx.beginPath();
    ctx.arc(padLeft + peakX, peakY + 3, 4, 0, Math.PI * 2);
    ctx.fill();
  }

  window.addEventListener('resize', resize);
  resize();
}

// ==========================================
// 5. HONEST MATH / SAVINGS CALCULATOR
// ==========================================
function initSavingsCalculator() {
  const slider = document.getElementById('monthlySpendSlider');
  const spendDisplay = document.getElementById('spendDisplay');
  const equaSpendDisplay = document.getElementById('equaSpendDisplay');
  const annualSaveDisplay = document.getElementById('annualSaveDisplay');
  const fiveYearSaveDisplay = document.getElementById('fiveYearSaveDisplay');

  if (!slider) return;

  function update() {
    const brandedSpend = parseInt(slider.value, 10);
    // Generic medicines typically reduce chronic spend by 68-76%
    const equaSpend = Math.round(brandedSpend * 0.28);
    const monthlySaving = brandedSpend - equaSpend;
    const annualSaving = monthlySaving * 12;
    const fiveYearSaving = annualSaving * 5;

    if (spendDisplay) spendDisplay.textContent = `₹${brandedSpend.toLocaleString('en-IN')}`;
    if (equaSpendDisplay) equaSpendDisplay.textContent = `₹${equaSpend.toLocaleString('en-IN')}`;
    if (annualSaveDisplay) annualSaveDisplay.textContent = `₹${annualSaving.toLocaleString('en-IN')}`;
    if (fiveYearSaveDisplay) fiveYearSaveDisplay.textContent = `₹${fiveYearSaving.toLocaleString('en-IN')}`;
  }

  slider.addEventListener('input', update);
  update();
}

// ==========================================
// 6. FAQ ACCORDION (Plain-Spoken Pharmacist Voice)
// ==========================================
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isActive) item.classList.add('active');
      });
    }
  });
}

// ==========================================
// 7. REGIONAL LANGUAGE (ENGLISH / HINDI)
// ==========================================
const TRANSLATIONS = {
  en: {
    heroTagline: "Equal Medicine, Explained.",
    heroLead: "People don't doubt generics because they've seen proof against them. They doubt them because no one has shown them proof for them. In that silence, a low price reads as low quality.",
    heroSub: "EQUA fills that silence with calm, checkable facts. We explain what a generic is, how it is approved, made and tested, and why it costs less—keeping your doctor firmly in the conversation.",
    pillarEqualityTitle: "Equality",
    pillarEqualityText: "The exact same active molecule. When the patent expires, the molecular formula becomes public knowledge. Your body receives the identical clinical remedy.",
    pillarFairnessTitle: "Fairness",
    pillarFairnessText: "The price difference explained openly. You don't pay for 20-year-old expired patents, TV campaigns, or sales representatives. Only for pure manufacturing and quality checks.",
    pillarBalanceTitle: "Balance",
    pillarBalanceText: "Patient, pharmacist, and doctor each have a respected role. We don't ask you to bypass your doctor—we give you the exact questions to ask them with confidence.",
    honestMathTitle: "Why does it cost less?",
    honestMathSub: "Never because of compromised ingredients. Always because of unbundled marketing."
  },
  hi: {
    heroTagline: "समान दवा, पूरी जानकारी।",
    heroLead: "लोग जेनेरिक दवाओं पर इसलिए संदेह नहीं करते क्योंकि उनके पास कोई बुरा प्रमाण है। वे संदेह इसलिए करते हैं क्योंकि किसी ने उन्हें सच्चाई नहीं समझाई। इस चुप्पी में, कम कीमत को लोग कम गुणवत्ता समझ लेते हैं।",
    heroSub: "EQUA इसी चुप्पी को शांति और स्पष्ट तथ्यों से दूर करता है। हम समझाते हैं कि जेनेरिक दवा क्या है, कैसे बनती है, कैसे जांची जाती है और इसकी सही कीमत क्या है—और आपके डॉक्टर को इस चर्चा में साथ रखते हैं।",
    pillarEqualityTitle: "समानता (Equality)",
    pillarEqualityText: "वही सक्रिय दवा घटक (Active Molecule)। जब पेटेंट खत्म होता है, तो फॉर्मूला सभी के लिए उपलब्ध होता है। आपके शरीर को वही सटीक इलाज मिलता है।",
    pillarFairnessTitle: "निष्पक्षता (Fairness)",
    pillarFairnessText: "कीमत का अंतर पूरी ईमानदारी से सामने रखा गया है। आप पुराने विज्ञापनों और मार्केटिंग का खर्च नहीं देते—सिर्फ दवा बनाने और सख्त जांच की सही कीमत देते हैं।",
    pillarBalanceTitle: "संतुलन (Balance)",
    pillarBalanceText: "मरीज, फार्मासिस्ट और डॉक्टर—तीनों की अपनी महत्वपूर्ण भूमिका है। हम डॉक्टर को अलग नहीं करते, बल्कि डॉक्टर से सही सवाल पूछने का आत्मविश्वास देते हैं।",
    honestMathTitle: "इसकी कीमत कम क्यों है?",
    honestMathSub: "दवा की गुणवत्ता कम होने से कभी नहीं। विज्ञापनों और मार्केटिंग का भारी खर्च हटने से।"
  }
};

let currentLang = 'en';

function initLanguage() {
  const langBtns = document.querySelectorAll('.lang-btn');
  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      langBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const lang = btn.dataset.lang;
      applyLanguage(lang);
    });
  });
}

function applyLanguage(lang) {
  currentLang = lang;
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });
}
