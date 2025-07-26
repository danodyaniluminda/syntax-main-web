import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    trigger('slideInUp', [
      state('in', style({ transform: 'translateY(0)', opacity: 1 })),
      transition('void => *', [
        style({ transform: 'translateY(50px)', opacity: 0 }),
        animate('0.6s ease-out')
      ])
    ]),
    trigger('shake', [
      transition('* => shake', [
        animate('0.5s ease-in-out', style({ transform: 'translateX(0)' })),
        animate('0.1s ease-in-out', style({ transform: 'translateX(-5px)' })),
        animate('0.1s ease-in-out', style({ transform: 'translateX(5px)' })),
        animate('0.1s ease-in-out', style({ transform: 'translateX(-5px)' })),
        animate('0.1s ease-in-out', style({ transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  isSubmitting = false;
  shakeState = '';
  
  contactInfo = [
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Our Location',
      content: '123 Innovation Street<br>Tech Valley, CA 94000'
    },
    {
      icon: 'fas fa-phone',
      title: 'Phone',
      content: '+1 (555) 123-4567'
    },
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      content: 'hello@syntaxera.com'
    }
  ];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.createForm();
  }

  ngOnInit(): void {}

  private createForm(): FormGroup {
    return this.fb.group({
      name: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern(/^[a-zA-Z\s]*$/)
      ]],
      email: ['', [
        Validators.required,
        Validators.email,
        Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
      ]],
      message: ['', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(500)
      ]]
    });
  }

  // Getter methods for form controls
  get name() { return this.contactForm.get('name'); }
  get email() { return this.contactForm.get('email'); }
  get message() { return this.contactForm.get('message'); }

  // Validation error messages
  getErrorMessage(controlName: string): string {
    const control = this.contactForm.get(controlName);
    
    if (control?.errors && control.touched) {
      if (control.errors['required']) {
        return `${this.capitalizeFirst(controlName)} is required`;
      }
      
      if (control.errors['minlength']) {
        const requiredLength = control.errors['minlength'].requiredLength;
        return `${this.capitalizeFirst(controlName)} must be at least ${requiredLength} characters`;
      }
      
      if (control.errors['maxlength']) {
        const requiredLength = control.errors['maxlength'].requiredLength;
        return `${this.capitalizeFirst(controlName)} cannot exceed ${requiredLength} characters`;
      }
      
      if (control.errors['email'] || control.errors['pattern']) {
        return 'Please enter a valid email address';
      }
      
      if (controlName === 'name' && control.errors['pattern']) {
        return 'Name can only contain letters and spaces';
      }
    }
    
    return '';
  }

  private capitalizeFirst(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // Check if field has error and is touched
  hasError(controlName: string): boolean {
    const control = this.contactForm.get(controlName);
    return !!(control?.errors && control.touched);
  }

  // Handle form submission
  async onSubmit(): Promise<void> {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      
      try {
        // Simulate API call
        await this.simulateFormSubmission();
        
        // Show success message
        this.showSuccessMessage();
        
        // Reset form
        this.contactForm.reset();
        this.resetFormState();
        
      } catch (error) {
        console.error('Form submission error:', error);
        this.showErrorMessage();
      } finally {
        this.isSubmitting = false;
      }
    } else {
      // Mark all fields as touched to show validation errors
      this.markAllFieldsTouched();
      
      // Trigger shake animation
      this.shakeState = 'shake';
      setTimeout(() => this.shakeState = '', 500);
    }
  }

  private simulateFormSubmission(): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Form submitted:', this.contactForm.value);
        resolve();
      }, 1500);
    });
  }

  private markAllFieldsTouched(): void {
    Object.keys(this.contactForm.controls).forEach(key => {
      this.contactForm.get(key)?.markAsTouched();
    });
  }

  private resetFormState(): void {
    Object.keys(this.contactForm.controls).forEach(key => {
      this.contactForm.get(key)?.markAsUntouched();
    });
  }

  private showSuccessMessage(): void {
    // In a real app, you might use a toast service or modal
    alert('Thank you for your message! We\'ll get back to you within 24 hours.');
  }

  private showErrorMessage(): void {
    alert('Sorry, there was an error sending your message. Please try again.');
  }

  // Real-time validation on blur
  onFieldBlur(controlName: string): void {
    const control = this.contactForm.get(controlName);
    control?.markAsTouched();
  }

  // Character count for message field
  getMessageCharacterCount(): string {
    const messageLength = this.message?.value?.length || 0;
    return `${messageLength}/500`;
  }

  // Check if message is approaching limit
  isMessageNearLimit(): boolean {
    const messageLength = this.message?.value?.length || 0;
    return messageLength > 450;
  }
}