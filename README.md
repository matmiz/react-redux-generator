# react-redux strcuture generator
This is a boilerplate generator for react-redux projects.

## Who is this for:
* Developers who are new to react and redux and want to have a quick on boarding
* Front end developers who are curretnly interviewing in several places which require a home task
* Basically, anyone who wants to create a react-redux test project from scrach in a minute :) 

## What do we have in here?
Well, this is a simple react-redux project. After starting the app you will have the following file tree (if you chose that your prefix is Main):
```
.
├── index.html
├── package.json
├── src
│   ├── Actions
│   │   └── MainActions.js
│   ├── Components
│   │   └── MainContainer.js
│   ├── Reducers
│   │    └── MainReducer.js
│   ├── css
│   │   └── style.scss
|   ├── constants.js
│   ├── index.js
└── webpack.config.js

```

The generated structure is a simple react-redux implementation with webpack-dev-server ready to run.
It has a single scss file so you can use scss in your styling. 

## How to run it
It's super simple!
```
1. git clone https://github.com/matmiz/react-redux-generator.git 
```
```
2. npm run build
```
```
3. npm start
```
```
4. open localhost:8080
```
And it's on! At this point you should see on your screen 
```
My Ract+Redux app! Start coding! YEAH
```
If you see this line, it means that a react component with this text was created, adn successfully rendered. 

### What is planned for the future:

Well, first of all, this is currently an alpha version (Let there be bugs! YAY!)
So here is my future plan (not necessarily in this order)` :
* Add unit test creation 
* Add scripts to create files faster (createComponent, createReducer, createAction etc. )
* Add examples for working components/reducers/actions