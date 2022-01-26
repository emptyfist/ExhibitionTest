import _ from 'lodash';
import { apiHandler } from 'middlewares';
import { fetchWrapper } from 'helpers';
import getConfig from 'next/config';
import Constants from 'constants/constants';
import Lang from 'constants/lang';
const {publicRuntimeConfig} = getConfig();
const baseUrl = `${publicRuntimeConfig.artUrl}`;

export default apiHandler(handler);

async function handler(req, res) {
  switch (req.method) {
    case 'POST':
      return await getListFromArt();
    default:
      throw {status: Constants.errors.badrequest, message: Lang.communcation_errs.e001};
  }

  async function getListFromArt() {
    const { page } = req.body;
    let lists = [];

    await fetchWrapper.get(`${baseUrl}?page=${page}`).then(response => {
      lists = response;
    }).catch(e=>{
      return res.status(200).json({
        status: 'no',
        msg: e.detail
      });  
    });  

    return res.status(200).json({
      status: 'ok',
      data: lists
    });  
  }
}
