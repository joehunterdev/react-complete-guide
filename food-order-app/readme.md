#### Checklist
  - [x] Install font awesome as module
  - [] Install bootstrap as module
  - [x] Adding a "Header" Component
    - [x] Title
    - [x] Top fixed sticky header
    - [] shopping cart button (right)
      - [x] Display items in cart
      - [x] display as button
      - [x] inset icon
      - [x] animation
      - [x] Shopping cart info markup (right)
  - [x] Install bootstrap with css modules
  - [x] Adding the "Cart" Button Component
    - How to share meal count data from meals
  - [x] Button Component
  - [x] Adding a "Meals" Component
  - [x] Adding Individual Meal Items & Displaying Them
  - [x] Adding a Form
  - [x] Figure out parent / sibling relationship for menu cart 
  - [x] Working on the "Shopping Cart" Component
  - [x] Adding a Modal via a React Portal
  - [x] Managing Cart & Modal State
    - [] Dialog closable bkg anoying minor bug. Try using proper bs integration with two methods as proposed (show/hide)
    - [x] Adding a Cart Context
    - [x] Using the Context
    - [x] Adding a Cart Reducer
  - [0] Working with Refs & Forward Refs
    - for meal input amounts
  - [X] Outputting Cart Items
  - [X] Working on a More Complex Reducer Logic
  - [x] Making Items Removable
  - [x] Using the useEffect Hook
  - [x] Cart Button animation
    - [] it may be possible this hook could fix multiple state items being returned
  - [] Removing Container as a node in component tree (portal)
  - [x] How to get key in from component: Dont use key=pass a separate id attr  https://reactjs.org/docs/lists-and-keys.html
    - [x] pass id  to meal item form
    - [x] Bug: add to cart amount resets state
    - [x] Export initalMeals for reusee
    - [x] cartItems: filter meals by id passed to cart
    - [x] how to handle cart : 2 scenarios: pass items, or merge items from mealItems array
      - [x] Required initalState = {items:[], total}
      - [x] See Example: (CartProvider)[https://github.com/academind/react-complete-guide-code/blob/11-practice-food-order-app/code/12-finished/src/store/CartProvider.js]
        - In the reducer we pass state.items and set existing cart items
  - [x] Prevent validate cart item input amounts
  - [] UI cmpt to live in root
  - [x] Sync Cart / Menu amounts: 
    - Instrucor doesnt do this anyway
    - Could leverage cart context passing amount from meals
  - [x] Show hide order button / or clickable modal when cart items
  - [x] Manage state total +1 / -1
  - [x] Cart amount reaching 0 will simply trigger dispatch->remove
  - [ ] Remove border  grey btn
  - [x] Navbar fixed top
  - [ ] Fix structure for context
  
#### Caveats / Threats
  - Using react css modules rather than react-bootstrap ? smells a little 

#### Context & Reducer

1. Create the context.
2. Put state and dispatch into context.
3. Use context anywhere in the tree.

#### Structure
  CartProvider