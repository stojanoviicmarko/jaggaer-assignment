import { Box, Grid } from '@mui/material';

import PackageIcon from '../../resources/icons/package.svg';
import ZoomInIcon from '../../resources/icons/zoom-in.svg';

const ProductImages = ({ images }) => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={3}>
        <Grid container spacing={1}>
          {images &&
            images.map((img, imgIdx) => (
              <Grid key={imgIdx} item xs={6} md={12}>
                <Box
                  sx={{
                    height: 100,
                    border: 1,
                    borderColor: '#e9e9e9',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundImage: img,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                  }}
                >
                  <img
                    src={PackageIcon}
                    alt={`product image${imgIdx + 1}`}
                    height={40}
                    width={40}
                  />
                </Box>
              </Grid>
            ))}
        </Grid>
      </Grid>
      <Grid item xs={12} md={9}>
        <Box
          sx={{
            height: 400,
            border: 1,
            borderColor: '#e9e9e9',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          <img src={PackageIcon} alt="product" height={100} width={100} />
          <Box sx={{ position: 'absolute', bottom: 0, right: 0 }}>
            <img src={ZoomInIcon} alt="zoom in" height={20} width={20} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ProductImages;
