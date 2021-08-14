import React from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Link,
} from '@material-ui/core';
import { createTheme, ThemeProvider } from '@material-ui/styles';
import useStyles from '../utils/styles';
function Layout({ title, description, children }) {
  const theme = createTheme({
    typography: {
      h1: {
        fontSize: '1.6rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
    },
  });
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>{title ? `${title} - Next Amazon` : 'Next Amazon'}</title>
        {description && <meta name="description" content={description} />}
      </Head>
      <ThemeProvider theme ={theme}></ThemeProvider>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <NextLink href="/" passHref>
            {/* <Link> */}
            <Typography className={classes.brand}>Next Amazon</Typography>
            {/* </Link> */}
          </NextLink>
          <div className={classes.grow}></div>
          <div>
            <NextLink href="/cart" passHref>
              {/* <Link>Cart</Link> */}
              Cart
            </NextLink>
            <NextLink href="/login" passHref>
              {/* <Link>Login</Link> */}
              Login
            </NextLink>
          </div>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        <Typography>All rights reserved. Next Amazon.</Typography>
      </footer>
    </div>
  );
}

export default Layout;
