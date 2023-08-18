import { createSlice } from "@reduxjs/toolkit"
import alertify from "alertifyjs";

export const userSlice = createSlice({
    name: "user",       // key gibi
    initialState: {
        users: [{
            name: "Ece",
            email: "ece@gmail.com",
            phoneNumber: "05554443322",
            password: 12345,
            address: "mahalle, cadde, sokak, mevki, apartman numarası / daire numarası, İlçe/İl ",
            id: 11,
        },
        {
            name: "Naz",
            email: "naz@gmail.com",
            phoneNumber: "05554443322",
            password: 54321,
            address: "mahalle, cadde, sokak, mevki, apartman numarası / daire numarası, İlçe/İl ",
            id:22,
        },
        {
            name: "Zeynep",
            email: "zeynep@gmail.com",
            phoneNumber: "05554443322",
            password: 11111,
            address: "mahalle, cadde, sokak, mevki, apartman numarası / daire numarası, İlçe/İl ",
            id: 33,
        },
        {
            name: "Mustafa",
            email: "mustafa@gmail.com",
            phoneNumber: "05554443322",
            password: 989890,
            address: "mahalle, cadde, sokak, mevki, apartman numarası / daire numarası, İlçe/İl ",
            id: 44,
        },    
    ],
        currentUser : {},
    },
    reducers: {              // update etmek için. Actions, fonksiyon
        addUser: (state, action) => {
            // Return a new array with the new user object appended
            return {
                ...state,
                users: [...state.users, action.payload],
                currentUser: { ...action.payload },
            };
        },
    }
})
export const { addUser } = userSlice.actions      // fonksiyonları dışarı aktarır
export default userSlice.reducer