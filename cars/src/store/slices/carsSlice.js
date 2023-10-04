import {createSlice} from '@reduxjs/toolkit';

const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        searchTerm: '',
        cars: []
    },
    reducers:{
        changeSearchTerms(state, action){
            state.searchTerm = action.payload;
        },
        addCar(state,action){
            state.cost = action.payload;
        },
        removeCar(state,action){
            state.cost = action.payload;
        }
    }
})

export const { changeName, changeCost } = carsSlice.action ; //+s
export const formReducer = carsSlice.reducers; //-s