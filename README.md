# ember-semantic-proper-modals

An ember mixin providing proper support for [Semantic UI](https://github.com/Semantic-Org/Semantic-UI-Ember) modals.

The official `ui-modal` component does not move the modal DOM element outside of the containing component,
thus creating numerous issues with positioning, z-index and usability.  
`ember-semantic-proper-modals` fixes this by providing a mixin that exposes a `showModal` action 
and `onApproveModal` and `onDenyModal` hooks.

The drawback of this library is that you can only have one modal per component. 
This can be worked around by dynamically setting the modal's contents as you require.

## Installation

```
ember instal ember-semantic-proper-modals
```

## Usage
In your component's template, define the modal like in vanilla semantic ui:
```hbs
{{!templates/components/modal-component.hbs}}
<button onclick={{action "showModal"}}>Show modal</button>

<div class="ui modal">
  <i class="close icon"></i>
  <div class="header">
    Example modal
  </div>
  <div class="content">
    Do you really want to perform this action?
  </div>
  <div class="actions">
    <div class="ui secondary deny button">
      Cancel
    </div>
    <div class="ui negative ok button">
      Delete
    </div>
  </div>
</div>
```

Make sure to only include a single element with the `ui modal` class.  
The `showModal` action opens the modal.

In your component, include the `SemanticModalMixin` and override the 
`onApproveModal` and `onDenyModal` functions if needed:

```js
// components/modal-component.js
import Ember from 'ember';
import SemanticModalMixin from 'ember-semantic-proper-modals/mixins/semantic-modal-mixin';

export default Ember.Component.extend(SemanticModalMixin, {
  
  onApproveModal() {
    console.log('ok button pressed');
  },
  
  onDenyModal() {
    console.log('deny button pressed');
  }
  
});
```

## Notes
You can access the jQuery DOM element for the modal using 
`this.get('modal')` and invoke semantic ui behaviours etc. on it.
