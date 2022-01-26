import _ from 'lodash';
import moment from 'moment';
import React from 'react';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import LeftIcon from '@mui/icons-material/ArrowLeft';
import Empty from 'layouts/Empty';
import RelativeImage from 'components/RelativeImage';

const ExhibitionDetail = ({info}) => {
  return (
    <Box sx={{ overflowX: 'hidden' }}>
      <Empty>
        <Box className='exhibition-detail-wrapper'>
          <NextLink href="/" passHref replace>
            <Box component="a" className="back-to-list">
              <LeftIcon />Back
            </Box>
          </NextLink>
          {info && 
            <>
              <Box className='content-wrapper end'>
                <Typography variant="h4" component={'h4'}>{info.title}</Typography>
                <Typography className='date'>{moment(info.aic_start_at).format('DD.MM.YYYY')} - {moment(info.aic_end_at).format('DD.MM.YYYY')}</Typography>
              </Box>
              <Box className='content-wrapper start'>
                <Box className='image-wrapper'>
                  <RelativeImage
                    imgSrc={info.image_url}
                    sx={{height: '260px !important'}}
                  />
                </Box>
                <Typography sx={{marginLeft: '2rem'}}>
                  {info.description??(info.short_description??info.title)}
                </Typography>
              </Box>
            </>
          }
        </Box>
      </Empty>
    </Box>
  );
};

ExhibitionDetail.propTypes = {
  info: PropTypes.object,
};

export default ExhibitionDetail;