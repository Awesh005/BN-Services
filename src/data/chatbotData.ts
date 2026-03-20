// chatbotData.ts — BN INTELHUB Services Chatbot
// NEW: `whatsappMessage` field — pre-filled WhatsApp message per service

export interface ChatResponse {
  keywords: string[];
  response: string;
  category: string;
  subOptions?: string[];
  whatsappMessage?: string; // ← if set, a "Chat on WhatsApp" button appears in the reply
}

const WA_PHONE = "918936078905";

/** Build a wa.me URL with a pre-filled message */
export const buildWAUrl = (msg: string) =>
  `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(msg)}`;

export const chatbotData: ChatResponse[] = [

  // ── GREETINGS ──────────────────────────────────────────────────────────────
  {
    category: "Greeting",
    keywords: ["hi", "hello", "hey", "hii", "helo", "namaste", "good morning", "good afternoon", "good evening", "start", "help"],
    response: "Hello! 👋 Welcome to **BN INTELHUB** — Pioneering the Future of Intelligence!\n\nWe offer cutting-edge solutions in:\n• 💻 Software & AI Development\n• 🧠 Consultancy & Strategy\n• 📣 Marketing & Growth\n• ☁️ Infrastructure & IT Support\n• 🌍 GIS, GPS & Other Services\n\nHow can I assist you today?",
    subOptions: ["Web App", "Mobile App", "AI Solutions", "Digital Marketing", "Cyber Security", "GIS Mapping", "All Services", "Pricing", "Contact"],
    whatsappMessage: "Hello BN INTELHUB! 👋 I visited your website and would like to know more about your services.",
  },

  // ── ABOUT ─────────────────────────────────────────────────────────────────
  {
    category: "About",
    keywords: ["about", "who are you", "bn intelhub", "intelhub", "company", "what do you do", "your company", "services you offer", "what is bn"],
    response: "**BN INTELHUB** is a next-generation AI & technology company dedicated to *Pioneering the Future of Intelligence*.\n\nWe serve businesses across six major verticals:\n🔹 Software & Application Development\n🔹 Business Consultancy & Strategy\n🔹 IT Support & Training\n🔹 Marketing & Digital Growth\n🔹 Infrastructure & Security\n🔹 GIS, GPS & Emerging Tech",
    subOptions: ["Software Services", "Consultancy", "Marketing", "Infrastructure", "Hire Us"],
    whatsappMessage: "Hello BN INTELHUB! I'd like to know more about your company and what you offer.",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // SOFTWARE
  // ══════════════════════════════════════════════════════════════════════════

  {
    category: "Software — Web Applications",
    keywords: ["web application", "web app", "webapp", "web portal", "online platform", "saas", "react", "angular", "node", "fullstack", "full stack", "website development", "web development"],
    response: "🌐 **Web Applications** at BN INTELHUB:\n\nWe build scalable, high-performance web applications. Please choose the type you're interested in:",
    subOptions: ["Static Website", "Dynamic Website", "Customized Web App"],
    whatsappMessage: "Hello BN INTELHUB! 🌐 I'm interested in Web Application development. Can we discuss my requirements?",
  },
  {
    category: "Web — Static Website",
    keywords: ["static website", "static web", "static site", "brochure website", "informational website", "simple website", "html website"],
    response: "🌐 **Static Website** at BN INTELHUB:\n\n✅ **What's included:**\n• 5–10 page responsive website\n• HTML, CSS & JavaScript\n• Fast loading — no database needed\n• SEO-ready structure\n• Contact form integration\n• Mobile-first design\n\n💡 **Best for:** Portfolio sites, landing pages, brochure websites\n⏱️ **Delivery:** 7–10 working days",
    subOptions: ["Dynamic Website", "Customized Web App", "Pricing", "Contact"],
    whatsappMessage: "Hello BN INTELHUB! 🌐 I'm interested in a Static Website. Please share your pricing and process.",
  },
  {
    category: "Web — Dynamic Website",
    keywords: ["dynamic website", "dynamic web", "cms website", "wordpress", "content management", "blog website", "ecommerce website", "database website"],
    response: "⚡ **Dynamic Website** at BN INTELHUB:\n\n✅ **What's included:**\n• CMS-powered (WordPress / Custom)\n• User login & dashboard\n• Database integration\n• Blog, news & content management\n• E-commerce capabilities\n• Admin panel to manage content\n\n⏱️ **Delivery:** 10–15 working days",
    subOptions: ["Static Website", "Customized Web App", "Pricing", "Contact"],
    whatsappMessage: "Hello BN INTELHUB! ⚡ I'm interested in a Dynamic Website. Can you share more details and pricing?",
  },
  {
    category: "Web — Customized Web App",
    keywords: ["customized web app", "custom web application", "custom webapp", "bespoke web", "enterprise web app", "custom portal", "custom saas", "tailored web"],
    response: "🔧 **Customized Web Application** at BN INTELHUB:\n\n✅ **What's included:**\n• 100% custom design & architecture\n• Complex business logic & workflows\n• Role-based access control\n• Third-party API integrations\n• Real-time features (chat, notifications)\n• Scalable cloud deployment\n• Full documentation & support\n\n⏱️ **Delivery:** 10–15 Days",
    subOptions: ["Static Website", "Dynamic Website", "Pricing", "Hire Us", "Contact"],
    whatsappMessage: "Hello BN INTELHUB! 🔧 I need a Custom Web Application built. Can we schedule a consultation?",
  },
  {
    category: "Software — Mobile Applications",
    keywords: ["mobile app", "mobile application", "android", "ios", "iphone", "flutter", "react native", "playstore", "app store", "cross platform", "native app"],
    response: "📱 **Mobile Applications** at BN INTELHUB:\n\nWe develop powerful mobile apps for all platforms. Choose your preferred type:",
    subOptions: ["Android App", "iOS App", "Cross-Platform App"],
    whatsappMessage: "Hello BN INTELHUB! 📱 I'm interested in Mobile App Development. Please share the details.",
  },
  {
    category: "Mobile — Android App",
    keywords: ["android app", "android application", "android development", "playstore app", "kotlin", "java android"],
    response: "🤖 **Android App Development** at BN INTELHUB:\n\n✅ **What's included:**\n• Native Android (Kotlin/Java)\n• Material Design UI\n• Offline functionality\n• Push notifications\n• Google Play Store deployment\n• Firebase integration\n\n⏱️ **Delivery:** 4–12 weeks",
    subOptions: ["iOS App", "Cross-Platform App", "Pricing", "Contact"],
    whatsappMessage: "Hello BN INTELHUB! 🤖 I need an Android App developed. Can we discuss the requirements?",
  },
  {
    category: "Mobile — iOS App",
    keywords: ["ios app", "iphone app", "apple app", "swift app", "app store app", "ios development"],
    response: "🍎 **iOS App Development** at BN INTELHUB:\n\n✅ **What's included:**\n• Native iOS (Swift/SwiftUI)\n• Apple Human Interface Guidelines\n• App Store deployment\n• Push notifications\n• Apple Pay & In-App purchases\n\n⏱️ **Delivery:** 4–12 weeks",
    subOptions: ["Android App", "Cross-Platform App", "Pricing", "Contact"],
    whatsappMessage: "Hello BN INTELHUB! 🍎 I need an iOS App developed. Please share details and pricing.",
  },
  {
    category: "Mobile — Cross-Platform App",
    keywords: ["cross platform app", "flutter app", "react native app", "cross platform", "hybrid app", "both android ios"],
    response: "🔀 **Cross-Platform App** at BN INTELHUB:\n\nOne codebase. Both Android & iOS. Maximum value.\n\n✅ **What's included:**\n• Flutter or React Native\n• Single codebase for both platforms\n• Native-like performance\n• 40–60% cost savings vs native\n• Both store deployments\n\n⏱️ **Delivery:** 6–14 weeks",
    subOptions: ["Android App", "iOS App", "Pricing", "Contact"],
    whatsappMessage: "Hello BN INTELHUB! 🔀 I need a Cross-Platform App for Android & iOS. Can we discuss?",
  },
  {
    category: "Software — AI Solutions",
    keywords: ["ai solution", "artificial intelligence", "ai", "machine learning", "ml", "deep learning", "neural network", "computer vision", "nlp", "natural language", "ai powered", "intelligent system"],
    response: "🤖 **AI Solutions** at BN INTELHUB:\n\nWe build intelligent systems that think, learn, and evolve. What are you looking for?",
    subOptions: ["Machine Learning", "NLP & Chatbots", "Computer Vision", "AI Automation", "Predictive Analytics"],
    whatsappMessage: "Hello BN INTELHUB! 🤖 I'm interested in AI Solutions for my business. Can we discuss?",
  },
  {
    category: "AI — Machine Learning",
    keywords: ["machine learning", "ml model", "training model", "predictive model", "classification", "regression", "clustering"],
    response: "🧠 **Machine Learning** at BN INTELHUB:\n\n✅ **What we build:**\n• Custom ML model development\n• Supervised & unsupervised learning\n• Classification, regression & clustering\n• Model deployment & MLOps\n• Integration with existing systems\n\n💡 **Use cases:** Fraud detection, demand forecasting, recommendation engines",
    subOptions: ["NLP & Chatbots", "Computer Vision", "AI Automation", "Pricing", "Contact"],
    whatsappMessage: "Hello BN INTELHUB! 🧠 I'm interested in Machine Learning solutions. Let's connect.",
  },
  {
    category: "AI — NLP & Chatbots",
    keywords: ["nlp", "natural language processing", "chatbot", "chatbot development", "conversational ai", "voice assistant", "text analysis", "sentiment analysis"],
    response: "💬 **NLP & Chatbot Development** at BN INTELHUB:\n\n✅ **What we build:**\n• AI-powered chatbots\n• Customer support automation\n• Sentiment & intent analysis\n• Multilingual NLP models\n• Voice assistants & IVR bots\n\n💡 **Use cases:** Customer support, HR bots, sales assistants",
    subOptions: ["Machine Learning", "Computer Vision", "AI Automation", "Pricing", "Contact"],
    whatsappMessage: "Hello BN INTELHUB! 💬 I'm interested in NLP & Chatbot development. Please share details.",
  },
  {
    category: "AI — Computer Vision",
    keywords: ["computer vision", "image recognition", "object detection", "face recognition", "ocr ai", "image processing", "video analytics"],
    response: "👁️ **Computer Vision** at BN INTELHUB:\n\n✅ **What we build:**\n• Object detection & recognition\n• Facial recognition systems\n• Quality inspection automation\n• CCTV AI analytics\n• Document OCR & extraction\n\n💡 **Use cases:** Security, retail analytics, manufacturing QC",
    subOptions: ["Machine Learning", "NLP & Chatbots", "AI Automation", "Pricing", "Contact"],
    whatsappMessage: "Hello BN INTELHUB! 👁️ I'm interested in Computer Vision solutions. Let's discuss.",
  },
  {
    category: "AI — AI Automation",
    keywords: ["ai automation", "rpa", "robotic process automation", "process automation", "workflow automation", "intelligent automation"],
    response: "⚡ **AI Automation** at BN INTELHUB:\n\n✅ **What we build:**\n• RPA bots\n• Intelligent document processing\n• Automated data entry & extraction\n• Email & workflow automation\n• ERP/CRM process automation\n\n💡 **Use cases:** Invoice processing, data migration, HR onboarding",
    subOptions: ["Machine Learning", "NLP & Chatbots", "Predictive Analytics", "Pricing", "Contact"],
    whatsappMessage: "Hello BN INTELHUB! ⚡ I need AI Automation for my business processes. Can we connect?",
  },
  {
    category: "AI — Predictive Analytics",
    keywords: ["predictive analytics", "forecasting", "business intelligence ai", "data prediction", "trend analysis", "ai insights"],
    response: "📈 **Predictive Analytics** at BN INTELHUB:\n\n✅ **What we build:**\n• Sales & revenue forecasting\n• Customer churn prediction\n• Inventory demand planning\n• Risk scoring models\n• Real-time BI dashboards with AI\n\n💡 **Use cases:** Retail, finance, healthcare, logistics",
    subOptions: ["Machine Learning", "AI Automation", "BI Tools", "Pricing", "Contact"],
    whatsappMessage: "Hello BN INTELHUB! 📈 I'm interested in Predictive Analytics. Please share how you can help.",
  },
  {
    category: "Software — Website Design",
    keywords: ["website design", "web design", "landing page", "corporate website", "business website", "portfolio website", "responsive", "seo website", "ui design"],
    response: "🎨 **Website Design** at BN INTELHUB:\n\nWe craft visually stunning, responsive websites. What type do you need?",
    subOptions: ["Static Website", "Dynamic Website", "Customized Web App", "Pricing"],
    whatsappMessage: "Hello BN INTELHUB! 🎨 I need a professional Website Design. Can we discuss?",
  },
  {
    category: "Software — Desktop Applications",
    keywords: ["desktop app", "desktop application", "windows app", "offline software", "desktop software", "pc software", "mac app"],
    response: "🖥️ **Desktop Applications** at BN INTELHUB:\n\nRobust desktop software for every platform. Choose your need:",
    subOptions: ["Windows Desktop App", "Cross-Platform Desktop", "POS & Billing Software"],
    whatsappMessage: "Hello BN INTELHUB! 🖥️ I need a Desktop Application developed. Let's connect.",
  },
  {
    category: "Desktop — Windows App",
    keywords: ["windows desktop app", "windows software", "windows application", "windows tool", "win32", "dotnet app"],
    response: "🪟 **Windows Desktop App** at BN INTELHUB:\n\n✅ **What's included:**\n• Native Windows app (.NET/C#)\n• Offline-first architecture\n• Database integration\n• Auto-update system\n• Windows installer & deployment\n\n💡 **Best for:** Internal tools, ERP modules, inventory systems",
    subOptions: ["Cross-Platform Desktop", "POS & Billing Software", "Pricing", "Contact"],
    whatsappMessage: "Hello BN INTELHUB! 🪟 I need a Windows Desktop App. Can we discuss requirements and pricing?",
  },
  {
    category: "Desktop — Cross-Platform Desktop",
    keywords: ["cross platform desktop", "electron app", "mac and windows app", "multi os app", "cross platform software"],
    response: "🖥️ **Cross-Platform Desktop App** at BN INTELHUB:\n\n✅ **What's included:**\n• Electron.js or Tauri framework\n• Runs on Windows, Mac & Linux\n• Auto-update & crash reporting\n• System tray & notifications\n• File system & hardware access",
    subOptions: ["Windows Desktop App", "POS & Billing Software", "Pricing", "Contact"],
    whatsappMessage: "Hello BN INTELHUB! 🖥️ I need a Cross-Platform Desktop App. Please share more details.",
  },
  {
    category: "Desktop — POS & Billing",
    keywords: ["pos software", "billing software", "point of sale", "invoice software", "billing system", "shop software", "retail software"],
    response: "🧾 **POS & Billing Software** at BN INTELHUB:\n\n✅ **What's included:**\n• Touch-friendly POS interface\n• Product & inventory management\n• GST-compliant invoice generation\n• Multiple payment modes\n• Daily/monthly sales reports\n• Barcode scanner support\n• Offline mode with sync",
    subOptions: ["Windows Desktop App", "Customized Web App", "Pricing", "Contact"],
    whatsappMessage: "Hello BN INTELHUB! 🧾 I need POS & Billing Software for my business. Let's discuss.",
  },
  {
    category: "Software — Customized Softwares",
    keywords: ["custom software", "customized software", "bespoke software", "tailor made", "custom solution", "custom erp", "custom crm", "custom billing", "custom inventory"],
    response: "⚙️ **Customized Software Solutions** at BN INTELHUB:\n\nEvery business is unique. What kind of custom software do you need?",
    subOptions: ["Custom ERP", "Custom CRM", "HR & Payroll Software", "Inventory System"],
    whatsappMessage: "Hello BN INTELHUB! ⚙️ I need Custom Software built for my business. Can we connect?",
  },
  {
    category: "Custom — ERP",
    keywords: ["custom erp", "erp system", "enterprise resource planning", "erp software", "business erp"],
    response: "🏭 **Custom ERP System** at BN INTELHUB:\n\n✅ **Modules we build:**\n• Finance & Accounting\n• Inventory & Warehouse\n• Purchase & Vendor Management\n• Sales & Order Management\n• HR & Payroll\n• Reporting & Analytics Dashboard",
    subOptions: ["Custom CRM", "HR & Payroll Software", "Pricing", "Contact"],
    whatsappMessage: "Hello BN INTELHUB! 🏭 I need a Custom ERP System. Can we schedule a consultation?",
  },
  {
    category: "Custom — CRM",
    keywords: ["custom crm", "crm system", "customer relationship management", "sales crm", "lead management"],
    response: "🤝 **Custom CRM System** at BN INTELHUB:\n\n✅ **Features we build:**\n• Lead capture & pipeline management\n• Customer profile & history\n• Task & follow-up automation\n• Email & WhatsApp integration\n• Sales reporting & forecasting\n• Mobile CRM app",
    subOptions: ["Custom ERP", "HR & Payroll Software", "Pricing", "Contact"],
    whatsappMessage: "Hello BN INTELHUB! 🤝 I need a Custom CRM System. Please share details and pricing.",
  },
  {
    category: "Custom — HR Payroll",
    keywords: ["hr software", "payroll software", "hr payroll", "attendance system", "leave management", "employee management"],
    response: "👥 **HR & Payroll Software** at BN INTELHUB:\n\n✅ **Features we build:**\n• Employee onboarding & profiles\n• Attendance & leave management\n• Biometric integration\n• GST & TDS compliant payslips\n• Appraisal & performance tracking\n• Employee self-service portal",
    subOptions: ["Custom ERP", "Custom CRM", "Pricing", "Contact"],
    whatsappMessage: "Hello BN INTELHUB! 👥 I need HR & Payroll Software. Let's discuss the requirements.",
  },
  {
    category: "Custom — Inventory",
    keywords: ["inventory system", "stock management", "warehouse management", "inventory software", "stock software"],
    response: "📦 **Inventory Management System** at BN INTELHUB:\n\n✅ **Features we build:**\n• Real-time stock tracking\n• Multi-warehouse support\n• Purchase order & GRN management\n• Low stock alerts\n• Barcode & QR scanning\n• Reports & audit trail",
    subOptions: ["Custom ERP", "POS & Billing Software", "Pricing", "Contact"],
    whatsappMessage: "Hello BN INTELHUB! 📦 I need an Inventory Management System. Can we connect?",
  },
  {
    category: "Software — BI Tools",
    keywords: ["bi tool", "business intelligence", "bi", "power bi", "tableau", "dashboard", "analytics", "data dashboard", "reporting tool", "kpi"],
    response: "📊 **Business Intelligence (BI) Tools** at BN INTELHUB:\n\nTransform raw data into powerful insights. What would you like?",
    subOptions: ["Custom BI Dashboard", "Power BI Integration", "Real-time Analytics"],
    whatsappMessage: "Hello BN INTELHUB! 📊 I'm interested in BI & Analytics solutions. Please share details.",
  },
  {
    category: "BI — Custom Dashboard",
    keywords: ["custom bi dashboard", "custom dashboard", "custom analytics dashboard", "bespoke dashboard"],
    response: "📊 **Custom BI Dashboard** at BN INTELHUB:\n\n✅ **What's included:**\n• Fully custom design\n• Real-time data from multiple sources\n• Drag-and-drop report builder\n• Role-based access\n• Export to PDF/Excel\n• Automated email reports",
    subOptions: ["Power BI Integration", "Real-time Analytics", "Pricing", "Contact"],
    whatsappMessage: "Hello BN INTELHUB! 📊 I need a Custom BI Dashboard. Can we discuss the requirements?",
  },
  {
    category: "BI — Power BI",
    keywords: ["power bi integration", "power bi", "power bi dashboard", "microsoft bi", "power bi report"],
    response: "📊 **Power BI Integration** at BN INTELHUB:\n\n✅ **What's included:**\n• Power BI workspace setup\n• Data connector setup\n• Custom report & dashboard design\n• Automated data refresh\n• Power BI Embedded in your app\n• User training & documentation",
    subOptions: ["Custom BI Dashboard", "Real-time Analytics", "Pricing", "Contact"],
    whatsappMessage: "Hello BN INTELHUB! 📊 I need Power BI integration. Please share details and pricing.",
  },
  {
    category: "BI — Real-time Analytics",
    keywords: ["real time analytics", "live dashboard", "real time data", "streaming analytics", "live reporting"],
    response: "⚡ **Real-time Analytics** at BN INTELHUB:\n\n✅ **What's included:**\n• Live data streaming & visualization\n• WebSocket-based updates\n• Alert & threshold triggers\n• IoT sensor data dashboards\n• Anomaly detection",
    subOptions: ["Custom BI Dashboard", "Power BI Integration", "Pricing", "Contact"],
    whatsappMessage: "Hello BN INTELHUB! ⚡ I need Real-time Analytics. Can we connect?",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // CONSULTANCY
  // ══════════════════════════════════════════════════════════════════════════

  {
    category: "Consultancy — Cyber Security",
    keywords: ["cyber security", "cybersecurity", "security audit", "penetration testing", "pen test", "vulnerability", "data protection", "hack", "security consulting", "firewall"],
    response: "🔐 **Cyber Security** at BN INTELHUB:\n\nProtect your digital assets with enterprise-grade security:\n• Security audits & vulnerability assessments\n• Penetration testing\n• Data protection & compliance (GDPR, ISO)\n• Firewall & network security\n• Incident response planning\n• Employee security awareness training",
    subOptions: ["IT Operations", "Networking", "Pricing", "Contact"],
    whatsappMessage: "Hello BN INTELHUB! 🔐 I need Cyber Security services. Can we discuss?",
  },
  {
    category: "Consultancy — AI Implementation",
    keywords: ["ai implementation", "ai consulting", "ai strategy", "adopt ai", "ai roadmap", "ai transformation", "implement ai", "ai for business"],
    response: "🧠 **AI Implementation Consulting** at BN INTELHUB:\n\nWe guide your business through a complete AI transformation:\n• AI readiness assessment\n• AI strategy & roadmap\n• Tool selection & vendor evaluation\n• Pilot project design & execution\n• Team training & change management",
    subOptions: ["AI Solutions", "Machine Learning", "NLP & Chatbots", "Contact"],
    whatsappMessage: "Hello BN INTELHUB! 🧠 I want to implement AI in my business. Can we schedule a consultation?",
  },
  {
    category: "Consultancy — Data Analytics",
    keywords: ["data analytics", "data analysis", "big data", "data science", "data consulting", "data driven", "analytics consulting", "data strategy"],
    response: "📉 **Data Analytics Consulting** at BN INTELHUB:\n\nWe help you unlock the full potential of your data:\n• Data strategy & governance\n• Big data architecture\n• Predictive & prescriptive analytics\n• Data warehouse design\n• Visualization & reporting",
    subOptions: ["BI Tools", "AI Solutions", "Pricing", "Contact"],
    whatsappMessage: "Hello BN INTELHUB! 📉 I need Data Analytics consulting. Let's connect.",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // SUPPORT
  // ══════════════════════════════════════════════════════════════════════════

  {
    category: "Support — Professional Training",
    keywords: ["professional training", "it training", "technology training", "certification training", "bootcamp", "training institute", "upskilling", "skill development", "corporate training", "training programs"],
    response: "📚 **Professional Training** at BN INTELHUB:\n\nIndustry-relevant training programs delivered by experts. What skill are you looking to develop?",
    subOptions: ["Full Stack Training", "Data Science Training", "AI/ML Training", "Cybersecurity Training", "Cloud Training"],
    whatsappMessage: "Hello BN INTELHUB! 📚 I'm interested in your Professional Training programs. Please share details.",
  },
  {
    category: "Training — Full Stack",
    keywords: ["full stack training", "web development training", "react training", "node training", "full stack course"],
    response: "🌐 **Full Stack Development Training:**\n\n• HTML, CSS, JavaScript & TypeScript\n• React.js / Next.js (Frontend)\n• Node.js, Express (Backend)\n• MongoDB & SQL databases\n• REST API development\n• Real-world project\n\n⏱️ Duration: 3–6 months | 🏆 Certificate included",
    subOptions: ["Data Science Training", "AI/ML Training", "Pricing", "Contact"],
    whatsappMessage: "Hello BN INTELHUB! 🌐 I'm interested in Full Stack Development Training. Please share details.",
  },
  {
    category: "Training — Data Science",
    keywords: ["data science training", "python training", "data analytics training", "data science course", "analytics course"],
    response: "📊 **Data Science Training:**\n\n• Python for Data Analysis\n• Pandas, NumPy, Matplotlib\n• Statistics & Probability\n• Machine Learning fundamentals\n• Power BI / Tableau\n• Capstone project\n\n⏱️ Duration: 3–5 months | 🏆 Certificate included",
    subOptions: ["AI/ML Training", "Full Stack Training", "Pricing", "Contact"],
    whatsappMessage: "Hello BN INTELHUB! 📊 I'm interested in the Data Science course. Please share the details.",
  },
  {
    category: "Training — AI/ML",
    keywords: ["ai ml training", "machine learning training", "ai course", "ml course", "deep learning training", "ai training course"],
    response: "🤖 **AI & Machine Learning Training:**\n\n• Python + ML libraries (Scikit-learn, TensorFlow)\n• Supervised & unsupervised learning\n• Deep Learning & Neural Networks\n• NLP & Computer Vision basics\n• Real-world AI projects\n\n⏱️ Duration: 4–6 months | 🏆 Certificate included",
    subOptions: ["Data Science Training", "Cybersecurity Training", "Pricing", "Contact"],
    whatsappMessage: "Hello BN INTELHUB! 🤖 I'm interested in the AI & ML Training course. Please share the syllabus.",
  },
  {
    category: "Training — Cybersecurity",
    keywords: ["cybersecurity training", "ethical hacking", "security training", "cyber training", "hacking course", "infosec training"],
    response: "🔐 **Cybersecurity Training:**\n\n• Network security fundamentals\n• Ethical hacking & penetration testing\n• OWASP Top 10 vulnerabilities\n• Security tools (Kali Linux, Metasploit)\n• CEH/CompTIA Security+ preparation\n\n⏱️ Duration: 2–4 months | 🏆 Certificate included",
    subOptions: ["AI/ML Training", "Cloud Training", "Pricing", "Contact"],
    whatsappMessage: "Hello BN INTELHUB! 🔐 I'm interested in the Cybersecurity Training course. Please share details.",
  },
  {
    category: "Training — Cloud",
    keywords: ["cloud training", "aws training", "azure training", "cloud course", "cloud computing training", "devops training"],
    response: "☁️ **Cloud Computing Training:**\n\n• Cloud fundamentals & architecture\n• AWS / Azure / GCP core services\n• Containers (Docker, Kubernetes)\n• CI/CD pipelines & DevOps\n• AWS/Azure certification preparation\n\n⏱️ Duration: 2–4 months | 🏆 Certificate included",
    subOptions: ["AI/ML Training", "Cybersecurity Training", "Pricing", "Contact"],
    whatsappMessage: "Hello BN INTELHUB! ☁️ I'm interested in Cloud Computing Training. Please share the details.",
  },
  {
    category: "Support — Managed Services",
    keywords: ["managed services", "managed it", "outsourcing", "it outsourcing", "managed support", "fully managed", "third party management"],
    response: "🔧 **Managed Services** at BN INTELHUB:\n\nLet us manage your IT so you can focus on your business:\n• Fully managed IT infrastructure\n• Cloud management\n• Security operations\n• Application management\n• Vendor coordination",
    subOptions: ["IT Operations", "ATS & AMC", "Pricing", "Contact"],
    whatsappMessage: "Hello BN INTELHUB! 🔧 I'm interested in Managed IT Services. Can we discuss?",
  },
  {
    category: "Support — IT Operations",
    keywords: ["it operations", "it ops", "it management", "operations support", "system monitoring", "it helpdesk", "helpdesk", "help desk", "technical support", "it support", "amc", "annual maintenance", "maintenance contract"],
    response: "⚙️ **IT Operations & Support** at BN INTELHUB:\n\n• 24/7 helpdesk support\n• System & network monitoring\n• Annual Maintenance Contracts (AMC)\n• Remote & on-site assistance\n• IT asset management\n• Performance optimization",
    subOptions: ["Managed Services", "Networking", "Pricing", "Contact"],
    whatsappMessage: "Hello BN INTELHUB! ⚙️ I need IT Operations & Support services. Can we connect?",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // MARKETING
  // ══════════════════════════════════════════════════════════════════════════

  {
    category: "Marketing — Overview",
    keywords: ["marketing", "digital marketing", "online marketing", "internet marketing", "growth marketing", "performance marketing", "digital strategy", "seo & marketing"],
    response: "📣 **Digital Marketing** at BN INTELHUB:\n\nFull-spectrum digital marketing that drives real results. What are you looking for?",
    subOptions: ["SEO", "Social Media Marketing", "Google Ads", "Email Marketing", "Branding"],
    whatsappMessage: "Hello BN INTELHUB! 📣 I'm interested in Digital Marketing services. Can we discuss?",
  },
  {
    category: "Marketing — SEO",
    keywords: ["seo", "search engine optimization", "google ranking", "organic traffic", "keyword", "on page seo", "off page seo", "technical seo", "rank"],
    response: "🔍 **SEO** at BN INTELHUB:\n\n• Technical SEO audits\n• On-page & off-page optimization\n• Keyword research & strategy\n• Link building\n• Local SEO\n• Monthly performance reports\n\nRank higher. Get found. Grow faster.",
    subOptions: ["Google Ads", "Social Media Marketing", "Email Marketing", "Pricing", "Contact"],
    whatsappMessage: "Hello BN INTELHUB! 🔍 I need SEO services for my website. Can we discuss a strategy?",
  },
  {
    category: "Marketing — Social Media",
    keywords: ["social media", "instagram", "facebook", "linkedin", "twitter", "social media management", "social media marketing", "smm", "content creator"],
    response: "📱 **Social Media Marketing** at BN INTELHUB:\n\n• Instagram, Facebook, LinkedIn, Twitter management\n• Content creation & scheduling\n• Community engagement\n• Paid social campaigns\n• Analytics & performance reporting",
    subOptions: ["SEO", "Google Ads", "Branding", "Pricing", "Contact"],
    whatsappMessage: "Hello BN INTELHUB! 📱 I need Social Media Marketing services. Please share your packages.",
  },
  {
    category: "Marketing — Google Ads",
    keywords: ["google ads", "ppc", "sem", "paid ads", "online promotion", "display ads", "youtube ads", "performance ads"],
    response: "🚀 **Google Ads & Online Promotion** at BN INTELHUB:\n\n• Google Search & Display Ads\n• YouTube advertising\n• Meta (Facebook/Instagram) Ads\n• LinkedIn Ads for B2B\n• Remarketing campaigns",
    subOptions: ["SEO", "Social Media Marketing", "Email Marketing", "Pricing", "Contact"],
    whatsappMessage: "Hello BN INTELHUB! 🚀 I need Google Ads & paid promotion services. Can we discuss?",
  },
  {
    category: "Marketing — Email Marketing",
    keywords: ["email marketing", "email campaign", "newsletter", "drip campaign", "email automation", "bulk email", "sms marketing", "bulk sms"],
    response: "📧 **Email & SMS Marketing** at BN INTELHUB:\n\n• Campaign design & copywriting\n• List segmentation & management\n• Drip & automation sequences\n• A/B testing\n• Bulk SMS campaigns",
    subOptions: ["Google Ads", "Social Media Marketing", "Pricing", "Contact"],
    whatsappMessage: "Hello BN INTELHUB! 📧 I'm interested in Email & SMS Marketing. Please share your packages.",
  },
  {
    category: "Marketing — Branding",
    keywords: ["branding", "brand strategy", "brand identity", "rebranding", "brand guidelines", "brand design", "brand consulting", "logo", "logo design", "graphic design"],
    response: "✨ **Branding & Design** at BN INTELHUB:\n\nWe build brands that people remember and trust. What do you need?",
    subOptions: ["Logo Design", "Brand Identity Package", "Social Media Design", "Presentation Design"],
    whatsappMessage: "Hello BN INTELHUB! ✨ I need Branding & Design services. Can we discuss?",
  },
  {
    category: "Branding — Logo",
    keywords: ["logo design", "logo", "brand logo", "company logo", "startup logo"],
    response: "🎨 **Logo Design** at BN INTELHUB:\n\n✅ **What's included:**\n• 3 unique logo concepts\n• Unlimited revisions\n• All file formats (PNG, SVG, PDF, AI)\n• Light & dark variants\n• Brand color palette\n\n⏱️ Delivery: 3–5 working days",
    subOptions: ["Brand Identity Package", "Social Media Design", "Pricing", "Contact"],
    whatsappMessage: "Hello BN INTELHUB! 🎨 I need a Logo Design. Please share the process and pricing.",
  },
  {
    category: "Branding — Identity Package",
    keywords: ["brand identity", "brand identity package", "brand guidelines", "brand kit", "complete branding"],
    response: "✨ **Brand Identity Package** at BN INTELHUB:\n\n✅ **Includes:**\n• Logo Design\n• Business card design\n• Letterhead & email signature\n• Brand style guide\n• Social media profile templates\n• Presentation template",
    subOptions: ["Logo Design", "Social Media Design", "Pricing", "Contact"],
    whatsappMessage: "Hello BN INTELHUB! ✨ I need a complete Brand Identity Package. Please share details.",
  },
  {
    category: "Branding — Social Media Design",
    keywords: ["social media design", "social media graphics", "instagram post design", "social media creatives", "post design"],
    response: "📱 **Social Media Design** at BN INTELHUB:\n\n✅ **What's included:**\n• Custom post templates (feed & stories)\n• Branded Reels thumbnails\n• Event & promotion graphics\n• Monthly content calendar design\n• All sizes for all platforms",
    subOptions: ["Logo Design", "Brand Identity Package", "Social Media Marketing", "Pricing", "Contact"],
    whatsappMessage: "Hello BN INTELHUB! 📱 I need Social Media Design services. Please share your packages.",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // INFRASTRUCTURE
  // ══════════════════════════════════════════════════════════════════════════

  {
    category: "Infrastructure — Server & Hosting",
    keywords: ["server", "hosting", "web hosting", "dedicated server", "vps", "cloud server", "server setup", "server management", "cpanel", "cloud & hosting"],
    response: "🖥️ **Server & Hosting** at BN INTELHUB:\n\n• Dedicated servers & VPS\n• Cloud hosting (AWS, Azure, GCP)\n• cPanel & web hosting management\n• Server configuration & optimization\n• 99.9% uptime guarantee",
    subOptions: ["Networking", "Micro Data Center", "CCTV Surveillance", "Pricing", "Contact"],
    whatsappMessage: "Hello BN INTELHUB! 🖥️ I need Server & Hosting services. Can we discuss?",
  },
  {
    category: "Infrastructure — Networking",
    keywords: ["networking", "network", "lan", "wan", "wifi", "network setup", "router", "switch", "network infrastructure", "cabling"],
    response: "🌐 **Networking** at BN INTELHUB:\n\n• LAN/WAN design & implementation\n• Wi-Fi network setup\n• Network security & firewall\n• SD-WAN & VPN solutions\n• Structured cabling",
    subOptions: ["Server & Hosting", "CCTV Surveillance", "Security Devices", "Contact"],
    whatsappMessage: "Hello BN INTELHUB! 🌐 I need Networking services. Please share details.",
  },
  {
    category: "Infrastructure — CCTV Surveillance",
    keywords: ["cctv", "surveillance", "camera", "security camera", "cctv installation", "nvr", "dvr", "ip camera", "video surveillance"],
    response: "📹 **CCTV Surveillance** at BN INTELHUB:\n\n• IP & HD CCTV camera installation\n• NVR/DVR setup & management\n• Remote monitoring solutions\n• AI-powered video analytics\n• 24/7 recording & alert systems",
    subOptions: ["Security Devices", "Networking", "Pricing", "Contact"],
    whatsappMessage: "Hello BN INTELHUB! 📹 I need CCTV Surveillance installation. Can we discuss?",
  },
  {
    category: "Infrastructure — IoT Integrations",
    keywords: ["iot", "internet of things", "smart device", "sensor", "iot integration", "connected devices", "smart building", "automation", "embedded system"],
    response: "📡 **IoT Integrations** at BN INTELHUB:\n\n• IoT device integration & management\n• Smart building & facility automation\n• Industrial IoT (IIoT) solutions\n• Sensor data collection & analytics\n• Edge computing & real-time monitoring",
    subOptions: ["AI Automation", "CCTV Surveillance", "Networking", "Pricing", "Contact"],
    whatsappMessage: "Hello BN INTELHUB! 📡 I'm interested in IoT Integration solutions. Please share details.",
  },
  {
    category: "Infrastructure — Micro Data Center",
    keywords: ["data center", "micro data center", "datacenter", "colocation", "server room", "rack", "edge computing"],
    response: "🏢 **Micro Data Center** at BN INTELHUB:\n\n• Prefabricated micro data centers\n• Server room design & setup\n• Power & cooling management\n• Physical security systems\n• Edge computing infrastructure",
    subOptions: ["Server & Hosting", "Networking", "Pricing", "Contact"],
    whatsappMessage: "Hello BN INTELHUB! 🏢 I need Micro Data Center services. Can we connect?",
  },
  {
    category: "Infrastructure — Security Devices",
    keywords: ["security device", "biometric", "access control", "door access", "security system", "alarm system", "intrusion detection"],
    response: "🔒 **Security Devices** at BN INTELHUB:\n\n• Biometric access control systems\n• Door locks & visitor management\n• Intrusion detection & alarm systems\n• Turnstile & barrier installations\n• Integrated security management",
    subOptions: ["CCTV Surveillance", "Networking", "Pricing", "Contact"],
    whatsappMessage: "Hello BN INTELHUB! 🔒 I need Security Device installation. Please share details.",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // GIS / GPS
  // ══════════════════════════════════════════════════════════════════════════

  {
    category: "GIS",
    keywords: ["gis", "gis application", "geographic information system", "spatial data", "mapping software", "geospatial", "gis development", "gis mapping"],
    response: "🗺️ **GIS Solutions** at BN INTELHUB:\n\nWhat kind of GIS service are you looking for?",
    subOptions: ["GIS Application Development", "GIS Mapping Services", "GPS Survey"],
    whatsappMessage: "Hello BN INTELHUB! 🗺️ I'm interested in GIS solutions. Please share more details.",
  },
  {
    category: "GIS — Application",
    keywords: ["gis application development", "web gis", "gis portal", "gis platform", "custom gis"],
    response: "🗺️ **GIS Application Development** at BN INTELHUB:\n\n✅ **What we build:**\n• Web-based GIS portals\n• Spatial data integration & analysis\n• Custom map layers & legends\n• Asset & infrastructure mapping\n• Government GIS solutions",
    subOptions: ["GIS Mapping Services", "GPS Survey", "Pricing", "Contact"],
    whatsappMessage: "Hello BN INTELHUB! 🗺️ I need a GIS Application developed. Can we discuss?",
  },
  {
    category: "GIS — Mapping",
    keywords: ["gis mapping services", "topographic map", "land mapping", "cadastral map", "thematic map", "urban mapping"],
    response: "📍 **GIS Mapping Services** at BN INTELHUB:\n\n• Topographic & thematic mapping\n• Cadastral & land use mapping\n• Urban & rural area mapping\n• Infrastructure & utility mapping\n• ArcGIS & QGIS expertise",
    subOptions: ["GIS Application Development", "GPS Survey", "Pricing", "Contact"],
    whatsappMessage: "Hello BN INTELHUB! 📍 I need GIS Mapping services. Please share details.",
  },
  {
    category: "GPS Survey",
    keywords: ["gps", "gps survey", "survey", "land survey", "field survey", "geodetic survey", "rtk gps", "drone survey", "total station"],
    response: "📡 **GPS Survey** at BN INTELHUB:\n\n• RTK GPS & Total Station surveys\n• Topographic & boundary surveys\n• Drone-based aerial surveys\n• Infrastructure & utility surveys\n• Survey data processing & reports\n\nCentimeter-level accuracy. Every time.",
    subOptions: ["GIS Mapping Services", "GIS Application Development", "Pricing", "Contact"],
    whatsappMessage: "Hello BN INTELHUB! 📡 I need GPS Survey services. Can we discuss requirements?",
  },
  {
    category: "Other — Data Mining",
    keywords: ["data mining", "web scraping", "data extraction", "data harvesting", "lead data", "data collection", "scraping"],
    response: "⛏️ **Data Mining** at BN INTELHUB:\n\n• Web scraping & automated data extraction\n• Structured data collection pipelines\n• Lead & market data harvesting\n• Social media data mining\n• Text & sentiment analysis\n• Data cleaning & normalization",
    subOptions: ["AI Solutions", "Predictive Analytics", "Pricing", "Contact"],
    whatsappMessage: "Hello BN INTELHUB! ⛏️ I need Data Mining services. Please share more details.",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // GENERAL
  // ══════════════════════════════════════════════════════════════════════════

  {
    category: "All Services",
    keywords: ["all services", "services", "what services", "service list", "offerings", "what you offer", "capabilities", "software services"],
    response: "🏢 **BN INTELHUB Full Service Catalog:**\n\n💻 **Software:** Web Apps, Mobile Apps, Website Design, Desktop Apps, Custom Software, BI Tools, AI Solutions, APIs, Dashboards\n\n🧠 **Consultancy:** System & Business Analysis, AI Implementation, Data Analytics, Cyber Security\n\n🎧 **Support:** IT Ops, AMC, Training, Helpdesk, Call Center, Managed Services\n\n📣 **Marketing:** Social Media, SEO, Email & SMS, Ads, Graphics, Branding\n\n☁️ **Infrastructure:** Servers, Networking, Data Center, CCTV, IoT, Security\n\n🌍 **Other:** GIS, GPS Survey, B2B/B2C/G2C, Data Mining\n\nWhich area would you like to explore?",
    subOptions: ["Web App", "Mobile App", "AI Solutions", "Marketing", "GIS Mapping", "Pricing"],
    whatsappMessage: "Hello BN INTELHUB! I'd like to learn more about your services. Can we connect?",
  },
  {
    category: "Pricing",
    keywords: ["price", "cost", "budget", "quote", "how much", "charges", "fees", "rate", "expensive", "cheap", "affordable", "paisa", "kitna", "pricing"],
    response: "💰 **Pricing at BN INTELHUB:**\n\nOur pricing is flexible and tailored to each project:\n• Project-based fixed pricing\n• Monthly retainer models\n• Dedicated team engagement\n• Custom enterprise quotes\n\nContact us for a **free consultation** — no hidden charges, complete transparency.",
    subOptions: ["Contact", "Hire Us", "Web App", "AI Solutions"],
    whatsappMessage: "Hello BN INTELHUB! 💰 I'd like to get a price quote for your services. Can we connect?",
  },
  {
    category: "Contact",
    keywords: ["contact", "call", "email", "address", "location", "reach", "phone", "number", "talk", "meet", "office", "whatsapp", "connect"],
    response: "📬 **Contact BN INTELHUB:**\n\n📞 **Phone/WhatsApp:** +91 8936078905\n📧 **Email:** info@bnintelhub.com\n🌐 **Website:** www.bnintelhub.com\n📍 **Office:** STPI Ranchi, Plot-8 Part,\nNamkum Industrial Area, Ranchi, Jharkhand 834010\n\nWe respond within 24 hours! Or click below to reach us on WhatsApp instantly 👇",
    subOptions: ["Hire Us", "Pricing", "All Services"],
    whatsappMessage: "Hello BN INTELHUB! 📬 I'd like to get in touch with your team. Please connect with me.",
  },
  {
    category: "Hire Us",
    keywords: ["hire", "hire us", "work with us", "partnership", "collaborate", "project", "start project", "get started", "onboard"],
    response: "🚀 **Ready to Work with BN INTELHUB?**\n\n1️⃣ Click **'HIRE US'** in the top navigation\n2️⃣ Fill out the project inquiry form\n3️⃣ Our team contacts you within 24 hours\n4️⃣ Free consultation & project scoping\n5️⃣ Proposal & timeline delivery\n\nOr connect with us on WhatsApp right now 👇",
    subOptions: ["Web App", "Mobile App", "AI Solutions", "Contact"],
    whatsappMessage: "Hello BN INTELHUB! 🚀 I'd like to hire your team for a project. Can we discuss?",
  },
  {
    category: "Hinglish",
    keywords: ["kaise ho", "kya hal hai", "namaste", "kya karte ho", "help chahiye", "madad", "kaam", "sewa", "service chahiye"],
    response: "Namaste! 🙏 Main aapki kaise madad kar sakta hoon?\n\nHum following services provide karte hain:\n• 💻 Website & App Development\n• 🤖 AI & Automation Solutions\n• 📣 Digital Marketing & SEO\n• 🔐 Cyber Security\n• 🗺️ GIS & GPS Mapping\n• 🎧 IT Support & Training",
    subOptions: ["Web App", "AI Solutions", "Digital Marketing", "Contact"],
    whatsappMessage: "Hello BN INTELHUB! 🙏 Mujhe aapki services ke baare mein jaanna hai. Please connect karein.",
  },
];

// ── Fallback ──────────────────────────────────────────────────────────────────

export const fallbackResponse = "🤔 I'm not sure I understood that. Try asking about:\n• Our **Software** or **AI Solutions**\n• **Marketing** or **SEO** services\n• **GIS / GPS** services\n• **Pricing** or **Contact**\n\nOr click below to chat with us directly! 👇";

export const fallbackWhatsappMessage = "Hello BN INTELHUB! I have a question. Can you help me?";

// quickReplies kept for reference but no longer used in UI
export const quickReplies: string[] = [];