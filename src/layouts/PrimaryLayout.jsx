import { Box, CssBaseline } from '@mui/material';

import Navbar from '../components/Navigation/Navbar';

const PrimaryLayout = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <Box minHeight="100vh">{children}</Box>
      <Navbar />
    </>
  );
};
export default PrimaryLayout;
