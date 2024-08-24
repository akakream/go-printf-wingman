import { createCompletionItem } from "./create"

const t_completion = createCompletionItem(
  "%t",
  "boolean",
  "the word true or false"
)

export const boolean_completions = [t_completion]
