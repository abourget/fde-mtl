import { LitElement, html, css } from 'lit';

class FeaturedCourses extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .courses-header {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .controls {
      margin-bottom: 10px;
    }

    .courses {
      display: flex;
      transition: all 0.4s cubic-bezier(0, 0, 0.2, 1);
      will-change: transition;
      padding-bottom: 50px;
    }

    @media (min-width: 601px) {
      .courses-header {
        flex-direction: row;
      }
    }
  `;

  static properties = {
    title: { type: String },
    courses: { type: Array },
    _courses: { type: Array, state: true },
    _selectedVideo: { type: Object, state: true }
  };

  constructor() {
    super();
    this.courses = [];
    this._courses = [];
  }

  render() {
    return html`
      <div class="courses-header">
        <h2 class="heading">${this.title}</h2>
        <div class="controls">
          <button @click=${this.shiftContentLeft}>←</button>
          <button @click=${this.shiftContentRight}>→</button>
        </div>
      </div>
      <div id="courses" class="courses">
        <slot></slot>
      </div>
    `;
  }

  updated(changedProperties) {
    if (changedProperties.has('courses')) {
      this._coursesChanged();
    }
  }

  _coursesChanged() {
    this._courses = this._randomOrder(this.courses).slice(0, 6);
  }

  _randomOrder(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  shiftContentLeft() {
    const coursesElement = this.shadowRoot.getElementById('courses');
    const transform = coursesElement.style.transform;
    const courses = coursesElement.children;

    const lastX = transform ? parseInt(transform.split('(')[1].split(',')[0]) : 0;

    const cardRect = courses[courses.length - 1].getBoundingClientRect();
    const cardWidth = cardRect.width;

    const newX = lastX + cardWidth;
    if (newX < cardWidth) {
      coursesElement.style.transform = `translate3d(${newX}px, 0, 0)`;
    }
  }

  shiftContentRight() {
    const coursesElement = this.shadowRoot.getElementById('courses');
    const transform = coursesElement.style.transform;
    const courses = coursesElement.children;

    const lastX = transform ? parseInt(transform.split('(')[1].split(',')[0]) : 0;

    const containerWidth = coursesElement.getBoundingClientRect().width;
    const cardRect = courses[courses.length - 1].getBoundingClientRect();
    const lastCardLeft = cardRect.left;
    const cardWidth = cardRect.width;

    const newX = lastX - cardWidth;
    if (lastCardLeft > containerWidth) {
      coursesElement.style.transform = `translate3d(${newX}px, 0, 0)`;
    }
  }
}

customElements.define('featured-courses', FeaturedCourses);
