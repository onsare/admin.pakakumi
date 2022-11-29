import { FC, ChangeEvent, useState } from 'react';

import {
  Tooltip,
  Divider,
  Box,
  FormControl,
  InputLabel,
  Card,
  Checkbox,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TableContainer,
  Select,
  MenuItem,
  Typography,
  useTheme,
  CardHeader
} from '@mui/material';

import Label from 'src/components/Label';
import { DepositType, DepositStatus } from 'src/types/deposits';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import BulkActions from './BulkActions';

interface BetsTableProps {
  className?: string;
  deposits: DepositType[];
}

interface Filters {
  status?: DepositStatus;
}

const getStatusLabel = (betStatus: DepositStatus): JSX.Element => {
  const map = {
    failed: {
      text: 'Failed',
      color: 'error'
    },
    completed: {
      text: 'Completed',
      color: 'success'
    },
    pending: {
      text: 'Pending',
      color: 'warning'
    }
  };

  const { text, color }: any = map[betStatus];

  return <Label color={color}>{text}</Label>;
};

const applyFilters = (bets: DepositType[], filters: Filters): DepositType[] => {
  return bets.filter((bet) => {
    let matches = true;

    if (filters.status && bet.status !== filters.status) {
      matches = false;
    }

    return matches;
  });
};

const applyPagination = (
  bets: DepositType[],
  page: number,
  limit: number
): DepositType[] => {
  return bets.slice(page * limit, page * limit + limit);
};

const Deposits: FC<BetsTableProps> = ({ deposits }) => {
  const [selectBet, setSelectedBets] = useState<string[]>([]);
  const selectedBulkActions = selectBet.length > 0;
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(5);
  const [filters, setFilters] = useState<Filters>({
    status: null
  });

  const statusOptions = [
    {
      id: 'all',
      name: 'All'
    },
    {
      id: 'completed',
      name: 'Completed'
    },
    {
      id: 'pending',
      name: 'Pending'
    },
    {
      id: 'failed',
      name: 'Failed'
    }
  ];

  const handleStatusChange = (e: ChangeEvent<HTMLInputElement>): void => {
    let value = null;

    if (e.target.value !== 'all') {
      value = e.target.value;
    }

    setFilters((prevFilters) => ({
      ...prevFilters,
      status: value
    }));
  };

  const handleSelectedAllBets = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setSelectedBets(
      event.target.checked ? deposits.map((deposit) => deposit.id) : []
    );
  };

  const handleSelectOneBet = (
    event: ChangeEvent<HTMLInputElement>,
    depositId: string
  ): void => {
    if (!selectBet.includes(depositId)) {
      setSelectedBets((prevSelected) => [...prevSelected, depositId]);
    } else {
      setSelectedBets((prevSelected) =>
        prevSelected.filter((id) => id !== depositId)
      );
    }
  };

  const handlePageChange = (event: any, newPage: number): void => {
    setPage(newPage);
  };

  const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLimit(parseInt(event.target.value));
  };

  const filteredBets = applyFilters(deposits, filters);
  const paginatedBets = applyPagination(filteredBets, page, limit);
  const selectedSomeBets =
    selectBet.length > 0 && selectBet.length < deposits.length;
  const selectedAllBets = selectBet.length === deposits.length;
  const theme = useTheme();

  return (
    <Card>
      {selectedBulkActions && (
        <Box flex={1} p={2}>
          <BulkActions />
        </Box>
      )}
      {!selectedBulkActions && (
        <CardHeader
          action={
            <Box width={150}>
              <FormControl fullWidth variant="outlined">
                <InputLabel>Status</InputLabel>
                <Select
                  value={filters.status || 'all'}
                  onChange={handleStatusChange}
                  label="Status"
                  autoWidth
                >
                  {statusOptions.map((statusOption) => (
                    <MenuItem key={statusOption.id} value={statusOption.id}>
                      {statusOption.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          }
          title="Bets"
        />
      )}
      <Divider />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  color="primary"
                  checked={selectedAllBets}
                  indeterminate={selectedSomeBets}
                  onChange={handleSelectedAllBets}
                />
              </TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Txn Id</TableCell>
              <TableCell align="right">Source</TableCell>
              <TableCell align="right">Amount</TableCell>

              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedBets.map((deposit) => {
              const isBetSelected = selectBet.includes(deposit.id);
              return (
                <TableRow hover key={deposit.id} selected={isBetSelected}>
                  <TableCell padding="checkbox">
                    <Checkbox
                      color="primary"
                      checked={isBetSelected}
                      onChange={(event: ChangeEvent<HTMLInputElement>) =>
                        handleSelectOneBet(event, deposit.id)
                      }
                      value={isBetSelected}
                    />
                  </TableCell>

                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {deposit.type}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" noWrap>
                      {deposit.date}
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
                      {deposit.transaction_id}
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
                      {deposit.payment_source}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" noWrap>
                      {deposit.mpesa_no}
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
                      {deposit.amount}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    {getStatusLabel(deposit.status)}
                  </TableCell>
                  <TableCell align="right">
                    <Tooltip title="Edit" arrow>
                      <IconButton
                        sx={{
                          '&:hover': {
                            background: theme.colors.primary.lighter
                          },
                          color: theme.palette.primary.main
                        }}
                        color="inherit"
                        size="small"
                      >
                        <EditTwoToneIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete" arrow>
                      <IconButton
                        sx={{
                          '&:hover': { background: theme.colors.error.lighter },
                          color: theme.palette.error.main
                        }}
                        color="inherit"
                        size="small"
                      >
                        <DeleteTwoToneIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Box p={2}>
        <TablePagination
          component="div"
          count={filteredBets.length}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleLimitChange}
          page={page}
          rowsPerPage={limit}
          rowsPerPageOptions={[5, 10, 25, 30]}
        />
      </Box>
    </Card>
  );
};

export default Deposits;
