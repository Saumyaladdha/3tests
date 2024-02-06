import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

test('Footer displays the active todos count', () => {
  render(<Footer count={3} />);
  const countElement = screen.getByText('3 items left');
  expect(countElement).toBeInTheDocument();
});
