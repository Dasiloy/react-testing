import BaseButton from '.';
import { screen, render } from '@testing-library/react';
test('button test', () => {
  render(<BaseButton />);
  const helloText = screen.getByText(/hello/i);
  expect(helloText).toBeInTheDocument();
});
