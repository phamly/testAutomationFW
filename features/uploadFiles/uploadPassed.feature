Feature: Upload features

  As a user, I want to upload files to the website

  Scenario: <scenarioName> 
    Given Go to the upload page
    When Choose a file <fileName>
    When Select the I accept terms of service
    When Click on button Submit File
    Then Verify the <fileType> file has been successfully uploaded with message <expectedMessage>


    Examples:
    | scenarioName                    | fileName                  | fileType    | expectedMessage                           |
    | Upload a video file             | "testFiles/abc.mp4"       | "mp4"       | "1 file has been successfully uploaded."  |
    | Upload an image file            | "testFiles/image.png"     | "png"       | "1 file has been successfully uploaded."  |
    | Upload a document file          | "testFiles/Hunger_Ly.docx"| "docx"      | "1 file has been successfully uploaded."  |
    | Upload a file with zero size    | "testFiles/zerofile.txt"  | "zero size" | "1 file has been successfully uploaded."  |
    
