import React from 'react';
import { render } from '@testing-library/react';

import Header from '../header';

describe(`Header`, () => {
  it(`renders menu`, () => {
    const siteTitle = `Hello World`;
    const { getByText } = render(<Header siteTitle={siteTitle} />);
    expect(getByText('所有产品')).toBeInTheDocument();
    expect(getByText('生态')).toBeInTheDocument();
  });
});
