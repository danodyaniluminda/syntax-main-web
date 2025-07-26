import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, stagger, query } from '@angular/animations';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss'],
  animations: [
    trigger('slideInUp', [
      state('in', style({ transform: 'translateY(0)', opacity: 1 })),
      transition('void => *', [
        style({ transform: 'translateY(50px)', opacity: 0 }),
        animate('0.6s ease-out')
      ])
    ]),
    trigger('staggerTech', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'scale(0.8)' }),
          stagger(100, [
            animate('0.5s ease-out', style({ opacity: 1, transform: 'scale(1)' }))
          ])
        ], { optional: true })
      ])
    ]),
    trigger('techHover', [
      state('normal', style({ transform: 'scale(1)' })),
      state('hovered', style({ transform: 'scale(1.05)' })),
      transition('normal <=> hovered', animate('0.3s ease-out'))
    ])
  ]
})
export class TechnologiesComponent implements OnInit {
  // Technology categories
  technologyCategories = [
    {
      name: 'Frontend',
      description: 'Modern frameworks and libraries for creating stunning user interfaces',
      icon: 'fas fa-desktop',
      color: '#8B5CF6',
      technologies: [
        { name: 'Angular', icon: 'fab fa-angular', color: '#DD0031', proficiency: 95 },
        { name: 'React', icon: 'fab fa-react', color: '#61DAFB', proficiency: 90 },
        { name: 'Vue.js', icon: 'fab fa-vuejs', color: '#4FC08D', proficiency: 85 },
        { name: 'TypeScript', icon: 'fab fa-js-square', color: '#3178C6', proficiency: 92 },
        { name: 'HTML5', icon: 'fab fa-html5', color: '#E34F26', proficiency: 98 },
        { name: 'CSS3', icon: 'fab fa-css3-alt', color: '#1572B6', proficiency: 95 }
      ]
    },
    {
      name: 'Backend',
      description: 'Robust server-side technologies for scalable applications',
      icon: 'fas fa-server',
      color: '#10B981',
      technologies: [
        { name: 'Node.js', icon: 'fab fa-node-js', color: '#339933', proficiency: 88 },
        { name: 'Python', icon: 'fab fa-python', color: '#3776AB', proficiency: 85 },
        { name: 'Java', icon: 'fab fa-java', color: '#ED8B00', proficiency: 80 },
        { name: 'C#', icon: 'fas fa-code', color: '#239120', proficiency: 75 },
        { name: 'PHP', icon: 'fab fa-php', color: '#777BB4', proficiency: 78 },
        { name: 'Go', icon: 'fas fa-code', color: '#00ADD8', proficiency: 70 }
      ]
    },
    {
      name: 'Mobile',
      description: 'Cross-platform and native mobile development solutions',
      icon: 'fas fa-mobile-alt',
      color: '#3B82F6',
      technologies: [
        { name: 'React Native', icon: 'fab fa-react', color: '#61DAFB', proficiency: 85 },
        { name: 'Flutter', icon: 'fab fa-google', color: '#02569B', proficiency: 82 },
        { name: 'Swift', icon: 'fab fa-swift', color: '#FA7343', proficiency: 78 },
        { name: 'Kotlin', icon: 'fab fa-android', color: '#0F9D58', proficiency: 80 },
        { name: 'Ionic', icon: 'fas fa-mobile', color: '#3880FF', proficiency: 75 },
        { name: 'Xamarin', icon: 'fas fa-mobile-alt', color: '#3498DB', proficiency: 70 }
      ]
    },
    {
      name: 'Database',
      description: 'Modern database solutions for data management and storage',
      icon: 'fas fa-database',
      color: '#F59E0B',
      technologies: [
        { name: 'MongoDB', icon: 'fas fa-leaf', color: '#47A248', proficiency: 88 },
        { name: 'PostgreSQL', icon: 'fas fa-elephant', color: '#336791', proficiency: 85 },
        { name: 'MySQL', icon: 'fas fa-database', color: '#4479A1', proficiency: 90 },
        { name: 'Redis', icon: 'fas fa-database', color: '#DC382D', proficiency: 80 },
        { name: 'Firebase', icon: 'fab fa-google', color: '#FFCA28', proficiency: 82 },
        { name: 'DynamoDB', icon: 'fab fa-aws', color: '#FF9900', proficiency: 75 }
      ]
    },
    {
      name: 'Cloud & DevOps',
      description: 'Cloud platforms and deployment automation tools',
      icon: 'fas fa-cloud',
      color: '#EC4899',
      technologies: [
        { name: 'AWS', icon: 'fab fa-aws', color: '#FF9900', proficiency: 85 },
        { name: 'Google Cloud', icon: 'fab fa-google', color: '#4285F4', proficiency: 80 },
        { name: 'Azure', icon: 'fab fa-microsoft', color: '#0078D4', proficiency: 78 },
        { name: 'Docker', icon: 'fab fa-docker', color: '#2496ED', proficiency: 88 },
        { name: 'Kubernetes', icon: 'fas fa-dharmachakra', color: '#326CE5', proficiency: 82 },
        { name: 'Jenkins', icon: 'fas fa-tools', color: '#D33833', proficiency: 80 }
      ]
    },
    {
      name: 'Tools & Others',
      description: 'Development tools and additional technologies we use',
      icon: 'fas fa-tools',
      color: '#8B5A2B',
      technologies: [
        { name: 'Git', icon: 'fab fa-git-alt', color: '#F05032', proficiency: 95 },
        { name: 'GitHub', icon: 'fab fa-github', color: '#181717', proficiency: 92 },
        { name: 'VS Code', icon: 'fas fa-code', color: '#007ACC', proficiency: 90 },
        { name: 'Figma', icon: 'fab fa-figma', color: '#F24E1E', proficiency: 85 },
        { name: 'Webpack', icon: 'fas fa-cube', color: '#8DD6F9', proficiency: 80 },
        { name: 'Sass', icon: 'fab fa-sass', color: '#CC6699', proficiency: 88 }
      ]
    }
  ];

  // Selected category
  selectedCategory: any = null;
  hoveredTech: any = null;
  isVisible = false;

  // Statistics
  stats = [
    { number: 0, target: 30, suffix: '+', label: 'Technologies Mastered' },
    { number: 0, target: 6, suffix: '', label: 'Technology Categories' },
    { number: 0, target: 95, suffix: '%', label: 'Average Proficiency' },
    { number: 0, target: 5, suffix: '+', label: 'Years of Experience' }
  ];

  constructor() {}

  ngOnInit(): void {
    // Set default selected category
    this.selectedCategory = this.technologyCategories[0];
    
    setTimeout(() => {
      this.isVisible = true;
      this.animateStats();
    }, 300);
  }

  // Select technology category
  selectCategory(category: any): void {
    this.selectedCategory = category;
  }

  // Check if category is selected
  isCategorySelected(category: any): boolean {
    return this.selectedCategory === category;
  }

  // Handle technology hover
  onTechHover(tech: any, isHovering: boolean): void {
    this.hoveredTech = isHovering ? tech : null;
  }

  // Get technology hover state
  getTechHoverState(tech: any): string {
    return this.hoveredTech === tech ? 'hovered' : 'normal';
  }

  // Get proficiency width for progress bar
  getProficiencyWidth(proficiency: number): string {
    return `${proficiency}%`;
  }

  // Get proficiency color
  getProficiencyColor(proficiency: number): string {
    if (proficiency >= 90) return '#10B981'; // Green
    if (proficiency >= 80) return '#3B82F6'; // Blue
    if (proficiency >= 70) return '#F59E0B'; // Yellow
    return '#EF4444'; // Red
  }

  // Animate statistics
  private animateStats(): void {
    this.stats.forEach((stat, index) => {
      const duration = 2000;
      const increment = stat.target / (duration / 50);
      let current = 0;
      
      setTimeout(() => {
        const timer = setInterval(() => {
          current += increment;
          if (current >= stat.target) {
            stat.number = stat.target;
            clearInterval(timer);
          } else {
            stat.number = Math.floor(current);
          }
        }, 50);
      }, index * 200);
    });
  }

  // Get formatted stat
  getFormattedStat(stat: any): string {
    return stat.number + stat.suffix;
  }

  // Track by functions
  trackByName(index: number, item: any): string {
    return item.name;
  }

  trackByCategory(index: number, item: any): string {
    return item.name;
  }

  // Get all technologies count
  getTotalTechnologies(): number {
    return this.technologyCategories.reduce((total, category) => {
      return total + category.technologies.length;
    }, 0);
  }

  // Get average proficiency
  getAverageProficiency(): number {
    let totalProficiency = 0;
    let totalTechnologies = 0;
    
    this.technologyCategories.forEach(category => {
      category.technologies.forEach(tech => {
        totalProficiency += tech.proficiency;
        totalTechnologies++;
      });
    });
    
    return Math.round(totalProficiency / totalTechnologies);
  }

  // Handle CTA actions
  onStartProject(): void {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  onViewProjects(): void {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}