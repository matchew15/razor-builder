module.exports = Backbone.View.extend({

  initialize(o = {}) {
    this.options = o;
    this.collection = o.collection;
    const config = o.config || {};
    this.config = config;
    this.pfx = config.stylePrefix || '';
    this.ppfx = config.pStylePrefix || '';
    this.em = config.em;
    this.className = this.pfx + 'asset';
    this.listenTo(this.model, 'destroy remove', this.remove);
    const init = this.init && this.init.bind(this);
    init && init(o);
  },

  template() {
    const pfx = this.pfx;
    return `
      <div class="${pfx}preview-cont">
        ${this.getPreview()}
      </div>
      <div class="${pfx}meta">
        ${this.getInfo()}
      </div>
      <div class="${pfx}close" data-toggle="asset-remove">&Cross;</div>
      <div style="clear:both"></div>
    `;
  },

  getPreview() {
    return '';
  },

  getInfo() {
    return '';
  },

  render() {
    const el = this.el;
    el.innerHTML = this.template(this, this.model);
    el.className = this.className;
    return this;
  },
});
