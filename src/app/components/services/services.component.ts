import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, stagger, query } from '@angular/animations';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  animations: [
    trigger('slideInUp', [
      state('in', style({ transform: 'translateY(0)', opacity: 1 })),
      transition('void => *', [
        style({ transform: 'translateY(50px)', opacity: 0 }),
        animate('0.6s ease-out')
      ])
    ]),
    trigger('staggerServices', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(50px)' }),
          stagger(150, [
            animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ]),
    trigger('iconScale', [
      transition(':enter', [
        style({ transform: 'scale(0.5)', opacity: 0 }),
        animate('0.5s 0.3s ease-out', style({ transform: 'scale(1)', opacity: 1 }))
      ])
    ])
  ]
})
export class ServicesComponent implements OnInit {
  // Main services offered by SyntaxEra
  services = [
    {
      icon: 'fas fa-globe',
      title: 'Web Development',
      description: 'Modern, responsive web applications using cutting-edge frameworks like React, Angular, and Vue.js.',
      features: ['Responsive Design', 'SEO Optimization', 'Performance Tuning', 'Cross-browser Compatibility'],
      technologies: ['React', 'Angular', 'Vue.js', 'TypeScript'],
      color: '#8B5CF6',
      gradient: 'linear-gradient(135deg, #8B5CF6, #6D28D9)'
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android using React Native and Flutter.',
      features: ['Cross-platform Apps', 'Native Performance', 'App Store Deployment', 'Push Notifications'],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
      color: '#10B981',
      gradient: 'linear-gradient(135deg, #10B981, #059669)'
    },
    {
      icon: 'fas fa-cloud',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment solutions using AWS, Azure, and Google Cloud Platform.',
      features: ['Auto Scaling', 'Load Balancing', 'Disaster Recovery', 'Cost Optimization'],
      technologies: ['AWS', 'Azure', 'GCP', 'Docker'],
      color: '#3B82F6',
      gradient: 'linear-gradient(135deg, #3B82F6, #1D4ED8)'
    },
    {
      icon: 'fas fa-database',
      title: 'Backend Development',
      description: 'Robust backend systems and APIs using Node.js, Python, Java, and modern database technologies.',
      features: ['RESTful APIs', 'GraphQL', 'Microservices', 'Database Design'],
      technologies: ['Node.js', 'Python', 'Java', 'MongoDB'],
      color: '#F59E0B',
      gradient: 'linear-gradient(135deg, #F59E0B, #D97706)'
    },
    {
      icon: 'fas fa-paint-brush',
      title: 'UI/UX Design',
      description: 'User-centered design solutions that create intuitive and engaging digital experiences.',
      features: ['User Research', 'Prototyping', 'Design Systems', 'Usability Testing'],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'Principle'],
      color: '#EC4899',
      gradient: 'linear-gradient(135deg, #EC4899, #BE185D)'
    },
    {
      icon: 'fas fa-cogs',
      title: 'DevOps & CI/CD',
      description: 'Streamlined development workflows and automated deployment pipelines for faster delivery.',
      features: ['Continuous Integration', 'Automated Testing', 'Infrastructure as Code', 'Monitoring'],
      technologies: ['Jenkins', 'GitLab CI', 'Terraform', 'Kubernetes'],
      color: '#8B5A2B',
      gradient: 'linear-gradient(135deg, #8B5A2B, #92400E)'
    }
  ];

  // Service process steps
  processSteps = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your requirements, define project scope, and create a comprehensive roadmap.',
      icon: 'fas fa-search',
      duration: '1-2 weeks'
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'Our design team creates wireframes, mockups, and interactive prototypes for your approval.',
      icon: 'fas fa-drafting-compass',
      duration: '2-3 weeks'
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'Our developers build your solution using best practices with continuous testing and quality assurance.',
      icon: 'fas fa-code',
      duration: '4-12 weeks'
    },
    {
      step: '04',
      title: 'Deployment & Launch',
      description: 'We deploy your solution to production environments and ensure smooth go-live operations.',
      icon: 'fas fa-rocket',
      duration: '1 week'
    },
    {
      step: '05',
      title: 'Support & Maintenance',
      description: 'Ongoing support, monitoring, and maintenance to ensure optimal performance and security.',
      icon: 'fas fa-headset',
      duration: 'Ongoing'
    }
  ];

  // Why choose us reasons
  advantages = [
    {
      title: 'Agile Methodology',
      description: 'Flexible development approach with regular iterations and client feedback.',
      icon: 'fas fa-sync-alt'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock technical support and maintenance services.',
      icon: 'fas fa-clock'
    },
    {
      title: 'Transparent Pricing',
      description: 'Clear, honest pricing with no hidden costs or surprises.',
      icon: 'fas fa-dollar-sign'
    },
    {
      title: 'Quality Assurance',
      description: 'Rigorous testing processes to ensure bug-free, high-quality deliverables.',
      icon: 'fas fa-shield-alt'
    }
  ];

  isVisible = false;
  selectedService: any = null;

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.isVisible = true;
    }, 300);
  }

  // Handle service card selection
  selectService(service: any): void {
    this.selectedService = this.selectedService === service ? null : service;
  }

  // Check if service is selected
  isServiceSelected(service: any): boolean {
    return this.selectedService === service;
  }

  // Handle service card hover
  onServiceHover(service: any, isHovering: boolean): void {
    if (!isHovering && this.selectedService === service) {
      return; // Keep selected service highlighted
    }
    // Add hover effects here if needed
  }

  // Get service gradient style
  getServiceGradient(service: any): string {
    return service.gradient;
  }

  // Track by functions for performance
  trackByTitle(index: number, item: any): string {
    return item.title;
  }

  trackByStep(index: number, item: any): string {
    return item.step;
  }

  // Get CTA button action
  onGetQuote(): void {
    // In a real app, this would open a contact form or navigate to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  onViewPortfolio(): void {
    // Navigate to projects section
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}