import { render, screen, waitFor } from "@testing-library/react";
import TestingAPICalls from "./TestingAPICalls";
import * as services from "./request";

test("Fetch Data API called", async () => {
  const mockFetchData = jest
    .spyOn(services, "FetchData")
    .mockImplementation(async () => {
      return [
        {
          name: "SergeyHak",
        },
      ];
    });

  render(<TestingAPICalls />);
  expect(mockFetchData).toHaveBeenCalled();
  await waitFor(() => {
    expect(screen.getByText(/SergeyHak/i)).toBeInTheDocument();
  });
});
