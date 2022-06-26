import { LitElement, unsafeCSS } from "lit";
// importing inline styles (indicated by the ?inline query parameter) ensure that
// the css files are directly included into the
// file and excluded from dynamic linking into the page.
// All css that is imported is first processed using postcss
import components from "./components.css?inline";
import utilities from "./utilities.css?inline";
import screens from "./screens.css?inline";

// do not import this as inline, as it will break Tailwind's global css reset.
// (This file will effectively be imported twice. Once as a standalone css file bundled with the index.html,
// once as a string used in the tailwind element)
import preflight from "./preflight.css";

/**
 * tailwind is statically imported and thereby efficiently
 * exposed to all subclasses that require tailwind.
 * Furthermore, tailwind will automatically add additional styles
 * required by any other component using tailwind-defined styles.
 */
export class TailwindElement extends LitElement {
  // Add all tailwind components to the styles property.
  public static styles = [
    unsafeCSS(preflight),
    unsafeCSS(components),
    unsafeCSS(utilities),
    unsafeCSS(screens),
  ].filter(styles => styles.cssText !== ""); // filter out empty stylesets
}
