// EQUA - Equal Medicine, Explained
// 10-Section Interactive Controller & Comprehensive Medicine Database

document.addEventListener('DOMContentLoaded', () => {
  initLanguageToggle();
  initMedicineChecker();
  initEquaCardMockup();
  initDoctorNote();
  initDoctorEvidence();
  initFaqAccordion();
  initCallMeBackForm();
  if (typeof initBoth3D === 'function') initBoth3D();
});

// Translations are draft Hindi copy and should be reviewed by a native speaker.
const HINDI_TRANSLATIONS = {
  'EQUA — Equal medicine. Clear proof.': 'EQUA — समान दवा। स्पष्ट प्रमाण।',
  'Medicine Checker': 'दवा चेकर',
  'What is a Generic?': 'जेनेरिक क्या है?',
  'Approval & Making': 'मंजूरी और निर्माण',
  'Why It Costs Less': 'कीमत कम क्यों है',
  'See an EQUA Card': 'EQUA कार्ड देखें',
  'Talk to Your Doctor': 'अपने डॉक्टर से बात करें',
  'Common Questions': 'आम सवाल',
  'Find Us': 'हमसे संपर्क करें',
  'Equal medicine, explained': 'समान दवा, सरल समझ',
  'Equal medicine. Clear proof.': 'समान दवा। स्पष्ट प्रमाण।',
  'Same salt. Same strength. See exactly how it’s checked.': 'वही साल्ट। वही शक्ति। देखें कि इसकी जांच कैसे होती है।',
  'Check my medicine': 'मेरी दवा जांचें',
  'Call us': 'हमें कॉल करें',
  'No promotional gimmicks. Plain facts you and your doctor can check together.': 'कोई प्रचार वाला वादा नहीं। सिर्फ साफ तथ्य, जिन्हें आप और आपके डॉक्टर मिलकर जांच सकते हैं।',
  'Type your brand medicine': 'अपनी ब्रांड दवा लिखें',
  'See the EQUA equivalent with the exact same active salt and strength side by side.': 'ठीक उसी सक्रिय साल्ट और शक्ति वाली EQUA समान दवा साथ-साथ देखें।',
  'Search by brand (e.g. Telma, Glycomet, Lipitor, Pan 40, Dolo, Augmentin, Thyronorm)...': 'ब्रांड से खोजें (जैसे Telma, Glycomet, Lipitor, Pan 40, Dolo, Augmentin, Thyronorm)...',
  'Filter by category:': 'श्रेणी से छांटें:',
  'All Medicines': 'सभी दवाएं',
  'Blood Pressure': 'ब्लड प्रेशर',
  'Diabetes': 'डायबिटीज',
  'Cholesterol & Heart': 'कोलेस्ट्रॉल और हृदय',
  'Acidity & Digestion': 'एसिडिटी और पाचन',
  'Pain & Fever': 'दर्द और बुखार',
  'Allergy & Breathing': 'एलर्जी और सांस',
  'Infections & Antibiotics': 'इन्फेक्शन और एंटीबायोटिक',
  'Thyroid': 'थायरॉयड',
  '25 medicines': '25 दवाएं',
  'Plain Definition': 'सरल परिभाषा',
  'What is a generic?': 'जेनेरिक क्या है?',
  'Answers the first doubt in three plain lines:': 'पहले संदेह का जवाब तीन सरल बातों में:',
  'Same active ingredient': 'वही सक्रिय घटक',
  'The exact chemical compound that does the work in your body.': 'वही रासायनिक घटक जो शरीर में असर करता है।',
  'Same strength': 'वही शक्ति',
  "The exact milligram dosage written on your doctor's prescription.": 'डॉक्टर की पर्ची में लिखी वही मिलीग्राम मात्रा।',
  'Same effect': 'वही असर',
  'Acts on the exact same bodily receptors with equal results.': 'शरीर में उन्हीं रिसेप्टरों पर काम करता है और समान परिणाम देता है।',
  'The Simple Molecular Reality': 'सरल आणविक सच',
  'Brand Pack': 'ब्रांड पैक',
  'Molecule X': 'मॉलिक्यूल X',
  'Originator formulation': 'मूल ब्रांड फॉर्मूलेशन',
  'EQUA Pack': 'EQUA पैक',
  'Equal generic formulation': 'समान जेनेरिक फॉर्मूलेशन',
  'Your bloodstream and organs absorb the molecule based on its chemical bonds—not the brand logo printed on the outer carton.': 'आपका रक्त और अंग अणु को उसके रासायनिक गुणों से पहचानते हैं, बाहरी डिब्बे पर छपे ब्रांड लोगो से नहीं।',
  'Standard Verification': 'मानक जांच',
  'How is it approved and made?': 'इसे मंजूरी और निर्माण कैसे मिलता है?',
  'A 4-step visual showing how every medicine is validated—explained in one plain line each, with no jargon.': 'हर दवा की जांच कैसे होती है, इसे चार आसान चरणों में बिना कठिन शब्दों के समझाया गया है।',
  'Approved by the regulator': 'नियामक से मंजूरी',
  'Reviewed and granted a legal manufacturing license by national drug authorities before it can be sold.': 'बिक्री से पहले राष्ट्रीय दवा अधिकारियों द्वारा समीक्षा और कानूनी निर्माण लाइसेंस दिया जाता है।',
  'CDSCO / State FDA license': 'CDSCO / राज्य FDA लाइसेंस',
  'Made at a licensed plant': 'लाइसेंस प्राप्त प्लांट में निर्मित',
  'Produced in inspected facilities that follow Good Manufacturing Practice (GMP) standards for clean air and water.': 'ऐसी निरीक्षित सुविधाओं में बनाया जाता है जो स्वच्छ हवा और पानी के लिए GMP मानकों का पालन करती हैं।',
  'WHO-GMP inspected plant': 'WHO-GMP निरीक्षित प्लांट',
  'Every batch tested': 'हर बैच की जांच',
  'Tested in certified laboratories to verify that tablets dissolve completely and contain the exact stated milligrams.': 'प्रमाणित प्रयोगशालाओं में जांच होती है कि टैबलेट ठीक से घुले और बताई गई मिलीग्राम मात्रा रखे।',
  'Pharmacopoeia dissolution check': 'फार्माकोपिया घुलनशीलता जांच',
  'Batch details on your pack': 'आपके पैक पर बैच विवरण',
  'Every strip has a clear batch number, manufacturing date, and expiry date printed directly on the foil.': 'हर स्ट्रिप पर बैच नंबर, निर्माण तारीख और एक्सपायरी तारीख साफ छपी होती है।',
  'Verifiable batch number': 'जांच योग्य बैच नंबर',
  'Honest Explainer': 'ईमानदार समझ',
  'Why does it cost less?': 'इसकी कीमत कम क्यों है?',
  'The three-picture explainer: answering the price doubt honestly without using price as the hook.': 'तीन हिस्सों में साफ जवाब: कीमत को लालच बनाए बिना कीमत का संदेह समझाया गया है।',
  'Discovery was paid 20 years ago': 'खोज की लागत पहले चुक चुकी',
  'When a new medicine is invented, the originator company receives a 20-year patent monopoly to recover laboratory research costs. Once that patent expires, the molecular recipe is legally open for anyone to make.': 'नई दवा बनने पर मूल कंपनी को शोध लागत निकालने के लिए पेटेंट अवधि मिलती है। पेटेंट खत्म होने पर वही अणु कानूनी रूप से अन्य निर्माता भी बना सकते हैं।',
  'The brand pays for sales & ads': 'ब्रांड बिक्री और विज्ञापन पर खर्च करता है',
  'Branded pharmaceutical companies employ large teams of sales representatives, give gifts, print glossy brochures, and sponsor conferences to keep doctors writing their brand name.': 'ब्रांडेड कंपनियां बिक्री टीमों, विज्ञापन और प्रचार पर खर्च करती हैं ताकि उनका ब्रांड नाम याद रहे।',
  'The medicine inside stays the same': 'अंदर की दवा वही रहती है',
  'EQUA doesn’t employ sales teams or run brand promotions. You only pay for the raw chemical molecule, licensed clean-room manufacturing, and certified laboratory batch checks.': 'EQUA बिक्री टीम या ब्रांड प्रचार नहीं चलाता। आप रासायनिक घटक, लाइसेंस प्राप्त निर्माण और प्रमाणित बैच जांच के लिए भुगतान करते हैं।',
  'Concrete Proof': 'ठोस प्रमाण',
  'See an EQUA Card & 3D Pack': 'EQUA कार्ड और 3D पैक देखें',
  'Drag to rotate the real 3D amber pack, zoom to read batch & expiry, or tap any element on the pack card to see its plain-language meaning.': 'असली 3D पैक को घुमाएं, बैच और एक्सपायरी पढ़ने के लिए ज़ूम करें, या किसी हिस्से पर टैप करके उसका सरल अर्थ देखें।',
  'Choose 3D Medicine to Inspect:': 'जांच के लिए 3D दवा चुनें:',
  '💊 Tablet Blister Strip (10 Tabs)': '💊 टैबलेट ब्लिस्टर स्ट्रिप (10 टैब)',
  '🧴 Oral Suspension Bottle (60 ml)': '🧴 ओरल सस्पेंशन बोतल (60 ml)',
  'Drag to turn and tilt in 3D • Scroll or pinch to zoom • Inspect real packaging & batch records': '3D में घुमाएं और झुकाएं • ज़ूम करें • पैकेजिंग और बैच रिकॉर्ड देखें',
  'EQUA Paracetamol Tablets IP 500mg: 3D Strip': 'EQUA पैरासिटामोल टैबलेट IP 500mg: 3D स्ट्रिप',
  'Foil side': 'फॉइल साइड',
  'Blister side': 'ब्लिस्टर साइड',
  'Angle': 'एंगल',
  'Batch + EXP': 'बैच + EXP',
  'Auto-spin': 'ऑटो-स्पिन',
  'Foil side: product name on every tablet, doctor strip, and the batch, MFG, EXP, MRP panel.': 'फॉइल साइड: हर टैबलेट पर नाम, डॉक्टर स्ट्रिप और बैच, MFG, EXP, MRP पैनल।',
  'EQUA Paracetamol Oral Suspension: 3D Amber Bottle': 'EQUA पैरासिटामोल ओरल सस्पेंशन: 3D एंबर बोतल',
  'Front label': 'फ्रंट लेबल',
  'Back label + expiry': 'बैक लेबल + एक्सपायरी',
  'Cap + seal': 'कैप + सील',
  'Side': 'साइड',
  'Front: what it is, what it is for, and the doctor strip.': 'फ्रंट: यह क्या है, किसके लिए है, और डॉक्टर स्ट्रिप।',
  'EQUA GENERIC PACK SPECIMEN': 'EQUA जेनेरिक पैक नमूना',
  'Tap any section ↓': 'किसी भी हिस्से पर टैप करें ↓',
  'Active Salt (Tap to inspect)': 'सक्रिय साल्ट (जांचने के लिए टैप करें)',
  'Strength': 'शक्ति',
  'Dosage Form': 'डोज़ फॉर्म',
  'Regulator Manufacturing License': 'नियामक निर्माण लाइसेंस',
  'Manufacturer & Plant Location': 'निर्माता और प्लांट स्थान',
  'Batch Number': 'बैच नंबर',
  'Expiry Date': 'एक्सपायरी तारीख',
  'What This Element Means': 'इस हिस्से का मतलब',
  'Active Salt / Molecule': 'सक्रिय साल्ट / अणु',
  'Technical term: Active Pharmaceutical Ingredient (API)': 'तकनीकी शब्द: सक्रिय फार्मास्यूटिकल घटक (API)',
  'This is the exact chemical molecule that treats the condition. By law, generic and brand medicines must contain this exact same molecule in identical purity.': 'यह वही रासायनिक अणु है जो बीमारी पर काम करता है। जेनेरिक और ब्रांड दवाओं में वही सक्रिय घटक समान गुणवत्ता मानकों के साथ होना चाहिए।',
  'Every pack is traceable to batch laboratory test records logged before distribution.': 'हर पैक को वितरण से पहले दर्ज बैच लैब टेस्ट रिकॉर्ड से जोड़ा जा सकता है।',
  'Doctor in the Story': 'देखभाल में डॉक्टर',
  'Talk to your doctor': 'अपने डॉक्टर से बात करें',
  'EQUA keeps your physician at the center of your care. Take this clear note to your next consultation.': 'EQUA आपकी देखभाल में डॉक्टर को केंद्र में रखता है। अगली सलाह में यह साफ नोट साथ ले जाएं।',
  'Downloadable Doctor Note Slip': 'डाउनलोड करने योग्य डॉक्टर नोट स्लिप',
  'A polite, 1-page question card to hand to your physician': 'डॉक्टर को देने के लिए विनम्र, एक पेज का सवाल कार्ड',
  'Open Printable Slip': 'प्रिंट स्लिप खोलें',
  'The exact question written on the note:': 'नोट में लिखा सही सवाल:',
  '"Doctor, I am prescribed [Brand Name] for my routine treatment. Is the equal generic formulation of this exact salt ([Salt Name] [Strength]) appropriate for my daily maintenance?"': '"डॉक्टर, मेरी नियमित दवा के लिए [Brand Name] लिखी गई है। क्या इसी साल्ट ([Salt Name] [Strength]) का समान जेनेरिक फॉर्मूलेशन मेरे नियमित इलाज के लिए ठीक है?"',
  'Are you a healthcare practitioner?': 'क्या आप स्वास्थ्यकर्मी हैं?',
  'View Clinical Evidence Sheet for Doctors →': 'डॉक्टरों के लिए क्लिनिकल एविडेंस शीट देखें →',
  'Real Doubts': 'असल सवाल',
  'Common questions': 'आम सवाल',
  'Short, honest answers—including asking your doctor first.': 'छोटे और ईमानदार जवाब, जिनमें पहले डॉक्टर से पूछना शामिल है।',
  'Is it the same as my brand?': 'क्या यह मेरे ब्रांड जैसी ही है?',
  'Yes. The active therapeutic molecule, the dosage strength, and the rate of absorption into your body are identical. Trademark law requires different packaging and tablet shapes, but the chemical remedy inside is the same.': 'हां। सक्रिय घटक और शक्ति वही होती है, और शरीर में अवशोषण स्वीकृत दायरे में जांचा जाता है। पैकेजिंग और टैबलेट का आकार ट्रेडमार्क नियमों के कारण अलग हो सकता है। आपका डॉक्टर पुष्टि कर सकता है कि यह आपके लिए सही है।',
  'Why does my doctor write a brand name?': 'मेरे डॉक्टर ब्रांड नाम क्यों लिखते हैं?',
  'Doctors see many patients daily and naturally write the familiar brand names they learned in residency or saw from pharmaceutical representatives. When you politely ask your doctor if the generic salt is fine, most physicians readily agree.': 'डॉक्टर अक्सर वे ब्रांड नाम लिखते हैं जिन्हें वे प्रशिक्षण और रोज़मर्रा की प्रैक्टिस से अच्छी तरह जानते हैं। कई डॉक्टर पूछने पर जेनेरिक की पुष्टि कर देते हैं, इसलिए पूछना हमेशा ठीक है।',
  'Can I switch?': 'क्या मैं बदल सकता हूं?',
  'Ask your doctor first. For chronic maintenance medicines like blood pressure, cholesterol, and diabetes, switching to the equal salt is standard and safe, but your doctor should always confirm that the strength and release profile match your clinical plan.': 'पहले अपने डॉक्टर से पूछें। ब्लड प्रेशर, कोलेस्ट्रॉल, डायबिटीज और थायरॉयड जैसी लंबे समय की दवाओं में बदलाव अक्सर संभव होता है, लेकिन फैसला डॉक्टर लेते हैं।',
  'Direct Contact': 'सीधा संपर्क',
  'Find us / reach us': 'हमें खोजें / संपर्क करें',
  'Speak directly with a licensed pharmacist or visit our verified dispensary.': 'लाइसेंस प्राप्त फार्मासिस्ट से सीधे बात करें या हमारे सत्यापित डिस्पेंसरी पर आएं।',
  'Toll-Free Pharmacist Helpline': 'टोल-फ्री फार्मासिस्ट हेल्पलाइन',
  'Available Monday to Saturday, 9:00 AM – 8:00 PM': 'सोमवार से शनिवार, सुबह 9:00 से रात 8:00 बजे तक उपलब्ध',
  'WhatsApp Consultation': 'WhatsApp सलाह',
  'Message on WhatsApp (+91 98200 37820)': 'WhatsApp पर संदेश भेजें (+91 98200 37820)',
  'Send a picture of your prescription for salt validation.': 'साल्ट की पुष्टि के लिए अपनी पर्ची की तस्वीर भेजें।',
  'Physical Dispensary Location': 'डिस्पेंसरी का स्थान',
  'EQUA Pharmacy Store #01': 'EQUA फार्मेसी स्टोर #01',
  'Shop 4, Ground Floor, Health Plaza, Linking Road, Bandra West, Mumbai 400050.\n                Timings: 8:00 AM – 10:00 PM (All 7 Days)': 'शॉप 4, ग्राउंड फ्लोर, हेल्थ प्लाज़ा, लिंकिंग रोड, बांद्रा वेस्ट, मुंबई 400050।\n                समय: सुबह 8:00 से रात 10:00 बजे तक (सातों दिन)',
  'Request a Pharmacist Call Back': 'फार्मासिस्ट कॉल बैक का अनुरोध करें',
  'Leave your number and a registered pharmacist will call you back to answer your questions.': 'अपना नंबर छोड़ें और एक पंजीकृत फार्मासिस्ट आपके सवालों का जवाब देने के लिए कॉल करेगा।',
  'Your Name': 'आपका नाम',
  'e.g. Ramesh Sharma': 'जैसे रमेश शर्मा',
  'Phone Number': 'फोन नंबर',
  'e.g. 98200 00000': 'जैसे 98200 00000',
  'Medicine Name / Salt on your prescription': 'पर्ची पर दवा का नाम / साल्ट',
  'e.g. Telma 40, Glycomet': 'जैसे Telma 40, Glycomet',
  'Preferred Call Time': 'कॉल का पसंदीदा समय',
  'Morning (10:00 AM – 1:00 PM)': 'सुबह (10:00 AM – 1:00 PM)',
  'Afternoon (1:00 PM – 5:00 PM)': 'दोपहर (1:00 PM – 5:00 PM)',
  'Evening (5:00 PM – 8:00 PM)': 'शाम (5:00 PM – 8:00 PM)',
  'Submit Request': 'अनुरोध भेजें',
  'Request Received': 'अनुरोध मिल गया',
  'A registered pharmacist will call you during your selected time window.': 'एक पंजीकृत फार्मासिस्ट आपके चुने समय में कॉल करेगा।',
  'About EQUA:': 'EQUA के बारे में:',
  'About EQUA: We chose the name EQUA because it represents equality (same active chemical ingredient), fairness (the price difference is explained openly), and balance (patient, pharmacist, and doctor each have a role).': 'EQUA नाम इसलिए चुना गया क्योंकि यह समानता (वही सक्रिय रासायनिक घटक), निष्पक्षता (कीमत का अंतर खुले तौर पर समझाया गया), और संतुलन (मरीज, फार्मासिस्ट और डॉक्टर की भूमिका) दिखाता है।',
  'Pharmacy Licences & Compliance': 'फार्मेसी लाइसेंस और अनुपालन',
  'Retail Drug Licence:': 'रिटेल ड्रग लाइसेंस:',
  'Supervising Pharmacist:': 'पर्यवेक्षक फार्मासिस्ट:',
  'Jurisdiction:': 'क्षेत्राधिकार:',
  'Registered Address': 'पंजीकृत पता',
  'EQUA Healthcare LLP\n            Shop 4, Ground Floor, Health Plaza,\n            Linking Road, Bandra West, Mumbai 400050.': 'EQUA Healthcare LLP\n            शॉप 4, ग्राउंड फ्लोर, हेल्थ प्लाज़ा,\n            लिंकिंग रोड, बांद्रा वेस्ट, मुंबई 400050।',
  '© 2026 EQUA Healthcare LLP. All rights reserved. Equal Medicine, Explained.': '© 2026 EQUA Healthcare LLP. सर्वाधिकार सुरक्षित। समान दवा, सरल समझ।',
  'Educational resource. Always consult your doctor before changing any medicine.': 'शैक्षणिक जानकारी। कोई भी दवा बदलने से पहले हमेशा डॉक्टर से सलाह लें।',
  'Doctor Consultation Note': 'डॉक्टर परामर्श नोट',
  'To present to your attending physician': 'अपने डॉक्टर को दिखाने के लिए',
  'To the Doctor:': 'डॉक्टर के लिए:',
  'I am currently taking': 'मैं अभी',
  'for my daily maintenance.': 'अपनी नियमित दवा के रूप में ले रहा/रही हूं।',
  'Is the equal generic formulation containing the active salt': 'क्या सक्रिय साल्ट वाली समान जेनेरिक दवा',
  'at': 'की शक्ति',
  'suitable for my treatment?': 'मेरे इलाज के लिए उपयुक्त है?',
  'Manufactured in a WHO-GMP certified facility. Tested to pharmacopoeia dissolution standards.': 'WHO-GMP प्रमाणित सुविधा में निर्मित। फार्माकोपिया घुलनशीलता मानकों के अनुसार जांचा गया।',
  'Close': 'बंद करें',
  'Print Note Slip': 'नोट स्लिप प्रिंट करें',
  'Regulatory Evidence Summary for Physicians': 'डॉक्टरों के लिए नियामक प्रमाण सारांश',
  'Bioequivalence & Pharmacopoeial Quality Standards': 'बायोइक्विवेलेंस और फार्माकोपियल गुणवत्ता मानक',
  'EQUA dispenses generic formulations complying with the bioequivalence criteria defined under Schedule M of the Drugs and Cosmetics Rules (India) and WHO guidelines.': 'EQUA ऐसे जेनेरिक फॉर्मूलेशन देता है जो Drugs and Cosmetics Rules (India) के Schedule M और WHO दिशानिर्देशों के बायोइक्विवेलेंस मानदंडों का पालन करते हैं।',
  '• Bioequivalence Margin: 90% Confidence Interval for AUC and Cmax within 80.00% – 125.00%.': '• बायोइक्विवेलेंस सीमा: AUC और Cmax के लिए 90% Confidence Interval 80.00% – 125.00% के भीतर।',
  '• Dissolution Standard: In-vitro profile similarity factor (f2) > 50 against originator standards.': '• घुलनशीलता मानक: मूल मानकों की तुलना में In-vitro profile similarity factor (f2) > 50।',
  '• Facilities: Sourced strictly from WHO-GMP compliant manufacturing facilities.': '• सुविधाएं: केवल WHO-GMP अनुपालन निर्माण सुविधाओं से स्रोत।',
  'We encourage generic prescribing to support patient adherence in lifelong chronic therapy.': 'लंबे समय के इलाज में मरीज की नियमितता बनाए रखने के लिए हम जेनेरिक प्रिस्क्राइबिंग को प्रोत्साहित करते हैं।',
  'Close Evidence Summary': 'एविडेंस सारांश बंद करें',
  'The Prescribed Brand': 'लिखी गई ब्रांड दवा',
  'Originator / Brand:': 'मूल / ब्रांड:',
  'Standard pharmacy price:': 'मानक फार्मेसी कीमत:',
  'Exact Same Salt': 'ठीक वही साल्ट',
  'EQUA Equivalent': 'EQUA समान विकल्प',
  'Proof:': 'प्रमाण:',
  'See Pack in 3D': '3D में पैक देखें',
  'Get Doctor Note Slip': 'डॉक्टर नोट स्लिप लें',
  'No medicine match found for': 'इसके लिए कोई दवा मैच नहीं मिली:',
  'Try typing common brands (e.g., Telma, Glycomet, Lipitor, Pan 40, Dolo, Augmentin, Thyronorm) or the active salt name.': 'सामान्य ब्रांड (जैसे Telma, Glycomet, Lipitor, Pan 40, Dolo, Augmentin, Thyronorm) या सक्रिय साल्ट नाम लिखकर देखें।',
  'Active Salt / Molecule': 'सक्रिय साल्ट / अणु',
  'Exact Dosage Strength': 'ठीक डोज़ शक्ति',
  'Technical term: Dosage quantification in milligrams (mg)': 'तकनीकी शब्द: मिलीग्राम (mg) में डोज़ माप',
  'Government Drug Approval': 'सरकारी दवा मंजूरी',
  'Technical term: Central Drugs Standard Control Organisation (CDSCO) license': 'तकनीकी शब्द: Central Drugs Standard Control Organisation (CDSCO) लाइसेंस',
  'Licensed Manufacturing Facility': 'लाइसेंस प्राप्त निर्माण सुविधा',
  'Technical term: WHO-Good Manufacturing Practice (WHO-GMP)': 'तकनीकी शब्द: WHO-Good Manufacturing Practice (WHO-GMP)',
  'Batch Number & Lab Test Records': 'बैच नंबर और लैब टेस्ट रिकॉर्ड',
  'Technical term: Batch Analytical Record / Certificate of Analysis': 'तकनीकी शब्द: Batch Analytical Record / Certificate of Analysis',
  'Tablet': 'टैबलेट',
  'Film-coated Tablet': 'फिल्म-कोटेड टैबलेट',
  'Capsule-shaped Tablet': 'कैप्सूल आकार टैबलेट',
  'Sustained Release Tablet': 'सस्टेन्ड रिलीज टैबलेट',
  'Gastro-resistant Tablet': 'गैस्ट्रो-रेसिस्टेंट टैबलेट',
  'Enteric Coated Tablet': 'एंटेरिक कोटेड टैबलेट',
  'Capsule (Pellets)': 'कैप्सूल (पेलेट्स)',
  'Small Uncoated Tablet': 'छोटी अनकोटेड टैबलेट',
  'Relaxes smooth muscle in blood vessels so blood flows with normal, steady resistance.': 'रक्त वाहिकाओं की मांसपेशियों को आराम देता है ताकि रक्त सामान्य और स्थिर प्रतिरोध के साथ बहे।',
  'Relaxes arterial walls to lower resistance against the heart muscle.': 'धमनियों की दीवारों को आराम देकर हृदय पर प्रतिरोध कम करता है।',
  'Blocks angiotensin receptors to keep chronic blood pressure relaxed and protect kidneys.': 'एंजियोटेंसिन रिसेप्टरों को ब्लॉक करके रक्तचाप नियंत्रित रखने और किडनी की रक्षा में मदद करता है।',
  'Inhibits ACE enzyme to widen blood vessels and relieve strain on cardiac pumping.': 'ACE एंजाइम को रोककर रक्त वाहिकाओं को चौड़ा करता है और हृदय पर दबाव कम करता है।',
  'Provides steady 24-hour dilation of peripheral arteries for stable morning readings.': 'सुबह की रीडिंग स्थिर रखने के लिए 24 घंटे धमनियों को आराम देने में मदद करता है।',
  'Helps cells take in glucose from your blood and reduces excess glucose made by the liver.': 'कोशिकाओं को रक्त से ग्लूकोज लेने में मदद करता है और लीवर द्वारा बनने वाला अतिरिक्त ग्लूकोज कम करता है।',
  'Prompts pancreatic beta-cells to release natural insulin during mealtimes.': 'भोजन के समय पैंक्रियास की बीटा कोशिकाओं को प्राकृतिक इंसुलिन छोड़ने में मदद करता है।',
  'Filters excess blood sugar out through urine while protecting heart and kidney function.': 'अतिरिक्त ब्लड शुगर को पेशाब के रास्ते बाहर निकालने में मदद करता है और हृदय-किडनी की देखभाल में सहायक है।',
  'Inhibits DPP-4 enzyme to prolong active incretin hormone levels after eating.': 'खाने के बाद सक्रिय इन्क्रेटिन हार्मोन को लंबे समय तक बनाए रखने के लिए DPP-4 एंजाइम को रोकता है।',
  'Supports physiological pancreatic release of insulin without causing hypoglycemia spikes.': 'हाइपोग्लाइसीमिया स्पाइक के बिना पैंक्रियास से इंसुलिन रिलीज को सहारा देता है।',
  'Slows down the HMG-CoA enzyme in your liver that synthesizes LDL cholesterol.': 'लीवर में LDL कोलेस्ट्रॉल बनाने वाले HMG-CoA एंजाइम को धीमा करता है।',
  'Strongly reduces LDL bad cholesterol and calms inflammation inside coronary arteries.': 'LDL खराब कोलेस्ट्रॉल कम करने और कोरोनरी धमनियों की सूजन शांत करने में मदद करता है।',
  'Prevents blood platelets from clustering together to avoid clot formation in arteries.': 'रक्त प्लेटलेट्स को इकट्ठा होने से रोकता है ताकि धमनियों में थक्का बनने का जोखिम कम हो।',
  'Low-dose blood thinner with enteric protection to safeguard delicate stomach lining.': 'कम खुराक वाली रक्त पतला करने वाली दवा, पेट की नाज़ुक परत की सुरक्षा के लिए एंटेरिक सुरक्षा के साथ।',
  'Temporarily switches off stomach proton pumps to let irritated lining heal and stop reflux.': 'पेट के प्रोटॉन पंप को अस्थायी रूप से कम करता है ताकि जलन वाली परत ठीक हो और रिफ्लक्स घटे।',
  'Fast-acting suppression of stomach acid secretion for heartburn and ulcer healing.': 'हार्टबर्न और अल्सर हीलिंग के लिए पेट के एसिड स्राव को तेजी से कम करता है।',
  'Classic proton-pump inhibitor reducing acid production in gastritis and sour belching.': 'गैस्ट्राइटिस और खट्टी डकारों में एसिड उत्पादन कम करने वाला प्रोटॉन-पंप इनहिबिटर।',
  'Calms temperature signals in the brain and eases mild to moderate body aches.': 'मस्तिष्क में तापमान संकेत शांत करता है और हल्के से मध्यम दर्द में राहत देता है।',
  'Non-steroidal anti-inflammatory reducing swelling, dental pain, and joint stiffness.': 'सूजन, दांत दर्द और जोड़ों की जकड़न कम करने वाली नॉन-स्टेरॉइडल एंटी-इन्फ्लेमेटरी दवा।',
  'Combination relief addressing muscular inflammation and acute pain together.': 'मांसपेशियों की सूजन और तेज दर्द दोनों में राहत देने वाला संयोजन।',
  'Opens bronchial airways and stops histamine-induced sneezing and runny nose.': 'ब्रॉन्कियल एयरवे खोलने और हिस्टामिन से होने वाली छींक तथा बहती नाक कम करने में मदद करता है।',
  'Blocks histamine H1 receptors to soothe pollen, dust, and skin allergy itching.': 'पराग, धूल और त्वचा एलर्जी की खुजली शांत करने के लिए हिस्टामिन H1 रिसेप्टर ब्लॉक करता है।',
  'Restores natural synthetic T4 thyroid hormone levels for healthy daily metabolism.': 'स्वस्थ दैनिक मेटाबॉलिज्म के लिए T4 थायरॉयड हार्मोन स्तर बहाल करने में मदद करता है।',
  'Broad-spectrum antibiotic with beta-lactamase protection against bacterial infections.': 'बैक्टीरियल इन्फेक्शन के खिलाफ बीटा-लैक्टामेज सुरक्षा वाला ब्रॉड-स्पेक्ट्रम एंटीबायोटिक।',
  'Macrolide antibiotic that stops bacterial protein synthesis in chest, throat, and sinus infections.': 'छाती, गले और साइनस इन्फेक्शन में बैक्टीरिया की प्रोटीन सिंथेसिस रोकने वाला मैक्रोलाइड एंटीबायोटिक।',
  'Dissolution profile matches originator within ±2.8% in testing': 'टेस्टिंग में घुलनशीलता प्रोफाइल मूल दवा से ±2.8% के भीतर मेल खाती है',
  '100% molecular equivalence verified under Indian Pharmacopoeia standards': 'भारतीय फार्माकोपिया मानकों के तहत 100% आणविक समानता सत्यापित',
  'Identical receptor affinity curve and dissolution kinetics': 'रिसेप्टर अफिनिटी कर्व और घुलनशीलता किनेटिक्स समान',
  'Active metabolite absorption profile verified against originator': 'मूल दवा की तुलना में सक्रिय मेटाबोलाइट अवशोषण प्रोफाइल सत्यापित',
  '90% CI for Cmax and AUC strictly within regulatory envelope': 'Cmax और AUC के लिए 90% CI नियामक सीमा के भीतर',
  '12-hour sustained dissolution rate statistically identical to originator': '12 घंटे की सस्टेन्ड घुलनशीलता दर मूल दवा से सांख्यिकीय रूप से समान',
  'Dissolution profile matches originator within ±2.5%': 'घुलनशीलता प्रोफाइल मूल दवा से ±2.5% के भीतर मेल खाती है',
  'Bioequivalence established in healthy adult volunteers per CDSCO rules': 'CDSCO नियमों के अनुसार स्वस्थ वयस्क स्वयंसेवकों में बायोइक्विवेलेंस स्थापित',
  'Enzyme inhibition curve aligns with standard formulation': 'एंजाइम inhibition curve मानक फॉर्मूलेशन से मेल खाता है',
  'Dissolution > 85% within 15 minutes in standard buffer test': 'मानक बफर टेस्ट में 15 मिनट के भीतर घुलनशीलता > 85%',
  '90% confidence interval for plasma absorption strictly within 80–125%': 'प्लाज्मा अवशोषण के लिए 90% confidence interval 80–125% के भीतर',
  'In-vitro dissolution profiles identical across pH 1.2, 4.5, and 6.8': 'pH 1.2, 4.5 और 6.8 पर In-vitro घुलनशीलता प्रोफाइल समान',
  'Platelet aggregation inhibition statistically identical to originator': 'प्लेटलेट aggregation inhibition मूल दवा से सांख्यिकीय रूप से समान',
  'Enteric barrier passes 2-hour 0.1N HCl gastric resistance testing': 'एंटेरिक बैरियर 2 घंटे की 0.1N HCl gastric resistance testing पास करता है',
  'Enteric coating resists gastric acid for 2 hours, releasing completely in intestinal pH': 'एंटेरिक कोटिंग 2 घंटे तक गैस्ट्रिक एसिड से बचती है और intestinal pH में पूरी तरह रिलीज होती है',
  'Rapid intestinal release verified in dissolution profiling': 'घुलनशीलता प्रोफाइलिंग में तेज intestinal release सत्यापित',
  'Pellet dissolution curve meets Indian Pharmacopoeia standard': 'पेलेट घुलनशीलता कर्व भारतीय फार्माकोपिया मानक पूरा करता है',
  'Pure API chemical assay > 99.8% verified per IP/BP standards': 'IP/BP मानकों के अनुसार शुद्ध API chemical assay > 99.8% सत्यापित',
  'Complete dissolution within 30 minutes in neutral phosphate buffer': 'न्यूट्रल फॉस्फेट बफर में 30 मिनट के भीतर पूर्ण घुलनशीलता',
  'Both active ingredients dissolve synchronously in compliance with dual assay': 'दोनों सक्रिय घटक dual assay के अनुरूप साथ-साथ घुलते हैं',
  'Receptor antagonism and bioequivalence verified in healthy volunteers': 'स्वस्थ स्वयंसेवकों में receptor antagonism और bioequivalence सत्यापित',
  'Immediate dissolution > 90% within 10 minutes': '10 मिनट के भीतर तत्काल घुलनशीलता > 90%',
  'Narrow therapeutic ratio precision: content uniformity verified within ±1.5%': 'नैरो therapeutic ratio precision: content uniformity ±1.5% के भीतर सत्यापित',
  'Potency and moisture barrier packaging validated per IP standard': 'IP मानक के अनुसार potency और moisture barrier packaging सत्यापित',
  'Bioavailability curve overlay matches originator standard strictly': 'Bioavailability curve overlay मूल मानक से सख्ती से मेल खाता है'
};

const originalNodeText = new WeakMap();
const originalAttrText = new WeakMap();
let currentLanguage = 'en';

function initLanguageToggle() {
  const toggle = document.getElementById('languageToggle');
  currentLanguage = getStoredLanguage();

  if (toggle) {
    toggle.addEventListener('click', () => {
      setLanguage(currentLanguage === 'hi' ? 'en' : 'hi');
    });
  }

  setLanguage(currentLanguage, false);
}

function getStoredLanguage() {
  try {
    return localStorage.getItem('equa-language') === 'hi' ? 'hi' : 'en';
  } catch (error) {
    return 'en';
  }
}

function setLanguage(language, shouldStore = true) {
  currentLanguage = language === 'hi' ? 'hi' : 'en';
  document.documentElement.lang = currentLanguage === 'hi' ? 'hi' : 'en';

  try {
    document.title = currentLanguage === 'hi'
      ? HINDI_TRANSLATIONS['EQUA — Equal medicine. Clear proof.']
      : 'EQUA — Equal medicine. Clear proof.';
    if (shouldStore) localStorage.setItem('equa-language', currentLanguage);
  } catch (error) {
    document.title = currentLanguage === 'hi'
      ? HINDI_TRANSLATIONS['EQUA — Equal medicine. Clear proof.']
      : 'EQUA — Equal medicine. Clear proof.';
  }

  updateLanguageToggle();
  applyCurrentLanguage();
}

function updateLanguageToggle() {
  const toggle = document.getElementById('languageToggle');
  if (!toggle) return;

  const isHindi = currentLanguage === 'hi';
  toggle.textContent = isHindi ? 'English' : 'हिंदी';
  toggle.classList.toggle('is-active', isHindi);
  toggle.setAttribute('aria-pressed', String(isHindi));
  toggle.setAttribute(
    'aria-label',
    isHindi ? 'Change website language to English' : 'Change website language to Hindi'
  );
}

function applyCurrentLanguage(root = document.body) {
  if (!root) return;

  translateTextNodes(root);
  translateElementAttributes(root);
}

function translateTextNodes(root) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || ['SCRIPT', 'STYLE', 'NOSCRIPT', 'SVG'].includes(parent.tagName)) {
        return NodeFilter.FILTER_REJECT;
      }
      return node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    }
  });

  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);

  nodes.forEach(node => {
    if (!originalNodeText.has(node)) originalNodeText.set(node, node.nodeValue);
    const original = originalNodeText.get(node);
    node.nodeValue = currentLanguage === 'hi' ? translatePreservingSpace(original) : original;
  });
}

function translateElementAttributes(root) {
  const elements = root.querySelectorAll('[placeholder], [aria-label], img[alt], option');
  elements.forEach(el => {
    ['placeholder', 'aria-label', 'alt'].forEach(attr => {
      if (!el.hasAttribute(attr)) return;
      const originalAttrs = originalAttrText.get(el) || {};
      if (!originalAttrs[attr]) {
        originalAttrs[attr] = el.getAttribute(attr);
        originalAttrText.set(el, originalAttrs);
      }
      const original = originalAttrs[attr];
      el.setAttribute(attr, currentLanguage === 'hi' ? translateText(original) : original);
    });
  });
}

function translatePreservingSpace(value) {
  const leading = value.match(/^\s*/)[0];
  const trailing = value.match(/\s*$/)[0];
  return `${leading}${translateText(value.trim())}${trailing}`;
}

function translateText(value) {
  if (currentLanguage !== 'hi') return value;

  const compact = value.replace(/\s+/g, ' ').trim();
  if (HINDI_TRANSLATIONS[value]) return HINDI_TRANSLATIONS[value];
  if (HINDI_TRANSLATIONS[compact]) return HINDI_TRANSLATIONS[compact];

  const medicineCount = compact.match(/^(\d+) medicines shown$/);
  if (medicineCount) return `${medicineCount[1]} दवाएं दिखाई गईं`;

  const noMatch = compact.match(/^No medicine match found for "(.+)"$/);
  if (noMatch) return `"${noMatch[1]}" के लिए कोई दवा मैच नहीं मिली`;

  if (compact.startsWith('Strength:')) {
    return value.replace('Strength:', 'शक्ति:');
  }
  if (compact.startsWith('This is ') && compact.includes(' It is the exact chemical molecule')) {
    return value.replace(
      /^This is (.+)\. It is the exact chemical molecule that treats the condition\. By law, generic and brand medicines must contain this exact same molecule in identical purity\.$/,
      'यह $1 है। यह वही रासायनिक अणु है जो बीमारी पर काम करता है। जेनेरिक और ब्रांड दवाओं में वही सक्रिय घटक समान गुणवत्ता मानकों के साथ होना चाहिए।'
    );
  }
  if (compact.startsWith('This pack contains exactly ')) {
    return value.replace(
      /^This pack contains exactly (.+) per tablet—the exact amount your physician prescribed\. No less, no more\.$/,
      'इस पैक में हर टैबलेट में ठीक $1 है, यानी डॉक्टर द्वारा लिखी गई मात्रा। न कम, न ज्यादा।'
    );
  }
  if (compact.startsWith('Licensed under ')) {
    return value.replace(
      /^Licensed under (.+)\. This verifies that national health regulators have reviewed the formula, dissolution tests, and safety records before allowing it to be made\.$/,
      '$1 के तहत लाइसेंस प्राप्त। इसका मतलब है कि राष्ट्रीय स्वास्थ्य नियामकों ने निर्माण की अनुमति से पहले फॉर्मूला, घुलनशीलता जांच और सुरक्षा रिकॉर्ड देखे हैं।'
    );
  }
  if (compact.startsWith('Manufactured at: ')) {
    return value.replace(
      /^Manufactured at: (.+)\. The plant is certified under World Health Organization standards for clean air, water purification, and regular government inspections\.$/,
      'निर्माण स्थान: $1। यह प्लांट साफ हवा, जल शुद्धिकरण और नियमित सरकारी निरीक्षणों के लिए WHO मानकों के तहत प्रमाणित है।'
    );
  }
  if (compact.startsWith('Batch: ')) {
    return value.replace(
      /^Batch: (.+) \(Expires (.+)\)\. Every batch produced undergoes chemical dissolution testing in a certified lab\. The record is permanently logged against this batch number\.$/,
      'बैच: $1 (एक्सपायरी $2)। हर बैच की प्रमाणित लैब में रासायनिक घुलनशीलता जांच होती है और रिकॉर्ड इस बैच नंबर से जुड़ता है।'
    );
  }

  return value;
}

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
      applyCurrentLanguage(resultsContainer);
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
            <img src="assets/logo-icon.svg?v=3" alt="Verified" class="w-4 h-4 object-contain">
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
    applyCurrentLanguage(resultsContainer);
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
  applyCurrentLanguage();
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
  applyCurrentLanguage();
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
  applyCurrentLanguage(modal);
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
