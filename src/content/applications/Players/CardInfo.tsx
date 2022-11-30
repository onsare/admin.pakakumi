import React from 'react';
import { Card, CardContent, Grid, Typography, Avatar } from '@mui/material';
import PeopleIcon from '@mui/icons-material/PeopleOutlined';
import { AccountBalanceWalletOutlined } from '@mui/icons-material';

const CardInfo = (props) => {
  return (
    <Card>
      <Card {...props}>
        <CardContent>
          <Grid container spacing={3} sx={{ justifyContent: 'space-between' }}>
            <Grid item>
              <Typography color="textPrimary" variant="h4">
                KES {props.amount}
              </Typography>
              <Typography color="textSecondary" gutterBottom variant="overline">
                {props.title}
              </Typography>
            </Grid>
            <Grid item>
              <Avatar
                sx={{
                  backgroundColor: 'success.main',
                  height: 56,
                  width: 56
                }}
              >
                <AccountBalanceWalletOutlined />
              </Avatar>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Card>
  );
};

export default CardInfo;
