# Front End Assisgment Documentation by Ngo Duc Dung

## What I used to implement the SPA Web App

**JS Framework**: Angular 7
**Dependencies**: Angular Marterial 7, Typescript 3 and [Ng2-Chart](https://github.com/valor-software/ng2-charts)
**Node version**: v10.15.0

## What I completed

1. Create an Angular 7 project from scratch.
2. Using the 3rd party [Ng2-Chart](https://github.com/valor-software/ng2-charts) to drawing the main line chart
3. Intergration with Backend APIs [1Forge.com Forex API](https://1forge.com/forex-data-api/api-documentation).
4. Implementing Lazy Loading in Angular.
5. Completed requirements:
    - Building a Web SPA with Angular 7.
    - Drawing a Line Chart that show Price, Ask, Bid and Timestamp of more than one symbols.
    - Selecting one or more symbols then reset the Chart with its new data.
    - Calling directly 4 REST APIs: */quotes, /symbols, /market_status and /quota*.

## What I haven't completed and reasons

1. Did not using [Forge JS Library](https://github.com/1Forge/javascript-forex-quotes)
2. Could not completed two requirements:
    - Updating chart data real time using Websocket.
    - Showing data in only 1 hour.

**The reasons**
- Updating chart data real time using Websocket: I could only register 1Forgex account with FREE PLAN. It does not supported Websocket streaming.
- Show data in only 1 hour: The returned data have same timestamp *1546757784 ~ Mon Jan 19 1970 04:39:17 GMT+0700*. Therefore, I coudn't have correct data to filter in current 1 hour.

## Requirement
1. Node: v10
2. Npm: v6.4.1
3. Angular CLI: v7

## Intallation
1. Open the project in command line.
3. Run `npm install -g @angular/cli`.
2. Run `npm install`.

## How to run the project
Run `ng serve --open` or `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.