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
pug_html = pug_html + "\u003Cform" + (pug_attr("class", pug_classes([input.isLogin ? "login__form" : "signup__form"], [true]), false, false)) + "\u003E";
;pug_debug_line = 2;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002Fauth.pug";
pug_html = pug_html + "\u003Clabel class=\"text_inputs__label\" for=\"email\"\u003E";
;pug_debug_line = 2;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002Fauth.pug";
pug_html = pug_html + "Email\u003C\u002Flabel\u003E";
;pug_debug_line = 3;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002Fauth.pug";
pug_html = pug_html + "\u003Cinput class=\"text_inputs\" type=\"email\" name=\"email\" placeholder=\"Введите e-mail\"\u002F\u003E";
;pug_debug_line = 4;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002Fauth.pug";
pug_html = pug_html + "\u003Clabel class=\"text_inputs__label\" for=\"password\"\u003E";
;pug_debug_line = 4;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002Fauth.pug";
pug_html = pug_html + "Пароль\u003C\u002Flabel\u003E";
;pug_debug_line = 5;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002Fauth.pug";
pug_html = pug_html + "\u003Cinput class=\"text_inputs\" type=\"password\" name=\"password\" placeholder=\"Введите пароль\"\u002F\u003E";
;pug_debug_line = 6;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002Fauth.pug";
if (!input.isLogin) {
;pug_debug_line = 7;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002Fauth.pug";
pug_html = pug_html + "\u003Clabel class=\"text_inputs__label\" for=\"repeatPassword\"\u003E";
;pug_debug_line = 7;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002Fauth.pug";
pug_html = pug_html + "Повторите пароль\u003C\u002Flabel\u003E";
;pug_debug_line = 8;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002Fauth.pug";
pug_html = pug_html + "\u003Cinput class=\"text_inputs\" type=\"password\" name=\"repeatPassword\" placeholder=\"Повторите пароль\"\u002F\u003E";
}
;pug_debug_line = 9;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002Fauth.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"login__btn\""+" type=\"button\""+pug_attr("value", input.isLogin ? "Войти" : "Зарегистрироваться", true, false)+" name=\"submitBtn\"") + "\u002F\u003E\u003C\u002Fform\u003E";
    }.call(this, "input" in locals_for_with ?
        locals_for_with.input :
        typeof input !== 'undefined' ? input : undefined));
    ;} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}
function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(e,n,r,t){if(!(e instanceof Error))throw e;if(!("undefined"==typeof window&&n||t))throw e.message+=" on line "+r,e;var o,a,i,s;try{t=t||require("fs").readFileSync(n,{encoding:"utf8"}),o=3,a=t.split("\n"),i=Math.max(r-o,0),s=Math.min(a.length,r+o)}catch(t){return e.message+=" - could not read from "+n+" ("+t.message+")",void pug_rethrow(e,null,r)}o=a.slice(i,s).map(function(e,n){var t=n+i+1;return(t==r?"  > ":"    ")+t+"| "+e}).join("\n"),e.path=n;try{e.message=(n||"Pug")+":"+r+"\n"+o+"\n\n"+e.message}catch(e){}throw e}function collections(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;
    var locals_for_with = (locals || {});
    
    (function (input) {
      ;pug_debug_line = 1;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fcollections\u002Fcollections.pug";
pug_html = pug_html + "\u003Ca" + (" class=\"collection\""+pug_attr("href", ("/" + input.page), true, false)+pug_attr("data-section", input.page, true, false)) + "\u003E";
;pug_debug_line = 2;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fcollections\u002Fcollections.pug";
pug_html = pug_html + "\u003Cdiv class=\"collection__wrapper\"\u003E";
;pug_debug_line = 3;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fcollections\u002Fcollections.pug";
pug_html = pug_html + "\u003Cimg" + (" class=\"collection_img\""+pug_attr("data-section", input.page, true, false)+pug_attr("src", ("../server/images/" + input.imgSrc), true, false)) + "\u002F\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 4;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fcollections\u002Fcollections.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"collection__description\""+pug_attr("data-section", input.page, true, false)) + "\u003E";
;pug_debug_line = 4;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fcollections\u002Fcollections.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = input.description) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E";
    }.call(this, "input" in locals_for_with ?
        locals_for_with.input :
        typeof input !== 'undefined' ? input : undefined));
    ;} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}
function pug_rethrow(e,n,r,t){if(!(e instanceof Error))throw e;if(!("undefined"==typeof window&&n||t))throw e.message+=" on line "+r,e;var o,a,i,s;try{t=t||require("fs").readFileSync(n,{encoding:"utf8"}),o=3,a=t.split("\n"),i=Math.max(r-o,0),s=Math.min(a.length,r+o)}catch(t){return e.message+=" - could not read from "+n+" ("+t.message+")",void pug_rethrow(e,null,r)}o=a.slice(i,s).map(function(e,n){var t=n+i+1;return(t==r?"  > ":"    ")+t+"| "+e}).join("\n"),e.path=n;try{e.message=(n||"Pug")+":"+r+"\n"+o+"\n\n"+e.message}catch(e){}throw e}function footer(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;pug_debug_line = 1;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Ffooter\u002Ffooter.pug";
pug_html = pug_html + "\u003Cfooter id=\"footer\"\u003E";
;pug_debug_line = 2;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Ffooter\u002Ffooter.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 2;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Ffooter\u002Ffooter.pug";
pug_html = pug_html + "aboba\u003C\u002Fp\u003E\u003C\u002Ffooter\u003E";} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}
function pug_rethrow(e,n,r,t){if(!(e instanceof Error))throw e;if(!("undefined"==typeof window&&n||t))throw e.message+=" on line "+r,e;var o,a,i,s;try{t=t||require("fs").readFileSync(n,{encoding:"utf8"}),o=3,a=t.split("\n"),i=Math.max(r-o,0),s=Math.min(a.length,r+o)}catch(t){return e.message+=" - could not read from "+n+" ("+t.message+")",void pug_rethrow(e,null,r)}o=a.slice(i,s).map(function(e,n){var t=n+i+1;return(t==r?"  > ":"    ")+t+"| "+e}).join("\n"),e.path=n;try{e.message=(n||"Pug")+":"+r+"\n"+o+"\n\n"+e.message}catch(e){}throw e}function header(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;pug_debug_line = 1;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fheader\u002Fheader.pug";
pug_html = pug_html + "\u003Cheader id=\"navbar\"\u003E";
;pug_debug_line = 2;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fheader\u002Fheader.pug";
pug_html = pug_html + "\u003Ca class=\"navbar_logo\" href=\"\u002F\" data-section=\"main\"\u003E";
;pug_debug_line = 3;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fheader\u002Fheader.pug";
pug_html = pug_html + "\u003Cimg data-section=\"main\" src=\"..\u002Fserver\u002Fimages\u002Flogo.svg\"\u002F\u003E\u003C\u002Fa\u003E";
;pug_debug_line = 4;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fheader\u002Fheader.pug";
pug_html = pug_html + "\u003Cdiv class=\"navbar_menu\"\u003E";
;pug_debug_line = 5;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fheader\u002Fheader.pug";
pug_html = pug_html + "\u003Ca class=\"navbar_menu_btn\" href=\"\u002Fcollections\" data-section=\"collections\"\u003E";
;pug_debug_line = 5;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fheader\u002Fheader.pug";
pug_html = pug_html + "Подборки\u003C\u002Fa\u003E";
;pug_debug_line = 6;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fheader\u002Fheader.pug";
pug_html = pug_html + "\u003Ca class=\"navbar_menu_btn\" href=\"\u002F\" data-section=\"genres\"\u003E";
;pug_debug_line = 6;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fheader\u002Fheader.pug";
pug_html = pug_html + "Жанры\u003C\u002Fa\u003E";
;pug_debug_line = 7;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fheader\u002Fheader.pug";
pug_html = pug_html + "\u003Ca class=\"navbar_menu_btn\" href=\"\u002F\" data-section=\"premiers\"\u003E";
;pug_debug_line = 7;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fheader\u002Fheader.pug";
pug_html = pug_html + "Премьеры\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 8;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fheader\u002Fheader.pug";
pug_html = pug_html + "\u003Cdiv class=\"navbar_search\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 9;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fheader\u002Fheader.pug";
pug_html = pug_html + "\u003Ca class=\"navbar_menu_login-btn\" href=\"\u002Flogin\" data-section=\"login\"\u003E";
;pug_debug_line = 9;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fheader\u002Fheader.pug";
pug_html = pug_html + "Войти\u003C\u002Fa\u003E\u003C\u002Fheader\u003E";} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}
function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(e,n,r,t){if(!(e instanceof Error))throw e;if(!("undefined"==typeof window&&n||t))throw e.message+=" on line "+r,e;var o,a,i,s;try{t=t||require("fs").readFileSync(n,{encoding:"utf8"}),o=3,a=t.split("\n"),i=Math.max(r-o,0),s=Math.min(a.length,r+o)}catch(t){return e.message+=" - could not read from "+n+" ("+t.message+")",void pug_rethrow(e,null,r)}o=a.slice(i,s).map(function(e,n){var t=n+i+1;return(t==r?"  > ":"    ")+t+"| "+e}).join("\n"),e.path=n;try{e.message=(n||"Pug")+":"+r+"\n"+o+"\n\n"+e.message}catch(e){}throw e}function movie(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;
    var locals_for_with = (locals || {});
    
    (function (input) {
      ;pug_debug_line = 1;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fmovie\u002Fmovie.pug";
pug_html = pug_html + "\u003Cdiv class=\"movie_container\"\u003E";
;pug_debug_line = 2;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fmovie\u002Fmovie.pug";
pug_html = pug_html + "\u003Cdiv class=\"movie\"\u003E";
;pug_debug_line = 3;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fmovie\u002Fmovie.pug";
pug_html = pug_html + "\u003Cdiv class=\"movie_image\"\u003E";
;pug_debug_line = 4;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fmovie\u002Fmovie.pug";
pug_html = pug_html + "\u003Ca" + (" class=\"movie_image\""+pug_attr("href", input.movieHref, true, false)) + "\u003E";
;pug_debug_line = 5;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fmovie\u002Fmovie.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attr("src", ("../server/images/" + input.imgHref), true, false)) + "\u002F\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 6;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fmovie\u002Fmovie.pug";
pug_html = pug_html + "\u003Cdiv class=\"movie_body\"\u003E";
;pug_debug_line = 7;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fmovie\u002Fmovie.pug";
pug_html = pug_html + "\u003Cdiv class=\"movie_info\"\u003E";
;pug_debug_line = 8;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fmovie\u002Fmovie.pug";
pug_html = pug_html + "\u003Cdiv class=\"movie_data\"\u003E";
;pug_debug_line = 9;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fmovie\u002Fmovie.pug";
pug_html = pug_html + "\u003Ca" + (" class=\"movie_title\""+pug_attr("href", input.movieHref, true, false)) + "\u003E";
;pug_debug_line = 9;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fmovie\u002Fmovie.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = input.title) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
;pug_debug_line = 10;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fmovie\u002Fmovie.pug";
pug_html = pug_html + "\u003Cdiv class=\"movie_add_info\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 11;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fmovie\u002Fmovie.pug";
pug_html = pug_html + "\u003Cdiv class=\"movie_add_info\"\u003E";
;pug_debug_line = 11;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fmovie\u002Fmovie.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = input.info) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 12;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fmovie\u002Fmovie.pug";
pug_html = pug_html + "\u003Cdiv class=\"movie_rating\"\u003E";
;pug_debug_line = 13;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fmovie\u002Fmovie.pug";
pug_html = pug_html + "\u003Cdiv class=\"movie_text\"\u003E";
;pug_debug_line = 13;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fmovie\u002Fmovie.pug";
pug_html = pug_html + "Рейтинг\u003C\u002Fdiv\u003E";
;pug_debug_line = 14;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fmovie\u002Fmovie.pug";
pug_html = pug_html + "\u003Cdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 15;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fmovie\u002Fmovie.pug";
pug_html = pug_html + "\u003Cdiv class=\"movie_rating_number\"\u003E";
;pug_debug_line = 15;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fmovie\u002Fmovie.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = input.rating) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 16;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fmovie\u002Fmovie.pug";
pug_html = pug_html + "\u003Cdiv class=\"movie_description\"\u003E";
;pug_debug_line = 16;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fmovie\u002Fmovie.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = input.description) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
    }.call(this, "input" in locals_for_with ?
        locals_for_with.input :
        typeof input !== 'undefined' ? input : undefined));
    ;} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}