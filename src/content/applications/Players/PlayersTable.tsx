import { FC, ChangeEvent, useState } from 'react';
import { format } from 'date-fns';
import numeral from 'numeral';
import PropTypes from 'prop-types';
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
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import BulkActions from './BulkActions';
import { ViewAgendaTwoTone } from '@mui/icons-material';
import { Link } from 'react-router-dom';

interface RecentOrdersTableProps {
  className?: string;
  players: any[];
}

interface Filters {
  status?: string;
}

const getStatusLabel = (playerStatus: string): JSX.Element => {
  const map = {
    suspended: {
      text: 'Suspended',
      color: 'error'
    },
    active: {
      text: 'Active',
      color: 'success'
    },
    pending: {
      text: 'Pending',
      color: 'warning'
    }
  };

  const { text, color }: any = map[playerStatus];

  return <Label color={color}>{text}</Label>;
};

const applyFilters = (players: any[], filters: Filters): any[] => {
  return players.filter((player) => {
    let matches = true;

    if (filters.status && player.status !== filters.status) {
      matches = false;
    }

    return matches;
  });
};

const applyPagination = (
  players: any[],
  page: number,
  limit: number
): any[] => {
  return players.slice(page * limit, page * limit + limit);
};

const PlayersTable: FC<RecentOrdersTableProps> = ({ players }) => {
  const [selectedPlayers, setSelectedCryptoOrders] = useState<string[]>([]);
  const selectedBulkActions = selectedPlayers.length > 0;
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
      id: 'active',
      name: 'Active'
    },
    {
      id: 'pending',
      name: 'Pending'
    },
    {
      id: 'suspended',
      name: 'Suspended'
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

  const handleSelectedAllPlayers = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setSelectedCryptoOrders(
      event.target.checked ? players.map((player) => player.id) : []
    );
  };

  const handleSelectOneCryptoOrder = (
    event: ChangeEvent<HTMLInputElement>,
    cryptoOrderId: string
  ): void => {
    if (!selectedPlayers.includes(cryptoOrderId)) {
      setSelectedCryptoOrders((prevSelected) => [
        ...prevSelected,
        cryptoOrderId
      ]);
    } else {
      setSelectedCryptoOrders((prevSelected) =>
        prevSelected.filter((id) => id !== cryptoOrderId)
      );
    }
  };

  const handlePageChange = (event: any, newPage: number): void => {
    setPage(newPage);
  };

  const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLimit(parseInt(event.target.value));
  };

  const filteredCryptoOrders = applyFilters(players, filters);
  const paginatedPlayers = applyPagination(filteredCryptoOrders, page, limit);
  const selectedSomePlayers =
    selectedPlayers.length > 0 && selectedPlayers.length < players.length;
  const selectedAllPlayers = selectedPlayers.length === players.length;
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
          title="Players"
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
                  checked={selectedAllPlayers}
                  indeterminate={selectedSomePlayers}
                  onChange={handleSelectedAllPlayers}
                />
              </TableCell>
              <TableCell>ID</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Joined</TableCell>
              <TableCell>Bets</TableCell>
              <TableCell>Won</TableCell>
              <TableCell align="right">Amount</TableCell>

              <TableCell align="right">Payout</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedPlayers.map((player) => {
              const isPlayerSelected = selectedPlayers.includes(player.id);
              return (
                <TableRow hover key={player.id} selected={isPlayerSelected}>
                  <TableCell padding="checkbox">
                    <Checkbox
                      color="primary"
                      checked={isPlayerSelected}
                      onChange={(event: ChangeEvent<HTMLInputElement>) =>
                        handleSelectOneCryptoOrder(event, player.id)
                      }
                      value={isPlayerSelected}
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
                      {player.id}
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
                      {player.phone}
                    </Typography>
                    {/* <Typography variant="body2" color="text.secondary" noWrap>
                      {player.orderDate}
                    </Typography> */}
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {player.joined}
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
                      {player.bets}
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
                      {player.won}
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
                      {player.amount.toFixed(2)}
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
                      {player.payout.toFixed(2)}
                    </Typography>
                  </TableCell>

                  <TableCell align="right">
                    {getStatusLabel(player.status)}
                  </TableCell>
                  <TableCell align="right">
                    <Tooltip title="Manage Player" arrow>
                      <Link to={`/management/player/${player.id}`}>
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
                          <ViewAgendaTwoTone fontSize="small" />
                        </IconButton>
                      </Link>
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
          count={filteredCryptoOrders.length}
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

PlayersTable.propTypes = {
  players: PropTypes.array.isRequired
};

PlayersTable.defaultProps = {
  players: []
};

export default PlayersTable;
