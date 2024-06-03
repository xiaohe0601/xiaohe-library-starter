import { buildCjsScripts, buildEsmScripts, buildUmdScripts } from "./tasks/build-scripts";
import { buildResolver } from "./tasks/build-resolver";

export async function script() {
  await Promise.all([
    buildUmdScripts(),
    buildEsmScripts(),
    buildCjsScripts()
  ]);

  await buildResolver();
}

script();