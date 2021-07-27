
import React, { useEffect } from 'react';
import { usePageInfo } from './appState';
import {render, fireEvent, waitFor, within, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'

afterEach(()=>{
  cleanup();
  jest.resetAllMocks();
});
describe("usePageHook with pageInfo and setPageInfo value.", ()=>{
  const Test = ({selectedPage, limit, pageCount}) => {
    const { pageInfo, setPageInfo } = usePageInfo()
    useEffect(()=>{
      setPageInfo({ selectedPage, limit, pageCount } );
    },[])
    return (<div data-testid="test">{pageInfo.selectedPage + ", " + pageInfo.limit + ", " + pageInfo.pageCount}</div>)
  }

  it("test pageInfo and setPageInfo when {selectedPage: 1, limit: 20, pageCount: 34}", ()=>{
    const params={selectedPage: 1, limit: 20, pageCount: 34}
    const { getByTestId} = render(<Test {...params} />)
    const { getByText } = within(getByTestId('test'))
    expect(getByText('1, 20, 34')).toBeInTheDocument()
  })

  it("test pageInfo and setPageInfo when {selectedPage: 10, limit: 10, pageCount: 10}", ()=>{
    const params={selectedPage: 10, limit: 10, pageCount: 10}
    const { getByTestId} = render(<Test {...params} />)
    const { getByText } = within(getByTestId('test'))
    expect(getByText('10, 10, 10')).toBeInTheDocument()
  })

})