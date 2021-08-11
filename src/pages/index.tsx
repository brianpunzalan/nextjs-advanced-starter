import React from 'react';
import PropTypes from 'prop-types';
import { GetServerSideProps, NextPage } from 'next';
import DefaultLayout from '../layouts/DefaultLayout';
import Providers from '../containers/Providers';
import { RootState } from '../redux/reducers';
import { initializeStore } from '../redux/stores';
import Page from '../types/Page';
import Button from '../components/Button';

interface Props {
  page: Page;
}

interface ServerSideProps {
  props: Props;
}

const HomePage: NextPage<Props> = (props) => {
  const { page } = props;
  return (
    <Providers page={page}>
      <DefaultLayout>
        <Button variant="contained" color="primary">
          Click me
        </Button>
      </DefaultLayout>
    </Providers>
  );
};

export const getServerSideProps: GetServerSideProps = () => {
  const reduxStore = initializeStore();
  const initialStore = reduxStore.getState() as RootState;

  const serverSideProps: ServerSideProps = {
    props: {
      page: {
        initialStore,
      },
    },
  };

  return Promise.resolve(serverSideProps);
};

HomePage.propTypes = {
  page: PropTypes.any.isRequired,
};

export default HomePage;
