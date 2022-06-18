import * as CSS from "csstype";

interface ConvertToTailwindcss {
  (style: CSS.Properties): {
    className: string;
    unconvertedStyle: CSS.Properties;
  };
}
