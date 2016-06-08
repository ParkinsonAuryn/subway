
$("#login_btn_sidebar").click(function(){

    show_stack_bar_bottom('error', 'Sorry', 'Logins are disabled for now');

});

$('[data-popup=popover-custom-resultHover]').popover({
    template: '<div class="popover border-info-400"><div class="arrow"></div><h3 class="popover-title bg-info-400"></h3><div class="popover-content"></div></div>'
});

//Makes popover not squished
$('[data-toggle="popover"]').popover({
    container: 'body'
});

//  Tooltips
$('[data-popup="tooltip"]').tooltip();

function preloader_load(){
    $.blockUI({
        message: '<i class="icon-spinner4 spinner"></i>',
        timeout: 4000, //unblock after 2 seconds
        bindEvents: true,
        forceIframe: true,
        overlayCSS: {
            backgroundColor: '#1b2024',
            opacity: 1,
            'z-index': 9998,
            cursor: 'wait'
        },
        css: {
            border: 0,
            color: '#fff',
            padding: 0,
            'z-index': 9999,
            backgroundColor: 'transparent'
        }
    });
}


//  Block form - Blocks the element passed through
//  ----------------------------------------------
function block_form(a){
    var block = a;
    $(block).block({
        message: '<i class="icon-spinner4 spinner"></i>',
        overlayCSS: {
            backgroundColor: '#fff',
            opacity: 0.8,
            cursor: 'wait'
        },
        css: {
            border: 0,
            padding: 0,
            backgroundColor: 'transparent'
        }
    });
}

//  Unblock - Unblocks the element passed through
//  ----------------------------------------------
function unblock(a){
    var block = a;
    $(block).unblock();
}


/* ------------------------------------------------------------------------------
*
*  # PNotify notifications
*
*  Specific JS code additions for components_notifications_pnotify.html page
*
*  Version: 1.0
*  Latest update: Aug 1, 2015
*
* ---------------------------------------------------------------------------- */

    function notification_pn(a, b){
        var opts = {
            title: false,
            text: a,
            addclass: 'alert-styled-right',
            type: b
        };
        switch(b){
            case 'info':
                opts.addclass = 'bg-' + b + ' alert-styled-right';
                break;
            case 'success':
                opts.addclass = 'bg-' + b + ' alert-styled-right';
                break;
            case 'error':
                opts.addclass = 'bg-danger alert-styled-right';
                break;
            case 'notice':
                opts.addclass = 'bg-primary alert-styled-right';
                break;
            case 'warning':
                opts.addclass = 'bg-' + b + ' alert-styled-right';
                break;
            default:
                opts.addclass = 'bg-primary alert-styled-right';
                break;
        }
        new PNotify(opts);
    }


    // Stacks
    // ------------------------------

    // Define directions
    var stack_top_left = {"dir1": "down", "dir2": "right", "push": "top"};
    var stack_bottom_left = {"dir1": "right", "dir2": "up", "push": "top"};
    var stack_bottom_right = {"dir1": "up", "dir2": "left", "firstpos1": 25, "firstpos2": 25};
    var stack_custom_left = {"dir1": "right", "dir2": "down"};
    var stack_custom_right = {"dir1": "left", "dir2": "up", "push": "top"};
    var stack_custom_top = {"dir1": "down", "dir2": "right", "push": "top", "spacing1": 1};
    var stack_custom_bottom = {"dir1": "up", "dir2": "right", "spacing1": 1}

    function show_stack_bar_top(type, title, text) {
        var opts = {
            title: title,
            text: text,
            addclass: "stack-custom-top bg-primary",
            cornerclass: "no-border-radius",
            width: "100%",
            stack: stack_custom_top
        };
        switch (type) {
        case 'error':
            opts.title = title;
            opts.text = text;
            opts.addclass = "stack-custom-top bg-danger";
            opts.type = "error";
            break;
        case 'info':
            opts.title = title;
            opts.text = text;
            opts.addclass = "stack-custom-top bg-info";
            opts.type = "info";
            break;
        case 'success':
            opts.title = title;
            opts.text = text;
            opts.addclass = "stack-custom-top bg-success";
            opts.type = "success";
            break;
        }
        new PNotify(opts);
    }

    function show_stack_bar_bottom(type, title, text) {
        var opts = {
            title: title,
            text: text,
            addclass: "stack-custom-bottom bg-primary",
            cornerclass: "no-border-radius",
            width: "100%",
            stack: stack_custom_bottom
        };
        switch (type) {
        case 'error':
            opts.title = title;
            opts.text = text;
            opts.addclass = "stack-custom-bottom bg-danger";
            opts.type = "error";
            break;
        case 'info':
            opts.title = title;
            opts.text = text;
            opts.addclass = "stack-custom-bottom bg-info";
            opts.type = "info";
            break;
        case 'success':
            opts.title = title;
            opts.text = text;
            opts.addclass = "stack-custom-bottom bg-success";
            opts.type = "success";
            break;
        }
        new PNotify(opts);
    }


$(function() {

    // copy_hover_init();
    copy_init();

    // Buttons with progress/spinner
    // ------------------------------

    // Initialize on button click
    $('.btn-loading').click(function () {
        var btn = $(this);
        btn.button('loading')
        setTimeout(function () {
            btn.button('reset')
        }, 3000)
    });

    // Button with spinner
    /*
    Ladda.bind('.btn-ladda-spinner', {
        dataSpinnerSize: 16,
        timeout: 2000
    });

    // Button with progress
    Ladda.bind('.btn-ladda-progress', {
        callback: function(instance) {
            var progress = 0;
            var interval = setInterval(function() {
                progress = Math.min(progress + Math.random() * 0.1, 1);
                instance.setProgress(progress);

                if( progress === 1 ) {
                    instance.stop();
                    clearInterval(interval);
                }
            }, 200);
        }
    });
    */



    // Animated dropdowns
    // ------------------------------

    // CSS3 animations
    $('.dropdown-animated, .btn-group-animated').on('show.bs.dropdown', function(e){
        $(this).find('.dropdown-menu').addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass('animated bounceIn')
        });
    });


    //
    // Velocity animations
    //

    // Open
    $('.dropdown-velocity, .btn-group-velocity').on('show.bs.dropdown', function(e){
        $(this).find('.dropdown-menu').velocity('transition.slideUpIn', {
            duration: 200
        })
    });

    // Close
    $('.dropdown-velocity, .btn-group-velocity').on('hide.bs.dropdown', function(e){
        $(this).find('.dropdown-menu').velocity('transition.slideLeftOut', {
            duration: 200,
            complete: function() {
                $(this).removeAttr('style');
            }
        })
    });


    //
    // jQuery animations
    //

    // Open
    $('.dropdown-fade, .btn-group-fade').on('show.bs.dropdown', function(e){
        $(this).find('.dropdown-menu').fadeIn(250);
    });

    // Close
    $('.dropdown-fade, .btn-group-fade').on('hide.bs.dropdown', function(e){
        $(this).find('.dropdown-menu').fadeOut(250);
    });




    // // Requirements a inserted password should meet
    // $.passy.requirements = {

    //     // Character types a password should contain
    //     characters: [
    //         $.passy.character.DIGIT,
    //         $.passy.character.LOWERCASE,
    //         $.passy.character.UPPERCASE,
    //         $.passy.character.PUNCTUATION
    //     ],

    //     // A minimum and maximum length
    //     length: {
    //         min: 6,
    //         max: 64
    //     }
    // };


    // // Thresholds are numeric values representing
    // // the estimated amount of days for a single computer
    // // to brute force the password, assuming it processes
    // // about 1,000,000 passwords per second

    // $.passy.threshold = {
    //     medium: 365,
    //     high: Math.pow( 365, 2 ),
    //     extreme: Math.pow( 365, 5 )
    // };



    //  jQuery Validation - Add rule IP Validation
    //  ==========================================
    jQuery.validator.addMethod('validIP', function(value) {
        var split = value.split('.');
        if (split.length != 4)
            return false;

        for (var i=0; i<split.length; i++) {
            var s = split[i];
            if (s.length==0 || isNaN(s) || s<0 || s>255)
                return false;
        }
        return true;
    }, ' Invalid IP Address');

});

function update_overview(){
    var index;
    var divs = ["totalImagesValue", "averageSizeValue", "largestSizeValue", "smallestSizeValue"];
    jQuery.each(divs, function(index, value) {
        var dataString = 'statistic=' + this + '';
        var myId = '#' + this;
        $.ajax({
            type: "POST",
            url: "ajax/getOverview.php",
            data: dataString,
            cache: false,
            success: function(result){
                $(myId).html(result);
            }
        });
    });
}

function test_update(){
    var dataString = 'statistic=true';
    $.ajax({
        type: "POST",
        url: "ajax/getOverview.php",
        data: dataString,
        cache: false,
        success: function(result){
            $.each(result, function(k, v) {
                var id = '#' + k;
                $(id).html(v);
            });
            console.log(result);
            // for (var i = 0,)
            // $(myId).html(result);
        }
    });
}

function copy_init(){
    /*
        not used anymore (fuck flash)
        =========================
    var clipboard = new ZeroClipboard($('.copy'));

    clipboard.on("ready", function(readyEvent) {
        clipboard.on("aftercopy", function(event) {
            show_stack_bar_top('info', 'title', 'text');
        });
    });
    copy_hover_init();
    */

    var clipboard = new Clipboard('.copy');

    clipboard.on('success', function(e) {
        notification_pn('Copied!', 'success');
        e.clearSelection();
    });

    clipboard.on('error', function(e) {
        notification_pn('Something went wrong', 'error');
        // console.error('Action:', e.action);
        // console.error('Trigger:', e.trigger);
    });

}


function copy_hover_init(){
    $('.copy').hover(function(){
        $(this).parent().addClass("active");
        $(this).parent().addClass("animated swing");
    }, function(){
        $(this).parent().removeClass("active");
        $(this).parent().removeClass("animated swing");
    });
}
