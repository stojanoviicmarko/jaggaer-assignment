/* eslint-disable react/no-children-prop */
import {
  AppBar,
  Badge,
  Box,
  Divider,
  Toolbar,
  Typography,
} from '@mui/material';
import { useDispatch,useSelector } from 'react-redux';

// Icons
import CartIcon from '../../resources/icons/cart.svg';
import AddIcon from '../../resources/icons/facts-soft.svg';
import FavoriteIcon from '../../resources/icons/favorite.svg';
import ProductAddToCart from '../Product/ProductAddToCart';
import {
  addQuantity,
  addToCart,
  selectCart,
  selectIsVisible,
  selectProduct,
  selectQuantity,
} from '../Product/slice/productSlice';
import ElevationScroll from './ElevationScroll';

const Navbar = ({ children, window }) => {
  const dispatch = useDispatch();

  const product = useSelector(selectProduct);
  const cart = useSelector(selectCart);
  const quantity = useSelector(selectQuantity);
  const isVisible = useSelector(selectIsVisible);

  let cartNumberOfItems = cart.length;

  const handleSetQuantity = (e) => {
    const { value } = e.target;

    if (value >= 1 && value <= 10) {
      dispatch(addQuantity(value));
    }
  };

  const handleAddToCart = () => {
    dispatch(addToCart(name));
  };

  return (
    <Box>
      <ElevationScroll children={children} window={window}>
        <AppBar
          position="fixed"
          color="inherit"
          elevation={0}
          sx={{ borderBottom: '1px solid #e9e9e9' }}
        >
          <Toolbar sx={{ justifyContent: 'end' }} variant="dense">
            <Typography
              variant="h1"
              fontSize={18}
              fontWeight={400}
              sx={{
                flexGrow: 1,
                display: { xs: 'none', lg: 'block' },
              }}
              color="primary"
            >
              Lorem Ipsum Dolor Sit Amet 4552 laboris nisi ut aliquip ex ea
              commodo consequat
            </Typography>
            {!isVisible && (
              <Box>
                <ProductAddToCart
                  addToCart={handleAddToCart}
                  quantity={quantity}
                  setQuantity={handleSetQuantity}
                  unit={product?.unit}
                />
              </Box>
            )}
            <Box
              sx={{
                display: 'flex',
                marginLeft: 1,
                marginRight: 0.5,
                alignItems: 'center',
              }}
            >
              <img src={FavoriteIcon} alt="cart icon" height={20} width={20} />
            </Box>
            <Box
              sx={{
                display: 'flex',
                marginLeft: 0.5,
                marginRight: 2,
                alignItems: 'center',
              }}
            >
              <img src={AddIcon} alt="cart icon" height={25} width={25} />
            </Box>
            <Divider orientation="vertical" flexItem />
            <Box
              sx={{
                display: 'flex',
                marginLeft: 2,
                alignItems: 'center',
              }}
            >
              <Badge badgeContent={cartNumberOfItems} color="error">
                <img src={CartIcon} alt="cart icon" height={20} width={20} />
              </Badge>
            </Box>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </Box>
  );
};
export default Navbar;
