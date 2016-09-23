# YO Generator GdayMate

```
  _____     _               __  __       _         _ 
 / ____|   | |             |  \/  |     | |       | |
| |  __  __| | __ _ _   _  | \  / | __ _| |_ ___  | |
| | |_ |/ _` |/ _` | | | | | |\/| |/ _` | __/ _ \ | |
| |__| | (_| | (_| | |_| | | |  | | (_| | ||  __/ |_|
 \_____|\__,_|\__,_|\__, | |_|  |_|\__,_|\__\___| (_)
                     __/ |                           
                    |___/                            
   This is a starting point for most of my work.
   ---------------------------------------
   Author   :   Jinzhe Li
   Email    :   jinjinwudi@gmail.com
```


## Intro
That's my own YO Generator who fits for my own requirements.

Credit to [David Hellmann](https://davidhellmann.com) and his awesome [DHBoilterplate] (https://github.com/davidhellmann/generator-dhBoilerplate)

## What is inside

### Sass Functions
- `borderradius('level-x')` or `br('level-x')`
- `boxshadow('level-x')` or `bs('level-x')`
- `color('color-name')` or `c('color-name')`
- `ease('easing-name')` or `e('easing-name')`
- `fontfamily('font-name')` or `ff('font-name')` 
- `font-size('font-size')` or `fs('font-size')`  
- `lineheight(i)` or `lh(i)`    
- `sapce(i)` or `s(i)`  
- `verticalrhythm(i)` or `vr(i)` 

### Sass Mixins
- `@include center`
- `@include clearfix`
- `@include container('full')` ‚full‘ ist optional 
- `@include cols(i)`
- `@include filter(filter-name, value%)`
- `@include fluid-type($properties, $min-vw, $max-vw, $min-value, $max-value)` or `@include ft($properties, $min-vw, $max-vw, $min-value, $max-value)`
- `@include flexbox('full')` or `@include fb('full')` ‚full‘ is optional
- `@include flexcols(i)` or `@include fc(i)`
- `@include gutter(i)`or `@include g(i)`
- `@include pull(i)`
- `@include push(i)`
- `@include valign`
- `@include visuallyhidden` or `@include vh`


## Install
```
$ npm install -g generator-gdaymate
```


## Usage
Jump in your Working Directory and type:

```
yo gdaymate
```
Run through the options. When you're done grab a coffee. The node module installation take a while :)


## Commands
Intialize your Project simple with `gulp init`


### Default Task with BrowserSync

```
gulp
```

### Task for watch & deploy on live site (DANGEROUS)

```
gulp live
```


### Task for Building
This Task clean the folder, build the stuff from ground up and optimize the images and minifiy JS / CSS files. Ready for live!

```
gulp build
```


### Other Tasks
There are some other Tasks there…

```
// Clean Tasks
// Clean the specific folder in the "___dist" dir
gulp clean:templates
gulp clean:css
gulp clean:js
gulp clean:images


// Main Tasks
// All this are triggered within "gulp init" & "gulp build" task.
// Some of this are triggered within the "gulp" task.
gulp templates
gulp systemFiles
gulp modernizr
gulp compile:js
gulp sass
gulp copy:fonts
gulp images
gulp svg-single
gulp svg-sprite


// Minify Tasks
// This task are triggered within the "guld build" task.
gulp minify:js
gulp minify:sass
gulp minify:images

// FTP Tasks
// This only updates news files. FTP deets should be set in config.json in root
gulp upload:dist
```
