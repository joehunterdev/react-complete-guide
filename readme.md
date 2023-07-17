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
  - _Instructor has handled display logic one level up in new expense_

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
- conditional display should be handled in component ?

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
      - EG: *Listening to user input field*
        - Should be mangaged in cmp with `useState` / `useReducer`
  - Cross Component state
    - State that affects multiple components
      - EG: *Open Close of a modal*
        - Prop Chains/Drilling
  - App wide state
    - Affects the entire app (all / most of cmps)
      - EG: *User Auth*
        - Requires Prop Drilling     

#### Redux vs React Context
  - Redux gets around the problem posed by react of lots of nested context items. Or having one huge context provider
  - *Good for large enterprise*
  - Context is not optimized for *High Frequency changes*
  - React themselves say that *context* its not good for *High Frequency Changes*

#### How Redux Works
  - Only have one store (central data)
  - Dont directly need to manage this
  - We get data out of the store by having components that have a *subscription*
  - We have a generic reducer function that can manipulate this central store
  - Components dispatch *Actions* are like triggers. When this change happens subscribed components get the update

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
       - action is an object that has a *type*
       

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

####  Preparing a new Project
  - Normally we'd init a project like so: `npm install redux react-redux`

####  Creating a Redux Store for React
  - Create store 
    - Actions: increment and decrement 
  - invove the *createStore method in file* below and export that!
  [store/index]
  ` const store = createStore(counterReducer) // default action
    export default store
  `

####  Providing the Store
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

####  Using Redux Data in React Components
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

####  Working with Multiple State Properties
  - You can add addtional params to your redux reducer. Or better yet *for readablity*  initial state and pass that
  - Redux *will replace the existing state* it wont merge meaning as you return your state you **must return the full object**
  - *Typically this coult be a switch*

####  How To Work With Redux State Correctly
  - **Never mutate the state** always overwrite it by *returning* a new object. 
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

####  Redux Challenges & Introducing Redux Toolkit
  - unique *action identifiers* we need to define them properly to avoid issues.
  - One option is to create a constant in your redux 
    - `const INCREMENT = TRUE` and call that in your cmp
  - Handling nested data can also be challengin
  - Also you may endup with a large file in redux. 
    - To break these down and other enhancments we can use *redux-toolkit*
  - [Redux Toolkit](https://redux-toolkit.js.org/)
  - `npm install @reduxjs/toolkit`

####  Adding State Slices

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


####  Connecting Redux Toolkit State
  - We still need to return our slice and dispatch actions to it
   - `const store = createStore(counterSlice.reducer)` 
   - We can also use `configureStore`which now allows us to specify a reducer
   - Configure store will alow you to pass a **configuration object **

   - [Toolkit Features](https://redux-toolkit.js.org/introduction/getting-started#whats-included)
   - You could pass in the whole reducer or create a map of reducers
   - or merge all your reducers into one
   - Now how can we know what to dispatch ?
   - `counterActions.decrement()` Dont forget this is a function call not a pointer
####  Migrating Everything To Redux Toolkit
  - ` counter.createSlice` now is a bunch of object keys we can access
  - these methods are called action creators
  - Now we dont need to worry about creating these action objects on our own or naming/dupe issues
  -Finally these actions can be exported  `export const counterActions = counterSlice.actions;` and imported in your component `import { counterActions } from '../store';
`
  - In your component you now pass a **Payload** param `dispatch({ type: counterActions.increase(5)})`
  
####  Working with Multiple Slices
  - If we have a bunch of components we would like to use Redux with we need to create multiple slices
  - You *only need one store*
  - Just map your reducers as above
  - access: `const counter = useSelector(state => state.counter.counter)`
 - ` type:`! can now be removed from dispatch object
####  Reading & Dispatching From A New 

  ##### Redux Challenge
  - [x] Tap into store to show auth or user profile comp in app
  - [x] In head conditionally show items or not
  - [x] Dispatch action login / logout in appropriate places
  - [x] Beware we now have a two keys in reducer mapping  

####  Splitting Our Code
  - One approach is to separate each reducer in its own file and use index to bootstrap them together
    - in your redux we can `export default counterSlice.reducer` and import that later `counterReducer`

####  Summary

####  Module Resources


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

Allows us to define types, avoiding potential issues like contactenating to strings together "1"+"2" instead of computing them as integers.Usefull for large teams and large volumes of code. This stricter typing will allow bugs to be detected (in ide) before run time.

```
function add(a:number,b:number)
```

---

### Updates

- Create React App is dead, hooks are the future utilize: "Next" "Vite" or "Remix"
- [Alternatives to React App](https://blog.bitsrc.io/the-future-of-react-why-create-react-app-is-deprecated-and-hooks-are-the-future-83e8a)

---
### Study Tips
  - Dont stop untill you have tied up on video
  - Practice in isolation if you get stuck. Break the problem down and test in stages.
---
#### Usefull node

```
-save @fortawesome/free-solid-svg-icons
>> npm i --save @fortawesome/free-regular-svg-icons
>> npm i --save @fortawesome/free-brands-svg-icons

```
`npm init -y` (will answer all the default questions)
`npm install redux`
`node redux-demo.js` execute with node
`npm install redux react-redux`
`npm install @reduxjs/toolkit` redux tool kit you dont need redux and the tool kit //    "redux": "^4.0.5",


### Top 10 Javascript GEMS

//dispatchEventWithEnableCapturePhaseSelectiveHydrationWithoutDiscreteEventReplay

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


[0-999].

#### Bugs

-

---
