import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Page from '../components/Page';

import 'react-lazy-load-image-component/src/effects/blur.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';

import 'scss/react-images.scss';
import 'scss/slick-slider.scss';
import 'scss/common.scss'
import 'scss/manager.scss'

export default function App({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>Exhibition List</title>
        <meta
          name="description"
          content="Show Exhibitions listed on Artic Edu"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <Page>
        <Component {...pageProps} />
      </Page>
    </React.Fragment>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
