//Typically use switch 
//Here we need to remove items from the cart - / + or just amount

function CartItem ({ cart }) {
    const [isEditing, setIsEditing] = useState(false);
    const dispatch = useContext(CartDispatchContext);
    let cartContent;
    if (isEditing) {
      cartContent = (
        <>
          <input
            value={cart.text}
            onChange={e => {
              dispatch({
                type: 'changed',
                cart: {
                  ...cart,
                  text: e.target.value
                }
              });
            }} />
          <button onClick={() => setIsEditing(false)}>
            Save
          </button>
        </>
      );
    } else {
      cartContent = (
        <>
          {cart.text}
          <button onClick={() => setIsEditing(true)}>
            Edit
          </button>
        </>
      );
    }
    return (
      <label>
        <input
          type="checkbox"
          checked={cart.done}
          onChange={e => {
            dispatch({
              type: 'changed',
              cart: {
                ...cart,
                done: e.target.checked
              }
            });
          }}
        />
        {cartContent}
        <button onClick={() => {
          dispatch({
            type: 'deleted',
            id: cart.id
          });
        }}>
          Delete
        </button>
      </label>
    );
  }
  