import { createCompletionItem } from "./create"

const s_completion = createCompletionItem(
  "%s",
  "string or slice of bytes",
  "the uninterpreted bytes of the string or slice"
)

const q_completion = createCompletionItem(
  "%q",
  "string or slice of bytes",
  "a double-quoted string safely escaped with Go syntax"
)

const x_completion = createCompletionItem(
  "%x",
  "string or slice of bytes",
  "base 16, lower-case, two characters per byte"
)

const X_completion = createCompletionItem(
  "%X",
  "string or slice of bytes",
  "base 16, upper-case, two characters per byte"
)

export const string_slice_bytes_completions = [
  s_completion,
  q_completion,
  x_completion,
  X_completion,
]
