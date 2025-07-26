import { Injectable } from '@angular/core';
import { BehaviorSubject, fromEvent, Subject } from 'rxjs';
import { throttleTime, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private isScrolledSubject = new BehaviorSubject<boolean>(false);
  private activeSectionSubject = new BehaviorSubject<string>('home');
  
  public isScrolled$ = this.isScrolledSubject.asObservable();
  public activeSection$ = this.activeSectionSubject.asObservable();

  private sections = ['home', 'about', 'services', 'technologies', 'projects', 'contact'];

  constructor() {}

  initScrollTracking(): void {
    // Track scroll position for navbar styling
    fromEvent(window, 'scroll')
      .pipe(
        throttleTime(16), // ~60fps
        map(() => window.scrollY > 100)
      )
      .subscribe(isScrolled => {
        this.isScrolledSubject.next(isScrolled);
      });

    // Track active section
    fromEvent(window, 'scroll')
      .pipe(
        throttleTime(100),
        map(() => this.getCurrentSection())
      )
      .subscribe(section => {
        if (section && section !== this.activeSectionSubject.value) {
          this.activeSectionSubject.next(section);
        }
      });
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for fixed navbar
      
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      
      // Update active section immediately for better UX
      this.activeSectionSubject.next(sectionId);
    }
  }

  private getCurrentSection(): string {
    const scrollPosition = window.scrollY + 200; // Offset for better section detection
    
    for (let i = this.sections.length - 1; i >= 0; i--) {
      const section = document.getElementById(this.sections[i]);
      if (section && section.offsetTop <= scrollPosition) {
        return this.sections[i];
      }
    }
    
    return 'home';
  }

  // Utility method for smooth scrolling to top
  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  // Get current scroll position
  getScrollPosition(): number {
    return window.scrollY;
  }

  // Check if element is in viewport
  isInViewport(element: HTMLElement): boolean {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
}