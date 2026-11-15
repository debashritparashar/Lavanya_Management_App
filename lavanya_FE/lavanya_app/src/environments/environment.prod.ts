import { EnvironmentConfig } from './environment.model';

export const environment: EnvironmentConfig = {
  production: true,
  envName: 'PROD',
  appName: 'Lavanya Cosmos Society',
  version: '22.1.0',
  apiBaseUrl: 'https://api.lavanyacosmossociety.in/api/v1/cosmos',
  enableDebugTools: false,
  preloadChunkDelayMs: 300,
  featureFlags: {
    enableMultiGateTelemetry: true,
    enableGuardPatrolLiveSync: true,
    enableDigitalInvoiceGstEngine: true
  }
};
