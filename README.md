#WTU

A portfolio site made with Wordpress REST API and AngularJS.

No WordPress files are stored in this repo, this is only the frontend component.

## Directory architecture

* / -- root directory contains README.md, package.json and main dev folder ('src/')
* src -- main dev folder contains all JS, CSS and HTML files inculding 
* components -- all of the main components for this app. Each sub-folder is a self-contained component with all the necessary JS, SCSS and HTML

## Installation

* `cd` into root folder
* Run `npm install`

## Local Development

* `cd src/`
* Run `gulp` -- uses BrowserSync for live reload
* Do not edit all.js or all.css directly -- these are compiled files