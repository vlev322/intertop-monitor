import { Presenters } from "./presenters";
import { IndexComposition } from "./components/IndexComposition";

import { render } from "./render";

const presenters = new Presenters();
render(IndexComposition, presenters);
