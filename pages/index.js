import Head from 'next/head';
import Image from 'next/image';
import NextLink from 'next/link';

import styles from '../styles/Home.module.css';
import Layout from './../components/Layout';

import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@material-ui/core';
import data from '../utils/data';
export default function Home() {
  // console.log(data);
  return (
    <>
      <Layout>
        <>
          <h1>Products</h1>
          <Grid container spacing={3}>
            {data.products.map((product) => (
              <>
                <Grid item md={4} key={product._id}>
                  <Card>
                    <NextLink href={`/product/${product.slug}`} passHref>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          image={product.image}
                          title={product.name}
                          height={350}
                        ></CardMedia>
                        <CardContent>
                          <Typography>{product.name}</Typography>
                        </CardContent>
                      </CardActionArea>
                    </NextLink>
                    <CardActions>
                      <>
                        <Typography>INR. {product.price}/-</Typography>
                        <Button size={'small'} color={'primary'}>
                          Add to cart
                        </Button>
                      </>
                    </CardActions>
                  </Card>
                </Grid>
              </>
            ))}
          </Grid>
        </>
      </Layout>
    </>
  );
}
