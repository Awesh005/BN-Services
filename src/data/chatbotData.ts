export interface ChatResponse {
  keywords: string[];
  response: string;
  category: string;
}

export const chatbotData: ChatResponse[] = [
  {
    category: "Website Development",
    keywords: ["website", "web", "site", "portal", "webpage", "responsive", "seo", "hosting", "domain"],
    response: "We provide custom, responsive, and SEO-friendly websites tailored to your business needs with expert support. Whether it's an e-commerce site or a corporate portal, we've got you covered!"
  },
  {
    category: "Mobile App Development",
    keywords: ["mobile", "app", "application", "android", "ios", "iphone", "playstore", "appstore", "native", "cross-platform", "flutter", "react native"],
    response: "We develop high-quality Android and iOS applications with modern UI and performance. Our apps are scalable, secure, and designed to provide the best user experience."
  },
  {
    category: "Software Development",
    keywords: ["software", "erp", "crm", "custom software", "enterprise", "desktop app", "automation software", "billing software", "inventory"],
    response: "We offer scalable and robust software solutions for enterprise needs, including ERP, CRM, and custom business management tools designed to streamline your operations."
  },
  {
    category: "AI & Automation",
    keywords: ["ai", "artificial intelligence", "automation", "chatbot", "predictive", "analytics", "machine learning", "ml", "bot", "smart"],
    response: "We offer AI-powered automation and chatbot solutions to streamline your business. From predictive analytics to intelligent process automation, we help you stay ahead."
  },
  {
    category: "Graphic Design",
    keywords: ["design", "graphic", "logo", "branding", "ui", "ux", "visual", "creative", "poster", "banner", "social media post"],
    response: "Our creative visual designs communicate your brand message effectively. We specialize in logo design, branding, UI/UX, and marketing collateral."
  },
  {
    category: "Video Editing",
    keywords: ["video", "editing", "production", "animation", "motion graphics", "youtube", "reels", "promo", "commercial"],
    response: "We provide high-quality video content creation and professional editing services, including motion graphics and promotional videos to engage your audience."
  },
  {
    category: "Digital Marketing",
    keywords: ["marketing", "digital", "seo", "social media", "ads", "advertising", "growth", "online presence", "sem", "ppc", "content marketing"],
    response: "Our strategic marketing solutions boost your online presence and growth. We handle SEO, social media management, and targeted ad campaigns to drive results."
  },
  {
    category: "Cloud & IT Support",
    keywords: ["cloud", "it support", "server", "infrastructure", "networking", "technical support", "maintenance", "amc", "security"],
    response: "We provide reliable cloud infrastructure management and technical support. Our team ensures your systems are secure, updated, and running 24/7."
  },
  {
    category: "Training & Development",
    keywords: ["training", "development", "skill", "corporate training", "upskilling", "workshop", "learning", "team development"],
    response: "We offer corporate training and skill development programs for teams, focusing on the latest technologies and professional growth."
  },
  {
    category: "Pricing",
    keywords: ["price", "cost", "budget", "quote", "how much", "charges", "fees", "expensive", "cheap", "paisa", "kitna"],
    response: "Pricing depends on your specific requirements. Please contact us for a custom quote, and we'll provide a transparent breakdown of costs for your project."
  },
  {
    category: "Contact",
    keywords: ["contact", "call", "email", "address", "location", "reach", "phone", "number", "talk", "meet", "office"],
    response: "You can contact us through our website's contact form, email us at info@bnintelhub.com, or call us for quick assistance. We're here to help!"
  },
  {
    category: "Hinglish",
    keywords: ["kaise ho", "kya hal hai", "namaste", "hello", "hi", "hey", "help chahiye", "madad", "kaam", "service"],
    response: "Namaste! Main aapki kaise madad kar sakta hoon? Aap hamari services jaise Website, App Development, ya AI Solutions ke baare mein pooch sakte hain."
  }
];

export const fallbackResponse = "I'm here to help 😊 Please ask about our services like Website, App Development, AI Solutions, or Pricing.";

export const quickReplies = ["Website", "App Development", "Pricing", "Contact"];
