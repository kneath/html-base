/*------------------------------------------------------------------------------------
  Plugin: Tabs
  Description: Just some basic tabs
  Author: Kyle Neath
  Dependencies: mootools.v1.2
------------------------------------------------------------------------------------*/

var Tabs = new Class({
  triggers: [],
  containers: {},
  selectedContainer: null,
  
  initialize: function(element){
    this.triggers = $(element).getElements('a');
    var linkSelected = false;
    
    this.triggers.each(function(trigger){
      var id = trigger.getAttribute('href').getAnchor();
      var container = $(id);
      if (container == null) return;
      
      trigger.addEvent('click', this.click.bindWithEvent(this, trigger));
      this.containers[id] = container;
      
      if (trigger.hasClass('selected')){
        trigger.fireEvent('click');
        linkSelected = true;
      }
    }, this);
    
    if (!linkSelected) this.triggers[0].fireEvent('click');
  },
  
  click: function(event, trigger){
    var id = trigger.getAttribute('href').getAnchor();
    if (this.selectedContainer != null) this.selectedContainer.setStyle('display', 'none');
    this.selectedContainer = this.containers[id].setStyle('display', '');
    
    this.triggers.removeClass('selected');
    trigger.addClass('selected');
    if (event) event.stop();
  }
});

$extend(Tabs, {
  // Automatically finds all tabbable elements and activates them
  autoActivate: function(){
    $$('.tab-content').setStyle('display', 'none');
    $$('.tabs').each(function(el){ new Tabs(el); });
  }
});

// String Functions
String.prototype.getAnchor = function() {
  return /#([a-z][\w.:-]*)$/i.exec(this)[1];
}