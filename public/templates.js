function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_classes(s,r){return Array.isArray(s)?pug_classes_array(s,r):s&&"object"==typeof s?pug_classes_object(s):s||""}
function pug_classes_array(r,a){for(var s,e="",u="",c=Array.isArray(a),g=0;g<r.length;g++)(s=pug_classes(r[g]))&&(c&&a[g]&&(s=pug_escape(s)),e=e+u+s,u=" ");return e}
function pug_classes_object(r){var a="",n="";for(var o in r)o&&r[o]&&pug_has_own_property.call(r,o)&&(a=a+n+o,n=" ");return a}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;
function pug_rethrow(e,n,r,t){if(!(e instanceof Error))throw e;if(!("undefined"==typeof window&&n||t))throw e.message+=" on line "+r,e;var o,a,i,s;try{t=t||require("fs").readFileSync(n,{encoding:"utf8"}),o=3,a=t.split("\n"),i=Math.max(r-o,0),s=Math.min(a.length,r+o)}catch(t){return e.message+=" - could not read from "+n+" ("+t.message+")",void pug_rethrow(e,null,r)}o=a.slice(i,s).map(function(e,n){var t=n+i+1;return(t==r?"  > ":"    ")+t+"| "+e}).join("\n"),e.path=n;try{e.message=(n||"Pug")+":"+r+"\n"+o+"\n\n"+e.message}catch(e){}throw e}function auth(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;
    var locals_for_with = (locals || {});
    
    (function (auth, authFormName, currClass, inputs, login, submitButtonName) {
      ;pug_debug_line = 1;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002Fauth.pug";
var currClass = login ? "login" : "register"
;pug_debug_line = 3;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002Fauth.pug";
pug_html = pug_html + "\u003Cdiv class=\"auth-content\"\u003E";
;pug_debug_line = 4;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002Fauth.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("class", pug_classes([currClass], [true]), false, false)) + "\u003E";
;pug_debug_line = 5;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002Fauth.pug";
if (login) {
;pug_debug_line = 6;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002Fauth.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("class", pug_classes([`${currClass}__invitation`], [true]), false, false)) + "\u003E";
;pug_debug_line = 6;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002Fauth.pug";
pug_html = pug_html + "Войти\u003C\u002Fdiv\u003E";
}
else {
;pug_debug_line = 8;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002Fauth.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("class", pug_classes([`${currClass}__invitation`], [true]), false, false)) + "\u003E";
;pug_debug_line = 8;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002Fauth.pug";
pug_html = pug_html + "Зарегистрироваться\u003C\u002Fdiv\u003E";
}
;pug_debug_line = 9;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002Fauth.pug";
pug_html = pug_html + "\u003Cform" + (pug_attr("class", pug_classes([`${currClass}__form`], [true]), false, false)+pug_attr("name", authFormName, true, false)) + "\u003E";
;pug_debug_line = 10;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002Fauth.pug";
// iterate inputs
;(function(){
  var $$obj = inputs;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var input = $$obj[pug_index0];
;pug_debug_line = 11;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002Fauth.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("class", pug_classes([`auth-input ${input.name}`], [true]), false, false)) + "\u003E";
;pug_debug_line = 12;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002Fauth.pug";
pug_html = pug_html + "\u003Cdiv class=\"auth-input__head\"\u003E";
;pug_debug_line = 13;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002Fauth.pug";
pug_html = pug_html + "\u003Clabel" + (" class=\"auth-input__head__label\""+pug_attr("for", input.name, true, false)) + "\u003E";
;pug_debug_line = 13;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002Fauth.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = input.title) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E";
;pug_debug_line = 14;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002Fauth.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("class", pug_classes([`auth-input__head__error ${input.name}`], [true]), false, false)) + "\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 15;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002Fauth.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"text-input\""+pug_attr("type", input.type, true, false)+pug_attr("name", input.name, true, false)+pug_attr("id", input.name, true, false)+pug_attr("placeholder", input.placeholder, true, false)) + "\u002F\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var input = $$obj[pug_index0];
;pug_debug_line = 11;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002Fauth.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("class", pug_classes([`auth-input ${input.name}`], [true]), false, false)) + "\u003E";
;pug_debug_line = 12;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002Fauth.pug";
pug_html = pug_html + "\u003Cdiv class=\"auth-input__head\"\u003E";
;pug_debug_line = 13;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002Fauth.pug";
pug_html = pug_html + "\u003Clabel" + (" class=\"auth-input__head__label\""+pug_attr("for", input.name, true, false)) + "\u003E";
;pug_debug_line = 13;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002Fauth.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = input.title) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E";
;pug_debug_line = 14;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002Fauth.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("class", pug_classes([`auth-input__head__error ${input.name}`], [true]), false, false)) + "\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 15;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002Fauth.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"text-input\""+pug_attr("type", input.type, true, false)+pug_attr("name", input.name, true, false)+pug_attr("id", input.name, true, false)+pug_attr("placeholder", input.placeholder, true, false)) + "\u002F\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

;pug_debug_line = 22;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002Fauth.pug";
pug_html = pug_html + "\u003Cdiv class=\"auth__btn\"\u003E";
;pug_debug_line = 23;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002Fauth.pug";
pug_html = pug_html + "\u003Cdiv class=\"auth__btn__error\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 24;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002Fauth.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"auth__btn__input\""+" type=\"button\""+pug_attr("name", submitButtonName, true, false)+pug_attr("value", auth ? "Войти" : "Создать аккаунт", true, false)) + "\u002F\u003E\u003C\u002Fdiv\u003E\u003C\u002Fform\u003E";
;pug_debug_line = 25;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002Fauth.pug";
if (login) {
;pug_debug_line = 26;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002Fauth.pug";
pug_html = pug_html + "\u003Ca class=\"auth__invitation\" href=\"\u002Fregister\"\u003E";
;pug_debug_line = 26;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002Fauth.pug";
pug_html = pug_html + "Нет аккаунта? Зарегистрироваться!\u003C\u002Fa\u003E";
}
else {
;pug_debug_line = 28;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002Fauth.pug";
pug_html = pug_html + "\u003Ca class=\"auth__invitation\" href=\"\u002Flogin\"\u003E";
;pug_debug_line = 28;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002Fauth.pug";
pug_html = pug_html + "Уже есть аккаунт? Войти!\u003C\u002Fa\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
    }.call(this, "auth" in locals_for_with ?
        locals_for_with.auth :
        typeof auth !== 'undefined' ? auth : undefined, "authFormName" in locals_for_with ?
        locals_for_with.authFormName :
        typeof authFormName !== 'undefined' ? authFormName : undefined, "currClass" in locals_for_with ?
        locals_for_with.currClass :
        typeof currClass !== 'undefined' ? currClass : undefined, "inputs" in locals_for_with ?
        locals_for_with.inputs :
        typeof inputs !== 'undefined' ? inputs : undefined, "login" in locals_for_with ?
        locals_for_with.login :
        typeof login !== 'undefined' ? login : undefined, "submitButtonName" in locals_for_with ?
        locals_for_with.submitButtonName :
        typeof submitButtonName !== 'undefined' ? submitButtonName : undefined));
    ;} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}
function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_classes(s,r){return Array.isArray(s)?pug_classes_array(s,r):s&&"object"==typeof s?pug_classes_object(s):s||""}
function pug_classes_array(r,a){for(var s,e="",u="",c=Array.isArray(a),g=0;g<r.length;g++)(s=pug_classes(r[g]))&&(c&&a[g]&&(s=pug_escape(s)),e=e+u+s,u=" ");return e}
function pug_classes_object(r){var a="",n="";for(var o in r)o&&r[o]&&pug_has_own_property.call(r,o)&&(a=a+n+o,n=" ");return a}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;
function pug_rethrow(e,n,r,t){if(!(e instanceof Error))throw e;if(!("undefined"==typeof window&&n||t))throw e.message+=" on line "+r,e;var o,a,i,s;try{t=t||require("fs").readFileSync(n,{encoding:"utf8"}),o=3,a=t.split("\n"),i=Math.max(r-o,0),s=Math.min(a.length,r+o)}catch(t){return e.message+=" - could not read from "+n+" ("+t.message+")",void pug_rethrow(e,null,r)}o=a.slice(i,s).map(function(e,n){var t=n+i+1;return(t==r?"  > ":"    ")+t+"| "+e}).join("\n"),e.path=n;try{e.message=(n||"Pug")+":"+r+"\n"+o+"\n\n"+e.message}catch(e){}throw e}function authOld(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;
    var locals_for_with = (locals || {});
    
    (function (input) {
      ;pug_debug_line = 1;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002FauthOld.pug";
pug_html = pug_html + "\u003Cform" + (pug_attr("class", pug_classes([input.isLogin ? "login__form" : "signup__form"], [true]), false, false)+" name=\"authForm\"") + "\u003E";
;pug_debug_line = 2;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002FauthOld.pug";
if (!input.isLogin) {
;pug_debug_line = 3;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002FauthOld.pug";
pug_html = pug_html + "\u003Cdiv class=\"auth_name\"\u003E";
;pug_debug_line = 4;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002FauthOld.pug";
pug_html = pug_html + "\u003Cdiv class=\"auth_name_labels\"\u003E";
;pug_debug_line = 5;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002FauthOld.pug";
pug_html = pug_html + "\u003Clabel class=\"text_inputs__label\" for=\"name\"\u003E";
;pug_debug_line = 5;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002FauthOld.pug";
pug_html = pug_html + "Имя\u003C\u002Flabel\u003E";
;pug_debug_line = 6;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002FauthOld.pug";
pug_html = pug_html + "\u003Cdiv id=\"auth-name-error\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 7;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002FauthOld.pug";
pug_html = pug_html + "\u003Cinput class=\"auth_input\" id=\"text-inputs-name\" type=\"text\" name=\"name\" placeholder=\"Введите имя\"\u002F\u003E\u003C\u002Fdiv\u003E";
}
;pug_debug_line = 8;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002FauthOld.pug";
pug_html = pug_html + "\u003Cdiv class=\"auth_email\"\u003E";
;pug_debug_line = 9;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002FauthOld.pug";
pug_html = pug_html + "\u003Cdiv class=\"auth_email_labels\"\u003E";
;pug_debug_line = 10;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002FauthOld.pug";
pug_html = pug_html + "\u003Clabel class=\"text_inputs__label\" for=\"email\"\u003E";
;pug_debug_line = 10;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002FauthOld.pug";
pug_html = pug_html + "Email\u003C\u002Flabel\u003E";
;pug_debug_line = 11;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002FauthOld.pug";
pug_html = pug_html + "\u003Cdiv id=\"auth-email-error\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 12;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002FauthOld.pug";
pug_html = pug_html + "\u003Cinput class=\"auth_input\" id=\"text-inputs-email\" type=\"email\" name=\"email\" placeholder=\"Введите e-mail\"\u002F\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 13;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002FauthOld.pug";
pug_html = pug_html + "\u003Cdiv class=\"auth_password\"\u003E";
;pug_debug_line = 14;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002FauthOld.pug";
pug_html = pug_html + "\u003Cdiv class=\"auth_password_labels\"\u003E";
;pug_debug_line = 15;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002FauthOld.pug";
pug_html = pug_html + "\u003Clabel class=\"text_inputs__label\" for=\"password\"\u003E";
;pug_debug_line = 15;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002FauthOld.pug";
pug_html = pug_html + "Пароль\u003C\u002Flabel\u003E";
;pug_debug_line = 16;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002FauthOld.pug";
pug_html = pug_html + "\u003Cdiv id=\"auth-password-error\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 17;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002FauthOld.pug";
pug_html = pug_html + "\u003Cinput class=\"auth_input\" id=\"text-inputs-password\" type=\"password\" name=\"password\" placeholder=\"Введите пароль\"\u002F\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 18;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002FauthOld.pug";
if (!input.isLogin) {
;pug_debug_line = 19;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002FauthOld.pug";
pug_html = pug_html + "\u003Cdiv class=\"auth_repeat_password\"\u003E";
;pug_debug_line = 20;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002FauthOld.pug";
pug_html = pug_html + "\u003Cdiv class=\"auth_repeat_password_labels\"\u003E";
;pug_debug_line = 21;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002FauthOld.pug";
pug_html = pug_html + "\u003Clabel class=\"text_inputs__label\" for=\"repeatPassword\"\u003E";
;pug_debug_line = 21;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002FauthOld.pug";
pug_html = pug_html + "Повторите пароль\u003C\u002Flabel\u003E";
;pug_debug_line = 22;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002FauthOld.pug";
pug_html = pug_html + "\u003Cdiv id=\"auth-repeat-password-error\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 23;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002FauthOld.pug";
pug_html = pug_html + "\u003Cinput class=\"auth_input\" id=\"text-inputs-repeat-password\" type=\"password\" name=\"repeatPassword\" placeholder=\"Повторите пароль\"\u002F\u003E\u003C\u002Fdiv\u003E";
}
;pug_debug_line = 24;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002FauthOld.pug";
pug_html = pug_html + "\u003Cdiv class=\"auth_btn\"\u003E";
;pug_debug_line = 25;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002FauthOld.pug";
pug_html = pug_html + "\u003Cdiv id=\"auth-btn-error\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 26;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fauth\u002FauthOld.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"auth__btn\""+" type=\"button\""+pug_attr("value", input.isLogin ? "Войти" : "Зарегистрироваться", true, false)+" name=\"submitBtn\"") + "\u002F\u003E\u003C\u002Fdiv\u003E\u003C\u002Fform\u003E";
    }.call(this, "input" in locals_for_with ?
        locals_for_with.input :
        typeof input !== 'undefined' ? input : undefined));
    ;} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}
function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(e,n,r,t){if(!(e instanceof Error))throw e;if(!("undefined"==typeof window&&n||t))throw e.message+=" on line "+r,e;var o,a,i,s;try{t=t||require("fs").readFileSync(n,{encoding:"utf8"}),o=3,a=t.split("\n"),i=Math.max(r-o,0),s=Math.min(a.length,r+o)}catch(t){return e.message+=" - could not read from "+n+" ("+t.message+")",void pug_rethrow(e,null,r)}o=a.slice(i,s).map(function(e,n){var t=n+i+1;return(t==r?"  > ":"    ")+t+"| "+e}).join("\n"),e.path=n;try{e.message=(n||"Pug")+":"+r+"\n"+o+"\n\n"+e.message}catch(e){}throw e}function collection(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;pug_debug_line = 1;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fcollection\u002Fcollection.pug";












} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}
function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(e,n,r,t){if(!(e instanceof Error))throw e;if(!("undefined"==typeof window&&n||t))throw e.message+=" on line "+r,e;var o,a,i,s;try{t=t||require("fs").readFileSync(n,{encoding:"utf8"}),o=3,a=t.split("\n"),i=Math.max(r-o,0),s=Math.min(a.length,r+o)}catch(t){return e.message+=" - could not read from "+n+" ("+t.message+")",void pug_rethrow(e,null,r)}o=a.slice(i,s).map(function(e,n){var t=n+i+1;return(t==r?"  > ":"    ")+t+"| "+e}).join("\n"),e.path=n;try{e.message=(n||"Pug")+":"+r+"\n"+o+"\n\n"+e.message}catch(e){}throw e}function collections(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;
    var locals_for_with = (locals || {});
    
    (function (collectionList) {
      ;pug_debug_line = 1;pug_debug_filename = "public\u002Fcomponents\u002Fcollection\u002Fcollection.pug";
pug_mixins["collection"] = pug_interp = function(i){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 2;pug_debug_filename = "public\u002Fcomponents\u002Fcollection\u002Fcollection.pug";
pug_html = pug_html + "\u003Ca" + (" class=\"collection\""+pug_attr("href", `/${i.page}/${i.number}`, true, false)) + "\u003E";
;pug_debug_line = 3;pug_debug_filename = "public\u002Fcomponents\u002Fcollection\u002Fcollection.pug";
pug_html = pug_html + "\u003Cdiv class=\"collection_wrapper\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "public\u002Fcomponents\u002Fcollection\u002Fcollection.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attr("src", `server/images/${i.imgSrc}`, true, false)) + "\u002F\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 5;pug_debug_filename = "public\u002Fcomponents\u002Fcollection\u002Fcollection.pug";
pug_html = pug_html + "\u003Cdiv class=\"collection__description\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "public\u002Fcomponents\u002Fcollection\u002Fcollection.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = i.description) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E";
};
;pug_debug_line = 3;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fcollections\u002Fcollections.pug";
pug_html = pug_html + "\u003Cdiv class=\"content_wrapper\"\u003E";
;pug_debug_line = 4;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fcollections\u002Fcollections.pug";
pug_html = pug_html + "\u003Cpage class=\"page\"\u003E";
;pug_debug_line = 5;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fcollections\u002Fcollections.pug";
pug_html = pug_html + "\u003Cdiv class=\"content_container\"\u003E";
;pug_debug_line = 6;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fcollections\u002Fcollections.pug";
pug_html = pug_html + "\u003Ch1 class=\"title\"\u003E";
;pug_debug_line = 6;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fcollections\u002Fcollections.pug";
pug_html = pug_html + "Подборки\u003C\u002Fh1\u003E";
;pug_debug_line = 7;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fcollections\u002Fcollections.pug";
pug_html = pug_html + "\u003Cdiv class=\"description\"\u003E";
;pug_debug_line = 7;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fcollections\u002Fcollections.pug";
pug_html = pug_html + "Это наши подборочки :)\u003C\u002Fdiv\u003E";
;pug_debug_line = 8;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fcollections\u002Fcollections.pug";
pug_html = pug_html + "\u003Cdiv class=\"bg_container\"\u003E";
;pug_debug_line = 9;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fcollections\u002Fcollections.pug";
pug_html = pug_html + "\u003Cdiv class=\"collections__container\"\u003E";
;pug_debug_line = 10;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fcollections\u002Fcollections.pug";
// iterate collectionList
;(function(){
  var $$obj = collectionList;
  if ('number' == typeof $$obj.length) {
      for (var _ = 0, $$l = $$obj.length; _ < $$l; _++) {
        var input = $$obj[_];
;pug_debug_line = 11;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fcollections\u002Fcollections.pug";
pug_mixins["collection"](input);
      }
  } else {
    var $$l = 0;
    for (var _ in $$obj) {
      $$l++;
      var input = $$obj[_];
;pug_debug_line = 11;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fcollections\u002Fcollections.pug";
pug_mixins["collection"](input);
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fpage\u003E\u003C\u002Fdiv\u003E";
    }.call(this, "collectionList" in locals_for_with ?
        locals_for_with.collectionList :
        typeof collectionList !== 'undefined' ? collectionList : undefined));
    ;} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}
function pug_rethrow(e,n,r,t){if(!(e instanceof Error))throw e;if(!("undefined"==typeof window&&n||t))throw e.message+=" on line "+r,e;var o,a,i,s;try{t=t||require("fs").readFileSync(n,{encoding:"utf8"}),o=3,a=t.split("\n"),i=Math.max(r-o,0),s=Math.min(a.length,r+o)}catch(t){return e.message+=" - could not read from "+n+" ("+t.message+")",void pug_rethrow(e,null,r)}o=a.slice(i,s).map(function(e,n){var t=n+i+1;return(t==r?"  > ":"    ")+t+"| "+e}).join("\n"),e.path=n;try{e.message=(n||"Pug")+":"+r+"\n"+o+"\n\n"+e.message}catch(e){}throw e}function footer(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;pug_debug_line = 1;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Ffooter\u002Ffooter.pug";
pug_html = pug_html + "\u003Cfooter id=\"footer\"\u003E";
;pug_debug_line = 2;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Ffooter\u002Ffooter.pug";
pug_html = pug_html + "\u003Cspan class=\"copyright\"\u003E";
;pug_debug_line = 2;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Ffooter\u002Ffooter.pug";
pug_html = pug_html + "© AKino, 2022, VK\u003C\u002Fspan\u003E";
;pug_debug_line = 3;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Ffooter\u002Ffooter.pug";
pug_html = pug_html + "\u003Cdiv class=\"social\"\u003E";
;pug_debug_line = 4;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Ffooter\u002Ffooter.pug";
pug_html = pug_html + "\u003Cimg src=\"\u002Fstatic\u002Fpics\u002Fgithub.svg\"\u002F\u003E";
;pug_debug_line = 5;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Ffooter\u002Ffooter.pug";
pug_html = pug_html + "\u003Cdiv class=\"social-btn github-hrefs\"\u003E";
;pug_debug_line = 6;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Ffooter\u002Ffooter.pug";
pug_html = pug_html + "\u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fkalashkovpaul\"\u003E";
;pug_debug_line = 6;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Ffooter\u002Ffooter.pug";
pug_html = pug_html + "Калашков Павел\u003C\u002Fa\u003E";
;pug_debug_line = 7;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Ffooter\u002Ffooter.pug";
pug_html = pug_html + "\u003Ca href=\"https:\u002F\u002Fgithub.com\u002FKislv\"\u003E";
;pug_debug_line = 7;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Ffooter\u002Ffooter.pug";
pug_html = pug_html + "Киселёв Виктор\u003C\u002Fa\u003E";
;pug_debug_line = 8;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Ffooter\u002Ffooter.pug";
pug_html = pug_html + "\u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fmuzhts-anton\"\u003E";
;pug_debug_line = 8;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Ffooter\u002Ffooter.pug";
pug_html = pug_html + "Мужецкий Антон\u003C\u002Fa\u003E";
;pug_debug_line = 9;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Ffooter\u002Ffooter.pug";
pug_html = pug_html + "\u003Ca href=\"https:\u002F\u002Fgithub.com\u002FKostich31\"\u003E";
;pug_debug_line = 9;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Ffooter\u002Ffooter.pug";
pug_html = pug_html + "Костинич Константин\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 10;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Ffooter\u002Ffooter.pug";
pug_html = pug_html + "\u003Cdiv class=\"copyright\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Ffooter\u003E";} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}
function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(e,n,r,t){if(!(e instanceof Error))throw e;if(!("undefined"==typeof window&&n||t))throw e.message+=" on line "+r,e;var o,a,i,s;try{t=t||require("fs").readFileSync(n,{encoding:"utf8"}),o=3,a=t.split("\n"),i=Math.max(r-o,0),s=Math.min(a.length,r+o)}catch(t){return e.message+=" - could not read from "+n+" ("+t.message+")",void pug_rethrow(e,null,r)}o=a.slice(i,s).map(function(e,n){var t=n+i+1;return(t==r?"  > ":"    ")+t+"| "+e}).join("\n"),e.path=n;try{e.message=(n||"Pug")+":"+r+"\n"+o+"\n\n"+e.message}catch(e){}throw e}function header(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;
    var locals_for_with = (locals || {});
    
    (function (imgSrc, profileHref, userFromStorage, userID, username) {
      ;pug_debug_line = 1;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fheader\u002Fheader.pug";
pug_html = pug_html + "\u003Cheader class=\"navbar\"\u003E";
;pug_debug_line = 2;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fheader\u002Fheader.pug";
pug_html = pug_html + "\u003Cdiv class=\"navbar__vertical-menu\"\u003E";
;pug_debug_line = 3;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fheader\u002Fheader.pug";
pug_html = pug_html + "\u003Cdiv class=\"vertical-menu__main-btn\"\u003E";
;pug_debug_line = 4;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fheader\u002Fheader.pug";
pug_html = pug_html + "\u003Cspan class=\"vertical-menu-line first-line-in-menu\"\u003E\u003C\u002Fspan\u003E";
;pug_debug_line = 5;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fheader\u002Fheader.pug";
pug_html = pug_html + "\u003Cspan class=\"vertical-menu-line second-line-in-menu\"\u003E\u003C\u002Fspan\u003E";
;pug_debug_line = 6;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fheader\u002Fheader.pug";
pug_html = pug_html + "\u003Cspan class=\"vertical-menu-line third-line-in-menu\"\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 7;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fheader\u002Fheader.pug";
pug_html = pug_html + "\u003Cdiv class=\"vertical-menu__btn-container\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 10;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fheader\u002Fheader.pug";
pug_html = pug_html + "\u003Ca class=\"navbar__logo\" href=\"\u002F\" data-section=\"main\"\u003E";
;pug_debug_line = 11;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fheader\u002Fheader.pug";
pug_html = pug_html + "\u003Cimg data-section=\"main\" src=\"..\u002Fserver\u002Fimages\u002Flogo.svg\"\u002F\u003E\u003C\u002Fa\u003E";
;pug_debug_line = 13;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fheader\u002Fheader.pug";
pug_html = pug_html + "\u003Cdiv class=\"navbar__menu\"\u003E";
;pug_debug_line = 14;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fheader\u002Fheader.pug";
pug_html = pug_html + "\u003Ca class=\"navbar__menu-btn collections\" href=\"\u002Fcollections\"\u003E";
;pug_debug_line = 14;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fheader\u002Fheader.pug";
pug_html = pug_html + "Подборки\u003C\u002Fa\u003E";
;pug_debug_line = 15;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fheader\u002Fheader.pug";
pug_html = pug_html + "\u003Ca class=\"navbar__menu-btn genres\" href=\"\u002F\"\u003E";
;pug_debug_line = 15;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fheader\u002Fheader.pug";
pug_html = pug_html + "Жанры\u003C\u002Fa\u003E";
;pug_debug_line = 16;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fheader\u002Fheader.pug";
pug_html = pug_html + "\u003Ca class=\"navbar__menu-btn premiers\" href=\"\u002F\"\u003E";
;pug_debug_line = 16;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fheader\u002Fheader.pug";
pug_html = pug_html + "Премьеры\u003C\u002Fa\u003E";
;pug_debug_line = 17;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fheader\u002Fheader.pug";
pug_html = pug_html + "\u003C!-- Как так сделать?--\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 20;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fheader\u002Fheader.pug";
pug_html = pug_html + "\u003Cdiv class=\"search\"\u003E";
;pug_debug_line = 21;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fheader\u002Fheader.pug";
pug_html = pug_html + "\u003Cinput class=\"search__input\" placeholder=\"Фильм? Актёр?\"\u002F\u003E";
;pug_debug_line = 22;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fheader\u002Fheader.pug";
pug_html = pug_html + "\u003Cdiv class=\"search__btn\"\u003E\u003Csvg width=\"35\" height=\"35\" viewBox=\"0 0 35 35\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cmask id=\"path-1-inside-1\" fill=\"white\"\u003E\n\u003Cpath d=\"M15.8114 25.7891C18.0254 25.7886 20.1755 25.0475 21.9195 23.6837L27.4026 29.1666L29.1663 27.403L23.6832 21.9201C25.0477 20.1761 25.7894 18.0256 25.7899 15.8112C25.7899 10.3096 21.3133 5.83325 15.8114 5.83325C10.3096 5.83325 5.83301 10.3096 5.83301 15.8112C5.83301 21.3127 10.3096 25.7891 15.8114 25.7891ZM15.8114 8.32773C19.9388 8.32773 23.2953 11.684 23.2953 15.8112C23.2953 19.9383 19.9388 23.2946 15.8114 23.2946C11.6841 23.2946 8.32762 19.9383 8.32762 15.8112C8.32762 11.684 11.6841 8.32773 15.8114 8.32773Z\"\u002F\u003E\n\u003C\u002Fmask\u003E\n\u003Cpath d=\"M15.8114 25.7891C18.0254 25.7886 20.1755 25.0475 21.9195 23.6837L27.4026 29.1666L29.1663 27.403L23.6832 21.9201C25.0477 20.1761 25.7894 18.0256 25.7899 15.8112C25.7899 10.3096 21.3133 5.83325 15.8114 5.83325C10.3096 5.83325 5.83301 10.3096 5.83301 15.8112C5.83301 21.3127 10.3096 25.7891 15.8114 25.7891ZM15.8114 8.32773C19.9388 8.32773 23.2953 11.684 23.2953 15.8112C23.2953 19.9383 19.9388 23.2946 15.8114 23.2946C11.6841 23.2946 8.32762 19.9383 8.32762 15.8112C8.32762 11.684 11.6841 8.32773 15.8114 8.32773Z\" fill=\"white\" stroke=\"white\" stroke-width=\"3\" mask=\"url(#path-1-inside-1)\"\u002F\u003E\n\u003C\u002Fsvg\u003E\n\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 24;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fheader\u002Fheader.pug";
if (userFromStorage) {
;pug_debug_line = 1;pug_debug_filename = "public\u002Fcomponents\u002Fheader\u002FuserBlock\u002FuserBlock.pug";
pug_html = pug_html + "\u003Cdiv class=\"user-block\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "public\u002Fcomponents\u002Fheader\u002FuserBlock\u002FuserBlock.pug";
pug_html = pug_html + "\u003Ca" + (" class=\"user-block__profile-href\""+pug_attr("href", `${profileHref}/${userID}`, true, false)) + "\u003E";
;pug_debug_line = 3;pug_debug_filename = "public\u002Fcomponents\u002Fheader\u002FuserBlock\u002FuserBlock.pug";
pug_html = pug_html + "\u003Cimg" + (" class=\"user-block__img\""+pug_attr("src", imgSrc, true, false)) + "\u002F\u003E\u003C\u002Fa\u003E";
;pug_debug_line = 4;pug_debug_filename = "public\u002Fcomponents\u002Fheader\u002FuserBlock\u002FuserBlock.pug";
pug_html = pug_html + "\u003Cdiv class=\"user-block__submenu\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "public\u002Fcomponents\u002Fheader\u002FuserBlock\u002FuserBlock.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 5;pug_debug_filename = "public\u002Fcomponents\u002Fheader\u002FuserBlock\u002FuserBlock.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = username) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 6;pug_debug_filename = "public\u002Fcomponents\u002Fheader\u002FuserBlock\u002FuserBlock.pug";
pug_html = pug_html + "\u003Ca" + (" class=\"user-block__profile\""+pug_attr("href", `${profileHref}/${userID}`, true, false)) + "\u003E";
;pug_debug_line = 6;pug_debug_filename = "public\u002Fcomponents\u002Fheader\u002FuserBlock\u002FuserBlock.pug";
pug_html = pug_html + "Профиль\u003C\u002Fa\u003E";
;pug_debug_line = 7;pug_debug_filename = "public\u002Fcomponents\u002Fheader\u002FuserBlock\u002FuserBlock.pug";
pug_html = pug_html + "\u003Cdiv class=\"user-block__logout-btn not-route\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "public\u002Fcomponents\u002Fheader\u002FuserBlock\u002FuserBlock.pug";
pug_html = pug_html + "Выйти\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
else {
;pug_debug_line = 1;pug_debug_filename = "public\u002Fcomponents\u002Fheader\u002FloginButton.pug";
pug_html = pug_html + "\u003Cdiv class=\"navbar__login\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "public\u002Fcomponents\u002Fheader\u002FloginButton.pug";
pug_html = pug_html + "\u003Ca class=\"navbar__login-btn\" href=\"\u002Flogin\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "public\u002Fcomponents\u002Fheader\u002FloginButton.pug";
pug_html = pug_html + "Войти    \u003C\u002Fa\u003E\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003C\u002Fheader\u003E";
    }.call(this, "imgSrc" in locals_for_with ?
        locals_for_with.imgSrc :
        typeof imgSrc !== 'undefined' ? imgSrc : undefined, "profileHref" in locals_for_with ?
        locals_for_with.profileHref :
        typeof profileHref !== 'undefined' ? profileHref : undefined, "userFromStorage" in locals_for_with ?
        locals_for_with.userFromStorage :
        typeof userFromStorage !== 'undefined' ? userFromStorage : undefined, "userID" in locals_for_with ?
        locals_for_with.userID :
        typeof userID !== 'undefined' ? userID : undefined, "username" in locals_for_with ?
        locals_for_with.username :
        typeof username !== 'undefined' ? username : undefined));
    ;} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}
function pug_rethrow(e,n,r,t){if(!(e instanceof Error))throw e;if(!("undefined"==typeof window&&n||t))throw e.message+=" on line "+r,e;var o,a,i,s;try{t=t||require("fs").readFileSync(n,{encoding:"utf8"}),o=3,a=t.split("\n"),i=Math.max(r-o,0),s=Math.min(a.length,r+o)}catch(t){return e.message+=" - could not read from "+n+" ("+t.message+")",void pug_rethrow(e,null,r)}o=a.slice(i,s).map(function(e,n){var t=n+i+1;return(t==r?"  > ":"    ")+t+"| "+e}).join("\n"),e.path=n;try{e.message=(n||"Pug")+":"+r+"\n"+o+"\n\n"+e.message}catch(e){}throw e}function headerOld(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;pug_debug_line = 1;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fheader\u002FheaderOld.pug";
pug_html = pug_html + "\u003Cheader id=\"navbar\"\u003E";
;pug_debug_line = 2;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fheader\u002FheaderOld.pug";
pug_html = pug_html + "\u003Ca class=\"navbar_logo\" href=\"\u002F\" data-section=\"main\"\u003E";
;pug_debug_line = 3;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fheader\u002FheaderOld.pug";
pug_html = pug_html + "\u003Cimg data-section=\"main\" src=\"..\u002Fserver\u002Fimages\u002Flogo.svg\"\u002F\u003E\u003C\u002Fa\u003E";
;pug_debug_line = 4;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fheader\u002FheaderOld.pug";
pug_html = pug_html + "\u003Cdiv class=\"navbar_menu\"\u003E";
;pug_debug_line = 5;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fheader\u002FheaderOld.pug";
pug_html = pug_html + "\u003Ca class=\"navbar_menu_btn_collections\" href=\"\u002Fcollections\" data-section=\"collections\"\u003E";
;pug_debug_line = 5;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fheader\u002FheaderOld.pug";
pug_html = pug_html + "Подборки\u003C\u002Fa\u003E";
;pug_debug_line = 6;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fheader\u002FheaderOld.pug";
pug_html = pug_html + "\u003Ca class=\"navbar_menu_btn_genres\" href=\"\u002F\" data-section=\"genres\"\u003E";
;pug_debug_line = 6;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fheader\u002FheaderOld.pug";
pug_html = pug_html + "Жанры\u003C\u002Fa\u003E";
;pug_debug_line = 7;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fheader\u002FheaderOld.pug";
pug_html = pug_html + "\u003Ca class=\"navbar_menu_btn_premiers\" href=\"\u002F\" data-section=\"premiers\"\u003E";
;pug_debug_line = 7;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fheader\u002FheaderOld.pug";
pug_html = pug_html + "Премьеры\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 8;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fheader\u002FheaderOld.pug";
pug_html = pug_html + "\u003Cdiv class=\"navbar_menu_login\"\u003E";
;pug_debug_line = 9;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fheader\u002FheaderOld.pug";
pug_html = pug_html + "\u003Ca class=\"navbar_menu_login-btn\" id=\"navbar-button\" href=\"\u002Flogin\" data-section=\"login\"\u003E";
;pug_debug_line = 9;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fheader\u002FheaderOld.pug";
pug_html = pug_html + "Войти\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fheader\u003E";} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}
function pug_rethrow(e,n,r,t){if(!(e instanceof Error))throw e;if(!("undefined"==typeof window&&n||t))throw e.message+=" on line "+r,e;var o,a,i,s;try{t=t||require("fs").readFileSync(n,{encoding:"utf8"}),o=3,a=t.split("\n"),i=Math.max(r-o,0),s=Math.min(a.length,r+o)}catch(t){return e.message+=" - could not read from "+n+" ("+t.message+")",void pug_rethrow(e,null,r)}o=a.slice(i,s).map(function(e,n){var t=n+i+1;return(t==r?"  > ":"    ")+t+"| "+e}).join("\n"),e.path=n;try{e.message=(n||"Pug")+":"+r+"\n"+o+"\n\n"+e.message}catch(e){}throw e}function loginButton(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;pug_debug_line = 1;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fheader\u002FloginButton.pug";
pug_html = pug_html + "\u003Cdiv class=\"navbar__login\"\u003E";
;pug_debug_line = 2;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fheader\u002FloginButton.pug";
pug_html = pug_html + "\u003Ca class=\"navbar__login-btn\" href=\"\u002Flogin\"\u003E";
;pug_debug_line = 2;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fheader\u002FloginButton.pug";
pug_html = pug_html + "Войти    \u003C\u002Fa\u003E\u003C\u002Fdiv\u003E";} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}
function pug_rethrow(e,n,r,t){if(!(e instanceof Error))throw e;if(!("undefined"==typeof window&&n||t))throw e.message+=" on line "+r,e;var o,a,i,s;try{t=t||require("fs").readFileSync(n,{encoding:"utf8"}),o=3,a=t.split("\n"),i=Math.max(r-o,0),s=Math.min(a.length,r+o)}catch(t){return e.message+=" - could not read from "+n+" ("+t.message+")",void pug_rethrow(e,null,r)}o=a.slice(i,s).map(function(e,n){var t=n+i+1;return(t==r?"  > ":"    ")+t+"| "+e}).join("\n"),e.path=n;try{e.message=(n||"Pug")+":"+r+"\n"+o+"\n\n"+e.message}catch(e){}throw e}function logoutButton(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;pug_debug_line = 1;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fheader\u002FlogoutButton.pug";
pug_html = pug_html + "\u003Ca class=\"vertical-logout-btn not-route user-block__logout-btn navbar__menu-btn\"\u003E";
;pug_debug_line = 1;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fheader\u002FlogoutButton.pug";
pug_html = pug_html + "Выйти\u003C\u002Fa\u003E";} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}
function pug_rethrow(e,n,r,t){if(!(e instanceof Error))throw e;if(!("undefined"==typeof window&&n||t))throw e.message+=" on line "+r,e;var o,a,i,s;try{t=t||require("fs").readFileSync(n,{encoding:"utf8"}),o=3,a=t.split("\n"),i=Math.max(r-o,0),s=Math.min(a.length,r+o)}catch(t){return e.message+=" - could not read from "+n+" ("+t.message+")",void pug_rethrow(e,null,r)}o=a.slice(i,s).map(function(e,n){var t=n+i+1;return(t==r?"  > ":"    ")+t+"| "+e}).join("\n"),e.path=n;try{e.message=(n||"Pug")+":"+r+"\n"+o+"\n\n"+e.message}catch(e){}throw e}function loader(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;pug_debug_line = 1;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Floader\u002Floader.pug";
pug_html = pug_html + "\u003Cdiv class=\"mask\"\u003E";
;pug_debug_line = 2;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Floader\u002Floader.pug";
pug_html = pug_html + "\u003Cdiv class=\"loader\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}
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
function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(e,n,r,t){if(!(e instanceof Error))throw e;if(!("undefined"==typeof window&&n||t))throw e.message+=" on line "+r,e;var o,a,i,s;try{t=t||require("fs").readFileSync(n,{encoding:"utf8"}),o=3,a=t.split("\n"),i=Math.max(r-o,0),s=Math.min(a.length,r+o)}catch(t){return e.message+=" - could not read from "+n+" ("+t.message+")",void pug_rethrow(e,null,r)}o=a.slice(i,s).map(function(e,n){var t=n+i+1;return(t==r?"  > ":"    ")+t+"| "+e}).join("\n"),e.path=n;try{e.message=(n||"Pug")+":"+r+"\n"+o+"\n\n"+e.message}catch(e){}throw e}function movieCard(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;pug_debug_line = 1;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002FmovieCard\u002FmovieCard.pug";






































} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}
function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(e,n,r,t){if(!(e instanceof Error))throw e;if(!("undefined"==typeof window&&n||t))throw e.message+=" on line "+r,e;var o,a,i,s;try{t=t||require("fs").readFileSync(n,{encoding:"utf8"}),o=3,a=t.split("\n"),i=Math.max(r-o,0),s=Math.min(a.length,r+o)}catch(t){return e.message+=" - could not read from "+n+" ("+t.message+")",void pug_rethrow(e,null,r)}o=a.slice(i,s).map(function(e,n){var t=n+i+1;return(t==r?"  > ":"    ")+t+"| "+e}).join("\n"),e.path=n;try{e.message=(n||"Pug")+":"+r+"\n"+o+"\n\n"+e.message}catch(e){}throw e}function singleCollection(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;
    var locals_for_with = (locals || {});
    
    (function (description, movieList, title) {
      ;pug_debug_line = 1;pug_debug_filename = "public\u002Fcomponents\u002FmovieCard\u002FmovieCard.pug";
pug_mixins["movieCard"] = pug_interp = function(currentMovie){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 2;pug_debug_filename = "public\u002Fcomponents\u002FmovieCard\u002FmovieCard.pug";
pug_html = pug_html + "\u003Cdiv class=\"movie-card\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "public\u002Fcomponents\u002FmovieCard\u002FmovieCard.pug";
pug_html = pug_html + "\u003Cdiv class=\"movie\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "public\u002Fcomponents\u002FmovieCard\u002FmovieCard.pug";
pug_html = pug_html + "\u003Cdiv class=\"movie__image\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "public\u002Fcomponents\u002FmovieCard\u002FmovieCard.pug";
pug_html = pug_html + "\u003Ca" + (" class=\"movie__image\""+pug_attr("href", `${currentMovie.movieHref}`, true, false)) + "\u003E";
;pug_debug_line = 6;pug_debug_filename = "public\u002Fcomponents\u002FmovieCard\u002FmovieCard.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attr("src", (`../server/images/${currentMovie.imgHref}`), true, false)) + "\u002F\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 7;pug_debug_filename = "public\u002Fcomponents\u002FmovieCard\u002FmovieCard.pug";
pug_html = pug_html + "\u003Cdiv class=\"movie__body\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "public\u002Fcomponents\u002FmovieCard\u002FmovieCard.pug";
pug_html = pug_html + "\u003Cdiv class=\"movie__body__info\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "public\u002Fcomponents\u002FmovieCard\u002FmovieCard.pug";
pug_html = pug_html + "\u003Cdiv class=\"movie__body__info__data\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "public\u002Fcomponents\u002FmovieCard\u002FmovieCard.pug";
pug_html = pug_html + "\u003Cdiv class=\"movie__body__info__data__title\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "public\u002Fcomponents\u002FmovieCard\u002FmovieCard.pug";
pug_html = pug_html + "\u003Ca" + (" class=\"movie__body__info__data__title__movie-title\""+pug_attr("href", `${currentMovie.movieHref}`, true, false)) + "\u003E";
;pug_debug_line = 11;pug_debug_filename = "public\u002Fcomponents\u002FmovieCard\u002FmovieCard.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = currentMovie.title) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
;pug_debug_line = 12;pug_debug_filename = "public\u002Fcomponents\u002FmovieCard\u002FmovieCard.pug";
pug_html = pug_html + "\u003Cdiv class=\"movie__body__info__data__title__rating\"\u003E";
;pug_debug_line = 12;pug_debug_filename = "public\u002Fcomponents\u002FmovieCard\u002FmovieCard.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = currentMovie.rating) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 13;pug_debug_filename = "public\u002Fcomponents\u002FmovieCard\u002FmovieCard.pug";
pug_html = pug_html + "\u003Cdiv class=\"movie__body__info__data__additional\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 14;pug_debug_filename = "public\u002Fcomponents\u002FmovieCard\u002FmovieCard.pug";
pug_html = pug_html + "\u003Cdiv class=\"movie__body__info__data__additional\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "public\u002Fcomponents\u002FmovieCard\u002FmovieCard.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = currentMovie.info) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 15;pug_debug_filename = "public\u002Fcomponents\u002FmovieCard\u002FmovieCard.pug";
pug_html = pug_html + "\u003Cdiv class=\"movie__body__description\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "public\u002Fcomponents\u002FmovieCard\u002FmovieCard.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = currentMovie.description) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 3;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002FsingleCollection\u002FsingleCollection.pug";
pug_html = pug_html + "\u003Cdiv class=\"content-wrapper\"\u003E";
;pug_debug_line = 4;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002FsingleCollection\u002FsingleCollection.pug";
pug_html = pug_html + "\u003Cpage class=\"page\"\u003E";
;pug_debug_line = 5;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002FsingleCollection\u002FsingleCollection.pug";
pug_html = pug_html + "\u003Cdiv class=\"container\"\u003E";
;pug_debug_line = 6;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002FsingleCollection\u002FsingleCollection.pug";
pug_html = pug_html + "\u003Ch1 class=\"container__collection-title\"\u003E";
;pug_debug_line = 6;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002FsingleCollection\u002FsingleCollection.pug";
pug_html = pug_html + "Подборка:";
;pug_debug_line = 7;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002FsingleCollection\u002FsingleCollection.pug";
pug_html = pug_html + "\u003Cspan\u003E\u003C\u002Fspan\u003E";
;pug_debug_line = 8;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002FsingleCollection\u002FsingleCollection.pug";
pug_html = pug_html + "\u003Cspan class=\"container__collection-title__color\"\u003E";
;pug_debug_line = 8;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002FsingleCollection\u002FsingleCollection.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = title) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fh1\u003E";
;pug_debug_line = 9;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002FsingleCollection\u002FsingleCollection.pug";
pug_html = pug_html + "\u003Cdiv class=\"container__collection-description\"\u003E";
;pug_debug_line = 9;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002FsingleCollection\u002FsingleCollection.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = description) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 10;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002FsingleCollection\u002FsingleCollection.pug";
pug_html = pug_html + "\u003Cdiv class=\"movies-container\"\u003E";
;pug_debug_line = 11;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002FsingleCollection\u002FsingleCollection.pug";
// iterate movieList
;(function(){
  var $$obj = movieList;
  if ('number' == typeof $$obj.length) {
      for (var _ = 0, $$l = $$obj.length; _ < $$l; _++) {
        var movie = $$obj[_];
;pug_debug_line = 12;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002FsingleCollection\u002FsingleCollection.pug";
pug_mixins["movieCard"](movie);
      }
  } else {
    var $$l = 0;
    for (var _ in $$obj) {
      $$l++;
      var movie = $$obj[_];
;pug_debug_line = 12;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002FsingleCollection\u002FsingleCollection.pug";
pug_mixins["movieCard"](movie);
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fpage\u003E\u003C\u002Fdiv\u003E";
    }.call(this, "description" in locals_for_with ?
        locals_for_with.description :
        typeof description !== 'undefined' ? description : undefined, "movieList" in locals_for_with ?
        locals_for_with.movieList :
        typeof movieList !== 'undefined' ? movieList : undefined, "title" in locals_for_with ?
        locals_for_with.title :
        typeof title !== 'undefined' ? title : undefined));
    ;} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}
function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(e,n,r,t){if(!(e instanceof Error))throw e;if(!("undefined"==typeof window&&n||t))throw e.message+=" on line "+r,e;var o,a,i,s;try{t=t||require("fs").readFileSync(n,{encoding:"utf8"}),o=3,a=t.split("\n"),i=Math.max(r-o,0),s=Math.min(a.length,r+o)}catch(t){return e.message+=" - could not read from "+n+" ("+t.message+")",void pug_rethrow(e,null,r)}o=a.slice(i,s).map(function(e,n){var t=n+i+1;return(t==r?"  > ":"    ")+t+"| "+e}).join("\n"),e.path=n;try{e.message=(n||"Pug")+":"+r+"\n"+o+"\n\n"+e.message}catch(e){}throw e}function userBlock(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;
    var locals_for_with = (locals || {});
    
    (function (imgSrc, profileHref, userID, username) {
      ;pug_debug_line = 1;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fheader\u002FuserBlock\u002FuserBlock.pug";
pug_html = pug_html + "\u003Cdiv class=\"user-block\"\u003E";
;pug_debug_line = 2;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fheader\u002FuserBlock\u002FuserBlock.pug";
pug_html = pug_html + "\u003Ca" + (" class=\"user-block__profile-href\""+pug_attr("href", `${profileHref}/${userID}`, true, false)) + "\u003E";
;pug_debug_line = 3;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fheader\u002FuserBlock\u002FuserBlock.pug";
pug_html = pug_html + "\u003Cimg" + (" class=\"user-block__img\""+pug_attr("src", imgSrc, true, false)) + "\u002F\u003E\u003C\u002Fa\u003E";
;pug_debug_line = 4;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fheader\u002FuserBlock\u002FuserBlock.pug";
pug_html = pug_html + "\u003Cdiv class=\"user-block__submenu\"\u003E";
;pug_debug_line = 5;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fheader\u002FuserBlock\u002FuserBlock.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 5;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fheader\u002FuserBlock\u002FuserBlock.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = username) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 6;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fheader\u002FuserBlock\u002FuserBlock.pug";
pug_html = pug_html + "\u003Ca" + (" class=\"user-block__profile\""+pug_attr("href", `${profileHref}/${userID}`, true, false)) + "\u003E";
;pug_debug_line = 6;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fheader\u002FuserBlock\u002FuserBlock.pug";
pug_html = pug_html + "Профиль\u003C\u002Fa\u003E";
;pug_debug_line = 7;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fheader\u002FuserBlock\u002FuserBlock.pug";
pug_html = pug_html + "\u003Cdiv class=\"user-block__logout-btn not-route\"\u003E";
;pug_debug_line = 7;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002Fheader\u002FuserBlock\u002FuserBlock.pug";
pug_html = pug_html + "Выйти\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
    }.call(this, "imgSrc" in locals_for_with ?
        locals_for_with.imgSrc :
        typeof imgSrc !== 'undefined' ? imgSrc : undefined, "profileHref" in locals_for_with ?
        locals_for_with.profileHref :
        typeof profileHref !== 'undefined' ? profileHref : undefined, "userID" in locals_for_with ?
        locals_for_with.userID :
        typeof userID !== 'undefined' ? userID : undefined, "username" in locals_for_with ?
        locals_for_with.username :
        typeof username !== 'undefined' ? username : undefined));
    ;} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}