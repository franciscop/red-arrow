# Red Arrow [![npm install red-arrow](https://img.shields.io/badge/npm%20install-red--arrow-blue.svg)](https://www.npmjs.com/package/red-arrow) [![code sandbox](https://img.shields.io/badge/%20DEMO%20%20-blue.svg)](https://codesandbox.io/s/brave-robinson-gmpz8) [![gzip size](https://img.badgesize.io/franciscop/red-arrow/master/index.min.js.svg?compression=gzip)](https://github.com/franciscop/red-arrow/blob/master/index.min.js)

Display a *nice looking* red arrow pointing to the element you reference in React ([see **Codesandbox**](https://codesandbox.io/s/brave-robinson-gmpz8)):

```js
import React, { useRef } from 'react';
import RedArrow from 'red-arrow';

export default () => {
  const ref = useRef();
  return (
    <div>
      <button ref={ref}>Click me!</button>
      <RedArrow point={ref} />
    </div>
  );
};
```

Another example:

![the red arrow](./docs/example.png)

## API

It is exported as a default export, and can accept these properties:

- `point` (ref): the reference to the element we want to point to, or a function that returns `{ left: 'Npx', top: 'Mpx' }`.
- `rotation` (number): the angle to rotate the arrow in degrees. Defaults to 45.
- `color="red"` (str):
- `offset={{ left: '20px', top: '2px' }}` (obj|fn): the offset from the bottom-left of the element. Defaults to `{ left: '20px', top: '2px' }` because it looks good.


## FAQ

**What if I want a BLUE arrow??**

Just write it `<RedArrow color="blue" />`! Oh wait a second...

**Is this a joke?**

Yes, pretty much. It is [inspired by a tweet](https://twitter.com/freezydorito/status/1225110867995451394). But it works!

**How long did it take?**

30min

**But wait you just did publish it and it works!**

Yes?
