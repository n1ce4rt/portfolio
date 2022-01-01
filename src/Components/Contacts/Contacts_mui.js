// import * as React from 'react';
// import TextField from '@mui/material/TextField';
// import style from './Contacts.module.css'
// import {useReducer, useState} from "react";
// import { styled } from '@mui/material/styles';
//
//
// export const Contacts_mui = () => {
//
//     const initialState = {
//         name: '',
//         email: '',
//         comment: '',
//     };
//
//     function reducer(state, action) {
//         switch (action.type) {
//             case 'name':
//                 return {...state, name: action.name.target.value};
//             case 'email':
//                 return {...state, email: action.email.target.value};
//             case 'comment':
//                 return {...state, comment: action.comment.target.value}
//             default:
//                 throw new Error();
//         }
//     }
//
//     const [state, dispatch] = useReducer(reducer, initialState);
//
//     const CssTextField = styled(TextField)({
//         '& label.Mui-focused': {
//             color: 'black',
//
//         },
//         '& .MuiInput-underline:after': {
//             borderBottomColor: 'red',
//
//         },
//         '& .MuiOutlinedInput-root': {
//             '& fieldset': {
//                 borderRadius: '0',
//                 border: 'none',
//                 borderBottom: '1px solid grey',
//             },
//             '&:hover fieldset': {
//                 borderBottom: '2px solid black'
//             },
//             '&.Mui-focused fieldset': {
//                 borderColor: 'black',
//             },
//         },
//     });
//
//     return (
//
//
//         <div className={style.form_wrapper}>
//
//             <CssTextField margin={'normal'}  label="Name" id="custom-css-outlined-input"/>
//             <CssTextField margin={'normal'} label="Email" id="custom-css-outlined-input"/>
//             <CssTextField margin={'normal'}  label="Some text" id="custom-css-outlined-input"/>
//
//             <button type={"submit"} className={style.btn_submit} onClick={()=>console.log(state)}>Send</button>
//         </div>
//
//     )
// }
// export default Contacts_mui;