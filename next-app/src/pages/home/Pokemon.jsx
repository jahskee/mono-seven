import React from 'react';
import { gql, useQuery } from '@apollo/client';
import T from 'prop-types';

const GET_POKEMON = gql`
  query getPokemon($id: ID!) {
    pokemon(id: $id) {
      id
      name
      url
    }
  }
`;

function Organization({ id, page }) {
  const { loading, error, data } = useQuery(GET_POKEMON, {
    variables: { id },
  });
  if (loading) return <div>Loading...</div>;
  if (error) return `Error! ${error}`;
  return (
    <div>
      {data.pokemon.id}
      {' '}
      {data.pokemon.name}
      {' '}
      {data.pokemon.url}
    </div>
  );
}

Organization.propTypes = {
  id: T.string.isRequired,
};

export default Organization;
