import React, { useContext } from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Link,
  CssBaseline,
  Switch,
} from '@material-ui/core';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
import useStyles from '../utils/styles';
import Cookies from 'js-cookie';
import { Store } from '../utils/Store';
function Layout({ title, description, children }) {
  const { state, dispatch } = useContext(Store);
  const { darkMode } = state;
  // console.log(darkMode);
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? 'dark' : 'light',
          primary: {
            main: orange[500],
          },
          secondary: {
            main: '#208080',
          },
        },

        typography: {
          h1: {
            fontSize: '1.6rem',
            fontWeight: 400,
            margin: '1rem 0',
          },
          h2: {
            fontSize: '1.4rem',
            fontWeight: 400,
            margin: '1rem 0',
          },
          body1: {
            fontWeight: 'normal',
          },
        },
      }),
    [darkMode]
  );
  
  // const theme = createTheme({});
  const classes = useStyles();
  const darkModeChangeHandler = () => {
    dispatch({ type: darkMode ? 'DARK_MODE_OFF' : 'DARK_MODE_ON' });
    const newDarkMode = !darkMode;
    Cookies.set('darkMode', newDarkMode ? 'ON' : 'OFF');
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <React.Fragment>
        <Head>
          <title>{title ? `${title} - Next Amazon` : 'Next Amazon'}</title>
          {description && <meta name="description" content={description} />}
        </Head>

        <AppBar position="static" className={classes.navbar}>
          <Toolbar>
            <NextLink href="/" passHref>
              <Link>
                <Typography className={classes.brand}>Next Amazon</Typography>
              </Link>
            </NextLink>
            <div className={classes.grow}></div>
            <div>
              <Switch
                checked={darkMode}
                onChange={darkModeChangeHandler}
              ></Switch>
              <NextLink href="/cart" passHref>
                <Link>Cart</Link>
                {/* Cart */}
              </NextLink>
              <NextLink href="/login" passHref>
                <Link>Login</Link>
                {/* Login */}
              </NextLink>
            </div>
          </Toolbar>
        </AppBar>

        <Container className={classes.main}>{children}</Container>
        <footer className={classes.footer}>
          <Typography>All rights reserved. Next Amazon.</Typography>
        </footer>
      </React.Fragment>
    </ThemeProvider>
  );
}

export default Layout;
