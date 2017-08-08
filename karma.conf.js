var karmaConfig = require("./karma.configuration");

module.exports = function (config) {
    karmaConfig.logLevel = config.LOG_DEBUG;
    config.set(karmaConfig);
}