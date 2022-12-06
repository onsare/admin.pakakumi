import { Helmet } from 'react-helmet-async';
import {
  Grid,
  Container,
  Card,
  Avatar,
  Box,
  CardContent,
  Typography,
  TableCell,
  TableRow,
  Button,
  useTheme
} from '@mui/material';
import Footer from 'src/components/Footer';
import PeopleIcon from '@mui/icons-material/PeopleOutlined';
import CardInfo from './CardInfo';
import Label from 'src/components/Label';
import Text from 'src/components/Text';
import Chart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';
import Filter from './Filter';
import DepositChart from './DepositChart';
import Withdrawals from './Withdrawals';
import Wager from './Wager';
import Referrals from './Referrals';
import Bonus from './Bonus';
import Activities from './Activity';

function Player(props) {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title>Player - Applications</title>
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
              <CardInfo title="TOTAL DEPOSITS" amount={0.0} />
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardInfo title="TOTAL WITHDRAW" amount={0.0} />
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardInfo title="TOTAL TRANSACTIONS" amount={0.0} />
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardInfo title="TOTAL BETS" amount={0} />
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardInfo title="TOTAL REFERRAL" amount={0.0} />
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardInfo title="REFERRAL COMMISSION" amount={0} />
            </Card>
          </Grid>

          <Grid item xs={3}>
            <Card>
              <Card>
                <CardContent>
                  <Grid
                    container
                    spacing={3}
                    sx={{ justifyContent: 'space-between' }}
                  >
                    <Grid item>
                      <Typography
                        variant="h4"
                        fontWeight="bold"
                        color="text.primary"
                        gutterBottom
                        noWrap
                      >
                        User Information
                      </Typography>
                    </Grid>
                    <Grid item>
                      <TableRow hover>
                        <TableCell>
                          <Typography
                            variant="body1"
                            fontWeight="bold"
                            color="text.primary"
                            gutterBottom
                            noWrap
                          >
                            username
                          </Typography>
                        </TableCell>

                        <TableCell>
                          <Typography
                            variant="body1"
                            fontWeight="bold"
                            color="text.primary"
                            gutterBottom
                            noWrap
                          >
                            DonJ
                          </Typography>
                        </TableCell>
                      </TableRow>
                      <TableRow hover>
                        <TableCell>
                          <Typography
                            variant="body1"
                            fontWeight="bold"
                            color="text.primary"
                            gutterBottom
                            noWrap
                          >
                            Phone
                          </Typography>
                        </TableCell>

                        <TableCell>
                          <Typography
                            variant="body1"
                            fontWeight="bold"
                            color="text.primary"
                            gutterBottom
                            noWrap
                          >
                            +254711339581
                          </Typography>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Typography
                            variant="body1"
                            fontWeight="bold"
                            color="text.primary"
                            gutterBottom
                            noWrap
                          >
                            Status
                          </Typography>
                        </TableCell>

                        <TableCell>
                          <Typography
                            variant="body1"
                            fontWeight="bold"
                            color="text.primary"
                            gutterBottom
                            noWrap
                            style={{
                              background: '#29c76f',
                              color: '#fff',
                              padding: '0px 12px',
                              borderRadius: 12
                            }}
                          >
                            active
                          </Typography>
                        </TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell>
                          <Typography
                            variant="body1"
                            fontWeight="bold"
                            color="text.primary"
                            gutterBottom
                            noWrap
                          >
                            Joined
                          </Typography>
                        </TableCell>

                        <TableCell>
                          <Typography
                            variant="body1"
                            fontWeight="bold"
                            color="text.primary"
                            gutterBottom
                            noWrap
                          >
                            30/11, 18:00
                          </Typography>
                        </TableCell>
                      </TableRow>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Card>
            <br />
            <Card>
              <Card>
                <CardContent>
                  <Grid
                    container
                    spacing={3}
                    sx={{ justifyContent: 'space-between' }}
                  >
                    <Grid item>
                      <Typography
                        variant="h4"
                        fontWeight="bold"
                        color="text.primary"
                        gutterBottom
                        noWrap
                      >
                        User Actions
                      </Typography>
                      <Button
                        size="medium"
                        variant="contained"
                        style={{ width: '100%', marginTop: 10 }}
                      >
                        Unlock Account
                      </Button>

                      <Button
                        size="medium"
                        variant="contained"
                        style={{ width: '100%', marginTop: 5 }}
                      >
                        Send Password Reset Token
                      </Button>

                      <Button
                        size="medium"
                        variant="contained"
                        style={{ width: '100%', marginTop: 5 }}
                      >
                        Change Username
                      </Button>
                      <Button
                        size="medium"
                        variant="contained"
                        style={{
                          width: '100%',
                          marginTop: 5,
                          background: 'red'
                        }}
                      >
                        Deactivate
                      </Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Card>
          </Grid>
          <Grid item xs={9}>
            <Wager />

            <br />
            <DepositChart />
            <br />

            <Withdrawals />

            <br />

            <Referrals />

            <br />

            <Bonus />

            <br />

            <Activities />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default Player;
