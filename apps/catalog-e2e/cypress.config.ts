import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run catalog:serve:development',
        production: 'nx run catalog:serve:production',
      },
      ciWebServerCommand: 'nx run catalog:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
