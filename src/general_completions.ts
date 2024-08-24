import { createCompletionItem } from "./create"

const v_completion = createCompletionItem(
  "%v",
  "general",
  "the value in a default format"
)

const plus_v_completion = createCompletionItem(
  "%+v",
  "general",
  `the value in a default format
when printing structs adds field names`
)

const sharp_v_completion = createCompletionItem(
  "%#v",
  "general",
  `a Go-syntax representation of the value
(floating-point infinities and NaNs print as ±Inf and NaN)`
)

const T_completion = createCompletionItem(
  "%T",
  "general",
  "a Go-syntax representation of the type of the value"
)

const percent_completion = createCompletionItem(
  "%%",
  "general",
  "a literal percent sign; consumes no value"
)

export const general_completions = [
  v_completion,
  plus_v_completion,
  sharp_v_completion,
  T_completion,
  percent_completion,
]
