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

const WithdrawalTable = () => {
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
                      Withdrawals
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>#</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell>Amount</TableCell>

                      <TableCell align="right">Time</TableCell>
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
                          success
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
                          -100
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
                          Sun, 4 September 2022 at 12:34:32
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

export default WithdrawalTable;
