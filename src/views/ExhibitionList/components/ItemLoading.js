/* eslint-disable react/no-unescaped-entities */
import _ from 'lodash';
import clsx from 'clsx';
import React from 'react';
import {Box, Skeleton} from '@mui/material';

export default function ItemLoading() {
  return (
    <Box 
      className={clsx('research-content-item', 'box-wrapper-shadow')}
      sx={{padding:'1rem'}}
    >
      <Box className='profile'>
        <Skeleton width={'100%'} height={'10rem'} sx={{transform:'unset'}}/>
      </Box>
      <Box className='followers'>
        <Box className='first'>
          <Skeleton width={'100%'} height={20} sx={{transform: 'unset'}}/>
        </Box>
        <Box className='second'>
          <Skeleton width={'100%'} height={20} sx={{transform: 'unset'}}/>
        </Box>
      </Box>
    </Box>
  );
};
