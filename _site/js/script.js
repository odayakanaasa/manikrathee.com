function trackEvent(a, b, c) {
    a && b && c && ga("send", "event", a, b, c);
}

function prettyForms() {
    fixTextBoxes(), fixTextareas(), fixSelects(), fixChecks(), fixRadios(), fixSubmits();
}

function appendParentsTo(a) {
    tl = document.createElement("div"), br = document.createElement("div"), bl = document.createElement("div"), 
    tr = document.createElement("div"), document.all ? (tl.className = "frmShdwTopLt", 
    br.className = "frmShdwBottomRt", bl.className = "frmShdwBottomLt", tr.className = "frmShdwTopRt", 
    t1 = a.insertAdjacentElement("BeforeBegin", tl)) : (tl.setAttribute("class", "frmShdwTopLt"), 
    br.setAttribute("class", "frmShdwBottomRt"), bl.setAttribute("class", "frmShdwBottomLt"), 
    tr.setAttribute("class", "frmShdwTopRt"), inputParent = a.parentNode, tl = inputParent.insertBefore(tl, a)), 
    br = tl.appendChild(br), bl = br.appendChild(bl), tr = bl.appendChild(tr), tr.appendChild(a);
}

function fixTextBoxes() {
    for (inputs = document.getElementsByTagName("input"), i = 0; i < inputs.length; i++) "text" == inputs[i].type && appendParentsTo(inputs[i]);
}

function fixTextareas() {
    for (textareas = document.getElementsByTagName("textarea"), i = 0; i < textareas.length; i++) appendParentsTo(textareas[i]);
}

function fixSubmits() {
    for (inputs = document.getElementsByTagName("input"), i = 0; i < inputs.length; i++) "submit" == inputs[i].type && (appendParentsTo(inputs[i]), 
    inputs[i].className = "frmShdwSubmit");
}

function fixRadios() {
    for (inputs = document.getElementsByTagName("input"), i = 0; i < inputs.length; i++) "radio" == inputs[i].type && (lnk = document.createElement("a"), 
    lnk.style.margin = "4px", lnk.className = "frmShdwRadio", img = document.createElement("img"), 
    img.src = 1 == inputs[i].checked ? imageRadioChecked : imageRadioUnchecked, inputs[i].id ? realId = inputs[i].id : (realId = "radio" + i, 
    inputs[i].id = realId), fakeId = "fake" + realId, img.id = fakeId, lnk.href = "javascript:toggleRadio('" + realId + "','" + fakeId + "')", 
    document.all ? lnk = inputs[i].insertAdjacentElement("BeforeBegin", lnk) : (inputParent = inputs[i].parentNode, 
    lnk = inputParent.insertBefore(lnk, inputs[i])), lnk.appendChild(img), inputs[i].style.display = "none");
}

function fixChecks() {
    for (inputs = document.getElementsByTagName("input"), i = 0; i < inputs.length; i++) "checkbox" == inputs[i].type && (appendParentsTo(inputs[i]), 
    lnk = document.createElement("a"), lnk.style.margin = "4px", lnk.className = "frmShdwCheck", 
    img = document.createElement("img"), img.src = 1 == inputs[i].checked ? imageCheckboxChecked : imageCheckboxUnchecked, 
    inputs[i].id ? realId = inputs[i].id : (realId = "check" + i, inputs[i].id = realId), 
    fakeId = "fake" + realId, img.id = fakeId, lnk.href = "javascript:toggleCheck('" + realId + "','" + fakeId + "')", 
    document.all ? lnk = inputs[i].insertAdjacentElement("BeforeBegin", lnk) : (inputParent = inputs[i].parentNode, 
    lnk = inputParent.insertBefore(lnk, inputs[i])), lnk.appendChild(img), inputs[i].style.display = "none");
}

function fixSelects() {
    for (selects = document.getElementsByTagName("select"), i = 0; i < selects.length; i++) if (appendParentsTo(selects[i]), 
    "" == selects[i].id && (selects[i].id = "dynId" + i), fakeSelectWrapper = document.createElement("div"), 
    fakeSelectIcon = document.createElement("a"), document.all) {
        for (fakeSelectIcon.href = 'javascript:dropDownMenu("frmShdwMenu' + i + '", "frmShdwMenuChosen' + i + '","' + selects[i].id + '")', 
        fakeSelectIcon.innerHTML = '<img class="fakeSelectImg" src="' + imageSelectDropDownArrow + '" />', 
        fakeSelect = document.createElement("div"), fakeSelect.id = "frmShdwMenu" + i, fakeSelect.className = "frmShdwSelectDrop", 
        options = selects[i].getElementsByTagName("option"), fakeSelectedHolder = document.createElement("a"), 
        fakeSelectedHolder.className = "frmShdwSelectDropChosen", fakeSelectedHolder.id = "frmShdwMenuChosen" + i, 
        fakeSelectedHolder.style.width = selects[i].clientWidth - 15 + "px", fakeSelectedHolder.href = 'javascript:dropDownMenu("frmShdwMenu' + i + '", "frmShdwMenuChosen' + i + '","' + selects[i].id + '")', 
        j = 0; j < options.length; j++) fakeOption = document.createElement("a"), fakeOption.innerHTML = options[j].innerHTML, 
        fakeOption.style.width = selects[i].clientWidth - 16 + "px", fakeOption.href = 'javascript:chooseSelect("' + selects[i].id + '",' + j + ',"frmShdwMenu' + i + '", "frmShdwMenuChosen' + i + '")', 
        fakeSelect.appendChild(fakeOption), 1 == options[j].selected && (fakeSelectedHolder.innerHTML = options[j].innerHTML, 
        fakeOption.className = "selected");
        fakeSelectWrapper.appendChild(fakeSelectedHolder), fakeSelectWrapper.appendChild(fakeSelect), 
        fakeSelectWrapper.appendChild(fakeSelectIcon), selectParent = selects[i].parentNode, 
        fakeSelect.style.width = selects[i].clientWidth - 15 + "px", fakeSelect.style.margin = "3px 3px 3px -" + (selects[i].clientWidth - 5) + "px", 
        fakeSelectWrapper = selects[i].insertAdjacentElement("BeforeBegin", fakeSelectWrapper), 
        selects[i].style.display = "none";
    } else {
        for (fakeSelectIcon.setAttribute("href", 'javascript:dropDownMenu("frmShdwMenu' + i + '", "frmShdwMenuChosen' + i + '","' + selects[i].id + '")'), 
        fakeSelectIcon.innerHTML = '<img class="fakeSelectImg" src="' + imageSelectDropDownArrow + '" />', 
        fakeSelect = document.createElement("div"), fakeSelect.setAttribute("id", "frmShdwMenu" + i), 
        fakeSelect.setAttribute("class", "frmShdwSelectDrop"), options = selects[i].getElementsByTagName("option"), 
        fakeSelectedHolder = document.createElement("div"), fakeSelectedHolder.setAttribute("class", "frmShdwSelectDropChosen"), 
        fakeSelectedHolder.setAttribute("id", "frmShdwMenuChosen" + i), fakeSelectedHolder.style.width = selects[i].clientWidth - 15 + "px", 
        fakeSelectedHolder.setAttribute("onclick", 'javascript:dropDownMenu("frmShdwMenu' + i + '", "frmShdwMenuChosen' + i + '","' + selects[i].id + '")'), 
        j = 0; j < options.length; j++) fakeOption = document.createElement("a"), fakeOption.innerHTML = options[j].innerHTML, 
        fakeOption.setAttribute("href", 'javascript:chooseSelect("' + selects[i].id + '",' + j + ',"frmShdwMenu' + i + '", "frmShdwMenuChosen' + i + '")'), 
        fakeSelect.appendChild(fakeOption), 1 == options[j].selected && (fakeSelectedHolder.innerHTML = options[j].innerHTML, 
        fakeOption.setAttribute("class", "selected"));
        fakeSelectWrapper.appendChild(fakeSelectedHolder), fakeSelectWrapper.appendChild(fakeSelect), 
        fakeSelectWrapper.appendChild(fakeSelectIcon), selectParent = selects[i].parentNode, 
        fakeSelect.style.width = selects[i].clientWidth - 15 + "px", fakeSelectWrapper = selectParent.insertBefore(fakeSelectWrapper, selects[i]), 
        selects[i].style.display = "none";
    }
}

function toggleRadio(a, b) {
    for (realRadio = document.getElementById(a), fakeRadio = document.getElementById(b), 
    radioForm = realRadio.parentNode, tmpCnt = 1; "FORM" != radioForm.tagName; ) if (radioForm = radioForm.parentNode, 
    tmpCnt++, tmpCnt > 50) {
        window.alert("encountered javascript error\n[parentNode]");
        break;
    }
    for (inputs = radioForm.getElementsByTagName("input"), i = 0; i < inputs.length; i++) "radio" == inputs[i].type && inputs[i].name == realRadio.name && (inputs[i].checked = !1, 
    document.getElementById("fake" + inputs[i].id).src = imageRadioUnchecked, inputs[i].id == a && (inputs[i].checked = !0, 
    document.getElementById("fake" + inputs[i].id).src = imageRadioChecked));
    triggerEvent(realRadio, "change"), triggerEvent(realRadio, "click");
}

function toggleCheck(a, b) {
    fakeCheck = document.getElementById(b), realCheck = document.getElementById(a), 
    fakeCheck.src = -1 != fakeCheck.src.indexOf("checkboxChecked.gif") ? imageCheckboxUnchecked : imageCheckboxChecked, 
    realCheck.checked = 1 == realCheck.checked ? !1 : !0, triggerEvent(realCheck, "change");
}

function dropDownMenu(a, b, c) {
    document.getElementById(a).className = "frmShdwSelectDropShown", realMenu = document.getElementById(c), 
    document.all ? res = realMenu.fireEvent("onclick") : (mouseEvent = document.createEvent("MouseEvents"), 
    mouseEvent.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), 
    realMenu.dispatchEvent(mouseEvent));
}

function chooseSelect(a, b, c, d) {
    for (realDropdown = document.getElementById(a), fakeDropDown = document.getElementById(c), 
    fakeChosenItem = document.getElementById(d), currSelect = realDropdown.selectedIndex = b, 
    fakeChosenItem.childNodes[0].nodeValue = realDropdown[b].innerHTML, fakeOptions = fakeDropDown.getElementsByTagName("a"), 
    i = 0; i < fakeOptions.length; i++) fakeOptions[i].className = "", fakeOptions[i].innerHTML == realDropdown[b].innerHTML && (fakeOptions[i].className = "selected");
    fakeDropDown.className = "frmShdwSelectDrop", fakeChosenItem.style.display = "block", 
    triggerEvent(realDropdown, "change");
}

function triggerEvent(a, b) {
    document.all ? "click" == b ? res = a.fireEvent("onclick") : "change" == b && (res = a.fireEvent("onchange")) : "click" == b ? (mouseEvent = document.createEvent("MouseEvents"), 
    mouseEvent.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), 
    a.dispatchEvent(mouseEvent)) : "change" == b && (mouseEvent = document.createEvent("HTMLEvents"), 
    mouseEvent.initEvent("change", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), 
    a.dispatchEvent(mouseEvent));
}

function logofyAPI() {
    setTimeout(function() {
        instagramActive && ($(".social-api").prepend('<span class="ss-icon ss-social logo"></span>'), 
        twitterAPI.find("span.logo").prepend(twitterID), instagramAPI.find("span.logo").prepend(instagramID), 
        readmillAPI.find("span.logo").prepend(readmillID), centerAPI(), activateAPI());
    }, 1e3);
}

function activateAPI() {
    $(".social-api").addClass("run"), trackEvent("home", "api bar", "init"), $(".social-api").delay(4500).queue(function(a) {
        $(this).addClass("inactive"), a();
    });
}

function centerAPI() {
    var a = $(".social-api");
    $(window).width() > 768 && $(a).each(function() {
        var a = $(this).find("div"), b = a.height();
        a.css("margin-top", +b / -2 + "px");
    });
}

function checkWidth() {
    $(window).width() > 769 ? $("#portfolio").hover(function() {
        $("#current, .copy, .dark-shade").addClass("fade"), trackEvent("global", "portfolio sub menu", "opened");
    }, function() {
        $("#current, .copy, .dark-shade").removeClass("fade"), trackEvent("global", "portfolio sub menu", "closed");
    }) : $(".copy").removeClass("fade");
}

function startCount() {
    $(".count").each(function() {
        countNumberValue = $(this).attr("data-number"), $(this).countTo({
            from: 0,
            to: countNumberValue,
            speed: 1400,
            refreshInterval: 5,
            onComplete: function() {}
        });
    });
}

!function(a, b, c, d, e, f, g) {
    a.GoogleAnalyticsObject = e, a[e] = a[e] || function() {
        (a[e].q = a[e].q || []).push(arguments);
    }, a[e].l = 1 * new Date(), f = b.createElement(c), g = b.getElementsByTagName(c)[0], 
    f.async = 1, f.src = d, g.parentNode.insertBefore(f, g);
}(window, document, "script", "//www.google-analytics.com/analytics.js", "ga"), 
ga("create", "UA-19400273-3", "auto"), ga("send", "pageview"), $(".social-api").on("hover", function() {
    trackEvent("home", "api bar", "interaction: hovered [" + $(this).attr("id") + "]");
}), "home" === $("body").attr("id") && $(document).ready(function() {
    $(".twitter").load("OAuth/twitter-auth.php"), logofyAPI(), centerAPI();
});

var LastFMStatus = {
    defaultApiKey: "8268a36df9e8ca5f3bf2dac06f83ef93",
    updateDelay: 6e4,
    apikey: null,
    username: null,
    trackInfo: null,
    init: function(a) {
        if (a = a || {}, this.apikey = a.apikey ? a.apikey : this.defaultApiKey, !a.username) throw "RuntimeError: No username was specified!";
        this.username = a.username, this.fetch();
    },
    url: function(a) {
        return "http://ws.audioscrobbler.com/2.0?method=user.getrecenttracks&user=" + this.username + "&api_key=" + this.apikey + "&limit=2&format=json&callback=" + a;
    },
    fetch: function() {
        var a = document.getElementById("lfm_state_json");
        a && document.body.removeChild(a);
        var b = document.createElement("script");
        b.src = this.url("LastFMStatus.updateInfo"), b.id = "lfm_state_json", document.body.appendChild(b);
    },
    updateInfo: function(a) {
        if (a.error) this.trackInfo = a; else {
            var b = a.recenttracks.track[0], c = {
                song: b.name,
                artist: b.artist["#text"],
                playing: b["@attr"] ? !0 : !1
            };
            this.trackInfo = this.trackInfo || {}, this.songChanged(c) && (this.trackInfo = c);
        }
        this.updateView(), setTimeout(function() {
            LastFMStatus.fetch();
        }, this.updateDelay);
    },
    songChanged: function(a) {
        return this.trackInfo.song != a.song || this.trackInfo.playing != a.playing;
    },
    updateView: function() {
        var a, b, c = (' ( <a target="__blank" href="http://www.last.fm/user/' + this.username + '">last.fm</a> )', 
        document.getElementById("rdio"));
        if (!c) {
            var d = document.createElement("div");
            d.id = "rdio", document.body.appendChild(d), c = document.getElementById("rdio");
        }
        this.trackInfo.error ? (a = "Error: ", b = "<strong>" + this.trackInfo.message + "</strong>") : (a = this.trackInfo.playing ? "Now Playing: " : "Last Played: ", 
        b = '<a href="http://www.rdio.com/people/manikrathee/history/" title="@ManikRathee is listening to "' + this.trackInfo.artist + ' on Rdio" itemprop="url"><span class="ss-icon ss-social logo">rdio</span><div><p>' + this.trackInfo.artist + " - " + this.trackInfo.song + "</p></a></div>"), 
        "home" === $("body").attr("id") && (c.innerHTML = b), rdioActive = !0, centerAPI();
    }
};

if (function() {
    var a, b;
    a = function() {
        function a(a, b) {
            var c, d;
            if (this.options = {
                target: "instafeed",
                get: "popular",
                resolution: "thumbnail",
                sortBy: "none",
                links: !0,
                mock: !1,
                useHttp: !1
            }, "object" == typeof a) for (c in a) d = a[c], this.options[c] = d;
            this.context = null != b ? b : this, this.unique = this._genKey();
        }
        return a.prototype.hasNext = function() {
            return "string" == typeof this.context.nextUrl && this.context.nextUrl.length > 0;
        }, a.prototype.next = function() {
            return this.hasNext() ? this.run(this.context.nextUrl) : !1;
        }, a.prototype.run = function(b) {
            var c, d, e;
            if ("string" != typeof this.options.clientId && "string" != typeof this.options.accessToken) throw new Error("Missing clientId or accessToken.");
            if ("string" != typeof this.options.accessToken && "string" != typeof this.options.clientId) throw new Error("Missing clientId or accessToken.");
            return null != this.options.before && "function" == typeof this.options.before && this.options.before.call(this), 
            "undefined" != typeof document && null !== document && (e = document.createElement("script"), 
            e.id = "instafeed-fetcher", e.src = b || this._buildUrl(), c = document.getElementsByTagName("head"), 
            c[0].appendChild(e), d = "instafeedCache" + this.unique, window[d] = new a(this.options, this), 
            window[d].unique = this.unique), !0;
        }, a.prototype.parse = function(a) {
            var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w;
            if ("object" != typeof a) {
                if (null != this.options.error && "function" == typeof this.options.error) return this.options.error.call(this, "Invalid JSON data"), 
                !1;
                throw new Error("Invalid JSON response");
            }
            if (200 !== a.meta.code) {
                if (null != this.options.error && "function" == typeof this.options.error) return this.options.error.call(this, a.meta.error_message), 
                !1;
                throw new Error("Error from Instagram: " + a.meta.error_message);
            }
            if (0 === a.data.length) {
                if (null != this.options.error && "function" == typeof this.options.error) return this.options.error.call(this, "No images were returned from Instagram"), 
                !1;
                throw new Error("No images were returned from Instagram");
            }
            if (null != this.options.success && "function" == typeof this.options.success && this.options.success.call(this, a), 
            this.context.nextUrl = "", null != a.pagination && (this.context.nextUrl = a.pagination.next_url), 
            "none" !== this.options.sortBy) switch (o = "random" === this.options.sortBy ? [ "", "random" ] : this.options.sortBy.split("-"), 
            n = "least" === o[0] ? !0 : !1, o[1]) {
              case "random":
                a.data.sort(function() {
                    return .5 - Math.random();
                });
                break;

              case "recent":
                a.data = this._sortBy(a.data, "created_time", n);
                break;

              case "liked":
                a.data = this._sortBy(a.data, "likes.count", n);
                break;

              case "commented":
                a.data = this._sortBy(a.data, "comments.count", n);
                break;

              default:
                throw new Error("Invalid option for sortBy: '" + this.options.sortBy + "'.");
            }
            if ("undefined" != typeof document && null !== document && this.options.mock === !1) {
                if (i = a.data, null != this.options.limit && i.length > this.options.limit && (i = i.slice(0, this.options.limit + 1 || 9e9)), 
                c = document.createDocumentFragment(), null != this.options.filter && "function" == typeof this.options.filter && (i = this._filter(i, this.options.filter)), 
                null != this.options.template && "string" == typeof this.options.template) {
                    for (e = "", g = "", k = "", p = document.createElement("div"), q = 0, t = i.length; t > q; q++) f = i[q], 
                    h = f.images[this.options.resolution].url, this.options.useHttp || (h = h.replace("http://", "//")), 
                    g = this._makeTemplate(this.options.template, {
                        model: f,
                        id: f.id,
                        link: f.link,
                        image: h,
                        caption: this._getObjectProperty(f, "caption.text"),
                        likes: f.likes.count,
                        comments: f.comments.count,
                        location: this._getObjectProperty(f, "location.name")
                    }), e += g;
                    for (p.innerHTML = e, w = [].slice.call(p.childNodes), r = 0, u = w.length; u > r; r++) m = w[r], 
                    c.appendChild(m);
                } else for (s = 0, v = i.length; v > s; s++) f = i[s], j = document.createElement("img"), 
                h = f.images[this.options.resolution].url, this.options.useHttp || (h = h.replace("http://", "//")), 
                j.src = h, this.options.links === !0 ? (b = document.createElement("a"), b.href = f.link, 
                b.appendChild(j), c.appendChild(b)) : c.appendChild(j);
                document.getElementById(this.options.target).appendChild(c), d = document.getElementsByTagName("head")[0], 
                d.removeChild(document.getElementById("instafeed-fetcher")), l = "instafeedCache" + this.unique, 
                window[l] = void 0;
                try {
                    delete window[l];
                } catch (x) {}
            }
            return null != this.options.after && "function" == typeof this.options.after && this.options.after.call(this), 
            !0;
        }, a.prototype._buildUrl = function() {
            var a, b, c;
            switch (a = "https://api.instagram.com/v1", this.options.get) {
              case "popular":
                b = "media/popular";
                break;

              case "tagged":
                if ("string" != typeof this.options.tagName) throw new Error("No tag name specified. Use the 'tagName' option.");
                b = "tags/" + this.options.tagName + "/media/recent";
                break;

              case "location":
                if ("number" != typeof this.options.locationId) throw new Error("No location specified. Use the 'locationId' option.");
                b = "locations/" + this.options.locationId + "/media/recent";
                break;

              case "user":
                if ("number" != typeof this.options.userId) throw new Error("No user specified. Use the 'userId' option.");
                if ("string" != typeof this.options.accessToken) throw new Error("No access token. Use the 'accessToken' option.");
                b = "users/" + this.options.userId + "/media/recent";
                break;

              default:
                throw new Error("Invalid option for get: '" + this.options.get + "'.");
            }
            return c = "" + a + "/" + b, c += null != this.options.accessToken ? "?access_token=" + this.options.accessToken : "?client_id=" + this.options.clientId, 
            null != this.options.limit && (c += "&count=" + this.options.limit), c += "&callback=instafeedCache" + this.unique + ".parse";
        }, a.prototype._genKey = function() {
            var a;
            return a = function() {
                return (65536 * (1 + Math.random()) | 0).toString(16).substring(1);
            }, "" + a() + a() + a() + a();
        }, a.prototype._makeTemplate = function(a, b) {
            var c, d, e, f, g;
            for (d = /(?:\{{2})([\w\[\]\.]+)(?:\}{2})/, c = a; d.test(c); ) e = c.match(d)[1], 
            f = null != (g = this._getObjectProperty(b, e)) ? g : "", c = c.replace(d, "" + f);
            return c;
        }, a.prototype._getObjectProperty = function(a, b) {
            var c, d;
            for (b = b.replace(/\[(\w+)\]/g, ".$1"), d = b.split("."); d.length; ) {
                if (c = d.shift(), !(null != a && c in a)) return null;
                a = a[c];
            }
            return a;
        }, a.prototype._sortBy = function(a, b, c) {
            var d;
            return d = function(a, d) {
                var e, f;
                return e = this._getObjectProperty(a, b), f = this._getObjectProperty(d, b), c ? e > f ? 1 : -1 : f > e ? 1 : -1;
            }, a.sort(d.bind(this)), a;
        }, a.prototype._filter = function(a, b) {
            var c, d, e, f, g;
            for (c = [], e = function(a) {
                return b(a) ? c.push(a) : void 0;
            }, f = 0, g = a.length; g > f; f++) d = a[f], e(d);
            return c;
        }, a;
    }(), b = "undefined" != typeof exports && null !== exports ? exports : window, b.Instafeed = a;
}.call(this), "home" === $("body").attr("id")) {
    var instagramActive = !1, feed = new Instafeed({
        get: "user",
        userId: 262351,
        clientId: "f7f319ceb411486593db148972918108",
        accessToken: "91dc3ed9fcf74949a3b7944c5ab3ea90",
        target: "instagram",
        limit: 1,
        template: '<div class="photo" data="{{id}}"><p><a id="instagram-link" href="{{link}}" title="View my latest Instagram Shot">{{caption}}</a></p></div>'
    });
    feed.run(), instagramActive = !0;
}

"function" != typeof renderTwitters && function() {
    function a(a) {
        var b, c = a;
        for (b in a.user) c["user_" + b] = a.user[b];
        return c.time = e(a.created_at), c;
    }
    function b(a) {
        i ? a.call() : h.push(a);
    }
    function c() {
        i = !0;
        for (var a; a = h.shift(); ) a.call();
    }
    function d() {
        if (document.addEventListener && !f.webkit) document.addEventListener("DOMContentLoaded", c, !1); else if (f.msie) {
            document.write("<script id=__ie_init defer=true src=//:></script>");
            var a = document.getElementById("__ie_init");
            a && (a.onreadystatechange = function() {
                "complete" == this.readyState && (this.parentNode.removeChild(this), c.call());
            }), a = null;
        } else if (f.webkit) var b = setInterval(function() {
            ("loaded" == document.readyState || "complete" == document.readyState) && (clearInterval(b), 
            b = null, c.call());
        }, 10);
    }
    function e(a) {
        function b(a) {
            var b = a.getHours(), c = a.getMinutes() + "", d = "AM";
            return 0 == b ? b = 12 : 12 == b ? d = "PM" : b > 12 && (b -= 12, d = "PM"), 1 == c.length && (c = "0" + c), 
            b + ":" + c + " " + d;
        }
        function c(a) {
            var b = (a.toDateString().split(/ /), j[a.getMonth()]), c = a.getDate() + "", d = parseInt(c), e = a.getFullYear(), f = new Date().getFullYear(), g = "th";
            return d % 10 == 1 && "1" != c.substr(0, 1) ? g = "st" : d % 10 == 2 && "1" != c.substr(0, 1) ? g = "nd" : d % 10 == 3 && "1" != c.substr(0, 1) && (g = "rd"), 
            "0" == c.substr(0, 1) && (c = c.substr(1)), b + " " + c + g + (f != e ? ", " + e : "");
        }
        var d = a.split(" "), e = Date.parse(d[1] + " " + d[2] + ", " + d[5] + " " + d[3]), f = new Date(e), g = arguments.length > 1 ? arguments[1] : new Date(), h = parseInt((g.getTime() - e) / 1e3), i = "";
        return h += 60 * g.getTimezoneOffset(), i = 5 > h ? "less than 5 seconds ago" : 30 > h ? "half a minute ago" : 60 > h ? "less than a minute ago" : 120 > h ? "1 minute ago" : 2700 > h ? parseInt(h / 60).toString() + " minutes ago" : 10800 > h ? "about 1 hour ago" : 86400 > h ? "about " + parseInt(h / 3600).toString() + " hours ago" : 172800 > h ? b(f) + " yesterday" : b(f) + " " + c(f);
    }
    var f = function() {
        var a = navigator.userAgent.toLowerCase();
        return {
            webkit: /(webkit|khtml)/.test(a),
            opera: /opera/.test(a),
            msie: /msie/.test(a) && !/opera/.test(a),
            mozilla: /mozilla/.test(a) && !/(compatible|webkit)/.test(a)
        };
    }(), g = 0, h = [], i = !1, j = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
    window.ify = function() {
        return {
            link: function(a) {
                return a.replace(/[a-z]+:\/\/[a-z0-9-_]+\.[a-z0-9-_:~%&\?\/.=]+[^:\.,\)\s*$]/gi, function(a) {
                    return '<a href="' + a + '">' + (a.length > 25 ? a.substr(0, 24) + "..." : a) + "</a>";
                });
            },
            at: function(a) {
                return a.replace(/(^|[^\w]+)\@([a-zA-Z0-9_]{1,15})/g, function(a, b, c) {
                    return b + '@<a href="http://twitter.com/' + c + '">' + c + "</a>";
                });
            },
            hash: function(a) {
                return a.replace(/(^|[^\w'"]+)\#([a-zA-Z0-9_]+)/g, function(a, b, c) {
                    return b + '#<a href="http://search.twitter.com/search?q=%23' + c + '">' + c + "</a>";
                });
            },
            clean: function(a) {
                return this.hash(this.at(this.link(a)));
            }
        };
    }(), window.renderTwitters = function(b, c) {
        function d(a) {
            return document.createElement(a);
        }
        function f(a) {
            return document.createTextNode(a);
        }
        var g, h, i, j, k = document.getElementById(c.twitterTarget), l = null, m = d("ul"), n = b.length > c.count ? c.count : b.length;
        for (j = 0; n > j && b[j]; j++) if (l = a(b[j]), c.ignoreReplies && "@" == b[j].text.substr(0, 1)) n++; else {
            if (g = d("li"), c.template) g.innerHTML = c.template.replace(/%([a-z_\-\.]*)%/gi, function(a, b) {
                var d = l[b] + "" || "";
                return "text" == b && c.enableLinks && (d = ify.clean(d)), d;
            }); else {
                if (h = d("span"), h.className = "twitterStatus", i = d("span"), i.className = "twitterTime", 
                h.innerHTML = b[j].text, 1 == c.enableLinks && (h.innerHTML = ify.clean(h.innerHTML)), 
                i.innerHTML = e(b[j].created_at), c.prefix) {
                    var o = d("span");
                    o.className = "twitterPrefix", o.innerHTML = c.prefix.replace(/%(.*?)%/g, function(a, c) {
                        return b[j].user[c];
                    }), g.appendChild(o), g.appendChild(f(" "));
                }
                g.appendChild(h), g.appendChild(f(" ")), g.appendChild(i);
            }
            c.newwindow && (g.innerHTML = g.innerHTML.replace(/<a href/gi, '<a target="_blank" href')), 
            m.appendChild(g);
        }
        if (c.clearContents) for (;k.firstChild; ) k.removeChild(k.firstChild);
        k.appendChild(m), "function" == typeof c.callback && c.callback();
    }, window.getTwitters = function(a, c, d, e) {
        g++, "object" == typeof c && (e = c, c = e.id, d = e.count), d || (d = 1), e ? e.count = d : e = {}, 
        e.timeout || "function" != typeof e.onTimeout || (e.timeout = 10), "undefined" == typeof e.clearContents && (e.clearContents = !0), 
        e.withFriends && (e.withFriends = !1), e.twitterTarget = a, "undefined" == typeof e.enableLinks && (e.enableLinks = !0), 
        window["twitterCallback" + g] = function(a) {
            e.timeout && clearTimeout(window["twitterTimeout" + g]), renderTwitters(a, e);
        }, b(function(a, b) {
            return function() {
                if (document.getElementById(a.twitterTarget)) {
                    var d = "http://www.twitter.com/statuses/" + (a.withFriends ? "friends_timeline" : "user_timeline") + "/" + c + ".json?callback=twitterCallback" + b + "&count=20&cb=" + Math.random();
                    a.timeout && (window["twitterTimeout" + b] = setTimeout(function() {
                        a.onTimeoutCancel && (window["twitterCallback" + b] = function() {}), a.onTimeout.call(document.getElementById(a.twitterTarget));
                    }, 1e3 * a.timeout));
                    var e = document.createElement("script");
                    e.setAttribute("src", d), document.getElementsByTagName("head")[0].appendChild(e);
                }
            };
        }(e, g));
    }, d();
}(), function(a) {
    a.flexslider = function(b, c) {
        var d = b;
        d.init = function() {
            function b(a) {
                if (!d.animating && (39 == a.keyCode || 37 == a.keyCode)) {
                    if (39 == a.keyCode) var b = d.getTarget("next"); else if (37 == a.keyCode) var b = d.getTarget("prev");
                    d.canAdvance(b) && d.flexAnimate(b, d.vars.pauseOnAction);
                }
            }
            function e(a) {
                d.animating ? a.preventDefault() : 1 == a.touches.length && (d.pause(), r = d.vertical ? d.height() : d.width(), 
                t = Number(new Date()), q = d.vertical ? (d.currentSlide + d.cloneOffset) * d.height() : (d.currentSlide + d.cloneOffset) * d.width(), 
                o = d.vertical ? a.touches[0].pageY : a.touches[0].pageX, p = d.vertical ? a.touches[0].pageX : a.touches[0].pageY, 
                d.setTransition(0), this.addEventListener("touchmove", f, !1), this.addEventListener("touchend", g, !1));
            }
            function f(a) {
                s = d.vertical ? o - a.touches[0].pageY : o - a.touches[0].pageX, u = d.vertical ? Math.abs(s) < Math.abs(a.touches[0].pageX - p) : Math.abs(s) < Math.abs(a.touches[0].pageY - p), 
                u || (a.preventDefault(), "slide" == d.vars.animation && d.transitions && (d.vars.animationLoop || (s /= 0 == d.currentSlide && 0 > s || d.currentSlide == d.count - 1 && s > 0 ? Math.abs(s) / r + 2 : 1), 
                d.args[d.prop] = d.vertical ? "translate3d(0," + (-q - s) + "px,0)" : "translate3d(" + (-q - s) + "px,0,0)", 
                d.container.css(d.args)));
            }
            function g() {
                if (d.animating = !1, d.animatingTo == d.currentSlide && !u && null != s) {
                    var a = s > 0 ? d.getTarget("next") : d.getTarget("prev");
                    d.canAdvance(a) && Number(new Date()) - t < 550 && Math.abs(s) > 20 || Math.abs(s) > r / 2 ? d.flexAnimate(a, d.vars.pauseOnAction) : d.flexAnimate(d.currentSlide, d.vars.pauseOnAction);
                }
                this.removeEventListener("touchmove", f, !1), this.removeEventListener("touchend", g, !1), 
                o = null, p = null, s = null, q = null;
            }
            if (d.vars = a.extend({}, a.flexslider.defaults, c), d.data("flexslider", !0), d.container = a(".slides", d), 
            d.slides = a(".slides > li", d), d.count = d.slides.length, d.animating = !1, d.currentSlide = d.vars.slideToStart, 
            d.animatingTo = d.currentSlide, d.atEnd = 0 == d.currentSlide ? !0 : !1, d.eventType = "ontouchstart" in document.documentElement ? "touchstart" : "click", 
            d.cloneCount = 0, d.cloneOffset = 0, d.manualPause = !1, d.vertical = "vertical" == d.vars.slideDirection, 
            d.prop = d.vertical ? "top" : "marginLeft", d.args = {}, d.transitions = "webkitTransition" in document.body.style, 
            d.transitions && (d.prop = "-webkit-transform"), "" != d.vars.controlsContainer && (d.controlsContainer = a(d.vars.controlsContainer).eq(a(".slides").index(d.container)), 
            d.containerExists = d.controlsContainer.length > 0), "" != d.vars.manualControls && (d.manualControls = a(d.vars.manualControls, d.containerExists ? d.controlsContainer : d), 
            d.manualExists = d.manualControls.length > 0), d.vars.randomize && (d.slides.sort(function() {
                return Math.round(Math.random()) - .5;
            }), d.container.empty().append(d.slides)), "slide" == d.vars.animation.toLowerCase()) {
                d.transitions && d.setTransition(0), d.css({
                    overflow: "hidden"
                }), d.vars.animationLoop && (d.cloneCount = 2, d.cloneOffset = 1, d.container.append(d.slides.filter(":first").clone().addClass("clone")).prepend(d.slides.filter(":last").clone().addClass("clone"))), 
                d.newSlides = a(".slides > li", d);
                var h = -1 * (d.currentSlide + d.cloneOffset);
                d.vertical ? (d.newSlides.css({
                    display: "block",
                    width: "100%",
                    "float": "left"
                }), d.container.height(200 * (d.count + d.cloneCount) + "%").css("position", "absolute").width("100%"), 
                setTimeout(function() {
                    d.css({
                        position: "relative"
                    }).height(d.slides.filter(":first").height()), d.args[d.prop] = d.transitions ? "translate3d(0," + h * d.height() + "px,0)" : h * d.height() + "px", 
                    d.container.css(d.args);
                }, 100)) : (d.args[d.prop] = d.transitions ? "translate3d(" + h * d.width() + "px,0,0)" : h * d.width() + "px", 
                d.container.width(200 * (d.count + d.cloneCount) + "%").css(d.args), setTimeout(function() {
                    d.newSlides.width(d.width()).css({
                        "float": "left",
                        display: "block"
                    });
                }, 100));
            } else d.transitions = !1, d.slides.css({
                width: "100%",
                "float": "left",
                marginRight: "-100%"
            }).eq(d.currentSlide).fadeIn(d.vars.animationDuration);
            if (d.vars.controlNav) {
                if (d.manualExists) d.controlNav = d.manualControls; else {
                    for (var i = a('<ol class="flex-control-nav"></ol>'), j = 1, k = 0; k < d.count; k++) i.append("<li><a>" + j + "</a></li>"), 
                    j++;
                    d.containerExists ? (a(d.controlsContainer).append(i), d.controlNav = a(".flex-control-nav li a", d.controlsContainer)) : (d.append(i), 
                    d.controlNav = a(".flex-control-nav li a", d));
                }
                d.controlNav.eq(d.currentSlide).addClass("active"), d.controlNav.bind(d.eventType, function(b) {
                    b.preventDefault(), a(this).hasClass("active") || (d.direction = d.controlNav.index(a(this)) > d.currentSlide ? "next" : "prev", 
                    d.flexAnimate(d.controlNav.index(a(this)), d.vars.pauseOnAction));
                });
            }
            if (d.vars.directionNav) {
                var l = a('<ul class="flex-direction-nav"><li><a class="prev" href="#">' + d.vars.prevText + '</a></li><li><a class="next" href="#">' + d.vars.nextText + "</a></li></ul>");
                d.containerExists ? (a(d.controlsContainer).append(l), d.directionNav = a(".flex-direction-nav li a", d.controlsContainer)) : (d.append(l), 
                d.directionNav = a(".flex-direction-nav li a", d)), d.vars.animationLoop || (0 == d.currentSlide ? d.directionNav.filter(".prev").addClass("disabled") : d.currentSlide == d.count - 1 && d.directionNav.filter(".next").addClass("disabled")), 
                d.directionNav.bind(d.eventType, function(b) {
                    b.preventDefault();
                    var c = a(this).hasClass("next") ? d.getTarget("next") : d.getTarget("prev");
                    d.canAdvance(c) && d.flexAnimate(c, d.vars.pauseOnAction);
                });
            }
            if (d.vars.keyboardNav && 1 == a("ul.slides").length && a(document).bind("keyup", b), 
            d.vars.mousewheel && (d.mousewheelEvent = /Firefox/i.test(navigator.userAgent) ? "DOMMouseScroll" : "mousewheel", 
            d.bind(d.mousewheelEvent, function(a) {
                a.preventDefault(), a = a ? a : window.event;
                var b = a.detail ? -1 * a.detail : a.wheelDelta / 40, c = 0 > b ? d.getTarget("next") : d.getTarget("prev");
                d.canAdvance(c) && d.flexAnimate(c, d.vars.pauseOnAction);
            })), d.vars.slideshow && (d.vars.pauseOnHover && d.vars.slideshow && d.hover(function() {
                d.pause();
            }, function() {
                d.manualPause || d.resume();
            }), d.animatedSlides = setInterval(d.animateSlides, d.vars.slideshowSpeed)), d.vars.pausePlay) {
                var m = a('<div class="flex-pauseplay"><span></span></div>');
                d.containerExists ? (d.controlsContainer.append(m), d.pausePlay = a(".flex-pauseplay span", d.controlsContainer)) : (d.append(m), 
                d.pausePlay = a(".flex-pauseplay span", d));
                var n = d.vars.slideshow ? "pause" : "play";
                d.pausePlay.addClass(n).text("pause" == n ? d.vars.pauseText : d.vars.playText), 
                d.pausePlay.bind(d.eventType, function(b) {
                    b.preventDefault(), a(this).hasClass("pause") ? (d.pause(), d.manualPause = !0) : (d.resume(), 
                    d.manualPause = !1);
                });
            }
            if ("ontouchstart" in document.documentElement) {
                var o, p, q, r, s, t, u = !1;
                d.each(function() {
                    "ontouchstart" in document.documentElement && this.addEventListener("touchstart", e, !1);
                });
            }
            "slide" == d.vars.animation.toLowerCase() && a(window).resize(function() {
                d.animating || (d.vertical ? (d.height(d.slides.filter(":first").height()), d.args[d.prop] = -1 * (d.currentSlide + d.cloneOffset) * d.slides.filter(":first").height() + "px", 
                d.transitions && (d.setTransition(0), d.args[d.prop] = d.vertical ? "translate3d(0," + d.args[d.prop] + ",0)" : "translate3d(" + d.args[d.prop] + ",0,0)"), 
                d.container.css(d.args)) : (d.newSlides.width(d.width()), d.args[d.prop] = -1 * (d.currentSlide + d.cloneOffset) * d.width() + "px", 
                d.transitions && (d.setTransition(0), d.args[d.prop] = d.vertical ? "translate3d(0," + d.args[d.prop] + ",0)" : "translate3d(" + d.args[d.prop] + ",0,0)"), 
                d.container.css(d.args)));
            }), d.vars.start(d);
        }, d.flexAnimate = function(a, b) {
            if (!d.animating) if (d.animating = !0, d.animatingTo = a, d.vars.before(d), b && d.pause(), 
            d.vars.controlNav && d.controlNav.removeClass("active").eq(a).addClass("active"), 
            d.atEnd = 0 == a || a == d.count - 1 ? !0 : !1, !d.vars.animationLoop && d.vars.directionNav && (0 == a ? d.directionNav.removeClass("disabled").filter(".prev").addClass("disabled") : a == d.count - 1 ? d.directionNav.removeClass("disabled").filter(".next").addClass("disabled") : d.directionNav.removeClass("disabled")), 
            d.vars.animationLoop || a != d.count - 1 || (d.pause(), d.vars.end(d)), "slide" == d.vars.animation.toLowerCase()) {
                var c = d.vertical ? d.slides.filter(":first").height() : d.slides.filter(":first").width();
                d.slideString = 0 == d.currentSlide && a == d.count - 1 && d.vars.animationLoop && "next" != d.direction ? "0px" : d.currentSlide == d.count - 1 && 0 == a && d.vars.animationLoop && "prev" != d.direction ? -1 * (d.count + 1) * c + "px" : -1 * (a + d.cloneOffset) * c + "px", 
                d.args[d.prop] = d.slideString, d.transitions ? (d.setTransition(d.vars.animationDuration), 
                d.args[d.prop] = d.vertical ? "translate3d(0," + d.slideString + ",0)" : "translate3d(" + d.slideString + ",0,0)", 
                d.container.css(d.args).one("webkitTransitionEnd transitionend", function() {
                    d.wrapup(c);
                })) : d.container.animate(d.args, d.vars.animationDuration, function() {
                    d.wrapup(c);
                });
            } else d.slides.eq(d.currentSlide).fadeOut(d.vars.animationDuration), d.slides.eq(a).fadeIn(d.vars.animationDuration, function() {
                d.wrapup();
            });
        }, d.wrapup = function(a) {
            "slide" == d.vars.animation && (0 == d.currentSlide && d.animatingTo == d.count - 1 && d.vars.animationLoop ? (d.args[d.prop] = -1 * d.count * a + "px", 
            d.transitions && (d.setTransition(0), d.args[d.prop] = d.vertical ? "translate3d(0," + d.args[d.prop] + ",0)" : "translate3d(" + d.args[d.prop] + ",0,0)"), 
            d.container.css(d.args)) : d.currentSlide == d.count - 1 && 0 == d.animatingTo && d.vars.animationLoop && (d.args[d.prop] = -1 * a + "px", 
            d.transitions && (d.setTransition(0), d.args[d.prop] = d.vertical ? "translate3d(0," + d.args[d.prop] + ",0)" : "translate3d(" + d.args[d.prop] + ",0,0)"), 
            d.container.css(d.args))), d.animating = !1, d.currentSlide = d.animatingTo, d.vars.after(d);
        }, d.animateSlides = function() {
            d.animating || d.flexAnimate(d.getTarget("next"));
        }, d.pause = function() {
            clearInterval(d.animatedSlides), d.vars.pausePlay && d.pausePlay.removeClass("pause").addClass("play").text(d.vars.playText);
        }, d.resume = function() {
            d.animatedSlides = setInterval(d.animateSlides, d.vars.slideshowSpeed), d.vars.pausePlay && d.pausePlay.removeClass("play").addClass("pause").text(d.vars.pauseText);
        }, d.canAdvance = function(a) {
            return !d.vars.animationLoop && d.atEnd ? 0 == d.currentSlide && a == d.count - 1 && "next" != d.direction ? !1 : d.currentSlide == d.count - 1 && 0 == a && "next" == d.direction ? !1 : !0 : !0;
        }, d.getTarget = function(a) {
            return d.direction = a, "next" == a ? d.currentSlide == d.count - 1 ? 0 : d.currentSlide + 1 : 0 == d.currentSlide ? d.count - 1 : d.currentSlide - 1;
        }, d.setTransition = function(a) {
            d.container.css({
                "-webkit-transition-duration": a / 1e3 + "s"
            });
        }, d.init();
    }, a.flexslider.defaults = {
        animation: "fade",
        slideDirection: "horizontal",
        slideshow: !0,
        slideshowSpeed: 7e3,
        animationDuration: 600,
        directionNav: !0,
        controlNav: !0,
        keyboardNav: !0,
        mousewheel: !1,
        prevText: "Previous",
        nextText: "Next",
        pausePlay: !1,
        pauseText: "Pause",
        playText: "Play",
        randomize: !1,
        slideToStart: 0,
        animationLoop: !0,
        pauseOnAction: !0,
        pauseOnHover: !1,
        controlsContainer: "",
        manualControls: "",
        start: function() {},
        before: function() {},
        after: function() {},
        end: function() {}
    }, a.fn.flexslider = function(b) {
        return this.each(function() {
            1 == a(this).find(".slides li").length ? a(this).find(".slides li").fadeIn(400) : 1 != a(this).data("flexslider") && new a.flexslider(a(this), b);
        });
    };
}(jQuery), imageCheckboxChecked = "checkboxChecked.gif", imageCheckboxUnchecked = "checkboxUnchecked.gif", 
imageRadioChecked = "radiobuttonChecked.gif", imageRadioUnchecked = "radiobuttonUnchecked.gif", 
imageSelectDropDownArrow = "selectDrop.gif", function(a) {
    var b = function(c, d) {
        var e = !1;
        try {
            if ("object" != typeof c || 1 !== c.nodeType) throw new Error("First argument should be a DOM element");
            var f, g, h, i = c.getAttribute("data-withinviewport-settings") && window.JSON ? JSON.parse(c.getAttribute("data-withinviewport-settings")) : {}, d = "string" == typeof d ? {
                sides: d
            } : d || {}, j = {
                sides: d.sides || i.sides || b.defaults.sides || "all",
                top: d.top || i.top || b.defaults.top || 0,
                right: d.right || i.right || b.defaults.right || 0,
                bottom: d.bottom || i.bottom || b.defaults.bottom || 0,
                left: d.left || i.left || b.defaults.left || 0
            }, k = {
                top: function() {
                    return m[1] >= l[1] + j.top;
                },
                right: function() {
                    var a = window.innerWidth || document.documentElement.clientWidth;
                    return m[0] + c.offsetWidth <= a + l[0] - j.right;
                },
                bottom: function() {
                    var a = window.innerHeight || document.documentElement.clientHeight;
                    return m[1] + c.offsetHeight <= a + l[1] - j.bottom;
                },
                left: function() {
                    return m[0] >= l[0] + j.left;
                },
                all: function() {
                    return k.top() && k.right() && k.bottom() && k.left();
                }
            }, l = function() {
                var b = a.body.scrollLeft, c = a.body.scrollTop;
                return 0 == c && (c = window.pageYOffset ? window.pageYOffset : a.body.parentElement ? a.body.parentElement.scrollTop : 0), 
                0 == b && (b = window.pageXOffset ? window.pageXOffset : a.body.parentElement ? a.body.parentElement.scrollLeft : 0), 
                [ b, c ];
            }(), m = function() {
                var a = c, b = 0, d = 0;
                if (a.offsetParent) for (b = a.offsetLeft, d = a.offsetTop; a = a.offsetParent; ) b += a.offsetLeft, 
                d += a.offsetTop;
                return [ b, d ];
            }();
            for (f = j.sides.split(" "), g = f.length; g--; ) if (h = f[g].toLowerCase(), /top|right|bottom|left|all/.test(h)) {
                if (!k[h]()) return !1;
                e = !0;
            }
            return e;
        } catch (n) {} finally {
            return e;
        }
    };
    b.prototype.defaults = {
        sides: "all",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    }, b.defaults = b.prototype.defaults, window.withinViewport = b;
    for (var c = [ "top", "right", "bottom", "left" ], d = c.length; d--; ) {
        var e = c[d];
        b.prototype[e] = function(a) {
            return b(a, e);
        }, b[e] = b.prototype[e];
    }
}(document), function(a) {
    a.fn.withinViewport = function(b) {
        "string" == typeof b && (b = {
            sides: b
        });
        var c = a.extend({}, b, {
            sides: "all"
        }), d = [];
        return this.each(function() {
            withinViewport(this, c) && d.push(this);
        }), a(d);
    }, a.extend(a.expr[":"], {
        "within-viewport": function(a) {
            return withinViewport(a, "all");
        }
    }), a.fn.withinViewportTop = function(b) {
        "string" == typeof b && (b = {
            sides: b
        });
        var c = a.extend({}, b, {
            sides: "top"
        }), d = [];
        return this.each(function() {
            withinViewport(this, c) && d.push(this);
        }), a(d);
    }, a.fn.withinViewportRight = function(b) {
        "string" == typeof b && (b = {
            sides: b
        });
        var c = a.extend({}, b, {
            sides: "right"
        }), d = [];
        return this.each(function() {
            withinViewport(this, c) && d.push(this);
        }), a(d);
    }, a.fn.withinViewportBottom = function(b) {
        "string" == typeof b && (b = {
            sides: b
        });
        var c = a.extend({}, b, {
            sides: "bottom"
        }), d = [];
        return this.each(function() {
            withinViewport(this, c) && d.push(this);
        }), a(d);
    }, a.fn.withinViewportLeft = function(b) {
        "string" == typeof b && (b = {
            sides: b
        });
        var c = a.extend({}, b, {
            sides: "left"
        }), d = [];
        return this.each(function() {
            withinViewport(this, c) && d.push(this);
        }), a(d);
    }, a.extend(a.expr[":"], {
        "within-viewport-top": function(a) {
            return withinViewport(a, "top");
        },
        "within-viewport-right": function(a) {
            return withinViewport(a, "right");
        },
        "within-viewport-bottom": function(a) {
            return withinViewport(a, "bottom");
        },
        "within-viewport-left": function(a) {
            return withinViewport(a, "left");
        }
    });
}(jQuery, window);

var twitterAPI = $("#twitter"), instagramAPI = $("#instagram"), rdioAPI = $("#rdio"), readmillAPI = $("#readmill"), twitterID = twitterAPI.prop("id"), instagramID = instagramAPI.prop("id"), rdioID = instagramAPI.prop("id"), readmillID = readmillAPI.prop("id");

$("#readmill").prepend('<div><p id="readmill-book">Currently Reading: Helvetica/ Objectified/ Urbanized: The Complete Interviews</p></div>'), 
LastFMStatus.init({
    username: "mrathee"
}), $(window).resize(function() {
    centerAPI();
}), centerAPI(), $(window).resize(function() {
    checkWidth();
}), checkWidth();

var navHook = $("#nav"), navMenu = $("#navigation"), body = $("body");

navHook.click(function(a) {
    a.preventDefault(), a.stopPropagation(), body.hasClass("nav") ? (body.removeClass("nav"), 
    trackEvent("global", "mobile menu", "closed")) : (body.addClass("nav"), trackEvent("global", "mobile menu", "opened"));
}), navMenu.click(function(a) {
    a.stopPropagation();
}), $(document).click(function() {
    body.hasClass("nav") && body.removeClass("nav");
});

var slider = $(".flexslider");

slider && $(".flexslider").flexslider();

var toTop = $("#top");

toTop.click(function(a) {
    a.preventDefault(), $("body,html").animate({
        scrollTop: 0
    }, 800), trackEvent("global", "back to top link", "page: " + location.pathname);
});

var countNumberValue, eventsFired = 0;

$(window).scroll(function() {
    var a = $("#about-data");
    withinViewport(a), $("#about-data").is(":within-viewport") && 0 == eventsFired && (startCount(), 
    eventsFired++, trackEvent("about", "element watcher", "stats-view"));
}), !function(a, b, c) {
    var d, e = a.getElementsByTagName(b)[0];
    a.getElementById(c) || (d = a.createElement(b), d.id = c, d.src = "//platform.twitter.com/widgets.js", 
    e.parentNode.insertBefore(d, e));
}(document, "script", "twitter-wjs");