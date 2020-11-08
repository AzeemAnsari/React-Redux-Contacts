import React from 'react';
import { Typography, Link, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  footer: {
    margin: 'auto 0 15px',
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Typography align="center" variant="body2">
        &copy; 2020 -{' '}
        <Link color="inherit" href="https://www.azeemansari.me" target="_blank">
          Azeem Ansari
        </Link>
      </Typography>
    </footer>
  );
};

export default Footer;
