const campaign = require('./constants/campaign');
const channels = require('./constants/channels');
const conversation = require('./constants/conversation');
const http = require('./constants/http');
const messages = require('./constants/messages');
const redis = require('./constants/redis');
const users = require('./constants/users');
const whatsapp = require('./constants/whatsapp');

try {
    const packageJson = require('./package.json');
    console.log(`--- EXECUTING VERSION ${packageJson.version} VERSION OF thothconst ---`);
} catch (error) {
    // En un entorno de producción, sería mejor usar un logger más robusto
    console.error('Error reading package.json:', error.message);
}

module.exports = {
    ...campaign,
    ...channels,
    ...conversation,
    ...http,
    ...messages,
    ...redis,
    ...users,
    ...whatsapp,
};