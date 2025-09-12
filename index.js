const constants = require('./constants');

try {
    const packageJson = require('./package.json');
    console.log(`--- EXECUTING VERSION ${packageJson.version} VERSION OF thothconst ---`);
} catch (error) {
    console.log('Error leyendo package.json:', error.message);
}

module.exports = constants;