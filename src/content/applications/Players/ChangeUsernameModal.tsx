import { useState, FC } from 'react';
import {
  Grid,
  Box,
  Typography,
  TextField,
  Button,
  Card,
  Container
} from '@mui/material';
import Modal from '@mui/material/Modal';

interface Props {
  open: boolean;
  setIsOpen: (m) => void;
}

const ChangeUsernameModal: FC<Props> = ({ open, setIsOpen }) => {
  const handleClose = () => {
    console.log('change username');
    setIsOpen(false);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Container maxWidth="sm">
        <Card sx={{ p: 1, mb: 10, mt: 10, borderRadius: 1 }}>
          <Grid item>
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '100%' }
              }}
              noValidate
              autoComplete="off"
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Change Username
              </Typography>

              <TextField
                id="outlined-text-input"
                label="Username"
                type="text"
              />

              <Button
                size="large"
                variant="contained"
                style={{ width: '100%' }}
              >
                Change
              </Button>
            </Box>
          </Grid>
        </Card>
      </Container>
    </Modal>
  );
};

export default ChangeUsernameModal;
