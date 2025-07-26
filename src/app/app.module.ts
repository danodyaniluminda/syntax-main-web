import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Core
import { AppComponent } from './app.component';

// Components
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

// Services
import { ScrollService } from './core/services/scroll.service';
import { AnimationService } from './core/services/animation.service';

// Shared Components (if any)
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { TechnologiesComponent } from './components/technologies/technologies.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ButtonComponent } from './components/shared/components/button/button.component';
import { LoadingSpinnerComponent } from './components/shared/components/loading-spinner/loading-spinner.component';
import { ScrollAnimationDirective } from './components/shared/directives/scroll-animation.directive';
import { TypewriterDirective } from './components/shared/directives/typewriter.directive';

@NgModule({
  declarations: [
    // Core
    AppComponent,
    
    // Layout Components
    HeaderComponent,
    
    // Page Components
    HeroComponent,
    ContactComponent,
    
    // Shared Components
    LoadingSpinnerComponent,
    ButtonComponent,
    
    // Directives
    ScrollAnimationDirective,
    TypewriterDirective,
    FooterComponent,
    AboutComponent,
    ServicesComponent,
    TechnologiesComponent,
    ProjectsComponent
  ],
  imports: [
    // Angular Core
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    // Services
    ScrollService,
    AnimationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// Animation configurations
export const APP_ANIMATIONS = {
  fadeInUp: {
    name: 'fadeInUp',
    duration: 600,
    easing: 'ease-out'
  },
  slideInLeft: {
    name: 'slideInLeft',
    duration: 800,
    easing: 'ease-out'
  },
  scaleIn: {
    name: 'scaleIn',
    duration: 400,
    easing: 'ease-out'
  }
};