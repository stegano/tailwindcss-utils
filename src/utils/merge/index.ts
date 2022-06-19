import LRUCache from "lru-cache";
import objectHash from "object-hash";
import { Separator } from "../../enums/separator/index";
import { baseRules } from "./base-rules";

const cache = new LRUCache<string, string>({
  max: 2048,
  ttl: 1000 * 60 * 60,
});

/**
 * This function can take multiple tailwindcss class values as arguments and merge them, and if there are duplicate class values, it uses the last input value.
 * e.g. tailwindcssUtils.merge('p-1 m-2', 'm-2', 'm-3'); // ⇛ `p-1 m-3`
 */
export const merge = (
  classNameList: string[],
  customReuls?: Record<string, RegExp>
) => {
  const cacheKey = objectHash([classNameList, customReuls]);
  if (cache.has(cacheKey)) {
    return cache.get(cacheKey);
  }
  const classes: Record<string, string> = {};
  classNameList.forEach((className) => {
    className.split(Separator.CLASS_SEPARATOR).forEach((classInfo: string) => {
      const baseRuleList = Object.entries(baseRules);
      /**
       * Rules created by the user are used first.
       */
      if (customReuls) {
        const customReulList = Object.entries(customReuls);
        for (let i = 0; i < customReulList.length; i += 1) {
          const [name, regexp] = customReulList[i];
          if (regexp.test(classInfo)) {
            classes[`customRules$${name}`] = classInfo;
            return;
          }
        }
      }
      for (let i = 0; i < baseRuleList.length; i += 1) {
        const [name, regexp] = baseRuleList[i];
        if (regexp.test(classInfo)) {
          classes[`baseRules$${name}`] = classInfo;
          return;
        }
      }
      /**
       * If no matching rule
       */
      classes[classInfo] = classInfo;
    });
  });
  const result = Object.values(classes).join(Separator.CLASS_SEPARATOR);
  cache.set(cacheKey, result);
  return result;
};

export default {
  merge,
};
