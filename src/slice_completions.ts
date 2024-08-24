import { createCompletionItem } from "./create"

const p_completion = createCompletionItem(
  "%p",
  "slice",
  "address of 0th element in base 16 notation, with leading 0x"
)

export const slice_completions = [p_completion]
