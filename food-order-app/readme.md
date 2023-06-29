#### Checklist
  - [x] Install font awesome as module
  - [] Install bootstrap as module
  - [] Adding a "Header" Component
    - [x] Title
    - [x] Top fixed sticky header
    - [] shopping cart button (right)
      - [x] Shopping cart info (right)
  - [x] Install bootstrap with css modules
  - [x] Adding the "Cart" Button Component
    - How to share meal count data from meals
  - [x] Button Component
  - [x] Adding a "Meals" Component
  - [x] Adding Individual Meal Items & Displaying Them
  - [x] Adding a Form
  - [] Fixing Form Input IDs (need to be unique)
    - [] Input Component
  - [x] Figure out parent / sibling relationship for menu cart 
  - [x] Working on the "Shopping Cart" Component
  - [x] Adding a Modal via a React Portal
  - [] Managing Cart & Modal State
    - [] Dialog closable bkg anoying minor bug. Try using proper bs integration with two methods as proposed (show/hide)
    - [x] Adding a Cart Context
    - [x] Using the Context
    - [x] Adding a Cart Reducer
  - [] Working with Refs & Forward Refs
    - for meal input amounts
  - [X] Outputting Cart Items
  - [X] Working on a More Complex Reducer Logic
  - [x] Making Items Removable
  - [] Using the useEffect Hook
  - [] Removing Container as a node in component tree
  - [x] How to get key in from component: Dont use key=pass a separate id attr  https://reactjs.org/docs/lists-and-keys.html
 - [x] pass id  to meal item form
 - [x] Bug: add to cart amount resets state
 - [x] Export initalMeals for reusee
 - [x] cartItems: filter meals by id passed to cart
   - [ ] // meals.map(ud => ar)
 - [x] how to handle cart : 2 scenarios: pass items, or merge items from mealItems array
   - [x] Required initalState = {items:[], total}
   - [x] See Example: (CartProvider)[https://github.com/academind/react-complete-guide-code/blob/11-practice-food-order-app/code/12-finished/src/store/CartProvider.js]
     - In the reducer we pass state.items and set existing cart items
  - [] Prevent validate cart item input amounts
  - [] UI cmpt to live in root
  
#### Caveats / Threats
  - Using react css modules rather than react-bootstrap ? smells a little 

#### Context & Reducer
1. Create the context.
2. Put state and dispatch into context.
3. Use context anywhere in the tree.

#### Structure
  CartProvider