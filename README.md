# H?KE [![TeamCity CodeBetter](https://img.shields.io/teamcity/codebetter/bt428.svg?maxAge=2592000)]()

## A Weather Aware Guide to Portland, OR Hikes _4.14.2016_
#### Created by:  [Joe Karasek](https://github.com/joekarasek), [Sara Wagner](https://github.com/swagner23q), [Josh Overly](https://github.com/jos-h20), and [Ben Ronda](https://github.com/ben-ronda)
***
## Description

H?KE is a web application that provides basic information on hiking trails around the Portland area, including the current weather.

This project was put together as a three day capstone project to the Level 2 Javascript class at Epicodus, a vocational school for aspiring programmers. This app is built on the Ember.js framework and utilizes three APIs (trailsApi,Open Weather Maps API, and Google Maps API) to generate information for user.

### Technologies Used
* Javascript
* Node.js
* Ember.js
* Sass

***
## Installation and Setup

### Prerequisites

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)  

### Installation

* This application requires three [API keys](https://en.wikipedia.org/wiki/Application_programming_interface_key) to work. You will need to obtain these keys and place them in the file `/.env`.
  * To obtain a TrailAPI key visit https://market.mashape.com/trailapi/trailapi. You may have to signup but dont worry, it's free!
  * The third is a Google Maps API key and you can get that here: https://developers.google.com/maps/signup
  * Visit http://openweathermap.org/ and signup to get a weather API key (also free).
  * Your .env file will need to look like this...


    export trailApiKey="TRAIL API KEY HERE"
    export weatherApiKey="WEATHER API KEY HERE"
    export gmapApiKey="GOOGLE MAPS API KEY HERE"


* Install dependencies.
  * `npm install`
  * `bower install`
* Launch a local server through ember.
  * `source .env && ember s`
* View the app at [http://localhost:4200](http://localhost:4200).  

***
## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)  

***
## License
[![DUB](https://img.shields.io/dub/l/vibe-d.svg?maxAge=2592000)]()  
Copyright (c) Joe Karasek, Sara Wagner, Josh Overly, Ben Ronda

This software is licensed under the MIT license.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
