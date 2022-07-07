import { Grid } from '@mui/material';

import ProductImages from './ProductImages';
import ProductInfo from './ProductInfo';

const Product = ({ product }) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6} lg={5}>
        <ProductImages images={product?.images} />
      </Grid>
      <Grid item xs={12} md={4}>
        <ProductInfo
          name={product?.title}
          supplier={product?.supplier_name}
          supplierLink={product?.supplier_link}
          stars={product?.stars}
          price={product?.price}
          shipping={product?.transport_costs}
          currency={product?.currency}
          unit={product?.unit}
          vat={product?.vat_percent}
        />
      </Grid>
    </Grid>
  );
};

export default Product;
