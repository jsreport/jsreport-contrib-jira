# jsreport-contrib-jira

[![Build Status](https://travis-ci.org/jsreport/jsreport-contrib-jira.png?branch=master)](https://travis-ci.org/jsreport/jsreport-contrib-jira)

> [jsreport](https://github.com/jsreport/jsreport) extension allowing to work with [jira npm module](https://github.com/steves/node-jira) inside jsreport [custom scripts](http://jsreport.net/learn/scripts).

This extension is pre-installed in jsreport [playground](http://jsreport.net/playground) and [online](http://jsreport.net/online) versions. You may install this extension to jsreport [on-prem](http://jsreport.net/on-prem) by:
```
npm install jsreport-contrib-jira
```

##Example
Once is `jsreport-contrib-jira` extension running you can use `require('jira')` inside your custom scripts.

Simple example of getting jira issues for particular user.

```javascript
JiraApi = require('jira').JiraApi;
var jira = new JiraApi('https', '[subdomain].atlassian.net', 443, 'username', 'password', '2');

jira.getUsersIssues('pofider', true, function(err, res) {
    request.data = res;
    done();    
});
```

And then display the issues using `jsrender`
```html
{{for issues}}
    <h3>
        <img src='{{:#data.fields.status.iconUrl}}' /> 
        {{:#data.key}} - 
        {{:#data.fields.summary}}
    </h3>
    <p>
        {{>#data.fields.description}}
    </p>
{{/for}}
```

For full set of jira api features see [node-jira documentation](https://github.com/steves/node-jira).
