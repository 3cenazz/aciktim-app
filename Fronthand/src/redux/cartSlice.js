import { createSlice } from "@reduxjs/toolkit"
import alertify from "alertifyjs";

export const cartSlice = createSlice({
    name: "cart",       // key gibi
    initialState: {
        products: [{
            name: "Havyar",
            number: 1,
            image: "https://cdn.yemek.com/mncrop/620/388/uploads/2018/08/semizotlu-fellah-koftesi-yemekcom.jpg",
            price: 80.5,
            id: 1,
            description: "öçasmdçöas.dçasömd",
        },
        {
            name: "Havyar",
            number: 5,
            image: "https://cdn.yemek.com/mncrop/620/388/uploads/2018/08/semizotlu-fellah-koftesi-yemekcom.jpg",
            price: 80.5,
            id: 2,
            description: ".,.,.,,.,.,",
        },
        {
            name: "Havyar",
            number: 3,
            image: "https://cdn.yemek.com/mncrop/620/388/uploads/2018/08/semizotlu-fellah-koftesi-yemekcom.jpg",
            price: 80.5,
            id: 3,
            description: "39820*8490385934asndlkans",
        }],
    },
    reducers: {              // update etmek için. Actions, fonksiyon
        increment: (state, action) => {
            const { id } = action.payload;
            const product = state.products.find(product => product.id === id);
            if (product) {
                product.number += 1;
            }
        },
        decrement: (state, action) => {
            const { id } = action.payload;
            const product = state.products.find(product => product.id === id);
            if (product) {
                if (product.number > 1) {
                    product.number -= 1;
                } else if (product.number === 1) {
                    const removeAction = removeProduct({ id: product.id }); // removeProduct eylemi oluşturuluyor
                    cartSlice.caseReducers.removeProduct(state, removeAction); // removeProduct eylemi kullanılıyor

                }

            }
        },
        removeProduct: (state, action) => {
            const { id } = action.payload;
            const removedProduct = state.products.find(product => product.id === id);
            state.products = state.products.filter(product => product.id !== id);
            alertify.success(`${removedProduct.name} sepetten silindi`,2)
        },
    }
})
export const { increment, decrement, removeProduct } = cartSlice.actions      // fonksiyonları dışarı aktarır
export default cartSlice.reducer