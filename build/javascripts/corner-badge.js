(function() {
  Polymer('corner-badge', {
    location: 'top right',
    color: 'red',
    ready: function() {
      return this.$.message.innerText = this.innerText;
    }
  });

}).call(this);
