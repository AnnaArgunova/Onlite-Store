import {ADD_PRODUCT} from '../Action/addProducts';

const initialState = {
    catalog: [
        {
            id: 1,
            title: 'Креветка',
            price: 60,
            image: 'images/shrimpYellowNeon-300x400.jpg'

        },
        {
            id: 2,
            title: 'Улитка',
            price: 60,
            image: 'images/snailYellowAmpoule1.jpg'
        },
        {
            id: 3,
            title: 'Креветка',
            price: 60,
            image: 'images/srimpGreenBabaulti-300x400.jpg'
        },
        {
            id: 4,
            title: 'Креветка',
            price: 60,
            image: 'images/shrimpYellowNeon-300x400.jpg'

        },
        {
            id: 5,
            title: 'Улитка',
            price: 60,
            image: 'images/snailYellowAmpoule1.jpg'
        },
        {
            id: 6,
            title: 'Креветка',
            price: 60,
            image: 'images/srimpGreenBabaulti-300x400.jpg'
        }
    ],
    addedProduct:null,
bag:[]
}

export const products = (state = initialState, action) => {
    switch (action.type) {
     
case ADD_PRODUCT:{
    return{
        ...state,
        addedProduct: action.product,
        bag: [...state.bag, action.product]
       
    }
} 
        default: 
            return state
            
        
    }
}
