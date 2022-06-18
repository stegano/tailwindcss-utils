import { Separator } from "src/enums/separator";

/**
 * This function returns a tailwindcssClasName with prefix information.
 * e.g. tailwindcssUtils.repeat('after', 'p-1 m-1'); // ⇛ `after:p-1 after:m-1`
 */
export const repeat = (
  prefix: string,
  tailwindcssClassNames: string
): string => {
  return tailwindcssClassNames
    .split(Separator.CLASS_SEPARATOR)
    .map((v) => `${prefix}:${v}`)
    .join(Separator.CLASS_SEPARATOR);
};

export default {
  repeat,
};
