![NPM License](https://img.shields.io/npm/l/tailwindcss-utils)
![NPM Downloads](https://img.shields.io/npm/dw/tailwindcss-utils)

# Tailwindcss Utils
> This is a useful utility for tiny and simple [tailwindcss](https://tailwindcss.com/).

## Installation

The easiest way to install `tailwindcss-utils` is with [npm](https://www.npmjs.com/package/tailwindcss-utils).

```bash
npm install tailwindcss-utils
```

Alternately, download the source.

```bash
git clone https://github.com/stegano/tailwindcss-utils.git
```

## Example
### repeat(prefix: string, tailwindcssClassNames: string): string
> This function returns a tailwindcssClasName with prefix information.
```ts
...
tailwindUtils.repeat("after", "p-1 m-1") // ⇒ `after:p-1 after:m-1`
...
```

### merge(classNameList: string[], customRules?: Record<string, RegExp>): string
> * This function can take multiple tailwindcss class values as arguments and merge them, and if there are duplicate class values, it uses the last input value.
```ts
...
tailwindUtils.merge("p-1 m-2", "m-2", "m-3") // ⇒ `p-1 m-3`
...
```
#### Advanced: Custom pattern
* You can customize and use patterns that can identify the same class.
```ts
...
tailwindUtils.merge("p-1 m-2", "p-[100px]", {
  padding: /^p-(?:\d+|\[\d+?px\])$/,
}) // ⇒ `p-[100px] m-2`
...
```

### convertToTailwindcss(style: CSS.Properties): {className: string; unconvertedStyle: CSS.Properties}
> Converts CSS property values to Tailwindcss class.
> [!] This is an experimental feature.
```ts
tailwindUtils.convertToTailwindcss({
  padding: '10px',
  margin: '10px'
}); // ⇒ `p-[10px] m-[10px]`;
```
