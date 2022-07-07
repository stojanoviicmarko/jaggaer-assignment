import styled from '@emotion/styled';
import {
  Card,
  CardContent,
  Divider,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from '@mui/material';

import useFormatPrice from '../../hooks/useFormatPrice';

const List = styled.ul`
  margin-top: 1rem;
  padding: 0 1.25rem;
`;

const ProductPricingShippingCard = ({
  minimumQuantity,
  shipping,
  delivery,
  priceBreaks,
  unit,
  currency,
}) => {
  const { formatted: shippingCost } = useFormatPrice(shipping, currency);

  return (
    <Card sx={{ height: 280 }} variant="outlined">
      <CardContent sx={{ p: 1.5, pt: 1 }}>
        <Typography color="primary" fontSize={14} fontWeight={500} gutterBottom>
          PRICING & SHIPPING
        </Typography>
        <Divider />
        <List>
          <li>
            <Stack direction="row" spacing={1}>
              <Typography variant="body2" color="text.secondary">
                Minimum order:
              </Typography>
              <Typography variant="body2" fontWeight={500}>
                {minimumQuantity} {unit}
              </Typography>
            </Stack>
          </li>
          <li>
            <Stack direction="row" spacing={1}>
              <Typography variant="body2" color="text.secondary">
                Shipping:
              </Typography>
              <Typography variant="body2" fontWeight={500}>
                {shippingCost}
              </Typography>
            </Stack>
          </li>
          <li>
            <Stack direction="row" spacing={1}>
              <Typography variant="body2" color="text.secondary">
                Delivery:
              </Typography>
              <Typography variant="body2" fontWeight={500}>
                {delivery} days
              </Typography>
            </Stack>
          </li>
        </List>
        <Typography sx={{ mt: 1.5 }} fontSize={13} color="text.secondary">
          Price breaks
        </Typography>
        <TableContainer>
          <Table size="small" sx={{ width: 270 }}>
            <TableBody>
              {priceBreaks &&
                Object.keys(priceBreaks).map((price, priceIdx) => (
                  <TableRow key={priceIdx}>
                    <TableCell sx={{ fontWeight: 500 }} align="left">
                      ex {price} {unit}
                    </TableCell>
                    <TableCell sx={{ fontWeight: 500 }} align="left">
                      {priceBreaks[price]} {currency}/{unit}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};
export default ProductPricingShippingCard;
