import {
  Modal,
  Container,
  Card,
  Grid,
  Box,
  Typography,
  TextField,
  Button
} from '@mui/material';

interface Props {
  confirm: boolean;
  setConfirm: (a) => void;
}

const ConfirmPrompt = ({ confirm, setConfirm }) => {
  const handleClose = () => {
    setConfirm(false);
  };

  return (
    <Modal
      open={confirm}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Container maxWidth="sm">
        <Card sx={{ p: 3, mb: 10, mt: 10, borderRadius: 1 }}>
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
              <Typography id="modal-modal-title" variant="h4" component="h2">
                Are you sure you want to deactivate this user ?
              </Typography>
              <div
                style={{
                  display: 'flex',
                  width: 250,
                  justifyContent: 'space-between',
                  marginTop: 15
                }}
              >
                <Box>
                  <Button
                    size="large"
                    variant="contained"
                    style={{ width: '100%' }}
                    onClick={handleClose}
                  >
                    Cancel
                  </Button>
                </Box>
                <Box>
                  <Button
                    size="large"
                    variant="contained"
                    style={{ width: '100%', background: 'red' }}
                  >
                    Deactivate
                  </Button>
                </Box>
              </div>
            </Box>
          </Grid>
        </Card>
      </Container>
    </Modal>
  );
};

export default ConfirmPrompt;
