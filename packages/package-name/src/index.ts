import { makeInstaller } from "./helpers";
import { components } from "./components";

export * from "./constants";
export * from "./helpers";
export * from "./components";

export default makeInstaller([...components]);