# H?KE [![TeamCity CodeBetter](https://img.shields.io/teamcity/codebetter/bt428.svg?maxAge=2592000)]()
Created by:  
[Joe Karasek](https://github.com/joekarasek)  
[Sara Wagner](https://github.com/swagner23q)  
[Josh Overly](https://github.com/jos-h20)  
[Ben Ronda](https://github.com/ben-ronda)
***
H?KE is a web application that provides all the basic information you need for hiking trails around the Portland area. It utilizes trailAPI and Open Weather Map API to get data such as latitude/longitude, hike description, hike length, temperature and what the current weather condition is such as rainy, clear, cloudy, etc.
***
## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)  

***
## Installation
1. In your terminal, change directories to your desktop using `cd desktop`
2. Run the following command: `git clone <repository-url>`
3. Use `cd epicodus-hike-guide` to change into the project directory
4. `npm install`
5. `bower install`
6. While in the terminal use the command `touch .env` This will create a file for storing api keys you will obtain.
7. To obtain a TrailAPI key visit https://market.mashape.com/trailapi/trailapi. You may have to signup but dont worry, it's free!
8. Visit http://openweathermap.org/ and signup to get a weather API key (also free).
9. Once you have both keys return the the .env file created in step 6 and insert the following  
`export trailApiKey="TRAIL API KEY HERE"`  
`export weatherApiKey="WEATHER API KEY HERE"`
10. You are now ready to start the Server!

***
## Starting the Server
* `source .env && ember s`
* Visit your app at [http://localhost:4200](http://localhost:4200).  
***

## Additional Commands

* `ember test`
* `ember test --server`
* `ember build` (development)
* `ember build --environment production` (production)
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
