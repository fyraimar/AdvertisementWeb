/* JAVASCRIPT */

// Onload
window.onload = function() {

    window.setInterval(function(){ window.scrollTo(0, 0);}, 0);
    $("#loading").transition({ opacity: '0', y: '-100%' }, 500, 'ease');
};

// Page Swipe
$(function() {

    document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
        WeixinJSBridge.call('hideToolbar');
    });

    $("#cover").bind("swipeup", HomePageSwipeupHandler);
    $("#cover").bind("swipedown", HomePageSwipedownHandler);
    $("#cover_arrow").bind("click", HomePageSwipeupHandler);

    $("#page1").bind("swipeup", Page1_SwipeupHandler);
    $("#page1").bind("swipedown", Page1_SwipedownHandler);

    $("#page2").bind("swipeup", Page2_SwipeupHandler);
    $("#page2").bind("swipedown", Page2_SwipedownHandler);

    $("#page3").bind("swipeup", Page3_SwipeupHandler);
    $("#page3").bind("swipedown", Page3_SwipedownHandler);

    $("#page4").bind("swipeup", Page4_SwipeupHandler);
    $("#page4").bind("swipedown", Page4_SwipedownHandler);

    $("#page5").bind("swipedown", Page5_SwipedownHandler);

});

// Page Swipe Handler
function HomePageSwipedownHandler(event) {

    // Home Page Swipedown
}

function HomePageSwipeupHandler(event) {
    
    $("#cover").transition({ y: '-100%' } , 500, 'ease');
    Page1_ShowEffect();
}

function Page1_SwipedownHandler(event) {

    $("#cover").transition({ y: '0%' } , 500, 'ease');
}

function Page1_SwipeupHandler(event) {

    $("#page1").transition({ y: '-100%' } , 500, 'ease');
    Page2_ShowEffect();
}

function Page2_SwipedownHandler(event) {

    $("#page1").transition({ y: '0%' } , 500, 'ease');
    Page1_ShowEffect();
}

function Page2_SwipeupHandler(event) {

    $("#page2").transition({ y: '-100%' } , 500, 'ease');
}

function Page3_SwipedownHandler(event) {

    $("#page2").transition({ y: '0%' } , 500, 'ease');
    Page2_ShowEffect();
}

function Page3_SwipeupHandler(event) {

    $("#page3").transition({ y: '-100%' } , 500, 'ease');
}

function Page4_SwipedownHandler(event) {

    $("#page3").transition({ y: '0%' } , 500, 'ease');
}

function Page4_SwipeupHandler(event) {

    $("#page4").transition({ y: '-100%' } , 500, 'ease');
}

function Page5_SwipedownHandler(event) {

    $("#page4").transition({ y: '0%' } , 500, 'ease');
}

// Page Effects
$(function() {
    
    window.setInterval(function(){

        // Cover Page
        $("#cover_arrow").transition({ y: '-15%' }, 400, 'linear').transition({ y: '5%' }, 400, 'linear');

        // Page 1
        $("#page1_arrow_top").transition({ y: '15%' }, 400, 'linear').transition({ y: '-5%' }, 400, 'linear');
        $("#page1_arrow_bottom").transition({ y: '-15%' }, 400, 'linear').transition({ y: '5%' }, 400, 'linear');

        // Page 2
        $("#page2_arrow_top").transition({ y: '15%' }, 400, 'linear').transition({ y: '-5%' }, 400, 'linear');
        $("#page2_arrow_bottom").transition({ y: '-15%' }, 400, 'linear').transition({ y: '5%' }, 400, 'linear');
        
        // Page 3
        $("#page3_arrow_top").transition({ y: '15%' }, 400, 'linear').transition({ y: '-5%' }, 400, 'linear');
        $("#page3_arrow_bottom").transition({ y: '-15%' }, 400, 'linear').transition({ y: '5%' }, 400, 'linear');

        // Page 4
        $("#page4_arrow_top").transition({ y: '15%' }, 400, 'linear').transition({ y: '-5%' }, 400, 'linear');

    });

});

function Page1_ShowEffect() {

//    $("#page1_photo").css({ transform: 'scale(0)' }).transition({ scale: 1, delay: 300 });
    $("#page1_header").css({ y: '-100%' }).transition({ y: '0%' }, 600, 'ease');
    $("#page1_text_title_container").css({ x: '100%' }).transition({ x: '0%' }, 600, 'ease');
    $("#page1_text_container").css({ y: '100%' }).transition({ y: '0%' }, 600, 'ease');
}


