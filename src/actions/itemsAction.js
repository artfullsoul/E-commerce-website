import { 
  UPDATE_CART,
  LOADING
} from "./types";

export const updatedCart = (id,type) => async dispatch =>{
  dispatch(setLoading());
  console.log("Update cart action Called ");
  await dispatch({
    type:UPDATE_CART , 
    payload:
    {
      
    }})
}
export const setLoading = () => {
  return{
      type: LOADING
  }
}