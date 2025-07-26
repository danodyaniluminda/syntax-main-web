import { Component, OnInit } from '@angular/core';
import { ScrollService } from '../../core/services/scroll.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  currentYear = new Date().getFullYear();
  
  // Footer navigation links
  navigationLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Technologies', href: '#technologies' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  // Company services
  services = [
    { label: 'Web Development', href: '#services' },
    { label: 'Mobile Apps', href: '#services' },
    { label: 'Cloud Solutions', href: '#services' },
    { label: 'UI/UX Design', href: '#services' },
    { label: 'DevOps', href: '#services' },
    { label: 'Consulting', href: '#contact' }
  ];

  // Social media links
  socialLinks = [
    {
      name: 'Twitter',
      icon: 'fab fa-twitter',
      url: 'https://twitter.com/syntaxera',
      color: '#1DA1F2'
    },
    {
      name: 'LinkedIn',
      icon: 'fab fa-linkedin',
      url: 'https://linkedin.com/company/syntaxera',
      color: '#0077B5'
    },
    {
      name: 'GitHub',
      icon: 'fab fa-github',
      url: 'https://github.com/syntaxera',
      color: '#333'
    },
    {
      name: 'Dribbble',
      icon: 'fab fa-dribbble',
      url: 'https://dribbble.com/syntaxera',
      color: '#EA4C89'
    },
    {
      name: 'Instagram',
      icon: 'fab fa-instagram',
      url: 'https://instagram.com/syntaxera',
      color: '#E4405F'
    }
  ];

  // Contact information
  contactInfo = {
    address: {
      street: '123 Innovation Street',
      city: 'Tech Valley, CA 94000',
      country: 'United States'
    },
    phone: '+1 (555) 123-4567',
    email: 'hello@syntaxera.com',
    support: 'support@syntaxera.com'
  };

  // Company stats for footer
  companyStats = [
    { label: 'Projects Completed', value: '200+' },
    { label: 'Happy Clients', value: '150+' },
    { label: 'Team Members', value: '25+' },
    { label: 'Years of Experience', value: '5+' }
  ];

  // Newsletter subscription state
  newsletterEmail = '';
  isSubscribing = false;
  subscriptionMessage = '';

  constructor(private scrollService: ScrollService) {}

  ngOnInit(): void {}

  // Handle navigation clicks
  scrollToSection(href: string): void {
    if (href.startsWith('#')) {
      const sectionId = href.substring(1);
      this.scrollService.scrollToSection(sectionId);
    }
  }

  // Handle social media clicks
  openSocialLink(url: string, name: string): void {
    window.open(url, '_blank', 'noopener,noreferrer');
    // Analytics tracking could be added here
    console.log(`Social link clicked: ${name}`);
  }

  // Handle newsletter subscription
  async onNewsletterSubmit(): Promise<void> {
    if (!this.isValidEmail(this.newsletterEmail)) {
      this.subscriptionMessage = 'Please enter a valid email address.';
      return;
    }

    this.isSubscribing = true;
    this.subscriptionMessage = '';

    try {
      // Simulate API call
      await this.subscribeToNewsletter(this.newsletterEmail);
      
      this.subscriptionMessage = 'Thank you for subscribing! You\'ll receive our latest updates.';
      this.newsletterEmail = '';
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        this.subscriptionMessage = '';
      }, 5000);
      
    } catch (error) {
      this.subscriptionMessage = 'Sorry, there was an error. Please try again later.';
      console.error('Newsletter subscription error:', error);
    } finally {
      this.isSubscribing = false;
    }
  }

  // Email validation
  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
  }

  // Simulate newsletter subscription API call
  private subscribeToNewsletter(email: string): Promise<void> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate success/failure
        if (Math.random() > 0.1) { // 90% success rate
          resolve();
        } else {
          reject(new Error('Subscription failed'));
        }
      }, 1500);
    });
  }

  // Handle contact actions
  onCallPhone(): void {
    window.location.href = `tel:${this.contactInfo.phone}`;
  }

  onSendEmail(type: 'general' | 'support' = 'general'): void {
    const email = type === 'support' ? this.contactInfo.support : this.contactInfo.email;
    const subject = type === 'support' ? 'Support Request' : 'General Inquiry';
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
  }

  onViewLocation(): void {
    const address = `${this.contactInfo.address.street}, ${this.contactInfo.address.city}`;
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(mapsUrl, '_blank', 'noopener,noreferrer');
  }

  // Scroll to top
  scrollToTop(): void {
    this.scrollService.scrollToTop();
  }

  // Track by functions for performance
  trackByLabel(index: number, item: any): string {
    return item.label;
  }

  trackByName(index: number, item: any): string {
    return item.name;
  }

  // Get current year for copyright
  getCurrentYear(): number {
    return this.currentYear;
  }

  // Handle keyboard events for accessibility
  onKeyDown(event: KeyboardEvent, action: () => void): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      action();
    }
  }

  handleLinkKeyDown(event: KeyboardEvent, href: string): void {
  this.onKeyDown(event, () => this.scrollToSection(href));
}
handleSendEmailKeyDown(event: KeyboardEvent): void {
  this.onKeyDown(event, () => this.onSendEmail('general'));
}

handleSocialLinkKeyDown(event: KeyboardEvent, url: string, name: string): void {
  this.onKeyDown(event, () => this.openSocialLink(url, name));
}


}