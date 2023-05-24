## React Complete Guide
*React is a javascript library for building user interfaces*

- Javascript vanilla can be legnthy and react can help simplify.
- React is all about the components. Making reusible parts
- Define visually what you want at the end **desired State**
- Makes rich interfaces easier. Declarative component focused approach
- SPA Single Page Application
- Beware that alot of *next gen* es6 features will need to be setup to run in browser
- 
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
- typically 2 react packages: react & react Dom (dom /)
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


### The basics: State & Events
  - React to events from the user, clicks content capture
  - We can listen to all DOM events [Button Dom](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button) 

  #### Listening & Handlers
   - Listner: Simply add a prop `onClick={clickHandler}` and link to a function *could also be an inline (anonymous) arrow function*
   - Were just pointing to the function no need for `()` otherwise js will do at runtime
   - A convention is using "Handler" in the name

  #### Listening & Handlers
   - To be able to change variables/props we need to use **state**
   - If we have a variable in a function that changes react does not care: code executes but the overal function does not change. Function is not retriggerd after first render
   - Remember we just dealing with functions that output JSX. And we need to call it. 
    1. React calls any functions that returns JSX 
    2. Returns any functions within that JSX
       After rendering react will not re-render/re-evalutated (unless we use state)

  #### State
   - To get started with state we need to use a *named import* import this from react lib `{useState}`
   - Allows us to define which elements of a component can be updated
   - Simply this *hook* inside your function **useState()** no nesting. You just call directly top level main function
   - State needs a default `useState(props.title);` 
   - No assignment using `=` simply function call
   - Pass a the prop and a new method via *destructuring [title,setTitle]*
   - Use *Const* 
      `let [title,setTitle] = useState(props.title);
      const clickHandler = () => {
          setTitle('Updated'); //state updating function
       }`

   - Each time a component is registerd / instantiated it will create a new copy of use state, managed independantly. Even if the component exists more than once. 
   - React keeps track of used state. (Will protect that var if unaffected)
   - These states ofcourse can be updated in a variety of ways. Over HTTP for example

  #### Forms
   -  It will usually make sense to separate form and logic to keep things lean
   -  You can use standard html atts on forms as expected

  #### Event Listening
  - See available events some will work better than others
  - We dont need a long addEventListner passing the element we just need to specify event as a param `titleChangeHandler = (event)`
  - event will be an object from which you can extract *event.target.value*

  #### Multiple States
  - Using this event.target.state we ensure that this data survives and is not affected by the lifecycle of the component
  - Event values are always stored as string

  #### Single States
  -  This is a preference You could make your code leaner by utilizing one state by passing an object `useState({t})`
  -  Make sure you dont overwrite your state when you init your state function. So you will need to use spread operator `...userInput,`

  #### Updating state depending on prev
   - When updating state and depend on previous you should **pass in a function into state updater function. Like anonymous arrow**.
   - `setUserInput((prevState) => {return ...prevState,enteredTitle:event.target.value};)`
   - React schedules updates. So you could be dependant on an old snapshhot. 
   - Using *prevState* ensures everything is up to date 

  #### Form handling
   -  You can utilize onSubmit, pass the event and assign state vars to object keys
   -  Dont forget to utilize *preventDefault*
   -  At somepoint you will need to clear the form data (use state)

  #### Two way binding
    - You can reset / clear content by setting to empty string on the submitHandler `dateChangeHandler('');` & feeding back a` value={}` att to form

  #### Child to parent 
    - As were working with a new expense really we should be modifying our data at the same level as the rest of our expense initialization in app.js
    - We can pass a function to child component and call that function inside the child
    - *Props can only be passd from parent->child*
    - For example: one level up we can pass a function `onSaveDataExpense`
    - Reminder: your props come in from attributes. `<ExpenseItem someProp={}>`
    - In the example we have passed the data and assignned it a unique id
    - Just remember were passing around a pointer to a function
    - First check you can pass state to the parent. 
  

  #### Lifiting up the state
    - You may want move the state between two components on the same level (two siblings for example) but at differnent branches in the component tree. 
    - The approach is utilizing props *function* to pass up app.js which the siblings share. 
    - `props.onAddExpense(expenseData)` At the moment we pass data in way of a function the state gets lifted
    - Infact as we have a 3 level structure it is ExpenseForm.js that passes the state up
    - You only need to lift the state as far as required. Dont have to go all the way to app.js root

    #### Assignment 2 (4.)
    - [x] Listen to change event on drop down (picked yea wants to go up to expenses)
    - [x] Forward data up 
    - [x] Save in state in expense
   

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
- [Alternatives to React](https://blog.bitsrc.io/the-future-of-react-why-create-react-app-is-deprecated-and-hooks-are-the-future-83e8a087a325)

---

### Todo's 
24-05-2023
- Basic react test app (taking it out of this current dashboard concept) 
- [] Revise passing up state 

18-05-2023
- [] Re install starter as finance dashboard
- [x] Enable strict mode
- [x] setup react app using next.js or any alternative to create-react-app
  - could create issues with app.jsx
- [x] Document and code Section 3 [Working with components](https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25595404#overview)
