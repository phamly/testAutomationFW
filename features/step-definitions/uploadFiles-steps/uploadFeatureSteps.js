const webdriver = require("selenium-webdriver");
const { Given,When, Then, Before, After, setDefaultTimeout} = require("@cucumber/cucumber")
const path = require("path");
const {expect} = require("chai");
const {commonVariables} = require("../../common/commonVariables");

let driver;

setDefaultTimeout(commonVariables.timeOut);

Before(async function(){
  driver = await new webdriver.Builder().forBrowser(commonVariables.browserName).build();
})

After(async function(){  
  await driver.quit();
})

Given('Go to the upload page', async function () {
  await driver.get("https://demo.guru99.com/test/upload/");
});

When('Choose a file {string}', async function (aFile) {
  let absolutelyPath = path.resolve(aFile);
  await driver.findElement(webdriver.By.id("uploadfile_0")).sendKeys(absolutelyPath);
});

When('Select the I accept terms of service', async function () {
  await driver.findElement(webdriver.By.id("terms")).click();
});

When('Click on button Submit File', async function () {
  await driver.findElement(webdriver.By.id("submitbutton")).click();
});

Then('Verify the {string} file has been successfully uploaded with message {string}', {timeout: 60 * 1000}, async function (fileType, expectedMessage) {
  let actualMessage = await driver.findElement(webdriver.By.id("res")).getAttribute("innerText").then(function(value){
    return value;
  });
  expect(actualMessage).equal(expectedMessage);
});

Then('Verify uploading with a file more than {float} MB is unsuccessful with message {string}', async function (float, expectedMessage) {
  let actualMessage = await driver.findElement(webdriver.By.id("res")).getAttribute("innerText").then(function(value){
    return value;
  });
  expect(actualMessage).equal(expectedMessage);
});

Then('Verify uploading without {string} is unsuccessful with message {string}', async function (string, expectedMessage) {
  let actualMessage = await driver.findElement(webdriver.By.id("res")).getAttribute("innerText").then(function(value){
    return value;
  });
  expect(actualMessage).equal(expectedMessage);
  driver.takeScreenshot().then(
    function(image) {
        require('fs').writeFileSync('captured_image_3.png', image, 'base64');
    }
  );
});

