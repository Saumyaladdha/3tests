import { render, screen, fireEvent } from '@testing-library/react';
import Item from '../components/Item';

test('Item renders with content and can toggle completion', () => {
  const mockToggle = jest.fn();
  render(<Item todo={{ id: 1, completed: false, title: 'Test Todo' }} onToggle={mockToggle} />);
  
  const itemElement = screen.getByText('Test Todo');
  expect(itemElement).toBeInTheDocument();
  
  fireEvent.click(itemElement);
  expect(mockToggle).toHaveBeenCalledWith(1);
});
