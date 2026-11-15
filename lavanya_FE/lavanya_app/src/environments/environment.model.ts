export interface EnvironmentConfig {
  production: boolean;
  envName: 'DEV' | 'UAT' | 'PROD';
  appName: string;
  version: string;
  apiBaseUrl: string;
  enableDebugTools: boolean;
  preloadChunkDelayMs: number;
  featureFlags: {
    enableMultiGateTelemetry: boolean;
    enableGuardPatrolLiveSync: boolean;
    enableDigitalInvoiceGstEngine: boolean;
  };
}
