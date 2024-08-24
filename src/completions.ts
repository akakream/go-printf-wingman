import { boolean_completions } from "./boolean_completions"
import { floating_point_complex_completions } from "./floating_point_complex_completions"
import { general_completions } from "./general_completions"
import { integer_completions } from "./integer_completions"
import { pointer_completions } from "./pointer_completions"
import { slice_completions } from "./slice_completions"
import { string_slice_bytes_completions } from "./string_slice_bytes_completions"

export const completions = [
  general_completions,
  boolean_completions,
  integer_completions,
  floating_point_complex_completions,
  string_slice_bytes_completions,
  slice_completions,
  pointer_completions,
].reduce((accum, el) => accum.concat(el), [])
