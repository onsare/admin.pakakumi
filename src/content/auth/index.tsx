import { Box, Container, Card } from '@mui/material';
import { Helmet } from 'react-helmet-async';

import { styled } from '@mui/material/styles';
import Logo from 'src/components/LogoSign';
import Hero from './Hero';

const OverviewWrapper = styled(Box)(
  () => `
    overflow: auto;
    flex: 1;
    overflow-x: hidden;
    align-items: center;
`
);

const MuiAvatar = styled(Box)(
  ({ theme }) => `
  
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 180px;
    
      display: block;
    }
`
);

function Overview() {
  return (
    <OverviewWrapper>
      <Helmet>
        <title>Login | Pakakumi Admin Dashboard</title>
      </Helmet>
      <Container maxWidth="sm">
        <Box display="flex" justifyContent="center" py={5} alignItems="center">
          <MuiAvatar>
            <img src="https://pakakumi.com/assets//images//logo.png" />
          </MuiAvatar>
        </Box>
        <Card sx={{ p: 1, mb: 10, borderRadius: 1 }}>
          <Hero />
        </Card>
      </Container>
    </OverviewWrapper>
  );
}

export default Overview;
