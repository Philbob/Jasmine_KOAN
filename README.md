# Jasmine_Koan

The best way of learning is by doing right? This is an attempt at producing a lightweight set of KOANS to aid with the learning of [Jasmine](https://github.com/jasmine/jasmine), the scope of this KOAN 
is not to teach Javascript, there are already some great examples of KOANS for this [Here](https://github.com/liammclennan/JavaScript-Koans) and [Here](https://github.com/mrdavidlaing/javascript-koans), as such it is assumed that the reader is familiar with basic Javascript already.

For the timebeing this KOAN is aimed at [Jasmine 1.3](http://jasmine.github.io/1.3/introduction.html) purely because my primary target audience is using this version, I fully intended to extend this overtime to include later versions of Jasmine.

## Getting Started

Make sure you have the latest packages installed

```
npm install
bower install
```

Note: If you don't have `npm` installed, make sure you have
[node](http://nodejs.com) installed. If you don't have bower,
`npm install -g bower`.

The above steps will download all the required software to
build and run this koan, such as [Karma](http://karma-runner.github.io/),
 [Istanbul](https://github.com/gotwarlost/istanbul).


## Project Structure

The project consists of two main directories 'app' and 'test', although it may seem conunter intuitive, you will need to write your KOAN code in the app directory.  The test directory contains all of the tests that will guide you through the KOAN.


## Running the Tests

You can run your tests from the root directory by calling Karma start, and you can change the test runmode by modifying the browers property in the karma.conf file using any of the valid values assuming that browser is available on your system, for a guide on the Karma.config file please checkout [KARMA Configuration File guide](http://karma-runner.github.io/0.12/config/configuration-file.html)