const projectPrefixInput = require('./scripts/user-inputs/projectPrefix');
const createFolders = require('./scripts/creators/createFolders');
const createConfig = require('./scripts/creators/createConfig');
const createFiles = require('./scripts/creators/createFiles');

function createFoldersAndFiles(prefix) {
    console.log('Creating folders...');
    createFolders(prefix);
    console.log('Creating configuration files...');
    createConfig(prefix);
    console.log('Creating dev files...');
    createFiles(prefix);
}

projectPrefixInput(createFoldersAndFiles);
