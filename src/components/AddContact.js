import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../redux/userAction';
import shortid from 'shortid';
import { useHistory } from 'react-router-dom';

import {
  Container,
  Typography,
  makeStyles,
  Button,
  TextField,
  FormControl,
} from '@material-ui/core';

import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles((theme) => ({
  container: {
    margin: '3.5rem auto',
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

const AddContacts = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const formSubmit = (e) => {
    e.preventDefault();
    const new_contact = { id: shortid.generate(), name, email, phone };
    dispatch(addContact(new_contact));
    history.push('/');
  };

  return (
    <>
      <Container className={classes.container} maxWidth="xs" align="center">
        <Typography
          gutterBottom={true}
          variant="h4"
          color="textSecondary"
          align="center"
        >
          Add New Contact
        </Typography>
        <form onSubmit={formSubmit}>
          <FormControl fullWidth={true} margin="normal">
            <TextField
              id=""
              label="Name"
              fullWidth
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required={true}
            />
          </FormControl>
          <FormControl fullWidth={true} margin="normal">
            <TextField
              type="email"
              id=""
              label="Email"
              fullWidth
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required={true}
            />
          </FormControl>
          <FormControl fullWidth={true} margin="normal">
            <TextField
              type="phone"
              id=""
              label="Mobile No."
              fullWidth
              variant="outlined"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required={true}
            />
          </FormControl>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            startIcon={<SaveIcon />}
            className={classes.button}
          >
            Submit
          </Button>
        </form>
      </Container>
    </>
  );
};

export default AddContacts;
