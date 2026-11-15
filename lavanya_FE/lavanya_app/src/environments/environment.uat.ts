import { EnvironmentConfig } from './environment.model';

export const environment: EnvironmentConfig = {
  production: false,
  envName: 'UAT',
  appName: 'Lavanya Cosmos Society (UAT Staging)',
  version: '22.1.0-uat',
  apiBaseUrl: 'https://uat-api.lavanyacosmossociety.in/api/v1/cosmos',
  enableDebugTools: true,
  preloadChunkDelayMs: 150,
  featureFlags: {
    enableMultiGateTelemetry: true,
    enableGuardPatrolLiveSync: true,
    enableDigitalInvoiceGstEngine: true
  }
};
