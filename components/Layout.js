import React, { useContext, useEffect, useState } from 'react';
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
  Grid,
  List,
  ListItem,
} from '@material-ui/core';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
import Skeleton from '@material-ui/core/Skeleton';
import Box from '@material-ui/core/Box';

import useStyles from '../utils/styles';
import Cookies from 'js-cookie';
import { Store } from '../utils/Store';
function Layout({ page, title, description, children }) {
  const { state, dispatch } = useContext(Store);
  const { darkMode } = state;
  const [ready, setReady] = React.useState(false);

  useEffect(() => {
    setTimeout(() => {
      setReady(true);
    }, 2000);
  }, [ready]);

  const theme = createTheme({
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
  });

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: orange[500],
      },
      secondary: {
        main: '#208080',
      },
    },
  });
  const classes = useStyles();
  const darkModeChangeHandler = () => {
    dispatch({ type: darkMode ? 'DARK_MODE_OFF' : 'DARK_MODE_ON' });
    const newDarkMode = !darkMode;
    Cookies.set('darkMode', newDarkMode ? 'ON' : 'OFF');
  };
  if (!ready) {
    return (
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Box key={27} sx={{ marginTop: -3, height: 100 }}>
          <Skeleton height={100} animation="wave" />
        </Box>

        <Container>
          {page === 'home' && (
            <>
              <Skeleton width="15%" height={50} animation="wave" />
              <Grid container wrap="nowrap">
                <Box key={1} sx={{ width: 400, marginRight: 0.5, my: 5 }}>
                  <Skeleton
                    variant="rectangular"
                    width={350}
                    height={350}
                    animation="wave"
                  />
                </Box>
                <Box key={2} sx={{ width: 400, marginRight: 0.5, my: 5 }}>
                  <Skeleton
                    variant="rectangular"
                    width={350}
                    height={350}
                    animation="wave"
                  />
                </Box>
                <Box key={3} sx={{ width: 400, marginRight: 0.5, my: 5 }}>
                  <Skeleton
                    variant="rectangular"
                    width={350}
                    height={350}
                    animation="wave"
                  />
                </Box>
              </Grid>
            </>
          )}
          {page === 'slug' && (
            <>
              <div className={classes.section}>
                <Skeleton width="15%" height={20} animation="wave" />
              </div>
              <Grid container spacing={1}>
                <Grid item md={6} xs={12}>
                  <Skeleton
                    variant="rectangular"
                    width={480}
                    height={500}
                    animation="wave"
                  />
                </Grid>
                <Grid item md={3} xs={12} style={{ marginTop: 30 }}>
                  <List>
                    <ListItem>
                      <Skeleton width="100%" height={20} animation="wave" />
                    </ListItem>
                    <ListItem>
                      <Skeleton width="100%" height={20} animation="wave" />
                    </ListItem>
                    <ListItem>
                      <Skeleton width="100%" height={20} animation="wave" />
                    </ListItem>
                    <ListItem>
                      <Skeleton width="100%" height={20} animation="wave" />
                    </ListItem>
                    <ListItem>
                      <Skeleton width="100%" height={60} animation="wave" />
                    </ListItem>
                  </List>
                </Grid>
                <Grid item md={3} xs={12} style={{ marginTop: -40 }}>
                  <Skeleton width="100%" height={300} animation="wave" />
                </Grid>
              </Grid>
            </>
          )}
        </Container>
      </ThemeProvider>
    );
  }
  return (
    <React.Fragment>
      <Head>
        <title>{title ? `${title} - Next Amazon` : 'Next Amazon'}</title>
        {description && <meta name="description" content={description} />}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
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
      </ThemeProvider>
    </React.Fragment>
  );
}

export default Layout;
