import {
  GetPlayerLinksQuery,
  GetPlayerLinksQueryVariables,
} from 'graphql/autogen/types';

import { client } from '../client';

const getPlayerLinksQuery = /* GraphQL */ `
  query GetPlayerLinks($playerId: uuid!) {
    link(where: { playerId: { _eq: $playerId } }) {
      id
      name
      type
      url
    }
  }
`;

// questchainId returns as a string `{questchain.address}-{questchain.title}`
const getPlayerPinnedQuestchainsQuery = /* GraphQL */ `
  query GetPlayerPinnedQuestchains($playerId: uuid!) {
    pinned_questchains(where: { player_id: { _eq: $playerId } }) {
      id
      questchain_id
    }
  }
`

export const getPlayerLinks = async (playerId: string) => {
  if (!playerId) throw new Error('Missing Player Id');
  const { data } = await client
    .query<GetPlayerLinksQuery, GetPlayerLinksQueryVariables>(
      getPlayerLinksQuery,
      { playerId },
    )
    .toPromise();
  return data;
};

export const getPlayerPinnedQuestchains = async (playerId: string) => {
  if (!playerId) throw new Error('Missing Player Id');
  const { data } = await client
    .query<GetPlayerLinksQuery, GetPlayerLinksQueryVariables>(
      getPlayerPinnedQuestchainsQuery,
      { playerId },
    )
    .toPromise();
  return data;
};
