import { CartActionTypes, CartActions } from '../../actions/product/product.actions';


export let initialState = [];

export function productReducer(state= initialState, action: CartActions) {
    console.log(action);
    switch (action.type) {
        case CartActionTypes.ADD_PRODUCT: {
            console.log('Inside remove prod case');
            return [...state, action.payload];
        }
        case CartActionTypes.REMOVE_PRODUCT: {
            console.log('Inside remove prod case');
            console.log(action.payload);
            const prod = action.payload;
            // tslint:disable-next-line: triple-equals
            return state.filter((el) => el.id != prod.id);
        }
        default:
            return state;
    }
}
