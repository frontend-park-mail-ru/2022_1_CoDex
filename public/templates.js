function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_classes(s,r){return Array.isArray(s)?pug_classes_array(s,r):s&&"object"==typeof s?pug_classes_object(s):s||""}
function pug_classes_array(r,a){for(var s,e="",u="",c=Array.isArray(a),g=0;g<r.length;g++)(s=pug_classes(r[g]))&&(c&&a[g]&&(s=pug_escape(s)),e=e+u+s,u=" ");return e}
function pug_classes_object(r){var a="",n="";for(var o in r)o&&r[o]&&pug_has_own_property.call(r,o)&&(a=a+n+o,n=" ");return a}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;
function pug_rethrow(e,n,r,t){if(!(e instanceof Error))throw e;if(!("undefined"==typeof window&&n||t))throw e.message+=" on line "+r,e;var o,a,i,s;try{t=t||require("fs").readFileSync(n,{encoding:"utf8"}),o=3,a=t.split("\n"),i=Math.max(r-o,0),s=Math.min(a.length,r+o)}catch(t){return e.message+=" - could not read from "+n+" ("+t.message+")",void pug_rethrow(e,null,r)}o=a.slice(i,s).map(function(e,n){var t=n+i+1;return(t==r?"  > ":"    ")+t+"| "+e}).join("\n"),e.path=n;try{e.message=(n||"Pug")+":"+r+"\n"+o+"\n\n"+e.message}catch(e){}throw e}function auth(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;
    var locals_for_with = (locals || {});
    
    (function (input) {
      ;pug_debug_line = 1;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002Fauth.pug";
pug_html = pug_html + "\u003Cform" + (pug_attr("class", pug_classes([input.isLogin ? "login__form" : "signup__form"], [true]), false, false)+" name=\"authForm\"") + "\u003E";
;pug_debug_line = 2;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002Fauth.pug";
if (!input.isLogin) {
;pug_debug_line = 3;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002Fauth.pug";
pug_html = pug_html + "\u003Cdiv class=\"auth_name\"\u003E";
;pug_debug_line = 4;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002Fauth.pug";
pug_html = pug_html + "\u003Cdiv class=\"auth_name_labels\"\u003E";
;pug_debug_line = 5;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002Fauth.pug";
pug_html = pug_html + "\u003Clabel class=\"text_inputs__label\" for=\"name\"\u003E";
;pug_debug_line = 5;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002Fauth.pug";
pug_html = pug_html + "Имя\u003C\u002Flabel\u003E";
;pug_debug_line = 6;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002Fauth.pug";
pug_html = pug_html + "\u003Cdiv id=\"auth-name-error\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 7;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002Fauth.pug";
pug_html = pug_html + "\u003Cinput class=\"auth_input\" id=\"text-inputs-name\" type=\"text\" name=\"name\" placeholder=\"Введите имя\"\u002F\u003E\u003C\u002Fdiv\u003E";
}
;pug_debug_line = 8;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002Fauth.pug";
pug_html = pug_html + "\u003Cdiv class=\"auth_email\"\u003E";
;pug_debug_line = 9;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002Fauth.pug";
pug_html = pug_html + "\u003Cdiv class=\"auth_email_labels\"\u003E";
;pug_debug_line = 10;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002Fauth.pug";
pug_html = pug_html + "\u003Clabel class=\"text_inputs__label\" for=\"email\"\u003E";
;pug_debug_line = 10;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002Fauth.pug";
pug_html = pug_html + "Email\u003C\u002Flabel\u003E";
;pug_debug_line = 11;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002Fauth.pug";
pug_html = pug_html + "\u003Cdiv id=\"auth-email-error\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 12;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002Fauth.pug";
pug_html = pug_html + "\u003Cinput class=\"auth_input\" id=\"text-inputs-email\" type=\"email\" name=\"email\" placeholder=\"Введите e-mail\"\u002F\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 13;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002Fauth.pug";
pug_html = pug_html + "\u003Cdiv class=\"auth_password\"\u003E";
;pug_debug_line = 14;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002Fauth.pug";
pug_html = pug_html + "\u003Cdiv class=\"auth_password_labels\"\u003E";
;pug_debug_line = 15;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002Fauth.pug";
pug_html = pug_html + "\u003Clabel class=\"text_inputs__label\" for=\"password\"\u003E";
;pug_debug_line = 15;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002Fauth.pug";
pug_html = pug_html + "Пароль\u003C\u002Flabel\u003E";
;pug_debug_line = 16;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002Fauth.pug";
pug_html = pug_html + "\u003Cdiv id=\"auth-password-error\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 17;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002Fauth.pug";
pug_html = pug_html + "\u003Cinput class=\"auth_input\" id=\"text-inputs-password\" type=\"password\" name=\"password\" placeholder=\"Введите пароль\"\u002F\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 18;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002Fauth.pug";
if (!input.isLogin) {
;pug_debug_line = 19;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002Fauth.pug";
pug_html = pug_html + "\u003Cdiv class=\"auth_repeat_password\"\u003E";
;pug_debug_line = 20;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002Fauth.pug";
pug_html = pug_html + "\u003Cdiv class=\"auth_repeat_password_labels\"\u003E";
;pug_debug_line = 21;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002Fauth.pug";
pug_html = pug_html + "\u003Clabel class=\"text_inputs__label\" for=\"repeatPassword\"\u003E";
;pug_debug_line = 21;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002Fauth.pug";
pug_html = pug_html + "Повторите пароль\u003C\u002Flabel\u003E";
;pug_debug_line = 22;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002Fauth.pug";
pug_html = pug_html + "\u003Cdiv id=\"auth_repeat_password_error\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 23;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002Fauth.pug";
pug_html = pug_html + "\u003Cinput class=\"auth_input\" id=\"text-inputs-repeat-password\" type=\"password\" name=\"repeatPassword\" placeholder=\"Повторите пароль\"\u002F\u003E\u003C\u002Fdiv\u003E";
}
;pug_debug_line = 24;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002Fauth.pug";
pug_html = pug_html + "\u003Cdiv class=\"auth_btn\"\u003E";
;pug_debug_line = 25;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002Fauth.pug";
pug_html = pug_html + "\u003Cdiv id=\"auth-btn-error\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 26;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002Fauth.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"auth__btn\""+" type=\"button\""+pug_attr("value", input.isLogin ? "Войти" : "Зарегистрироваться", true, false)+" name=\"submitBtn\"") + "\u002F\u003E\u003C\u002Fdiv\u003E\u003C\u002Fform\u003E";
    }.call(this, "input" in locals_for_with ?
        locals_for_with.input :
        typeof input !== 'undefined' ? input : undefined));
    ;} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}
function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(e,n,r,t){if(!(e instanceof Error))throw e;if(!("undefined"==typeof window&&n||t))throw e.message+=" on line "+r,e;var o,a,i,s;try{t=t||require("fs").readFileSync(n,{encoding:"utf8"}),o=3,a=t.split("\n"),i=Math.max(r-o,0),s=Math.min(a.length,r+o)}catch(t){return e.message+=" - could not read from "+n+" ("+t.message+")",void pug_rethrow(e,null,r)}o=a.slice(i,s).map(function(e,n){var t=n+i+1;return(t==r?"  > ":"    ")+t+"| "+e}).join("\n"),e.path=n;try{e.message=(n||"Pug")+":"+r+"\n"+o+"\n\n"+e.message}catch(e){}throw e}function collections(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;
    var locals_for_with = (locals || {});
    
    (function (description, imgSrc, number, page) {
      ;pug_debug_line = 1;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fcollections\u002Fcollections.pug";
pug_html = pug_html + "\u003Ca" + (" class=\"collection\""+pug_attr("href", ("/" + page), true, false)+pug_attr("data-section", page, true, false)+pug_attr("parameters", number, true, false)) + "\u003E";
;pug_debug_line = 2;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fcollections\u002Fcollections.pug";
pug_html = pug_html + "\u003Cdiv class=\"collection__wrapper\"\u003E";
;pug_debug_line = 3;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fcollections\u002Fcollections.pug";
pug_html = pug_html + "\u003Cimg" + (" class=\"collection_img\""+pug_attr("data-section", page, true, false)+pug_attr("src", ("../server/images/" + imgSrc), true, false)+pug_attr("parameters", number, true, false)) + "\u002F\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 4;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fcollections\u002Fcollections.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"collection__description\""+pug_attr("data-section", page, true, false)) + "\u003E";
;pug_debug_line = 4;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fcollections\u002Fcollections.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = description) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E";
    }.call(this, "description" in locals_for_with ?
        locals_for_with.description :
        typeof description !== 'undefined' ? description : undefined, "imgSrc" in locals_for_with ?
        locals_for_with.imgSrc :
        typeof imgSrc !== 'undefined' ? imgSrc : undefined, "number" in locals_for_with ?
        locals_for_with.number :
        typeof number !== 'undefined' ? number : undefined, "page" in locals_for_with ?
        locals_for_with.page :
        typeof page !== 'undefined' ? page : undefined));
    ;} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}
function pug_rethrow(e,n,r,t){if(!(e instanceof Error))throw e;if(!("undefined"==typeof window&&n||t))throw e.message+=" on line "+r,e;var o,a,i,s;try{t=t||require("fs").readFileSync(n,{encoding:"utf8"}),o=3,a=t.split("\n"),i=Math.max(r-o,0),s=Math.min(a.length,r+o)}catch(t){return e.message+=" - could not read from "+n+" ("+t.message+")",void pug_rethrow(e,null,r)}o=a.slice(i,s).map(function(e,n){var t=n+i+1;return(t==r?"  > ":"    ")+t+"| "+e}).join("\n"),e.path=n;try{e.message=(n||"Pug")+":"+r+"\n"+o+"\n\n"+e.message}catch(e){}throw e}function header(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;pug_debug_line = 1;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fheader\u002Fheader.pug";
pug_html = pug_html + "\u003Cheader id=\"navbar\"\u003E";
;pug_debug_line = 2;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fheader\u002Fheader.pug";
pug_html = pug_html + "\u003Ca class=\"navbar_logo\" href=\"\u002F\" data-section=\"main\"\u003E";
;pug_debug_line = 3;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fheader\u002Fheader.pug";
pug_html = pug_html + "\u003Cimg data-section=\"main\" src=\"..\u002Fserver\u002Fimages\u002Flogo.svg\"\u002F\u003E\u003C\u002Fa\u003E";
;pug_debug_line = 4;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fheader\u002Fheader.pug";
pug_html = pug_html + "\u003Cdiv class=\"navbar_menu\"\u003E";
;pug_debug_line = 5;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fheader\u002Fheader.pug";
pug_html = pug_html + "\u003Ca class=\"navbar_menu_btn_collections\" href=\"\u002Fcollections\" data-section=\"collections\"\u003E";
;pug_debug_line = 5;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fheader\u002Fheader.pug";
pug_html = pug_html + "Подборки\u003C\u002Fa\u003E";
;pug_debug_line = 6;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fheader\u002Fheader.pug";
pug_html = pug_html + "\u003Ca class=\"navbar_menu_btn_genres\" href=\"\u002F\" data-section=\"genres\"\u003E";
;pug_debug_line = 6;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fheader\u002Fheader.pug";
pug_html = pug_html + "Жанры\u003C\u002Fa\u003E";
;pug_debug_line = 7;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fheader\u002Fheader.pug";
pug_html = pug_html + "\u003Ca class=\"navbar_menu_btn_premiers\" href=\"\u002F\" data-section=\"premiers\"\u003E";
;pug_debug_line = 7;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fheader\u002Fheader.pug";
pug_html = pug_html + "Премьеры\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 8;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fheader\u002Fheader.pug";
pug_html = pug_html + "\u003Cdiv class=\"navbar_search\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 9;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fheader\u002Fheader.pug";
pug_html = pug_html + "\u003Cdiv class=\"navbar_menu_login\"\u003E";
;pug_debug_line = 10;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fheader\u002Fheader.pug";
pug_html = pug_html + "\u003Ca class=\"navbar_menu_login-btn\" id=\"navbar-button\" href=\"\u002Flogin\" data-section=\"login\"\u003E";
;pug_debug_line = 10;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fheader\u002Fheader.pug";
pug_html = pug_html + "Войти\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fheader\u003E";} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}
function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(e,n,r,t){if(!(e instanceof Error))throw e;if(!("undefined"==typeof window&&n||t))throw e.message+=" on line "+r,e;var o,a,i,s;try{t=t||require("fs").readFileSync(n,{encoding:"utf8"}),o=3,a=t.split("\n"),i=Math.max(r-o,0),s=Math.min(a.length,r+o)}catch(t){return e.message+=" - could not read from "+n+" ("+t.message+")",void pug_rethrow(e,null,r)}o=a.slice(i,s).map(function(e,n){var t=n+i+1;return(t==r?"  > ":"    ")+t+"| "+e}).join("\n"),e.path=n;try{e.message=(n||"Pug")+":"+r+"\n"+o+"\n\n"+e.message}catch(e){}throw e}function movie(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;
    var locals_for_with = (locals || {});
    
    (function (description, imgHref, info, movieHref, rating, title) {
      ;pug_debug_line = 1;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fmovie\u002Fmovie.pug";
pug_html = pug_html + "\u003Cdiv class=\"movie_container\"\u003E";
;pug_debug_line = 2;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fmovie\u002Fmovie.pug";
pug_html = pug_html + "\u003Cdiv class=\"movie\"\u003E";
;pug_debug_line = 3;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fmovie\u002Fmovie.pug";
pug_html = pug_html + "\u003Cdiv class=\"movie_image\"\u003E";
;pug_debug_line = 4;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fmovie\u002Fmovie.pug";
pug_html = pug_html + "\u003Ca" + (" class=\"movie_image\""+pug_attr("href", movieHref, true, false)) + "\u003E";
;pug_debug_line = 5;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fmovie\u002Fmovie.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attr("src", ("../server/images/" + imgHref), true, false)) + "\u002F\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 6;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fmovie\u002Fmovie.pug";
pug_html = pug_html + "\u003Cdiv class=\"movie_body\"\u003E";
;pug_debug_line = 7;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fmovie\u002Fmovie.pug";
pug_html = pug_html + "\u003Cdiv class=\"movie_info\"\u003E";
;pug_debug_line = 8;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fmovie\u002Fmovie.pug";
pug_html = pug_html + "\u003Cdiv class=\"movie_data\"\u003E";
;pug_debug_line = 9;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fmovie\u002Fmovie.pug";
pug_html = pug_html + "\u003Cdiv class=\"movie_rating_title\"\u003E";
;pug_debug_line = 10;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fmovie\u002Fmovie.pug";
pug_html = pug_html + "\u003Ca" + (" class=\"movie_title\""+pug_attr("href", movieHref, true, false)) + "\u003E";
;pug_debug_line = 10;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fmovie\u002Fmovie.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = title) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
;pug_debug_line = 11;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fmovie\u002Fmovie.pug";
pug_html = pug_html + "\u003Cdiv class=\"movie_rating_number\"\u003E";
;pug_debug_line = 11;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fmovie\u002Fmovie.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = rating) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 12;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fmovie\u002Fmovie.pug";
pug_html = pug_html + "\u003Cdiv class=\"movie_add_info\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 13;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fmovie\u002Fmovie.pug";
pug_html = pug_html + "\u003Cdiv class=\"movie_add_info\"\u003E";
;pug_debug_line = 13;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fmovie\u002Fmovie.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = info) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 14;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fmovie\u002Fmovie.pug";
pug_html = pug_html + "\u003Cdiv class=\"movie_description\"\u003E";
;pug_debug_line = 14;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fmovie\u002Fmovie.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = description) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
    }.call(this, "description" in locals_for_with ?
        locals_for_with.description :
        typeof description !== 'undefined' ? description : undefined, "imgHref" in locals_for_with ?
        locals_for_with.imgHref :
        typeof imgHref !== 'undefined' ? imgHref : undefined, "info" in locals_for_with ?
        locals_for_with.info :
        typeof info !== 'undefined' ? info : undefined, "movieHref" in locals_for_with ?
        locals_for_with.movieHref :
        typeof movieHref !== 'undefined' ? movieHref : undefined, "rating" in locals_for_with ?
        locals_for_with.rating :
        typeof rating !== 'undefined' ? rating : undefined, "title" in locals_for_with ?
        locals_for_with.title :
        typeof title !== 'undefined' ? title : undefined));
    ;} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}
function pug_rethrow(e,n,r,t){if(!(e instanceof Error))throw e;if(!("undefined"==typeof window&&n||t))throw e.message+=" on line "+r,e;var o,a,i,s;try{t=t||require("fs").readFileSync(n,{encoding:"utf8"}),o=3,a=t.split("\n"),i=Math.max(r-o,0),s=Math.min(a.length,r+o)}catch(t){return e.message+=" - could not read from "+n+" ("+t.message+")",void pug_rethrow(e,null,r)}o=a.slice(i,s).map(function(e,n){var t=n+i+1;return(t==r?"  > ":"    ")+t+"| "+e}).join("\n"),e.path=n;try{e.message=(n||"Pug")+":"+r+"\n"+o+"\n\n"+e.message}catch(e){}throw e}function footer(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;pug_debug_line = 1;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Ffooter\u002Ffooter.pug";
pug_html = pug_html + "\u003Cfooter id=\"footer\"\u003E";
;pug_debug_line = 2;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Ffooter\u002Ffooter.pug";
pug_html = pug_html + "\u003Cspan class=\"copyright\"\u003E";
;pug_debug_line = 2;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Ffooter\u002Ffooter.pug";
pug_html = pug_html + "© Akino, 2022, VK\u003C\u002Fspan\u003E";
;pug_debug_line = 3;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Ffooter\u002Ffooter.pug";
pug_html = pug_html + "\u003Cdiv class=\"social\"\u003E";
;pug_debug_line = 4;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Ffooter\u002Ffooter.pug";
pug_html = pug_html + "\u003Ca class=\"social-btn\" href=\"https:\u002F\u002Fvk.com\u002Ffeed\"\u003E\u003Csvg width=\"40\" height=\"24\" viewBox=\"0 0 40 24\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cpath d=\"M33.3334 13.8217V12.7934L38.7 6.08337C39.5405 5.03126 39.9988 3.72493 40 2.37837C39.9991 1.06525 38.9348 0.000950314 37.6216 1.2814e-05H31.775C30.8721 -0.00303406 30.0561 0.537513 29.7066 1.37001C28.576 4.47993 27.0883 7.44814 25.2733 10.215C24.7146 10.6534 23.9449 10.7062 23.3316 10.3484V1.82337C23.3262 0.81931 22.5141 0.00641906 21.51 1.2814e-05H14.1666C13.7064 -0.000846561 13.3327 0.371654 13.3318 0.831888C13.3314 1.05376 13.4195 1.26665 13.5766 1.42337L14.0333 1.88001C14.6535 2.49657 15.0016 3.33548 14.9999 4.21001V10.5434C14.9218 10.6231 14.8212 10.6772 14.7116 10.6984C14.4023 10.6506 14.1216 10.4904 13.9232 10.2484C11.7784 7.13696 9.87938 3.86314 8.24321 0.456731C8.10125 0.176575 7.81391 9.0896e-05 7.49985 9.0896e-05H2.16664C0.970081 9.0896e-05 3.01787e-06 0.97009 3.01787e-06 2.16673V2.59173C-0.00140323 4.34954 0.488675 6.07275 1.415 7.56673C5.885 14.7584 12.015 23.3334 15.8334 23.3334H21.285C22.4155 23.3316 23.3315 22.4156 23.3334 21.285V19.8584C23.333 19.017 24.0147 18.3347 24.856 18.3344C25.2609 18.3342 25.6491 18.4952 25.935 18.7817L29.395 22.2417C30.0942 22.9431 31.0446 23.3361 32.035 23.3334H37.9816C39.0945 23.3317 39.9953 22.4283 39.9937 21.3154C39.9929 20.7827 39.7813 20.272 39.405 19.895L33.3334 13.8217Z\" fill=\"#525252\"\u002F\u003E\n\u003C\u002Fsvg\u003E\n\u003C\u002Fa\u003E";
;pug_debug_line = 6;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Ffooter\u002Ffooter.pug";
pug_html = pug_html + "\u003Ca class=\"social-btn\" href=\"https:\u002F\u002Finstagram.com\u002F\"\u003E\u003Csvg width=\"36\" height=\"36\" viewBox=\"0 0 36 36\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cg clip-path=\"url(#clip0)\"\u003E\n\u003Cpath d=\"M35.965 10.5841C35.8807 8.67128 35.5713 7.35623 35.1282 6.21673C34.6711 5.00717 33.9678 3.92426 33.0465 3.02403C32.1462 2.10979 31.0562 1.39938 29.8606 0.949404C28.7145 0.506294 27.4064 0.196968 25.4935 0.112632C23.5664 0.0211528 22.9547 0 18.067 0C13.1793 0 12.5675 0.0211528 10.6476 0.105489C8.73475 0.189826 7.41971 0.499426 6.28048 0.942262C5.07065 1.39938 3.98773 2.10264 3.0875 3.02403C2.17326 3.92426 1.46313 5.01432 1.01288 6.20986C0.56977 7.35623 0.260445 8.66414 0.176108 10.577C0.0846293 12.5041 0.0634766 13.1158 0.0634766 18.0035C0.0634766 22.8912 0.0846293 23.503 0.168966 25.4229C0.253302 27.3358 0.562902 28.6508 1.00601 29.7903C1.46313 30.9999 2.17326 32.0828 3.0875 32.983C3.98773 33.8972 5.07779 34.6076 6.27333 35.0576C7.41971 35.5007 8.72761 35.8101 10.6407 35.8944C12.5604 35.979 13.1724 35.9999 18.0601 35.9999C22.9478 35.9999 23.5596 35.979 25.4795 35.8944C27.3923 35.8101 28.7074 35.5007 29.8466 35.0576C32.266 34.1222 34.1788 32.2094 35.1142 29.7903C35.5571 28.6439 35.8667 27.3358 35.951 25.4229C36.0353 23.503 36.0565 22.8912 36.0565 18.0035C36.0565 13.1158 36.0493 12.5041 35.965 10.5841ZM32.7231 25.2823C32.6457 27.0404 32.3503 27.9898 32.1042 28.6228C31.4993 30.1911 30.2546 31.4358 28.6862 32.0407C28.0533 32.2869 27.097 32.5822 25.3457 32.6594C23.4469 32.744 22.8775 32.7649 18.0741 32.7649C13.2708 32.7649 12.6942 32.744 10.8022 32.6594C9.04408 32.5822 8.09467 32.2869 7.46174 32.0407C6.68128 31.7523 5.97088 31.2952 5.39426 30.6974C4.79648 30.1136 4.33936 29.4104 4.05092 28.6299C3.80478 27.997 3.50946 27.0404 3.43227 25.2894C3.34766 23.3906 3.32678 22.8209 3.32678 18.0175C3.32678 13.2142 3.34766 12.6376 3.43227 10.7459C3.50946 8.98775 3.80478 8.03834 4.05092 7.40541C4.33936 6.62468 4.79648 5.91455 5.4014 5.33765C5.98489 4.73988 6.68815 4.28276 7.46888 3.99458C8.10182 3.74844 9.05836 3.45313 10.8094 3.37566C12.7082 3.29132 13.2779 3.27017 18.081 3.27017C22.8915 3.27017 23.4609 3.29132 25.3529 3.37566C27.111 3.45313 28.0604 3.74844 28.6934 3.99458C29.4738 4.28276 30.1842 4.73988 30.7609 5.33765C31.3586 5.92141 31.8158 6.62468 32.1042 7.40541C32.3503 8.03834 32.6457 8.99462 32.7231 10.7459C32.8075 12.6447 32.8286 13.2142 32.8286 18.0175C32.8286 22.8209 32.8075 23.3835 32.7231 25.2823Z\" fill=\"#525252\"\u002F\u003E\n\u003Cpath d=\"M18.0663 8.75537C12.9607 8.75537 8.81836 12.8975 8.81836 18.0033C8.81836 23.1091 12.9607 27.2512 18.0663 27.2512C23.1721 27.2512 27.3142 23.1091 27.3142 18.0033C27.3142 12.8975 23.1721 8.75537 18.0663 8.75537ZM18.0663 24.0022C14.7541 24.0022 12.0674 21.3157 12.0674 18.0033C12.0674 14.6908 14.7541 12.0044 18.0663 12.0044C21.3787 12.0044 24.0651 14.6908 24.0651 18.0033C24.0651 21.3157 21.3787 24.0022 18.0663 24.0022Z\" fill=\"#525252\"\u002F\u003E\n\u003Cpath d=\"M29.8397 8.38992C29.8397 9.58217 28.873 10.5489 27.6805 10.5489C26.4882 10.5489 25.5215 9.58217 25.5215 8.38992C25.5215 7.19739 26.4882 6.23096 27.6805 6.23096C28.873 6.23096 29.8397 7.19739 29.8397 8.38992Z\" fill=\"#525252\"\u002F\u003E\n\u003C\u002Fg\u003E\n\u003Cdefs\u003E\n\u003CclipPath id=\"clip0\"\u003E\n\u003Crect width=\"36\" height=\"36\" fill=\"white\"\u002F\u003E\n\u003C\u002FclipPath\u003E\n\u003C\u002Fdefs\u003E\n\u003C\u002Fsvg\u003E\n\u003C\u002Fa\u003E";
;pug_debug_line = 8;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Ffooter\u002Ffooter.pug";
pug_html = pug_html + "\u003Cdiv class=\"social-btn github-hrefs\"\u003E";
;pug_debug_line = 9;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Ffooter\u002Ffooter.pug";
pug_html = pug_html + "\u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fkalashkovpaul\"\u003E";
;pug_debug_line = 9;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Ffooter\u002Ffooter.pug";
pug_html = pug_html + "Калашков Павел\u003C\u002Fa\u003E";
;pug_debug_line = 10;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Ffooter\u002Ffooter.pug";
pug_html = pug_html + "\u003Ca href=\"https:\u002F\u002Fgithub.com\u002FKislv\"\u003E";
;pug_debug_line = 10;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Ffooter\u002Ffooter.pug";
pug_html = pug_html + "Киселёв Виктор\u003C\u002Fa\u003E";
;pug_debug_line = 11;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Ffooter\u002Ffooter.pug";
pug_html = pug_html + "\u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fmuzhts-anton\"\u003E";
;pug_debug_line = 11;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Ffooter\u002Ffooter.pug";
pug_html = pug_html + "Мужецкий Антон\u003C\u002Fa\u003E";
;pug_debug_line = 12;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Ffooter\u002Ffooter.pug";
pug_html = pug_html + "\u003Ca href=\"https:\u002F\u002Fgithub.com\u002FKostich31\"\u003E";
;pug_debug_line = 12;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Ffooter\u002Ffooter.pug";
pug_html = pug_html + "Костинич Константин\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 13;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Ffooter\u002Ffooter.pug";
pug_html = pug_html + "\u003Cdiv class=\"copyright\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Ffooter\u003E";} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}