# Fetch practice

This project serves as a base to practice using fetch in node.

The tools used include:

- node
- npm
- [forecast.io](https://forecast.io)
- [`isomorphic-fetch`](https://www.npmjs.com/package/isomorphic-fetch)
  (_powered by [`node-fetch`](https://www.npmjs.com/package/node-fetch)_)

## Setup

**API Key**

Sign up for a key from forecast.io by going to
[developer.forecast.io](https://developer.forecast.io/) and selecting "Register"
in the top menu.

Your key is listed at the bottom of the page when logged in.

**Environment**

For fetch to talk to forecast.io, it needs to use the secret API key. To ensure
the secret key isn't accidentally shown to the world, we use _environment
variables_ that are _never_ commited to git or GitHub. These environment
variables are stored in a file called `.env`.

This project comes with sample environment variables in a file `.env.sample`. To
get started, copy it to `.env`:

```bash
$ cp .env.sample .env
```

Edit the new `.env` file to add your forecast.io key. For example, if your key
was `abc123`, you'd edit the file to be:

```
FORECAST_KEY=abc123
```

_Remember: The `.env` file should never be added to git, otherwise you will be
giving away your secret key!_

**Packages**

You'll next need to install the packages this project requires to run:

```bash
$ npm install
```

This sets up the required npm modules for us to be able to use `fetch()` in our
project.

## Getting Started

You can get started by calling `fetch()` like so:

```javascript
fetch('https://some-url/foo/bar')
```

When calling the forecast.io API, you'll need access to your API key, you can
get that access via the variable;

```javascript
process.env.FORECAST_KEY
```

### Running Your Code

We can test our `fetch()` calls locally to make sure it's working. To do so, we
use `npm` to start up our program:

```bash
$ npm start
```

_Note: This runs the command listed in the `package.json` file under
`scripts.start`, which is itself starting up `node` with a couple of extra
options_

Your code should then show its results on the command line, then exit
immediately after completing.

## Tasks

1. Use the Google Maps Geocode API to get the latitude and longitude of a
   location you pass to it. The API's URL is;

   http://maps.googleapis.com/maps/api/geocode/json?address=SEARCH

   _Note: Replace `SEARCH` with the location you want to search for_

   Your program's output should look something like:

   > The location of Surry Hills is:
   > -33.886111 latitude
   > 151.211111 longitude

2. Use the forecast.io API to get the current weather in Sydney. To get the
   weather, you'll need to provide a latitude and longitude. Sydney's values
   are:

   latitude:  -33.8688197
   longitude: 151.2092955

   The forecast.io API URL is;

   https://api.forecast.io/forecast/APIKEY/LATITUDE,LONGITUDE

   _Note: Replace `APIKEY` with your forecast.io key (accessible via
   `process.env.FORECAST_KEY`), and `LATITUDE` / `LONGITUDE` with the correct
   values_

   For more info, check out the [forecast.io
   docs](https://developer.forecast.io/docs/v2)

   Your program's output should look something like:

   > At -33.8688197, 151.2092955
   > The weather is Mostly Cloudy
   > The current temperature is 12

3. Combine task's 1 & 2 to first get a latitude/longitude of a search, then use
   that location to get the weather.

**Bonus**

4. Convert temperatures to celcius by telling forecast's API to return the
   expected values. Check out the `units` option in [the
   documentation](https://developer.forecast.io/docs/v2#options)

5. Accept a search term by running `npm start "Surry Hills"` on the command
   line. To access the search term, use `process.argv[2]`, then show the weather
   for that location. If no search term is entered, show an error on the
   console.

### Tips

**Not seeing any output?**

Make sure you add a `.catch()` after your `.then()` callbacks so you can catch
any errors that might occur. Be sure to use `console.log()` to output those
errors.
