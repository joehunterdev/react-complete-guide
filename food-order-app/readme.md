
## General Notes
  - menu / meals
  - header
  - ui add button
  - wrapper (modal)
  - cart
    - has context
    - reducer
    - making items removeable
  - header component 
  - modal using portal
  - 
#### Checklist
  
  - [] Adding a "Header" Component
    - [x] Title
    - [x] Top fixed sticky header
    - [x] Shopping cart info (right)
    - [x] shopping cart button (right)
  - [x] Install bootstrap with css modules
  - [x] Adding the "Cart" Button Component
    - How to share meal count data from meals
  - [x] Button Component
  - [x] Adding a "Meals" Component
  - [x] Adding Individual Meal Items & Displaying Them
  - [x] Adding a Form
  - [] Fixing Form Input IDs (need to be unique)
    - [] Input Component
  - [0] Figure out parent / sibling relationship for menu cart 
  - [] Working on the "Shopping Cart" Component
  - [x] Adding a Modal via a React Portal
  - [] Managing Cart & Modal State
    - [] Dialog closable bkg anoying minor bug. Try using proper bs integration with two methods as proposed (show/hide)
    - [0] Adding a Cart Context
    - [0] Using the Context
    - [0] Adding a Cart Reducer
  - [] Working with Refs & Forward Refs
  - [] Outputting Cart Items
  - [] Working on a More Complex Reducer Logic
  - [] Making Items Removable
  - [] Using the useEffect Hook
  - [] Removing Container as a node in component tree

#### Caveats / Threats
  - Using react css modules rather than react-bootstrap ? smells a little 

#### Context & Reducer
1. Create the context.
2. Put state and dispatch into context.
3. Use context anywhere in the tree.

#### Structure
  CartProvider