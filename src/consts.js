const path = require('path');

const TEMPLATE_NAMES = require('../templates/manifest').templates.map(t => t.name);

const BUILD_DIR_NAME = 'build';
const TEMPLATES_DIR_NAME = 'templates';
const EXAMPLES_DIR_NAME = 'examples';
const DIST_DIR_NAME = 'dist';
const LOCAL_STORAGE_DIR = path.join(__dirname, '..', 'tmp', 'local-emulation-dir');

module.exports = {
    TEMPLATE_NAMES,
    BUILD_DIR_NAME,
    TEMPLATES_DIR_NAME,
    EXAMPLES_DIR_NAME,
    LOCAL_STORAGE_DIR,
    DIST_DIR_NAME,
};
