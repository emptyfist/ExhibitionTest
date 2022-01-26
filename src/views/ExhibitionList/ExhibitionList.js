import _ from 'lodash';
import React, { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import Empty from 'layouts/Empty';
import { apiService } from 'services';
import { Item, ItemLoading } from './components';

const ExhibitionList = () => {
  const isMounted = useRef(true);

  const [lists, setLists] = useState([]);
  const [pageInfo, setPageInfo] = useState({page: 1, total: 1});
  const [isLoading, setIsLoading] = useState(true);

  const getExhibitionsFromServer = (page) => {
    return apiService.getExhibitions(page)
    .then((response) => {
      if (response.status !== 'ok') {
        toast.error(data.msg)
        return null;
      }

      return response.data;
    }).catch(err => {
      toast.error(err.detail);
      return null;
    });
  }

  useEffect(async () => {
    let retVal = await getExhibitionsFromServer(pageInfo.page);

    if (isMounted.current) {
      if (retVal === null) {
        setIsLoading(false);
        return;
      }

      const {data, pagination} = retVal;
      console.log(pagination);
      setLists(data);
      setIsLoading(false);
      setPageInfo({page: pagination.current_page, total: pagination.total_pages});
    }

    return () => isMounted.current = false;
  }, []);

  return (
    <Box sx={{ overflowX: 'hidden' }}>
      <Empty>
        <Box className='exhibition-list-wrapper'>
          {_.map(lists, itm => (
            <Item key={itm.id} data={itm} />
          ))}
          {isLoading && 
            Array.from({length: 10}, (_, i) => i).map(itm => (
              <ItemLoading key={itm} />
            ))
          }
        </Box>
      </Empty>
    </Box>
  );
};

export default ExhibitionList;
