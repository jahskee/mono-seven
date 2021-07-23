import React from 'react';
import { Button } from '@material-ui/core';

export default function ButtonX(props) {
  return (
    <Button data-testid="button" {...props} />
  )
}