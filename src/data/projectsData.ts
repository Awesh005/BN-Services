export interface Project {
  id: string;
  title: string;
  client: string;
  description: string;
  technologies: string[];
  category: 'Software' | 'Website' | 'AI' | 'Consultancy';
  image: string;
  url?: string;
}

export const projectsData: Project[] = [
  
  {
    id: 'ajis',
    title: 'American Junior International School',
    client: 'AJIS Group',
    description: 'A modern school management system featuring student portals, grading systems, and parent-teacher communication tools.',
    technologies: ['Next.js', 'Firebase', 'Tailwind CSS'],
    category: 'Website',
    image: './ameriacan.png',
    url: 'https://americanjunior.co.in'
  },
  {
    id: 'humble-muse',
    title: 'The Humble Muse',
    client: 'Creative Collective',
    description: 'A digital showcase and e-commerce platform for independent artists and creative professionals.',
    technologies: ['Shopify', 'React', 'GraphQL'],
    category: 'Software',
    image: 'humble.png',
  },
  {
    id: 'kelkem-india',
    title: 'Kelkem India Pvt Ltd',
    client: 'Kelkem India',
    description: 'Industrial automation and resource planning system for manufacturing operations.',
    technologies: ['Python', 'IoT', 'ERP Integration'],
    category: 'Website',
    image: '/kelkem.jpeg',
    url: 'https://kelkemindia.com'
  },
 {
    id: 'carzmo',
    title: 'Carzmo',
    client: 'Carzmo',
    description: 'A comprehensive car rental and sales platform with real-time inventory management.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    category: 'Website',
    image: '/carzmo.png',
    url: '#'
  },
 
];
