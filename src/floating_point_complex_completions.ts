import { createCompletionItem } from "./create"

const b_completion = createCompletionItem(
  "%b",
  "floating point or complex",
  `decimalless scientific notation with exponent a power of two,
in the manner of strconv.FormatFloat with the 'b' format,
e.g. -123456p-78`
)

const e_completion = createCompletionItem(
  "%e",
  "floating point or complex",
  "scientific notation, e.g. -1.234456e+78"
)

const E_completion = createCompletionItem(
  "%E",
  "floating point or complex",
  "scientific notation, e.g. -1.234456E+78"
)

const f_completion = createCompletionItem(
  "%f",
  "floating point or complex",
  "decimal point but no exponent, e.g. 123.456"
)

const F_completion = createCompletionItem(
  "%F",
  "floating point or complex",
  "synonym for %f"
)

const g_completion = createCompletionItem(
  "%g",
  "floating point or complex",
  "%e for large exponents, %f otherwise. Precision is discussed below."
)

const G_completion = createCompletionItem(
  "%G",
  "floating point or complex",
  "%E for large exponents, %F otherwise"
)

const x_completion = createCompletionItem(
  "%x",
  "floating point or complex",
  "hexadecimal notation (with decimal power of two exponent), e.g. -0x1.23abcp+20"
)

const X_completion = createCompletionItem(
  "%X",
  "floating point or complex",
  "upper-case hexadecimal notation, e.g. -0X1.23ABCP+20"
)

export const floating_point_complex_completions = [
  b_completion,
  e_completion,
  E_completion,
  f_completion,
  F_completion,
  g_completion,
  G_completion,
  x_completion,
  X_completion,
]
