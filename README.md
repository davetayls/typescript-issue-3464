# typescript-issue-3464
example ts files to reproduce https://github.com/Microsoft/TypeScript/issues/3464#issuecomment-128751923

This shows that if you try and compile MediaStore.ts you will get the error

```
$ tsc MediaStore.ts
node/v0.12.6/lib/node_modules/typescript/bin/tsc.js:14169
                    ts.Debug.assert(resultOfFailedInference.failedTypeParamete
                                                           ^
TypeError: Cannot read property 'failedTypeParameterIndex' of undefined
```

This is because in MediaModel.ts which holds the class which is passed to the MediaStore generic, 
the import for the BaseModel has a bad path (notice the extra x I added)

```typescript
import BaseModel = require('./BaseModelx');
```

If you remove the x at the end so that this resolves properly then you are able to compile `MediaStore.ts` successfully.
