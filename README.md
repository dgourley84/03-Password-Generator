# Password Generator Starter Code
This project was designed as a homework assignment for UWA's coding bootcamp.

This application uses basic Javascript to generate a random, secure password for the user.

This project has been deployed to GitHub Pages. To access this project click the deployment link below:

https://github.com/dgourley84/03-Password-Generator 

Or, download the sources files to use this as a template.

## Getting Started
This project has been deployed to GitHub Pages. To access this project click the deployment link below.
Or, download the sources files to use this as a template.

 - https://github.com/dgourley84/03-Password-Generator
 - https://dgourley84.github.io/03-Password-Generator/

## Prerequisites
If you wish to use this as a template you will need a text editor. Visual Studio Code was used to create this project and is the recomended application.

## Installing
To install this code, download the zip file, or use GitHub's guidelines to clone the repository.

## Summary
HTML and CSS and Javascript documents create a random password generator
This project uses basic Javascript to make dynamic changes to an HMTL document
![Deployed webpage](/assets/Images/Deployed_Webpage.png)

## This project has the following features:
- A generate button
    - This will send the user a series of prompts and confirms
    - After user data is collected, a random password will be generated using Javascript using all the inputs selected.
![Inputs](/assets/Images/Password_Inputs.png)
- A Textarea
    - This textarea will display the users password once it is generated
    ![Text Area](/assets/Images/Text_Area.png)
## Psuedo Code and Project Requirements:
- The user will be prompted to choose from the following password criteria: 8 and 128 characters
- The user will recieve a confirm for:
    - Password containing special characters, numbers, lowercase and uppercase
    - This will need to randomly generate a selection or randomly select array data, so math.random and math.floor will need to be used.
        - If statment checking at least one input and return if none 
- The application should validate user input and ensure that at least one character type is selected.
- The application will ensure that the password conatains at least one character from each of the selected inputs. 
- Once all prompts are answered, the user will be presented with a password matching the answered prompts. Displaying the generated password in an alert is acceptable, but attempt to write the password to the page instead.
    - Event listener will determine the password output with function to populate the value into the test area.
## This project has script features of:
- Variable declaration area
- An event listener (onclick) called generatePassword
    - This will prompt the user for input between 8-128
    - This variable is changed to an interger using ParseInt()
    - This will validate that the input is a number within range, or is a number
        ![Password Lenght](/assets/Images/Password_Length.png)
- This then uses the input to determine the types (or choices) or letters of characters used, using an if statement
![Inputs Required](/assets/Images/Inputs_Required.png)
- This then assigns values to the constants using arrays for character, number or alphabet uppercase and lowercase
![Global Constants](/assets/Images/Global_Constants.png)
- A variable is created to join the above imputs into a string. This variable ensures that each input selected is part of the password.
![Selections of password](/assets/Images/Creation_of_String.png)
- A for loop will loop through the enter prompt until it reaches the number entered by user. 
![For loop](/assets/Images/Randomise_String.png)
- A function then writes the password to the textbox.

    ![event listener](/assets/Images/Create_Password.png)

## To Execute File:
Open in browser

## Features:
- One HTML Pages (provided by UWA)
    - Index.html
        - Contains basic user input items and buttons with divs and ids
- One CSS Page (provided by UWA)
    - Styles.css
        - Contains centering and styling for html user input features
- One Javascript Page * Contains: * Variables and constansts * One event listener * multiple if statements for input randomisation and validation.

## Authors
- Dallas Gourley - Work on JavaScript
- UWA for HTML and CSS pages

## Acknowledgments
Thanks to Sam Ngu and Navepreet Ahuja for tutorial guidence and inspiration.