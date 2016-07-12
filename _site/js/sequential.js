function adjustInputTypes() {
    $(window).width() < 769 && /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? (inputTel.prop("type", "tel"), 
    inputEmail.prop("type", "email")) : inputChanges.prop("type", "text");
}

function showContent() {
    $(".group" + current).toggleClass("hide");
}

function updateBreadcrumb(a) {
    var b = a;
    for (breadcrumbItem.removeClass("current"); b; ) b--, $("[data-breadcrumb-number=" + b + "]").addClass("completed");
    $("[data-breadcrumb-number=" + a + "]").addClass("completed").addClass("current");
}

function savePaymentBreadcrumbs() {
    hasSavedPayment ? (breadcrumbEmployment.find("span").html("<hr>2"), breadcrumbName.hide(), 
    breadcrumbPayment.hide(), breadcrumbItem.addClass("saved-payment")) : (breadcrumbItem.removeClass("saved-payment"), 
    breadcrumbName.fadeIn("500"), breadcrumbPayment.fadeIn("500"), breadcrumbEmployment.find("span").delay(2e3).html("<hr>4"));
}

function clientErrors() {
    goNext || (premature.removeClass().addClass("premature"), 1 === current ? (premature.addClass("first"), 
    $("#amount-header").addClass("error"), underLimit ? win.minDonationLimit && !win.minDonationLimit.isNaN ? premature.text("Please choose an amount higher than $" + win.minDonationLimit + ".").fadeIn("800") : premature.text("Please choose an amount higher than $3.").fadeIn("800") : overLimit ? win.maxDonationLimit && !win.minDonationLimit.isNaN ? premature.text("Please choose an amount less than $" + win.maxDonationLimit + ".").fadeIn("800") : premature.text("Please choose an amount less than $2500.").fadeIn("800") : premature.text("Please choose an amount.").fadeIn("800")) : 2 === current ? premature.addClass("second").text("Please correct the errors shown above.").fadeIn("800") : 3 === current ? premature.addClass("third").text("Please correct your payment information").fadeIn("800") : 4 === current ? premature.addClass("fourth").text("Please correct your employment information.").fadeIn("800") : premature.text("Please correct the errors shown above.").fadeIn("800"));
}

function validateForm() {
    if (runValidation) {
        runValidation = !1, currentInputs = $(".group" + current).find("input");
        var a = currentInputs.length;
        goNext = !1, overLimit = !1, underLimit = !1;
        var b;
        if (!$("body").hasClass("error")) {
            if (1 === current) {
                for (b = 0; a > b; b++) if (currentInputs.eq(b).attr("checked")) {
                    goNext = !0;
                    break;
                }
                $("#other-amount-radio").attr("checked") && (/^\$?([1-9]{1}[0-9]{0,2}(\,[0-9]{3})*(\.[0-9]{0,2})?|[1-9]{1}[0-9]{0,}(\.[0-9]{0,2})?|0(\.[0-9]{0,2})?|(\.[0-9]{1,2})?)$/.test(amountOther.val()) && amountOther.val() > win.maxDonationLimit && (goNext = !1, 
                overLimit = !0, amountOther.addClass("error")), /^\$?([1-9]{1}[0-9]{0,2}(\,[0-9]{3})*(\.[0-9]{0,2})?|[1-9]{1}[0-9]{0,}(\.[0-9]{0,2})?|0(\.[0-9]{0,2})?|(\.[0-9]{1,2})?)$/.test(amountOther.val()) && amountOther.val() < win.minDonationLimit && "" !== amountOther.val() && (goNext = !1, 
                underLimit = !0, amountOther.addClass("error")), "" === amountOther.val() && (goNext = !1, 
                amountOther.addClass("error")), /^\$?([1-9]{1}[0-9]{0,2}(\,[0-9]{3})*(\.[0-9]{0,2})?|[1-9]{1}[0-9]{0,}(\.[0-9]{0,2})?|0(\.[0-9]{0,2})?|(\.[0-9]{1,2})?)$/.test(amountOther.val()) || (goNext = !1, 
                amountOther.addClass("error")));
            }
            if (2 === current) {
                for (b = 0; a > b; b++) if ("" !== currentInputs.eq(b).val()) {
                    goNext = !0;
                    break;
                }
                var c = $("#firstname");
                /([a-zA-Z]+)|(([0-9]+)([a-zA-Z]+))/.test(c.val()) || (goNext = !1, c.addClass("error"));
                var d = $("#lastname");
                /([a-zA-Z]+)|(([0-9]+)([a-zA-Z]+))/.test(d.val()) || (goNext = !1, d.addClass("error"));
                var e = $("#addr1");
                /([a-zA-Z]+)|(([0-9]+)([a-zA-Z]+))/.test(e.val()) || (goNext = !1, e.addClass("error"));
                var f = $("#city");
                /([a-zA-Z]+)|(([0-9]+)([a-zA-Z]+))/.test(f.val()) || (goNext = !1, f.addClass("error")), 
                "" === $("#state_cd").val() && (goNext = !1, $("#state_cd").addClass("error"));
                var g = $("#zip");
                /^(\d{5}-\d{4}|\d{5}\+\d{4}|\d{5}|\d{9})$/.test(g.val()) || (goNext = !1, g.addClass("error"));
                var h = $("#email");
                /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(h.val()) || (goNext = !1, 
                h.addClass("error"));
                var i = $("#phone");
                i.val(i.val().replace(/\D/g, "")), (i.val().length > 11 || i.val().length < 10) && (goNext = !1, 
                i.addClass("error"));
            }
            if (3 === current) for (b = 0; a > b; b++) if ("" !== currentInputs.eq(b).val()) {
                goNext = !0;
                break;
            }
            if (4 === current) {
                replacementSubmit.focus(), goNext = !0;
                var j = $("#employer");
                /([a-zA-Z]+)|(([0-9]+)([a-zA-Z]+))/.test(j.val()) || (goNext = !1, j.addClass("error"));
                var k = $("#occupation");
                /([a-zA-Z]+)|(([0-9]+)([a-zA-Z]+))/.test(k.val()) || (goNext = !1, k.addClass("error"));
            }
            goNext && currentInputs.find("input").removeClass("error"), goNext || clientErrors();
        }
        runValidation = !0;
    }
}

var win = $("window"), current = 1, donateForm = $("#donate-form"), group1 = $("#select-amount-header, #amounts-cont"), group2 = $("#firstname-cont, #lastname-cont, #addr1-cont, #city-cont, #state_cd-cont, #zip-cont, #email-cont, #phone-cont"), group3 = $(".qd-info.cc_number_related.cc_expir_group_related, #cc-type-cont, #cc-number-cont, #cc-expiration-cont, #recurring-cont"), group4 = $("#personalized-content, .employer_related.occupation_related, #employer-cont, #occupation-cont, #employer-occupation-helper, #ovf-switch"), personalizedContent = $("#personalized-content"), next = $("#next"), replacementSubmit = $("#submit-button"), inputFields = $(":input"), amountInputs = $("#amounts input"), amountOther = $("#amount-cont-8 input"), breadcrumb = $("#breadcrumbs"), breadcrumbItem = $(".breadcrumb-item"), breadcrumbName = $("#breadcrumb-name"), breadcrumbPayment = $("#breadcrumb-payment"), breadcrumbEmployment = $("#breadcrumb-employment"), premature = $("span.premature"), goNext, overLimit, underLimit, hasSavedPayment, errorFullForm, inputTel = $("#amount-other, #phone, #zip, #cc_number"), inputEmail = $("#email"), inputChanges = $("#amount-other, #zip, #cc_number, #phone, #email"), $formContent = $("#donate-form-content"), runValidation = !0, minDonationLimit, amountOtherClean, keycode = !1;

$("body").addClass("sequential-active"), $(window).resize(function() {
    adjustInputTypes();
}), $(document).ready(function() {
    adjustInputTypes();
}), win.minDonationLimit = minDonationLimit && "number" == typeof minDonationLimit ? win.minDonationLimit : 3, 
win.maxDonationLimit = $("body").hasClass("ovf-gateway") || win.ofaOvfSwitch && donateForm.data("bsd_ovf_slug") ? win.maxDonationLimit && "number" == typeof win.maxDonationLimit && !win.ofaOvfSwitch ? win.maxDonationLimit : 73300 : win.maxDonationLimit && "number" == typeof win.maxDonationLimit ? win.maxDonationLimit : 2500;

var noPulse, animateFrames = function(a) {
    var b = [ "#00abeb", "#085775" ], c = a ? 0 : 1;
    1 === current ? next.animate({
        backgroundColor: b[a]
    }, 140, "linear", function() {
        noPulse = setTimeout(function() {
            animateFrames(c);
        }, 500);
    }) : next.css("background-color", "#1297c9");
};

if ($(window).width() > 767 && $("body").hasClass("sequential-active")) {
    $(".row.content-area-bg").removeClass("no-js"), group1.addClass("group1"), group2.addClass("group2"), 
    group3.addClass("group3"), group4.addClass("group4"), $("#personalized-content").addClass("hide"), 
    breadcrumbItem.each(function() {
        $(this).attr("data-breadcrumb-number", $(this).index() + 1);
    }), $(".group1, .group2, .group3, .group4").addClass("hide"), showContent(), replacementSubmit.hide(), 
    next.attr("tabindex", "19");
    var currentInputs = $(".group" + current).find("input");
    group1.find("input").attr("checked", !1), $(document).keydown(function(a) {
        var b = a.target.nodeName.toLowerCase();
        return 8 === a.which && ("input" === b || a.preventDefault()), 13 === a.which && 3 >= current ? (1 === current && ($("#amount-other").val($("#amount-other").val().replace(/ +/g, "")).blur(), 
        win.ofa.ee.emitEvent("amount:change", [ $("#amount-other").val() ])), 2 === current && $("#zip").val($("#zip").val().replace(/ +/g, "")), 
        next.click(), !1) : 13 === a.which && 4 === current ? (replacementSubmit.click(), 
        !1) : void 0;
    }), $("#personalized-content").on("click", "#qd-edit-info", function() {
        showContent(), $(".employer_related.occupation_related, #employer-cont, #occupation-cont").show(), 
        $("#personalized-content").fadeOut(800), replacementSubmit.fadeOut(400), next.show(), 
        hasSavedPayment = !1, savePaymentBreadcrumbs(), breadcrumbPayment.removeClass("completed"), 
        breadcrumbEmployment.removeClass("completed"), replacementSubmit.removeClass("saved-payment"), 
        $("#employer-occupation-helper").show(), current = 1, current++, updateBreadcrumb(current), 
        showContent();
    }), $(".amount-cont").click(function() {
        $(this).removeClass("active"), amountInputs.attr("checked", !1), premature.fadeOut("1200"), 
        $("#amount-header").removeClass("error"), $(".amount-cont").find("input").removeClass("error"), 
        "amount-cont-8" === $(this).attr("id") && ($(this).find("input").attr("checked", !0), 
        $("#other-amount-radio").attr("checked", !0), amountOther.val(""), errorFullForm || next.fadeIn(400));
    }), $(".amount-cont").find("label").click(function() {
        var a = $(this), b = a.parent().find("input");
        amountOther.val(""), $("#other-amount-radio").attr("checked", !1), a.addClass("active"), 
        b.attr("checked", !0), errorFullForm || (next.click(), hasSavedPayment || next.fadeIn(600), 
        replacementSubmit.html('<span id="processingform">Thanks for your fake donation</span>Donate  $' + a.parent().find("label").html().replace("$", "")));
    }), amountOther.change(function() {
        var a = $(this);
        premature.fadeOut("1200"), $("#amount-header").removeClass("error"), $(".amount-cont").find("input").removeClass("error"), 
        a.val(a.val().replace(/ +/g, "")), "" === a.val() && (a.attr("checked", !1), $("#other-amount-radio").attr("checked", !1)), 
        errorFullForm || amountOther.on("blur.otherField", function() {
            amountOtherClean = amountOther.text($(this).val().replace("$", "")).text(), replacementSubmit.html('<span id="processingform">Thanks for your fake donation</span>Donate  $' + amountOtherClean);
        });
    }), $("#zip").focus(function() {
        $("#zip").removeClass("error");
    }), $("#zip").change(function() {
        $(this).val($(this).val().replace(/ +/g, ""));
    }), $("#email, #phone").change(function() {
        $(this).val($(this).val().replace(/ +/g, ""));
    }), $("#email, #phone").focus(function() {
        $(this).removeClass("error");
    }), $("#cc_number").change(function() {
        $(this).val($(this).val().replace(/-/g, ""));
    }), inputFields.focus(function() {
        premature.fadeOut("1200"), $(this).removeClass("error");
    }), inputFields.change(function() {
        premature.fadeOut("1200"), $(this).removeClass("error");
    }), breadcrumbItem.click(function() {
        var a, b = $(".group1, .group2, .group3, .group4, .group5, .group6");
        $("this").focus(), a > current && validateForm(), $(this).hasClass("completed") && (a = $(this).attr("data-breadcrumb-number"), 
        a > current && validateForm(), goNext && (b.addClass("hide"), $(".group" + a).removeClass("hide"), 
        updateBreadcrumb(a), current = parseInt(a, 10)), 4 > current && (next.show(), replacementSubmit.hide())), 
        goNext || (validateForm(), goNext && (a = $(this).attr("data-breadcrumb-number"), 
        b.addClass("hide"), $(".group" + a).removeClass("hide"), updateBreadcrumb(a), current = parseInt(a, 10))), 
        1 === current && (next.attr("tabindex", "19"), keycode && personalizedContent.addClass("hide")), 
        2 === current && (next.attr("tabindex", "10"), keycode && personalizedContent.removeClass("hide")), 
        3 === current && (next.attr("tabindex", "26"), keycode && personalizedContent.addClass("hide")), 
        4 === current && (next.hide(), replacementSubmit.fadeIn(1800), keycode && personalizedContent.removeClass("hide"), 
        $formContent.addClass("ovfSwitch")), 4 !== current && (next.show(), replacementSubmit.hide(), 
        $formContent.removeClass("ovfSwitch")), goNext && premature.fadeOut(800);
    }), next.unbind("click").click(function(a) {
        a.preventDefault(), next.focus(), validateForm(), goNext && (premature.fadeOut("1200"), 
        showContent(), current++, current >= 4 && (current = 4), showContent(), updateBreadcrumb(current), 
        1 === current && (next.attr("tabindex", "19"), keycode && personalizedContent.addClass("hide")), 
        2 === current && ($("#firstname").focus(), next.attr("tabindex", "10"), keycode && personalizedContent.removeClass("hide")), 
        3 === current && ($("#cc_number").focus(), next.attr("tabindex", "26"), keycode && personalizedContent.addClass("hide")), 
        4 === current && ($("#employer").focus(), next.hide(), replacementSubmit.fadeIn(1e3), 
        keycode && personalizedContent.removeClass("hide"))), 4 !== current && (next.show(), 
        replacementSubmit.hide()), goNext && premature.fadeOut(800);
    }), replacementSubmit.click(function(a) {
        a.preventDefault(), $("body").hasClass("error") ? replacementSubmit.html('<span id="processingform">Thanks for your fake donation</span>Processing').addClass("processingform") : (validateForm(), 
        goNext ? replacementSubmit.html('<span id="processingform">Thanks for your fake donation</span>Processing').addClass("processingform") : premature.css("bottom", bottomPx).text("Please correct your employment information.").fadeIn("800"));
    });
}