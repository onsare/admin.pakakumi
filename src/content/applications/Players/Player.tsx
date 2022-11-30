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

function Player(props) {
  const theme = useTheme();
  const chartOptions: ApexOptions = {
    chart: {
      background: 'transparent',
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      },
      zoom: {
        enabled: false
      }
    },
    fill: {
      gradient: {
        shade: 'light',
        type: 'vertical',
        shadeIntensity: 0.1,
        inverseColors: false,
        opacityFrom: 0.8,
        opacityTo: 0,
        stops: [0, 100]
      }
    },
    colors: [theme.colors.primary.main],
    dataLabels: {
      enabled: false
    },
    theme: {
      mode: theme.palette.mode
    },
    stroke: {
      show: true,
      colors: [theme.colors.primary.main],
      width: 3
    },
    legend: {
      show: false
    },
    labels: [
      'Monday',
      'Tueday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday'
    ],
    xaxis: {
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    yaxis: {
      show: false,
      tickAmount: 5
    },
    tooltip: {
      x: {
        show: true
      },
      y: {
        title: {
          formatter: function () {
            return 'Price: KES';
          }
        }
      },
      marker: {
        show: false
      }
    }
  };
  const chart1Data = [
    {
      name: 'Bitcoin Price',
      data: [55.701, 57.598, 48.607, 46.439, 58.755, 46.978, 58.16]
    }
  ];
  const chart2Data = [
    {
      name: 'Ethereum Price',
      data: [13, 16, 14, 20, 8, 11, 20]
    }
  ];
  const chart3Data = [
    {
      name: 'Cardano Price',
      data: [51.85, 41.77, 22.09, 42.0, 71.9, 51.84, 31.84]
    }
  ];
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
                        Add Subtract Balance
                      </Button>

                      <Button
                        size="medium"
                        variant="contained"
                        style={{ width: '100%', marginTop: 5 }}
                      >
                        Send Message
                      </Button>

                      <Button
                        size="medium"
                        variant="contained"
                        style={{ width: '100%', marginTop: 5 }}
                      >
                        User Logs
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
            <Card>
              <Card>
                <CardContent>
                  <Grid
                    container
                    spacing={3}
                    sx={{ justifyContent: 'space-between' }}
                  >
                    <Grid item md={12} xs={12}>
                      <Box
                        sx={{
                          p: 3
                        }}
                      >
                        <Box display="flex" alignItems="center">
                          <Box>
                            <Typography variant="h4" noWrap>
                              User Transactions
                            </Typography>
                          </Box>
                        </Box>
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            pt: 3
                          }}
                        >
                          <Typography
                            variant="h2"
                            sx={{
                              pr: 1,
                              mb: 1
                            }}
                          >
                            Balance: KES 0.00
                          </Typography>
                          <Text color="error">
                            <b>-0.33%</b>
                          </Text>
                        </Box>
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-start'
                          }}
                        >
                          <Label color="error">-KES5</Label>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{
                              pl: 1
                            }}
                          >
                            last 24h
                          </Typography>
                        </Box>
                      </Box>
                      <Chart
                        options={chartOptions}
                        series={chart3Data}
                        type="area"
                        height={200}
                      />
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default Player;
