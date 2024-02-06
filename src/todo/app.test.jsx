import { render, screen } from '@testing-library/react';
import App from '../app';

test('App renders and displays the main heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/todos/i);
  expect(headingElement).toBeInTheDocument();
});
