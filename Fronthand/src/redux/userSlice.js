import { createSlice, current } from "@reduxjs/toolkit"
import alertify from "alertifyjs";
import woman from "../images/Woman.png"
import woman2 from "../images/Woman2.png"
import man from "../images/Man.png"
import man2 from "../images/Man2.png"

export const userSlice = createSlice({
    name: "user",       // key gibi
    initialState: {
        users: [{
            name: "Ece En",
            userName: "ece",
            email: "ece@gmail.com",
            phoneNumber: "05554443322",
            password: 12345,
            address: "mahalle, cadde, sokak, mevki, apartman numarası / daire numarası, İlçe/İl ",
            id: 11,
            profile: woman,
        },
        {
            name: "Naz Az",
            userName: "naz",
            email: "naz@gmail.com",
            phoneNumber: "05554443322",
            password: 54321,
            address: "mahalle, cadde, sokak, mevki, apartman numarası / daire numarası, İlçe/İl ",
            id: 22,
            profile: woman,
        },
        {
            name: "Zeynep Kız",
            userName: "zeynep",
            email: "zeynep@gmail.com",
            phoneNumber: "05554443322",
            password: 11111,
            address: "mahalle, cadde, sokak, mevki, apartman numarası / daire numarası, İlçe/İl ",
            id: 33,
            profile: woman2,
        },
        {
            name: "Mustafa Mun",
            userName: "mustafa",
            email: "mustafa@gmail.com",
            phoneNumber: "05554443322",
            password: 989890,
            address: "mahalle, cadde, sokak, mevki, apartman numarası / daire numarası, İlçe/İl ",
            id: 44,
            profile: man,
        },
        ],
        currentUserIndex: -1,
    },
    reducers: {              // update etmek için. Actions, fonksiyon
        addUser: (state, action) => {
            // Return a new array with the new user object appended
            return {
                ...state,
                users: [...state.users, action.payload],
                //currentUser: { ...action.payload },
                //currentUserIndex : state.users.findIndex(user => user.id === action.payload.id),
                currentUserIndex: state.users.length // Güncel kullanıcı index'i
            };
        },

        logOut: (state) => {
            return {
                ...state,
                currentUserIndex: -1,
            }
        },

        update: (state, action) => {

            const updatedUsers = state.users.map((user, index) => {
                if (index === state.currentUserIndex) {
                    return {
                        ...user,
                        ...action.payload
                    };
                }
                return user;
            });
    
            return {
                ...state,
                users: updatedUsers
            };
        },

        logIn:(state, action) => {
            state.user = action.payload;
        },
    }
})
export const { addUser, logOut, update, logIn } = userSlice.actions      // fonksiyonları dışarı aktarır
export default userSlice.reducer