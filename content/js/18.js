var player;
            jQuery(document).ready(function($){     
                var settings = {
                    instanceName:"radio1",
                    sourcePath:"",
                    cssUrl:"css/default.css",
                    activePlaylist:"#playlist1",
                    volume:0.75,
                    autoPlay:true,
                    useScroll:true,
                    scrollOrientation:"vertical",
                    scrollTheme:"minimal-dark",
                    cors: "https://plugstream.herokuapp.com/",
                    facebookAppId:"",
                    lastPlayedInterval:15000,
                    createRadioList:true,
                    createHistoryList:true,
                    getHistoryArtwork:true,
                    defaultHistoryArtwork: "https://i.postimg.cc/FsM19zdt/podcast.jpg",
                    getPlayerArtwork:true,
                    defaultPlayerArtwork: "https://i.postimg.cc/FsM19zdt/podcast.jpg"
                };               
                player = $("#mrp-wrapper").mrp(settings);
            });

var mrpjq = jQuery;
(function (d) {
    d.fn.mrp = function (b) {
        function Za(a) {
            if (n) {
                if (!U) {
                    if ("touchstart" == a.type) {
                        if (a = a.originalEvent.touches, !(a && 0 < a.length)) return !1
                    } else a.preventDefault();
                    U = !0;
                    P.on(J, function (a) {
                        a: {
                            if ("touchmove" == a.type) {
                                if (a.originalEvent.touches
                                    && a.originalEvent.touches.length) var c = a.originalEvent.touches;
                                else if (a.originalEvent.changedTouches && a.originalEvent.changedTouches.length) c = a.originalEvent.changedTouches;
                                else break a;
                                if (1 < c.length) break a;
                                c = c[0]
                            } else c = a;a.preventDefault();Ga(c)
                        }
                    }).on(V, function (a) {
                        a: if (U) {
                            U = !1;
                            P.off(J).off(V);
                            if ("touchend" == a.type) {
                                if (a.originalEvent.touches && a.originalEvent.touches.length) var c = a.originalEvent.touches;
                                else if (a.originalEvent.changedTouches && a.originalEvent.changedTouches.length) c = a.originalEvent.changedTouches;
                                else break a;
                                if (1 < c.length) break a;
                                c = c[0]
                            } else c = a;
                            a.preventDefault();
                            Ga(c)
                        }
                    })
                }
                return !1
            }
        }

        function E() {
            if (!n) return !1;
            0 < g ? (la = g, g = 0) : g = la;
            W()
        }

        function Ga(a) {
            F ? (g = Math.max(0, Math.min(1, (a.pageY - A.offset().top) / B)), g = 1 - g) : g = Math.max(0, Math.min(1, (a.pageX - A.offset().left) / B));
            W()
        }

        function W(a) {
            "undefined" !== typeof a && (g = a);
            h && (h.volume = g);
            a = F ? "height" : "width";
            MRPUtils.isNumber(B) || (B = F ? A.height() : A.width());
            $a.css(a, g * B + "px");
            0 == g ? (Q.find(".mrp-volume-icon").hide(), Q.find(".mrp-mute-icon").show()) : (Q.find(".mrp-volume-icon").show(),
                Q.find(".mrp-mute-icon").hide())
        }

        function Ha(a) {
            var c = F ? a.pageY - A.offset().top : a.pageX - A.offset().left;
            0 > c ? c = 0 : c > B && (c = B);
            c = Math.max(0, Math.min(1, c / B));
            if (!MRPUtils.isNumber(c)) return !1;
            F && (c = 1 - c);
            c = parseInt(100 * c, 10);
            t.text(c + " %");
            c = e[0].getBoundingClientRect();
            var f = y[0].getBoundingClientRect();
            if (F) {
                var m = parseInt(f.left - c.left - t.outerWidth() / 2 + y.outerWidth() / 2);
                a = parseInt(a.pageY - Ia.scrollTop() - c.top - t.outerHeight() - 10)
            } else m = parseInt(a.pageX - Ia.scrollLeft() - c.left - t.outerWidth() / 2), a = parseInt(f.top
                - c.top - t.outerHeight());
            0 > a + c.top && (a = parseInt(f.top - c.top + t.outerHeight() + 15));
            t.css({
                left: m + "px",
                top: a + "px"
            }).show()
        }

        function ab(a) {
            if (!n) return !1;
            a = d(a.currentTarget);
            if (a.hasClass("mrp-playback-toggle")) p.togglePlayback();
            else if (a.hasClass("mrp-volume-btn")) R && void 0 == a.attr("data-toggle-mute") || E();
            else if (a.hasClass("mrp-popup-toggle")) p.openPopup();
            else if (a.hasClass("mrp-share-item")) {
                a = a.attr("data-type").toLowerCase();
                var c = (window.screen.width - 600) / 2,
                    f = (window.screen.height - 300) / 2,
                    m = z
                    || "",
                    b = k.description || "",
                    e = Ja || "",
                    h = k.share || window.location.href,
                    g;
                MRPUtils.relativePath(e) || (e = MRPUtils.qualifyURL(e));
                "facebook" == a ? window.FB && FB.ui({
                    method: "share_open_graph",
                    action_type: "og.shares",
                    action_properties: JSON.stringify({
                        object: {
                            "og:url": h,
                            "og:title": m,
                            "og:description": b,
                            "og:image": e
                        }
                    })
                }) : "twitter" == a ? g = Ka + "//twitter.com/share?url=" + encodeURIComponent(h) + "&text=" + encodeURIComponent(m) : "tumblr" == a && (g = Ka + "//www.tumblr.com/share/link?url=" + encodeURIComponent(h) + "&amp;name=" + encodeURIComponent(m)
                    + "&amp;description=" + encodeURIComponent(b));
                g && window.open(g, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=600,height=300,left=" + c + ",top=" + f)
            }
        }

        function X(a) {
            if ("undefined" === typeof mCustomScrollbar)
                if (window.playlistScrollLoading) var c = setInterval(function () {
                    playlistScrollLoading || (clearInterval(c), X(a))
                }, 100);
                else {
                    window.playlistScrollLoading = !0;
                    var f = document.createElement("script");
                    f.type = "text/javascript";
                    f.src = MRPUtils.qualifyURL(ma + "https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.concat.min.js");
                    f.onload =
                        f.onreadystatechange = function () {
                            this.readyState && "complete" != this.readyState || (X(a), window.playlistScrollLoading = !1)
                        };
                    f.onerror = function () {
                        alert("Error loading " + this.src)
                    };
                    var m = document.getElementsByTagName("script")[0];
                    m.parentNode.insertBefore(f, m)
                }
            else a.mCustomScrollbar({
                axis: "horizontal" == bb ? "x" : "y",
                theme: b.scrollTheme,
                scrollInertia: 0,
                mouseWheel: {
                    normalizeDelta: !0,
                    deltaFactor: 50,
                    preventDefault: !0
                },
                keyboard: {
                    enable: !1
                },
                advanced: {
                    autoExpandHorizontalScroll: !0
                },
                callbacks: {
                    onOverflowYNone: function () {
                        a.find(".mCSB_container").addClass("mrp-mCSB_full")
                    },
                    onOverflowY: function () {
                        a.find(".mCSB_container").removeClass("mrp-mCSB_full")
                    }
                }
            })
        }

        function na(a) {
            S = !0;
            oa.show();
            pa && La();
            pa = a;
            k = cb(a);
            v = k.type;
            W(g);
            Ma ? (Ma = !1, setTimeout(function () {
                Na()
            }, 250)) : Na()
        }

        function qa() {
            var a = k.radio;
            ";" == a.substring(a.length - 1) && (a = a.substring(0, a.length - 1));
            window.radioDataXHR && window.radioDataXHR.abort();
            var c = new XMLHttpRequest;
            c.onerror = function (a) {};
            c.onreadystatechange = function () {
                if (4 === this.readyState)
                    if (200 === this.status) {
                        if (k.version && 1 == k.version) var a = c.responseText.split(","),
                            m = a[6];
                        else a = JSON.parse(c.responseText), m = a.songtitle;
                        G = a;
                        if (Y) z ? z != m && ra() : ra();
                        else {
                            var b = m.split("-");
                            a = d.trim(b[0]);
                            b = d.trim(b[1]);
                            q = [];
                            w = -1;
                            q.push({
                                artist: a,
                                title: b,
                                thumb: C
                            });
                            K = 1;
                            z ? z != m && (C ? D() : H()) : C ? D() : H()
                        }
                        z = m
                    } else L || (r && clearInterval(r), r = setInterval(function () {
                        qa()
                    }, Z))
            };
            k.version && 1 == k.version ? c.open("GET", M[x] + a + "7.html", !0) : c.open("GET", M[x] + a + "/stats?sid=1&json=1", !0);
            c.send();
            window.radioDataXHR = c
        }

        function ra() {
            q = [];
            w = -1;
            var a = k.radio;
            ";" == a.substring(a.length - 1) && (a = a.substring(0,
                a.length - 1));
            window.radioXHR && window.radioXHR.abort();
            var c = new XMLHttpRequest;
            c.onerror = function (a) {};
            c.onreadystatechange = function () {
                if (4 === this.readyState)
                    if (200 === this.status) {
                        var a = c.responseText,
                            b = a.indexOf("Song Title") + 12;
                        a = a.substr(b, a.length);
                        a = a.split("</td><td>");
                        a.shift();
                        var d;
                        K = a.length;
                        Oa && (K = 1);
                        for (d = 0; d < K; d++) {
                            b = a[d].indexOf("</");
                            a[d] = a[d].substr(0, b);
                            a[d] = a[d].replace(/<\/?[^>]+(>|$)/g, "");
                            var e = a[d].split(" - ");
                            b = e[0].trim();
                            e = e[1] ? e[1].trim() : "";
                            0 == d ? q.push({
                                artist: b,
                                title: e,
                                thumb: C
                            }) : q.push({
                                artist: b,
                                title: e,
                                thumb: sa
                            })
                        }
                        C || sa ? D() : H()
                    } else L || (r && clearInterval(r), r = setInterval(function () {
                        ra()
                    }, Z))
            };
            c.open("GET", M[x] + a + "played.html");
            c.send();
            window.radioXHR = c
        }

        function aa() {
            console.log("getIcecastData");
            var a = k.radio;
            ";" == a.substring(a.length - 1) && (a = a.substring(0, a.length - 1));
            window.radioXHR && window.radioXHR.abort();
            a = new XMLHttpRequest;
            a.onerror = function (a) {};
            a.onreadystatechange = function () {
                if (4 === this.readyState)
                    if (200 === this.status) {
                        if (-1 < this.responseText.indexOf('{"icestats":')) {
                            var a =
                                JSON.parse(this.responseText);
                            if (void 0 === a.icestats.source.length) var f = a.icestats.source;
                            else {
                                var b, e = a.icestats.source.length;
                                for (b = 0; b < e; b++)
                                    if (0 <= a.icestats.source[b].listenurl.indexOf(k.mountpoint)) {
                                        f = a.icestats.source[b];
                                        break
                                    }
                            }
                            G = f;
                            a = f.title
                        } else -1 < this.responseText.indexOf('class="streamdata"') ? -1 < this.responseText.indexOf("Mount Point /" + k.mountpoint) && (f = this.responseText.substr(this.responseText.indexOf("Mount Point /" + k.mountpoint)), f = f.substr(f.indexOf("Current Song:")), f = f.substr(f.indexOf('<td class="streamdata">')
                            + 23), f = f.substr(0, f.indexOf("</td>")), MRPUtils.isEmpty(f) || (a = f)) : -1 < this.responseText.indexOf('class="streamstats"') && -1 < this.responseText.indexOf("Mount Point /" + k.mountpoint) && (f = this.responseText.substr(this.responseText.indexOf("Mount Point /" + k.mountpoint)), f = f.substr(f.indexOf("Currently playing:")), f = f.substr(f.indexOf('<td class="streamstats">') + 24), f = f.substr(0, f.indexOf("</td>")), MRPUtils.isEmpty(f) || (a = f));
                        a ? (b = a.split("-"), f = d.trim(b[0]), b = d.trim(b[1]), q = [], w = -1, q.push({
                            artist: f,
                            title: b,
                            thumb: !0
                        }), K = 1, z ? z != a && (C ? D() : H()) : C ? D() : H(), z = a) : (ba({
                            artist: db,
                            title: eb,
                            thumb: ta
                        }), oa.hide())
                    } else 404 == this.status && "Not Found" == this.statusText ? (console.log(ua[ca] + " does not exist!"), ca++, ua[ca] && !L && (r && clearInterval(r), aa())) : L || (r && clearInterval(r), r = setInterval(function () {
                        aa()
                    }, Z))
            };
            a.open("GET", M[x] + k.radio + ua[ca], !0);
            a.send();
            window.radioXHR = a
        }

        function H() {
            oa.hide();
            x = 0;
            if ("shoutcast" == v)
                if (Oa) {
                    var a = q.shift();
                    ba(a);
                    Y && (0 == l.length ? l.push(a) : (l[0].artist == a.artist && l[0].title == a.title
                        && l[0].thumb == a.thumb || l.unshift(a), 10 < l.length && l.pop(), 1 < l.length && va(l.slice(1))))
                } else ba(q.shift()), Y && va(q);
            else "icecast" == v && (a = q.shift(), ba(a), Y && (0 == l.length ? l.push(a) : (l[0].artist == a.artist && l[0].title == a.title && l[0].thumb == a.thumb || l.unshift(a), 10 < l.length && l.pop(), 1 < l.length && va(l.slice(1)))));
            L = !0;
            S = !1;
            r && clearInterval(r);
            r = setInterval(function () {
                "shoutcast" == v ? qa() : "icecast" == v && aa()
            }, Z)
        }

        function D() {
            w++;
            if (w == K) H();
            else if (!sa && 0 < w) H();
            else if (q[w].thumb) {
                var a = q[w].artist,
                    c = q[w].title,
                    b, d = wa.length;
                for (b = 0; b < d; b++) a = a.replace(wa[b], ""), c = c.replace(wa[b], "");
                b = M[x] + "https://itunes.apple.com/search?type=jsonp&term==" + encodeURI(a) + " " + encodeURI(c) + "&media=music&limit=1";
                a = new XMLHttpRequest;
                a.onreadystatechange = function () {
                    if (4 === this.readyState)
                        if (200 === this.status) {
                            var a = JSON.parse(this.responseText);
                            a = a.resultCount ? a.results[0].artworkUrl100 : u;
                            q[w] && (q[w].thumb = a, D())
                        } else 403 === this.status && q[w] && (x++, x > M.length - 1 && (x = 0), D())
                };
                a.open("GET", b, !0);
                a.send();
                window.artworkDataXHR =
                    a
            } else D()
        }

        function va(a) {
            xa.empty();
            var c, b = a.length,
                e;
            for (c = 0; c < b; c++) {
                var g = a[c];
                var h = d('<div class="mrp-playlist-item"/>');
                if ((e = g.thumb || u) && !0 !== e) {
                    var k = new Image;
                    k.className = "mrp-playlist-thumb-img";
                    k.onload = function () {
                        this.className += " mrp-visible"
                    };
                    k.src = e;
                    d('<span class="mrp-playlist-thumb"></span>').append(k).appendTo(h)
                }
                e = d('<span class="mrp-playlist-info"></span>').appendTo(h);
                g = fb.replace("%title%", g.title).replace("%artist%", g.artist);
                d(g).appendTo(e);
                h.appendTo(xa)
            }
            Pa && !Qa && (Qa = !0, X(da))
        }

        function gb() {
            var a, c, b, e, g, h;
            ea.find(".mrp-playlist").each(function () {
                a = d(this);
                c = d('<div class="mrp-playlist-item"/>').on("click", function () {
                    if (S) return !1;
                    var a = d(this);
                    if (a.hasClass("mrp-playlist-item-active")) return !1;
                    fa && fa.removeClass("mrp-playlist-item-active");
                    fa = a.addClass("mrp-playlist-item-active");
                    setTimeout(function () {
                        ya.click()
                    }, 500);
                    na(a)
                });
                var f = a.attr("data-radio-thumb");
                if (f) {
                    var k = new Image;
                    k.className = "mrp-playlist-thumb-img";
                    k.onload = function () {
                        this.className += " mrp-visible"
                    };
                    k.src = f;
                    d('<span class="mrp-playlist-thumb"></span>').append(k).appendTo(c)
                }
                e = d('<span class="mrp-playlist-info"></span>').appendTo(c);
                b = a.attr("data-radio-title") || "";
                g = hb.replace("%title%", b);
                d(g).appendTo(e);
                h = a.prop("attributes");
                d.each(h, function () {
                    "id" != this.name && "class" != this.name && (c.attr(this.name, this.value), "data-mrp-playlist-item-active" == this.name && (fa = c.addClass("mrp-playlist-item-active").removeAttr("data-mrp-playlist-item-active")))
                });
                c.appendTo(ib)
            });
            Pa && !za && (za = !0, X(Aa))
        }

        function ba(a) {
            Ra.html(a.title);
            Sa.html(a.artist);
            if (!C)
                if (u) a.thumb = u;
                else return;
            var c = a.thumb;
            if (c && (Ja = c = c == u && ta ? ta : c.replace("100x100bb", b.playerArtworkSize), ha.hasClass("mrp-thumb-hidden") ? ha.css("background-image", "url(" + c + ")").removeClass("mrp-thumb-hidden") : (Ta.css("background-image", "url(" + c + ")").removeClass("mrp-thumb-hidden"), ha.addClass("mrp-thumb-hidden")), "mediaSession" in navigator)) {
                c = a.thumb != u ? a.thumb.replace("100x100bb", "96x96bb") : u;
                var d = a.thumb != u ? a.thumb.replace("100x100bb", "128x128bb") : u,
                    e = a.thumb != u ? a.thumb.replace("100x100bb",
                        "192x192bb") : u,
                    g = a.thumb != u ? a.thumb.replace("100x100bb", "256x256bb") : u,
                    h = a.thumb != u ? a.thumb.replace("100x100bb", "384x384bb") : u;
                navigator.mediaSession.metadata = new MediaMetadata({
                    title: a.title,
                    artist: a.artist,
                    artwork: [{
                        src: c,
                        sizes: "96x96",
                        type: "image/png"
                    }, {
                        src: d,
                        sizes: "128x128",
                        type: "image/png"
                    }, {
                        src: e,
                        sizes: "192x192",
                        type: "image/png"
                    }, {
                        src: g,
                        sizes: "256x256",
                        type: "image/png"
                    }, {
                        src: h,
                        sizes: "384x384",
                        type: "image/png"
                    }, {
                        src: h,
                        sizes: "512x512",
                        type: "image/png"
                    }]
                })
            }
        }

        function Na() {
            Ua || (T = d(document.createElement("audio")).attr("preload",
                jb), h = T[0], Ua = !0);
            Ba = k.radio;
            k.mountpoint && (Ba += k.mountpoint);
            h.src = Ba;
            T.on("ended", function () {}).on("canplay", function (a) {}).on("canplaythrough", function (a) {}).on("loadedmetadata", function () {
                k.playbackRate && (h.playbackRate = Number(k.playbackRate))
            }).on("play", function () {
                Ca || (Ca = !0, d(p).trigger("soundStart", {
                    instance: p,
                    instanceName: N,
                    radioData: G
                }));
                if (kb && 1 < mrp_mediaArr.length) {
                    var a, b = mrp_mediaArr.length;
                    for (a = 0; a < b; a++) p != mrp_mediaArr[a].inst && mrp_mediaArr[a].inst.pauseMedia()
                }
                I.find(".mrp-play-icon").hide();
                I.find(".mrp-pause-icon").show();
                O = !0;
                d(p).trigger("soundPlay", {
                    instance: p,
                    instanceName: N,
                    radioData: G
                })
            }).on("pause", function () {
                I.find(".mrp-play-icon").show();
                I.find(".mrp-pause-icon").hide();
                O = !1;
                d(p).trigger("soundPause", {
                    instance: p,
                    instanceName: N,
                    radioData: G
                })
            }).on("error", function (a) {
                console.log(a);
                d(p).trigger("soundError", {
                    instance: p,
                    instanceName: N,
                    error: a
                })
            });
            if (ia) {
                var a = h.play();
                void 0 !== a && a.then(function () {})["catch"](function (a) {})
            }
            h.volume = g;
            ia = !0;
            "shoutcast" == v ? qa() : "icecast" == v && aa()
        }

        function Va() {
            r && clearInterval(r);
            r = null;
            h && (h.pause(), h.src = "");
            T && T.off("ended canplay canplaythrough loadedmetadata pause play error");
            Ra.html("");
            Sa.html("");
            Ta.css("background-image", "none").addClass("mrp-thumb-hidden");
            ha.css("background-image", "none").addClass("mrp-thumb-hidden");
            v = G = null;
            Ca = O = !1;
            I.find(".mrp-play-icon").show();
            I.find(".mrp-pause-icon").hide()
        }

        function La() {
            window.radioXHR && (window.radioXHR.abort(), delete window.radioXHR);
            window.radioDataXHR && (window.radioDataXHR.abort(), delete window.radioDataXHR);
            window.artworkDataXHR && (window.artworkDataXHR.abort(), delete window.artworkDataXHR);
            v && Va();
            x = 0;
            xa.empty();
            L = null;
            l = []
        }

        function cb(a) {
            var c = {};
            void 0 != a.attr("data-type") && (c.type = a.attr("data-type"));
            void 0 != a.attr("data-radio-url") && (c.radio = a.attr("data-radio-url"), "icecast" == c.type && (c.mountpoint = c.radio.substr(c.radio.lastIndexOf("/") + 1), c.radio = c.radio.substr(0, c.radio.lastIndexOf("/") + 1)));
            void 0 != a.attr("data-version") && (c.version = a.attr("data-version"));
            return c
        }
        d(this).hasClass("mrp-fixed")
            && d(this).appendTo(d("body")).css("opacity", 1);
        var e = d(this),
            ib = e.find(".mrp-playlist-content"),
            Aa = e.find(".mrp-playlist-inner"),
            xa = e.find(".mrp-history-content"),
            da = e.find(".mrp-history-inner"),
            lb = e.find(".mrp-popup-toggle"),
            Ta = e.find(".mrp-player-thumb1"),
            ha = e.find(".mrp-player-thumb2"),
            Ra = e.find(".mrp-player-title"),
            Sa = e.find(".mrp-player-artist"),
            I = e.find(".mrp-playback-toggle"),
            oa = e.find(".mrp-preloader"),
            ya = e.find(".mrp-history-title").on("click", function () {
                if (!n || d(this).hasClass("mrp-title-active")) return !1;
                da.css({
                    transform: "translateX(0px)"
                });
                Aa.css({
                    transform: "translateX(0)"
                });
                ya.addClass("mrp-title-active");
                Wa.removeClass("mrp-title-active")
            }),
            Wa = e.find(".mrp-station-title").on("click", function () {
                if (!n || d(this).hasClass("mrp-title-active")) return !1;
                da.css({
                    transform: "translateX(-100%)"
                });
                Aa.css({
                    transform: "translateX(-100%)"
                });
                ya.removeClass("mrp-title-active");
                Wa.addClass("mrp-title-active")
            });
        b = d.extend(!0, {}, {
            playlistList: "#mrp-playlist-list",
            volume: .5,
            preload: "auto",
            togglePlaybackOnMultipleInstances: !0,
            useKeyboardNavigationForPlayback: !1,
            scrollOrientation: "vertical",
            scrollTheme: "minimal",
            cors: "https://plugstream.herokuapp.com/",
            getPlayerArtwork: !0,
            getHistoryArtwork: !1,
            createHistoryList: !0,
            playerArtworkSize: "256x256bb",
            instanceName: "player" + Math.floor(1E6 * Math.random()),
            historyTitleMarkup: '<span class="mrp-playlist-title">%title%</span><span class="mrp-playlist-artist">%artist%</span>',
            playlistTitleMarkup: '<span class="mrp-playlist-title">%title%</span>',
            defaultHistoryArtwork: "data/default_artwork/star_small.png",
            defaultPlayerArtwork: "data/default_artwork/star.png",
            defaultSongTitle: "DATA NOT AVAILABLE",
            defaultSongArtist: "DATA NOT AVAILABLE"
        }, b);
        var R = MRPUtils.isMobile();
        MRPUtils.hasLocalStorage();
        var ea = d(b.playlistList),
            ma = b.sourcePath,
            N = b.instanceName,
            ia = b.autoPlay,
            jb = b.preload,
            Pa = b.useScroll,
            bb = b.scrollOrientation,
            mb = b.useKeyboardNavigationForPlayback,
            Xa = b.facebookAppId,
            g = b.volume,
            M = b.cors.split(",").map(function (a) {
                return a.trim()
            }),
            kb = b.togglePlaybackOnMultipleInstances,
            C = b.getPlayerArtwork,
            ta = b.defaultPlayerArtwork,
            eb = b.defaultSongTitle,
            db = b.defaultSongArtist,
            sa = b.getHistoryArtwork,
            u = b.defaultHistoryArtwork,
            Y = b.createHistoryList,
            Oa = b.createHistoryListAsItPlays,
            fb = b.historyTitleMarkup,
            hb = b.playlistTitleMarkup,
            p = this;
        d("body");
        var Ia = d(window),
            P = d(document);
        MRPUtils.isIOS();
        MRPUtils.isAndroid();
        var nb = MRPUtils.isChrome(),
            ob = MRPUtils.isSafari(),
            Ka = "http:" == window.location.protocol ? "http:" : "https:",
            pb = MRPUtils.volumeCanBeSet(),
            Ua, T, h, G, L, z, Ja, Qa, za, l = [],
            q = [],
            w, K, r,
            Z = b.lastPlayedInterval,
            ua = ["/status-json.xsl", "/status.xsl"],
            ca = 0,
            Ca, v, Ba, O, k, pa, S = !0,
            fa, wa = ["feat.", "ft.", "Feat.", "Ft."],
            x = 0;
        "undefined" === typeof window.mrp_mediaArr && (window.mrp_mediaArr = []);
        window.mrp_mediaArr.push({
            inst: p,
            id: N
        });
        if (ia && !MRPUtils.iFrame && (nb || ob) && !R) {
            var qb = MRPUtils.qualifyURL(ma + "");
            MRPUtils.iFrame = d('<iframe src="' + qb + '" allow="autoplay" style="display:none"></iframe>').appendTo("body");
            var Ma = !0
        }
        R && (ia = !1);
        MRPUtils.isEmpty(Xa) || "file:" == window.location.protocol
            ? console.log("facebookAppId has not been set in settings!") : Fa(Xa);
        var t = e.find(".mrp-tooltip");
        R || ("static" == e.css("position") && console.log("wrapper css position is static, therefore tooltip might not work correctly. Please set wrapper css to other than static."), e.on("mouseenter", "[data-tooltip]", function (a) {
            var c = d(this);
            a = e[0].getBoundingClientRect();
            var b = c[0].getBoundingClientRect();
            t.text(c.attr("data-tooltip"));
            var g = parseInt(b.top - a.top - t.outerHeight());
            c = parseInt(b.left - a.left - t.outerWidth()
                / 2 + c.outerWidth() / 2);
            c + t.outerWidth() > e.width() ? c = e.width() - t.outerWidth() : 0 > c && (c = 0);
            0 > g + a.top && (g = parseInt(b.top - a.top + t.outerHeight() + 15));
            t.css({
                left: c + "px",
                top: g + "px"
            }).show()
        }).on("mouseleave", "[data-tooltip]", function (a) {
            t.hide()
        }));
        if ("ontouchstart" in window) {
            var Da = "touchstart.ap mousedown.ap";
            var J = "touchmove.ap mousemove.ap";
            var V = "touchend.ap mouseup.ap"
        } else window.PointerEvent ? (Da = "pointerdown.ap", J = "pointermove.ap", V = "pointerup.ap") : (Da = "mousedown.ap", J = "mousemove.ap", V = "mouseup.ap");
        var la = .5,
            U, Q = e.find(".mrp-volume-toggle"),
            y = e.find(".mrp-volume-seekbar"),
            A = e.find(".mrp-volume-bg"),
            $a = e.find(".mrp-volume-level"),
            F = void 0 != y.attr("data-is-vertical") ? !0 : !1,
            B = F ? A.height() : A.width();
        0 > g ? g = 0 : 1 < g && (g = 1);
        0 != g && (la = g);
        if (pb) y.on(Da, function (a) {
            Za(a);
            return !1
        });
        else Q.remove();
        if (!R) {
            var ja = function () {
                y.off(J, Ha).off("mouseout", ja);
                P.off("mouseout", ja);
                t.hide()
            };
            y.on("mouseover", function () {
                y.on(J, Ha).on("mouseout", ja);
                P.on("mouseout", ja)
            })
        }
        mb && P.keyup(function (a) {
            if (!n) return !1;
            var c =
                a.keyCode;
            d(a.target);
            32 == c ? (p.togglePlayback(), a.preventDefault()) : 77 == c && E()
        });
        var Ya = [e.find(".mrp-share-item"), lb, I, e.find(".mrp-volume-btn")],
            rb = Ya.length,
            ka;
        for (ka = 0; ka < rb; ka++) d(Ya[ka]).css("cursor", "pointer").on("click", ab);
        this.playMedia = function () {
            if (!n || !v || O) return !1;
            if (h) {
                h.load();
                var a = h.play();
                void 0 !== a && a.then(function () {})["catch"](function (a) {})
            }
        };
        this.pauseMedia = function () {
            if (!n || !v || !O) return !1;
            h && h.pause()
        };
        this.togglePlayback = function () {
            if (!n || !v) return !1;
            if (h)
                if (h.paused) {
                    h.load();
                    var a = h.play();
                    void 0 !== a && a.then(function () {})["catch"](function (a) {})
                } else h.pause()
        };
        this.destroyInstance = function () {
            window.radioXHR && (window.radioXHR.abort(), delete window.radioXHR);
            window.radioDataXHR && (window.radioDataXHR.abort(), delete window.radioDataXHR);
            window.artworkDataXHR && (window.artworkDataXHR.abort(), delete window.artworkDataXHR);
            y && y.off();
            Va();
            "undefined" !== typeof mCustomScrollbar && da.mCustomScrollbar("destroy");
            za = !1
        };
        this.destroyPlaylist = function () {
            if (!n) return !1;
            La()
        };
        this.loadPlaylist =
            function (a) {
                if (!n || S) return !1;
                if ("undefined" === typeof a || MRPUtils.isEmpty(a)) return alert("loadPlaylist method requires id parameter. loadPlaylist failed."), !1;
                if (pa == a) return !1;
                a = ea.find(d(a));
                if (0 == a.length) return alert("Failed playlist selection! Playlist - " + b.activePlaylist + " does not exist. Check activePlaylist option in settings!"), !1;
                na(a)
            };
        this.openPopup = function () {
            if (!n) return !1;
            if ("function" === typeof mrpOpenPopup) mrpOpenPopup(p, b);
            else {
                var a = document.createElement("script");
                a.type = "text/javascript";
                a.src = MRPUtils.qualifyURL(ma + "js/popup.js?35");
                a.onload = a.onreadystatechange = function () {
                    this.readyState && "complete" != this.readyState || mrpOpenPopup(p, b)
                };
                a.onerror = function () {
                    alert("Error loading " + this.src)
                };
                var c = document.getElementsByTagName("script")[0];
                c.parentNode.insertBefore(a, c)
            }
        };
        this.getRadioData = function () {
            return n ? G : !1
        };
        this.getPlaylistLoading = function () {
            return S
        };
        this.setPlaybackRate = function (a) {
            if (!n || !v) return !1;
            h && (h.playbackRate = Number(a))
        };
        this.setVolume = function (a) {
            if (!n) return !1;
            0 > a ? a = 0 : 1 < a && (a = 1);
            W(a)
        };
        this.getVolume = function () {
            return g
        };
        this.toggleMute = function () {
            if (!n) return !1;
            E()
        };
        this.getSetupDone = function () {
            return n
        };
        this.getMediaPlaying = function () {
            return n ? O : !1
        };
        this.getWrapper = function () {
            return e
        };
        this.getPlaylistList = function () {
            return ea
        };
        this.getSettings = function () {
            return b
        };
        var n = !0;
        d(p).trigger("setupDone", {
            instance: p,
            instanceName: N
        });
        if (b.activePlaylist) {
            var Ea = ea.find(d(b.activePlaylist));
            0 == Ea.length && alert("Failed playlist selection! Playlist - " + b.activePlaylist
                + " does not exist. Check activePlaylist option in settings!");
            Ea.attr("data-mrp-playlist-item-active", 1);
            na(Ea)
        }
        b.createRadioList && gb();
        return this
    }
})(jQuery);
(function (d) {
    var b = function () {};
    b.isEmpty = function (b) {
        return 0 == b.replace(/^\s+|\s+$/g, "").length
    };
    b.isNumber = function (b) {
        return !isNaN(parseFloat(b)) && isFinite(b)
    };
    b.isMobile = function () {
        return /Android|webOS|iPhone|iPad|iPod|sony|BlackBerry/i.test(navigator.userAgent)
    };
    b.isIE = function () {
        var b = -1;
        if ("Microsoft Internet Explorer" == navigator.appName) {
            var d = navigator.userAgent,
                E = /MSIE ([0-9]{1,}[.0-9]{0,})/;
            null != E.exec(d) && (b = parseFloat(RegExp.$1))
        } else "Netscape" == navigator.appName && (d = navigator.userAgent,
            E = /Trident\/.*rv:([0-9]{1,}[.0-9]{0,})/, null != E.exec(d) && (b = parseFloat(RegExp.$1)));
        return -1 != b ? !0 : !1
    };
    b.isIOS = function () {
        return navigator.userAgent.match(/(iPad|iPhone|iPod)/g)
    };
    b.isAndroid = function () {
        return -1 < navigator.userAgent.indexOf("Android")
    };
    b.qualifyURL = function (b) {
        var d = document.createElement("a");
        d.href = b;
        return d.href
    };
    b.relativePath = function (b) {
        return /^(?:[a-z]+:)?\/\//i.test(b)
    };
    b.hasLocalStorage = function () {
        try {
            return "localStorage" in d && null !== d.localStorage
        } catch (Fa) {
            return !1
        }
    };
    b.isChrome =
        function () {
            return !!d.chrome && (!!d.chrome.webstore || !!d.chrome.runtime)
        };
    b.isSafari = function () {
        return 0 < Object.prototype.toString.call(d.HTMLElement).indexOf("Constructor")
    };
    b.volumeCanBeSet = function () {
        var b = document.createElement("audio");
        if (!b) return !1;
        b.volume = 0;
        return 0 == b.volume ? !0 : !1
    };
    d.MRPUtils = b
})(window);