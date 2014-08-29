# jsreport-contrib-jira

[![Build Status](https://travis-ci.org/jsreport/jsreport-contrib-jira.png?branch=master)](https://travis-ci.org/jsreport/jsreport-contrib-jira)

> [jsreport](https://github.com/jsreport/jsreport) extension allowing to work with [jira npm module](https://github.com/steves/node-jira) inside jsreport [custom scripts](http://jsreport.net/learn/scripts).

This extension is pre-installed in jsreport [online](http://jsreport.net/online) version. You may install this extension to jsreport [on-prem](http://jsreport.net/on-prem) by:
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

##License
The MIT License (MIT)

Copyright (c) 2014 jsreport

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

