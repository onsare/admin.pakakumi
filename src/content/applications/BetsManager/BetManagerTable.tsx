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
import { BetType, BetStatus } from 'src/types/bets';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { ViewAgendaTwoTone } from '@mui/icons-material';
import BulkActions from './BulkActions';
import { Link } from 'react-router-dom';

interface BetsTableProps {
  className?: string;
  bets: BetType[];
}

interface Filters {
  status?: BetStatus;
}

const getStatusLabel = (betStatus: BetStatus): JSX.Element => {
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

const applyFilters = (bets: BetType[], filters: Filters): BetType[] => {
  return bets.filter((bet) => {
    let matches = true;

    if (filters.status && bet.status !== filters.status) {
      matches = false;
    }

    return matches;
  });
};

const applyPagination = (
  bets: BetType[],
  page: number,
  limit: number
): BetType[] => {
  return bets.slice(page * limit, page * limit + limit);
};

const BetsTableManager: FC<BetsTableProps> = ({ bets }) => {
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
    setSelectedBets(event.target.checked ? bets.map((bet) => bet.id) : []);
  };

  const handleSelectOneBet = (
    event: ChangeEvent<HTMLInputElement>,
    betId: string
  ): void => {
    if (!selectBet.includes(betId)) {
      setSelectedBets((prevSelected) => [...prevSelected, betId]);
    } else {
      setSelectedBets((prevSelected) =>
        prevSelected.filter((id) => id !== betId)
      );
    }
  };

  const handlePageChange = (event: any, newPage: number): void => {
    setPage(newPage);
  };

  const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLimit(parseInt(event.target.value));
  };

  const filteredBets = applyFilters(bets, filters);
  const paginatedBets = applyPagination(filteredBets, page, limit);
  const selectedSomeBets =
    selectBet.length > 0 && selectBet.length < bets.length;
  const selectedAllBets = selectBet.length === bets.length;
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
          title="Bet VUVX70"
        />
      )}
      <Divider />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Event</TableCell>
              <TableCell>Competition</TableCell>
              <TableCell align="right">Odd</TableCell>
              <TableCell align="right">Pick</TableCell>
              <TableCell align="right">Outcome</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedBets.map((bet) => {
              const isBetSelected = selectBet.includes(bet.id);
              return (
                <TableRow hover key={bet.id} selected={isBetSelected}>
                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      France vs. Germany
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
                      World Cup
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
                      1.34
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
                      France
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
                      Lost
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    {getStatusLabel(bet.status)}
                  </TableCell>

                  <TableCell align="right">
                    <Tooltip title="Manage" arrow>
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

export default BetsTableManager;
