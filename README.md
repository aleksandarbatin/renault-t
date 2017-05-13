# Renault - test

This nice and straightforward design is perfect opportunity for practising your frontend tehnick and workflow.  Here I will represent mine.

## Getting Started

To try how it works you need to have NODE.js and GULP instaled on your machine and simply do 

```
git clone https://github.com/aleksandarbatin/renault-t.git
cd renault-t
npm install

```
All files used for building project are in /assets folder. You can see there that I'm using SASS for preprocesing CSS. Inside SASS folder see readme file for explanation of logic that i used for structuring files and css naming convention.

## Running the project

As a part of GULP worklow there are some basic tasks like 

#gulp-sass - for compiling Sass into CSS.

#gulp-plumber - prevent pipe breaking caused by errors from gulp plugins

#gulp-uglufy - minifies all .js files.

#gulp-minify-css - minifies all CSS files.

#gulp-imagemin - to optimize images using imageoptim and jpegmini

#gulp-watch - watches for changes to file content and then executes gulp tasks when a change is detected. Watch is useful for tasks like continuous unit testing (every time you save a file, that new file is tested), refreshing your browser automatically when changes are reflected, or compiling preprocessing languages like Sass or Jade into CSS or HTML.

#browser-sync - keep multiple browsers & devices in sync when building websites.

### Break down into end to end tests

To run and test project and work on it you just need command

```
gulp

```
Enjoy it!

