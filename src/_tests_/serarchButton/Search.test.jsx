import { SearchButton } from "./seaechButton";
import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

const dataTestId = "test-id";

describe("<SearchButton/>", () => {  

  describe("Attributes tests", () => {
    it('should set type="button" by default', () => {
      render(<SearchButton />);
      expect(screen.getByRole("button")).toHaveAttribute("type", "button");
    });
  });
  it("should set type attribute", () => {
    const type = "submit";
    render(<SearchButton type={type} />);

    expect(screen.getByRole("button")).toHaveAttribute("type", type);
  });

  describe("Callbacks tests", () => {
    it("should call 'onClick' prop", () => {
      const cb = jest.fn();

      render(<SearchButton onClick={cb} dataTestId={dataTestId} />);

      fireEvent.click(screen.getByTestId(dataTestId));

      expect(cb).toBeCalledWith({ name: "Name" });
    });
  });
});
