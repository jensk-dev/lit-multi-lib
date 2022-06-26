import type { TemplateResult } from "lit";
import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("app-element")
export class AppElement extends LitElement {
  protected render(): TemplateResult {
    return html` <span>Hello World</span> `;
  }
}
