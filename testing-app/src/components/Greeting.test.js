import { render, screen, not } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
// import { fireEvent } from "@testing-library/react";
import Greeting from "./Greeting"

//For grouping & organization making sure this is clear what were testing geeting cmp
describe('Greeting component', () => {

    test('renders hello world as text', () => {

        //Arrange
        render(<Greeting />);
        //Act
        const helloWorldElement = screen.getByText('Hello world!', { exact: false });
        //Assert
        expect(helloWorldElement).toBeInTheDocument();

    })


    test('default correct text in p ', () => {

        //Arrange
        render(<Greeting />);
        //Act
        const pElement = screen.getByText('Its good to see you');
        //Assert
        expect(pElement).toBeInTheDocument();

    })

    test('clicked correct text in p', () => {

        //Arrange
        render(<Greeting />);

        //Act
        userEvent.click(screen.getByRole('button'));

        // Simulate.click(button)

        const pElement = screen.getByText('Changed!');
        // //Assert
        expect(pElement).toBeInTheDocument();

    })

    test('clicked correct !text in p', () => {

        //Arrange
        render(<Greeting />);

        //Act
        userEvent.click(screen.getByRole('button'));

        // Simulate.click(button)

        const pElement = screen.queryByText('Changed!', { exact: false }); // returns null if not found
        // //Assert
        // expect(pElement).not.toBeInTheDocument();

        expect(pElement).toBe(null);

    })
    // test()
    // test()
}


);

