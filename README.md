<!-- Please update value in the {}  -->

<h1 align="center">{Your project name}</h1>

<div align="center">
   Solution for a challenge from  <a href="http://devchallenges.io" target="_blank">Devchallenges.io</a>.
</div>

<div align="center">
  <h3>
    <a href="https://{your-demo-link.your-domain}">
      Demo
    </a>
    <span> | </span>
    <a href="https://{your-url-to-the-solution}">
      Solution
    </a>
    <span> | </span>
    <a href="https://devchallenges.io/challenges/3JFYedSOZqAxYuOCNmYD">
      Challenge
    </a>
  </h3>
</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [My work plan](#my-work-plan)
  - [Colors](#colors)
  - [Fonts](#fonts)
    - [Muli](#muli)
    - ['Montserrat'](#montserrat)
  - [Components](#components)
  - [Functionalities](#functionalities)

<!-- OVERVIEW -->

## Overview

![screenshot](https://user-images.githubusercontent.com/16707738/92399059-5716eb00-f132-11ea-8b14-bcacdc8ec97b.png)

Introduce your projects by taking a screenshot or a gif. Try to tell visitors a story about your project by answering:

- Where can I see your demo?
- What was your experience?
- What have you learned/improved?
- Your wisdom? :)

### Built With

<!-- This section should list any major frameworks that you built your project using. Here are a few examples.-->

- [React](https://reactjs.org/)
- [Vue.js](https://vuejs.org/)
- [Tailwind](https://tailwindcss.com/)

## Features

<!-- List the features of your application or follow the template. Don't share the figma file here :) -->

This application/site was created as a submission to a [DevChallenges](https://devchallenges.io/challenges) challenge. The [challenge](https://devchallenges.io/challenges/3JFYedSOZqAxYuOCNmYD) was to build an application to complete the given user stories.

## How To Use

<!-- Example: -->

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/your-user-name/your-project-name

# Install dependencies
$ npm install

# Run the app
$ npm start
```

## Acknowledgements

<!-- This section should list any articles or add-ons/plugins that helps you to complete the project. This is optional but it will help you in the future. For example: -->

- [Steps to replicate a design with only HTML and CSS](https://devchallenges-blogs.web.app/how-to-replicate-design/)
- [Node.js](https://nodejs.org/)
- [Marked - a markdown parser](https://github.com/chjj/marked)

## Contact

- Website [your-website.com](https://{your-web-site-link})
- GitHub [@your-username](https://{github.com/your-usermame})
- Twitter [@your-twitter](https://{twitter.com/your-username})

# My work plan
1. Define colors +
2. Define fonts (family, weight, size) +
3. Define components + 
4. Define functionalities +
5. Define the user story +
6. Explain every functionality + link it to the code (state, hook, functions)
7. Define different states
8. Code the UI
    - add colors + fonts to tailwind config
1. Add the logic
## Colors
- w-pink : #EB5757
- w-black : #333333
- w-gray : #4F4F4F
- w-gray-2 : #828282
- w-gray-3 : #BDBDBD (search bar text)

## Fonts 
### Muli 
-for search title + search suggestions
- font weights : 400, 500, 700, 800
- font sizes : 9px, 14px, 
### 'Montserrat' 
-for text
-font weights : 500, 600, 700
- font sizes : 12px, 14px, 16px, 24px

## Components
- Navbar +
- SearchBar +
- logo +
- Button + 
- Input + 
- LocationFilter = Input + LocationFilterResutl + 
- GuestFilter = Input + Age filter (AdultFilter + ChildrenFilter) +
- FilterDrawer = LocationFilter + GuestFilter + Button
- title +
- card +
- CardsGrid +

## Functionalities
- the user open the app =>  a list of cards of a specific region is displayed
                        - the region is displayed in the search bar
                        - number of stays = number of stays of the region
                        - Title = stays in [region]
- the user clicks on the searchBar => - the FilterDrawer is opened
                                      -  the user can search new location
                                      -  the user start typing => the list of location appears
                                      -  when the user starts typing the available location appear
                                      -  when select a location the other locations will be hidden and the selected location placed in the input
                                      -  When he clicks on the guest filter input => Adult/Children filters appear
                                      -  the user can specify number of gusts = number of Children + adults
  
- if the user clicks on the location search => open the Location Filter
- if the user clicks on the Guest search => open the Guest Filter
- if the user clicks on the search icon => the FilterDraw will be opened without any filter 