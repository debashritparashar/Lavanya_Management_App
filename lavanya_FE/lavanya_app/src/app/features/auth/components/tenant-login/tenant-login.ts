import { Component, signal, ChangeDetectionStrategy } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-tenant-login',
  styleUrl: './tenant-login.css',
  templateUrl: './tenant-login.html',
})
export class TenantLogiComponent {

   readonly email = signal('tenant@lavanyacosmos.in');
}
