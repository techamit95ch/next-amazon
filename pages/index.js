import Head from 'next/head';
import Image from 'next/image';
import NextLink from 'next/link';

// import styles from '../styles/Home.module.css';
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
import db from './../utils/db';
import Product from './../models/Products';
export default function Home({ products }) {
  // const {products} = props;
  // console.log(products);
  return (
    <Layout page={'home'}>
      <h1>Products</h1>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item md={4} key={product._id}>
            <Card>
              <NextLink href={`/product/${product.slug}`} passHref>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={product.image}
                    title={product.name}
                    height={350}
                    width={350}
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
        ))}
      </Grid>
    </Layout>
  );
}
export async function getServerSideProps(context) {
  await db.connect();
  // Product
  const products = await Product.find({}).lean();
  await db.disconnect();
  return {
    props: {
      products: products.map(db.convertDocToObject),
    },
  };
}
