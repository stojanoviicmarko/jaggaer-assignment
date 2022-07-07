import { Box, Link, Rating, Stack, Typography } from '@mui/material';
import { useEffect, useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import useFormatPrice from '../../hooks/useFormatPrice';
import DiscountIcon from '../../resources/icons/discount.svg';
import ProductAddToCart from './ProductAddToCart';
import {
  addQuantity,
  addToCart,
  isVisible,
  selectQuantity,
} from './slice/productSlice';

const ProductInfo = ({
  name,
  supplier,
  supplierLink,
  stars = 0,
  price,
  shipping,
  currency,
  unit,
  vat,
}) => {
  const dispatch = useDispatch();
  const quantity = useSelector(selectQuantity);

  const ref = useRef();

  const { formatted: formatedPrice } = useFormatPrice(price, currency);
  const { formatted: formatedShipping } = useFormatPrice(shipping, currency);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        dispatch(isVisible(entry.isIntersecting))
      ),
    []
  );

  useEffect(() => {
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

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
    <Stack spacing={2} justifyContent="space-between" height="100%">
      <Stack spacing={4}>
        <Stack spacing={1}>
          <Typography variant="h3" fontSize={15}>
            {name}
          </Typography>
          <Link href={supplierLink} fontSize={12} color="secondary">
            <Typography variant="caption" fontSize={12} color="text.secondary">
              by
            </Typography>{' '}
            {supplier}
          </Link>
          <Rating
            name="simple-controlled"
            value={stars}
            precision={0.5}
            sx={{ width: 'fit-content' }}
            readOnly
          />
        </Stack>
        <Stack spacing={1}>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography fontSize={14}>{formatedPrice}</Typography>
            <Typography fontSize={14} color="text.secondary">
              + {formatedShipping} shipping
            </Typography>
            <img src={DiscountIcon} alt="dicount" height={20} width={20} />
          </Stack>
          <Typography fontSize={12} color="gray">
            all prices incl. {vat}% taxes
          </Typography>
        </Stack>
      </Stack>
      <Box ref={ref}>
        <ProductAddToCart
          addToCart={handleAddToCart}
          quantity={quantity}
          setQuantity={handleSetQuantity}
          unit={unit}
        />
      </Box>
    </Stack>
  );
};

export default ProductInfo;
