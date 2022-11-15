import { EmbedContainer } from 'components/Container';
import React from 'react';
import { descriptions } from 'utils/menuLinks';

const MetaRadioPage: React.FC = () => (
  <EmbedContainer
    title="MetaRadio by MetaFam"
    description={descriptions.metaradio}
    url="https://anchor.fm/MetaGame/"
  />
);

export default MetaRadioPage;
