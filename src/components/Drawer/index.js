import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import AppBar from './AppBar';
import Drawer, { DrawerHeader } from './Drawer';
import EventIcon from '@mui/icons-material/Event';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import PeopleIcon from '@mui/icons-material/People';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const LIST_ITEMS = [
  {
    label: '預約',
    icon: <EventIcon />,
  },
  {
    label: '課程',
    icon: <ImportContactsIcon />,
  },
  {
    label: '會員',
    icon: <PeopleIcon />,
  },
  {
    label: '報表',
    icon: <AttachMoneyIcon />,
  },
]
export default function MiniDrawer({ children}) {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar open={open} handleDrawerOpen={handleDrawerOpen}>
        預約小幫手
      </AppBar>
      <Drawer open={open} handleDrawerClose={handleDrawerClose} items={LIST_ITEMS} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
}
