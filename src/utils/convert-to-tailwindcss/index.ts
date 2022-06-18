import * as CSS from "csstype";
import { Separator } from "../../enums/separator/index";
import { ConvertToTailwindcss } from "./index.type";

/**
 * Mapping CSS property names to Tailwindcss properties
 */
const names: {
  [P in keyof CSS.Properties]: CSS.Properties[P];
} = {
  color: "text",
  fontSize: "text",
  zIndex: "z",
  order: "order",
  gridColumn: "col",
  gridColumnStart: "col-start",
  gridColumnEnd: "col-end",
  gridRow: "row",
  gridRowStart: "row-start",
  gridRowEnd: "row-end",
  margin: "m",
  marginTop: "mt",
  marginBottom: "mb",
  marginLeft: "ml",
  marginRight: "mr",
  aspectRatio: "aspect",
  height: "h",
  maxHeight: "max-h",
  minHeight: "min-h",
  width: "w",
  minWidth: "min-w",
  maxWidth: "max-w",
  flex: "flex",
  flexShrink: "flex-shrink",
  flexGrow: "flex-grow",
  flexBasis: "basis",
  cursor: "cursor",
  scrollMargin: "scroll-m",
  scrollPadding: "scroll-p",
  listStyleType: "list",
  columns: "columns",
  gridAutoColumns: "auto-cols",
  gridAutoRows: "auto-rows",
  gridTemplateColumns: "grid-cols",
  gridTemplateRows: "grid-rows",
  gap: "gap",
  borderRadius: "rounded",
  borderTopWidth: "border-t",
  borderBottomWidth: "border-b",
  borderRightWidth: "border-r",
  borderLeftWidth: "border-l",
  backgroundColor: "bg",
  backgroundImage: "bg",
  backgroundSize: "bg",
  backgroundPosition: "bg",
  backgroundOrigin: "bg-origin",
  backgroundRepeat: "bg-repeat",
  strokeWidth: "stroke",
  objectPosition: "object",
  padding: "p",
  paddingTop: "pt",
  paddingBottom: "pb",
  paddingLeft: "pl",
  paddingRight: "pr",
  textIndent: "indent",
  fontWeight: "font",
  lineHeight: "leading",
  letterSpacing: "tracking",
  textDecorationThickness: "decoration",
  textUnderlineOffset: "underline-offset",
  opacity: "opacity",
  outlineWidth: "outline",
  outlineOffset: "outline-offset",
  transitionDelay: "delay",
  transitionDuration: "duration",
  transitionTimingFunction: "ease",
  willChange: "will-change",
};

/**
 * Converts CSS property values to Tailwindcss class.
 * [!] This function is still incomplete, so perfect performance cannot be guaranteed.
 * [*] If you find any missing items that cannot be handled by this function, please let me know or PR
 */
export const convertToTailwindcss: ConvertToTailwindcss = (style) => {
  const unconvertedStyle = { ...style };
  const classList = Object.entries(style)
    .map((values) => {
      const [n, v] = values as [keyof typeof names, string];
      const name = names[n];
      switch (n) {
        case "backgroundPosition": {
          delete unconvertedStyle[n];
          return `${name}${Separator.CLASS_VALUE_SEPARATOR}[${v.replace(
            Separator.CSS_VALUE_SEPARATOR,
            Separator.TAILWINDCSS_VALUE_SEPARATOR
          )}]`;
        }
        case "backgroundSize": {
          delete unconvertedStyle[n];
          return `${name}${Separator.CLASS_VALUE_SEPARATOR}[length:${v.replace(
            Separator.CSS_VALUE_SEPARATOR,
            Separator.TAILWINDCSS_VALUE_SEPARATOR
          )}]`;
        }
        default:
          if (name) {
            delete unconvertedStyle[n];
            return `${name}${Separator.CLASS_VALUE_SEPARATOR}[${v}]`;
          }
          return "";
      }
    })
    .filter((v) => v !== "");
  const className = classList.join(Separator.CLASS_SEPARATOR);
  return {
    /**
     * These are CSS Property values converted to Tailwindcss class.
     */
    className,
    /**
     * In this function, unconverted CSS properties are included in the `unconvertedStyle` field.
     */
    unconvertedStyle,
  };
};

export default {
  convertToTailwindcss,
};
