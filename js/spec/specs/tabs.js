/*
	Specs for Tabs (plugins/tabs.js)
*/

describe("Tabs", {
  'before all': function(){
    insertPartial('tabs.html');
    Tabs.autoActivate();
  },
  
  
  'should hide non-active tabs': function(){
    value_of($('open_id_form').getStyle('display')).should_be('none');
  },
  'should activate the first tab by default': function(){
    value_of($('spec_StandardLink').hasClass('selected')).should_be(true);
    value_of($('spec_OpenIDLink').hasClass('selected')).should_be(false);
    value_of($('standard_form').getStyle('display')).should_not_be('none');
  },
  'should show content for the tab that is clicked': function(){
    value_of($('open_id_form').getStyle('display')).should_be('none');
    $('spec_OpenIDLink').fireEvent('click');
    value_of($('open_id_form').getStyle('display')).should_not_be('none');
    value_of($('standard_form').getStyle('display')).should_be('none');
    value_of($('spec_OpenIDLink').hasClass('selected')).should_be(true);
    value_of($('spec_StandardLink').hasClass('selected')).should_be(false);
  }
});