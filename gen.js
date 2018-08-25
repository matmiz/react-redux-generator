const projectPrefixInput = require('./scripts/user-inputs/projectPrefix');
const createFolders = require('./scripts/creators/createFolders');
const createFiles = require('./scripts/creators/createFiles');

function createFoldersAndFiles(prefix) {
    createFolders();
    createFiles(prefix);
}

projectPrefixInput(createFoldersAndFiles);
