import { Sum } from "../Sum"

test("Sum of two numbers", () => {
    const result = Sum(9,21);
    expect(result).toBe(30);
})