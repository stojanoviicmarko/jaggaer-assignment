import { CircularProgress, Container, Grid, Typography } from '@mui/material';

import Product from '../../components/Product/Product';
import ProductDescription from '../../components/Product/ProductDescription';
import ProductDetailsCard from '../../components/Product/ProductDetailsCard';
import ProductPricingShippingCard from '../../components/Product/ProductPricingShippingCard';
import { useFetchProductQuery } from '../../components/Product/slice/productSlice';
import PrimaryLayout from '../../layouts/PrimaryLayout';

const ProductPage = () => {
  const {
    data: product,
    isError: isFetchProductError,
    isLoading: isFetchProductPending,
    isSuccess: isFetchProductSuccess,
  } = useFetchProductQuery();

  return (
    <PrimaryLayout>
      {isFetchProductError && (
        <Container
          sx={{
            height: '100vh',
            paddingTop: 12,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          maxWidth={false}
        >
          <Typography variant="body1" fontSize={20}>
            Something went wrong
          </Typography>
        </Container>
      )}
      {isFetchProductPending && (
        <Container
          sx={{
            height: '100vh',
            paddingTop: 12,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          maxWidth={false}
        >
          <CircularProgress />
        </Container>
      )}
      {isFetchProductSuccess && (
        <>
          <Container sx={{ paddingTop: 12 }} maxWidth={false}>
            <Product product={product} />
          </Container>
          <Container
            sx={{
              marginTop: 5,
              paddingTop: 5,
              paddingBottom: 5,
              backgroundColor: '#efefef',
            }}
            maxWidth={false}
          >
            <ProductDescription description={product?.description_long} />
            <Grid sx={{ mt: 2 }} container spacing={2}>
              <Grid item xs={12} md={4}>
                <ProductDetailsCard
                  features={product?.features}
                  attachments={product?.attachments}
                  keywords={product?.keywords}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <ProductPricingShippingCard
                  minimumQuantity={product?.minimum_order_quantity}
                  shipping={product?.transport_costs}
                  delivery={product?.delivery_time}
                  priceBreaks={product?.price_breaks}
                  unit={product?.unit}
                  currency={product?.currency}
                />
              </Grid>
            </Grid>
          </Container>
        </>
      )}
    </PrimaryLayout>
  );
};
export default ProductPage;
