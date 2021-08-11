import React from 'react'
import Head from 'next/head'
import {AppBar,Toolbar,Typography, Container} from '@material-ui/core'
function Layout({children}) {
    return (
        <div>
            <Head><title>Next Amazon</title></Head>
            <AppBar position="static">
                <Toolbar><Typography>Amazon</Typography></Toolbar>
                 </AppBar>
                 <Container>
                     {children}
                 </Container>
                 <footer>
                     <Typography>All rights reserved. Next Amazon.</Typography>
                 </footer>
        </div>
    )
}

export default Layout
