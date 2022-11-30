import { Helmet } from 'react-helmet-async';
import { Grid, Container, Card } from '@mui/material';
import Footer from 'src/components/Footer';

import Bets from './BetsliipData';
import CardInfo from './CardInfo';

function BetsManager() {
  return (
    <>
      <Helmet>
        <title>Bet ID - Applications</title>
      </Helmet>

      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
          mt={3}
        >
          <Grid item xs={4}>
            <Card>
              <CardInfo title="Bet Amount" amount={0.0} />
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardInfo title="Stake" amount={0.0} />
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardInfo title="Possible Payout" amount={0.0} />
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardInfo title="Excise Tax" amount={0} />
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardInfo title="Withholding Tax" amount={0.0} />
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardInfo title="Outcome" amount={0} />
            </Card>
          </Grid>
        </Grid>
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
