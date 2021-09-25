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

export function fetchPosts(){
    return function(dispatch){

            dispatch(fetchPostStart());
            axios.get("https://fakestoreapi.com/products/categories")
            .then((response)=>{
                const posts=response.data;
                dispatch(fetchPostSuccess(posts));
                console.log("post Categories",posts);

            })
            .catch((error)=>{
                    dispatch(fetchPostFail(error.message));
            })

    }
}