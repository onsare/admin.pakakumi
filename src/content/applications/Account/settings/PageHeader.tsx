import { Typography } from '@mui/material';

function PageHeader() {
  const user = {
    name: 'Denis Onsare',
    avatar: '/static/images/avatars/3.jpg'
  };

  return (
    <>
      <Typography variant="h3" component="h3" gutterBottom>
        User Settings
      </Typography>
      <Typography variant="subtitle2">
        {user.name}, this could be your user settings panel.
      </Typography>
    </>
  );
}

export default PageHeader;
