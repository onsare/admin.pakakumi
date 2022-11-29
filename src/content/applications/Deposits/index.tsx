import { Helmet } from 'react-helmet-async';

import { Grid, Container } from '@mui/material';
import Footer from 'src/components/Footer';

import Deposits from './Data';

function DepositsPage() {
  return (
    <>
      <Helmet>
        <title>Deposits - Applications</title>
      </Helmet>

      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} mt={3}>
            <Deposits />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default DepositsPage;
