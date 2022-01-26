import React from 'react';
import PropTypes from 'prop-types';
import { Box, Divider, useScrollTrigger, AppBar, Slide } from '@mui/material';
import { Topbar } from './components';

const HideOnScroll = ({ children }) => {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

HideOnScroll.propTypes = {
  children: PropTypes.node.isRequired,
};

const Empty = ({ children }) => {
  return (
    <Box>
      <AppBar
        position={'fixed'}
        sx={{
          backgroundColor: 'white', //theme.palette.mode === 'light' ? '#d6daff' : '#3b4972',
          boxShadow: 'none !important'
        }}
        elevation={1}
      >
        <Topbar />
      </AppBar>
      <main style={{minHeight: 'calc(100vh)', paddingTop: '64px'}}>
        {children}
      </main>
    </Box>
  );
};

Empty.propTypes = {
  children: PropTypes.node,
};

export default Empty;
