import { EnvironmentConfig } from './environment.model';

export const environment: EnvironmentConfig = {
  production: false,
  envName: 'DEV',
  appName: 'Lavanya Cosmos Society (DEV)',
  version: '22.1.0-dev',
  apiBaseUrl: 'http://localhost:8080/api/v1/cosmos',
  enableDebugTools: true,
  preloadChunkDelayMs: 0,
  featureFlags: {
    enableMultiGateTelemetry: true,
    enableGuardPatrolLiveSync: true,
    enableDigitalInvoiceGstEngine: true
  }
};
