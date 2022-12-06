import React, { useState } from 'react';

import {
  Select,
  FormControl,
  MenuItem,
  InputLabel,
  makeStyles,
  Box,
  Card,
  TableContainer,
  Typography,
  Button
} from '@mui/material';

export default function Filter() {
  const [filter, setFilter] = React.useState('');
  const [timeInterval, setTimeInterval] = useState('time_interval');
  const [groupBy, setGroupBy] = useState('month');
  const [periodic, setPeriodic] = useState('yes');

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div>
      <TableContainer>
        <Card>
          <Box
            sx={{
              p: 3
            }}
          >
            <Box display="flex" alignItems="center">
              <Box>
                <Typography variant="h4" noWrap>
                  Filters
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              p: 3
            }}
          >
            <FormControl style={{ width: 250 }}>
              <InputLabel id="demo-simple-select-label">
                Time Interval
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={timeInterval}
                label="Time Interval"
                onChange={() => {}}
              >
                <MenuItem value={'time_interval'}>Time Interval</MenuItem>
              </Select>
            </FormControl>
            <FormControl style={{ width: 250 }}>
              <InputLabel id="demo-simple-select-label">Group By</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={groupBy}
                label="Time Interval"
                onChange={() => {}}
              >
                <MenuItem value={'month'}>month</MenuItem>
                <MenuItem value={'year'}>year</MenuItem>
              </Select>
            </FormControl>
            <FormControl style={{ width: 250 }}>
              <InputLabel id="demo-simple-select-label">Periodic</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={periodic}
                label="Time Interval"
                onChange={() => {}}
              >
                <MenuItem value={'yes'}>Yes</MenuItem>
                <MenuItem value={'no'}>No</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box
            sx={{
              p: 3
            }}
          >
            <Button
              size="medium"
              variant="contained"
              style={{ width: '100%', marginTop: 5 }}
            >
              APPLY
            </Button>
          </Box>
        </Card>
      </TableContainer>
    </div>
  );
}
