## React Complete
*React is a javascript library for building user interfaces*
    - Javascript vanilla can be legnthy and react can help simplify.
    - React is all about the components. Making reusible parts
    - Define visually what you want at the end
    - Makes rich interfaces easier. Declarative component focused approach
    - SPA Single Page Application
    - Beware that alot of *next gen* es6 features will need to be setup to run in browser

### Everything is a component
    - Trait is reusable (dry)
    - Separation of concerns dont do many things in one place 1 specific task
    - Split lots of code into many functional pieces
    - *Made up of three parts: Html, CSS, Javascript*
    - **Declarative aproach:  Always defining end/target state** React figure out the actual javascript dom instructions
    - Imperative: giving clear step by step instructions
    - **Build on custom html elements** 

React Code will be transformed and optimized under hood
index.js is first to run
typically 2 react packages (dom /)
we import react dom and create root tag jsx <App /> which reads from index.html
if its inner js files you can ommit the .js on import
Component is a custom html element


You ultimatly end up building componenent trees. Where only top level component is rendererd

**one root element per  return statement**

## Array functions

map()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
find()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
findIndex()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
filter()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
reduce()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=b
concat()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=b
slice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
splice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

## TypeScript
    Allows us to define types, avoiding potential issues like contactenating to strings together "1"+"2" instead of computing them as integers. This stricter typing will allow bugs to be detected (in ide) before run time. 
        ```
        function add(a:number,b:number)
        ```


## Updates
    - Create React App is dead, hooks are the future utilize: "Next" "Vite" or "Remix" (create react app)[https://blog.bitsrc.io/the-future-of-react-why-create-react-app-is-deprecated-and-hooks-are-the-future-83e8a087a325]


