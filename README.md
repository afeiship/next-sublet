# next-sublet
> Reactive leases for data subscriptions.

## installation
```bash
npm install -S afeiship/next-sublet --registry=https://registry.npm.taobao.org
```

## usage
```js
import 'next-sublet';

const user = { firstName:null, lastName:null }; // <~ "legacy" is explicit
const view = nx.sublet(user, state => {
  if (state.firstName) {
    console.log(`Hello, ${state.firstName} ${state.lastName}`);
  } else {
    console.log('Howdy stranger~!');
  }
});
```

## resources
- https://github.com/lukeed/sublet
