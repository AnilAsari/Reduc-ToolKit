import { createSlice } from "@reduxjs/toolkit";


export interface Isubscripers{
    names:string[];
}

const initialState:Isubscripers={
    names:[]
};

const subscriberSlice=createSlice({
    name:'subscriber',
    initialState,
    reducers:{

        addSubscriber:(state,action)=>{
            state.names.push(action.payload);
        }

        
    }

});

export const {addSubscriber}=subscriberSlice.actions;

export default subscriberSlice.reducer