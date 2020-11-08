import React from 'react';
import { Link } from 'react-router-dom';

import { AppBar, Toolbar, Container, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';

import Logo from '../images/logo.png';

const Header = () => {
  const useStyles = makeStyles((theme) => ({
    gitHubIcon: {
      marginLeft: 'auto',
    },
    logo: {
      display: 'inline-flex',
    },
    logoImg: {
      maxWidth: '78%',
    },
  }));
  const classes = useStyles();

  return (
    <header>
      <AppBar color="secondary" position="static">
        <Container>
          <Toolbar>
            <Link to="/" className={classes.logo}>
              <img src={Logo} alt="azeem ansari" className={classes.logoImg} />
            </Link>

            <IconButton
              href="https://github.com/AzeemAnsari"
              target="_blank"
              color="inherit"
              className={classes.gitHubIcon}
            >
              <GitHubIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  );
};

export default Header;
