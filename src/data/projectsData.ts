export interface Project {
  id: string;
  title: string;
  client: string;
  description: string;
  technologies: string[];
  category: 'Software' | 'Infrastructure' | 'AI' | 'Consultancy';
  image: string;
  url?: string;
}

export const projectsData: Project[] = [
  {
    id: 'astro-om',
    title: 'Astro Om Education & Research',
    client: 'Astro Om Foundation',
    description: 'A comprehensive educational platform and research portal for advanced learning and data analysis.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Data Visualization'],
    category: 'Software',
    image: 'https://picsum.photos/seed/education/800/600'
  },
  {
    id: 'ajis',
    title: 'American Junior International School',
    client: 'AJIS Group',
    description: 'A modern school management system featuring student portals, grading systems, and parent-teacher communication tools.',
    technologies: ['Next.js', 'Firebase', 'Tailwind CSS'],
    category: 'Software',
    image: 'https://picsum.photos/seed/school/800/600',
    url: 'https://americanjunior.co.in'
  },
  {
    id: 'humble-muse',
    title: 'The Humble Muse',
    client: 'Creative Collective',
    description: 'A digital showcase and e-commerce platform for independent artists and creative professionals.',
    technologies: ['Shopify', 'React', 'GraphQL'],
    category: 'Software',
    image: 'https://picsum.photos/seed/creative/800/600'
  },
  {
    id: 'kelkem-india',
    title: 'Kelkem India Pvt Ltd',
    client: 'Kelkem India',
    description: 'Industrial automation and resource planning system for manufacturing operations.',
    technologies: ['Python', 'IoT', 'ERP Integration'],
    category: 'Infrastructure',
    image: 'https://picsum.photos/seed/industrial/800/600',
    url: 'https://kelkemindia.com'
  },
  {
    id: 'smart-telecaller',
    title: 'Smart Telecaller CRM',
    client: 'SalesForce Solutions',
    description: 'An intelligent CRM system designed for high-volume telecalling operations with automated lead tracking.',
    technologies: ['React', 'WebRTC', 'PostgreSQL'],
    category: 'Software',
    image: 'https://picsum.photos/seed/crm/800/600'
  },
  {
    id: 'hungerita',
    title: 'Hungerita',
    client: 'Foodie Express',
    description: 'A high-performance food delivery and restaurant management application with real-time tracking.',
    technologies: ['React Native', 'Google Maps API', 'Node.js'],
    category: 'Software',
    image: 'https://picsum.photos/seed/food/800/600'
  },
  {
    id: 'attendance-system',
    title: 'Attendance Management System',
    client: 'Corporate Solutions',
    description: 'Biometric-integrated attendance tracking system with advanced reporting and HR integration.',
    technologies: ['Biometrics', 'C#', 'SQL Server'],
    category: 'Software',
    image: 'https://picsum.photos/seed/attendance/800/600'
  }
];
