import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { stat } from "fs";
import { StatusCode } from "../../utils/enum/enumApiStatus";


const initialState={
data:[],
status:StatusCode.Idle
}

const productSlice=createSlice({
    name:'products',

    initialState,

    reducers:{

    },

    extraReducers:(builder)=>{

        builder.addCase(getProducts.pending,(state,action)=>{
            state.status=StatusCode.Loading;
        });
        builder.addCase(getProducts.fulfilled,(state,action)=>{
            state.data=action.payload;
            state.status=StatusCode.Idle
        });

        builder.addCase(getProducts.rejected,(state,action)=>{
            state.status=StatusCode.Error
        });
    
    }




})


// export const {}= productSlice.actions

export default productSlice.reducer;


export const getProducts=createAsyncThunk('product/get',async()=>{
    const data=await fetch('https://fakestoreapi.com/products');
    const result=data.json();
    return result;  
}) ;


// export function getProducts(){
//     return async function getProductThunk(dispatch:any){
//        const data=await fetch('https://fakestoreapi.com/products');
//        const result=data.json();
//        dispatch(fetchProduct(result));     
            
//     }
// }