import { LitElement, html, css } from 'lit';

class Course extends LitElement {
  static get properties() {
    return {
      permalink: { type: String },
      image: { type: String },
      label: { type: String },
      past: { type: String },
      details: { type: String },
      register: { type: String },
      preregister: { type: String },
      mapslink: { type: String },
      venue: { type: String },
      startdate: { type: String },
      language: { type: String }
    };
  }

  static styles = css`
    :host {
      display: block;
    }
    .session {
      margin-right: 24px;
      width: 400px;
      min-width: 400px;
    }
    .past {
      float: right;
      text-transform: uppercase;
      padding: 20px 0 0 10px;
      font-size: 85%;
      color: #bf4242;
    }
    .card-content, .card-actions {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: var(--primary-text-color);
    }
    .card-actions {
      text-align: right;
    }
    .header iron-image {
      height: 200px;
      width: 100%;
      object-fit: cover;
    }
    .course-name {
      line-height: 2.5ex;
    }
    .register {
      font-weight: bold;
      color: #e25c5c;
    }
  `;

  mapLanguage(input) {
    switch(input) {
      case 'fr':
        return 'Français'
      case 'en':
        return 'English'
    }
    return ''
  }

  render() {
    return html`
      <paper-card class="session">
        <div class="header">
          <a href="${this.permalink}"><iron-image src="${'/images/courses/' + this.image}" sizing="cover" alt="${this.label}" preload fade></iron-image></a>
        </div>
        <div class="card-content">
          ${this.past ? html`<span class="past">${this.past}</span>` : ''}
          <a href="${this.permalink}"><h3 class="course-name">${this.label}</h3></a>

          <paper-icon-item class="location">
            <iron-icon icon="communication:location-on" item-icon></iron-icon>
            <a target="_blank" href="${this.mapslink}">${this.venue}</a>
          </paper-icon-item>
          <paper-icon-item class="start-date">
            <iron-icon icon="icons:event" item-icon></iron-icon>
            ${this.startdate}
          </paper-icon-item>

          ${this.language ? html`
            <paper-icon-item class="course-lang">
              <iron-icon icon="icons:language" item-icon></iron-icon>
              <div>${this.mapLanguage(this.language)}</div>
            </paper-icon-item>
          ` : ''}
        </div>

        <div class="card-actions" ?hidden="${!this.details}">
          ${this.register ? html`
            <a href="${this.permalink}" class="register"><paper-button>${this.register}</paper-button></a>
          ` : ''}
          ${this.preregister ? html`
            <a href="${this.permalink}" class="register"><paper-button>${this.preregister}</paper-button></a>
          ` : ''}
          <a href="${this.permalink}"><paper-button>${this.details}</paper-button></a>
        </div>
      </paper-card>
    `;
  }
}

customElements.define('fde-course', Course);
