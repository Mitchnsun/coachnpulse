# README #

This README documents steps are necessary to get your application up and running.

### What is this repository for? ###

* Luc Nahon Coach'n Pulse website
* [Learn Markdown](https://bitbucket.org/tutorials/markdowndemo)

### How do I get set up? ###

###### Set up ######
* [Node.js](https://nodejs.org/download/), latest version v6.1.0
> Upgrade Node.js
> * `sudo npm install n -g` - Node version manager
> * `sudo n stable` - For the latest stable version
* npm, the version should be higher than 3.8.6 (Node comes with npm installed). npm is upgrading with Node.js
* Grunt CLI `npm install -g grunt-cli`
> Note that installing grunt-cli does not install the Grunt task runner! The job of the Grunt CLI is simple: run the version of Grunt which has been installed next to a Gruntfile. This allows multiple versions of Grunt to be installed on the same machine simultaneously.
* Bower, package manager for the web, `sudo npm install -g bower`

* `sudo npm install`
* `bower install`
* `grunt`

###### Configuration ######

* To see which modules are outdated: `npm outdated`

* Database configuration
* How to run tests
> `grunt analysis` launches js and less lint


* Deployment instructions
> `grunt` prepare a package for deployment. Any modification on less and js files trigger a grunt build.

### Contribution guidelines ###

* Writing tests
* Code review: `grunt analysis` - No Lint errors allowed
* Other guidelines

### Who do I talk to? ###

For any information, contact matthieu.comperat@gmail.com

### Version ###
* v1.2 - July 2016 - Contents
* v1.1 - May 2016 (new design) - Home showcase
* v1.0 - May 2016