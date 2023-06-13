# Portfolio
My personal portfolio to showcase my work.
The link to the site is: https://fphportfolio.netlify.app

Main page is index.html 

In the icons folder you will find all the icons.
In the images folder you will find all the images.
In the style folder you will find all the CSS files, each file is for different screen size.
In the src folder you will find all the JavaScript files.

index.js:
Is the main file, all other files are imported directly or indirectly into it.
This file contains all event handlers and call to all functions perfomed on the main web page!

helpers.js:
A helper file to keep all global variables. The TOKEN, EMAIL and HOST variable are empty, these are used to send emails.
I used Elastic Email as the email provider (https://elasticemail.com/). You can get the token and the host from Elastic Email and use your own email address to receive emails!

email.js:
Contains all the email functionalities!

contentSections.js:
Has all the functionalities for opening and closing the "About" and the "Projects" section. It also contains the sorting functions for projects.

effects.js:
Contains all effects:
  Parallax
  Fadein/out on scroll
  Removes the page loader
  Loading bar
  Mobile menu

selectorsFunctions.js:
Toggle all elements that can be tabbed respectively. For example, if you open the "Projects" section you can only then use the tab key for any sections inside the "Projects" section and not on the main webpage anymore.
It also disable/enable scrolling.

projectObjects.js:
Has all my projects with all their information stored in objects. contentSection.js uses the objects to display all the projects!
