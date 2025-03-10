import { render, screen } from '@testing-library/react';

import Header from './index';

vi.mock('next/image', () => ({
  default: ({ alt }: { alt: string }) => {
    return <div data-testid="mocked-image" aria-label={alt} />;
  },
}));

describe('Header Component', () => {
  it('should render the header', () => {
    // Arrange
    render(<Header />);

    // Act
    const headerElement = screen.getByTestId('header');

    // Assert
    expect(headerElement).toBeInTheDocument();
  });
});
