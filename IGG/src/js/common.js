$(document).ready(function(){
    $('#showMenu').click(function(){
        if($('body').hasClass('expanded')){
            $('body').removeClass('expanded');
        }else{
            $('body').addClass('expanded');
        }
        return false;
    });
    
    $('.mainWrapper').click(function(){
        $('body').removeClass('expanded');
    });
    
    $('#language').click(function(){
        openLanguage();
        return false;
    });
    $('#close').click(function(){
        closeLanguage();
        return false;
    });
});
