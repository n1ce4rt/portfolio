
import style from './Contacts.module.scss'
import {motion} from "framer-motion";
import {animation} from "../Animation/Animation";
import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const validationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
});

export const ContactsMuiFormik =() => {
    const formik = useFormik({
        initialValues: {
            email: '',
            name: '',
            text: '',

        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert('Thx');
        },
    });


    return (
        <motion.section className={style.contacts_container}
                        initial='hidden'
                        whileInView='visible'
                        viewport={{once: true}}>
        <motion.div className={style.google_map} custom={1} variants={animation.contactsMap}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1418.6879903621316!2d34.40260175719431!3d44.67109956298198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40eb37af380fc6af%3A0x45abe5f4dab41b5c!2z0YPQuy4g0J7QutGC0Y_QsdGA0YzRgdC60LDRjywgMjgsINCQ0LvRg9GI0YLQsA!5e0!3m2!1sru!2s!4v1640944441754!5m2!1sru!2s"
                    style={{border: '0'}} allowFullScreen="" loading="lazy"></iframe>
        </motion.div>

            <motion.div custom={1} variants={animation.contacts}>
                <form onSubmit={formik.handleSubmit} className={style.add}>
                    <TextField
                        style={{
                            background: "none",
                            margin: '20px 0'
                        }}
                        fullWidth
                        id="email"
                        name="email"
                        label="Email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    />
                    <TextField
                        style={{
                            background: "none",
                            margin: '20px 0'
                        }}
                        fullWidth
                        id="name"
                        name="name"
                        label="Name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        error={formik.touched.name && Boolean(formik.errors.name)}
                        helperText={formik.touched.name && formik.errors.name}
                    />
                    <TextField
                        style={{
                            background: "none",
                            margin: '20px 0'
                        }}
                        fullWidth
                        id="text"
                        name="text"
                        label="Text"
                        value={formik.values.text}
                        onChange={formik.handleChange}
                        error={formik.touched.text && Boolean(formik.errors.text)}
                        helperText={formik.touched.text && formik.errors.text}
                    />
                    <Button
                        style={{
                            width: '150px',
                            padding: '15px 40px',
                            color: 'black',
                            background: 'linear-gradient(90deg, rgba(255, 255, 255, 1) 50%, rgba(231, 231, 231, 1) 100%)',
                            margin: '0 auto',
                            transition: 'all .3s ease',
                            borderRadius: '0',
                            boxShadow: '5px 5px 10px 0 rgba(0, 0, 0, 0.35)',
                            '@media screen and (max-width: 350px)': {
                                width: '130px',
                                padding: '10px 15px',
                            },
                            '&:hover': {
                                color: 'black',
                                cursor: 'pointer',
                                transform: 'scale(1.01)',
                                background: 'linear-gradient(90deg, rgba(255, 255, 255, 1) 45%, rgba(101, 101, 101, 1) 100%)',
                                boxShadow: '15px 15px 8px 1px rgba(0, 0, 0, 0.35)',
                            },
                            '&:active': {
                                backgroundColor: 'rgb(15,218,56)'
                            }
                        }}
                        color="primary" variant="contained" fullWidth type="submit">
                        Submit
                    </Button>
                </form>

            </motion.div>

        </motion.section>
    );
}