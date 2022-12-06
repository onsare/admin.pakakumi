import { Label } from '@mui/icons-material';
import {
  Card,
  CardContent,
  Grid,
  Box,
  Typography,
  TableRow,
  TableCell,
  Table
} from '@mui/material';

const Referrals = () => {
  return (
    <Card>
      <Card>
        <CardContent>
          <Grid container spacing={3} sx={{ justifyContent: 'space-between' }}>
            <Grid item md={12} xs={12}>
              <Box
                sx={{
                  p: 3
                }}
              >
                <Box display="flex" alignItems="center">
                  <Box>
                    <Typography variant="h4" noWrap>
                      Referrals Commissions
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Table>
                <TableRow hover>
                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      Paid
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
                      KES 0
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
                      Unpaid
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
                      KES 0
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
                      Total
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
                      KES 0
                    </Typography>
                  </TableCell>
                </TableRow>
              </Table>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Card>
  );
};

export default Referrals;
