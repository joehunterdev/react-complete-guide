## React Complete Guide
*React is a javascript library for building user interfaces*

- Javascript vanilla can be legnthy and react can help simplify.
- React is all about the components. Making reusible parts
- Define visually what you want at the end **desired State**
- Makes rich interfaces easier. Declarative component focused approach
- SPA Single Page Application
- Beware that alot of *next gen* es6 features will need to be setup to run in browser

### The basics: Component
  - Trait of a component is that its reusable (dry)
  - Separation of concerns dont do many things in one place 1 specific task
  - Split lots of code into many functional pieces
  - *Made up of three parts: Html, CSS, Javascript*
  - **Declarative aproach:  Always defining end/target state** React figure out the actual javascript dom instructions
  - Imperative: giving clear step by step instructions
  - **Build on custom html elements** 

- React Code will be transformed and optimized under hood
- index.js is first to run
- typically 2 react packages (dom /)
- we import react dom and create root tag jsx <App /> which reads from index.html
- if its inner js files you can ommit the .js on import
- Component is a custom html element 
- You ultimatly end up building *componenent trees*. Where only top level component is rendererd
- *PascalCase* for files
- A component in react is just a javascript funciton

  #### JSX Code

  - Need to use proper nesting in jsx 
  - **one root element per  return statement**
  
  #### CSS 
    - Add css directly into components folder
    - We now need to inject the css into component js
    - *We dont use class=() attr* need to use `className={}`

  #### Dynamic data & Expressions in JSX 
    - Remember componenets are re-useable
    - Can define some variables inside function then add to jsx `{expenseDate}`
  
   #### Props 
    - Props are simply properties or attributes
    - Prop as tag attributes look like this `title={}`
    - These are passed as fn params fn(props)
    - Props works with key => value pairs
    - 
   #### Additional JS Logic 
    - Props make compononents configurable and resuseable
    - better for dates to create separate const

   #### Splitting Components
    - Breaking things down is a feature of react
    - *NB if there is nothing to inbetween a tag you can simply have an autoclose tag* `<ExpenseDate />`
    - Data must exist in parent elements in order to be passed on
  
   #### Composition Child Props
    - **Composition is combining components, Your an artist!**
    - We can also create wrappers/containers essentially. Rather than just specific tags/components. Where we can pass content between the opening and closing tags 
    - Eg: Background container, Body Container, Card
    - One thing that gets passed regardless whether you declare or not is `{props.children}`
      - `<div className="card">{props.children}</div>`
    - Dynamic class: ` const classes = 'card ' + props.className;` making dynamic wrapper. Often gets rid of duplication

   #### In Depth JSX
    - JSX doesnt get interpreted by the browser, whats renderd is barely readable
    - Previously it was always required to `import React`
    - JSX is just syntactic sugar `return (<div></div>)`. An alternative to this is pure js `return React.Element('div',{attributes},{content},{content},{content})`
    - The below example highlights the necesity for nesting components. As the the third param requires
      
      ```
        return React.createElement(
           'div',
            {},
            React.createElement('h2',{},"Lets Get Started"),
            React.createElement(Expenses,{items:expenses}) //Pass just component and props
          )
      ```
   #### Organizing Component Files
  - We could further break our structure and separate them by concerns. Expenses (Business / Feature) / UI (Template)

   #### Alternative Function Syntax

   ```
    const Expenses = (props) => {
   ```
   - *Just to beaware you may come accross this in wild*


  

---

### Array functions 

[map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
[find()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
[findIndex()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
[filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
[reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=b)
[concat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=b)
[slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
[splice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

----

### TypeScript

 Allows us to define types, avoiding potential issues like contactenating to strings together "1"+"2" instead of computing them as integers.Usefull for large teams and large volumes of code. This stricter typing will allow bugs to be detected (in ide) before run time. 

```
function add(a:number,b:number)
```

---

### Updates
- Create React App is dead, hooks are the future utilize: "Next" "Vite" or "Remix" 
- [Alternatives to Create React App](https://blog.bitsrc.io/the-future-of-react-why-create-react-app-is-deprecated-and-hooks-are-the-future-83e8a087a325)
 
 
