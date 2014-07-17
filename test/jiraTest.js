var describeReporting = require("jsreport").describeReporting,
    assert = require("assert"),
    q = require("q"),
    path = require("path");

describeReporting(path.join(__dirname, "../"), ["templates", "scripts", "jsreport-contrib-jira"], function(reporter) {
    describe('jira', function() {

        function prepareTemplate(scriptContent) {
            var script = new reporter.scripts.ScriptType({ content: scriptContent });
            reporter.context.scripts.add(script);
            return reporter.context.scripts.saveChanges().then(function () {
                return reporter.templates.create({
                    content: "foo",
                    scriptId: script.shortid
                });
            });
        }

        function prepareRequest(scriptContent) {
            return prepareTemplate(scriptContent).then(function(template) {
                return q({
                    request: { template: template, context: reporter.context, reporter: reporter },
                    response: {}
                });
            });
        }

        it('shoulb be able to use jira module', function (done) {
            prepareRequest("var JiraApi = require('jira').JiraApi; request.data = (JiraApi !== undefined); done()").then(function(res) {
                return reporter.scripts.handleBeforeRender(res.request, res.response).then(function () {
                    assert.equal(true, res.request.data);
                    done();
                });
            }).catch(done);
        });
    });
});