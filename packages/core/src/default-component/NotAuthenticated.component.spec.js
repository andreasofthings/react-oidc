import * as React from 'react';
import { render } from '@testing-library/react';
import Component from './NotAuthenticated.component';

describe('Not Authenticated test suite', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<Component />);
    expect(asFragment()).toMatchSnapshot();
  });
});
