## React Complete Guide

_A javascript library for building user interfaces_

- Javascript vanilla can be legnthy and react can help simplify.
- React is all about the components. Making reusible parts
- Define visually what you want at the end **desired State**
- Makes rich interfaces easier. Declarative component focused approach
- SPA Single Page Application
- Beware that alot of _next gen_ es6 features will need to be setup to run in browser

### The basics: Component

- Trait of a component is that its reusable (dry)
- Separation of concerns dont do many things in one place 1 specific task
- Split lots of code into many functional pieces
- _Made up of three parts: Html, CSS, Javascript_
- **Declarative aproach: Always defining end/target state** React figure out the actual javascript dom instructions
- Imperative: giving clear step by step instructions
- **Build on custom html elements**
- Remember Javascript is dynamically typed
- React Code will be transformed and optimized under hood
- index.js is first to run
- typically 2 react packages: react & react Dom (dom /)
- we import react dom and create root tag jsx <App /> which reads from index.html
- if its inner js files you can ommit the .js on import
- Component is a custom html element
- You ultimatly end up building _componenent trees_. Where only top level component is rendererd
- _PascalCase_ for files
- A component in react is just a javascript funciton

  #### JSX Code

  - Need to use proper nesting in jsx
  - **one root element per return statement**

  #### CSS

  - Add css directly into components folder
  - We now need to inject the css into component js
  - _We dont use class=() attr_ need to use `className={}`

  #### Dynamic data & Expressions in JSX

  - Remember componenets are re-useable
  - Can define some variables inside function then add to jsx `{expenseDate}`

  #### Props

  - Props are simply properties or attributes
  - Prop as tag attributes look like this `title={}`
  - These are passed as fn params fn(props)
  - Props works with key => value pairs

  #### Additional JS Logic

  - Props make compononents configurable and resuseable
  - better for dates to create separate const

  #### Splitting Components

  - Breaking things down is a feature of react
  - _NB if there is nothing to inbetween a tag you can simply have an autoclose tag_ `<ExpenseDate />`
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

  - _Just to beaware you may come accross this in wild_

---

### The basics: State & Events

- React to events from the user, clicks content capture
- We can listen to all DOM events [Button Dom](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button)

#### Listening & Handlers

- Listner: Simply add a prop `onClick={clickHandler}` and link to a function _could also be an inline (anonymous) arrow function_
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

- To get started with state we need to use a _named import_ import this from react lib `{useState}`
- Allows us to define which elements of a component can be updated
- Simply this _hook_ inside your function **useState()** no nesting. You just call directly top level main function
- State needs a default `useState(props.title);`
- No assignment using `=` simply function call
- Pass a the prop and a new method via _destructuring [title,setTitle]_
- Use _Const_
  `let [title,setTitle] = useState(props.title);
const clickHandler = () => {
    setTitle('Updated'); //state updating function
 }`

- Each time a component is registerd / instantiated it will create a new copy of use state, managed independantly. Even if the component exists more than once.
- React keeps track of used state. (Will protect that var if unaffected)
- These states ofcourse can be updated in a variety of ways. Over HTTP for example

#### Forms

- It will usually make sense to separate form and logic to keep things lean
- You can use standard html atts on forms as expected

#### Event Listening

- See available events some will work better than others
- We dont need a long addEventListner passing the element we just need to specify event as a param `titleChangeHandler = (event)`
- event will be an object from which you can extract _event.target.value_

#### Multiple States

- Using this event.target.state we ensure that this data survives and is not affected by the lifecycle of the component
- Event values are always stored as string

#### Single States

- This is a preference You could make your code leaner by utilizing one state by passing an object `useState({t})`
- Make sure you dont overwrite your state when you init your state function. So you will need to use spread operator `...userInput,`

#### Updating state depending on prev

- When updating state and depend on previous you should **pass in a function into state updater function. Like anonymous arrow**.
- `setUserInput((prevState) => {return ...prevState,enteredTitle:event.target.value};)`
- React schedules updates. So you could be dependant on an old snapshhot.
- Using _prevState_ ensures everything is up to date

#### Form handling

- You can utilize onSubmit, pass the event and assign state vars to object keys
- Dont forget to utilize _preventDefault_
- At somepoint you will need to clear the form data (use state)

#### Two way binding

- You can reset / clear content by setting to empty string on the submitHandler `dateChangeHandler('');` & feeding back a` value={}` att to form

#### Child to parent

- As were working with a new expense really we should be modifying our data at the same level as the rest of our expense initialization in app.js
- We can pass a function to child component and call that function inside the child
- _Props can only be passd from parent->child_
- For example: one level up we can pass a function `onSaveDataExpense`
- Reminder: your props come in from attributes. `<ExpenseItem someProp={}>`
- In the example we have passed the data and assignned it a unique id
- Just remember were passing around a pointer to a function
- First check you can pass state to the parent.

#### Lifiting up the state

- You may want move the state between two components on the same level (two siblings for example) but at differnent branches in the component tree.
- The approach is utilizing props _function_ to pass up app.js which the siblings share.
- `props.onAddExpense(expenseData)` At the moment we pass data in way of a function the state gets lifted
- Infact as we have a 3 level structure it is ExpenseForm.js that passes the state up
- You only need to lift the state as far as required. Dont have to go all the way to app.js root

#### Assignment 2 (4.)

- [x] Listen to change event on drop down (picked yea wants to go up to expenses)
- [x] Forward data up
- [x] Save in state in expense
- [ ] Pass back state prop to provide two way binding

#### Controlled/UnControlled Components & Stateless vs Statefull Components

- 2 way binding means controlling a component
- _A controlled_ Both value and chanhgse to value are handled within the _Parent Component_
- A statefull component is one that **manages a state**
- Expense item does not have a state so its known as simply a **Stateless component** or **Presentational Componnet**
- Most pieces will only focus on outputting somthing

---

### Lists ann Conditionals

#### Rendering Lists

- Array **map()** is typical tool for this creates a new array based on old ones and transforms
  ````
           {props.expenses.map(expense => <ExpenseItem
           title={expense.title}
           id={expense.id}
           amount={expense.amount}
           date={expense.date}></ExpenseItem>)}
   ```
  ````
- Takes argument passed as expression, executes for every element of array

- Utilize **{dynamic expression}** in JSX

#### Statefull Lists

- Remember to update our componenet array will need to **useState**
- Lets create a new state `useState(INIT_STATE)`
- Add new expense item first and import _spread_ to enrich array `setExpenses([expense,...setExpenses])`
  - Spread works on both _objects_ & _arrays_
- Alternatively we can pass function. this makes it alot cleaner `setExpenses((prevExpenses) => {return [expense,...prevExpenses]})` and returns directly

#### Keys

- They are required to identify
- You can inspect in the browser, if new div flashes it has been added.
  - if theres no key it will actually overwrite existing element in render
- We need to add a special `key={expense.id}` prop (in most cases we will have a unique identifier anyway)

#### Assignment 3 (Filter Expenses)

- Get the date filter to work
  - [x] Check Does select retain option
  - [x] Check date reaches Expenses.js
  - _Lets presume were are going to filter directly in expenses. (See what instructor propsoses)_
  - [ ] Create new copy of array, filter where year === `
  - use filter
  - should not change the overall expenses array
  - derive new array or subset
  - generate new key e{x} maby ? current float is strange

### Conditionals

- special javascript evaluation `{if something true do this otherwise} && {outputsomthing}` or `{filteredExpenses === 0 && <p>No Expenses</p> }`
- Use ternery in jsx
- Alternatively you could simply filter the expenses before hand. Including a point to `{someContent}`

#### Conditional Returns

- If the jsx in your component doesnt need to change you can simply return false

#### Assignement 4

- [x] Hide form
- [x] Add new expense button shows form
- [x] Cancel Button hides form again
- [x] Seprate form jsx and "add new" button in NewExpense
- [x] Return "add new button on form" when state is false
  - _Instructor has handled dis logic one level up in new expense_

#### Dynamic Styles

- `style{{}}` this wants to receive a JS object as style with keyname => value
- use camel case where css attribute has

---

### Styling React Components

- Conditional styles not global
- Styled components
- Css Modules

#### Setting dynamic inline styles

- Tackling global styles
- A dynmic style may look like this: `{{color:!isValid ? 'red':'black'}}`
- Beware of inline styles as they have heighest priority

#### Setting CSS Classes Dynamically

- `${Bat ticks} ` are your friend template literals
- [Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
-

#### Styled components are scoped styles using css

- One aproach is to use _styled compononets_ [styled components](https://styled-components.com/)

  - `$ npm install --save styled-components`
  - Using a library like this you will come across a _tagged template literal_ ` styled.button``; ` the baticks are simply a way of calling a special method
  - You can add css styling in these ticks
  - This library has all elements (html) for styling
  - can use a multiline string which is neat
  - They will create unique classnames and are global stlyles
  - Remember _remove the selectors_
  - Whats also nice is you can assign these styles to a whole component `<FormControl className={}>`
  - In addition you can pass props to change styles dynamically

    - `<FormControl invalid={true/false}>`
    - `border: 1px ${props => (props.invalid ? 'red' : #ccc)}`

    #### Media Queries

    - `@media (min-width:x){width:auto}` can be added to your styles to detect and handle screen dynamics

    #### CSS Modules

    - [css modules](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/)
    - 1. Css modules require you to do your import `import styles from `
    - 2. Include `.module` to the file name
    - 3. In your attribute you need to add an object instead of string `className={styles.button}`
    - it will output a special class name _component name_classname\_\_\_unique id_
    - _This is neat as they are globally accessible but still within in the component scope_

#### Dynamic Styles

- To create a dynamic property we need to use [] like this as _you may get invalid property name_
- `className={styles{styles['form-control']}}` this behaves like an _array key_
- To continue to append classnames you can use battick method as above
- `@media (min-width:x){button{width:auto}}` in your `Button.module.css`

---

### Debugging

#### Break Points

- You can open up the console and _inspect the js file_ to add a **breakpoint** on the line to look at the problem step by step
- You can also levarage _Step into_ to continue on the flow
- _Step over_ to complete the current function call

#### React Dev Tools

- Componenets tool will provide a tree
- Clicking on the component it will provide props view
- Keys, children, parent, the line number, hooks
- In addition you can test and change values the current state

### Practice Project

- AddUser Component
  - does not require global styles
  - [x] create form inputs x2
  - [x] clear inputs
- App Component
  - [x] append to array
  - [x] UI Card Component
  - [x] UI Button Component
- [0] Managing User Input State
  - [x] validate form input
  - [x] dynamic styles for validation
  - [x] prevent default
  - [x] capture username, age inputs
  - [x] pass input state up
  - [x] pass valid state up to app.js
  - [ ] isValid default to true
- [x] Users List Component
  - Unique keys
- [x] Users Li item Component
- [] Managing a list of users via state
- [] Error Modal
  - [] Dismiss
  - [z] Level App.js typicaly will see modals at this level
- [x] Managing error state
- [x] Use CSS Modules
- [] Review Code vids
- [] Pass back specific error message to modal
- [] Neaten Css

- Questions:
  - Where to store array of users level Users
    - list of users is child li
  - Need to add to app.js ?
  - Generic Container stateless
  - Card Container

---

### Fragments, Portals & Refs

- These are all additinal tools in the toolbelt

#### JSX Limitations

    - You cant return / store more than one *root* element in jsx
    - You cant return more than one thing in javascript either needs parent node
    - Instead of JSX you can actually return an array (with a catch) *this requires a key*
      - Essentially is way easier just to wrap in a `div` just beware of divistis this is actually a common issue in react. Many divs with no *semantic value*

#### Creating custom wrapper

- To get around this issue we can create a wrapper that returns nothing but `props.children`
- This fullfils the requirement that one root element must be returned
- Wrapper and the jsx only has to return one thing, If you inspect you will notice we have eliminated one extra div

````
//Helpers/wrapper.js
  const Wrapper = props => {
   return props.children
  } ```

````

      //App.js

        return(){
          <Wrapper>
            <do something>
          </Wrapper>
        }
    ```

#### Creating react fragments

- `<React.Fragment></React.Fragment>` or `<></>` **Its an empty wrapper**. However it doesnt render any real html element. Gets around including another div

- You can short hand this by including `React {Fragment}`

#### Portals

- Portals are like fragments but help render semantically. (You wouldnt want to render a modal inside an internal div)
- You can wrap fragments in portals.

- Rendered Content html essential move somewhere else
- You can use this wherever you render jsx
- 1. Start by defining an element with a root say `<div id="overlay></div>"`
- 2. Define a const `overlady-handler` and return your jsx for the modal itself
- 3. `Import react ReactDOM` to be able to portal this to somewhere else
- 4. `{ReactDOM.createPortal(<SomeComponent props="{}>,docuement.getElementId("overlay"))}` your implementation will look like this
  - this is similar to create root in index.js

#### Refs Hook

- Imagine updating a state everytime on keystroke when only required on submit. We can use refs to setup a relationship between the html element and javascript itself
- `const nameInputRef useRef()` assign this to a const
- `<input ref="{nameInputRef}> ` asssign attribute
- Insterestingly if you now log _nameInputRef_ you will see it has a current prop (by default undefined)
- You can now access this by using `inputRef.current.value`
  - You can get around reseting the state using this method. Using state in general and two extra atts !
  - In the case of inputs you can just reset `inputRef.current.value = ''` (rarely to be used)
- State or refs are interchangeable.
- If just want to **readonly = refs**

##### Controlled vs Uncontrolled

- When accesing via refs this is called uncontrolled as were **not controlling the state**
- Uncontrolled input containers

---

### Handling Side Effects, Reducers and Context hook

#### Sideffects useEffect hook

- **useEffect** is a tool that lets us interact with the outside world but not affect the rendering or performance of the component
- **useCallback** Useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders

- The main job of react is to _Render UI_ & _React to User Input_ To handle side effects.
- Good for code to be executed in response to something
- Side effects are everything that happens outside of normal compnenet function.
  - Storage data browser
  - HTTP Requests
  - Managage timers
- Many side effects should not be included in your component we do this via `useEffect()` hook
- `useEffect((do after every component eval),[dependancies])`
  - your side affect goes into function 1 param / then specify your dependancies in function 2nd param
- A good use of this would be _authenticated user status_ for a login system storing auth data after refresh

  - we could use efect to handle this so client doesnt need to login again
  - `localStorage.setItem('isLoggedIn','1')`
  - `useEffect((do after every component eval),[dependancies])` will run after component eval
  - Now in storage in browser you will find this new element
  - We can now check against this variable, but we would want to control when this run

    ```
    useEffect(() => {
        const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

        if (storedUserLoggedInInformation === '1') {
          setIsLoggedIn(true);
        }
      }, [setFormIsValid,enteredEmail,entererdPassword])
    ```

  - _Will only run on component reload_ if you have no dependancies it will only run once
  - Dependancies []
  - You can pass dependacies to use effect() ` [setFormIsValid,enteredEmail,entererdPassword]`
  - It helps us ensure we have one code in one place which re-runs when dependancies change
  - Its also common to re-run logic when props / state change
  - **useEffect** accepts a function that is **imperative** in nature and a list of dependencies. When its dependencies change it executes the passed function. Good for timers, logging after everything has rendered
  - **Sideeffects**: If the component makes calculations that don't target the output value, then these calculations are named side-effects.

#### What not to add as dependancy

- add everything as use effect as dependancy except:
- Dont need to add state updating functions

  - Dont need to add "built-in" apis or functions
  - DON'T need to add variables or functions you might've defined OUTSIDE of your components
  - add all "things" you use in your effect function if those "things" could change because your component (or some parent component) re-rendered.

    ````import { useEffect, useState } from 'react';

          let myTimer;

          const MyComponent = (props) => {
            const [timerIsActive, setTimerIsActive] = useState(false);

            const { timerDuration } = props; // using destructuring to pull out specific props values

            useEffect(() => {
              if (!timerIsActive) {
                setTimerIsActive(true);
                myTimer = setTimeout(() => {
                  setTimerIsActive(false);
                }, timerDuration);
              }
            }, [timerIsActive, timerDuration]);
          };```
    ````

- `timerIsActive` is added as a dependency because it's component state that may change when the component changes (e.g. because the state was updated)

- `timerDuration` is added as a dependency because it's a prop value of that component - so it may change if a parent component changes that value (causing this MyComponent component to re-render as well)

- `setTimerIsActive` is NOT added as a dependency because it's that exception: State updating functions could be added but don't have to be added since React guarantees that the functions themselves never change

- `myTimer` is NOT added as a dependency because it's not a component-internal variable (i.e. not some state or a prop value) - it's defined outside of the component and changing it (no matter where) wouldn't cause the component to be re-evaluated

- `setTimeout` is NOT added as a dependency because it's a built-in API (built-into the browser) - it's independent from React and your components, it doesn't change

#### useEffect() Cleanup

- **Debouncing** is when we would like to restrict the calling of a time-consuming function frequently.

  - An example would be waiting till user has finished typing into form to perform a function.
  - We could use a timer to achieve this. `setTimeout()`
  - In `useEffect` you can `return` (must be function)
  - Return will not return until final. Imagine if this was a http you wouldnt want to send a request every milisecond

  _Here have assignend timeout to a variable and below placed return
  statement that is a function returning a clear method_

  ```useEffect(() => {
        const identifier = setTimeout(() => {
          console.log('Checking form validity!');
          setFormIsValid(
            enteredEmail.includes('@') && enteredPassword.trim().length > 6
          );
        }, ;

        return () => {
          console.log('CLEANUP');
          clearTimeout(identifier);
        };
      }, [enteredEmail, enteredPassword]);
  ```

### Summary

- useEffect() is the most important react hook

#### Reducers useReducer()

- Very similar to `useState()` but more options
- Good for managing complex states
- Returns array of two items like use effect
- `const [state,dispatchFunction] = useReducer(reducerFn, intialState, initialFm);`

  - snapshot state
  - function that can be used to dispatch action
  - reducer is a function triggerd automatically recieves latest state snapshot
  - initial state
  - a function to set the initial state
  - like a state object with multiple dimensions `action.val`
  - Handy for creating small pools of isolated data contexts
  - In conjunctoin Context API
  - This might make managing the state easier by separating logic (validation outside component) by grouping logic together
    - You can couple this with use effect to only run when the user has finished typing
  - Nested Properties:
    - use destructing to extract the valid state
    - pass specific properties instead of the entire object
    - Apply use affect only on the single targetted property of state
  - useReducer vs useState:
    - you will know when to use reducer (when state becomes cumbersome)
    - useState:
      - is the main managment tool
      - often unique good for independant states of data
      - if state updates are easy and only a few kinds
    - useReducer:
      - Great if you need _more power_
      - shold be considered if you have related pieces of state
      - can be helpful if you have more complex states
      - not good if you have a simple state
        ```
        import { useReducer } from 'react';
        function reducer(state, action) {
          // ...
        }
        function MyComponent() {
          const [state, dispatch] = useReducer(reducer, { age: 42 });
          // ...
        ```
  - Context api:

    - when you pass alot of data via alot of componenets using props
    - We may find state required in lots of places this can be an issue
    - Observe in MainHeader were passing props to nav however were just passing them on. (even if this intermediate component doesnt need it) Also we only need to pass what props are needed.
    - Login function may be required in a cart and a shop in different branches in component tree (we may not have direct conection)
    - Avoids prop chain
    - use camel case for context file creation
    - To use context _provide_ it (wrapped to it) and _consume_ it (listen)
      - add wrapped compnenets allowed to use it. Works now for all children
        - App.js `<AuthContext.Provider>`
        - Nav.js `<AuthContext.Consumer> {(ctx) => { return (<nav>)}` takes a child that is a function and as arg you will get context data
        - Note: `<AuthContext.Consumer> {(ctx) => ` is kind of ugly using this return statement. can be improved using useContext hook import `useContext` and assign it like so `const ctx = useContext(AuthContext)`
        - We can infact _pass a function_ as a context `,onLogout:logoutHandler}` we can no access this context value on the button `onClick={ctx.onLogout}`
        - props are setup to make components reuseable.
        - However if we want to do somthing very specific useContext (allows code more concise)
    - Its good to define a default for context for clarity and code completion ` onLogout: () => {},`
    - We can even provide a custom context provider. Putting our logout handler in here!
    - Note the structure we have now done all our login logic in an external context provider

      - this will allow for separation of concerns

    - Context Limitations:

      - Props for configuration
      - Context state management accross components
      - Context isnt made for high frequent changes (use redux)

    - Rules of Hooks:
      - Only call in react functions (components & custom hooks)
      - ONly call at the top level (not nested or block statements)
      - Always add everything your refer to inside of useEffect as a dependancy
      -
    - Forward Refs:
      - Imperative aproach calling somthing within a function
      - useImperativeHandle can be used as an alternative to state and props
      - Interestingly you can pass refs as an arguemnt of a component `(props,ref)`
        - this needs to be coupled with a wrapper called `React.forwardRef` as in this is capabale of being bound to a ref
        - however you will only be allowed to access whats exposed from `useImperativeHandler()`

- Note: instructor has used use effect to only run after state update

---

### Section 12 Food order app

- [../food-order-app/readme](Readme)

---

### Section 13 Food order app

#### How react really works

- Essentially react doesnt care about the web it will work with any node.
- React Dom has an interface to the web (Virtual Dom)
- **Context** (component wide data), **Props** (data from parent components), **State** (internal data)
  - whenever these change this will update the components. react then interacts with the ReactDom
    - React first defines default state, then target state- Then passes on only the differences to make this change possible to the real dom
- Re-Evaluationg is not the same as re-rendering. Imagin if there are no changes to the dom this is just a re-evaluation
  - Remember performance wise reaching out to the real dom is performance intensive process

#### Component updates

- we can use state to make changes to dom.
- everything will come down to a state being changed. Context and Props
- for every state change of each component. react dom is re-activated this is only
- the difference between two snapshots
- You can check for flashes in element chrome console
- update mechanisim is based on comparing differences
- To a child as were initializing the component it will be re-evaluated
- `<Demo clickHandler={false}/>` will still run in child component. This false value is a primitative that gets re-initialez
  - We can specify the reloading of a component based on certain behaviour using .memo
    - For functional components `export default React.memo(DemoOutput)`
  - `React.memo` essentially can put a filter to listen in for state changes in the case that `<Button onSomthing={nochange}>` in parent looks like this where no state relative to the child changes
    - _This is not always worth it_. As memo still needs to generate **new props** and **re-render**. Good for larger apps. To cutt off an entire branch of components
  - Rememver to do this evaluation it will be tricky when using ref types, Objects, Arrays etc. They are more difficult to evaluate to truthy in a comparison
    - [Refs and Primative](https://academind.com/tutorials/reference-vs-primitive-values/)
    - Passing (ref types) functions may be complicated.

#### useCallback

- hook to store a function across component execution

```let obj1 = {}
          undefined
          let obj2 = {}
          undefined
          obj1 === obj2
          false
          obj2 = obj1 // pointed to the obj1 place in memory
          {}
```

- **Memoization** is an optimization technique for accelerating computer programs by caching the results of heavy function

- Essentially this is the same as `useCallback`
- `toggleParagraphHandler = useCallback(( )` knowing this method will never change, we can now store it for re-use

```
  const toggleParagraphHandler = useCallback(( ) => {
    setShowParagraph ((prevShowParagraph) => !prevShowParagraph)
 },[dependaciesHere])

```

- Again by using `useCallback` we are passing the exact object (in memory) to `React.memo()` for comparison
- Depancies like functiions are **closures** when a function is defined js locks in all vars outside. js closes over and stores them at the time of closure.
- passing in the depndacy this will allow for rerunning of the enclosed function
- Its important to understand closure and primative / ref types in JavaScript
- Two functions are objects and ARE never equal in javascript
- [Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

#### State

- Use state is ran once and handed of to be observed.
- For reevaluations no new state is created. react will only do statemanagemnt when needed.
- Child components may be reinitialed if removed from the dom. Then state will be re-initialized
- React doesnt act immediately it schedules state changes. It might feel instant ;)
  - multiple updates can occur at teh same time.
  - Recommended: a good way to consider is using the function method `setShowParagraph((oreShowParagraph) => !prevshowParagraph)` This ensures that is looks for the latest state change. not component re-evaluation
  - Procedurally a below func will not be executed the state schedule will happen first
  - Updates in functions will work in batches. _State Batches_ functions grouped together in order then in order fed to the dom in one go

#### Optimiztion with useMemo

- imagine we have like a sort function but thats very intensive. This function can be _memoized_ with sort as return.
- Ofcourse we need to pass dependancies
- levarage _destructuring_ to pass just items as depndancy `const {items} = props;`
- now use memo will only run when "items" changes

  ```
    const {items} = props; // destructuring

    // memoiszed
    const sortedList = useMemo(() => {
      return props.items.sort((a, b) => a - b);
    },[items])

  ```

- dont forget you will neeed to avoid problems with ref type comparisons so wrap you props sent in `useMemo` also.
- this presumes in this scenario that the sort example function is a highly intensive process

---

### Class Based Components

- Classes are just anothe way to handle react components.
- This was the old react requirement (Pior 16.8)
- Instead of `return` we use `render()`
- Helps with error boundries
- Class based cant use react hooks
- use them for error boundries or if team is using classed based

#### Creating class

- 1. import `component`
- 2. `extend` component
- 3. You can now use `this.`

#### State in classes

- Methods you dont need to define type `const`
- Old react required classes for state
- _State is always_ an object in classes
- Must _init via constructor_
- Must be _called state_
- In your method you can overwrite old state: `this.setState({showUsers}) ;` Classes wont merge state for you
- You can actually define constants in `render()`
- Beware the `this` method can be tricky. You need to ensure that `this` referes to existing class using `bind()` method
- When adding constructur and extending classes you need to use `super()`
-

#### Side effects in classes

- You can use lifecycle methods like:
- `componentDidMount()` on mounted will call `useEffect(...,[])`
- `componentDidUpdate()` called when component is updated `useEffect(...,[somedepenadncy])`,
- `componentWillMount()`essentially the clean up function called when unmounted `useEffect(() => {return () => {}.[]})`
- Work with `componentDidUpdate()` recieving two state params `prevProps` and `prevState`

```
 // see how beautiful useEffect is in functional components heres classbased alternative

    componentDidUpdate(prevProps, prevState) {

        if (prevState.searchTerm !== this.state.searchTerm) {
            this.setState({ filteredUsers: DUMMY_USERS.filter((user) => user.name.includes(this.state.searchTerm)) })

        }

    }

```

#### More lifecycle methods in classes

- Imagine getting a bunch of users from a database. You wouldnt want to get them one by one. You can use `componentDidMount()` (load when component has mounted) and send http requests in here.
- Dont forget componentDidMount will only run once
- `useEffect` will always execute when component is intially mounted
- _This is a differnt mental model to follow_

#### Context and Classes

- 1. Context consumer can be used in classes and functional by `importing` and using `<Context>` You can only use one context
- 2.  `static contextType = UsersContext` you can only do this once

#### Error Boundries

- Error boundries usually handle things out of your control. Server failures etc
- `throw new Error('Server error)` this is a useful to provde feedback
- Try catch can be tricky using components. Like try catch in a jsx.
- For this we need use errorBoundries `componentDidCatch(err)` this can be created in a separate class. This could be wrapped around a component that needs to be _protected_. And pass props
- The dev server will provide full debug info but in production it will just show the error.
- In general these boundaries are to ensure that you can handle issues in an elegant way. Without crashing your entire application

---

### Http Requests & DB

#### How not to db

- _Browser Side apps (React) does not talk directly to db_
- **bad practice** as you would expose creds to users in browser
- Backend can be _nodejs app, PHP_ like api
- [Tutorials](https://academind.com/tutorials/) [http requests](https://codesandbox.io/s/http-requests-umvp4d)

#### Get Request

- _Axios_ is good for handling request
- _Fetch API_ built in javascript
  - It can be as simple as a `fetch(url)` url and return extra option in callback
    - Here your can target your response body. `response.success`
  - You need to handle `fetches` response
- http is aysnch it doesnt happen imediatly

- Json Data is the most usefull
- After making the call we can handle json and add api body call to the state

#### Aysnch / await

- Promise is returned by `fetch()`
- When dealing with promises you can create the `then()` chain or use `asynch` on your method and `await`. It does the same simply easier to read.

  ```
      fetch('https://swapi.py4e.com/api/films/').then(
        (response) => { return response.json() }).then((data) => {
          const transformedMovies = data.results.map(movieData => {
            return {
              id: movieData.episode_id,
              title: movieData.title,
              openingText: movieData.opening_crawl,
              releaseDate: movieData.release_date }
          })
          setMovies(transformedMovies)
        })
  ```

- With await

  ```


      const response = await fetch('https://swapi.py4e.com/api/films/');
      const data = await response.json();

          const transformedMovies = data.results.map(movieData => {
            return {
              id: movieData.episode_id,
              title: movieData.title,
              openingText: movieData.opening_crawl,
              releaseDate: movieData.release_date }
          })

          setMovies(transformedMovies)
  ```

#### Handlers & Data Sets

- Its likely you will want to use a spinner or some animation when loading
- 1. Simple as defining is loaded state
- 2. inside your fetch handler init this to true or false before and after.
- 3. Finally wiht condition in your return

- Loading isnt the only state we could.. "Finding more.." _You always want to inform the user of the state of the application_

#### HTTP Errors

- Technical or Internal issues can be both
- _Use try catch_ when working with asynch await
- _Fectch api_ will not generate an error
- See implementation [Error Handler](http-requests-and-db\src\App.js)
- You dont have to perform all these inline in the return ofcourse

#### useEffect() and Requests

- Note we have alot of _side effects_. These can and should go into `useEffect()`
- useEffect is great to handle stuff on loading cycle _will change on depenacies []_
- As we dont have any state dependant changes for useEffect we'll implement a `useCallback(async() `
- note how you can pass `async()` _followed by any dependancies_

```

  const fetchMoviesHandler = useCallback(async () => {
    //Loading
    setIsLoading(true);
    setError(null);

    try {
      // With await
      const response = await fetch('https://swapi.py4e.com/api/films/');
      //statusCode !== 200
      if (!response.ok) {
        throw new Error("Status code: " + response.statusCode)
      }

      const data = await response.json();
      const transformedMovies = data.results.map(movieData => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date
        }
      })
      setMovies(transformedMovies)
    } catch (error) {
      setError(error.message)
    }
    setIsLoading(false) // regardless we need to stop loading

  },[])

```

#### Post Request

- Sending post requests can be done by using _Firebase_
- Setup Firebase and create a new project and db in _test mode_
- By copying the link to db you can send posts
- With a final node of `movies.json` it will create a new collection for you.
- You can use fetch and pass additional parameters post and decode response
- Javascript _utility_ `JSON.stringify`

```
  async function addMovieHandler(movie) {
    const response = await
      fetch('https://react-http-89102-default-rtdb.europe-west1.firebasedatabase.app/movies.json',
        {
          method: 'POST',
          body: JSON.stringify,
          headers: { 'Content-Type': 'application/json' }
        }
      );
```

---

### Building Custom Hooks

#### What are "Custom Hooks"?

- just regular functions that _contain statefull logic_
- reuseable and in can be used with other hooks
- put your own logic together
- Remember: _you can only call state functions top level_

#### Creating a Custom React Hook Function

- Typically used to limit duplicated code
- _use""_ naming is a requirement
- same syntax as a normal function (its just a function)

#### Using Custom Hooks

- Remember you need to tie a state to your hook exported from your custom hook. Will get imported to caller. Think of it as the body.
- To make this state available you can return it from your hook
- With custom hooks you are “stepping outside React” to work with some external system

- Look how lean:

```
const ForwardCounter = () => {
 const counter = useCounter();
  return <Card>{counter}</Card>;
};
```

#### Configuring Custom Hooks

- **parameters** can make them configurable
- Setting a default param: `(forwards = true) `

#### Onwards To A More Realistic Example

- The example uses a bunch of functions we could refactor for simplicty. The logic is dependant on other react hooks
  and state. For this case we need a customHook
- export function as custom hook
- but maintain state to handle in your render component
- i would guess that the instructor expects a component to just handle the request ?
- conditional dis should be handled in component ?

#### Building a Custom Http Hook

- useCallback: passing a callback to its child component to prevent the rendering of the child component.

- useMemo: It recalculated the value only when one of its dependencies change

#### Using the Custom Http Hook

#### Adjusting the Custom Hook Logic

#### Using The Custom Hook In More Components

#### Binding

- When envoking a callback browsers dont know how to address paramaters
- Binding is the same as a call back function and passing a parameter at the same time
  `function greet(name) {
  alert('Hi ' + name);
}`
- consider this function the browser _doesnt know which param should be sent_
- for this we can pass in a callback function
  `someButton.addEventListener('click', function() {
  greet('Max'); // yields 'Hi Max'
});`
- or use bind

---

```
const ForwardCounter = () => {
 const counter = useCounter();
  return <Card>{counter}</Card>;
};
```

- Revise: the where and the whys of
  _useEffect_,
  _binding_ &
  _destructuring_

[Binding](../javascript/binding.js)

#### Dealing With Form Submission & Getting User Input Values

- `preventDefault()` will halt http request
- `useRef` is usefull to track inputs `ref={nameInputRef}`
  - Refs have a `.current.value` property
  - Updating a variable everytime your component runs is
  - `nameInputRef.current.value` is bad. Dont manipulate the DOM
- Using state will give you more granualar change combined with (keystroke for example)

#### Adding Basic Validation

- Validate both server and client side
- Typically you want to check inputs are not empty
  if not passed just `return` in your validation method will halt execution

#### Providing Validation Feedback

- You can init state for validation to `true` to avoid inmediate outputting error messages (this is cheating)
- You can levarage css classes to highlght form inputs etc

#### Handling the "was touched" State

- To get around this _false_ initalization we could creat an additonal state _touched_ so we can check if the user has touched the input.

#### React To Lost Focus

- `onBlur` The best scenario is to actually inform the user before submitting that there is an error AFTER they have had a chance at editing
- When input loses focus we can initialize a function `onBlur={setNameTouched}`
- You can run validation in these onBlurs in these handlers also
- After input is valid an prior to submit we would also want to remove any error message and provide instant feedback. _Keystroke validation_

#### Refactoring & Deriving States

- Up to now we have rich level of events to make for a great user experience: `changeHandler, isValid, blurHandler ` valid and touched states are the most important
- This is a good point to refactor: enteredValidName for example can be simplified to just a const and we can then remove the state code
  `const enteredValidName = enteredName.trim() !=== ''`
- we can also trim things further up by combining isValid and touched states
- Finally empty your states. `setEnteredName()` and `isTouched()` if necessary

#### Managing The Overall Form Validity

- One input isnt enough to validate the whole form.
- Form is valid can be considererd a way to allow for final submission.
  - Optionally you can disable submissions and buttons

#### Assignment Time to Practice: Forms

- Add second input to form
- copy div block and do for email get input, validate
- Validate form group only when all inputs are valid

#### Re-Using The Custom Hook

- [Simple Input](https://github.com/joehunterdev/react-complete-guide/blob/forms-user-input/forms-user-input/src/components/SimpleInput.js)
  - How could we improve this
- We could create a input component passing props and state around to nail the overall form validity is inevitabale.
- This is a case for a _Custom Hook_
- use-input: make inputs generric.
- we can pass our `changeHandler, blurHandler` as functions
- deconstruct in your component
- call `useInput(value => value.trim() != '')` passed value to be executed inside function
- return these `return {value:enteredValue,isValid:valueIsValid,valueChangeHandler` in custom hook to expose to to the calling component
- in the return object we can also group togehter our resets

#### A Challenge For You!

Todo:

- [x] set states (isChanged, blurHandler,isValid)
- [x] onBlur / touched logic
- [x] isForm valid
- [x] isTouched
- [x] form submit handler
- [x] if !email && !name form is ivalid.
- [x] handle error classes
- [x] feedback messages
- [x] Reset inputs
- [x] if email && name form is valid. Boolean pattern

#### Applying Our Hook & Knowledge To A New Form

#### Summary

#### Bonus: Using useReducer()

[With Reducer](https://github.com/academind/react-complete-guide-code/blob/16-working-with-forms/code/12-finished/src/hooks/use-input.js)
[Form Custom Hook Component](https://academind.com/tutorials/reactjs-a-custom-useform-hook/)

---

#### Practice Project

[readme.md](/food-order-app/readme.md)

---

### Redux

#### Module Introduction

- Redux is an alternative to context
- Is a flux-like state mangament

#### Another Look At State In React Apps

- Local State
  - State for single cmp
    - EG: _Listening to user input field_
      - Should be mangaged in cmp with `useState` / `useReducer`
- Cross Component state
  - State that affects multiple components
    - EG: _Open Close of a modal_
      - Prop Chains/Drilling
- App wide state
  - Affects the entire app (all / most of cmps)
    - EG: _User Auth_
      - Requires Prop Drilling

#### Redux vs React Context

- Redux gets around the problem posed by react of lots of nested context items. Or having one huge context provider
- _Good for large enterprise_
- Context is not optimized for _High Frequency changes_
- React themselves say that _context_ its not good for _High Frequency Changes_

#### How Redux Works

- Only have one store (central data)
- Dont directly need to manage this
- We get data out of the store by having components that have a _subscription_
- We have a generic reducer function that can manipulate this central store
- Components dispatch _Actions_ are like triggers. When this change happens subscribed components get the update

#### MUST READ: Redux createStore() is (not) deprecated

- When using that function in your code, you might get a deprecation warning by your IDE or when running the app.
- Recomended to use tool kit

#### Exploring The Core Redux Concepts

- Redux needs node
- Doesnt need react to run
- Redux has a reducer function that takes 2 params.
  - old state
  - dispatched action
- Should be a pure function **Same input to same output** no sideEffects
- Your reducer you then pass to your store (just a pointer) `const store = redux.createStore(counterReducer) `
- `store.getState` gets the latest snapshot
- Subscribe `store.subscribe(someMethod)`
- Good practice to pass a default to `state = ''`
- Dispatch `store.dispatch({type:'increment'})`
  - Dispatch is a method that dispatches an
    - action is an object that has a _type_

#### More Redux Basics

```
    const  redux = require('redux');

    const counterReducer = (state = {counter:0},action) => {


        if(action.type === 'increment'){
            return {counter:state.counter +1}
        }
        if(action.type === 'decrement'){
            return {counter:state.counter +1}
        }

    }


    const store = redux.createStore(counterReducer) // default action

    const counterSubscriber = () => {
        const latestState = store.getState()
        console.log(latestState)

    }

    store.subscribe(counterSubscriber)
    store.dispatch({type:'increment'})

```

#### Preparing a new Project

- Normally we'd init a project like so: `npm install redux react-redux`

#### Creating a Redux Store for React

- Create store
  - Actions: increment and decrement
- invove the _createStore method in file_ below and export that!
  [store/index]
  `const store = createStore(counterReducer) // default action
export default store`

#### Providing the Store

- Typically store is implemented in highest level. index.js
- Import provider
- Redux doesnt know where to read from so import the file [store/store]

```
  import React from 'react';
  import ReactDOM from 'react-dom/client';
  import { Provider } from 'react-redux'
  import store from './store'
  import './index.css';
  import App from './App';

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Provider store=""><App /></Provider>);

```

#### Using Redux Data in React Components

- In your functional compoinent we need to now import more hooks. `useSelector` or `useStore, connect`
- connect can be used as a wrapper
- `useSelector` will automatically setup a subscription for the component!!

#### Dispatching Actions From Inside Components

- To dispatch an action we can utilize `useDispatch()` which will generate a function for use

#### Redux with Class-based Components

- Hooks remember are not useable in components
- You can use the `connect` (h.o.c)
  - import it then export it like so `export default connect()(Counter)` pass your function as a return
- To pass in props we need to setup sepecial methods to convert state to props

```
const mapStateToProps = state => {
  return {
    counter: state.counter
  };
}

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch({ type: 'increment' }),
    decrement: () => dispatch({ type: 'decrement' }),
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
```

#### Attaching Payloads to Actions

- Sometimes your dispathc will want to carry extra data
- `action.something` can be recieved in your store reducer and pass a value from component

  ```
  if(action.type === 'increase'){
         return {counter:state.counter + action.amount}
  }
  ```

  - Action payload is just an extra property

  ```
  const increaseBy5 = () => {
  dispatch({ type: 'increase' , amount: 5})
  }
  ```

#### Working with Multiple State Properties

- You can add addtional params to your redux reducer. Or better yet _for readablity_ initial state and pass that
- Redux _will replace the existing state_ it wont merge meaning as you return your state you **must return the full object**
- _Typically this coult be a switch_

#### How To Work With Redux State Correctly

- **Never mutate the state** always overwrite it by _returning_ a new object.
- Because objs and arrays are reference objects
- (this is the orignal state your getting) can be hard to debug. UI may become out of sync

```
    if (action.type === 'increment') {

        //return state.counter ++  Dont do this (mututation)
        //Return new object
        return {
            counter: state.counter + 1,
            showCounter: state.showCounter
        }

    }
```

- [Refs and Prim Types](https://academind.com/tutorials/reference-vs-primitive-values/)

#### Redux Challenges & Introducing Redux Toolkit

- unique _action identifiers_ we need to define them properly to avoid issues.
- One option is to create a constant in your redux
  - `const INCREMENT = TRUE` and call that in your cmp
- Handling nested data can also be challengin
- Also you may endup with a large file in redux.
  - To break these down and other enhancments we can use _redux-toolkit_
- [Redux Toolkit](https://redux-toolkit.js.org/)
- `npm install @reduxjs/toolkit`

#### Adding State Slices

- `createSlice` is a good alternative to reducer
  - provide it a slice of global state
- Here we can avoid the long if statements

  ```
  const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
      increment(state) {
        state.counter++;
      },
      decrement(state) {
        state.counter--;
      },
      increase(state, action) {
        state.counter = state.counter + action.payload;
      },
      toggleCounter(state) {
        state.showCounter = !state.showCounter;
      },
    },
  });
  ```

- This handles the imutable issue when this toolkit library is used. Much easier :)

#### Connecting Redux Toolkit State

- We still need to return our slice and dispatch actions to it
- `const store = createStore(counterSlice.reducer)`
- We can also use `configureStore`which now allows us to specify a reducer
- Configure store will alow you to pass a **configuration object **

- [Toolkit Features](https://redux-toolkit.js.org/introduction/getting-started#whats-included)
- You could pass in the whole reducer or create a map of reducers
- or merge all your reducers into one
- Now how can we know what to dispatch ?
- `counterActions.decrement()` Dont forget this is a function call not a pointer

#### Migrating Everything To Redux Toolkit

- ` counter.createSlice` now is a bunch of object keys we can access
- these methods are called action creators
- Now we dont need to worry about creating these action objects on our own or naming/dupe issues
  -Finally these actions can be exported `export const counterActions = counterSlice.actions;` and imported in your component `import { counterActions } from '../store';
`
- In your component you now pass a **Payload** param `dispatch({ type: counterActions.increase(5)})`

#### Working with Multiple Slices

- If we have a bunch of components we would like to use Redux with we need to create multiple slices
- You _only need one store_
- Just map your reducers as above
- access: `const counter = useSelector(state => state.counter.counter)`
- ` type:`! can now be removed from dispatch object

#### Reading & Dispatching From A New

##### Redux Challenge

- [x] Tap into store to show auth or user profile comp in app
- [x] In head conditionally show items or not
- [x] Dispatch action login / logout in appropriate places
- [x] Beware we now have a two keys in reducer mapping

#### Splitting Our Code

- One approach is to separate each reducer in its own file and use index to bootstrap them together
  - in your redux we can `export default counterSlice.reducer` and import that later `counterReducer`

---

### Advanced Redux

#### Module Introduction

#### Redux & Side Effects (and Asynchronous Code)

- Reducers must be **pure**, **side-effect free** **synchronous** functions
  - input (old state + action) -> output (new state)
- Where Should sideeffects go ?
  - Components
  - Action Creators

#### Refresher / Practice: Part 2

- [x] react redux install toolkit and react redux
- [x] Define state object
- [x] Working cart buttons
- [x] Hide show cart
- [x] add to cart
- [x] Update if part of cart just increase quantity
  - can add more products
- +- controlls quantity

  - [x] Remove item
  - [x] Increase item

- [x] 1 past 0 = no items remove from cart
- UI slice / Cart Slice ?
  - UI Handle cart are
- Add provider to somewhere high up (index.js)
- Use store/index.js to strap slices and export "store"
- Use _store_ as convention

#### Refresher / Practice: Part 2

#### Redux & Async Code

- Never put _side effect_ or any _asynch code_ in the reducer
  - We can put these:
    1. inside components (ef useEffect)
    2. action creators

#### Frontend Code vs Backend Code

- Its possible to write your own backend serverside

#### Where To Put Our Logic

- Mutating the state only with use effect
  - Dont: `cart.totalQuantity = cart.totalQuantity +1`
  - Do :`const newTotalQuantity = cart.totalQuantity +1`
- A Fat: Reducers, Actions or Component
- Where to put logic ?
  - Synchronous _side-effect free_ ei **data transformations** ?
    - (prefer reducers)
- Ayscnc code or code with sideeffects ?
  - Action Creators or Components
  - New Use reducers

#### Using useEffect with Redux

- We could now listen in for changes to the cart and `useSelector()`
- This we then pass as a dependacy to `useEffect()` triggering it to run only when needed
- `PUT` Request will overwrite data. Will just create a list of data (sends data snapshot)

#### Handling Http States & Feedback with Redux

- [x] Integrate `Fetch` + `useEffect` Firebase into your project
- [x] Notifications: cmp

#### Using an Action Creator Thunk

- An alternative to side affect is the **action creator**
- A thunk is an _action that delays an action till later_
  - returns a functions that eventually returns another function
- `await` means wait for promise
- Redux is prepared for _action creators that return functions_
- This is an alternative to the logic we have used in cmp. its nice to keep things lean

#### Fetching Data

- Lets put `fetch` in a an asynch to capture errors
- Reux supporst `async` returns
- Lets use a separate `useEffect` to get data when the app starts
- We dont want to request data and send again when cart items is passed as dep in app.js
- We can set a parameter to define if state has changed `changed:true`
  - Dont send if we havent changed anything locally
- You will need to handle the eventuality if there are no items
- [x] Check all is working
  - [x] Missing has changed for notifications

#### Exploring the Redux DevTools

- Redux Dev tools: With toolkit installed this will work with the chrome extension
- You can _time travel_ with redux dev tools to see previous states

---

`git fetch`
`git checkout origin/master -- E:\www\react-complete-guide\package.json`

#### Spa and Router

#### Module Introduction

- -
  - ``
  - ```

    ```

  - []()

- []
- []
-

#### Routing: Multiple Pages in Single-Page Applications

- Is essentially linking pages in one
- Multiple pages in one

#### Project Setup & Installing React Router

- Url changes define changes in application
- Good for complex interfaces
- Simply add client side code to make visible html changes
- `npm install react-router-dom`
- [React Router](https://reactrouter.com/en/main)

#### Defining Routes

- You can use `createBrowserRouter` and pass objects with a `path` & an `element`
- With _route definition objects_

```
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Home from './pages/Home';
import Products from './pages/Products';

const router = createBrowserRouter([{
  path:'/', element:<Home/>},
  { path:'/prodcts', element:<Products />}
, {}])

function App() {

  return <Router rProvider router={router} />

}

export default App;

```

#### Exploring an Alternative Way of Defining Routes

- Instead of passing an object you can use elements `createRoutesFromElements`

#### Navigating between Pages with Links

- We dont want to re-load scripts and sending new requests

1. `import { Link } from 'react-router-dom';`
2. `<Link to="/products">`

   - Listens to events and prevents default creating new http

#### Layouts & Nested Routes

- We can create a layout component containing some main navigation and include it in our app
- We can use a wrapping layout component to wrap all out routes together
- You can add a parent `root` to wrap child routes (like menus)
- This layout cmp can levarage `outlet` from 'react-router-dom'
  _Used in parent route elements to render their child route elements. _
- This way we can have path dependant layout methods

#### Showing Error Pages with errorElement

- Vistors cannot be trusted.
- So lets create a default fall back page if the route doesnt exist
  - add an `errorElement` to your `routeDefinitionObject`

#### Working with Navigation Links (NavLink)

- React router dom is our friend
- We can also use `NavLink` and use `isActive` `className={(isActive) => }` - It by default checks if path is the same ;)
- `end` prop helps handle the end of the route to handle active feedback.

#### Navigating Programmatically

- `useNavigate` incase you need to refresh the page programatically.

#### Defining & Using Dynamic Routes

- What if these had different paths /product1 , /product2 to one cmp _we wouldnt want to add all of these hardcoded_
- One approach is to enter a more paths
- We could add a route then some links ,
- Good for defining different data we want to render same cmp.
- We can levarage path _params_ by adding a colon
  1.  `'/product/:productId'`
  2.  `import {useParams}` in your cmp
  3.  `params.productId`

#### Adding Links for Dynamic Routes

- We can add `to` attribute to our `<Link>` passing dynamic value

#### Understanding Relative & Absolute Paths

- Within our `createBrowserRouter` we change our path handling. You can choose either / rel or abs
  - remember _/ forward slash means **absolute** path_

1. specify our parent`/root` and
2. _remove_ `/` for children to allow for creating a base url.
3. We can now visit `localhost:roots/products`

- `<Link>` also has another prop `relative='path||route'`

#### Working with Index Routes

- We can simply do in our route defintion object `/` or `index:true`

#### Onwards to a new Project Setup - P2

- Backend Front End Project
- You will need to open both separatly and keep both host running
- setup route, links etc see docs

#### Time to Practice: Problem

Challenge / Exercise

- [x] 1.  Add five new (dummy) page components (content can be simple <h1> elements)

  - [x]     - HomePage
  - [x]     - EventsPage
  - [x]     - EventDetailPage
  - [x]     - NewEventPage
  - [x]     - EditEventPage

- [x] 2.  Add routing & route definitions for these five pages
- [x]     - / => HomePage
- [x]     - /events => EventsPage
- [x]     - /events/<some-id> => EventDetailPage
- [x]     - /events/new => NewEventPage
- [x]     - /events/<some-id>/edit => EditEventPage

- [c] 3. Add a root layout that adds the <MainNavigation> component above all page components
- [x] 4.  Add properly working links to the MainNavigation
- [] 5. Ensure that the links in MainNavigation receive an "active" class when active
- [x] 6.  Output a list of dummy events to the EventsPage
- [x]     Every list item should include a link to the respective EventDetailPage
- [x] 7.  Output the ID of the selected event on the EventDetailPage
- [x] BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components
      likeley this will go back to defining parent

#### Data Fetching with a loader()

- Rendering lots of request before loading the pages is not ideal.
- It can be better to tell _router_ to call this
- Helps with fetching data and handling different states
- loader executes before the route is rendered
- loader can be used with _async_ to get around useing _then_
- **aysnc** **await** always returns a _promise_

#### Using Data From A Loader In The Route Component

- `useLoaderData`

#### Where & When Should loader() Code Be Stored?

- You cant use loader in an above component
- Refactor and test app with loader
- These loaders can be quite heavy. So a common recomendation
  is to put loader in the component where you want to use it. and export it as say `somethingLoader`
- later import into your app `{loader as eventsLoader}` then use that in your route definition object loader

#### Reflecting The Current Navigation State in the UI

- We can use `useNavigation` to detext what state the transition of data is.
  - idle
  - loading
  - submitting
- You can tap into this in your jsx `{navigation.state ==='loading' && <p>Loading...</p>}`

#### Returning Responses in loader()s

- From loader you can return a response object
- This a special `response` constructor that can be created client side
- Why not just return response. With react routers response object you dont need to manually extract data from the response
- Levarage this _special type of return object_

#### Which Kind Of Code Goes Into loader()s?

- You can use any browser api in loader. APIS cookies etcw
- But you **Cannot** use hooks

#### Error Handling with Custom Errors

- On way is (in response) `return { isError: true, message: 'Failed to fetch events.' };`
- When you throw error reouter will return closest error element
  - Error element can be use to _show any error_ in route related code
- `errorElement: <ErrorPage />,`

#### Extracting Error Data & Throwing Responses

1. `throw new Response(JSON.stringify({ message: 'Failed to fetch events.',status:response.status}))`
2. You can catch these errors `const error = useRouteError();`

#### The json() Utility Function P3

- React router has utilities to handle responses in `json()`
- You can type less code and you dont need to later parse. The router can handle this for you

#### Dynamic Routes & loader()s

- After defining route you can pass another loader
- loader has two params `request` / `params`
- You cant use hooks in loader so you need these params to get say the `id` param in url

#### The useRouteLoaderData() Hook & Accessing Data From Other Routes

- We can share loaders between routes
  by adding it to a wrapper route or parent element
- Route definistins can have specific id's
  which we use in conjuntcion with `useRouteloaderData`

#### Planning Data Submission

- We can use actions to send data

#### Working with action() Functions

- We can use `action:` as a param to send in router
- Again in actions we have access to browser api stuff but no hooks
  -You will need to use the `Form` component. It will take this data and _send it to your action_ It will omit the browser default (sending to backend)
- You will need to define your method
- You can tap into `request.formData()`
- or use `data.get('title')`

#### Submitting Data Programmatically

- Note you can define actions on your form. The beauty of `<Form action='some-action'` is you can submit your form to external or different form acitons.
- We can then use our `useSubmit` hook to capture this submission
  - It will take a form data obj param

#### Updating the UI State Based on the Submission Status

- We can levarage `useNavigation` to extract eg all the data submitted and status of the transition to provide feedback to the user.
  - `const isSubmitting = navigation.state === 'submitting';`

#### Validating User Input & Outputting Validation Errors

- You can do this in actions by returning the response first
- `useActionData` is our friend here to pick up the response for use in our form
- Then later in your from your can acces `data.errors`

#### Reusing Actions via Request Methods

- Notice we now can levarge our existing `newEventAction` as we only want to change a few things to implement an edit
- We could create two events like `post` and `patch`
- By changing the request method we can use the same action changing the `request.method` and `url`
- A convention is to define request method in uppercase `PATCH`

#### Behind-the-Scenes Work with useFetcher()

- Newlsetter cmp is included everywhere which poses the problem of accessing its action app wide
- We can utilize `fetcher.form` which will do the same except it doesnt init route transition
- good when dont want to actuall navigate to the page to which the loader belongs
- using this you can submit form without transitioning `<fetcher.Form method="post" className={classes.newsletter}>`
- you can acces the data easily: `fetcher.data` and levarage `useEffect`

#### Deferring Data Fetching with defer()

- Meaning you can delay loading of a script to the end.
- What if you wanted to show parts of the page before the http response has been loaded
- We can avoid await in our loader and use `defer` to which we can bundle all our http requests
- `loadEvents()` can now be called inside our loader
  - if there was no promise = _theres nothing to defer_
- In addition we an import `await`
  - `<Await resolve={events}>` will track what has changed this will be called by router
  - this needs to be wrapped in a `Suspense` which works as a _fallback_ while events are being fetched
  - Suspense is imported from `react`

#### Controlling Which Data Should Be Deferred

- in our loader we can now pass multiple loader actions
- inside return we can now use `Await` twice and we can define a fallback prop `fallback={<p>Loading...</p>}`
- You can insure loader waits by using `await loadEvent)()` this is like a lever to tell react to wait for this to finish before rendering

### Authentication

#### Module Introduction

- Avoid faking sending auth

#### How Authentication Works

- Serverside Sessions:
- Store auth on server mapped to client. CLient send identifier along with requests
- Require tight coupling between client and server

- Authentication token:
- After user is authed we create but dont store a permission token
- Client sends token along with request to resources
- JSW json web token
- Flow
- Request- > Server -> Response (token) -> Client (browser)

- Full stack apps typically dont have coupling to server / client
- React apps are typically decoupled from server

#### Project Setup & Route Setup

- [x] Have way of getting to auth page in router

#### Working with Query Parameters

- We can utilize `<Link to="?mode=${mode}> `
- `useSearchParams` will give us access to query params
- `const isLogin = searchParams.get('mode') === 'login';`

#### Implementing the Auth Action

- This is a case for router actions

#### Validating User Input & Outputting Validation Errors

- Here we can levarage `const data = useActionData();`
  - We can then use `data.errors` to access and validate accordingly

#### Adding User Login

- Store token just before redirect
- We have lots of ways of storing the token
  - We can use all browser features
  - `localStorage.setItem('token', token);`
- Payload Token
  ```
  method: request.method,
    headers:{
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
  ```
  - You can then see this **token** in _devtools -> application_
  - For organization we can create a cmp for storing this in `utils` folder

#### Attaching Auth Tokens to Outgoing Requests

- ? Missing

#### Adding User Logout

- We can use a path and a pass router action to clear the auth token
- _no element: required_

#### Updating the UI Based on Auth Status

- We could use context and router to maintain this token app wide
- Or use loader to refresh tokens in the background
- `loader:tokenLoader,` we created earlier in utils
- Within in a sub cmp we can use `useRouteLoaderData` to see it exists
- Finally render your buttons conditionally

#### Important: loader()s must return null or any other value

#### Adding Route Protection

- Again we can utilize a loader `checkAuthLoader` say for example and include this on protected routes

#### Adding Automatic Logout

- Logout user out after xmins and clear token
- One option is to `useEffect` in our root layour and run the checks. This component needs to be high up in the tree
- We can import our `useLoaderData` to get the data to check for token
- then levarage `useSubmit` hook to check if a form has been sent
  - `useSubmit` Programatically send a form

#### Managing the Token Expiration

- The timer needs to be referenced to a timestamp created in the token
  `const expiration = new Date(expiration.getHours() +  1);  localStorage.setItem('expiration', expiration.toISOString());`

---

### Deployment

#### Deployment Steps

- Test
- Optimize
  - Side effects and memo etc are other optimization techniques
- Build For Production
  - Bundled optimized, minimized code
- Upload Code to Production
- Configure server

#### Understanding Lazy Loading

- Loading code only when its needed

#### Adding Lazy Loading & Code For Production

- You can levarage import as it is actually a function that returns a _promise_
- You can write cmp as functions. its only valid if it returns _jsx_
  - `import('./pages/Blog').then(module => module.loader()) ` directly in your router for ex
- 1. Use Special **lazy** function
  - `const BlogPage = lazy(() => import('./pages/Blog'))`
- 2. Wrap your element in `<Suspense fallback={<p>Whoopie</p>`

_You can inspect in devtools -> network_

#### Deployment Example

    - A react SPA application is a **static website** (only html, css & javascript)
      - All client side
      - No static service required
    - Can install something like firebase tools
      - Login via ssh
      - Init will connect you to a firebase project
      - Ultimatley this ends with a deploy cmd
      - Has a disable cmd `firebase: hosting:disable`

    - **GitHub actions**: allows you to automate your build, test, and deployment pipeline.

#### Server-side Routing & Required Configuration

    - Dont forget the router needs a url to be configured
    - Take it for granted users will add in strange urls

#### How do I prepare React app for deployment?

Serving the Same Build from Different Paths​

1. Add homepage to package.json ​
2. Install gh-pages and add deploy to scripts in package.json ​
3. Deploy the site by running npm run deploy ​
4. For a project page, ensure your project's settings use gh-pages ​
5. Optionally, configure the domain​

dev: runs next dev to start Next.js in development mode.
build: runs next build to build the application for production usage.
start: runs next start to start a Next.js production server.
lint: runs next lint to set up Next.js' built-in ESLint configuration.

---

### React Query / Tanstack: Handling HTTP request

  #### Module Introduction
  - 
  #### Project Setup 

  #### Module Introduction

  #### Project Setup & Overview
  
  ####  React Query: What & Why?
    - Alternative to fetch and useEffect
      - where we have to manage trigger fetch

  - Is a good way to perform http requests
  - State, Caching and stale data handling 
  
  ####  Installing & Using Tanstack Query - And Seeing Why It's Great!
  - `npm install @tanstack/react-query@beta`
  - Tanstack itself *does NOT send HTTP* requests. You have to write the code that handles this
  - Tanstack then manages **data,errors,caching**
  - useQuery function requires a **promise** & a **key** for reuse
    - This key can be an array 

  ```
    const {data,isPending,isError,error} = useQuery({
      queryKey: ['events'],
      queryFn: () => fetchEvents
    });

  ```
  - We need to add a special *provider* 
    - Import and instantiate then wrap your app in it
  - Note: if you now inspect network and close and reopen tab you will find events automatically reloads
  - If we now change some data in the background tanstack will **automatically update the data**

  ####  Understanding & Configuring Query Behaviors - Cache & Stale Data
  - Multiple requests happen in the background to check for stale data and cached
   - *Throttling* limiting the bandwidth available to users (dev tools show 3g)
  - `useQuery` takes a `staleTime` param
    - You can make sure no unecessary requests are made
    - `gcTime` garbage cleanup
  - To pass a param into useQuery can write anonymouse function 
  - We now need a different key for each event
  - Using `useRef` will be tricky as it *doesnt* trigger the function to re-execute
  - ? only access if undefined

  ####  Dynamic Query Functions & Query Keys
  - An object is created on the fly and passed to useQuery
  - to handle this we need to use destructuring and pass an object as param

  ####  The Query Configuration Object & Aborting Requests
  - `queryFn: ({signal}) => fetchEvents({signal,searchTerm}),` anoynmous define object and pass it in

  ####  Enabled & Disabled Queries
  - The query as you notice will run by default (not affected by garbage or stale)
  - We can disable this by passing `enabled:false` to useQuery
  - We can fix this by emptying object in use state and checking that this state is `!== undefined`

  ####  Changing Data with Mutations

  - Mutations are a way to change data typically with a post request
   - `useMutation` takes a configuration 
   - `mutationFn: createNewEvent,` could be be doesnt have to be an anoy function
   - we can pass form data to mutate
    ``` 
        const { mutate, isPending, isError, error } = useMutation({
          mutationFn: createNewEvent,
        });

        function handleSubmit(formData) {
          mutate({ event: formData });
        }
  ```
 
  

  ####  Fetching More Data & Testing the Mutation

  ####  Acting on Mutation Success & Invalidating Queries
  - use `onSuccess` to trigger a function after mutation
  - We would want to do this where we fecth our data. But not dependant on page reload
  - We can use `invalidateQueries` to trigger a refetch with help of the `QueryClient`
    - this takes an {} 
    - `{queryKey: ['events']}` invalidate all queries that include this key
    - takes an `exact: false` also
  - lets make the `queryClient = new QueryClient();` external and import it to be able to separatley trigger 


 
  ####  A Challenge! The Problem
    1. View details -> Make sure details page is loaded
    2. add new fetchEvent + Delete 
    3.  use this funk to fetch data inside event details cmp (you will need the id of this event, get that via usePaarms hook) 
    4. Output data into events details page
    5. needs title, image (url), image name, 
    6. Add a delete button use the delete function to delete this event trigger 
    7. or use with useMutation implement mututation to remove items


  ####  A Challenge! The Solution

  ####  Disabling Automatic Refetching After Invalidations

  ####  Enhancing the Demo App & Repeating Mutation Concepts

  ####  React Query Advantages In Action

  ####  Updating Data with Mutations

  ####  Optimistic Updating

  ####  Using the Query Key As Query Function Input

  ####  React Query & React Router

---


### Next Js

#### Module Introduction

- Is a framwork for building react

#### What is NextJS?

- Its a framework for production. Particularly for full stack. To _enhance_ your react dev
- Makes it easier to integrate react features. Solves common problems.
- [https://nextjs.org/](Site)
- Framworks are typically bigger than a library and have rules and strucure

#### Key Feature # Built-in Server-side Rendering (Improved SEO!)

- Built in server side rendering
  - Will render whole dom on server.
  - Good for seo and initial load

Client Side issues:

- Notice page flicker on refresh (client side rendering)
- Search engines See page content

#### Key Feature # Simplified Routing with File-based Routing

    - Routing doesn exist officially in react.
    - With next we can create a folder structure and it will create routes for us
    - Less code, less work and more intuitive

#### Key Feature # Build Fullstack Apps

    - Easily add your backend serverside code to your apps
    - Storeing data, getting data, authenticating is easily added using react

#### Creating a New Next.js Project &

    - Create you react app
    - `npx create-next-app`
    - `npm run build`
    - `npm run start`
    - *Import alias* is defining a rout or alias to pull impots from allowing you to simply `@components/Button`
    - Css modules are included by default in next

#### Analyzing the Created Project

- There is no index page. This page is dynamically rendered
- Pages is the most important directory

#### Adding First Pages

    - Api we can delete
      1. `npx create-next-app next`
      2. `npm run dev`
    - Aside from index you can just create files in the pages directory
    - You can *omit* `import react js`

#### Adding Nested Paths & Pages (Nested Routes)

    - We can levarage subfolders and indexes *path segments*
    - urls should reflect your folder structure

#### Creating Dynamic Pages (with Parameters)

    - Hardcoding identifier is not ideal better to make dynamic
    - Square `[newsId].js` infront of filename tells next this is a dynamic page
    - This also works for folders []

#### Extracting Dynamic Parameter Values

    - Can use wrappers or imports
      - `import {useRouter} from 'next/router'`
      - `console.log(router.query.newsId);`

#### Linking Between Pages

    - `<li><a href="/news/newsone">First news item</a></li>`
      - This works but requires *new request* (page refresh) NOT SPA
      - All our state would be lost in this scenario
    - Use
     - `<Link href="/news/newsone">First news item</Link>`
     - `import Link from 'next/link'`
     - This will work for seo and is a SPA

#### Onwards to a bigger Project!

    - Send meetups to backend
    - fetch and dis meetups
    - detail page dynamic page pull from slug (md5)

#### Outputting a List of Meetups

- Components work as always
- Nothing new: Pages componenets will not be loaded as pages automatically including components

#### Adding the New Meetup Form

- Lets import out list cmp and levarage `Link from 'next/'`

#### The "\_app.js" File & Layout Wrapper

- Best place to use as a layout wrapper at top level (Rather than indidual pages)

#### Using Programmatic (Imperative) Navigation

- This is the equivalent to using Link
- `router.push('/' + props.id);` will change url for you

#### Adding Custom Components & CSS Modules

- importing css modules works as expected

#### How Pre-rendering Works & Which Problem We Face

- Now at top level we could useEffect here with empty depenancy array to only run once
  and fetch data from API
- This will have two render cmp cycles.

```
   useEffect(() => {
           //send http request and fetch data async
           setLoadedMeetups(DUMMY_MEETUPS)
       }, []);
```

- Note: Will create issues for SEO as page content wont prerender this data for which we have to wait

#### Data Fetching for Static Pages

- Request -> Some-route -> return pre rendererd page -> hydrate react with data
- Two Methods for prerender:
- Static Generation (typically should use)
  - `npm build production`
  - pre rendered page
- Server Side Rendering

- if you need to add adata to a page component you can export a function that will only work in '/pages' folder
- `export getStaticProps()` can be async
- this will run on the server and not the client
- _Always return an object_. (same as props in your component)
- Now working with props. ` meetups={props.meetups}` gets around 2nd component cycle and is not available to client

#### More on Static Site Generation (SSG)

- `npm run build` will generate static pages
- `npm run start` will run the server

```
○  (Static)  automatically rendered as static HTML (uses no initial props)
●  (SSG)     automatically generated as static HTML + JSON (uses getStaticProps) good for meetup id page
   (ISR)     incremental static regeneration (uses revalidate in getStaticProps)
```

- This has threats and opportunities

  - SEO is great
  - Performance is great
  - But data is not always up to date

- If data does change frequently we can levarage `revalidate: 10` increamental static generation
  - This is the n\* of seconds after which a page re-generation can occur

#### Exploring Server-side Rendering (SSR) with "getServerSideProps"

- Sometimes you want to rerender the page on **Every Request**

```
//runs on server after deployment
//can even add credentials here
export async function  getServerSideProps(context) {
    const req = context.req;
    const res = context.res;
    return {props:{meetups: DUMMY_MEETUPS}}
}

```

- You can pass **context** as a param

  - `context.req` is the request
  - `context.res` is the response
  - `context.params` is the params
  - `context.query` is the query params

- Sadly you will need to _wait_ for the page to load
- if _dont_ need quick render and dont need _access to req object_. **Use Props**

#### Working with Params for SSG Data

- We can use getStatic props inside our detail cmp
- We need to get the id however to pass back to a `getStaticProps`
- We can use `context.params` to get the id-- `const meetupId = context.params.meetupId;`
- This will get you an error **getStaticPath**

#### Preparing Paths with "getStaticPaths" & Working With Fallback Pages

- `getStaticProps` data is pregenerated. Meaning it needs to generate alll pages at build time
- So we need to pregenerate all those ids ahead of time
- We can use `getStaticPaths` to do this to describe all _dynamic segment values_

```
export async function getStaticPaths() {
    return{
        paths: [{params: {meetupId: 'm1'}}],
    }
}
```

- The fallback key will tell next to generate the page on the fly if it doesnt exist
  - `fallback: true` will generate the page on the fly
  - `fallback: 'blocking'` will generate the page on the fly but will wait for the page to be generated
  - `fallback: false` will generate all pages at build time
- We can _define_ some paths not all if we desire. As a fallback we can use `notFound: true` to return a 404

#### Introducing API Routes

- We can use front and backend together using routes.
- These handle http requests
- API routes are **NOT** about returning components
- From request we can get header, body and method.

```
 function handler(req,res){

    if(req.method === 'POST'){
         const data = req.body;
        //const {title, image, address, description} = data;
        const {title,image,addres,description} = data;

    }
}
export default handler;
```

#### Working with MongoDB

- Lets used mongo db cloud db
- You will need to setup a cluster user with privladges then hit connect and get your creds.
- add your pw to connection string
- if your dbname does not exist it will be created on the fly
- collections are like tables
- documents are like rows
- dont forget to close cnx
- handle response based on status codes

#### Sending Http Requests To Our API Routes

- Can use fetch or axios
- We can call request to our api folder
- Next will trigger handler for us
- if whitelisting is correct etc this should work

#### Getting Data From The Database

- We can use mongo db to get data calling internal api is a bit redundant
- You can import client side or server side code
  - Bundle size may vary
- The object key is not a simple integer its a an object
- Static Props **are pregenerated**

#### Getting Meetup Details Data & Preparing Pages

- to get the id for `getStaticPaths` we just need our id `const meetups = await meetupsCollection.find({}, {_id: 1}).toArray();`
- we can then map these to the path objects
- We can find our data using `findOne` and will return the
- to readd out objectId we need to import `ObjectId` then wrap this in the request function
- expose your propss in the getProps to its component

#### Adding "head" Metadata

- Its wise to check you have meta data
- We can import the `head` component from next
- the simply wrap your page cmp 
``` 
  <Fragment> <Head>
  <title>React Redux</title></Head> </Fragment>
```
- This can ofcourse be dynamic should you wish

#### Deploying Next.js Projects
  - A good tool is vercel
  - its made to be extremely simple
  - you can use github or gitlab and deploy it
  - visit personal access tokens and create a new token
  - add the admin repo hook
  - copy token on prompt
  - vercel will run build cmd's for you
    - see package json -> build "next build"
  - You will need to give vercel access to your repository
  - You may need to config a project furhter
  - Back in mongo. Network access **allow from anywhere**

#### Using Fallback Pages & Re-deploying
  - We only set the right pages to generate at build time
  - You can set `fallback` to `blocking` 
  - verecel will deploy on changes on push
  
#### Summary

#### Module Resources

---

### Animating React Apps

  #### Project Setup & Overview
   - ** is a vite project
   - `npm install` `npm run dev`
   - Vite needs .jsx extension

  #### Animating with CSS Transitions
  - We can ofcourse use template literals and switch a classname 
  ```   {`challenge-item-details ${isExpanded ? 'expanded':''}   ```
  - Css for animation: `transition: transform 0.2s ease-out;` This typically will be enough.

  #### Animating with CSS Animations
  - Slide up + Fade in for example is more complex
  - We can use `@keyframes` to define our animation with its name that then can be applied to our element
  -` animation: slide-up-fade-in 0.3s;`

  #### Introducing Framer Motion
  - We can use `framer-motion` to animate elements that are removed from dom
  - Disapearance and Ui and complecixty can be handled by libraries
  - `npm install framer-motion`
  - It has a lot of features

  #### Framer Motion Basics & Fundamentals
  - Lets dive into some coding examples: '/framer-motion'
    - to use motion you need to `import {motion}`
    - You need to use the motion component ```<motion.div id="box" animate={{ x, y, rotate }} transition={{duration:3}}/>```
    - when you set the prop it is passed to the motion component
    - It gives this natural look and feel. 
    - THis *physics* aproach feels natural
    - **The keys can be avoided and shortened (standard js feature)**

  #### Animating Between Conditional Values

  #### Adding Entry Animations
  - To handle a close of our modal we can tap into `framer-motion`
  - Remeber when modifying we now dont have any state that handles (appearance/disapearance)
    - Defaults **inital** `initial={{opacity: 0, y: -30}}` 

  #### Animating Element Disappearances / Removal
  - Defaults **exit** `ext={{opacity: 0, y: -30}}` 
  - Issues ofcourse can be having conditionals that remove elements from the dom 
  - We can use `AnimatePresence` as a **wrapper** to handle this- `import {AnimatePresence} from 'framer-motion'`
    - This will run the exit animation *Before* removing 

  #### Making Elements "Pop" With Hover Animations
  - We can use while to make the button `pop`

  #### Reusing Animation States
  - `const hiddenAnimationState = {opacity: 0, y: -30}`
  - Variants is good for definition and re-using

  #### Nested Animations & Variants
  - can also be used to trigger states deep within a component
  - framer animnation will wait for one animation to finish. Which can be problematic for delays and redundancy

  #### Animating Staggered Lists 05/09/2023
  - Animating step by step you can define the stagger key with params in the parent elemnent.

  #### Animating Colors & Working with Keyframes
  - `,backgroundColor: '#ff0080'`
  - visible:scale can be an array `[0.8,1.2]`

  #### Imperative Animations
  - we can pass a class identifier as an argument
  - Stagger can be passed as a type
  - we can use ref to pass to our animate method as scopre

  #### Animating Layout Changes
  - Lets animate a list removal

  #### Orchestrating Multi-Element Animations
  -

  #### Combining Animations With Layout Animations
  --

  #### Animating Shared Elements
  --

  #### Re-triggering Animations via Keys
  -- Animations themselves can be retriggered saving additional code
    - We can do this by passing a key to the parent item

  #### Scroll-based Animations
  - We can create special scroll y behavious and pass them to. for the syle prop

  #### Alternative: Working with ReactTransitionGroup
  - 

  #### Module Introduction - With ReactTransitionGroup
  --

  #### Preparing the Demo Project
  --

  #### Using CSS Transitions
  --

  #### Using CSS Animations
  --

  #### CSS Transition & Animations Limitations

  --

  #### Using ReactTransitionGroup
  --

  #### Using the Transition Component
  --

  #### Wrapping the Transition Component
  --

  #### Animation Timings
  --

  #### Transition Events
  --

  #### The CSSTransition Component
  --

  #### Customizing CSS Classnames
  --

  #### Animating Lists
  --

  #### Alternative Animation Packages
  --

  #### Wrap Up
  --

---


---

## Module Introduction
  - The advantages of using of context:
    - is to avoid additional library
    - stay just within react world
    - can shrink bundle

  #### In this section

    `````
    
    1) npm install --save react@latest react-dom@latest

    2) Update index.js:

    Replace

    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>, document.getElementById('root'));
    with

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>);

    `````

  #### Starting Project & Why You Would Replace Redux
    - There are two approaches

  #### Alternative: Using the Context API

  #### Toggling Favorites with the Context API

  #### Context API Summary (and why NOT to use it instead of Redux)
    - Context is its good for low *frequency updates*

  #### Getting Started with a Custom Hook as a Store
    - Context api is made for some states like authentication

  #### Finishing the Store Hook
  
    - For hight frequency states we do have alt to redux

  #### Creating a Concrete Store

  #### Using the Custom Store

  #### Custom Hook Store Summary

  #### Optimizing the Custom Hook Store

  #### Bonus: Managing Multiple State Slices with the Custom Store Hook
    - In most cases redux is fine
    
  #### Wrap Up

  #### Module Resources

---

### Testing

###   Module Introduction

#### What & Why?

   - Manual Testing
    - Preview & Test in the browser
    - See what the *user* sees
    - Hard to test all combinations of issues

   - Automated Testing 
     - Coded tests 
     - Test all of your apps building blocks at once
    

####  Understanding Different Kinds Of Tests

  - Unit Tests
    - Individual units of code
    - 12 to 100's 

  - Integration Tests
    - Test multiple units together
    - Prove they work together

  - End-to-End (E2E) Tests
    - Test complete scenarios
    - Typically only contain a few
    - Important but can be done manually

####   What To Test & How To Test

  - What:
    - Test different things
    - Unit Tests: smallest building

  - How:
    - Test cucess and error cases (edge cases)


####   Understanding the Technical Setup & Involved Tools
  - Tools:
    - Jest
    - React Testing Library
    - Cypress
  - These are already installed in create react app 
  - See jest package.json

####   Running a First Test
  - add *.text.js* as convention in your 
  
  ```
    //import for testing
    import App from './App';
    //@param description, anonymous function
    test('renders learn react link', () => {
      render(<App />);
      const linkElement = screen.getByText(/learn react/i); //regex
      expect(linkElement).toBeInTheDocument(); //is in doc
    });

  ```
  - `npm test` will run all tests
  - `a` will run all 
  - Tests run on watch mode (with npm test active)
  - Import any needed react libs & tool
  - Expect is a global function that takes a value

####   Writing Our First Test
  - **A**rrange, **A**ct,  **A**ssert 

####   Grouping Tests Together With Test Suites

####   Testing User Interaction & State
   - its good to have your test verbally output events.. *Greeting cmp renders hello world*
####   Testing Connected Components

  - the beauty of rendering inside your test is it will actually render connected components
  - this is technically called an **integration test**
  - this linkage isnt something you need to test in isolation

####   Testing Asynchronous Code
  - Ofcourse the issue arrises when checking for text rendered by async code that changes will not happen inmediatley
  - `findAllByRole` will return a promise. Meaning it will *wait* use `await` & `async () => `

####   Working With Mocks
  - We ofc would not want to send requests to a real server
  - We can use `jest.mock` to mock the module
  - fetch is build into the browser (we dont need to test this)
  - this is a very common scenario to simulate that jest has built in functions for this
  - Fetch:
    ```window.fetch = jest.fn();
      window.fetch.mockResolvedValueOnce({populate:MockValues});//mocking fetch
    ```

####  Summary & Further Resources
[Jest Test](https://jestjs.io/)
[React Lib Tests](https://testing-library.com/docs/react-testing-library/intro/)
[React Testing Hook](https://react-hooks-testing-library.com/) 


####   Module Resources

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

---

### TypeScript

  #### Module Introduction

  #### What & Why?
  - A *superset* of javascript 
    - extending javascript with these extra types
    - Does **not** run in browser
  - Allows us to define types, avoiding potential issues like contactenating to strings together "1"+"2" instead of computing them as integers.
  - Usefull for **large teams** and large volumes of code. 
  - This stricter typing will allow bugs to be detected (in ide) before run time.

    ```
     function add(a:number,b:number)
    ```

  #### Installing & Using TypeScript

   - `npm init -y` (y for default)
   - `npm install typescript`
 
    - We can now use `tsc` to compile our code
    - `npx tsc` will compile all files
    - `npx tsc --init` will create a tsconfig.json file
    - `npx tsc -w` will watch for changes
    - `npx tsc with-typescript.ts`*Compile a single file for browser*
    - generate *a new .js* for you
    - browser friendly code
   
  #### Exploring the Base Types
    - `let age: number;` *explicitly* define a type
    - Primitive types
      - number
      - string
      - boolean
      - null 
      - undefined
    - Complex 
      - object
      - array

  #### Working with Array & Object Types

  ```

    let hobbies: string[]; // array type
    hobbies = ['sports', 'cooking'];

    // object type implicit
    // let person; any type can also be implicit

    let person:{
        name: string;
        age: number;
    }; 

    person = {
        name: 'Joe',
        age: 24
    }

    // person = {
    //     isEmployee:true //wrong type will throw error
    // }

    //Define people type but as array
    let people: {
        name: string;
        age: number;
    }[]; //store and array of objects with these properties
    // we can get advanced by combining features/types

  ```

  #### Understanding Type Inference

  - By default typescript will try to infer as many types as possible 
  - `let course = 'React - The Complete Guide'; // infered avoids extra code`
  - Use inference *whenever possbile*

  #### Using Union Types

    - Sometimes we may need to use multiple types 
      - a *Union Type*
    - `let course: string|number = 'React - The Complete Guide'; //union type`

  #### Understanding Type Aliases

  - The more ts code we write the higher the chances for repitition
  - We can use *type aliases* to avoid this (people/person)
  - Define a *base type*
  - `type Person = { name: string;    age: number;} let people: Person[]; `

  #### Functions & Function Types

  - Functions + types & Generic Types
  - Params can have types
  - Return in a function is also a type can be *implicitly set : number*
    - `function add(a: number, b: number): number { return a + b; }`
  - If return type so **infered type is void**
    - `function print(value:any){ console.log(value);}`

  #### Diving Into Generics
    -  Generics are a way to create reusable components
    -  Typesafe yet flexible
    -  "generic type placeholder" (T in the previous lecture)
    -  Work with whatever type  <T>  is defined as on execution `function insertAtBeggin<T>(array:T[], value:T)`
    - ````
      // Generics
      function insertAtBeggin<T>(array:T[], value:T){ // angle brackets for generics were saying that all T's are the same type on exec
        
          const  newArray = [value, ...array]; // spread operator
          return newArray;
      }

      const demoArray = [1,2,3]

      const updatedArray = insertAtBeggin(demoArray, -1); // inserted at beggining -1 is infered as number

      updatedArray[0].split(''); // error as split is not a number method
      ````
  #### A Closer Look At Generics

      Generic Types ("Generics") can be tricky to wrap your head around.

      But indeed, we are working with them all the time - one of the most prominent examples is an array.

      Consider this example array:

      `let numbers = [1, 2, 3];`
      Here, the type is inferred, but if we would assign it explicitly, we could do it like this:

      `let numbers: number[] = [1, 2, 3];`
      number[] is the TypeScript notation for saying "this is an array of numbers".

      But actually, number[] is just syntactic sugar!

      The actual type is Array. ALL arrays are of the Array type.

      BUT: Since an array type really only makes sense if we also describe the type of items in the array, Array actually is a generic type.

      You could also write the above example liks this:

      `let numbers: Array<number> = [1, 2, 3];`

      Here we have the angle brackets (<>) again! But this time NOT to create our own type (as we did it in the previous lecture) but instead to tell TypeScript which actual type should be used for the "generic type placeholder" (T in the previous lecture).

      Just as shown in the last lecture, TypeScript would be able to infer this as well - we rely on that when we just write:

      `let numbers = [1, 2, 3];`
      But if we want to explicitly set a type, we could do it like this:

      `let numbers: Array<number> = [1, 2, 3];`
      Of course it can be a bit annoying to write this rather long and clunky type, that's why we have this alternative (syntactic sugar) for arrays:

      let numbers: number[] = [1, 2, 3];
      If we take the example from the previous lecture, we could've also set the concrete type for our placeholder T explicitly:

      `const stringArray = insertAtBeginning<string>(['a', 'b', 'c'], 'd');`
      So we can not just use the angle brackets to define a generic type but also to USE a generic type and explicitly set the placeholder type that should be used - sometimes this is required if TypeScript is not able to infer the (correct) type. We'll see this later in this course section!

  #### Creating a React + TypeScript Project
    - You can google react app with typescript
    - `npx create-react-app react-with-typescript --template typescript`
    - Will create ts subfolder
    - Project will now consume ts and compile it to js
    - Package json is mostly same + typescript and a bunch of @type dependencies
    - tsconfig.json is the main config file
    - `npm install --save @types/react-router-dom` for example
    - For better dev we need translation from the react/dom js libraries
      - Not all libraries need *translations*

  #### Working with Components & TypeScript
    - 

  #### Working with Props & TypeScript
    - We get additional ide support for props warnings and types
      - After defining our type the `<Todos />` will now flag red as ts knows were missing a type as its not being used correctly
    - tsconfig.js can define strictness
    - `items:string[] ` is a custom prop
    - FC is functional component. this will give us the correct type for props
      - Pass params `<{ items: string[] }>` uses curly brackets 
    - Plugin in a concrete value to be used. As we dont want it to infer the type for props
    - We need to let typescript know how to handle this prop internally
    - different FCs can have different prop definitions
    - This will give us nice autocompletion 

  #### Adding a Data Model
     - A model is where we can define what the data should look like
     - We can create subfolder with the a todo.ts not tsx as its not a cmp
     - Could be a class or interface
       - Define properties first for TS class. As We dont *need*  to use constructor in model. We can jump straight into the properties
       - We can create this later to make sure it consumes data
     - You can also use your classname as a type `React.FC<{ items: Todo[] }>`
     - Using these models we are defining clear structure and shape of data
     - Meaning alots of errors can be solved before runtime

  #### Time to Practice: Exercise Time!
    - Outsource todo cmp and configure correct type of cmp
    - We can use a model to define the shape of our data

  #### Form Submissions In TypeScript Projects
    - `event: React.FormEvent` can be used to define the type of event

  #### Working with refs & useRef
    - We need to be implicit agaain for ts because of type definintion
    - Along with this we need to define a default value (null)
     - `const todoTextInputRef = useRef<HTMLInputElement>(null);`
    - `current?` tries to access value else store null
      - if you know this value is not null you can use `!` to tell ts this is not null `current!`
      - `?` try to get me the value and if null store null
      - `!` Im certain that this wont be null so give me the non null value
        regular expressions 

  #### Working with "Function Props"
    - Remember we can pass pointers at functions as props to our components
    - NewTodo should now be a functional component.
    ` React.FC<{onAddTodo: (text:string) => void }>` To which we actually pass a function or pointer `props.onAddTodo?.(enteredText);` 
      - Our type needs to be defined as anonymos: `onAddTodo: (text: string) => void;` 
      - Remember this anonymous function expects an argument 

  #### Managing State & TypeScript
    - We now can manage the state to which again we pass a generic type
       - `React.useState<Todo[]>([])`
  
  #### Adding Styling

  #### Time to Practice: Removing a Todo
    - Remove todo by clicking on them
      - We can use filter to remove an item from an array
    - We can achieve by setting parameters with anonymous function
    - onRemoveTodo: (id:string) => void }
    - `<TodoItem key={item.id} text={item.text} onRemoveTodo={props.onRemoveTodo.bind(null,item.id)} />`
    - Then later using bind to pass the id
      `this using bind and defining `
  #### The Context API & TypeScript


  #### Summary
  - Learn more at (Learn More)[https://typescriptlang.org]

  #### Bonus: Exploring tsconfig.json

  The tsconfig.json file corresponds to the configuration of the TypeScript compiler (tsc).

    These links could give you details about these attributes:
    (Handbook)[http://www.typescriptlang.org/docs/handbook/tsconfig-json.html]
    (Schema)[http://json.schemastore.org/tsconfig]
    
    - Here are some hints:
      - *target*: the language used for the compiled output
      - *module*: the module manager used in the compiled output. system is for SystemJS, commonjs for CommonJS.
      - *moduleResolution*: the strategy used to resolve module declaration files (.d.ts files). With the node approach, they are loaded from the node_modules folder like a module (require('module-name'))
      - *sourceMap*: generate or not source map files to debug directly your application TypeScript files in the browser,
      - *emitDecoratorMetadata*: emit or not design-type metadata for decorated declarations in source,
      - *experimentalDecorators*: enables or not experimental support for ES7 decorators,
      - *removeComments*: remove comments or not
      - *noImplicitAny*: allow or not the use of variables / parameters without types (implicit)
      
  #### Module Resources

---

### Updates

- Create React App is dead, hooks are the future utilize: "Next" "Vite" or "Remix"
- [Alternatives to React App](https://blog.bitsrc.io/the-future-of-react-why-create-react-app-is-deprecated-and-hooks-are-the-future-83e8a)

### Roundup
  - Practice ! apply your knowledge
  - Demos and dummy projects
  - re-build course projects
  - come dummy businesses ideas and websites
  - google for react examples

  #### explore the react ecosystem
    - gatsby.js
      - features like static site generation, image optimization, and automatic routing, making it a comprehensive tool for web development.
    - preact
      -  (react with smaller footprint)
    - react native
      - for mobile apps 
      - also options for desktop
    - https://acad.link/nextjs
    - React Native: https://acad.link/react-native
    - Mern https://acad.link/mern

---

### Study Tips
  - Dont stop untill you have tied up on video
  - Practice in isolation if you get stuck. Break the problem down and test in stages.

  #### Weakpoints
    - Specifically <t> components and props generic types in ts
    - Functions asynch & promise
    - Anonymous functions
    - obj.? & obj.! meaning

---

#### Usefull node

```

-save @fortawesome/free-solid-svg-icons

> > npm i --save @fortawesome/free-regular-svg-icons
> > npm i --save @fortawesome/free-brands-svg-icons

```
`npm test`
`npm init -y` (will answer all the default questions)
`npm install redux`
`node redux-demo.js` execute with node
`npm install redux react-redux`
`npm install @reduxjs/toolkit` redux tool kit you dont need redux and the tool kit //    "redux": "^4.0.5",
`npx create-react-app react-typescript-app --template typescript`
`npm install react-router-dom`
`npm install --save react@latest react-dom@latest`
   - `npm init -y` (y for default)
   - `npm install typescript`
 `npx create-react-app react-with-typescript --template typescript`

#  for macOS and Linux
`rm -rf node_modules`
`rm -f package-lock.json`
`rm -f yarn.lock`
# 👇️ clean npm cache
`npm cache clean --force`

# 👇️ install packages
`npm install`
### Top 10 Javascript GEMS
[newsId].js
//dispatchEventWithEnableCapturePhaseSelectiveHydrationWithoutDiscreteEventRe

function ValidateEmail(mail)
{
if (/^\w+([\.-]?\w+)_@\w+([\.-]?\w+)_(\.\w{2,3})+$/.test(myForm.emailAddr.value))
{
return (true)
}
alert("You have entered an invalid email address!")
return (false)
}

RFC 2822 standard email validation
Regular Expression Pattern (Ref: https://bit.ly/33cv2vn):

/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)_|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|
\\[\x01-\x09\x0b\x0c\x0e-\x7f])_")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|
\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]\*[a-z0-9]:
(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

## regex

[0-999]. -> ##
[0-999]min -> ##

[0-9][0-9][0-9].

#### Bugs

-

---
```
````
