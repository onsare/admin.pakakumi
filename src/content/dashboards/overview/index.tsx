import { Helmet } from 'react-helmet-async';

import { Container, Grid } from '@mui/material';
import Footer from 'src/components/Footer';

import AccountBalance from './AccountBalance';

import WatchList from './Summary';

function DashboardCrypto() {
  return (
    <>
      <Helmet>
        <title>Dashboard - Pakakumi Sports</title>
      </Helmet>

      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={4}
        >
          <Grid item xs={12} mt={3}>
            <AccountBalance />
          </Grid>

          <Grid item xs={12}>
            <WatchList />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default DashboardCrypto;
