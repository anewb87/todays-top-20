# Today's Top 20-ish

Welcome to Today's Top 20-ish! This is an application that gives user's a look at the New York Times's most popular 20 (or so) articles of the last 24 hours.

## TABLE OF CONTENTS
- [Project Overview](#overview)
- [Future Features](#future-features)
- [Tech Stack](#technologies-used)
- [Install Instructions](#instructions)
- [Author/Links](#authorslinks)
- [Credit](#credit)

## OVERVIEW
Today's Top 20-ish was a take home, 'technical challenge' given by the [Turing School of Software and Design](https://turing.edu/) built with `React` and tested using `Cypress`. This application displays basic information of the top articles today and allows users to search for articles based on key words in their titles. A user can select an article which routes them to a page containing more details of that article. Additionally, users are provided a link that will take them to the full article on the New York Times website. (The title of the application is 20-ish because the api does not always contain 20 valid articles all the time, but it sure does get close.)

Some GIFs showing the features and user flows of Today's Top 20-ish:

The landing page where a user can view all the articles, select one, and click a link directing them to the full article on the New York Times website.  
![Landing Page](https://media.giphy.com/media/q8QJrFwYGBkOKPYXwt/giphy.gif)

The search bar allows users to search for articles based on the article titles. If there are no articles containing a search term(s), a user will see a message directing them to try again.  
![Search Functionality](https://media.giphy.com/media/sknBQeSBlPH1Bx79Rr/giphy.gif)  

The error page displays when something rotten has occured in the application, like when a user types in an invalid url.
![Error](https://media.giphy.com/media/EQxc9iBaIzoJLxJk89/giphy.gif) 


## FUTURE FEATURES
In the future, I would love to:
- Have a dropdown feature that allows users to sort/filter articles according to newspaper section
- Add a favorites function that allows users to come back AFTER the current day to view their favorites over time


## TECHNOLOGIES USED 

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![SASS](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![Cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Webpack](https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=Webpack&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)

## INSTRUCTIONS
- Fork the repository
- Copy the SSH clone address
- Run ```git clone git@github.com:anewb87/todays-top-20.git``` in a local directory
- Run ```npm install``` in your terminal
- Run ```npm start``` in your terminal
- Visit localhost:3000
- To view the tests, run ```npm run cypress``` in your terminal

## AUTHORS/LINKS

#### PROJECT LINKS
- [Project Board](https://github.com/anewb87/todays-top-20/projects/1)
- [Wireframe](https://miro.com/app/board/uXjVO7pIzbY=/)

#### AUTHOR:
- Lexy Newby  
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/lexy-newby/) [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/anewb87)

## CREDIT
For the loading animation, I would like to credit:
- Irko Palenius and their codepen found [here](https://codepen.io/ispal/pen/mVaaJe)

#### [BACK TO THE TOP!](#todays-to-20-ish)
