import { PolymerElement, html } from '@polymer/polymer';
import afterNextRender from '../../shared/afterNextRender';
import throttle from '../../shared/throttle';

export default class CanvasElement extends PolymerElement {
  static get is() {
    return 'a-canvas';
  }

  static get properties() {
    return {
      width: {
        type: String,
        value: '300'
      },
      height: {
        type: String,
        value: '150'
      }
    };
  }

  ready() {
    super.ready();
    this.width = this.width / 750 * document.body.clientWidth;
    this.height = this.height / 750 * document.body.clientHeight;
  }

  getContext(type) {
    if (type === '2d') {
      return this.context2d || (this.context2d = this.$.canvasEl.getContext('2d'));
    } else {
      return null;
    }
  }

  static get template() {
    return html`
    <canvas id="canvasEl" width="{{width}}" height="{{height}}"></canvas>
    `;
  }
}

customElements.define(CanvasElement.is, CanvasElement);
