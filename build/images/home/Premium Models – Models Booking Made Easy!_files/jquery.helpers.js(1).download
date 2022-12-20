
/**
 * This tiny script just helps us show save status
 */

var ShowStatus;

jQuery(document).ready(function($) {
    ShowStatus = (function() {
        "use strict";
    
        var elem,
            hideHandler,
            that = {};
    
        that.init = function(options) {
            $('.bootstrap-wrapper:first').append('<div style="display: none; z-index:10040;" class="bb-alert alert alert-danger"><span>Data saved...</span></div>');
            elem = $('div.bb-alert');
        };
    
        that.show = function(text) {
            clearTimeout(hideHandler);
            
            if($('div.bb-alert').length == 0)
            {
                that.init();
            }
    
            elem.find("span").html(text);
            elem.fadeIn(200);
    
            hideHandler = setTimeout(function() {
                that.hide();
            }, 4000);
        };
    
        that.hide = function() {
            elem.fadeOut(200);
        };
    
        return that;
    }());

    if(jQuery('.sw-search-start').length == 0 && jQuery('#results_top').length > 0 && jQuery('#results-profile').length == 0)
    {
        jQuery('div.sw-order-view').hide();
        //alert('Primary search missing on results page');
    }


});