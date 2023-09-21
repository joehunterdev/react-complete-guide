import {useRef} from 'react'

const NewTodo: React.FC<{onAddTodo: (text:string) => void }> = (props) => {
    // We need to be implicit agaain for ts because of type definintion
    const todoTextInputRef = useRef<HTMLInputElement>(null);
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const entererdText = todoTextInputRef.current!.value;

        if(entererdText.trim().length === 0){
            // throw an error
            return;
        }

        props.onAddTodo?.(entererdText);
    }
    
    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="text">Todo Text</label>
            <input type="text" id="text" ref={todoTextInputRef} />
            <button>Add Todo</button>
        </form>
    );
}

export default NewTodo;