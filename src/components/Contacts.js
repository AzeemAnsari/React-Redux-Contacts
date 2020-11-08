import React from 'react';
import { useSelector } from 'react-redux';
import { Container, makeStyles } from '@material-ui/core';

import ContactTable from './ContactTable';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(3),
  },
}));

const Contacts = () => {
  const classes = useStyles();
  const userData = useSelector((state) => state.user);
  return (
    <Container className={classes.container}>
      <ContactTable contacts={userData.users} />
    </Container>
  );
};

export default Contacts;
