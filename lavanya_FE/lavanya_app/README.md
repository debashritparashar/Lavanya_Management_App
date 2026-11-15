# Lavanya Cosmos Society — Angular 22 Enterprise Portal (`lavanya_app`)

Migrated to **Angular 22.1.x** (`@angular/core: ^22.1.0`, `@angular/build: ^22.1.3`, `@angular/ssr: ^22.1.3`, TypeScript `~6.0.2`, Vitest `^4.0.8`) with the exact Deep Blue & Light Sky Blue UI, multi-environment configuration (`DEV`, `UAT`, `PROD`), selective lazy loading across 19 feature modules, and `OnPush` + Angular Signals reactivity.

## Quick Commands

```bash
# Install dependencies
npm install

# Run Development Server (uses environment.development.ts)
npm start

# Run UAT Staging Server (uses environment.uat.ts)
npm run start:uat

# Build for Development, UAT, or Production
npm run build:dev
npm run build:uat
npm run build:prod
```
