import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, stagger, query } from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('slideInUp', [
      state('in', style({ transform: 'translateY(0)', opacity: 1 })),
      transition('void => *', [
        style({ transform: 'translateY(50px)', opacity: 0 }),
        animate('0.6s ease-out')
      ])
    ]),
    trigger('staggerCards', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(50px)' }),
          stagger(200, [
            animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ]),
    trigger('counterAnimation', [
      transition(':increment', [
        animate('1s ease-out')
      ])
    ])
  ]
})
export class AboutComponent implements OnInit {
  // Company features/values
  features = [
    {
      icon: 'fas fa-rocket',
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible, creating solutions that aren\'t just functional, but revolutionary.',
      color: '#8B5CF6'
    },
    {
      icon: 'fas fa-users',
      title: 'Expert Team',
      description: 'Our diverse team of seasoned developers, designers, and strategists brings years of experience to every project.',
      color: '#6D28D9'
    },
    {
      icon: 'fas fa-trophy',
      title: 'Proven Results',
      description: 'With over 200 successful projects delivered, we have a track record of exceeding client expectations.',
      color: '#4C1D95'
    }
  ];

  // Company statistics
  stats = [
    {
      number: 0,
      target: 200,
      suffix: '+',
      label: 'Projects Completed',
      icon: 'fas fa-project-diagram'
    },
    {
      number: 0,
      target: 50,
      suffix: '+',
      label: 'Happy Clients',
      icon: 'fas fa-smile'
    },
    {
      number: 0,
      target: 5,
      suffix: '+',
      label: 'Years Experience',
      icon: 'fas fa-calendar-alt'
    },
    {
      number: 0,
      target: 24,
      suffix: '/7',
      label: 'Support Available',
      icon: 'fas fa-headset'
    }
  ];

  // Company timeline/milestones
  timeline = [
    {
      year: '2019',
      title: 'Company Founded',
      description: 'SyntaxEra was born with a vision to revolutionize software development.',
      icon: 'fas fa-flag'
    },
    {
      year: '2020',
      title: 'First Major Project',
      description: 'Delivered our first enterprise-level solution for a Fortune 500 company.',
      icon: 'fas fa-building'
    },
    {
      year: '2021',
      title: 'Team Expansion',
      description: 'Grew our team to 25+ talented developers and designers.',
      icon: 'fas fa-users'
    },
    {
      year: '2022',
      title: 'Global Reach',
      description: 'Expanded operations to serve clients across 3 continents.',
      icon: 'fas fa-globe'
    },
    {
      year: '2023',
      title: 'Innovation Hub',
      description: 'Established our R&D division focusing on AI and emerging technologies.',
      icon: 'fas fa-lightbulb'
    },
    {
      year: '2024',
      title: 'Industry Recognition',
      description: 'Received multiple awards for excellence in software development.',
      icon: 'fas fa-award'
    }
  ];

  // Animation states
  isVisible = false;
  statsAnimated = false;

  constructor() {}

  ngOnInit(): void {
    // Trigger animations when component loads
    setTimeout(() => {
      this.isVisible = true;
      this.animateStats();
    }, 300);
  }

  // Animate statistics counters
  private animateStats(): void {
    if (this.statsAnimated) return;
    
    this.statsAnimated = true;
    
    this.stats.forEach((stat, index) => {
      const duration = 2000; // 2 seconds
      const increment = stat.target / (duration / 50); // Update every 50ms
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.target) {
          stat.number = stat.target;
          clearInterval(timer);
        } else {
          stat.number = Math.floor(current);
        }
      }, 50);
    });
  }

  // Get formatted stat number
  getFormattedStat(stat: any): string {
    return stat.number + stat.suffix;
  }

  // Handle card hover effects
  onCardHover(index: number, isHovering: boolean): void {
    // Add any hover-specific logic here
    const card = document.querySelector(`.feature-card:nth-child(${index + 1})`);
    if (card) {
      if (isHovering) {
        card.classList.add('hovered');
      } else {
        card.classList.remove('hovered');
      }
    }
  }

  // Track by function for ngFor performance
  trackByIndex(index: number, item: any): number {
    return index;
  }

  trackByYear(index: number, item: any): string {
    return item.year;
  }
}