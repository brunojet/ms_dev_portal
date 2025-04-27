import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terms-of-service',
  standalone: true,
  templateUrl: './terms-of-service.component.html',
  styleUrls: ['./terms-of-service.component.css']
})
export class TermsOfServiceComponent {
  constructor(private router: Router) {}

  ngOnInit() {
    console.log('Terms of Service component initialized');
    // Check if the terms have already been accepted
    const termsAccepted = localStorage.getItem('termsAccepted');
    if (termsAccepted === 'true') {
      this.router.navigate(['/main']);
    }
  }

  acceptTerms() {
    localStorage.setItem('termsAccepted', 'true');
    this.router.navigate(['/main']);
  }
}