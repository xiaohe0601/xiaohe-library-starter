import { withInstall } from "../../helpers";
import Hello from "./hello.vue";

export * from "./hello";

export const XhHello = withInstall(Hello);

export default XhHello;