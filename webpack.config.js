const reactTestProjectDev = require('./src/webpack-configurations/webpack.config.dev');

process.traceDeprecation = true;

module.exports = (env) => {
  if (!env) {
    throw new Error('COULD NOT READ THE "env" VARIABLE');
  }

  switch (env.NODE_ENV) {
    case 'development': {
      const devConfig = reactTestProjectDev;
      if (!devConfig) {
        throw new Error('COULD NOT READ THE WEBPACK CONFIGURATION FOR THE "development" ENVIRONMENT');
      }

      return devConfig;
    }
    default:
      throw new Error('COULD NOT READ THE "env.NODE_ENV" VARIABLE');
  }
};
