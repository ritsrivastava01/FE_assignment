import { render, screen } from '@testing-library/react';

import NotFound from '../not-found';

describe('NotFound Component', () => {
  it('should renders the component', () => {
    // Arrange
    render(<NotFound />);

    // Act
    const headingElement = screen.getByTestId('not-found-title');
    const paragraphElement = screen.getByTestId('not-found-message');

    // Assert
    expect(headingElement).toBeInTheDocument();
    expect(paragraphElement).toBeInTheDocument();
  });
});
