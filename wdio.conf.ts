export const config = {
  runner: 'local',
  specs: [
    './test/specs/**/*.ts'
  ],
  maxInstances: 1,
  capabilities: [{
    maxInstances: 1,
    browserName: 'chrome',
    'goog:chromeOptions': {
      args: ['--headless', '--disable-gpu', '--window-size=1920,1080']
    }
  }],
  logLevel: 'info',
  bail: 0,
  baseUrl: 'https://automationexercise.com',
  waitforTimeout: 10000,
  framework: 'mocha',
  reporters: ['spec'],
  services: ['chromedriver'],
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  },
  autoCompileOpts: {
    autoCompile: true,
    tsNodeOpts: {
      transpileOnly: true,
      project: './tsconfig.json'
    }
  }
};
