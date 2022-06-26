import type { TemplateResult } from "lit";
import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { TailwindElement } from "./boilerplate/tailwind-element/tailwind-element";

// dynamically import the button-element.ts for automatic rollup chunking
// Web Components by nature are easily dynamically loaded, as the existing markup is upgraded
// once a new component is registered.
import("./components/button-element/button-element");

@customElement("app-element")
export class AppElement extends TailwindElement {
  protected render(): TemplateResult {
    return html`
      <div class="w-screen h-screen flex justify-center items-center">
        <button-element></button-element>
      </div>
    `;
  }
}
