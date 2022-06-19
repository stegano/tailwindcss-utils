export const baseRules = {
  // Layout
  aspect: /^(:?-)?aspect-(?:auto|square|video)$/,
  columns: /^(:?-)?columns-(?:\d+|\[.+\])$/,
  break:
    /^break-(?:after|before)-(?:auto|avoid|all|avoid-page|page|left|right|column)$/,
  "break-inside": /^(:?-)?break-inside-(?:auto|avoid|avoid-page|avoid-column)$/,
  "box-decoration": /^(:?-)?box-decoration-(?:clone|slice)$/,
  boxSizing: /^(:?-)?box-(?:border|content)$/,
  display:
    /^(?:block|inline-block|inline|flex|inline-flex|table|inline-table|table-caption|table-cell|table-column|table-column-group|table-footer-group|table-header-group|table-row-group|table-row|flow-root|grid|inline-grid|contents|list-item|hidden)$/,
  floats: /^(:?-)?float-(?:right|left|none)$/,
  clear: /^(:?-)?clear-(?:left|right|both|none)$/,
  isolation: /^(:?-)?(?:isolate|isolate-auto)$/,
  objectFit: /^(:?-)?object-(?:contain|cover|fill|none|scale|down)$/,
  objectPosition: /^(:?-)?object-(?:contain|cover|fill|none|scale|down)$/,
  overscroll: /^(:?-)?overscroll-(?:auto|contain|none)$/,
  "overscroll-x": /^(:?-)?overscroll-x-(?:auto|contain|none)$/,
  "overscroll-y": /^(:?-)?overscroll-y-(?:auto|contain|none)$/,
  position: /^(:?-)?(?:static|fixed|absolute|relative|sticky)$/,
  top: /^(:?-)?top-(?:\d+|\[.+\])$/,
  bottom: /^(:?-)?bottom-(?:\d+|\[.+\])$/,
  left: /^(:?-)?left-(?:\d+|\[.+\])$/,
  right: /^(:?-)?right-(?:\d+|\[.+\])$/,
  inset: /^(:?-)?inset-(?:\d+|px|\[.+\])$/,
  "inset-x": /^(:?-)?inset-x-(?:\d+|px|\[.+\])$/,
  "inset-y": /^(:?-)?inset-y-(?:\d+|px|\[.+\])$/,
  visibility: /^(:?-)?(?:visible|invisible)$/,
  zIndex: /^(:?-)?z-(?:\d+|\[.+\])$/,
  // Flexbox & Grid
  flexBasis: /^(:?-)?basis-(?:\d+|\[.+\])$/,
  flexDirection:
    /^(:?-)?flex-(?:row|row-reverse|col|col-reverse)(?:\d+|\[.+\])$/,
  flexWrap: /^(:?-)?flex-(?:wrap|reverse|nowrap)$/,
  flex: /^(:?-)?flex-(?:\d+|auto|initial|none)$/,
  flexGrow: /^(:?-)?(?:grow|grow-\d+|grow-\[.+\])$/,
  flexShrink: /^(:?-)?(?:shrink|shrink-\d+|shrink-\[.+\])$/,
  order: /^(:?-)?order-(?:\d+|\[.+\])$/,
  gridTemplateColumns: /^(:?-)?grid-cols-(?:\d+|none|\[.+\])$/,
  gridColumn: /^(:?-)?(?:col-auto|col-span-\d+|col-span-\[.+\])$/,
  gridColumnStart: /^(:?-)?(?:col-start-auto|col-start-\d+|col-start-\[.+\])$/,
  gridColumnEnd: /^(:?-)?(?:col-end-auto|col-end-\d+|col-end-\[.+\])$/,
  gridTemplateRows: /^(:?-)?grid-rows-(?:\d+|none|\[.+\])$/,
  gridRow: /^(:?-)?(?:row-auto|row-span-\d+|row-span-\[.+\])$/,
  gridRowStart: /^(:?-)?(?:row-start-auto|row-start-\d+)$/,
  gridRowEnd: /^(:?-)?(?:row-end-auto|row-end-\d+|row-end-\[.+\])$/,
  gridAutoFlow: /^(:?-)?grid-flow-(?:row|col|dense|row-dense|col-dense)$/,
  gridAutoColumns: /^(:?-)?auto-cols-(?:aut|min|max|fr)$/,
  gridAutoRows: /^(:?-)?auto-rows-(?:aut|min|max|fr)$/,
  gap: /^(:?-)?gap-(?:\d+|\[.+\])$/,
  "gap-x": /^(:?-)?gap-x-(?:\d+|\[.+\])$/,
  "gap-y": /^(:?-)?gap-y-(?:\d+|\[.+\])$/,
  justfyContent: /^(:?-)?justify-(?:start|end|center|between|around|evenly)$/,
  justfyItems: /^(:?-)?justify-items-(?:start|end|center|stretch)$/,
  justifySelf: /^(:?-)?justify-sel-(?:auto|start|end|center|stretch)$/,
  alignContent: /^(:?-)?content-(?:center|start|end|between|around|evenly)$/,
  alignItems: /^(:?-)?items-(?:start|end|center|baseline|stretch)$/,
  alignSelf: /^(:?-)?self-(?:auto|start|end|center|stretch|baseline)$/,
  placeContent:
    /^place-content-(?:center|start|end|between|around|evenly|stretch)$/,
  placeItems: /^(:?-)?place-items-(?:start|end|center|stretch)$/,
  placeSelf: /^(:?-)?place-self-(?:auto|start|end|center|stretch)$/,
  // Spacing
  padding: /^(:?-)?p-(?:\d+|\[.+\])$/,
  paddingTop: /^(:?-)?pt-(?:\d+|\[.+\])$/,
  paddingBottom: /^(:?-)?pb-(?:\d+|\[.+\])$/,
  paddingLeft: /^(:?-)?pl-(?:\d+|\[.+\])$/,
  paddingRight: /^(:?-)?pr-(?:\d+|\[.+\])$/,
  margin: /^(:?-)?m-(?:\d+|\[.+\])$/,
  marginTop: /^(:?-)?mt-(?:\d+|\[.+\])$/,
  marginBottom: /^(:?-)?mb-(?:\d+|\[.+\])$/,
  marginLeft: /^(:?-)?ml-(?:\d+|\[.+\])$/,
  marginRight: /^(:?-)?mr-(?:\d+|\[.+\])$/,
  spaceX: /^(:?-)?space-(?:x-\d+|x-reverse|x-px)$/,
  spaceY: /^(:?-)?space-(?:y-\d+|y-reverse|y-px)$/,
  // Sizing
  width: /^(:?-)?w-(?:\d+|\d+\/\d+|px|auto|full|screen|min|max|fit|\[.+\])$/,
  minWidth: /^(:?-)?min-w-(?:0|full|min|max|fit|\[.+\])$/,
  maxWidth: /^(:?-)?max-w-(?:0|full|min|max|fit|\[.+\])$/,
  height: /^(:?-)?h-(?:\d+|\d+\/\d+|px|auto|full|screen|min|max|fit|\[.+\])$/,
  minHeight: /^(:?-)?min-h-(?:0|full|min|max|fit|\[.+\])$/,
  maxHeight: /^(:?-)?max-h-(?:0|full|min|max|fit|\[.+\])$/,
  // Typography
  fontFamily: /^(:?-)?font-(?:sans|serif|mono)$/,
  fontSize: /^(:?-)?text-(?:xs|sm|base|lg|xl\d+xl|\[.+\])$/,
  fontSmoothing: /^(:?-)?(subpixel-)?antialiased$/,
  fontStyle: /^(:?-)?(?:non-)?italic$/,
  fontWeight:
    /^font-(?:thin|extralight|light|normal|medium|semibold|bold|extrabold|black)$/,
  fontVariantNumeric:
    /^normal-nums|ordinal|slashed-zero|lining-nums|oldstyle-nums|proportional-nums|tabular-nums|diagonal-fractions|stacked-fractions$/,
  letterSpacing: /^(:?-)?tracking-(?:tighter|tight|normal|wide|wider|widest)$/,
  lineHeight:
    /^(:?-)?leading-(?:\d+|none|tight|snug|normal|relaxed|loose|\[.+\])$/,
  listStyleType: /^(:?-)?list-(?:none|disc|decial)$/,
  listStylePosition: /^(:?-)?list-(?:inside|outside)$/,
  textAlign: /^(:?-)?text-(?:left|center|right|justify|start|end)$/,
  textColor:
    /^text-(?:inherit|current|transparent|black|white|\w+-\d+|\[.+\])$/,
  textDecoration: /^(:?-)?underline|overline|line-through|no-underline$/,
  textDecorationColor:
    /^decoration-(?:inherit|current|transparent|black|white|\w+-\d+|\[.+\])$/,
  textDecorationStyle: /^(:?-)?decoration-(?:solid|double|dotted|dashed|wavy)$/,
  textDecorationThickness: /^(:?-)?decoration-(?:auto|from-font|\d+)$/,
  textUnderlineOffset: /^(:?-)?underline-offset-(?:auto|\d+|\[.+\])$/,
  textTransfer: /^(:?-)?uppercase|lowercase|capitalize|normal-case$/,
  textOverflow: /^(:?-)?truncate|text-ellipsis|text-clip$/,
  textIndent: /^(:?-)?indent-(?:px|\d+|\[.+\])$/,
  verticalAlign:
    /^(:?-)?align-(?:baseline|top|middle|bottom|text|text|sub|super)$/,
  whitespace: /^(:?-)?whitespace-(?:normal|nowrap|pre|pre-line|pre-wrap)$/,
  wordBreak: /^(:?-)?break-(?:normal|word|all)$/,
  content: /^(:?-)?content-none$/,
  // Backgrounds
  backgroundAttachMent: /^(:?-)?bg-fixed|bg-local|bg-scroll$/,
  backgroundClip: /^(:?-)?bg-clip-(?:border|padding|content|text)$/,
  backgroundColor:
    /^bg-(?:inherit|current|transparent|black|white|\w+-\d+|\[.+\])$/,
  backgroundOrigin: /^(:?-)?bg-origin(?:border|padding|content)$/,
  backgroundPosition:
    /^bg-(?:bottom|center|left|left-bottom|left-top|right|right-bottom|right-top|top)$/,
  backgroundRepeat:
    /^bg-(?:repeat|no-repeat|repeat-x|repeat-y|repeat-round|repeat-space)$/,
  backgroundSize: /^(:?-)?bg-(?:auto|cover|contain)$/,
  backgroundImage:
    /^bg-(?:none|gradient-to-t|gradient-to-tr|gradient-to-r|gradient-to-br|gradient-to-b|gradient-to-bl|gradient-to-l|gradient-to-tl|\[url\(.+\)\])$/,
  // Borders
  borderRadius: /^(:?-)?rounded-(?:none|sm|border|md|lg|xl|\d+xl|full|\[.+\])$/,
  borderRadiusTop:
    /^(:?-)?rounded-t-(?:none|sm|border|md|lg|xl|\d+xl|full|\[.+\])$/,
  borderRadiusBottom:
    /^rounded-t-(?:none|sm|border|md|lg|xl|\d+xl|full|\[.+\])$/,
  borderRadiusRight:
    /^rounded-r-(?:none|sm|border|md|lg|xl|\d+xl|full|\[.+\])$/,
  borderRadiusLeft:
    /^(:?-)?rounded-r-(?:none|sm|border|md|lg|xl|\d+xl|full|\[.+\])$/,
  borderRadiusTopRight:
    /^rounded-tr-(?:none|sm|border|md|lg|xl|\d+xl|full|\[.+\])$/,
  borderRadiusTopLeft:
    /^rounded-tl-(?:none|sm|border|md|lg|xl|\d+xl|full|\[.+\])$/,
  borderRadiusBottomRight:
    /^rounded-br-(?:none|sm|border|md|lg|xl|\d+xl|full|\[.+\])$/,
  borderRadiusBottomLeft:
    /^rounded-bl-(?:none|sm|border|md|lg|xl|\d+xl|full|\[.+\])$/,
  borderWidth: /^(:?-)?border(?:-\d+|\[.+\])$/,
  borderWidthTop: /^(:?-)?border-t(?:-\d+|\[.+\])$/,
  borderWidthBottom: /^(:?-)?border-b(?:-\d+|\[.+\])$/,
  borderWidthRight: /^(:?-)?border-r(?:-\d+|\[.+\])$/,
  borderWidthLeft: /^(:?-)?border-l(?:-\d+|\[.+\])$/,
  borderColor:
    /^(:?-)?border-(?:inherit|current|transparent|black|\w+-\d+|white)$/,
  borderColorX:
    /^border-x-(?:inherit|current|transparent|black|\w+-\d+|white)$/,
  borderColorY:
    /^border-y-(?:inherit|current|transparent|black|\w+-\d+|white)$/,
  borderColorTop:
    /^border-t-(?:inherit|current|transparent|black|\w+-\d+|white)$/,
  borderColorRight:
    /^border-r-(?:inherit|current|transparent|black|\w+-\d+|white)$/,
  borderColorBottom:
    /^border-b-(?:inherit|current|transparent|black|\w+-\d+|white)$/,
  borderColorLeft:
    /^border-l-(?:inherit|current|transparent|black|\w+-\d+|white)$/,
  borderStyle: /^(:?-)?border-(?:solid|dashed|dotted|double|hidden|none)$/,
  devideWidthX: /^(:?-)?devide-x(?:-:\d+|reverse|\[.+\])$/,
  devideWidthY: /^(:?-)?devide-y(?:-:\d+|reverse|\[.+\])$/,
  devideColor:
    /^devide-(?:inherit|current|transparent|black|white|\w+-\d+|\[.+\])$/,
  devideStyle: /^(:?-)?devide-(?:solid|dashed|dotted|double|none)$/,
  outlineWidth: /^(:?-)?outline-(?:\d+|\[.+\])$/,
  outlineColor:
    /^outline-(?:inherit|current|transparent|black|white|\w+-\d+|\[.+\])$/,
  outlineStyle: /^(:?-)?outline-(?:solid|dashed|dotted|double|none)$/,
  outlineOffset: /^(:?-)?outline-offset-(?:\d+|\[.+\])$/,
  ringWith: /^(:?-)?ring(?:-inset|\d+)$/,
  ringColor:
    /^ring-(?:inherit|current|transparent|black|white|\w+-\d+|\[.+\])$/,
  ringOffset: /^(:?-)?ring-offset-(?:\d+|\[.+\])$/,
  ringOffsetColor:
    /^ring-offset-(?:inherit|current|transparent|black|white|\w+-\d+|\[.+\])$/,
  // Effects
  boxShadow: /^(:?-)?shadow(?:-(?:sm|md|lg|xl|\d+xl|inner|none|\[.+\]))?$/,
  boxShadowColor:
    /^shadow-(?:inherit|current|transparent|black|white|\w+-\d+)$/,
  opacity: /^(:?-)?opacity-(?:\d+|\[.+\])$/,
  mixBlendMode:
    /^mix-blend-(?:normal|multiply|screen|overlay|darken|lighten|color-dodge|color-burn|hard-light|soft-light|difference|exclusion|hue|saturation|color|luminosity|plus-lighter)$/,
  backgroundBlendMode:
    /^bg-blend-(?:normal|multiply|screen|overlay|darken|lighten|color-dodge|color-burn|hard-light|soft-light|difference|exclusion|hue|saturation|color|luminosity|plus-lighter)$/,
  // Filters
  blur: /^(:?-)?blur(?:-(none|sm|md|lg|xl|\d+xl|\[.+\]))?$/,
  brightness: /^(:?-)?brightness-(?:\d+|\[.+\])$/,
  contrast: /^(:?-)?contrast-(?:\d+|\[.+\])$/,
  dropShadow: /^(:?-)?dropshadow(?:-(none|sm|md|lg|xl|\d+xl|\[.+\]))?$/,
  grayscale: /^(:?-)?grayscale(?:-\d+|-\[.+\])?$/,
  hueRotate: /^(:?-)?hue-rotate-(?:\d+|\[.+\])$/,
  invert: /^(:?-)?invert(?:-\d+|-\[.+\])?$/,
  saturate: /^(:?-)?saturate-(?:\d+|\[.+\])$/,
  sepia: /^(:?-)?sepia(?:-\d+|-\[.+\])?$/,
  backdropBlur: /^(:?-)?backdrop-blur(?:-(none|sm|md|lg|xl|\d+xl|\[.+\]))?$/,
  backdropBrightness: /^(:?-)?backdrop-brightness-(?:\d+|\[.+\])$/,
  backdropContrast: /^(:?-)?backdrop-contrast-(?:\d+|\[.+\])$/,
  backdropGrayscale: /^(:?-)?backdrop-grayscale(?:-\d+|-\[.+\])?$/,
  backdropHueRotate: /^(:?-)?backdrop-hue-rotate-(?:\d+|\[.+\])$/,
  backdropInvert: /^(:?-)?backdrop-invert(?:-\d+|-\[.+\])?$/,
  backdropOpacity: /^(:?-)?backdrop-opacity-(?:\d+|\[.+\])$/,
  backdropSaturate: /^(:?-)?backdrop-saturate-(?:\d+|\[.+\])$/,
  backdropSepia: /^(:?-)?backdrop-sepia(?:-\d+|-\[.+\])?$/,
  // Tables
  borderCollapse: /^(:?-)?border-(?:collapse|separate)$/,
  borderSpacing: /^(:?-)?border-spacing-(?:px|\d+)$/,
  borderSpacingX: /^(:?-)?border-spacing-x-(?:px|\d+|\[.+\])$/,
  borderSpacingY: /^(:?-)?border-spacing-y-(?:px|\d+|\[.+\])$/,
  tableLayout: /^(:?-)?table-(?:auto|fixed)$/,
  // Transitions & Animation
  transitionProperty:
    /^transition(?:-(?:none|all|colors|opacity|shadow|transform))?$/,
  transitionDuration: /^(:?-)?duration-(?:\d+|\[.+\])?$/,
  transitionTimingFunction: /^(:?-)?ease-(?:linear|in|out|in-out)$/,
  transitionDelay: /^(:?-)?delay-(?:\d+|\[.+\])?$/,
  animation: /^(:?-)?animation-(?:none|spin|ping)$/,
  // Transforms
  scale: /^(:?-)?scale-(?:\d+|\[.+\])?$/,
  scaleX: /^(:?-)?scale-x-(?:\d+|\[.+\])?$/,
  scaleY: /^(:?-)?scale-y-(?:\d+|\[.+\])?$/,
  rotate: /^(:?-)?rotate-(?:\d+|\[.+\])?$/,
  translate: /^(:?-)?translate-(?:\d+|\[.+\])?$/,
  translateX: /^(:?-)?translate-x-(?:\d+|\[.+\])?$/,
  translateY: /^(:?-)?translate-y-(?:\d+|\[.+\])?$/,
  skew: /^(:?-)?skew-(?:\d+|\[.+\])?$/,
  skewX: /^(:?-)?skew-x-(?:\d+|\[.+\])?$/,
  skewY: /^(:?-)?skew-y-(?:\d+|\[.+\])?$/,
  transformOrigin:
    /^origin-(?:center|top|top-right|right|bottom-right|bottom|bottom-left|left|top-left)$/,
  // Interactivity
  accentColor:
    /^accent-(?:inherit|current|transparent|black|white|\w+-\d+|\[.+\])$/,
  cursor:
    /^(:?-)?cursor-(?:auto|default|pointer|wait|text|move|help|not-allowed)$/,
  caretColor:
    /^caret-(?:inherit|current|transparent|black|white|\w+-\d+|\[.+\])$/,
  pointerEvents: /^(:?-)?pointer-events-(?:none|auto)$/,
  resize: /^(:?-)?resize(?:-(?:x|y|none))?$/,
  scrollBehavior: /^(:?-)?scroll-(?:auto|smooth)$/,
  scrollMargin: /^(:?-)?scroll-m-(?:px|\d+|\[.+\])$/,
  scrollMarginX: /^(:?-)?scroll-mx-(?:px|\d+|\[.+\])$/,
  scrollMarginY: /^(:?-)?scroll-my-(?:px|\d+|\[.+\])$/,
  scrollMarginTop: /^(:?-)?scroll-mt-(?:px|\d+|\[.+\])$/,
  scrollMarginRight: /^(:?-)?scroll-mr-(?:px|\d+|\[.+\])$/,
  scrollMarginLeft: /^(:?-)?scroll-mb-(?:px|\d+|\[.+\])$/,
  scrollMarginBottom: /^(:?-)?scroll-ml-(?:px|\d+|\[.+\])$/,
  scrollPadding: /^(:?-)?scroll-p-(?:px|\d+|\[.+\])$/,
  scrollPaddingX: /^(:?-)?scroll-px-(?:px|\d+|\[.+\])$/,
  scrollPaddingY: /^(:?-)?scroll-py-(?:px|\d+|\[.+\])$/,
  scrollPaddingTop: /^(:?-)?scroll-pt-(?:px|\d+|\[.+\])$/,
  scrollPaddingRight: /^(:?-)?scroll-pr-(?:px|\d+|\[.+\])$/,
  scrollPaddingLeft: /^(:?-)?scroll-pb-(?:px|\d+|\[.+\])$/,
  scrollPaddingBottom: /^(:?-)?scroll-pl-(?:px|\d+|\[.+\])$/,
  scrollSnapAlign: /^(:?-)?span-(?:start|end|center|align-none)$/,
  scrollSnapStop: /^(:?-)?snap-(?:normal|always)$/,
  scrollSnapType: /^(:?-)?snap-(?:none|x|y|both|mandatory|proximity)$/,
  touchAction:
    /^touch-(?:auto|none|pan-x|pan-left|pan-right|pan-y|pan-up|pan-down|pinch-zoom|manipulation)$/,
  userSelect: /^(:?-)?select-(?:none|text|all|auto)$/,
  willChange: /^(:?-)?will-change-(?:auto|scroll|contents|transform|)$/,
  // SVG
  fill: /^(:?-)?fill-(?:inherit|current|transparent|black|white|\w+-\d+|\[.+\])$/,
  stroke:
    /^(:?-)?stroke-(?:inherit|current|transparent|black|white|\w+-\d+|\[.+\])$/,
  strokeWidth: /^(:?-)?stroke-(?:\d+|\[.+\])+$/,
  screenReaders: /^(:?-)?sr-only|not-sr-only$/,
};

export default baseRules;
