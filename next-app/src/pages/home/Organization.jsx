import React from 'react';
import { gql, useQuery } from '@apollo/client';
import T from 'prop-types';

const GET_ORGANIZATION = gql`
  query getOrganization($id: ID!) {
    organization(id: $id) {
      id
      name
      fieldCount
      farmCount
    }
  }
`;

function Organization({ id, page }) {
  const { loading, error, data } = useQuery(GET_ORGANIZATION, {
    variables: { id },
  });
  if (loading) return <div>Loading...</div>;
  if (error) return `Error! ${error}`;
  return (
    <div>
      {data.organization.id}
      {' '}
      {data.organization.name}
      {' '}
      {data.organization.fieldCount}
      {' '}
      {data.organization.farmCount}
    </div>
  );
}

Organization.propTypes = {
  id: T.string.isRequired,
};

export default Organization;
