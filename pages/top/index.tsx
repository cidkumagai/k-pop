import Head from 'next/head';

import { useGetAllOffices } from '../../lib/queris/getOffices';

import { ErrorMsg } from '../../components/ErrorMsg';
import { Loading } from '../../components/Loading';
import { OfficeList } from '../../components/OfficeList';
import { useAppDispatch } from '../../lib/app/hooks';
import { addOfficeData } from '../../lib/slice';
import { useEffect } from 'react';

export { Top as default };

const Top = () => {
  const pageTitle = 'Top';
  const { data, loading, error } = useGetAllOffices();
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (data) {
      dispatch(addOfficeData(data.allOffices));
    }
  }, [data]);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <ErrorMsg message={error.message} />;
  }
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <OfficeList />
    </>
  );
};
