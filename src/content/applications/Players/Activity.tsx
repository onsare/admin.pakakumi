import { Label } from '@mui/icons-material';
import {
  Card,
  CardContent,
  Grid,
  Box,
  Typography,
  TableRow,
  TableCell,
  Table,
  IconButton,
  TableBody,
  TableContainer,
  TableHead,
  Tooltip
} from '@mui/material';

const Activities = () => {
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
                      User Activities
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>#</TableCell>
                      <TableCell>Action</TableCell>
                      <TableCell>Change</TableCell>
                      <TableCell>Balance</TableCell>

                      <TableCell align="right">Date</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow hover>
                      <TableCell>
                        <Typography
                          variant="body1"
                          fontWeight="bold"
                          color="text.primary"
                          gutterBottom
                          noWrap
                        >
                          1
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
                          Sports Bet
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
                          -30
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
                          9.20
                        </Typography>
                      </TableCell>

                      <TableCell align="right">
                        <Typography
                          variant="body1"
                          fontWeight="bold"
                          color="text.primary"
                          gutterBottom
                          noWrap
                        >
                          Wed, 23 November 2022 at 18:37:25
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Card>
  );
};

export default Activities;
