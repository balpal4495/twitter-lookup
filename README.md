# Twitter-Lookup

## Summary

This project has been captured within a mono repo consisting of a nodejs server and a webapp created with create-react-app with a typescript template

## ENV Versions

Both server and webapp have been built using node v14


## running instructions

### server

in your terminal withing the root of the server directory install dependencies with either 
`yarn` or `npm install`

then run 
`yarn start` the server will start running a proxy api listening on http://localhost:8000


### webapp

in the root of the webapp directory
install the dependencies using `yarn` or `npm install`

you can the use `yarn start` to have the webpapp running on http://localhost:3000

## warning please ensure you have the server running before running the webapp

## functionality

The user is presented with a search bar as the home view, where they are able to specify a twitter username name and then search for matching users .

it will then list out the matching users as cards. With the corresponding timeline of tweets, its currently limitied to 6 but can be controlled as a simple enhancement


# Design choices

Authentication was a rather interesting issue with this project, to save time I preferred to simply use the `twitter-lite` package. 

The reason for this is due to time constraints, its entirely possible to have the authentication set up done without the use of an external library.

but this requires a fair amount of time investment in getting things such as the required authorization headers in place to get consistent authorized results.

The twitter oauth1.0 flow is not the most straightforward thing to deal with and can become very time consuming to fully flesh out with few bugs


problematic stages can be

getting the oauth_none, oauth_signature, oauth_timestamp, whilst providing the callback and then handling the twitter callback request and ensuring the encrypted keys were suitable for twitter.

there was no mention of user signing in, and i wanted the the interaction with the twitter api to be app based rather than specific user based

### proxy server

I created a simple express server which made proxy requests to the api, and simplified the return data, this is because the twitter api gives alot of userful data, but this can become difficult to map out fully

it also is able to bypass any potential CORS errors that can occur

# app improvements and other thoughts

## improvements

The app can be immedietly improved by providing a `/search/:screenName` route as part of the search.

the user could see a list of results by defining them in the url itself. This would not be an issue as theres ui in place to handle loading states.

the design would likely need some more attention as i mainly attempted to have mobile viewports in mind, and used a horizontal layout to display multiple timelines

## other thoughts

The test coverage on this is not great, but the reason for this is because of the nature of this application, alot of it is based on data fetching and rendering behaviours, there's not alot of business logic functionality in the componenents themselves.

This app would actually benefit the most from end to end tests via something like testcafe, purely becuase its need to view data coming in from api sources.


### timing issues

due to time constraints, i was not able to implement a proper suite of unit tests and other functionality such as an auto complete hook.

The auto complete hook would essentially be done with a combination of 

`useCallback` |
`useEffect` |
`throttling` | 
`debouncing`


the user would be able to search, using the onChange event with useEffect,  the app would be able to make throttled requests every 500 milliseconds to the proxy-server user search request.

thus setting the results into state and defining them as a dependency,

you can then have a child component to the search bar, which renders when there is valid data being passed back which could be displayed with a few rules in place.

1. more than three characters entered
2. within the 500 millisecond throttle
3. use cached / localstorage data first









