
module.exports = function (reporter, definition) {
    reporter['scripts'].allowedModules.push({
        id : 'jira',
        path: require.resolve('jira')
    });
};