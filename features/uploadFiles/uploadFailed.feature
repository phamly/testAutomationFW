Feature: Upload feature - Negative cases

Scenario: Upload with a file more than 196.45 MB
    Given Go to the upload page
    When Choose a file "testFiles/largefile.mp4"
    When Select the I accept terms of service
    When Click on button Submit File
    Then Verify uploading with a file more than 196.45 MB is unsuccessful with message 'Select file to send(max 196.45 MB).'

  Scenario: Upload without choosing a file
    Given Go to the upload page
    When Select the I accept terms of service
    When Click on button Submit File
    Then Verify uploading without "choosing a file" is unsuccessful with message 'Please choose a valid file.'

  Scenario: Upload without accepting terms of service
    Given Go to the upload page
    When Choose a file "testFiles/zerofile.txt"
    When Click on button Submit File
    Then Verify uploading without "accepting terms of service" is unsuccessful with message 'Please accept to terms of service.'