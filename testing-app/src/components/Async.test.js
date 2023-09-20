import { render, screen,window } from '@testing-library/react';
import Async from './Async';

describe('Async component', () => {
    test('renders posts if request succeeds', async () => {
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
          json: async () => [{ id: 'p1', title: 'First post' }],
        });
        //mocking fetch
        //Arrange
        render(<Async />);
        //Act
        //nothing
        //Assert
        const listItemElements = await screen.findAllByRole('listitem', {}, { timeout: 1000 } );
        expect(listItemElements).not.toHaveLength(0);
    });
})