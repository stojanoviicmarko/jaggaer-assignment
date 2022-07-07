import { Button, Stack, TextField, Typography } from '@mui/material';

import AddIcon from '../../resources/icons/add.svg';

const ProductAddToCart = ({ addToCart, quantity, setQuantity, unit }) => {
  return (
    <Stack direction="row" spacing={3} alignItems="center">
      <Stack direction="row" spacing={1} alignItems="center">
        <TextField
          onChange={setQuantity}
          size="small"
          type="number"
          value={quantity}
          sx={{ width: 70 }}
        />
        <Typography>{unit}</Typography>
      </Stack>
      <Button
        onClick={addToCart}
        variant="contained"
        color="primary"
        startIcon={
          <img src={AddIcon} width={20} height={20} alt="add to cart" />
        }
      >
        Add to cart
      </Button>
    </Stack>
  );
};
export default ProductAddToCart;
