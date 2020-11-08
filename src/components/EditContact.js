import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editContact, updateContact } from '../redux/userAction';
import { useParams } from 'react-router-dom';
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

const EditContact = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();
  const contact = useSelector((state) => state.user.contact);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    if (contact != null) {
      setName(contact.name);
      setEmail(contact.email);
      setPhone(contact.phone);
    }
    dispatch(editContact(id));
  }, [contact]);

  const onUpdate = (e) => {
    e.preventDefault();

    const update_contact = Object.assign(contact, { name, email, phone });
    dispatch(updateContact(update_contact));
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
          Edit Contact
        </Typography>
        <form onSubmit={onUpdate}>
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
            Update Contact
          </Button>
        </form>
      </Container>
    </>
  );
};

export default EditContact;
