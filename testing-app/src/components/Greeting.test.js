import { render, screen } from "@testing-library/react";
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

    }



    )


)