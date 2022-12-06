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
import { DataGrid } from '@mui/x-data-grid';

const rows = [
  {
    id: 1,
    Amount: 100,
    Time: 'Sun, 4 September 2022 at 12:34:32'
  }
];

const ReferralsPaymentTable = () => {
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
                      Referral Payment
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <TableContainer>
                <Card>
                  <div style={{ height: 250, width: '100%' }}>
                    <DataGrid
                      columns={[
                        { field: 'Amount', width: 300 },
                        { field: 'Time', width: 300 }
                      ]}
                      rows={rows}
                    />
                  </div>
                </Card>
              </TableContainer>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Card>
  );
};

export default ReferralsPaymentTable;
