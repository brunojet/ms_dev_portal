import { TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component'; // Certifique-se de que o caminho está correto

describe('LoginComponent', () => {
  let service: LoginComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginComponent], // Configure o TestBed para fornecer o serviço
    });
    service = TestBed.inject(LoginComponent); // Injete o serviço
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Adicione mais testes para verificar o comportamento do serviço
});
