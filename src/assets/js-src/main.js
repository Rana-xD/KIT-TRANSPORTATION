var PRINCECODE;
if (!PRINCECODE) PRINCECODE = {}; 
if (!PRINCECODE.main) PRINCECODE.main = {};

(function(){

    var func = PRINCECODE.main;

    /** Check user-agent : mobile or computer **/
    /**************************************/

    func.checkUserAgent = function() {
        if (navigator.userAgent.match(/Mobi/)) {
            $('head').append('<link rel="stylesheet" type="text/css" href="public_html/css/mobile.css">');
            return ('ontouchstart' in document.documentElement);
        }
    }

    func.windowScroll = function(){
        $(window).scroll(function(){
            var top = $('body').scrollTop();
            if(isNaN(top)){
               return;
            }else{
                 if(top>500){
                    $('.scroll_top').addClass("active");
                }else{
                    $('.scroll_top').removeClass("active");
                }
            }
        });
    }

    func.windowResize = function(){
        var footDiv1 = $('.recom_articles');
        var footDiv2 = $('.footer_quota');
        var footDiv3 = $('.footer_social');
        var footDiv4 = $('.copyright');
        var footer = $('.site_footer');
        var div1_height, div2_height, div3_height, div4_height;

        var initFooter = function(){
            var winWidth = $(window).width();
            div1_height = parseInt(footDiv1.css('height'));
            div2_height = parseInt(footDiv2.css('height'));
            div3_height = parseInt(footDiv3.css('height'));
            div4_height = parseInt(footDiv4.css('height'));

            if(winWidth<768){
                var minHeight = div1_height+div2_height+div3_height+div4_height;
                footer.css('height',minHeight+40);
            }else{
                var divLists = [
                    div1_height,
                    div2_height,
                    div3_height
                ];

                var highest = func.biggest(divLists);
                footer.css('height',highest+div4_height+40);
            }
        }
        initFooter();
        $(window).resize(function(){
            initFooter();
        });
    }

    func.biggest = function(lists){
        var instance = 0;
        for(i=0,length=lists.length;i<length;i++){
            if(instance < lists[i]){
                instance = lists[i];
            }
        }
        return instance;
    }


})();


$(document).ready(function() {
    PRINCECODE.main.windowScroll();
    PRINCECODE.main.windowResize();
});

