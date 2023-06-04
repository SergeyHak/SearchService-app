import { render, screen, fireEvent } from "@testing-library/react";
import {InputTest} from "./input";

describe("InputTest", () => {
  it("tests the default props", () => {
    render(
      <InputTest value="" placeholder="Enter text here" onChange={jest.fn()} />
    );
    const input = screen.getByPlaceholderText("Enter text here");
    expect(input).toBeInTheDocument();
  });
});
it('tests the onChange event', () => {
  const handleChange = jest.fn()
  render(<InputTest value='' placeholder='Enter text here' onChange={handleChange} />)
  const input = screen.getByPlaceholderText('Enter text here')
  const value = 'Entered Text'
  fireEvent.change(input, {
      target: {
          value
      }
  })
  expect(handleChange).toHaveBeenCalled()
})