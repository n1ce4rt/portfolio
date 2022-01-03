// import style from './Contacts.module.scss'
// import {useFormik} from "formik";
// import {useState} from "react";
// import {logDOM} from "@testing-library/react";
//
//
// export const Contacts = () => {
//
//     const [data, setData] = useState({})
//
//     const validate = values => {
//         const errors = {};
//         if (!values.name) {
//             errors.name = 'Required';
//         } else if (values.name.length > 15) {
//             errors.name = 'Must be 15 characters or less';
//         }
//         if (!values.email) {
//             errors.email = 'Required';
//         } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//             errors.email = 'Invalid email address';
//         }
//         if (!values.comment) {
//             errors.comment = 'Required';
//         } else if (values.comment.length > 20) {
//             errors.comment = 'Must be 20 characters or less';
//         }
//
//         return errors;
//     };
//
//     const formik = useFormik({
//         initialValues: {
//             name: '',
//             email: '',
//             comment: '',
//         },
//         validate,
//         onSubmit: values => {
//             alert(JSON.stringify(values, null, 2));
//             setData(values)
//             formik.resetForm()
//         },
//     });
//
//     return (
//         <div className={style.container}>
//
//             <div className={style.google_map}>
//                 <iframe
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1418.6879903621316!2d34.40260175719431!3d44.67109956298198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40eb37af380fc6af%3A0x45abe5f4dab41b5c!2z0YPQuy4g0J7QutGC0Y_QsdGA0YzRgdC60LDRjywgMjgsINCQ0LvRg9GI0YLQsA!5e0!3m2!1sru!2s!4v1640944441754!5m2!1sru!2s"
//                     style={{border: '0'}} allowFullScreen="" loading="lazy"></iframe>
//             </div>
//
//             <div className={style.form_wrapper}>
//                 <form action="" method="get" className={style.form} onSubmit={formik.handleSubmit}>
//                         <label  htmlFor={'name'}></label>
//                         <input id="name"
//                                name="name"
//                                type="text"
//                                onBlur={formik.handleBlur}
//                                onChange={formik.handleChange}
//                                value={formik.values.name}
//                         />
//
//                     {formik.touched.name && formik.errors.name ?
//                         <div style={{color: 'red'}}>{formik.errors.name}</div> : null}
//
//                     <label htmlFor={'email'}></label>
//                         <input className={style.email} id="email"
//                                name="email"
//                                type="email"
//                             // onChange={formik.handleChange}
//                             // onBlur={formik.handleBlur}
//                             // value={formik.values.email}
//                                {...formik.getFieldProps('email')}
//                         />
//
//                     {/*{formik.touched.email && formik.errors.email ?*/}
//                     {/*    <div style={{color: 'red'}}>{formik.errors.email}</div> : null}*/}
//                     <label className={style.comment} htmlFor={'comment'}></label>
//                         <textarea id="comment"
//                                   name="comment"
//                                   onChange={formik.handleChange}
//                                   onBlur={formik.handleBlur}
//                                   value={formik.values.comment}
//                         />
//
//                     {/*{formik.touched.comment && formik.errors.comment ?*/}
//                     {/*    <div style={{color: 'red'}}>{formik.errors.comment}</div> : null}*/}
//                     <div className={style.form_submit}>
//                         <button className={style.btn_submit} type="submit" name="aaa">Subscribe</button>
//                     </div>
//                 </form>
//             </div>
//
//         </div>
//     )
// }