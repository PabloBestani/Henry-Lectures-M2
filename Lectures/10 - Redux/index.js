//*IMPORTAR EL STORE

const{createStore} = require('redux');


//*CREAR el state y REDUCER

const initialState = {
    contador: 0,
    nombre: 'Gama',
    coleguillas: [],
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'AUMENTAR_CONTADOR':
            return {
                ...state,
                contador: state.contador + 1
            };
        case 'DISMINUIR_CONTADOR':
            return {
                ...state,
                contador: state.contador - 1
            };
        case 'AGREGAR_COLEGUILLA':
            return {
                ...state,
                coleguillas: [...state.coleguillas, action.payload]
            };
        default: return {...state};
    };
};


//*CREAR EL STORE

const store = createStore(reducer);


//*CREAR ACTIONS

const AUMENTAR_CONTADOR = "AUMENTAR_CONTADOR";
const DISMINUIR_CONTADOR = "DISMINUI_CONTADOR";
const AGREGAR_COLEGUILLA = 'AGREGAR_COLEGUILLA';

let action1 = {type:AUMENTAR_CONTADOR};

let action2 = {type:DISMINUIR_CONTADOR};

const agregar = (coleguilla) => {
    return {
        type: AGREGAR_COLEGUILLA,
        payload: coleguilla
    };
}

const actualizarEstado = () => {
    console.log(store.getState());
}


//el subscribe se ejecuta cada vez que se modifique el estado
store.subscribe(actualizarEstado);

store.dispatch(action1);
store.dispatch(action1);
store.dispatch(action1);
store.dispatch(action2);
store.dispatch(agregar('Pablo Bestani'));
store.dispatch(agregar('Alberto Gentile'));
