import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Grid,
  Container,
  Card,
  CardContent,
  Typography,
  TableCell,
  TableRow,
  Button
} from '@mui/material';
import Footer from 'src/components/Footer';
import CardInfo from './CardInfo';

import Filter from './Filter';
import DepositChart from './DepositChart';
import Withdrawals from './Withdrawals';
import Wager from './Wager';
import Referrals from './Referrals';
import Bonus from './Bonus';
import Activities from './Activity';
import WithdrawalTable from './WithdrawalTable';
import DepositTable from './DepositTable';
import ReferralsTable from './ReferralsTable';
import ReferralsPaymentTable from './ReferralsPaymentTable';
import RevenueChart from './RevenueChart';
import ChangeUsernameModal from './ChangeUsernameModal';
import ConfirmPrompt from './ConfirmPrompt';

function Player(props) {
  const [open, setIsOpen] = useState(false);
  const [confirm, setConfirm] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const deactivateUser = () => {
    setConfirm(true);
  };

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
                        onClick={handleOpen}
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
                        onClick={deactivateUser}
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
            {/* Filters */}

            <Filter />
            <br />

            <Wager />
            <br />
            <DepositChart />
            <br />
            <Withdrawals />
            <br />
            <RevenueChart />
            <br />
            <Referrals />
            <br />
            <ReferralsTable />
            <br />
            <ReferralsPaymentTable />
            <br />
            <Bonus />
            <br />
            <Activities />
            <br />
            <WithdrawalTable />
            <br />
            <DepositTable />
          </Grid>
        </Grid>
      </Container>
      <ChangeUsernameModal open={open} setIsOpen={setIsOpen} />
      <ConfirmPrompt confirm={confirm} setConfirm={setConfirm} />
      <Footer />
    </>
  );
}

export default Player;
