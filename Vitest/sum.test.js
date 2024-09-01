

import { expect, test } from "vitest";
import {add} from "./sum.js"

test("add 5 + 5 to equal to 10", () => {
  expect(add(2, 3)) .toBe(5);
})