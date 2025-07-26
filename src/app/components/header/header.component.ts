import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { Subscription } from 'rxjs';
import { ScrollService } from '../../core/services/scroll.service';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('slideDown', [
      state('open', style({ height: '*', opacity: 1, transform: 'translateY(0)' })),
      state('closed', style({ height: '0', opacity: 0, transform: 'translateY(-10px)' })),
      transition('closed => open', [
        animate('300ms ease-out')
      ]),
      transition('open => closed', [
        animate('200ms ease-in')
      ])
    ])
  ]
})
export class HeaderComponent implements OnInit, OnDestroy {
  isScrolled = false;
  mobileMenuOpen = false;
  activeSection = 'home';
  
  private subscription = new Subscription();

  navigationItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'technologies', label: 'Technologies' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  constructor(private scrollService: ScrollService) {}

  ngOnInit(): void {
    // Subscribe to scroll events
    this.subscription.add(
      this.scrollService.isScrolled$.subscribe(scrolled => {
        this.isScrolled = scrolled;
      })
    );

    // Subscribe to active section changes
    this.subscription.add(
      this.scrollService.activeSection$.subscribe(section => {
        this.activeSection = section;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    const window = event.target as Window;
    if (window.innerWidth > 768 && this.mobileMenuOpen) {
      this.mobileMenuOpen = false;
    }
  }

  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Escape' && this.mobileMenuOpen) {
      this.mobileMenuOpen = false;
    }
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  scrollToSection(sectionId: string): void {
    this.scrollService.scrollToSection(sectionId);
    this.mobileMenuOpen = false;
  }

  isActiveSection(sectionId: string): boolean {
    return this.activeSection === sectionId;
  }
}