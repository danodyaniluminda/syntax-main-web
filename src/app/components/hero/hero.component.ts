import { Component, OnInit, OnDestroy } from '@angular/core';
import { ScrollService } from '../../core/services/scroll.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
animations: [
    trigger('buttonHover', [
      state('default', style({ transform: 'scale(1)' })),
      state('hover', style({ transform: 'scale(1.05)', boxShadow: '0 0 10px #8B5CF6' })),
      transition('default <=> hover', animate('200ms ease-in-out')),
    ]),

    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(50px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),

    trigger('typewriter', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-out', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class HeroComponent implements OnInit, OnDestroy {
  codeSnippets = [
    {
      text: "const innovation = () => { return 'SyntaxEra'; };",
      color: '#10b981',
      delay: 0
    },
    {
      text: "class WebDevelopment extends Excellence {}",
      color: '#3b82f6',
      delay: 1
    },
    {
      text: "npm install success --save-dev",
      color: '#f59e0b',
      delay: 2
    },
    {
      text: "git commit -m \"Beyond the Barracks\"",
      color: '#ec4899',
      delay: 0.5
    }
  ];

  codeExample = {
    lines: [
      { text: 'function createSuccess() {', color: '#3b82f6' },
      { text: '  return {', color: '#ffffff', indent: 1 },
      { text: '    innovation: true,', color: '#f59e0b', indent: 2 },
      { text: '    quality: \'premium\',', color: '#10b981', indent: 2 },
      { text: '    delivery: \'on-time\'', color: '#8B5CF6', indent: 2 },
      { text: '  };', color: '#ffffff', indent: 1 },
      { text: '}', color: '#3b82f6' }
    ]
  };

  private animationFrameId?: number;

  constructor(private scrollService: ScrollService) {}

  ngOnInit(): void {
    this.initParallaxEffect();
  }

  ngOnDestroy(): void {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }

  onGetStarted(): void {
    this.scrollService.scrollToSection('contact');
  }

  onViewPortfolio(): void {
    this.scrollService.scrollToSection('projects');
  }

  private initParallaxEffect(): void {
    const updateParallax = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.floating-code');
      
      parallaxElements.forEach((element, index) => {
        const speed = 0.3 + (index * 0.1);
        const yPos = -(scrolled * speed);
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
      
      this.animationFrameId = requestAnimationFrame(updateParallax);
    };
    
    updateParallax();
  }
}