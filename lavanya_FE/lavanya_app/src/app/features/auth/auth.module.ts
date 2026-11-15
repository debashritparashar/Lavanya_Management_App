import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { TenantLogiComponent } from './components/tenant-login/tenant-login';

@NgModule({
  declarations: [AdminLoginComponent,TenantLogiComponent],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule
  ]
})
export class AuthModule {}
