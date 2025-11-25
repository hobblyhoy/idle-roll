import { act, screen } from "@testing-library/react"
import { vi } from "vitest"
import { App } from "./App"
import { renderWithProviders } from "./utils/test-utils"

test("App should have correct initial render", () => {
  renderWithProviders(<App />)

  const rollButton = screen.getByRole<HTMLButtonElement>("button", {
    name: /roll the d6/i,
  })
  const countLabel = screen.getByLabelText<HTMLLabelElement>("Count")
  const incrementValueInput = screen.getByLabelText<HTMLInputElement>(
    "Set increment amount",
  )

  expect(
    screen.getByRole("heading", { name: /roll the free d6/i }),
  ).toBeInTheDocument()
  expect(rollButton).toBeEnabled()
  expect(screen.getByText(/hit a 6 to earn \$0\.01/i)).toBeInTheDocument()
  expect(countLabel).toHaveTextContent("0")
  expect(incrementValueInput).toHaveValue(2)
})

test("Dice roller should roll and record history", async () => {
  const { user } = renderWithProviders(<App />)
  const rollButton = screen.getByRole<HTMLButtonElement>("button", {
    name: /roll the d6/i,
  })
  const dieValue = screen.getByLabelText("Current D6 value")

  expect(dieValue).toHaveTextContent("?")

  const randomSpy = vi.spyOn(Math, "random").mockReturnValue(0.99)
  await user.click(rollButton)
  expect(dieValue).toHaveTextContent("6")
  expect(screen.getByText(/rolls made: 1/i)).toBeInTheDocument()

  randomSpy.mockReturnValue(0.33)
  await user.click(rollButton)
  expect(dieValue).toHaveTextContent("3")

  const historyItems = screen.getAllByRole("listitem")
  expect(historyItems[0]).toHaveTextContent("3")
  expect(historyItems[1]).toHaveTextContent("6")

  randomSpy.mockRestore()
})

test("Increment value and Decrement value should work as expected", async () => {
  const { user } = renderWithProviders(<App />)

  const countLabel = screen.getByLabelText<HTMLLabelElement>("Count")

  const incrementValueButton =
    screen.getByLabelText<HTMLButtonElement>("Increment value")

  const decrementValueButton =
    screen.getByLabelText<HTMLButtonElement>("Decrement value")

  // Click on "+" => Count should be 1
  await user.click(incrementValueButton)
  expect(countLabel).toHaveTextContent("1")

  // Click on "-" => Count should be 0
  await user.click(decrementValueButton)
  expect(countLabel).toHaveTextContent("0")
})

test("Add Amount should work as expected", async () => {
  const { user } = renderWithProviders(<App />)

  const countLabel = screen.getByLabelText<HTMLLabelElement>("Count")

  const incrementValueInput = screen.getByLabelText<HTMLInputElement>(
    "Set increment amount",
  )

  const addAmountButton = screen.getByText<HTMLButtonElement>("Add Amount")

  // "Add Amount" button is clicked => Count should be 2
  await user.click(addAmountButton)
  expect(countLabel).toHaveTextContent("2")

  // incrementValue is 2, click on "Add Amount" => Count should be 4
  await user.clear(incrementValueInput)
  await user.type(incrementValueInput, "2")
  await user.click(addAmountButton)
  expect(countLabel).toHaveTextContent("4")

  // [Negative number] incrementValue is -1, click on "Add Amount" => Count should be 3
  await user.clear(incrementValueInput)
  await user.type(incrementValueInput, "-1")
  await user.click(addAmountButton)
  expect(countLabel).toHaveTextContent("3")
})

it("Add Async should work as expected", async () => {
  vi.useFakeTimers({ shouldAdvanceTime: true })

  const { user } = renderWithProviders(<App />)

  const addAsyncButton = screen.getByText<HTMLButtonElement>("Add Async")

  const countLabel = screen.getByLabelText<HTMLLabelElement>("Count")

  const incrementValueInput = screen.getByLabelText<HTMLInputElement>(
    "Set increment amount",
  )

  await user.click(addAsyncButton)

  await act(async () => {
    await vi.advanceTimersByTimeAsync(500)
  })

  // "Add Async" button is clicked => Count should be 2
  expect(countLabel).toHaveTextContent("2")

  await user.clear(incrementValueInput)
  await user.type(incrementValueInput, "2")

  await user.click(addAsyncButton)
  await act(async () => {
    await vi.advanceTimersByTimeAsync(500)
  })

  // incrementValue is 2, click on "Add Async" => Count should be 4
  expect(countLabel).toHaveTextContent("4")

  await user.clear(incrementValueInput)
  await user.type(incrementValueInput, "-1")
  await user.click(addAsyncButton)

  await act(async () => {
    await vi.advanceTimersByTimeAsync(500)
  })

  // [Negative number] incrementValue is -1, click on "Add Async" => Count should be 3
  expect(countLabel).toHaveTextContent("3")

  vi.useRealTimers()
})

test("Add If Odd should work as expected", async () => {
  const { user } = renderWithProviders(<App />)

  const countLabel = screen.getByLabelText<HTMLLabelElement>("Count")

  const addIfOddButton = screen.getByText<HTMLButtonElement>("Add If Odd")

  const incrementValueInput = screen.getByLabelText<HTMLInputElement>(
    "Set increment amount",
  )

  const incrementValueButton =
    screen.getByLabelText<HTMLButtonElement>("Increment value")

  // "Add If Odd" button is clicked => Count should stay 0
  await user.click(addIfOddButton)
  expect(countLabel).toHaveTextContent("0")

  // Click on "+" => Count should be updated to 1
  await user.click(incrementValueButton)
  expect(countLabel).toHaveTextContent("1")

  // "Add If Odd" button is clicked => Count should be updated to 3
  await user.click(addIfOddButton)
  expect(countLabel).toHaveTextContent("3")

  // incrementValue is 1, click on "Add If Odd" => Count should be updated to 4
  await user.clear(incrementValueInput)
  await user.type(incrementValueInput, "1")
  await user.click(addIfOddButton)
  expect(countLabel).toHaveTextContent("4")

  // click on "Add If Odd" => Count should stay 4
  await user.clear(incrementValueInput)
  await user.type(incrementValueInput, "-1")
  await user.click(addIfOddButton)
  expect(countLabel).toHaveTextContent("4")
})
