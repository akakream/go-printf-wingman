import { createCompletionItem } from "./create"

const p_completion = createCompletionItem(
  "%p",
  "pointer",
  `base 16 notation, with leading 0x
The %b, %d, %o, %x and %X verbs also work with pointers,
formatting the value exactly as if it were an integer.`
)

export const pointer_completions = [p_completion]
