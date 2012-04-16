/*global jQuery */
/*! 
* Dataminer 1.0.1
*
* Copyright 2012, Sean Gofus - http://www.seangofus.com
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
* Date: Sun April 16 2:40:00 2011 -06000
*/
(function ($) {
	$.fn.dataMiner = function (options) {
		var selector;
		var settings = {
			customSelector: null
		}
		if ( options ) { 
			$.extend( settings, options );
		}
		if( settings.customSelector ) {
			selector = settings.customSelector.toLowerCase();
		} else {
			selector = 'name';
		}
		
		var dataArray = {};
		
	    $(this).find('*').each(function(){
	    	
	    	var inputEl = $(this).is('input:not(input[type="submit"])', this);
	    	var textareaEl = $(this).is('textarea', this);
	    	var selectEl = $(this).is('select', this);

    		var elName = $(this).attr(selector);
    		if( elName == undefined ) {
    			elName = '';
    		}
	    	
	    	if( inputEl ) {
	    		dataArray[elName] = $(this).val();
	    	} else if ( textareaEl ) {
	    		dataArray[elName] = $(this).val();
	    	} else if ( selectEl ) {
	    		dataArray[elName] = $(this).find('option:selected').val();
	    	}
	    	
	    });
	    
	    return dataArray;
	    
	};
})(jQuery);