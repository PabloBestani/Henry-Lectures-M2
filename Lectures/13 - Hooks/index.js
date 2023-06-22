
//*HOOK useRef()
// import { useRef, } from "react";

// export default function App() {
//     let ref = useRef(0);
//     //devuelve un objeto con una propiedad, usando el valor que le pase
//     //{current: 0}

//     function handleClick() {
//         ref.current = ref.current + 1;
//         alert('Clickeaste' + ref.current + 'times!');
//     }

//     return <button onClick={handleClick}>Clickeame!</button>
// }






//*HOOK useReducer()
import  { useReducer } from 'react';

function reducer(state, action) {
    if (action.type === 'incremented_age') {
        return {
            age: state.age + 1,
        }
    }
    throw Error("unknown action.");
}

export default function App() {
    const {state, dispatch} = useReducer(reducer, {age:42});

    return (
        <>
            <button
                onClick={() => {
                    dispatch({type: "incremented_age"});
                }}
            >Increment Age</button>
            <p>Hello! You are {state.age}.</p>

        </>
    )
}

