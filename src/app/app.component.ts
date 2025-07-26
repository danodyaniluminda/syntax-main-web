import { Component, OnInit, OnDestroy } from '@angular/core';
import { ScrollService } from './core/services/scroll.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'SyntaxEra - Beyond the Barracks';
  private subscription = new Subscription();

  constructor(private scrollService: ScrollService) {}

  ngOnInit(): void {
    // Initialize scroll service
    this.scrollService.initScrollTracking();
    
    // Add loaded class after component initialization
    setTimeout(() => {
      document.body.classList.add('loaded');
    }, 100);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}