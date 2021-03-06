import React, { useContext } from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import axios from 'axios';
import data from '../../utils/data';
import Layout from '../../components/Layout';
import {
  Grid,
  Link,
  List,
  ListItem,
  Typography,
  Card,
  Button,
} from '@material-ui/core';
import useStyles from '../../utils/styles';
import db from '../../utils/db';
import Product from '../../models/Products';
import { Store } from '../../utils/Store';

export default function ProductScreen({ product }) {
  const classes = useStyles();
  const { dispatch } = React.useContext(Store);

  // const router = useRouter();
  // const { slug } = router.query;
  // const product = data.products.find((a) => a.slug === slug);
  //   console.log(product);
  if (!product) {
    return <>{/* <Typography>{`Product Not Found`}</Typography> */}</>;
  }
  const addToCartHandler = async () => {
    const { data } = await axios.get(`/api/products/${product._id}`);
    // console.log(data);
    if (data.countInStock <= 0) {
      window.alert('Product Out of Stock');
      return;
    }
    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity: 1 } });
  };
  return (
    <>
      <Layout
        title={product.name}
        description={product.description}
        page={'slug'}
      >
        <div className={classes.section}>
          <NextLink href={'../'} passHref>
            <Link>Back to Previous</Link>
          </NextLink>
        </div>
        <Grid container spacing={1}>
          <Grid item md={6} xs={12}>
            <Image
              src={product.image}
              alt={product.name}
              width={480}
              height={500}
              layout="responsive"
            ></Image>
          </Grid>
          <Grid item md={3} xs={12}>
            <List>
              <ListItem>
                {' '}
                <Typography type="h1" variant="h1">
                  {' '}
                  {product.name}{' '}
                </Typography>
              </ListItem>
              <ListItem>
                {' '}
                <Typography> Category :{product.category} </Typography>
              </ListItem>
              <ListItem>
                {' '}
                <Typography> Brand :{product.brand} </Typography>
              </ListItem>
              <ListItem>
                {' '}
                <Typography>
                  {' '}
                  Rating :{product.rating} {'  '} Stars ({product.numReviews} )
                  reviews
                </Typography>
              </ListItem>
              <ListItem>
                {' '}
                <Typography> Description :{product.description} </Typography>
              </ListItem>
            </List>
          </Grid>
          <Grid item md={3} xs={12}>
            <Card>
              <List>
                <ListItem>
                  <Grid container spacing={1}>
                    <Grid item xs={6}>
                      {' '}
                      <Typography>Price</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      {' '}
                      <Typography>INR {product.price}/-</Typography>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem>
                  <Grid container spacing={1}>
                    <Grid item xs={6}>
                      {' '}
                      <Typography>Status</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      {' '}
                      <Typography>
                        {product.countInStock > 0 ? 'In Stock' : 'Unavailable'}
                      </Typography>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem>
                  <Button
                    fullWidth
                    variant={'contained'}
                    color="primary"
                    onClick={addToCartHandler}
                  >
                    Add to cart
                  </Button>
                </ListItem>
              </List>
            </Card>
          </Grid>
        </Grid>
      </Layout>
    </>
  );
}
export async function getServerSideProps(context) {
  const { params } = context;
  const { slug } = params;
  await db.connect();
  // Product
  const product = await Product.findOne({ slug }).lean();
  await db.disconnect();
  return {
    props: {
      product: db.convertDocToObject(product),
    },
  };
}
