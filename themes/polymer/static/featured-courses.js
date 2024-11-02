import { LitElement, html, css } from 'lit';

class FeaturedCourses extends LitElement {
  static styles = css`
    :host {
      display: block;
      position: relative;
    }

    .scrollable {
      display: flex;
      overflow-x: auto;
      scroll-behavior: smooth;
      -webkit-overflow-scrolling: touch;
      padding-bottom: 20px;
      position: relative;
    }

    .scrollable::-webkit-scrollbar {
      height: 8px;
    }

    .scrollable::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.3);
      border-radius: 4px;
    }

    .scrollable::-webkit-scrollbar-track {
      background-color: rgba(0, 0, 0, 0.1);
    }

    #courses {
      display: flex;
    }

    .courses-header {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .controls {
      margin-bottom: 10px;
    }

    #grad {
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      width: 76px;
      background: linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,1));
      pointer-events: none;
      z-index: 1;
    }

    @media (min-width: 601px) {
      .courses-header {
        flex-direction: row;
      }
    }
  `;

  static properties = {
    title: { type: String },
  };

  render() {
    return html`
      <div class="courses-header">
        <h2 class="heading">${this.title}</h2>
      </div>
      <div id="courses" class="courses">
        <div id="grad"></div>
        <div class="scrollable">
          <slot></slot>
        </div>
      </div>
    `;
  }
}

customElements.define('featured-courses', FeaturedCourses);
