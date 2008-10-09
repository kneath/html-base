/*------------------------------------------------------------------------------------
  Plugin: EventTriggers
  Description: Behaviour (http://ripcord.co.nz/behaviour/) inspired event triggers
  Author: Kyle Neath
  Dependencies: mootools.v1.2 
------------------------------------------------------------------------------------*/

var EventTriggers = {
	triggers : [],
	
	register : function(sheet){
		this.triggers.push(sheet);
	},
	
	start : function(){
		window.addEvent('domready', this.apply.bindWithEvent(this));
	},
	
	apply : function(){
	  this.triggers.each(function(trigger){
	    for (selector in trigger){
	      var elements = $$(selector);
	      if (!elements) continue;
	      elements.each(function(element){
	        trigger[selector](element);
	      });
	    }
	  });
	}
}

EventTriggers.start();