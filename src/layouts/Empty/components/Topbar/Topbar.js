import React from 'react';
import Box from '@mui/material/Box';

const Topbar = () => {
  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={1}
      className='topbar-wrapper'
    >
      <a href="http://localhost:3000">
        Exhibitions!
      </a>
    </Box>
  );
};

export default Topbar;
