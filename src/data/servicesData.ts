import { 
  Code2, Smartphone, Globe, Monitor, Settings, BarChart3, 
  Brain, Link2, LayoutDashboard, Search, Database, Shield, 
  Cloud, Network, Cpu, Server, Camera, HardDrive, 
  Map as MapIcon, Navigation, Users, Briefcase, GraduationCap, 
  Headphones, Phone, Target, Megaphone, Mail, MessageSquare, 
  Palette, Presentation, Award
} from 'lucide-react';

export interface ServiceDetail {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  benefits: string[];
  useCases: string[];
  industries: string[];
  features: { title: string; description: string; icon: any }[];
  process: { step: string; title: string; description: string }[];
  techStack: string[];
  caseStudy: { title: string; description: string; result: string };
}

export const servicesData: Record<string, ServiceDetail> = {
  'web-applications': {
    id: 'web-applications',
    title: 'Web Applications',
    category: 'Software',
    description: 'Scalable, high-performance web solutions tailored to your business needs.',
    longDescription: 'Our web application development services provide comprehensive solutions across three core areas: Static Websites for fast and secure informational presence, Dynamic Sites for interactive and data-driven experiences, and Customized Sites tailored for complex needs like E-commerce, CRM, and ERP systems.',
    benefits: ['Increased operational efficiency', 'Scalability for future growth', 'Enhanced user engagement', 'Cross-platform compatibility'],
    useCases: ['Static Informational Websites', 'Dynamic Data-Driven Platforms', 'Customized E-commerce Solutions', 'Enterprise Resource Planning (ERP)', 'Content Management Systems (CMS)'],
    industries: ['Retail', 'Healthcare', 'Finance', 'Education'],
    features: [
      { title: 'Static Website', description: 'Fast, secure, and cost-effective websites for informational purposes.', icon: Globe },
      { title: 'Dynamic Site', description: 'Interactive platforms with database integration and real-time updates.', icon: Database },
      { title: 'Customized Site', description: 'Tailored solutions like E-commerce, ERP, and specialized business tools.', icon: Settings }
    ],
    process: [
      { step: '01', title: 'Requirement Analysis', description: 'Understanding your business goals and user needs.' },
      { step: '02', title: 'Design & Prototyping', description: 'Creating wireframes and interactive prototypes.' },
      { step: '03', title: 'Development', description: 'Agile development with regular updates.' },
      { step: '04', title: 'Testing & QA', description: 'Rigorous testing to ensure bug-free performance.' },
      { step: '05', title: 'Deployment', description: 'Launching your application to the production environment.' }
    ],
    techStack: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Docker'],
    caseStudy: {
      title: 'Global Retail Platform',
      description: 'Developed a multi-vendor e-commerce platform handling 1M+ monthly users.',
      result: '40% increase in conversion rate and 60% reduction in page load time.'
    }
  },
  'mobile-applications': {
    id: 'mobile-applications',
    title: 'Mobile Applications',
    category: 'Software',
    description: 'Native and cross-platform mobile apps that deliver exceptional user experiences.',
    longDescription: 'We specialize in building high-quality mobile applications for iOS and Android. Whether it is a native app or a cross-platform solution using React Native or Flutter, we ensure your app is fast, reliable, and engaging.',
    benefits: ['Direct customer engagement', 'Brand loyalty', 'Offline accessibility', 'Personalized user experience'],
    useCases: ['On-demand service apps', 'Social networking platforms', 'Fitness and wellness trackers', 'Mobile banking solutions'],
    industries: ['Logistics', 'Entertainment', 'Fitness', 'Banking'],
    features: [
      { title: 'Native Performance', description: 'Smooth animations and fast response times.', icon: Smartphone },
      { title: 'Push Notifications', description: 'Keep users engaged with real-time updates.', icon: Target },
      { title: 'Offline Mode', description: 'Allow users to access core features without internet.', icon: Database }
    ],
    process: [
      { step: '01', title: 'Strategy', description: 'Defining the app concept and target audience.' },
      { step: '02', title: 'UI/UX Design', description: 'Crafting intuitive mobile interfaces.' },
      { step: '03', title: 'App Development', description: 'Coding the frontend and backend.' },
      { step: '04', title: 'Quality Assurance', description: 'Testing on various devices and OS versions.' },
      { step: '05', title: 'App Store Launch', description: 'Managing the submission process to App Store and Play Store.' }
    ],
    techStack: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
    caseStudy: {
      title: 'Logistics Tracking App',
      description: 'Built a real-time fleet management and tracking app for a regional logistics giant.',
      result: 'Improved delivery efficiency by 25% and reduced operational costs by 15%.'
    }
  },
  'ai-solutions': {
    id: 'ai-solutions',
    title: 'AI Solutions',
    category: 'Software',
    description: 'Harness the power of Artificial Intelligence to automate and optimize your business.',
    longDescription: 'Our AI solutions help businesses leverage machine learning, natural language processing, and computer vision to gain insights, automate tasks, and create personalized experiences.',
    benefits: ['Automated decision making', 'Predictive analytics', 'Enhanced customer service', 'Operational cost reduction'],
    useCases: ['Predictive maintenance', 'Fraud detection', 'Personalized recommendations', 'Automated document processing'],
    industries: ['Manufacturing', 'Finance', 'E-commerce', 'Healthcare'],
    features: [
      { title: 'Machine Learning', description: 'Custom models trained on your business data.', icon: Brain },
      { title: 'NLP', description: 'Advanced text analysis and chatbot solutions.', icon: MessageSquare },
      { title: 'Computer Vision', description: 'Automated image and video recognition.', icon: Camera }
    ],
    process: [
      { step: '01', title: 'Data Assessment', description: 'Evaluating available data and AI potential.' },
      { step: '02', title: 'Model Design', description: 'Designing custom AI architectures.' },
      { step: '03', title: 'Training', description: 'Training models with high-quality datasets.' },
      { step: '04', title: 'Integration', description: 'Embedding AI into your existing workflows.' },
      { step: '05', title: 'Monitoring', description: 'Continuous performance tracking and tuning.' }
    ],
    techStack: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI API', 'Scikit-learn'],
    caseStudy: {
      title: 'Predictive Maintenance System',
      description: 'Implemented an AI system for a manufacturing plant to predict equipment failure.',
      result: '30% reduction in unplanned downtime and 20% savings on maintenance costs.'
    }
  }
  // ... many more will be added dynamically or in batches
};

// Helper to slugify names
export const slugify = (text: string) => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
};

// Generate missing entries based on the list provided in the prompt
const categories = [
  {
    title: 'Software',
    items: ['Web Applications', 'Mobile Applications', 'Website Design', 'Desktop Applications', 'Customized Softwares', 'BI Tools', 'AI Solutions', 'API Integrations', 'Dashboards']
  },
  {
    title: 'Consultancy',
    items: ['System Analysis', 'Business Analysis', 'AI Implementation', 'Data Analytics', 'Cyber Security', 'System Integration', 'Financial Inclusions', 'IT Implementation', 'Documentations']
  },
  {
    title: 'Support',
    items: ['IT Operations', 'ATS & AMC', 'Upskilling', 'Professional Training', 'IT Helpdesk', 'Call Center', 'PMU Setup', 'Managed Services', 'Hardware Solutions']
  },
  {
    title: 'Marketing',
    items: ['Social Media', 'Digital Marketing', 'SEO', 'Email Marketing', 'SMS Marketing', 'Online Promotion', 'Graphics Design', 'Presentations', 'Branding']
  },
  {
    title: 'Infrastructure',
    items: ['Server & Hosting', 'Networking', 'Micro Data Center', 'CCTV Surveillance', 'Computer Hardware', 'IoT Integrations', 'Security Devices', 'Computerization', 'Scanning & Digitization']
  },
  {
    title: 'Other Services',
    items: ['GIS Applications', 'GIS Mapping', 'GPS Survey', 'B2B B2C B2E Services', 'G2C G2B G2E Services', 'Data Mining']
  }
];

// Populate the rest with generic but professional content if not already defined
categories.forEach(cat => {
  cat.items.forEach(item => {
    const id = slugify(item);
    if (!servicesData[id]) {
      servicesData[id] = {
        id,
        title: item,
        category: cat.title,
        description: `Professional ${item} services to empower your business growth and digital transformation.`,
        longDescription: `Our ${item} services are designed to provide comprehensive solutions that address your specific business challenges. We combine industry expertise with cutting-edge technology to deliver results that matter.`,
        benefits: ['Improved efficiency', 'Cost optimization', 'Scalable solutions', 'Expert guidance'],
        useCases: [`Optimizing ${item} workflows`, `Implementing ${item} best practices`, `Scaling ${item} operations`],
        industries: ['Enterprise', 'SME', 'Government', 'Non-profit'],
        features: [
          { title: 'Expert Consultation', description: 'Tailored advice from industry veterans.', icon: Award },
          { title: 'Modern Technology', description: 'Built using the latest and most reliable tools.', icon: Cpu },
          { title: 'Dedicated Support', description: '24/7 assistance for all your needs.', icon: Headphones }
        ],
        process: [
          { step: '01', title: 'Consultation', description: 'Initial discussion to understand your requirements.' },
          { step: '02', title: 'Planning', description: 'Detailed roadmap and strategy development.' },
          { step: '03', title: 'Execution', description: 'Implementation of the service with precision.' },
          { step: '04', title: 'Review', description: 'Quality checks and feedback integration.' },
          { step: '05', title: 'Handover', description: 'Final delivery and ongoing support setup.' }
        ],
        techStack: ['Cloud Computing', 'AI/ML', 'Enterprise Security', 'Modern Frameworks'],
        caseStudy: {
          title: `${item} Transformation`,
          description: `Successfully implemented ${item} for a leading industry client.`,
          result: 'Significant improvement in core business metrics and user satisfaction.'
        }
      };
    }
  });
});
