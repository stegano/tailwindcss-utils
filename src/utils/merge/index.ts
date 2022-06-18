import { Separator } from "../../enums/separator/index";

export const baseRegexGroup = {
  padding: /^p-\d+$/,
  paddingTop: /^pt-\d+$/,
  paddingBottom: /^pb-\d+$/,
  paddingLeft: /^pl-\d+$/,
  paddingRight: /^pr-\d+$/,
  margin: /^m-\d+$/,
  marginTop: /^mt-\d+$/,
  marginBottom: /^mb-\d+$/,
  marginLeft: /^ml-\d+$/,
  marginRight: /^mr-\d+$/,
  aspect: /^aspect-(?:auto|square|video)$/,
  columns: /^columns-\d+$/,
  break:
    /^break-(?:after|before)-(?:auto|avoid|all|avoid-page|page|left|right|column)$/,
  "break-inside": /^break-inside-(?:auto|avoid|avoid-page|avoid-column)$/,
  "box-decoration": /^box-decoration-(?:clone|slice)$/,
  boxSizing: /^box-(?:border|content)$/,
  display:
    /^(?:block|inline-block|inline|flex|inline-flex|table|inline-table|table-caption|table-cell|table-column|table-column-group|table-footer-group|table-header-group|table-row-group|table-row|flow-root|grid|inline-grid|contents|list-item|hidden)$/,
  floats: /^float-(?:right|left|none)$/,
  clear: /^clear-(?:left|right|both|none)$/,
  isolation: /^(?:isolate|isolate-auto)$/,
  objectFit: /^object-(?:contain|cover|fill|none|scale|down)$/,
  objectPosition: /^object-(?:contain|cover|fill|none|scale|down)$/,
  overscroll: /^overscroll-(?:auto|contain|none)$/,
  "overscroll-x": /^overscroll-x-(?:auto|contain|none)$/,
  "overscroll-y": /^overscroll-y-(?:auto|contain|none)$/,
  position: /^(?:static|fixed|absolute|relative|sticky)$/,
  top: /^top-\d+$/,
  bottom: /^bottom-\d+$/,
  left: /^left-\d+$/,
  right: /^right-\d+$/,
  inset: /^(?:inset-\d+|inset-px)$/,
  "inset-x": /^(?:inset-x-\d+|inset-x-px)$/,
  "inset-y": /^(?:inset-y-\d+|inset-y-px)$/,
  visibility: /^(?:visible|invisible)$/,
  zIndex: /^z-\d+$/,
  flexBasis: /^basis-\d+$/,
  flexDirection: /^flex-(?:row|row-reverse|col|col-reverse)\d+$/,
  flexWrap: /^flex-(?:wrap|reverse|nowrap)$/,
  flex: /^flex-(?:\d+|auto|initial|none)$/,
  flexGrow: /^(?:grow|grow-\d+)$/,
  flexShrink: /^(?:shrink|shrink-\d+)$/,
  order: /^order-\d+$/,
  gridTemplateColumns: /^grid-cols-(?:\d+|none)$/,
  gridColumn: /^(?:col-auto|col-span-\d+)$/,
  gridColumnStart: /^(?:col-start-auto|col-start-\d+)$/,
  gridColumnEnd: /^(?:col-end-auto|col-end-\d+)$/,
  gridTemplateRows: /^grid-rows-(?:\d+|none)$/,
  gridRow: /^(?:row-auto|row-span-\d+)$/,
  gridRowStart: /^(?:row-start-auto|row-start-\d+)$/,
  gridRowEnd: /^(?:row-end-auto|row-end-\d+)$/,
  gridAutoFlow: /^grid-flow-(?:row|col|dense|row-dense|col-dense)$/,
  gridAutoColumns: /^auto-cols-(?:aut|min|max|fr)$/,
  gridAutoRows: /^auto-rows-(?:aut|min|max|fr)$/,
  gap: /^gap-\d+$/,
  "gap-x": /^gap-x-\d+$/,
  "gap-y": /^gap-y-\d+$/,
  justfyContent: /^justify-(?:start|end|center|between|around|evenly)$/,
  justfyItems: /^justify-items-(?:start|end|center|stretch)$/,
  justifySelf: /^justify-sel-(?:auto|start|end|center|stretch)$/,
  alignContent: /^content-(?:center|start|end|between|around|evenly)$/,
  alignItems: /^items-(?:start|end|center|baseline|stretch)$/,
  alignSelf: /^self-(?:auto|start|end|center|stretch|baseline)$/,
  placeContent:
    /^place-content-(?:center|start|end|between|around|evenly|stretch)$/,
  placeItems: /^place-items-(?:start|end|center|stretch)$/,
  placeSelf: /^place-self-(?:auto|start|end|center|stretch)$/,
  spaceX: /^space-(?:x-\d+|x-reverse|x-px)$/,
  spaceY: /^space-(?:y-\d+|y-reverse|y-px)$/,
  width: /^w-(?:\d+|\d+\/\d+|px|auto|full|screen|min|max|fit)$/,
  minWidth: /^min-w-(?:0|full|min|max|fit)$/,
  maxWidth: /^max-w-(?:0|full|min|max|fit)$/,
  height: /^h-(?:\d+|\d+\/\d+|px|auto|full|screen|min|max|fit)$/,
  minHeight: /^min-h-(?:0|full|min|max|fit)$/,
  maxHeight: /^max-h-(?:0|full|min|max|fit)$/,
  backgroundAttachMent: /^bg-fixed|bg-local|bg-scroll$/,
  backgroundClip: /^bg-clip-(?:border|padding|content|text)$/,
  backgroundColor: /^bg-(?:inherit|current|transparent|black|white|\w+?-\d+)$/,
  backgroundOrigin: /^bg-origin(?:border|padding|content)$/,
  backgroundPosition:
    /^bg-(?:bottom|center|left|left-bottom|left-top|right|right-bottom|right-top|top)$/,
  backgroundRepeat:
    /^bg-(?:repeat|no-repeat|repeat-x|repeat-y|repeat-round|repeat-space)$/,
  backgroundSize: /^bg-(?:auto|cover|contain)$/,
  backgroundImage:
    /^bg-(?:none|gradient-to-t|gradient-to-tr|gradient-to-r|gradient-to-br|gradient-to-b|gradient-to-bl|gradient-to-l|gradient-to-tl)$/,
};

/**
 * This function can take multiple tailwindcss class values as arguments and merge them, and if there are duplicate class values, it uses the last input value.
 * e.g. tailwindcssUtils.merge('p-1 m-2', 'm-2', 'm-3'); // ⇛ `p-1 m-3`
 */
export const merge = (
  classNameList: string[],
  groups: Record<string, RegExp> = baseRegexGroup
) => {
  const classes: Record<string, string> = {};
  classNameList.forEach((className) => {
    className.split(Separator.CLASS_SEPARATOR).forEach((classInfo: string) => {
      const groupList = Object.entries(groups);
      for (let i = 0; i < groupList.length; i += 1) {
        const [name, regexp] = groupList[i];
        if (regexp.test(classInfo)) {
          classes[name] = classInfo;
          return;
        }
      }
      classes[classInfo] = classInfo;
    });
  });
  return Object.values(classes).join(Separator.CLASS_SEPARATOR);
};

export default {
  merge,
};
