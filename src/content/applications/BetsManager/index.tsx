import { Helmet } from 'react-helmet-async';
import { Grid, Container } from '@mui/material';
import Footer from 'src/components/Footer';

import Bets from './Data';

function BetsManager() {
  return (
    <>
      <Helmet>
        <title>Bets Management - Applications</title>
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
            <Bets />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default BetsManager;
