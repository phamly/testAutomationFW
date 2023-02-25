let reporter = require("cucumber-html-reporter");
let options = {
    theme: 'bootstrap',
        jsonFile: './reports/uploadFeatures_report.json',
        output: './reports/uploadFeatures_report.html',
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: true,
        name: "Upload feature",
        storeScreenshots: true,
        metadata: {
            "App Version":"0.3.2",
            "Test Environment": "STAGING",
            "Browser": "Chrome  54.0.2840.98",
            "Platform": "Windows 10",
            "Parallel": "Scenarios",
            "Executed": "Remote"
        }
};
reporter.generate(options);