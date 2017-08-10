import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';

$( document ).ready(function(){
    var userLang = navigator.language || navigator.userLanguage;
    if (userLang == "es") {
       window.location.href = "www.facebook.com"
    }
    else if(userLang == "en"){
       window.location.href = "www.facebook.com"
    }
    else if(userLang == "de"){
       window.location.href = "www.youtube.com"
    }
    else {
        window.location.href = "www.google.com"
    }
});
