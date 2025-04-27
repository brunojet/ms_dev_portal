import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TermsService } from '../services/terms.service';

@Component({
  selector: 'app-terms-of-service',
  standalone: true,
  templateUrl: './terms-of-service.component.html',
  styleUrls: ['./terms-of-service.component.css'],
  providers: [TermsService]
})
export class TermsOfServiceComponent {
  constructor(private router: Router, private termsService: TermsService) {}

  acceptTerms() {
    this.termsService.acceptTerms();
    this.router.navigate(['/main']);
  }
}