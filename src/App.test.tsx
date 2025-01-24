
import { render, screen } from '@testing-library/react';
import App from './App';


describe('App', () => {
  it('renders hello message', () => {
    render(<App />);
    const headingElement = screen.getByText(/hello, react!/i);
    expect(headingElement).toBeInTheDocument();
  });
});
