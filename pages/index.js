import Head from 'next/head';
import { SliceZone } from '@prismicio/react';
import * as prismicH from '@prismicio/helpers';

import { createClient } from '../prismicio';
import { components } from '../slices/';
import { Layout } from '../components/Layout';
import { mapPageSeo } from '../utils/mappers.ts';

const Index = ({ page, navigation, settings }) => {
  console.log('domain', settings.data);
  return (
    <Layout navigation={navigation} settings={mapPageSeo(page, settings)}>
      <SliceZone slices={page.data.slices} components={components} />
    </Layout>
  );
};

export default Index;

export async function getStaticProps({ locale, previewData }) {
  const client = createClient({ previewData });

  const page = await client.getByUID('page', 'home', { lang: locale });
  const navigation = await client.getSingle('navigation', { lang: locale });
  const settings = await client.getSingle('settings', { lang: locale });

  return {
    props: {
      page,
      navigation,
      settings,
    },
  };
}
