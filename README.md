# Frontend Mentor - Time Tracking Dashboard Solution

This is a solution to the [Time Tracking Dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot

![](./design/desktop-design.jpg)

### Links

- Solution URL: [GitHub Repo](https://github.com/AcharaChisomSolomon/time-tracking-dashboard)
- Live Site URL: [Live Site](https://acharachisomsolomon.github.io/time-tracking-dashboard)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript

### What I learned

I learned how to work with 'data-' attributes and I am proud of the following code snippets:

```css
#main .daily,
#main .weekly,
#main .monthly {
    display: none;
}
#main[data-theme='daily'] .daily,
#main[data-theme='weekly'] .weekly,
#main[data-theme='monthly'] .monthly{
    display: flex;
}
``` 
and 
```js
function changeToTheme(btn) {
    const btns = [dayBtn, weekBtn, monthBtn];

    for (const btn of btns) { 
        btn.classList.remove('active');
    }

    btn.classList.add('active');
    main.dataset.theme = btn.id;
}

dayBtn.addEventListener('click', () => { 
    changeToTheme(dayBtn);
});

weekBtn.addEventListener('click', () => { 
    changeToTheme(weekBtn);
});

monthBtn.addEventListener('click', () => {
    changeToTheme(monthBtn);
 });
```

### Continued development

I plan to continue working on more projects to improve my skills. I aim to further enhance my understanding of JavaScript, especially in handling user interactions and manipulating the DOM. I also plan to delve deeper into responsive design to ensure my future projects provide an optimal user experience across all device sizes.

### Useful resources

- [Frontend Masters](https://frontendmasters.com) - This platform helped me understand more about web development. Their courses are comprehensive and taught by industry professionals.
- [Frontend Mentor](https://www.frontendmentor.io) - This platform provided me with practical projects to work on. Their challenges range from beginner to advanced and cover a wide array of web development topics.

## Author

- Frontend Mentor - [@AcharaChisomSolomon](https://www.frontendmentor.io/profile/AcharaChisomSolomon)
- Twitter - [@Chisom14Solomon](https://www.twitter.com/Chisom14Solomon)

## Acknowledgments

I would like to thank Frontend Mentor for their learning paths and Frontend Masters for their wonderful courses. Their resources have been instrumental in my web development journey.