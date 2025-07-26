import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, stagger, query } from '@angular/animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [
    trigger('slideInUp', [
      state('in', style({ transform: 'translateY(0)', opacity: 1 })),
      transition('void => *', [
        style({ transform: 'translateY(50px)', opacity: 0 }),
        animate('0.6s ease-out')
      ])
    ]),
    trigger('staggerProjects', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(50px)' }),
          stagger(200, [
            animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ]),
    trigger('projectHover', [
      state('normal', style({ transform: 'scale(1)' })),
      state('hovered', style({ transform: 'scale(1.02)' })),
      transition('normal <=> hovered', animate('0.3s ease-out'))
    ])
  ]
})
export class ProjectsComponent implements OnInit {
  // Featured projects
  projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce solution built with React and Node.js, featuring real-time inventory management, secure payment integration, and advanced analytics dashboard.',
      image: 'fas fa-shopping-cart',
      category: 'Web Application',
      client: 'RetailMax Inc.',
      duration: '6 months',
      team: '8 developers',
      status: 'Completed',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
      features: [
        'Real-time inventory tracking',
        'Secure payment processing',
        'Advanced analytics dashboard',
        'Mobile-responsive design',
        'Multi-vendor support',
        'SEO optimization'
      ],
      metrics: {
        users: '50K+',
        transactions: '$2M+',
        performance: '98%',
        satisfaction: '4.8/5'
      },
      gradient: 'linear-gradient(135deg, #8B5CF6, #6D28D9)',
      color: '#8B5CF6',
      demoUrl: '#',
      caseStudyUrl: '#'
    },
    {
      id: 2,
      title: 'Health Tracking App',
      description: 'Cross-platform mobile application for comprehensive health monitoring with AI-powered insights, personalized recommendations, and integration with wearable devices.',
      image: 'fas fa-mobile-alt',
      category: 'Mobile Application',
      client: 'HealthTech Solutions',
      duration: '8 months',
      team: '6 developers',
      status: 'Completed',
      technologies: ['Flutter', 'Firebase', 'Python', 'TensorFlow', 'GCP'],
      features: [
        'AI-powered health insights',
        'Wearable device integration',
        'Personalized recommendations',
        'Secure data encryption',
        'Offline functionality',
        'Healthcare provider portal'
      ],
      metrics: {
        users: '25K+',
        retention: '85%',
        rating: '4.9/5',
        accuracy: '94%'
      },
      gradient: 'linear-gradient(135deg, #3B82F6, #1D4ED8)',
      color: '#3B82F6',
      demoUrl: '#',
      caseStudyUrl: '#'
    },
    {
      id: 3,
      title: 'Analytics Dashboard',
      description: 'Real-time business intelligence dashboard with advanced data visualization, predictive analytics capabilities, and customizable reporting for enterprise clients.',
      image: 'fas fa-chart-line',
      category: 'Web Application',
      client: 'DataViz Corp',
      duration: '4 months',
      team: '5 developers',
      status: 'Completed',
      technologies: ['Angular', 'D3.js', 'Python', 'PostgreSQL', 'Docker'],
      features: [
        'Real-time data visualization',
        'Predictive analytics',
        'Customizable dashboards',
        'Export capabilities',
        'Role-based access control',
        'API integrations'
      ],
      metrics: {
        dataPoints: '1M+',
        refreshRate: '< 1s',
        accuracy: '96%',
        uptime: '99.9%'
      },
      gradient: 'linear-gradient(135deg, #10B981, #059669)',
      color: '#10B981',
      demoUrl: '#',
      caseStudyUrl: '#'
    },
    {
      id: 4,
      title: 'Smart Learning Platform',
      description: 'AI-powered educational platform with adaptive learning algorithms, interactive content creation tools, and comprehensive progress tracking for students and educators.',
      image: 'fas fa-graduation-cap',
      category: 'Educational Platform',
      client: 'EduTech Innovation',
      duration: '10 months',
      team: '12 developers',
      status: 'Completed',
      technologies: ['Vue.js', 'Django', 'Redis', 'PostgreSQL', 'AWS'],
      features: [
        'Adaptive learning algorithms',
        'Interactive content creation',
        'Progress tracking',
        'Video conferencing',
        'Collaborative tools',
        'Mobile accessibility'
      ],
      metrics: {
        students: '100K+',
        courses: '5K+',
        completion: '78%',
        satisfaction: '4.7/5'
      },
      gradient: 'linear-gradient(135deg, #F59E0B, #D97706)',
      color: '#F59E0B',
      demoUrl: '#',
      caseStudyUrl: '#'
    },
    {
      id: 5,
      title: 'Financial Management System',
      description: 'Comprehensive financial management solution with automated reporting, risk assessment, compliance tracking, and integration with banking APIs.',
      image: 'fas fa-piggy-bank',
      category: 'Enterprise Software',
      client: 'FinanceFirst Bank',
      duration: '12 months',
      team: '15 developers',
      status: 'In Progress',
      technologies: ['Angular', 'Spring Boot', 'Oracle', 'Kafka', 'Kubernetes'],
      features: [
        'Automated financial reporting',
        'Risk assessment algorithms',
        'Compliance monitoring',
        'Banking API integration',
        'Audit trail management',
        'Multi-currency support'
      ],
      metrics: {
        transactions: '10M+',
        accuracy: '99.8%',
        compliance: '100%',
        performance: '< 2s'
      },
      gradient: 'linear-gradient(135deg, #EC4899, #BE185D)',
      color: '#EC4899',
      demoUrl: '#',
      caseStudyUrl: '#'
    },
    {
      id: 6,
      title: 'IoT Monitoring Dashboard',
      description: 'Industrial IoT monitoring solution with real-time sensor data collection, predictive maintenance alerts, and comprehensive device management capabilities.',
      image: 'fas fa-microchip',
      category: 'IoT Platform',
      client: 'Industrial Solutions Ltd',
      duration: '7 months',
      team: '9 developers',
      status: 'Completed',
      technologies: ['React', 'Node.js', 'InfluxDB', 'MQTT', 'Azure IoT'],
      features: [
        'Real-time sensor monitoring',
        'Predictive maintenance',
        'Device management portal',
        'Alert system',
        'Historical data analysis',
        'Mobile notifications'
      ],
      metrics: {
        devices: '10K+',
        uptime: '99.7%',
        alerts: '< 30s',
        efficiency: '+25%'
      },
      gradient: 'linear-gradient(135deg, #8B5A2B, #92400E)',
      color: '#8B5A2B',
      demoUrl: '#',
      caseStudyUrl: '#'
    }
  ];

  // Project categories for filtering
  categories = [
    { name: 'All Projects', value: 'all' },
    { name: 'Web Application', value: 'Web Application' },
    { name: 'Mobile Application', value: 'Mobile Application' },
    { name: 'Enterprise Software', value: 'Enterprise Software' },
    { name: 'Educational Platform', value: 'Educational Platform' },
    { name: 'IoT Platform', value: 'IoT Platform' }
  ];

  // Component state
  selectedCategory = 'all';
  filteredProjects: any[] = [];
  hoveredProject: any = null;
  isVisible = false;

  // Project statistics
  stats = [
    { number: 0, target: 200, suffix: '+', label: 'Projects Completed' },
    { number: 0, target: 150, suffix: '+', label: 'Happy Clients' },
    { number: 0, target: 50, suffix: '+', label: 'Industries Served' },
    { number: 0, target: 98, suffix: '%', label: 'Success Rate' }
  ];

  constructor() {}

  ngOnInit(): void {
    this.filteredProjects = this.projects;
    
    setTimeout(() => {
      this.isVisible = true;
      this.animateStats();
    }, 300);
  }

  // Filter projects by category
  filterProjects(category: string): void {
    this.selectedCategory = category;
    
    if (category === 'all') {
      this.filteredProjects = this.projects;
    } else {
      this.filteredProjects = this.projects.filter(project => project.category === category);
    }
  }

  // Check if category is selected
  isCategorySelected(category: string): boolean {
    return this.selectedCategory === category;
  }

  // Handle project hover
  onProjectHover(project: any, isHovering: boolean): void {
    this.hoveredProject = isHovering ? project : null;
  }

  // Get project hover state
  getProjectHoverState(project: any): string {
    return this.hoveredProject === project ? 'hovered' : 'normal';
  }

  // Get project status color
  getStatusColor(status: string): string {
    switch (status.toLowerCase()) {
      case 'completed': return '#10B981';
      case 'in progress': return '#F59E0B';
      case 'planning': return '#3B82F6';
      default: return '#6B7280';
    }
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

  // Handle project actions
  onViewDemo(project: any): void {
    // In a real app, this would open the demo URL
    console.log('Viewing demo for:', project.title);
  }

  onViewCaseStudy(project: any): void {
    // In a real app, this would open the case study
    console.log('Viewing case study for:', project.title);
  }

  onStartProject(): void {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Track by functions
  trackByProjectId(index: number, project: any): number {
    return project.id;
  }

  trackByCategoryValue(index: number, category: any): string {
    return category.value;
  }

  trackByName(index: number, item: any): string {
    return item.name || item;
  }

  // Get project count by category
  getProjectCount(categoryValue: string): number {
    if (categoryValue === 'all') {
      return this.projects.length;
    }
    return this.projects.filter(project => project.category === categoryValue).length;
  }
}