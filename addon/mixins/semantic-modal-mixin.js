import Ember from 'ember';

export default Ember.Mixin.create({

  // reference to the jQuery modal object which gets
  // moved outside of the component's scope when activated
  modal: null,

  // to be implemented by components using the mixin
  onApproveModal() {},
  onDenyModal() {},

  didInsertElement() {
    this._super(...arguments);

    Ember.run.scheduleOnce('afterRender', () => {
      const modal = this.$('.ui.modal');
      modal.modal({
        onApprove: () => {
          this.get('onApproveModal').bind(this)();
        },
        onDeny: () => {
          this.get('onDenyModal').bind(this)();
        }
      });

      this.set('modal', modal);
    });
  },

  showModal() {
    this.get('modal').modal('show');
  },

  actions: {
    showModal() {
      this.get('showModal')();
    }
  }

});
