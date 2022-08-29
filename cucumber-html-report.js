const report = require('multiple-cucumber-html-reporter');

report.generate({
	jsonDir: 'jsonlogs',
	reportPath: './reports/cucumber-htmlreport',
	metadata:{
        browser: {
            name: 'chrome',
            version: '104'
        },
        device: 'Local test machine',
        platform: {
            name: 'windows',
            version: '10'
        }
    },
    customData: {
        title: 'Project info',
        data: [
            {label: 'Project', value: 'Telnyx_cucmber'},
            {label: 'Alfa-build', value: '1.0.0'},
        ]
    }
});