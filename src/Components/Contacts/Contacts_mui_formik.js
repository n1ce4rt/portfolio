
import style from './Contacts.module.scss'
import { Button, LinearProgress } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-mui';
import * as React from 'react';
import {motion} from "framer-motion";
import {animation} from "../Animation/Animation";
const  Values = {}

export const ContactsMuiFormik=() => {
    return (
        <motion.section className={style.contacts_container}
                        initial='hidden'
                        whileInView='visible'
                        viewport={{once: true}}>
        <motion.div className={style.google_map}
                    // custom={1} variants={animation.contactsMap}
        >
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1418.6879903621316!2d34.40260175719431!3d44.67109956298198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40eb37af380fc6af%3A0x45abe5f4dab41b5c!2z0YPQuy4g0J7QutGC0Y_QsdGA0YzRgdC60LDRjywgMjgsINCQ0LvRg9GI0YLQsA!5e0!3m2!1sru!2s!4v1640944441754!5m2!1sru!2s"
                    style={{border: '0'}} allowFullScreen="" loading="lazy"></iframe>
            </motion.div>
            <motion.div
                custom={1} variants={animation.contacts}  >
                <Formik
                    initialValues={{
                        name: '',
                        email: '',
                        text: '',
                    }}
                    validate={(values) => {
                        const errors = Values;
                        if (!values.email) {
                            errors.email = 'Required';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
                        ) {
                            errors.email = 'Invalid email address';
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            setSubmitting(false);
                            alert(JSON.stringify(values, null, 2));
                        }, 500);
                    }}
                >
                    {({ submitForm, isSubmitting }) => (
                        <Form className={style.add}>
                            <Field
                                component={TextField}
                                name="name"
                                type="text"
                                label="Name"
                            />
                            <br />
                            <Field
                                component={TextField}
                                name="email"
                                type="email"
                                label="Email"
                                sx={{ }}
                            />
                            <br />
                            <Field
                                component={TextField}
                                type="text"
                                name="text"
                                label="Some text"
                            />
                            {isSubmitting && <LinearProgress />}
                            <br />
                            <Button
                                variant="contained"
                                color="primary"
                                disabled={isSubmitting}
                                onClick={submitForm}
                                sx={{
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
                            >
                                Submit
                            </Button>
                        </Form>
                    )}
                </Formik>
            </motion.div>

        </motion.section>
    );
}