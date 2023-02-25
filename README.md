The automation is built from Cucumber and Selenium Javascript. The following items are for setting up the framework and run the tests.

1. Setup framework:

- Install Node JS and npm (https://nodejs.org)

- Install an IDE (e.g Visual studio Code)

- Clone the project code from Github and open it in Visual Studio Code

- In the app root directory, run 'npm install' to download all dependencies

- Install Firefox or Chrome browser

- Download and store the appropriate web driver and add the path of this web driver to the path of the machine's system

1. Project structure:

This framework follows a very simple project structure:

- TESTAUTOMATIONFW: is the project folder
- features: this folder stores the common, step-definitions and uploadFeature folders.
- common: contains common configuration which will be reused in the whole project.
- step-definitions: stores the steps definitions subfolders according to the app features. Each subfolder contains step definition files. Each file contains the mapping data between each step of a scenario defined in the feature file and the code to be executed.
- uploadFiles: the folder according to the app feature. This folder includes feature files. Each feature file store information about feature, the description, and the scenarios to be tested.
- node\_modules: the folders of npm and dependency packages
- report: folder contains the test reports

README: the file for Instructions of how to set up and run the test

- testFiles: contains the data test – the files use for testing uploading
- reportRunner.js: this file is for view the html reports.

![](https://raw.githubusercontent.com/phamly/testAutomationFW/main/screenshots/folder_structure.png)

1. Run test scripts

- By default, the tests will be run on Firefox. If you wish to run with Chrome, update the value of 'browserName' to 'chrome' in the commonVariable.js file

![](https://raw.githubusercontent.com/phamly/testAutomationFW/main/screenshots/common_variables.png)

- In the root directory of the project run this command: _ **npm test** _

- Html reports are stored at testAutomationFW\reports

1. View report

To view the report, run this command: _ **node reportRunner.js** _ Below is the test report of upload features.

![](https://raw.githubusercontent.com/phamly/testAutomationFW/main/screenshots/report_image.png)