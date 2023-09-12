import { render, screen } from '@testing-library/react';
//impor for testing
import App from './App';
//@param description, anonymous function
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i); //regex
  expect(linkElement).toBeInTheDocument(); //is in doc
});
