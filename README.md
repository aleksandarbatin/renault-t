# Renault - test

This nice and straightforward design is perfect opportunity for practicing your frontend technique and workflow. Here I will represent mine.

## Getting Started

To try how it works you need to have NODE.js and GULP installed on your machine and simply do 

```
git clone https://github.com/aleksandarbatin/renault-t.git
cd renault-t
npm install
```
All files used for building project are in /assets folder. You can see there that I'm using SASS for preprocesing CSS. Inside SASS folder see readme file for explanation of logic that I used for css naming convention and files structure.

## Running the project

As a part of GULP workflow there are some basic tasks like: 

#gulp-sass - for compiling Sass into CSS.

#gulp-pug - Pug (or ex Jade) preprocessor for HTML enable you ease control of HTML templates when you write lot of static code

#gulp-plumber - prevent pipe breaking caused by errors from gulp plugins

#gulp-uglufy - minifies all .js files.

#gulp-minify-css - minifies all CSS files.

#gulp-imagemin - to optimize images using imageoptim and jpegmini

#gulp-watch - watches for changes to file content and then executes gulp tasks when a change is detected. Watch is useful for tasks like continuous unit testing (every time you save a file, that new file is tested), refreshing your browser automatically when changes are reflected, or compiling preprocessing languages like Sass or Jade into CSS or HTML.

#browser-sync - keep multiple browsers & devices in sync when building websites.

To run and test project or work on it you just need command

```
gulp
```
Enjoy it!

![1-hp](https://user-images.githubusercontent.com/17181108/35620646-0e21a0b8-0682-11e8-8f79-48045736f153.jpg)
