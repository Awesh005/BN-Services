import React from 'react';

const techItems = [
  "AI Solutions", "Cloud Native", "React", "Node.js", "Python", 
  "AWS", "Azure", "GCP", "Docker", "Kubernetes", 
  "Terraform", "GraphQL", "TypeScript", "Next.js", "Vite", 
  "Tailwind", "Framer Motion", "Three.js", "WebGL", "Cyber Security", 
  "Data Science", "ML", "NLP", "Computer Vision", "Blockchain", 
  "IoT", "Edge Computing", "Serverless", "Microservices", "CI/CD", 
  "DevOps", "Agile", "Scrum", "UX/UI", "Design Thinking", 
  "Innovation", "Scalability", "Performance", "Reliability", "Security", 
  "Efficiency", "Automation", "Digital Transformation", "EdTech", "Research", 
  "Development", "Excellence", "Integrity", "Collaboration", "Future Ready"
];

// Structured animation ranges to create a staggered effect
const generateRange = (index: number) => {
  if (index === 10) return "-20% 60%"; // Special item (INTELHUB)
  
  // Stagger items based on their index
  const start = (index % 10) * 8 + Math.floor(index / 10) * 5;
  const end = start + 15;
  return `${start}% ${end}%`;
};

// Grid areas for 4x4 grid (16 positions)
const gridAreas = [
  "1/1", "1/2", "1/3", "1/4",
  "2/1", "2/2", "2/3", "2/4",
  "3/1", "3/2", "3/3", "3/4",
  "4/1", "4/2", "4/3", "4/4"
];

export const TechStackGrid: React.FC = () => {
  return (
    <section className="stuck-grid-container">
      <div className="stuck-grid">
        {techItems.map((item, i) => {
          const isSpecial = i === 10;
          const gridArea = isSpecial ? "2/2 / span 2 / span 2" : gridAreas[i % 16];
          const animationRange = generateRange(i);

          return (
            <div 
              key={i} 
              className={`grid-item ${isSpecial ? 'special' : ''}`}
              style={{ 
                gridArea,
                animationRange: animationRange,
              } as React.CSSProperties}
            >
              {isSpecial ? <b>INTELHUB</b> : item}
            </div>
          );
        })}
      </div>
    </section>
  );
};
