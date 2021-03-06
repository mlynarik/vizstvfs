function getParameterByName(n, t) {
	t = t.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	var r = new RegExp("[\\?&]" + t + "=([^&#]*)"),
	i = r.exec(n);
	return i === null ? "" : decodeURIComponent(i[1].replace(/\+/g, " "))
}
function getMessageHtml(n, t) {
	var i,
	r;
	return n == "error" ? (i = errorIcon, r = '<h1 style="margin: 0; width: 90%; font-size: 20px; font-weight: bold; -overflow: auto; -overflow:scroll; font-family: Tahoma,Arial,Verdana; font-weight: 200; color: #ef5b3f;">Error!<\/h1><span style="font-family: Tahoma,Arial,Verdana; font-size: 12px; overflow: auto; color: #757575;">' + t + "<\/span>") : (i = successIcon, r = '<h1 style="margin: 0; width: 90%; font-size: 20px; font-weight: bold; -overflow: auto; -overflow:scroll; font-family: Tahoma,Arial,Verdana; font-weight: 200; color: #8dc643; display: inline-block; margin-top: 0px;">Done!<\/h1><span style="font-family: Tahoma,Arial,Verdana; font-size: 12px; overflow: auto; color: #757575;">' + t + "<\/span>"),
	'<div style="border: 1px solid #cacaca; background-color: #fff; Max-width:260px; Min-width:80px; height:auto; margin:0; -overflow: auto; padding: 12px 0px 12px 5px; border-radius: 4px; -moz-border-radius: 4px; float: right; box-shadow: 2px 2px 2px rgba(0,0,0,0.4);"><table style="border:0px; width:100%;"><tbody><tr><td align="left" valign="center"><div style="width: 25px; height: 25px; vertical-align: center; margin-left: 10px;">' + i + '<\/div><\/td><td style="padding-left: 12px; Min-width: 135px;" align="left" valign="top">' + r + '<\/td><td align="right" valign="top"><div id="close" style="width: 6px; height: 6px; vertical-align: top; margin-right: 5px; cursor: pointer; margin-top: -3px;">' + closeIcon + "<\/div><\/td><\/tr><\/tbody><\/table><\/div>"
}
var md5 = function () {
	function e(f, e) {
		var o = f[0],
		s = f[1],
		h = f[2],
		c = f[3];
		o = n(o, s, h, c, e[0], 7, -680876936);
		c = n(c, o, s, h, e[1], 12, -389564586);
		h = n(h, c, o, s, e[2], 17, 606105819);
		s = n(s, h, c, o, e[3], 22, -1044525330);
		o = n(o, s, h, c, e[4], 7, -176418897);
		c = n(c, o, s, h, e[5], 12, 1200080426);
		h = n(h, c, o, s, e[6], 17, -1473231341);
		s = n(s, h, c, o, e[7], 22, -45705983);
		o = n(o, s, h, c, e[8], 7, 1770035416);
		c = n(c, o, s, h, e[9], 12, -1958414417);
		h = n(h, c, o, s, e[10], 17, -42063);
		s = n(s, h, c, o, e[11], 22, -1990404162);
		o = n(o, s, h, c, e[12], 7, 1804603682);
		c = n(c, o, s, h, e[13], 12, -40341101);
		h = n(h, c, o, s, e[14], 17, -1502002290);
		s = n(s, h, c, o, e[15], 22, 1236535329);
		o = t(o, s, h, c, e[1], 5, -165796510);
		c = t(c, o, s, h, e[6], 9, -1069501632);
		h = t(h, c, o, s, e[11], 14, 643717713);
		s = t(s, h, c, o, e[0], 20, -373897302);
		o = t(o, s, h, c, e[5], 5, -701558691);
		c = t(c, o, s, h, e[10], 9, 38016083);
		h = t(h, c, o, s, e[15], 14, -660478335);
		s = t(s, h, c, o, e[4], 20, -405537848);
		o = t(o, s, h, c, e[9], 5, 568446438);
		c = t(c, o, s, h, e[14], 9, -1019803690);
		h = t(h, c, o, s, e[3], 14, -187363961);
		s = t(s, h, c, o, e[8], 20, 1163531501);
		o = t(o, s, h, c, e[13], 5, -1444681467);
		c = t(c, o, s, h, e[2], 9, -51403784);
		h = t(h, c, o, s, e[7], 14, 1735328473);
		s = t(s, h, c, o, e[12], 20, -1926607734);
		o = i(o, s, h, c, e[5], 4, -378558);
		c = i(c, o, s, h, e[8], 11, -2022574463);
		h = i(h, c, o, s, e[11], 16, 1839030562);
		s = i(s, h, c, o, e[14], 23, -35309556);
		o = i(o, s, h, c, e[1], 4, -1530992060);
		c = i(c, o, s, h, e[4], 11, 1272893353);
		h = i(h, c, o, s, e[7], 16, -155497632);
		s = i(s, h, c, o, e[10], 23, -1094730640);
		o = i(o, s, h, c, e[13], 4, 681279174);
		c = i(c, o, s, h, e[0], 11, -358537222);
		h = i(h, c, o, s, e[3], 16, -722521979);
		s = i(s, h, c, o, e[6], 23, 76029189);
		o = i(o, s, h, c, e[9], 4, -640364487);
		c = i(c, o, s, h, e[12], 11, -421815835);
		h = i(h, c, o, s, e[15], 16, 530742520);
		s = i(s, h, c, o, e[2], 23, -995338651);
		o = r(o, s, h, c, e[0], 6, -198630844);
		c = r(c, o, s, h, e[7], 10, 1126891415);
		h = r(h, c, o, s, e[14], 15, -1416354905);
		s = r(s, h, c, o, e[5], 21, -57434055);
		o = r(o, s, h, c, e[12], 6, 1700485571);
		c = r(c, o, s, h, e[3], 10, -1894986606);
		h = r(h, c, o, s, e[10], 15, -1051523);
		s = r(s, h, c, o, e[1], 21, -2054922799);
		o = r(o, s, h, c, e[8], 6, 1873313359);
		c = r(c, o, s, h, e[15], 10, -30611744);
		h = r(h, c, o, s, e[6], 15, -1560198380);
		s = r(s, h, c, o, e[13], 21, 1309151649);
		o = r(o, s, h, c, e[4], 6, -145523070);
		c = r(c, o, s, h, e[11], 10, -1120210379);
		h = r(h, c, o, s, e[2], 15, 718787259);
		s = r(s, h, c, o, e[9], 21, -343485551);
		f[0] = u(o, f[0]);
		f[1] = u(s, f[1]);
		f[2] = u(h, f[2]);
		f[3] = u(c, f[3])
	}
	function f(n, t, i, r, f, e) {
		return t = u(u(t, n), u(r, e)),
		u(t << f | t >>> 32 - f, i)
	}
	function n(n, t, i, r, u, e, o) {
		return f(t & i | ~t & r, n, t, u, e, o)
	}
	function t(n, t, i, r, u, e, o) {
		return f(t & r | i & ~r, n, t, u, e, o)
	}
	function i(n, t, i, r, u, e, o) {
		return f(t ^ i ^ r, n, t, u, e, o)
	}
	function r(n, t, i, r, u, e, o) {
		return f(i ^ (t | ~r), n, t, u, e, o)
	}
	function s(n) {
		for (var u = n.length, r = [1732584193, -271733879, -1732584194, 271733878], i, t = 64; t <= n.length; t += 64)
			e(r, h(n.substring(t - 64, t)));
		for (n = n.substring(t - 64), i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], t = 0; t < n.length; t++)
			i[t >> 2] |= n.charCodeAt(t) << (t % 4 << 3);
		if (i[t >> 2] |= 128 << (t % 4 << 3), t > 55)
			for (e(r, i), t = 0; t < 16; t++)
				i[t] = 0;
		return i[14] = u * 8,
		e(r, i),
		r
	}
	function h(n) {
		for (var i = [], t = 0; t < 64; t += 4)
			i[t >> 2] = n.charCodeAt(t) + (n.charCodeAt(t + 1) << 8) + (n.charCodeAt(t + 2) << 16) + (n.charCodeAt(t + 3) << 24);
		return i
	}
	function c(n) {
		for (var i = "", t = 0; t < 4; t++)
			i += o[n >> t * 8 + 4 & 15] + o[n >> t * 8 & 15];
		return i
	}
	function l(n) {
		for (var t = 0; t < n.length; t++)
			n[t] = c(n[t]);
		return n.join("")
	}
	function a(n) {
		return l(s(unescape(encodeURIComponent(n))))
	}
	function u(n, t) {
		return n + t & 4294967295
	}
	var o = "0123456789abcdef".split("");
	return a
}
(), appJQ = jQuery.noConflict(!0), vizStvMessageId = "viz_stv_message", detect_button = function (n) {
	function p(n) {
		if (typeof n.data == "object" && n.data.stv != null && n.data.stv.to == "remote") {
			var t = n.data.stv.message;
			switch (t.functiontoInvoke) {
			case "getPost":
				h(t.callbackFunc, t.data.dhUri);
				break;
			case "showSuccessMessage":
				vt(t.data.message);
				break;
			case "showErrorMessage":
				e(t.data.message)
			}
		}
	}
	function o(n) {
		postMessage({
			stv: {
				to: "local",
				message: n
			}
		}, window.location)
	}
	function w() {
		var n = c(null),
		t = n != null;
		o({
			functiontoInvoke: "enableMenu",
			state: t
		})
	}
	function s(n) {
		n = n || window.event;
		button = n.which == null ? n.button < 2 ? "left" : n.button == 4 ? "middle" : "right" : n.which < 2 ? "left" : n.which == 2 ? "middle" : "right";
		button == "right" && (r = n, w())
	}
	function b(n, t, u) {
		if (n == null) {
			e("Cannot find the post, possible reason - unknown source.");
			return
		}
		console.dir(n);
		var f = at(n, u, t);
		o({
			functiontoInvoke: t,
			post: f,
			id: i
		});
		r = null
	}
	function c(n) {
		if (r == null)
			return t(n, null);
		switch (location.host) {
		case "twitter.com":
		case "www.twitter.com":
			return rt(r, n);
		case "facebook.com":
		case "www.facebook.com":
			return ot(r, n);
		case "instagram.com":
		case "www.instagram.com":
			return k(r, n)
		}
		return t(n, null)
	}
	function t(n, t) {
		if (typeof n == "function")
			n(t);
		else
			return t
	}
	function k(t, i) {
		var r = n(t.target),
		u = n("article").length;
		return u == 1 ? window._sharedData.entry_data.PostPage != null ? d(r, i) : g(r, i) : u == 2 ? nt(r, i) : u > 2 ? tt(r, i) : null
	}
	function d(n, i) {
		var r = null,
		u = "old";
		try {
			r = window._sharedData.entry_data.PostPage[0].media;
			r == null && (r = window._sharedData.entry_data.PostPage[0].graphql.shortcode_media, u = "graphql")
		} catch (f) {
			return r
		}
		return t(i, l(r, u))
	}
	function g(n, i) {
		var r = n.closest("a");
		if (r.length <= 0 || r.attr("href").length <= 0)
			return t(i, null);
		if (typeof i != "function")
			return {};
		f(r.attr("href"), i)
	}
	function nt(n, t) {
		return f(window.location.pathname, t), {}
	}
	function tt(i, r) {
		var u = null,
		e = i.closest("article").find("header a");
		if (e.length <= 0 || (e.each(function () {
					var t = n(this).attr("href");
					t.indexOf("/p/") >= 0 && (u = t)
				}), u == null))
			return t(r, null);
		if (typeof r != "function")
			return {};
		f(u, r)
	}
	function f(i, r) {
		var u = n('<iframe id="social_tv_frame" src="' + i + '"/>');
		n("#social_tv_frame").length > 0 && n("#social_tv_frame").remove();
		u.on("load", function () {
			var i = null,
			u = "old";
			try {
				i = n("#social_tv_frame")[0].contentWindow._sharedData.entry_data.PostPage[0].media;
				i == null && (i = n("#social_tv_frame")[0].contentWindow._sharedData.entry_data.PostPage[0].graphql.shortcode_media, u = "graphql")
			} catch (f) {
				console.log("Error: some problem happen with iframe...")
			}
			return n("#social_tv_frame").remove(),
			t(r, l(i, u))
		});
		n(document.body).append(u)
	}
	function l(n, t) {
		var r = {},
		u,
		f,
		e;
		return n != null && (r.id = n.id + "_" + n.owner.id, i = md5(r.id), r.author = {
				name: n.owner.full_name == null ? "" : n.owner.full_name
			}, r.contributor = {
				name: "Instagram"
			}, r.title = t === "graphql" ? it(n) : n.caption, r.summary = "", r.thumbnail = n.owner.profile_pic_url == null ? "" : n.owner.profile_pic_url, u = [], f = [], n.is_video ? t === "graphql" ? (u.push({
					src: n.display_url
				}), f.push({
					src: n.video_url
				})) : (u.push({
					src: n.display_src
				}), f.push({
					src: n.video_url
				})) : t === "graphql" ? u.push({
				src: n.display_url
			}) : u.push({
				src: n.display_src
			}), r.preview = {
				images: u,
				videos: f
			}, e = new Date((t === "graphql" ? n.taken_at_timestamp : n.date) * 1e3), r.published = e.toISOString()),
		r
	}
	function it(n) {
		var t = "";
		return n.edge_media_to_caption != null && n.edge_media_to_caption.edges.length > 0 && n.edge_media_to_caption.edges.forEach(function (n) {
			t += n.node.text
		}),
		t
	}
	function rt(r, u) {
		var f = {},
		e = n(r.target),
		c,
		h,
		l,
		s,
		o,
		a,
		v,
		y;
		if (e = e.closest("[data-item-id]"), e.length <= 0) {
			try {
				c = n(r.target).parents()[n(r.target).parents().length - 1];
				h = n(c).find("meta[name=tweet_id]").attr("content");
				h == null && (h = n(c).find("#playerContainer").data().config.tweet_id);
				e = n(document).find('[data-tweet-id="' + h + '"]')
			} catch (p) {
				e = null
			}
			if (e == null)
				return t(u, null)
		}
		return f.id = e.attr("data-item-id"),
		i = md5(f.id),
		f.title = ut(e.find(".tweet-text")),
		f.summary = "",
		f.author = {
			name: e.find(".fullname").text() + " " + e.find(".account-group .username").text(),
			fullname: e.find(".fullname").text(),
			username: e.find(".account-group .username").text()
		},
		f.contributor = {
			name: "Twitter"
		},
		f.thumbnail = e.find(".avatar").attr("src").replace("_bigger.jpg", ".jpg"),
		f.preview = {
			images: [],
			videos: [],
			links: []
		},
		l = e.find(".AdaptiveMedia").find("img"),
		s = e.find("video"),
		l.length > 0 && f.preview.images.push({
			src: n(l).attr("src")
		}),
		o = "",
		s.length > 0 ? (f.preview.images.push({
				src: n(s).attr("poster")
			}), o = n(s).attr("src") == null ? n(s).find(':not([video-src=""])').length > 0 ? n(s).find(':not([video-src=""])').attr("video-src") : n(s).find(':not([src=""])').attr("src") : n(s).attr("src"), f.preview.videos.push({
				src: o
			})) : (o = ft(e), typeof o == "object" ? (f.preview.videos.push({
					src: o[0].src
				}), f.preview.images.pop(), f.preview.images.push({
					src: o[1].src
				})) : o == null || o.length <= 0 ? (a = e.find("iframe"), f.preview.links.push({
					src: a.contents().find("a").attr("href")
				}), f.preview.images.push({
					src: a.contents().find("img").attr("src")
				})) : f.preview.videos.push({
				src: o
			})),
		v = n(e.find(".js-short-timestamp")).attr("data-time-ms"),
		y = new Date(parseInt(v)),
		f.published = y.toISOString(),
		t(u, f)
	}
	function ut(t) {
		var i = n(t).clone();
		return n(i).find("img").each(function () {
			n(this).after(n(this).attr("alt")).remove()
		}),
		n(i).find("a.u-hidden, .invisible").remove(),
		n(i).text()
	}
	function ft(n) {
		var o = n.find("iframe"),
		r,
		u,
		t,
		s,
		f,
		i,
		e,
		h,
		c;
		if (o.length > 0)
			if (r = o.contents(), u = r.find("#playerContainer"), u.length > 0) {
				if (t = u.data(), t.config != null)
					return t.sourceType != "vine" ? (s = u.find("video").attr("src"), [{
								src: s
							}, {
								src: t.config.image_src
							}
						]) : [{
							src: t.config.player_url
						}, {
							src: t.config.image_src
						}
					]
			} else if (f = r.find("iframe"), f.length > 0 && f.data() != null)
				return (i = f.data().src, i.indexOf(".youtube.com/") >= 0) ? (e = i, h = r.contents().find("img"), i.indexOf("/embed/") < 0 && (c = getParameterByName(i, "v"), e = "https://www.youtube.com/embed/" + c + "?autoplay=1"), [{
							src: e
						}, {
							src: h.attr("src")
						}
					]) : i;
		return ""
	}
	function et(t) {
		var i = n(t.target).closest('[role="article"]');
		return (i.length > 0) ? i.find('[role="article"]').length > 1 ? !1 : (n(t.target).closest(".commentable_item").length > 0) ? i.find(".UFICommentActorName").length > 0 : !1 : !1
	}
	function ot(r, u) {
		var o = {},
		f = n(r.target),
		c,
		p,
		l,
		d,
		g,
		e,
		ut,
		w,
		tt,
		a,
		v,
		b,
		it,
		rt,
		nt;
		if (f.length <= 0)
			return console.log("FB parser error: cannot find post root..."), t(u, null);
		f = n(f).closest("[aria-labelledby]");
		f.length == 0 && (f = n(r.target).closest(".userContentWrapper"));
		var k = null,
		s = null,
		h = n(f).attr("aria-labelledby"),
		y = n(f).attr("aria-describedby");
		if (k = ht(f), k == null)
			return console.log("Post id not found"), t(u, null);
		if (et(r))
			return o = st(k, n(r.target).closest('[role="article"]')), t(u, o);
		if (o.contributor = {
				name: "Facebook"
			}, h != null && h.length > 0 || y != null && y.length > 0)
			h = h.split(" "), y = y.split(" "), c = n("#" + h[1]), (c == null || c.length <= 0) && (c = n("#" + h[0])), l = n(c.find(".fwb a")).text(), d = n(c.find("a")[0]).data(), s = getParameterByName(d.hovercard, "id"), o.author = {
				name: l,
				uri: s
			},
		e = n("#" + h[3]),
		(e == null || e.length <= 0) && (e = n("#" + y[1])),
		e = e.clone(),
		e.find('[role="button"]').remove(),
		e.find(".text_exposed_link").length > 0 && (console.log("Post has long text, so title may not be fully taken!!!"), e.find(".text_exposed_link").remove()),
		o.title = e.text();
		else {
			if (console.log("aria-labelledby attribute not found, trying alternate method to get author and title"), p = f.find(".fwb a"), l = null, p != null && p.length > 0 && (l = n(p).text(), d = n(p[0]).data(), s = getParameterByName(d.hovercard, "id")), g = f.find("._5pbx"), e = null, g != null && g.length > 0 && (e = n(g).clone(), e.find('[role="button"]').remove(), e.find(".text_exposed_link").length > 0 && (console.log("Post has long text, so title may not be fully taken!!!"), e.find(".text_exposed_link").remove())), s == null || s === "")
				return console.log("Post not found: " + l), t(u, null);
			o.author = {
				name: l,
				uri: s
			};
			e != null && (o.title = e.text())
		}
		return o.id = s + "_" + k,
		i = md5(o.id),
		ut = n(f.find("[data-utime]")).attr("data-utime"),
		a = new Date(parseInt(ut + "000")),
		o.published = a.toISOString(),
		o.summary = f.find(".mtm").text(),
		o.thumbnail = "https://graph.facebook.com/" + o.author.uri + "/picture?type=large",
		w = [],
		f.find("embed").length > 0 && (w = ct(f.find("embed").parent().html())),
		f.find("video").length > 0 && (o.summary = ""),
		tt = [],
		f.find(".mtm div").first().data() != null && (a = f.find(".mtm div").first().data(), a.ft != null && a.ft.tn != null && a.ft.tn == "H" && (v = null, f.find(".mtm a").length == 1 && n(f.find(".mtm a")[0]).attr("href") != null ? v = n(f.find(".mtm a")[0]).attr("href") : f.find(".mtm a").length > 1 && n(f.find(".mtm a")[1]).attr("href") != null && (v = n(f.find(".mtm a")[1]).attr("href")), v != null && v.startsWith("http") && tt.push({
					src: v
				}))),
		b = [],
		w != null && w.length > 0 && (it = f.find("video").parent().find("img"), it.length > 0 && (rt = lt(it), rt.length > 0 && b.push({
					src: rt
				}))),
		b.length <= 0 && (nt = f.find('.mtm img[class^="scaledImage"]'), nt.length <= 0 && (nt = f.find(".mtm img")), nt.each(function (t, i) {
				b.push({
					src: n(i).attr("src")
				})
			})),
		o.preview = {
			images: b,
			videos: w,
			links: tt
		},
		t(u, o)
	}
	function st(t, r) {
		var u = {},
		e = "",
		o = null,
		c,
		f,
		l,
		a,
		s,
		h,
		v;
		return u.contributor = {
			name: "Facebook"
		},
		o = r.find(".uiLinkSubtle").attr("href"),
		o = getParameterByName(o, "comment_id"),
		c = r.find(".UFICommentActorName").text(),
		f = r.find(".UFIActorImage").parent(),
		f != null && f.data() != null && f.data().hovercard != null && (f = f.data().hovercard, e = getParameterByName(f, "id")),
		u.author = {
			name: c,
			uri: e
		},
		u.id = t + "_" + o,
		i = md5(u.id),
		u.title = r.find(".UFICommentBody").text(),
		l = n(r.find("[data-utime]")).attr("data-utime"),
		a = new Date(parseInt(l + "000")),
		u.published = a.toISOString(),
		u.summary = "",
		u.thumbnail = null,
		u.thumbnail = e.length > 0 ? "https://graph.facebook.com/" + e + "/picture?type=large" : r.find(".UFIActorImage").attr("src"),
		s = [],
		h = r.find(".UFICommentContent img"),
		h.length > 0 && s.push({
			src: h.attr("src")
		}),
		v = [],
		u.preview = {
			images: s,
			videos: v
		},
		u
	}
	function ht(t) {
		return n(t).data() != null && n(t).data().ft != null && n(t).data().ft.top_level_post_id != null ? a(n(t).attr("data-ft"), "top_level_post_id") : n(t.parent()).data() != null && n(t.parent()).data().bt != null && n(t.parent()).data().bt.id != null ? (t = t.parent(), a(n(t).attr("data-bt"), "id")) : n(t).find('[name="ft_ent_identifier"]').length > 0 ? n(t).find('[name="ft_ent_identifier"]').attr("value") : null
	}
	function ct(n) {
		var r = 'flashvars="params=',
		u = n.indexOf(r) + r.length,
		i,
		t;
		if (n = n.substr(u, n.length), n = n.split("&amp;")[0], n = unescape(n), i = JSON.parse(n), i.video_data != null && i.video_data.progressive != null) {
			if (t = i.video_data.progressive.length > 0 ? i.video_data.progressive[0] : i.video_data.progressive, t.hd_src != null && t.hd_src.length > 0)
				return [{
						src: t.hd_src
					}
				];
			if (t.sd_src != null && t.sd_src.length > 0)
				return [{
						src: t.sd_src
					}
				]
		}
		return null
	}
	function lt(n) {
		for (var i = n.attr("style").split(";"), t = 0; t <= i.length; t++)
			if (i[t].startsWith("background-image"))
				return i[t].replace("background-image:", "").replace("url", "").replace("(", "").replace(")", "");
		return ""
	}
	function a(n, t) {
		for (var r = n.split(/[{}:,"]+/), i = 0; i < n.length; i++)
			if (r[i] == t)
				return r[i + 1];
		return null
	}
	function at(n, t, r) {
		r == "copyPost" && (i = "CLP" + i);
		var f = '<entry xmlns="http://www.w3.org/2005/Atom"><id>' + i + '<\/id><title type="text">' + u(n.title) + '<\/title><summary type="text">' + u(n.summary) + "<\/summary><published>" + n.published + "<\/published><author><name>" + u(n.author.name) + "<\/name>" + (n.author.uri != undefined ? "<uri>" + n.author.uri + "<\/uri>" : "") + "<\/author><contributor><name>" + n.contributor.name + '<\/name><\/contributor><link rel="via" type="id" href="' + n.id + '" /><category term="Message" /><thumbnail url="' + u(n.thumbnail) + '" cache="' + md5(n.thumbnail) + '" xmlns="http://search.yahoo.com/mrss/"><\/thumbnail>';
		return n.preview.images.length > 0 && n.preview.images[0].src != null && n.preview.images[0].src.length > 0 && (f += '<link rel="enclosure" type="image/jpeg" href="' + u(n.preview.images[0].src) + '" cache="' + i + "\\" + md5(n.preview.images[0].src) + '" />'),
		n.preview.videos.length > 0 && n.preview.videos[0].src != null && n.preview.videos[0].src.length > 0 && (f += '<link rel="enclosure" type="video/*" href="' + u(n.preview.videos[0].src) + '" cache="' + i + "\\" + md5(n.preview.videos[0].src) + '" />'),
		n.preview.links != null && n.preview.links.length > 0 && n.preview.links[0].src != null && n.preview.links[0].src.length > 0 && (f += '<link rel="enclosure" type="text/html" href="' + u(n.preview.links[0].src) + '" />'),
		f + ('<link rel="up" type="application/atom+xml;type=feed" href="' + t + '/directory/id/SYS_APPROVED/feed" /><link rel="up" type="application/atom+xml;type=feed" href="' + t + '/directory/id/MediaDownload/feed" /><rights type="text">delete:users,modify:users<\/rights><\/entry>')
	}
	function u(n) {
		return n == null || n == undefined ? "" : n.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
	}
	function e(n) {
		v("error", n)
	}
	function vt(n) {
		v("success", n)
	}
	function v(t, i) {
		var i = getMessageHtml(t, i);
		n("#" + vizStvMessageId).remove();
		n('<iframe id="' + vizStvMessageId + '" seamless="seamless" scrolling="no" style="display:none; border: none; overflow:hidden; z-index:9999999999999; position:fixed; top:0px; right:0px; width:260px; height:110px;">').appendTo("body").contents().find("body").append(i);
		n(document.body).find("#" + vizStvMessageId).contents().find("#close").on("click", function () {
			y()
		});
		n("#" + vizStvMessageId).show(500);
		t != "error" && setTimeout(function () {
			y()
		}, 5e3)
	}
	function y() {
		n("#" + vizStvMessageId).hide(250, function () {
			n("#" + vizStvMessageId).remove()
		})
	}
	var i = 0,
	r = null,
	h;
	return window.addEventListener("message", p, !1),
	document.onmousedown = s,
	document.captureEvents && document.captureEvents(Event.MOUSEDOWN),
	h = function (n, t) {
		if (r == undefined || r.target == undefined) {
			e("Sorry, there is nothing to add...");
			return
		}
		c(function (i) {
			b(i, n, t)
		})
	},
	s
}
(appJQ), closeIcon = '<svg x="0px" y="0px" viewBox="0 0 6 6" style="enable-background:new 0 0 6 6;" xml:space="preserve"><g><path class="st0" d="M4,3l1.9-1.9C6,0.9,6,0.7,5.9,0.5L5.5,0.1C5.3,0,5.1,0,4.9,0.1L3,2L1.1,0.1C0.9,0,0.7,0,0.5,0.1L0.1,0.5 C0,0.7,0,0.9,0.1,1.1L2,3L0.1,4.9C0,5.1,0,5.3,0.1,5.5l0.4,0.4C0.7,6,0.9,6,1.1,5.9L3,4l1.9,1.9C5.1,6,5.3,6,5.5,5.9l0.4-0.4 C6,5.3,6,5.1,5.9,4.9L4,3z" fill="#919191"><\/path><\/g><\/svg>', errorIcon = '<svg x="0px" y="0px" viewBox="0 0 25 25" style="enable-background:new 0 0 25 25;" xml:space="preserve"><g><path class="st0" d="M12.5,0C5.6,0,0,5.6,0,12.5S5.6,25,12.5,25S25,19.4,25,12.5S19.4,0,12.5,0z M13.8,18.8h-2.5v-2.5h2.5V18.8z M13.8,13.8h-2.5V6.3h2.5V13.8z" fill="#ef5b3f"><\/path><\/g><\/svg>', successIcon = '<svg x="0px" y="0px" viewBox="0 0 25 25" style="enable-background:new 0 0 25 25;" xml:space="preserve"><g><path class="st0" d="M12.5,25c-1.2,0-2.3-0.1-3.3-0.4c-1.1-0.3-2.1-0.7-3-1.3c-0.9-0.5-1.8-1.2-2.5-2c-0.8-0.8-1.4-1.6-1.9-2.5 c-0.5-0.9-1-1.9-1.3-3C0.1,14.8,0,13.7,0,12.5s0.1-2.3,0.4-3.3s0.7-2.1,1.3-3s1.2-1.8,2-2.5s1.6-1.4,2.5-1.9s1.9-1,3-1.3 S11.3,0,12.5,0c1.7,0,3.3,0.3,4.9,1c1.5,0.7,2.9,1.5,4,2.7c1.1,1.1,2,2.5,2.7,4s1,3.1,1,4.9c0,1.2-0.1,2.3-0.4,3.3 c-0.3,1.1-0.7,2.1-1.3,3c-0.5,0.9-1.2,1.8-2,2.5c-0.8,0.8-1.6,1.4-2.5,2c-0.9,0.5-1.9,1-3,1.3C14.8,24.9,13.7,25,12.5,25z M20.2,9 l-2-2c-0.1-0.1-0.2-0.1-0.3-0.1c-0.1,0-0.2,0-0.3,0.1l-7.9,7.8l-2.4-2.4c-0.2-0.1-0.4-0.1-0.6,0l-2,2c-0.1,0.1-0.1,0.2-0.1,0.3 c0,0.1,0,0.2,0.1,0.3l4.7,4.7c0.1,0.1,0.2,0.1,0.3,0.1h0c0.1,0,0.2,0,0.3-0.1L20.2,9.5c0.1-0.1,0.1-0.2,0.1-0.3 C20.3,9.1,20.3,9,20.2,9z" fill="#65cb00"><\/path><\/g><\/svg>';
if (location.host == "twitter.com" || location.host == "www.twitter.com") {
	function updateFrames() {
		$("[id^=xdm_], [id^=player_tweet_]").each(function (n, t) {
			var i = $(t).attr("id");
			document.getElementById(i).contentDocument.removeEventListener("mousedown", detect_button);
			document.getElementById(i).contentDocument.addEventListener("mousedown", detect_button, !1)
		})
	}
	$(document).on("scroll", function () {
		updateFrames()
	});
	$(document).ready(function () {
		updateFrames()
	})
}
