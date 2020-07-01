const os = require('os');
const path = require('path');
const fs = require('fs-extra');

const DIR = path.join(os.tmpdir(), 'jest_puppeteer_global_setup');

fs.ensureDirSync(DIR);
const tempDir = fs.mkdtempSync(`${DIR}${path.sep}`);

module.exports.WS_ENDPOINT_PATH = path.join(tempDir, 'wsEndpoint');
module.exports.IS_DEBUG_MODE = path.join(tempDir, 'isDebugMode');
