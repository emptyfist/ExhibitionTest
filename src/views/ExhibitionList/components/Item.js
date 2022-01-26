/* eslint-disable react/no-unescaped-entities */
import _ from 'lodash';
import moment from 'moment';
import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import RelativeImage from 'components/RelativeImage';

export default function Item({data}) {
  return (
    <Box 
      className={clsx('research-content-item', 'box-wrapper-shadow')}
      sx={{padding: '1rem'}}
      >
      <Box className='profile'>
        <RelativeImage
          imgSrc={data.image_url}
          sx={{width: '100% !important', height: '10rem !important'}}
        />
      </Box>
      <Box className='followers'>
        <Box className='first' sx={{marginBottom: '1rem'}}>
          {data.title}
        </Box>
        <Box className='second'>
          {moment(data.aic_start_at).format('DD.MM.YYYY')} - {moment(data.aic_end_at).format('DD.MM.YYYY')}
        </Box>
      </Box>
    </Box>
  );
};

Item.propTypes = {
  data: PropTypes.object.isRequired,
};