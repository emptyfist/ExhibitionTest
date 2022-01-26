import React from 'react';
import { fetchWrapper } from 'helpers';
import getConfig from 'next/config';
import { ExhibitionDetail } from 'views/ExhibitionList';
const {publicRuntimeConfig} = getConfig();
const baseUrl = `${publicRuntimeConfig.artUrl}`;

const DetailPage = ({data}) => {
  return <ExhibitionDetail info={data} />
};

export async function getServerSideProps(context) {
  const {id} = context.query;

  let retVal = await fetchWrapper.get(`${baseUrl}/${id}`).then(response => {
    return response;
  }).catch(e=>{
    return null;
  });  

  if (retVal === null)
    return {props: {data: null}};

  return {props: {data: retVal.data}};
}

export default DetailPage;