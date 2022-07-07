import { Stack, Typography } from '@mui/material';

const ProductDescription = ({ description }) => {
  return (
    <Stack spacing={1}>
      <Typography variant="h3" fontSize={15} fontWeight={500} color="primary">
        DESCRIPTION
      </Typography>
      <Typography
        variant="subtitle1"
        fontSize={14}
        lineHeight={1.5}
        fontWeight={500}
      >
        {description}
      </Typography>
    </Stack>
  );
};
export default ProductDescription;
