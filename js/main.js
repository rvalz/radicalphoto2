$(document).ready(function() {
    
    // ABOUT PAGE
    var menu = $('#bios a');
    menu.click(function (e) {
        e.preventDefault(); // return false
        var target = $(this).attr('href');
        $('#bio').load(target + ' #description', function() {  
            $('#bio').hide().slideDown(1000);
        });
    });
 
     //GALLERY PAGE
    $('#gallery li a').mouseover(function () {
        var imgSrc = $(this).attr('href');
        var imgAlt = $(this).children('img').attr('alt');
        
        $('#showcase').attr('src', imgSrc);
        $('#showcase').attr('alt', imgAlt);
    });

    // CONTACT PAGE
    var myForm = $('#myform'); // form
    var errorName = $('#error-name'); // error msg name field
    var errorEmail = $('#error-email'); // error msg email field
    var errorMsg = $('#error-msg'); // error msg msg field
    var errorWarning = $('#errors'); // error msg top
    var theName = $('#username');
    var theEmail = $('#email');
    var theMessage = $('#myMessage');
    
    myForm.submit(function(ev) {
        var errors = 0;
        var userName = $('#username').val(); // username field
        var userEmail = $('#email').val(); //user email field
        var userMessage = $('#myMessage').val();

        if (userName == '') {
            theName.css('border-color', 'red');
            theName.css('background-color','#FF9');
            errorName.text('This field is required');
            errorName.css('color', '#C00');
            errors++;
        } else {
            theName.css('border-color', 'green');
            theName.css('background-color','#FFF');
            errorName.text(' ');
        }
        if (userEmail == '') {
            theEmail.css('border-color', 'red');
            theEmail.css('background-color','#FF9');
            errorEmail.text('This field is required');
            errorEmail.css('color', '#C00');
            errors++;
        } else {
            theEmail.css('border-color', 'green');
            theEmail.css('background-color','#FFF');
            errorEmail.text(' ');
        }

        if (userMessage == '') {
            theMessage.css('border-color', '#C00');
            theMessage.css('background-color','#FF9');
            errorMsg.text('This field is required');
            errorMsg.css('color','#C00');
            errors++;
        } else {
            theMessage.css('border-color', 'green');;
            theMessage.css('background-color','#FFF');
            errorMsg.text(' ');
            }
            
        if (errors>0) {
            errorWarning.show();
            errorWarning.css('color', '#C00');
            ev.preventDefault(); //user message field
        } 
        else {
            errorWarning.hide();  
        }
    });
});