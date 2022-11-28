import { Helmet } from 'react-helmet-async';

import {
  Grid,
  Container,
  Box,
  Card,
  Divider,
  List,
  ListItem,
  ListItemText,
  Switch,
  Typography,
  Button
} from '@mui/material';
import Footer from 'src/components/Footer';

import RecentOrders from './RecentOrders';

function ApplicationsTransactions() {
  return (
    <>
      <Helmet>
        <title>Risk - Applications</title>
      </Helmet>

      <Container maxWidth="lg">
        <Grid item xs={12} mt={3}>
          <Box pb={2}>
            <Typography variant="h3">Risk Management</Typography>
            <Typography variant="subtitle2">
              Control min/max bet amount, and maximum payout
            </Typography>
          </Box>
          <Card>
            <List>
              <ListItem sx={{ p: 3 }}>
                <ListItemText
                  primaryTypographyProps={{ variant: 'h5', gutterBottom: true }}
                  secondaryTypographyProps={{
                    variant: 'subtitle2',
                    lineHeight: 1
                  }}
                  primary="Minimum Bet Amount"
                  secondary="KES 10"
                />
                <Button size="large" variant="outlined">
                  Change
                </Button>
              </ListItem>
              <Divider component="li" />
              <ListItem sx={{ p: 3 }}>
                <ListItemText
                  primaryTypographyProps={{ variant: 'h5', gutterBottom: true }}
                  secondaryTypographyProps={{
                    variant: 'subtitle2',
                    lineHeight: 1
                  }}
                  primary="Maximum Bet Amount"
                  secondary="KES 100"
                />
                <Button size="large" variant="outlined">
                  Change
                </Button>
              </ListItem>
              <Divider component="li" />
              <ListItem sx={{ p: 3 }}>
                <ListItemText
                  primaryTypographyProps={{ variant: 'h5', gutterBottom: true }}
                  secondaryTypographyProps={{
                    variant: 'subtitle2',
                    lineHeight: 1
                  }}
                  primary="Maximum Payout"
                  secondary="KES 100, 000.00"
                />
                <Button size="large" variant="outlined">
                  Change
                </Button>
              </ListItem>
            </List>
          </Card>
        </Grid>
        {/* <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
          mt={3}
        >
          <Grid item xs={12}>
            <RecentOrders />
          </Grid>
        </Grid> */}
      </Container>
      <Footer />
    </>
  );
}

export default ApplicationsTransactions;
