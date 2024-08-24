import { createCompletionItem } from "./create"

const b_completion = createCompletionItem("%b", "integer", "base 2")

const c_completion = createCompletionItem(
  "%c",
  "integer",
  "the character represented by the corresponding Unicode code point"
)

const d_completion = createCompletionItem("%d", "integer", "base 10")

const o_completion = createCompletionItem("%o", "integer", "base 8")

const O_completion = createCompletionItem(
  "%O",
  "integer",
  "base 8 with 0o prefix"
)

const q_completion = createCompletionItem(
  "%q",
  "integer",
  "a single-quoted character literal safely escaped with Go syntax."
)

const x_completion = createCompletionItem(
  "%x",
  "integer",
  "base 16, with lower-case letters for a-f"
)

const X_completion = createCompletionItem(
  "%X",
  "integer",
  "base 16, with upper-case letters for A-F"
)

const U_completion = createCompletionItem(
  "%U",
  "integer",
  'Unicode format: U+1234; same as "U+%04X"'
)

export const integer_completions = [
  b_completion,
  c_completion,
  d_completion,
  o_completion,
  O_completion,
  q_completion,
  x_completion,
  X_completion,
  U_completion,
]
