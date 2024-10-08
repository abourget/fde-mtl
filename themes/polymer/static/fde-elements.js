import { LitElement, html, css } from 'lit'

class FdeArticle extends LitElement {
  static styles = css``;

  render() {
    return html``;
  }
}
customElements.define('fde-article', FdeArticle);

class FdeHero extends LitElement {
  static get properties() {
    return {
      lang: { type: String }
    };
  }

  constructor() {
    super();
    this.lang = '';
  }

  static styles = css`
    :host {
      display: block;
      background: url("/images/grouppic.jpg") center center no-repeat no-repeat;
      height: 700px;
    }
    .large-view {
      padding-top: 223px;
    }
    .content {
      color: white;
      padding: 30px;
    }
    img {
      max-width: 500px;
    }
    .logo-again {
      text-align: center;
    }
    ::slotted(p) {
      padding: 15px 0;
    }
    ::slotted(a) {
      padding-left: 25px;
    }
    @media (min-width: 961px) {
      .content {
        text-align: left;
      }
    }
    @media (max-width: 960px) {
      :host {
        background-size: cover;
      }
    }
    @media (max-width: 1135px) {
      .content, .large-view {
        text-align: center;
      }
      .logo {
        max-width: 65%;
      }
      :host {
        background-position-y: 0;
        background-size: cover;
        height: 520px;
      }
      ::slotted(p) {
        padding: 1% 0;
      }
      .large-view {
        padding-top: 10%;
      }
    }
    @media (max-width: 600px) {
      .content {
        padding: 0;
      }
      .logo {
        max-width: 95%;
      }
      :host {
        background-size: cover;
        height: 450px;
      }
    }
  `;

  render() {
    return html`
      <div class="layout horizontal">
        <div class="flex large-view">
          <img class="logo" src="/images/logo-large-alpha-${this.lang}.png">
          <div class="content">
            <slot></slot>
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define('fde-hero', FdeHero);

class FdeLatestNews extends LitElement {
  constructor() {
    super();
    this.wide = false;
  }

  static get properties() {
    return {
      wide: { type: Boolean, state: true }
    };
  }

  static styles = css`
    :host {
      display: block;
    }
    ::slotted(h3) {
      color: var(--default-primary-color, inherit);
    }
    ::slotted(.read-more-link) {
      text-align: right;
      color: var(--default-primary-color, inherit);
    }
    ::slotted(.latest-news-article) {
      padding: 0 30px;
    }
    .layout {
      display: flex;
    }
    .layout[vertical] {
      flex-direction: column;
    }
  `;

  render() {
    return html`
      <slot name="title" select="h2[title]"></slot>
      <div class="layout ${this.wide ? '' : 'vertical'}">
        <slot></slot>
      </div>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    this.updateWide();
    window.addEventListener('resize', this.updateWide.bind(this));
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('resize', this.updateWide.bind(this));
  }

  updateWide() {
    this.wide = window.matchMedia('(min-width: 960px)').matches;
  }
}
customElements.define('fde-latest-news', FdeLatestNews);

class FdeFooter extends LitElement {
  constructor() {
    super();
    this.wide = false;
  }

  static get properties() {
    return {
      wide: { type: Boolean, state: true }
    };
  }

  static styles = css`
    :host {
      display: block;
    }
    .layout {
      display: flex;
    }
    .layout[vertical] {
      flex-direction: column;
    }
  `;

  render() {
    return html`
      <div class="layout ${this.wide ? '' : 'vertical'}">
        <slot></slot>
      </div>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    this.updateWide();
    window.addEventListener('resize', this.updateWide.bind(this));
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('resize', this.updateWide.bind(this));
  }

  updateWide() {
    this.wide = window.matchMedia('(min-width: 960px)').matches;
  }
}
customElements.define('fde-footer', FdeFooter);
