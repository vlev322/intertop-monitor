# Dev notes

По пути ```./src/ts``` создаем файл ```index.dev.ts```, git его игнорирует, у каждого свой. Webpack использует его как точку входа.

Пример содержимого ```index.dev.ts```:
```typescript
import { Presenters } from "./presenters";

// Import certain Component
import { IndexComposition } from "./components/IndexComposition";

import { render } from "./render";

const presenters = new Presenters();

// Render only specific Component
render(IndexComposition, presenters);
```

Вместо **IndexComposition** импортим любой компонент напрямую и рендерим его персонально
