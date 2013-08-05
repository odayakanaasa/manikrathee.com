// OFA Donate - Sequential Asks JS
//      Created By Manik Rathee on 2012-05-08
//      Copyright 2012 Obama for America. All rights reserved.
// (function($, win) {
function adjustInputTypes(){if($(window).width()<769&&/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)){inputTel.prop("type","tel");inputEmail.prop("type","email")}else inputChanges.prop("type","text")}function showContent(){$(".group"+current).toggleClass("hide")}function updateBreadcrumb(e){var t=e;breadcrumbItem.removeClass("current");while(t){t--;$("[data-breadcrumb-number="+t+"]").addClass("completed")}$("[data-breadcrumb-number="+e+"]").addClass("completed").addClass("current")}function savePaymentBreadcrumbs(){if(hasSavedPayment){breadcrumbEmployment.find("span").html("<hr>2");breadcrumbName.hide();breadcrumbPayment.hide();breadcrumbItem.addClass("saved-payment")}else{breadcrumbItem.removeClass("saved-payment");breadcrumbName.fadeIn("500");breadcrumbPayment.fadeIn("500");breadcrumbEmployment.find("span").delay(2e3).html("<hr>4")}}function clientErrors(){if(!goNext){premature.removeClass().addClass("premature");if(current===1){premature.addClass("first");$("#amount-header").addClass("error");underLimit?win.minDonationLimit&&!win.minDonationLimit.isNaN?premature.text("Please choose an amount higher than $"+win.minDonationLimit+".").fadeIn("800"):premature.text("Please choose an amount higher than $3.").fadeIn("800"):overLimit?win.maxDonationLimit&&!win.minDonationLimit.isNaN?premature.text("Please choose an amount less than $"+win.maxDonationLimit+".").fadeIn("800"):premature.text("Please choose an amount less than $2500.").fadeIn("800"):premature.text("Please choose an amount.").fadeIn("800")}else current===2?premature.addClass("second").text("Please correct the errors shown above.").fadeIn("800"):current===3?premature.addClass("third").text("Please correct your payment information").fadeIn("800"):current===4?premature.addClass("fourth").text("Please correct your employment information.").fadeIn("800"):premature.text("Please correct the errors shown above.").fadeIn("800")}}function validateForm(){if(!runValidation)return;runValidation=!1;currentInputs=$(".group"+current).find("input");var e=currentInputs.length;goNext=!1;overLimit=!1;underLimit=!1;var t;if(!$("body").hasClass("error")){if(current===1){for(t=0;t<e;t++)if(currentInputs.eq(t).attr("checked")){goNext=!0;break}if($("#other-amount-radio").attr("checked")){if(/^\$?([1-9]{1}[0-9]{0,2}(\,[0-9]{3})*(\.[0-9]{0,2})?|[1-9]{1}[0-9]{0,}(\.[0-9]{0,2})?|0(\.[0-9]{0,2})?|(\.[0-9]{1,2})?)$/.test(amountOther.val())&&amountOther.val()>win.maxDonationLimit){goNext=!1;overLimit=!0;amountOther.addClass("error")}if(/^\$?([1-9]{1}[0-9]{0,2}(\,[0-9]{3})*(\.[0-9]{0,2})?|[1-9]{1}[0-9]{0,}(\.[0-9]{0,2})?|0(\.[0-9]{0,2})?|(\.[0-9]{1,2})?)$/.test(amountOther.val())&&amountOther.val()<win.minDonationLimit&&amountOther.val()!==""){goNext=!1;underLimit=!0;amountOther.addClass("error")}if(amountOther.val()===""){goNext=!1;amountOther.addClass("error")}if(!/^\$?([1-9]{1}[0-9]{0,2}(\,[0-9]{3})*(\.[0-9]{0,2})?|[1-9]{1}[0-9]{0,}(\.[0-9]{0,2})?|0(\.[0-9]{0,2})?|(\.[0-9]{1,2})?)$/.test(amountOther.val())){goNext=!1;amountOther.addClass("error")}}}if(current===2){for(t=0;t<e;t++)if(currentInputs.eq(t).val()!==""){goNext=!0;break}var n=$("#firstname");if(!/([a-zA-Z]+)|(([0-9]+)([a-zA-Z]+))/.test(n.val())){goNext=!1;n.addClass("error")}var r=$("#lastname");if(!/([a-zA-Z]+)|(([0-9]+)([a-zA-Z]+))/.test(r.val())){goNext=!1;r.addClass("error")}var i=$("#addr1");if(!/([a-zA-Z]+)|(([0-9]+)([a-zA-Z]+))/.test(i.val())){goNext=!1;i.addClass("error")}var s=$("#city");if(!/([a-zA-Z]+)|(([0-9]+)([a-zA-Z]+))/.test(s.val())){goNext=!1;s.addClass("error")}if($("#state_cd").val()===""){goNext=!1;$("#state_cd").addClass("error")}var o=$("#zip");if(!/^(\d{5}-\d{4}|\d{5}\+\d{4}|\d{5}|\d{9})$/.test(o.val())){goNext=!1;o.addClass("error")}var u=$("#email");if(!/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(u.val())){goNext=!1;u.addClass("error")}var a=$("#phone");a.val(a.val().replace(/\D/g,""));if(a.val().length>11||a.val().length<10){goNext=!1;a.addClass("error")}}if(current===3)for(t=0;t<e;t++)if(currentInputs.eq(t).val()!==""){goNext=!0;break}if(current===4){replacementSubmit.focus();goNext=!0;var f=$("#employer");if(!/([a-zA-Z]+)|(([0-9]+)([a-zA-Z]+))/.test(f.val())){goNext=!1;f.addClass("error")}var l=$("#occupation");if(!/([a-zA-Z]+)|(([0-9]+)([a-zA-Z]+))/.test(l.val())){goNext=!1;l.addClass("error")}}goNext&&currentInputs.find("input").removeClass("error");goNext||clientErrors()}runValidation=!0}var win=$("window"),current=1,donateForm=$("#donate-form"),group1=$("#select-amount-header, #amounts-cont"),group2=$("#firstname-cont, #lastname-cont, #addr1-cont, #city-cont, #state_cd-cont, #zip-cont, #email-cont, #phone-cont"),group3=$(".qd-info.cc_number_related.cc_expir_group_related, #cc-type-cont, #cc-number-cont, #cc-expiration-cont, #recurring-cont"),group4=$("#personalized-content, .employer_related.occupation_related, #employer-cont, #occupation-cont, #employer-occupation-helper, #ovf-switch"),personalizedContent=$("#personalized-content"),next=$("#next"),replacementSubmit=$("#submit-button"),inputFields=$(":input"),amountInputs=$("#amounts input"),amountOther=$("#amount-cont-8 input"),breadcrumb=$("#breadcrumbs"),breadcrumbItem=$(".breadcrumb-item"),breadcrumbName=$("#breadcrumb-name"),breadcrumbPayment=$("#breadcrumb-payment"),breadcrumbEmployment=$("#breadcrumb-employment"),premature=$("span.premature"),goNext,overLimit,underLimit,hasSavedPayment,errorFullForm,inputTel=$("#amount-other, #phone, #zip, #cc_number"),inputEmail=$("#email"),inputChanges=$("#amount-other, #zip, #cc_number, #phone, #email"),$formContent=$("#donate-form-content"),runValidation=!0,minDonationLimit,amountOtherClean,keycode=!1;$("body").addClass("sequential-active");$(window).resize(function(){adjustInputTypes()});$(document).ready(function(){adjustInputTypes()});win.minDonationLimit=!minDonationLimit||typeof minDonationLimit!="number"?3:win.minDonationLimit;$("body").hasClass("ovf-gateway")||win.ofaOvfSwitch&&donateForm.data("bsd_ovf_slug")?win.maxDonationLimit=win.maxDonationLimit&&typeof win.maxDonationLimit=="number"&&!win.ofaOvfSwitch?win.maxDonationLimit:73300:win.maxDonationLimit=win.maxDonationLimit&&typeof win.maxDonationLimit=="number"?win.maxDonationLimit:2500;var noPulse,animateFrames=function(e){var t=["#00abeb","#085775"],n=e?0:1;current===1?next.animate({backgroundColor:t[e]},140,"linear",function(){noPulse=setTimeout(function(){animateFrames(n)},500)}):next.css("background-color","#1297c9")};if($(window).width()>767&&$("body").hasClass("sequential-active")){$(".row.content-area-bg").removeClass("no-js");group1.addClass("group1");group2.addClass("group2");group3.addClass("group3");group4.addClass("group4");$("#personalized-content").addClass("hide");breadcrumbItem.each(function(){$(this).attr("data-breadcrumb-number",$(this).index()+1)});$(".group1, .group2, .group3, .group4").addClass("hide");showContent();replacementSubmit.hide();next.attr("tabindex","19");var currentInputs=$(".group"+current).find("input");group1.find("input").attr("checked",!1);$(document).keydown(function(e){var t=e.target.nodeName.toLowerCase();e.which===8&&t!=="input"&&e.preventDefault();if(e.which===13&&current<=3){if(current===1){$("#amount-other").val($("#amount-other").val().replace(/ +/g,"")).blur();win.ofa.ee.emitEvent("amount:change",[$("#amount-other").val()])}current===2&&$("#zip").val($("#zip").val().replace(/ +/g,""));next.click();return!1}if(e.which===13&&current===4){replacementSubmit.click();return!1}});$("#personalized-content").on("click","#qd-edit-info",function(){showContent();$(".employer_related.occupation_related, #employer-cont, #occupation-cont").show();$("#personalized-content").fadeOut(800);replacementSubmit.fadeOut(400);next.show();hasSavedPayment=!1;savePaymentBreadcrumbs();breadcrumbPayment.removeClass("completed");breadcrumbEmployment.removeClass("completed");replacementSubmit.removeClass("saved-payment");$("#employer-occupation-helper").show();current=1;current++;updateBreadcrumb(current);showContent()});$(".amount-cont").click(function(){$(this).removeClass("active");amountInputs.attr("checked",!1);premature.fadeOut("1200");$("#amount-header").removeClass("error");$(".amount-cont").find("input").removeClass("error");if($(this).attr("id")==="amount-cont-8"){$(this).find("input").attr("checked",!0);$("#other-amount-radio").attr("checked",!0);amountOther.val("");errorFullForm||next.fadeIn(400)}});$(".amount-cont").find("label").click(function(){var e=$(this),t=e.parent().find("input");amountOther.val("");$("#other-amount-radio").attr("checked",!1);e.addClass("active");t.attr("checked",!0);if(!errorFullForm){next.click();hasSavedPayment||next.fadeIn(600);replacementSubmit.html('<span id="processingform">Thanks for your fake donation</span>Donate  $'+e.parent().find("label").html().replace("$",""))}});amountOther.change(function(){var e=$(this);premature.fadeOut("1200");$("#amount-header").removeClass("error");$(".amount-cont").find("input").removeClass("error");e.val(e.val().replace(/ +/g,""));if(e.val()===""){e.attr("checked",!1);$("#other-amount-radio").attr("checked",!1)}errorFullForm||amountOther.on("blur.otherField",function(){amountOtherClean=amountOther.text($(this).val().replace("$","")).text();replacementSubmit.html('<span id="processingform">Thanks for your fake donation</span>Donate  $'+amountOtherClean)})});$("#zip").focus(function(){$("#zip").removeClass("error")});$("#zip").change(function(){$(this).val($(this).val().replace(/ +/g,""))});$("#email, #phone").change(function(){$(this).val($(this).val().replace(/ +/g,""))});$("#email, #phone").focus(function(){$(this).removeClass("error")});$("#cc_number").change(function(){$(this).val($(this).val().replace(/-/g,""))});inputFields.focus(function(){premature.fadeOut("1200");$(this).removeClass("error")});inputFields.change(function(){premature.fadeOut("1200");$(this).removeClass("error")});breadcrumbItem.click(function(){var e,t=$(".group1, .group2, .group3, .group4, .group5, .group6");$("this").focus();current<e&&validateForm();if($(this).hasClass("completed")){e=$(this).attr("data-breadcrumb-number");current<e&&validateForm();if(goNext){t.addClass("hide");$(".group"+e).removeClass("hide");updateBreadcrumb(e);current=parseInt(e,10)}if(current<4){next.show();replacementSubmit.hide()}}if(!goNext){validateForm();if(goNext){e=$(this).attr("data-breadcrumb-number");t.addClass("hide");$(".group"+e).removeClass("hide");updateBreadcrumb(e);current=parseInt(e,10)}}if(current===1){next.attr("tabindex","19");keycode&&personalizedContent.addClass("hide")}if(current===2){next.attr("tabindex","10");keycode&&personalizedContent.removeClass("hide")}if(current===3){next.attr("tabindex","26");keycode&&personalizedContent.addClass("hide")}if(current===4){next.hide();replacementSubmit.fadeIn(1800);keycode&&personalizedContent.removeClass("hide");$formContent.addClass("ovfSwitch")}if(current!==4){next.show();replacementSubmit.hide();$formContent.removeClass("ovfSwitch")}goNext&&premature.fadeOut(800)});next.unbind("click").click(function(e){e.preventDefault();next.focus();validateForm();if(goNext){premature.fadeOut("1200");showContent();current++;current>=4&&(current=4);showContent();updateBreadcrumb(current);if(current===1){next.attr("tabindex","19");keycode&&personalizedContent.addClass("hide")}if(current===2){$("#firstname").focus();next.attr("tabindex","10");keycode&&personalizedContent.removeClass("hide")}if(current===3){$("#cc_number").focus();next.attr("tabindex","26");keycode&&personalizedContent.addClass("hide")}if(current===4){$("#employer").focus();next.hide();replacementSubmit.fadeIn(1e3);keycode&&personalizedContent.removeClass("hide")}}if(current!==4){next.show();replacementSubmit.hide()}goNext&&premature.fadeOut(800)});replacementSubmit.click(function(e){e.preventDefault();if(!$("body").hasClass("error")){validateForm();goNext?replacementSubmit.html('<span id="processingform">Thanks for your fake donation</span>Processing').addClass("processingform"):premature.css("bottom",bottomPx).text("Please correct your employment information.").fadeIn("800")}else replacementSubmit.html('<span id="processingform">Thanks for your fake donation</span>Processing').addClass("processingform")})};