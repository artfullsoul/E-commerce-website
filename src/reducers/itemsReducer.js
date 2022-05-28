import {UPDATE_CART,LOADING} from "../actions/types";
const initialState = {
    allProductsData:[
        {
            itemId:1,
            name:"Sugarlite with half the Calories Sweetener",
            imageUrl:"https://m.media-amazon.com/images/I/61o9v8Qh+UL._SL1500_.jpg",
            quantity:500,
            quantityUnit:"g",
            mrp:99,
            discountedPrice:59,
            off:"40%"
        },
        {
            itemId:2,
            name:"Britannia Healthy Slice Bread",
            imageUrl:"https://www.jiomart.com/images/product/600x600/491127282/britannia-100-whole-wheat-bread-450-g-product-images-o491127282-p491127282-0-202204092013.jpg",
            quantity:450,
            quantityUnit:"g",
            mrp:35,
            discountedPrice:32,
            off:"8%"
        },
        {
            itemId:3,
            name:"Britannia 100% Whole Wheat Bread",
            imageUrl:"https://www.jiomart.com/images/product/600x600/491127281/britannia-healthy-slice-bread-450-g-product-images-o491127281-p590113085-0-202203171015.jpg",
            quantity:450,
            quantityUnit:"g",
            mrp:40,
            discountedPrice:37,
            off:"7%"
        },
        {
            itemId:4,
            name:"Daawat Rozana Super Basmati Rice ",
            imageUrl:"https://www.jiomart.com/images/product/600x600/490863714/daawat-rozana-super-basmati-rice-1-kg-product-images-o490863714-p490863714-0-202203171018.jpg",
            quantity:1,
            quantityUnit:"kg",
            mrp:98,
            discountedPrice:72,
            off:"26%"
        },
        {
            itemId:5,
            name:"Amul Toned Milk",
            imageUrl:"https://www.jiomart.com/images/product/600x600/490010311/amul-taaza-homogenised-toned-milk-1-l-tetra-pak-product-images-o490010311-p490010311-0-202203152257.jpg",
            quantity:1,
            quantityUnit:"L",
            mrp:68,
            discountedPrice:63,
            off:"7%"
        },
        {
            itemId:6,
            name:"Thums Up",
            imageUrl:"https://www.jiomart.com/images/product/600x600/491085935/thums-up-750-ml-product-images-o491085935-p491085935-0-202203152003.jpg",
            quantity:750,
            quantityUnit:"ML",
            mrp:40,
            discountedPrice:32,
            off:"20%"
        },
    ],
    cartItems:[],
    loading: false
}


export default function (state = initialState, action)
{
    switch(action.type)
    {
        case UPDATE_CART:
        {
            console.log(`update cart reducer called`)
            return{
                ...state,
                cartItems:action.payload.cartItemsArray,
                loading:false
            }
        }
        case LOADING:
            return{
                ...state,
                loading:true
            } 
        default:
            return state;
    }
}