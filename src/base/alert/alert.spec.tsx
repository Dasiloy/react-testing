import { render, screen } from '@testing-library/react';
import Alert from '.';

describe('Alert', () => {
  it('renders correctly', () => {
    render(<Alert />);
    const alert = screen.getByText(/info alert/i);
    expect(alert).toBeInTheDocument();
  });

  it('renders success', () => {
    render(<Alert variant="success" />);
    const alert = screen.getByText(/success alert/i);
    expect(alert).toBeInTheDocument();
  });

  it('renders danger', () => {
    render(<Alert variant="error" />);
    const alert = screen.getByText(/error alert/i);
    expect(alert).toBeInTheDocument();
  });
});
