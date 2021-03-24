# Icon

> **Status**: In Development

### Usage

```js
import { Icon } from 'saatva_pattern_library';
```

### Properties

| property  | propType | required | default | description
| --------  | -------- | -------- | ------- | -----------
| name | string | yes | - | 
| className | string | - | - | 
| description | string | yes | - | 
| alt | string | yes | - | 
| role | string | - | "img" | 
| viewBox | string | - | - | 
| fill | string | - | - | 
| width | string | - | - | 
| height | string | - | - | 
| style | object | -
| iconList | array | - | null

Make sure to include an 'alt' property when you add an icon to the JSON file. This will create default values for alt, ARIA-label and description.


### UX Guidance 
...


### TODOs
1. Include option to pass in symbol as the svgContent with something like:  
```jsx
<use xlinkHref={`#icons_${props.name}`} />
```
2. Add/refactor accessibility