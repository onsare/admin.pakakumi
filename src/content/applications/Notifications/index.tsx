import { useState, ChangeEvent } from 'react';
import { Helmet } from 'react-helmet-async';

import { Container, Tabs, Tab, Grid } from '@mui/material';
import Footer from 'src/components/Footer';
import { styled } from '@mui/material/styles';

const TabsWrapper = styled(Tabs)(
  () => `
    .MuiTabs-scrollableX {
      overflow-x: auto !important;
    }
`
);

function Notifications() {
  const [currentTab, setCurrentTab] = useState<string>('deposits');

  const tabs = [
    { value: 'deposits', label: 'Deposits' },
    { value: 'withdrawals', label: 'Withdrawals' }
  ];

  const handleTabsChange = (event: ChangeEvent<{}>, value: string): void => {
    setCurrentTab(value);
  };

  return (
    <>
      <Helmet>
        <title>Notifications - Accounts</title>
      </Helmet>

      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} mt={3}>
            <TabsWrapper
              onChange={handleTabsChange}
              value={currentTab}
              variant="scrollable"
              scrollButtons="auto"
              textColor="primary"
              indicatorColor="primary"
            >
              {tabs.map((tab) => (
                <Tab key={tab.value} label={tab.label} value={tab.value} />
              ))}
            </TabsWrapper>
          </Grid>
          <Grid item xs={12}>
            {currentTab === 'deposits' && <>Deposits</>}
            {currentTab === 'withdrawals' && <>Withdrawals</>}
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default Notifications;
