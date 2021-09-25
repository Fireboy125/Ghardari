import axios from "axios";
import * as  types from "./actionType";


const fetchPostStart =()=>({
    type:types.FETCH_POST_START
})

const fetchPostSuccess =(posts)=>({
    type:types.FETCH_POST_SUCCESS,
    payload:posts,
});

const fetchPostFail =(error)=>({
    type:types.FETCH_POST_FAIL,
    payload: error,
});

//specific category
const fetchSpecificCategoryStart =()=>({
    type:types.FETCH_CATEGORY_START
})

const fetchSpecificCategorySuccess =(posts)=>({
    type:types.FETCH_CATEGORY_SUCCESS,
    payload:posts,
});

const fetchSpecificCategoryFail =(error)=>({
    type:types.FETCH_CATEGORY_FAIL,
    payload: error,
});

//specific Product
const fetchSpecificProductStart =()=>({
    type:types.FETCH_PRODUCT_START
})

const fetchSpecificProductSuccess =(posts)=>({
    type:types.FETCH_PRODUCT_SUCCESS,
    payload:posts,
});

const fetchSpecificProductFail =(error)=>({
    type:types.FETCH_PRODUCT_FAIL,
    payload: error,
});

export function fetchPosts(){
    return function(dispatch){

            dispatch(fetchPostStart());
            axios.get(`https://fakestoreapi.com/products/categories`)
            .then((response)=>{
                const posts=response.data;
                dispatch(fetchPostSuccess(posts));

            })
            .catch((error)=>{
                    dispatch(fetchPostFail(error.message));
            })

    }
}

//Specific Catagory 

export function fetchSpecificCategory(id){
    return function(dispatch){

            dispatch(fetchSpecificCategoryStart());
            axios.get(`https://fakestoreapi.com/products/category/${id}`)
            .then((response)=>{
                const posts=response.data;
                dispatch(fetchSpecificCategorySuccess(posts));

            })
            .catch((error)=>{
                    dispatch(fetchSpecificCategoryFail(error.message));
            })

    }
}

//Specific Product 

export function fetchSpecificProduct(id){
    return function(dispatch){

            dispatch(fetchSpecificProductStart());
            axios.get(`https://fakestoreapi.com/products/${id}`)
            .then((response)=>{
                const posts=response.data;
                dispatch(fetchSpecificProductSuccess(posts));

            })
            .catch((error)=>{
                    dispatch(fetchSpecificProductFail(error.message));
            })

    }
}