// Compiled by ClojureScript 0.0-2202
goog.provide('tailrecursion.hoplon.reload');
goog.require('cljs.core');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.hoplon');
goog.require('clojure.string');
goog.require('clojure.string');
tailrecursion.hoplon.reload.reload_BANG_ = (function reload_BANG_(sheet){var temp__4092__auto__ = sheet.href;if(cljs.core.truth_(temp__4092__auto__))
{var h = temp__4092__auto__;var k = "___tailrecursion_hoplon_reload___=";var q = [cljs.core.str(k),cljs.core.str((new Date()).getTime())].join('');return sheet.ownerNode.href = (((h.indexOf("?") < 0))?[cljs.core.str(h),cljs.core.str("?"),cljs.core.str(q)].join(''):(((h.indexOf(k) < 0))?[cljs.core.str(h),cljs.core.str("&"),cljs.core.str(q)].join(''):((new cljs.core.Keyword(null,"else","else",1017020587))?clojure.string.replace.call(null,h,cljs.core.re_pattern.call(null,[cljs.core.str(k),cljs.core.str("\\d+")].join('')),q):null)));
} else
{return null;
}
});
/**
* Returns an atom whose value reflects the last modified time of the resource
* at the given `url`. The last modified time is obtained by polling the server
* with the given `interval` (in msec) with `HEAD` requests. If the response does
* not contain the special `X-Dev-Mode` header with the value `true` polling is
* then disabled.
*/
tailrecursion.hoplon.reload.file_modified_atom = (function file_modified_atom(url,interval){var last_mod = cljs.core.atom.call(null,null);var xhr_opts = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",1014020321),url,new cljs.core.Keyword(null,"type","type",1017479852),"HEAD",new cljs.core.Keyword(null,"dataType","dataType",2802975094),"text"], null);var xhr_dev_QMARK_ = ((function (last_mod,xhr_opts){
return (function (p1__204159_SHARP_){return cljs.core._EQ_.call(null,"true",p1__204159_SHARP_.getResponseHeader("X-Dev-Mode"));
});})(last_mod,xhr_opts))
;var do_ajax = ((function (last_mod,xhr_opts,xhr_dev_QMARK_){
return (function (p1__204160_SHARP_,p2__204161_SHARP_){return jQuery.ajax(cljs.core.clj__GT_js.call(null,cljs.core.assoc.call(null,p1__204160_SHARP_,new cljs.core.Keyword(null,"success","success",3441701749),p2__204161_SHARP_)));
});})(last_mod,xhr_opts,xhr_dev_QMARK_))
;var xhr_mod = ((function (last_mod,xhr_opts,xhr_dev_QMARK_,do_ajax){
return (function (p1__204162_SHARP_){return Date.parse(p1__204162_SHARP_.getResponseHeader("Last-Modified"));
});})(last_mod,xhr_opts,xhr_dev_QMARK_,do_ajax))
;((function (last_mod,xhr_opts,xhr_dev_QMARK_,do_ajax,xhr_mod){
return (function() { 
var do_poll__delegate = function (p__204166){var vec__204168 = p__204166;var _ = cljs.core.nth.call(null,vec__204168,0,null);var ___$1 = cljs.core.nth.call(null,vec__204168,1,null);var xhr = cljs.core.nth.call(null,vec__204168,2,null);if(cljs.core.truth_(xhr))
{cljs.core.reset_BANG_.call(null,last_mod,xhr_mod.call(null,xhr));
} else
{}
if((cljs.core.not.call(null,xhr)) || (xhr_dev_QMARK_.call(null,xhr)))
{return setTimeout(((function (vec__204168,_,___$1,xhr,last_mod,xhr_opts,xhr_dev_QMARK_,do_ajax,xhr_mod){
return (function (){return do_ajax.call(null,xhr_opts,do_poll);
});})(vec__204168,_,___$1,xhr,last_mod,xhr_opts,xhr_dev_QMARK_,do_ajax,xhr_mod))
,interval);
} else
{return null;
}
};
var do_poll = function (var_args){
var p__204166 = null;if (arguments.length > 0) {
  p__204166 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return do_poll__delegate.call(this,p__204166);};
do_poll.cljs$lang$maxFixedArity = 0;
do_poll.cljs$lang$applyTo = (function (arglist__204169){
var p__204166 = cljs.core.seq(arglist__204169);
return do_poll__delegate(p__204166);
});
do_poll.cljs$core$IFn$_invoke$arity$variadic = do_poll__delegate;
return do_poll;
})()
;})(last_mod,xhr_opts,xhr_dev_QMARK_,do_ajax,xhr_mod))
.call(null);
return last_mod;
});
/**
* Runs the given `callback` whenever the last modified time of the resource at
* the given `url` changes, polling with the given `interval` in milliseconds.
*/
tailrecursion.hoplon.reload.on_modified = (function on_modified(url,interval,callback){return cljs.core.add_watch.call(null,tailrecursion.hoplon.reload.file_modified_atom.call(null,url,(function (){var or__201496__auto__ = interval;if(cljs.core.truth_(or__201496__auto__))
{return or__201496__auto__;
} else
{return 100;
}
})()),null,(function (p1__204172_SHARP_,p2__204173_SHARP_,p3__204170_SHARP_,p4__204171_SHARP_){if(cljs.core.truth_((function (){var and__201484__auto__ = p3__204170_SHARP_;if(cljs.core.truth_(and__201484__auto__))
{return cljs.core.not_EQ_.call(null,p3__204170_SHARP_,p4__204171_SHARP_);
} else
{return and__201484__auto__;
}
})()))
{return callback.call(null);
} else
{return null;
}
}));
});
/**
* Reloads the page whenever the `main.js` file is modified. The optional
* `interval` argument specifies how often to poll the server for changes, in
* milliseconds.
* @param {...*} var_args
*/
tailrecursion.hoplon.reload.reload_js = (function() { 
var reload_js__delegate = function (p__204174){var vec__204176 = p__204174;var interval = cljs.core.nth.call(null,vec__204176,0,null);return tailrecursion.hoplon.reload.on_modified.call(null,"main.js",interval,((function (vec__204176,interval){
return (function (){return window.location.reload();
});})(vec__204176,interval))
);
};
var reload_js = function (var_args){
var p__204174 = null;if (arguments.length > 0) {
  p__204174 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return reload_js__delegate.call(this,p__204174);};
reload_js.cljs$lang$maxFixedArity = 0;
reload_js.cljs$lang$applyTo = (function (arglist__204177){
var p__204174 = cljs.core.seq(arglist__204177);
return reload_js__delegate(p__204174);
});
reload_js.cljs$core$IFn$_invoke$arity$variadic = reload_js__delegate;
return reload_js;
})()
;
/**
* Reloads CSS stylesheets whenever they are modified. The page itself is not
* reloaded, just the stylesheets. The optional `interval` argument specifies
* how often to poll the server for changes, in milliseconds.
* @param {...*} var_args
*/
tailrecursion.hoplon.reload.reload_css = (function() { 
var reload_css__delegate = function (p__204179){var vec__204197 = p__204179;var interval = cljs.core.nth.call(null,vec__204197,0,null);return ((function (vec__204197,interval){
return (function wait_css(){var css = document.styleSheets;var each = cljs.core.range.call(null,0,css.length);var css_seq = cljs.core.keep.call(null,((function (css,each,vec__204197,interval){
return (function (p1__204178_SHARP_){return p1__204178_SHARP_.href;
});})(css,each,vec__204197,interval))
,(function (){var iter__202213__auto__ = ((function (css,each,vec__204197,interval){
return (function iter__204206(s__204207){return (new cljs.core.LazySeq(null,((function (css,each,vec__204197,interval){
return (function (){var s__204207__$1 = s__204207;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__204207__$1);if(temp__4092__auto__)
{var s__204207__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__204207__$2))
{var c__202211__auto__ = cljs.core.chunk_first.call(null,s__204207__$2);var size__202212__auto__ = cljs.core.count.call(null,c__202211__auto__);var b__204209 = cljs.core.chunk_buffer.call(null,size__202212__auto__);if((function (){var i__204208 = 0;while(true){
if((i__204208 < size__202212__auto__))
{var s = cljs.core._nth.call(null,c__202211__auto__,i__204208);cljs.core.chunk_append.call(null,b__204209,(css[s]));
{
var G__204214 = (i__204208 + 1);
i__204208 = G__204214;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__204209),iter__204206.call(null,cljs.core.chunk_rest.call(null,s__204207__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__204209),null);
}
} else
{var s = cljs.core.first.call(null,s__204207__$2);return cljs.core.cons.call(null,(css[s]),iter__204206.call(null,cljs.core.rest.call(null,s__204207__$2)));
}
} else
{return null;
}
break;
}
});})(css,each,vec__204197,interval))
,null,null));
});})(css,each,vec__204197,interval))
;return iter__202213__auto__.call(null,each);
})());if(cljs.core.not.call(null,cljs.core.seq.call(null,css_seq)))
{return setTimeout(wait_css,(function (){var or__201496__auto__ = interval;if(cljs.core.truth_(or__201496__auto__))
{return or__201496__auto__;
} else
{return 100;
}
})());
} else
{var seq__204210 = cljs.core.seq.call(null,cljs.core.range.call(null,0,css.length));var chunk__204211 = null;var count__204212 = 0;var i__204213 = 0;while(true){
if((i__204213 < count__204212))
{var s = cljs.core._nth.call(null,chunk__204211,i__204213);var temp__4092__auto___204215 = (css[s]);if(cljs.core.truth_(temp__4092__auto___204215))
{var sheet_204216 = temp__4092__auto___204215;var temp__4092__auto___204217__$1 = sheet_204216.href;if(cljs.core.truth_(temp__4092__auto___204217__$1))
{var href_204218 = temp__4092__auto___204217__$1;tailrecursion.hoplon.reload.on_modified.call(null,href_204218,interval,((function (seq__204210,chunk__204211,count__204212,i__204213,href_204218,temp__4092__auto___204217__$1,sheet_204216,temp__4092__auto___204215,s,css,each,css_seq,vec__204197,interval){
return (function (){return tailrecursion.hoplon.reload.reload_BANG_.call(null,(css[s]));
});})(seq__204210,chunk__204211,count__204212,i__204213,href_204218,temp__4092__auto___204217__$1,sheet_204216,temp__4092__auto___204215,s,css,each,css_seq,vec__204197,interval))
);
} else
{}
} else
{}
{
var G__204219 = seq__204210;
var G__204220 = chunk__204211;
var G__204221 = count__204212;
var G__204222 = (i__204213 + 1);
seq__204210 = G__204219;
chunk__204211 = G__204220;
count__204212 = G__204221;
i__204213 = G__204222;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__204210);if(temp__4092__auto__)
{var seq__204210__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__204210__$1))
{var c__202244__auto__ = cljs.core.chunk_first.call(null,seq__204210__$1);{
var G__204223 = cljs.core.chunk_rest.call(null,seq__204210__$1);
var G__204224 = c__202244__auto__;
var G__204225 = cljs.core.count.call(null,c__202244__auto__);
var G__204226 = 0;
seq__204210 = G__204223;
chunk__204211 = G__204224;
count__204212 = G__204225;
i__204213 = G__204226;
continue;
}
} else
{var s = cljs.core.first.call(null,seq__204210__$1);var temp__4092__auto___204227__$1 = (css[s]);if(cljs.core.truth_(temp__4092__auto___204227__$1))
{var sheet_204228 = temp__4092__auto___204227__$1;var temp__4092__auto___204229__$2 = sheet_204228.href;if(cljs.core.truth_(temp__4092__auto___204229__$2))
{var href_204230 = temp__4092__auto___204229__$2;tailrecursion.hoplon.reload.on_modified.call(null,href_204230,interval,((function (seq__204210,chunk__204211,count__204212,i__204213,href_204230,temp__4092__auto___204229__$2,sheet_204228,temp__4092__auto___204227__$1,s,seq__204210__$1,temp__4092__auto__,css,each,css_seq,vec__204197,interval){
return (function (){return tailrecursion.hoplon.reload.reload_BANG_.call(null,(css[s]));
});})(seq__204210,chunk__204211,count__204212,i__204213,href_204230,temp__4092__auto___204229__$2,sheet_204228,temp__4092__auto___204227__$1,s,seq__204210__$1,temp__4092__auto__,css,each,css_seq,vec__204197,interval))
);
} else
{}
} else
{}
{
var G__204231 = cljs.core.next.call(null,seq__204210__$1);
var G__204232 = null;
var G__204233 = 0;
var G__204234 = 0;
seq__204210 = G__204231;
chunk__204211 = G__204232;
count__204212 = G__204233;
i__204213 = G__204234;
continue;
}
}
} else
{return null;
}
}
break;
}
}
});})(vec__204197,interval))
.call(null);
};
var reload_css = function (var_args){
var p__204179 = null;if (arguments.length > 0) {
  p__204179 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return reload_css__delegate.call(this,p__204179);};
reload_css.cljs$lang$maxFixedArity = 0;
reload_css.cljs$lang$applyTo = (function (arglist__204235){
var p__204179 = cljs.core.seq(arglist__204235);
return reload_css__delegate(p__204179);
});
reload_css.cljs$core$IFn$_invoke$arity$variadic = reload_css__delegate;
return reload_css;
})()
;
/**
* Reload the page when `main.js` is modified, and CSS stylesheets as needed.
* The optional `interval` argument specifies how often to poll the server for
* changes, in milliseconds.
* @param {...*} var_args
*/
tailrecursion.hoplon.reload.reload_all = (function() { 
var reload_all__delegate = function (p__204236){var vec__204238 = p__204236;var interval = cljs.core.nth.call(null,vec__204238,0,null);tailrecursion.hoplon.reload.reload_js.call(null,interval);
return tailrecursion.hoplon.reload.reload_css.call(null,interval);
};
var reload_all = function (var_args){
var p__204236 = null;if (arguments.length > 0) {
  p__204236 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return reload_all__delegate.call(this,p__204236);};
reload_all.cljs$lang$maxFixedArity = 0;
reload_all.cljs$lang$applyTo = (function (arglist__204239){
var p__204236 = cljs.core.seq(arglist__204239);
return reload_all__delegate(p__204236);
});
reload_all.cljs$core$IFn$_invoke$arity$variadic = reload_all__delegate;
return reload_all;
})()
;
