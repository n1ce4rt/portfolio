import {motion} from 'framer-motion';
import React from 'react';
import {useFormik} from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@material-ui/core/TextField';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Alert } from '@mui/material';
import {animation} from '../Animation/Animation';
import style from './Contacts.module.scss';


const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
});

export const ContactsMuiFormik = ({theme}) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      text: '',

    },
    validationSchema: validationSchema,
    onSubmit: (values, action) => {
      handleClick();
      action.resetForm();
    },
  });
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const action = (
    <React.Fragment>
      <IconButton
        size="medium"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="medium"/>
      </IconButton>
    </React.Fragment>
  );

  return (
    <motion.section className={style.contacts_container}
      initial="hidden"
      whileInView="visible"
      viewport={{once: true}}>
      <motion.div className={style.google_map} custom={1} variants={animation.contactsMap}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1418.6879903621316!2d34.40260175719431!3d44.67109956298198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40eb37af380fc6af%3A0x45abe5f4dab41b5c!2z0YPQuy4g0J7QutGC0Y_QsdGA0YzRgdC60LDRjywgMjgsINCQ0LvRg9GI0YLQsA!5e0!3m2!1sru!2s!4v1640944441754!5m2!1sru!2s"
          style={{border: '0'}} allowFullScreen={true} loading="lazy"></iframe>
      </motion.div>

      <motion.div custom={1} variants={animation.contacts}>
        <form onSubmit={formik.handleSubmit} className={style.form_add}
          style={{background: theme ? 'rgba(255,255,255,0.9)' : 'rgba(0,0,0,0)'}}>
          <TextField
            style={{
              background: 'none',
              margin: '20px 0',
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
              background: 'none',
              margin: '20px 0',
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
              background: 'none',
              margin: '20px 0',
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
            sx={{
              textDecoration: 'none',
              borderRadius: '0',
              alignSelf: 'center',
              display: 'block',
              color: 'black',
              width: '150px',
              fontFamily: 'Poppins, sans-serif',
              fonteight: 'bold',
              padding: '10px 30px',
              background: 'rgb(255, 255, 255)',
              backgroundImage: 'linear-gradient(90deg, rgba(255, 255, 255, 1) 50%, rgba(231, 231, 231, 1) 100%)',
              // -webkit-box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.35)',
              // -moz-box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.35)',
              boxShadow: '5px 5px 10px 0 rgba(0, 0, 0, 0.35)',
              transition: 'all .3s ease',
              '@media screen and (max-width: 350px)' : {
                width: '100px',
                padding: '5px 10px',
              },
              '&:hover': {
                cursor: 'pointer',
                transform: 'scale(1.001)',
                background: 'rgb(255, 255, 255)',
                backgroundImage: 'linear-gradient(90deg, rgba(255, 255, 255, 1) 45%, rgba(101, 101, 101, 1) 100%)',
                // -webkit-box-shadow: 15px 15px 8px 1px rgba(0, 0, 0, 0.2);
                // -moz-box-shadow: 15px 15px 8px 1px rgba(0, 0, 0, 0.2);
                boxShadow: '10px 10px 5px 1px rgba(0, 0, 0, 0.2)',
              }
            }}
            color="primary" variant="contained" type="submit">
                        Submit
          </Button>
        </form>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          action={action}
        >
          <Alert onClose={handleClose} severity="success" sx={{width: '100%'}}>
                        This is a success message!
          </Alert>
        </Snackbar>

      </motion.div>

    </motion.section>
  );
};