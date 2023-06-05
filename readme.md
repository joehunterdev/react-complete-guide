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

  - ` ${Bat ticks}  ` are your friend template literals
  - [Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
  -

#### Styled components are scoped styles using css

  - One aproach is to use *styled compononets* [styled components](https://styled-components.com/)
    - `$ npm install --save styled-components`
    - Using a library like this you will come across a *tagged template literal* `styled.button``;` the baticks are simply a way of calling a special method
    - You can add css styling in these ticks
    - This library has all elements (html) for styling
    - can use a multiline string which is neat
    - They will create unique classnames and are global stlyles
    - Remember *remove the selectors*
    - Whats also nice is you can assign these styles to a whole component `<FormControl className={}>`
    - In addition you can pass props to change styles dynamically
      - `<FormControl invalid={true/false}>`
      - `border: 1px ${props => (props.invalid ? 'red' : #ccc)}`
      
      #### Media Queries
      - `@media (min-width:768px){width:auto}` can be added to your styles to detect and handle screen dynamics

      #### CSS Modules
      - [css modules](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/)
      - 1. Css modules require you to do your import `import styles from `
      - 2. Include `.module` to the file name
      - 3. In your attribute you need to add an object instead of string `className={styles.button}`
      - it will output a special class name *component name_classname___unique id*
      - *This is neat as they are globally accessible but still within in the component scope*

#### Dynamic Styles

   - To create a dynamic property we need to use [] like this as *you may get invalid property name*
    - `className={styles{styles['form-control']}}` this behaves like an *array key*
    - To continue to append classnames you can use battick method as above
    - `@media (min-width:768px){button{width:auto}}`  in your `Button.module.css`

---

### Debugging

#### Break Points

  - You can open up the console and *inspect the js file* to add a **breakpoint** on the line to look at the problem step by step
  - You can also levarage *Step into* to continue on the flow
  - *Step over* to complete the current function call
  
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


  ```
  //Helpers/wrapper.js
    const Wrapper = props => {
     return props.children
    } ```

   ```
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
  - Insterestingly if you now log *nameInputRef* you will see it has a current prop (by default undefined) 
  - You can now access this by using `inputRef.current.value` 
    - You can get around reseting the state using this method. Using state in general and two extra atts !
    - In the case of inputs you can just reset `inputRef.current.value = ''` (rarely to be used)
  - State or refs are interchangeable. 
  - If just want to **readonly = refs**

  ##### Controlled vs Uncontrolled

  - When accesing via refs this is called uncontrolled as were **not controlling the state**
  - Uncontrolled input containers

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
- [Alternatives to React](https://blog.bitsrc.io/the-future-of-react-why-create-react-app-is-deprecated-and-hooks-are-the-future-83e8a087a325)

---

### Todo's
05-06-2023
 99 -102 15:00
 103 - 111 16:00
 - [] Use a fragment and portal & ref

29-05-2023

- 69 - 16:00
- 74 - 17:00
- 77 -18:: 00
- 81 - 19:00
- 24-05-2023
- Basic react test app (taking it out of this current dashboard concept)
- [] Revise passing up state
- [] saveFilterDataHandler
- [x] BUG undefined (reading 'value') at titleChangeHandler (date format may have been breaking, or simply issue naming)

18-05-2023

- [] Re install starter as finance dashboard
- [x] Enable strict mode
- [x] setup react app using next.js or any alternative to create-react-app
  - could create issues with app.jsx
- [x] Document and code Section 3 [Working with components](https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25595404#overview)

[] Remove Chord Finder from branchees

\_\_ = "BEM Block element modifier"
