// Compiled by ClojureScript 0.0-2156
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
return (function (p1__14406_SHARP_){return cljs.core._EQ_.call(null,"true",p1__14406_SHARP_.getResponseHeader("X-Dev-Mode"));
});})(last_mod,xhr_opts))
;var do_ajax = ((function (last_mod,xhr_opts,xhr_dev_QMARK_){
return (function (p1__14407_SHARP_,p2__14408_SHARP_){return jQuery.ajax(cljs.core.clj__GT_js.call(null,cljs.core.assoc.call(null,p1__14407_SHARP_,new cljs.core.Keyword(null,"success","success",3441701749),p2__14408_SHARP_)));
});})(last_mod,xhr_opts,xhr_dev_QMARK_))
;var xhr_mod = ((function (last_mod,xhr_opts,xhr_dev_QMARK_,do_ajax){
return (function (p1__14409_SHARP_){return Date.parse(p1__14409_SHARP_.getResponseHeader("Last-Modified"));
});})(last_mod,xhr_opts,xhr_dev_QMARK_,do_ajax))
;(function() { 
var do_poll__delegate = function (p__14413){var vec__14415 = p__14413;var _ = cljs.core.nth.call(null,vec__14415,0,null);var ___$1 = cljs.core.nth.call(null,vec__14415,1,null);var xhr = cljs.core.nth.call(null,vec__14415,2,null);if(cljs.core.truth_(xhr))
{cljs.core.reset_BANG_.call(null,last_mod,xhr_mod.call(null,xhr));
} else
{}
if((cljs.core.not.call(null,xhr)) || (xhr_dev_QMARK_.call(null,xhr)))
{return setTimeout((function (){return do_ajax.call(null,xhr_opts,do_poll);
}),interval);
} else
{return null;
}
};
var do_poll = function (var_args){
var p__14413 = null;if (arguments.length > 0) {
  p__14413 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return do_poll__delegate.call(this,p__14413);};
do_poll.cljs$lang$maxFixedArity = 0;
do_poll.cljs$lang$applyTo = (function (arglist__14416){
var p__14413 = cljs.core.seq(arglist__14416);
return do_poll__delegate(p__14413);
});
do_poll.cljs$core$IFn$_invoke$arity$variadic = do_poll__delegate;
return do_poll;
})()
.call(null);
return last_mod;
});
/**
* Runs the given `callback` whenever the last modified time of the resource at
* the given `url` changes, polling with the given `interval` in milliseconds.
*/
tailrecursion.hoplon.reload.on_modified = (function on_modified(url,interval,callback){return cljs.core.add_watch.call(null,tailrecursion.hoplon.reload.file_modified_atom.call(null,url,(function (){var or__9778__auto__ = interval;if(cljs.core.truth_(or__9778__auto__))
{return or__9778__auto__;
} else
{return 100;
}
})()),null,(function (p1__14419_SHARP_,p2__14420_SHARP_,p3__14417_SHARP_,p4__14418_SHARP_){if(cljs.core.truth_((function (){var and__9766__auto__ = p3__14417_SHARP_;if(cljs.core.truth_(and__9766__auto__))
{return cljs.core.not_EQ_.call(null,p3__14417_SHARP_,p4__14418_SHARP_);
} else
{return and__9766__auto__;
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
var reload_js__delegate = function (p__14421){var vec__14423 = p__14421;var interval = cljs.core.nth.call(null,vec__14423,0,null);return tailrecursion.hoplon.reload.on_modified.call(null,"main.js",interval,(function (){return window.location.reload();
}));
};
var reload_js = function (var_args){
var p__14421 = null;if (arguments.length > 0) {
  p__14421 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return reload_js__delegate.call(this,p__14421);};
reload_js.cljs$lang$maxFixedArity = 0;
reload_js.cljs$lang$applyTo = (function (arglist__14424){
var p__14421 = cljs.core.seq(arglist__14424);
return reload_js__delegate(p__14421);
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
var reload_css__delegate = function (p__14426){var vec__14444 = p__14426;var interval = cljs.core.nth.call(null,vec__14444,0,null);return (function wait_css(){var css = document.styleSheets;var each = cljs.core.range.call(null,0,css.length);var css_seq = cljs.core.keep.call(null,((function (css,each){
return (function (p1__14425_SHARP_){return p1__14425_SHARP_.href;
});})(css,each))
,(function (){var iter__10495__auto__ = ((function (css,each){
return (function iter__14453(s__14454){return (new cljs.core.LazySeq(null,((function (css,each){
return (function (){var s__14454__$1 = s__14454;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__14454__$1);if(temp__4092__auto__)
{var s__14454__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14454__$2))
{var c__10493__auto__ = cljs.core.chunk_first.call(null,s__14454__$2);var size__10494__auto__ = cljs.core.count.call(null,c__10493__auto__);var b__14456 = cljs.core.chunk_buffer.call(null,size__10494__auto__);if((function (){var i__14455 = 0;while(true){
if((i__14455 < size__10494__auto__))
{var s = cljs.core._nth.call(null,c__10493__auto__,i__14455);cljs.core.chunk_append.call(null,b__14456,(css[s]));
{
var G__14461 = (i__14455 + 1);
i__14455 = G__14461;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14456),iter__14453.call(null,cljs.core.chunk_rest.call(null,s__14454__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14456),null);
}
} else
{var s = cljs.core.first.call(null,s__14454__$2);return cljs.core.cons.call(null,(css[s]),iter__14453.call(null,cljs.core.rest.call(null,s__14454__$2)));
}
} else
{return null;
}
break;
}
});})(css,each))
,null,null));
});})(css,each))
;return iter__10495__auto__.call(null,each);
})());if(cljs.core.not.call(null,cljs.core.seq.call(null,css_seq)))
{return setTimeout(wait_css,(function (){var or__9778__auto__ = interval;if(cljs.core.truth_(or__9778__auto__))
{return or__9778__auto__;
} else
{return 100;
}
})());
} else
{var seq__14457 = cljs.core.seq.call(null,cljs.core.range.call(null,0,css.length));var chunk__14458 = null;var count__14459 = 0;var i__14460 = 0;while(true){
if((i__14460 < count__14459))
{var s = cljs.core._nth.call(null,chunk__14458,i__14460);var temp__4092__auto___14462 = (css[s]);if(cljs.core.truth_(temp__4092__auto___14462))
{var sheet_14463 = temp__4092__auto___14462;var temp__4092__auto___14464__$1 = sheet_14463.href;if(cljs.core.truth_(temp__4092__auto___14464__$1))
{var href_14465 = temp__4092__auto___14464__$1;tailrecursion.hoplon.reload.on_modified.call(null,href_14465,interval,((function (seq__14457,chunk__14458,count__14459,i__14460,href_14465,temp__4092__auto___14464__$1,sheet_14463,temp__4092__auto___14462,s){
return (function (){return tailrecursion.hoplon.reload.reload_BANG_.call(null,(css[s]));
});})(seq__14457,chunk__14458,count__14459,i__14460,href_14465,temp__4092__auto___14464__$1,sheet_14463,temp__4092__auto___14462,s))
);
} else
{}
} else
{}
{
var G__14466 = seq__14457;
var G__14467 = chunk__14458;
var G__14468 = count__14459;
var G__14469 = (i__14460 + 1);
seq__14457 = G__14466;
chunk__14458 = G__14467;
count__14459 = G__14468;
i__14460 = G__14469;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__14457);if(temp__4092__auto__)
{var seq__14457__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14457__$1))
{var c__10526__auto__ = cljs.core.chunk_first.call(null,seq__14457__$1);{
var G__14470 = cljs.core.chunk_rest.call(null,seq__14457__$1);
var G__14471 = c__10526__auto__;
var G__14472 = cljs.core.count.call(null,c__10526__auto__);
var G__14473 = 0;
seq__14457 = G__14470;
chunk__14458 = G__14471;
count__14459 = G__14472;
i__14460 = G__14473;
continue;
}
} else
{var s = cljs.core.first.call(null,seq__14457__$1);var temp__4092__auto___14474__$1 = (css[s]);if(cljs.core.truth_(temp__4092__auto___14474__$1))
{var sheet_14475 = temp__4092__auto___14474__$1;var temp__4092__auto___14476__$2 = sheet_14475.href;if(cljs.core.truth_(temp__4092__auto___14476__$2))
{var href_14477 = temp__4092__auto___14476__$2;tailrecursion.hoplon.reload.on_modified.call(null,href_14477,interval,((function (seq__14457,chunk__14458,count__14459,i__14460,href_14477,temp__4092__auto___14476__$2,sheet_14475,temp__4092__auto___14474__$1,s,seq__14457__$1,temp__4092__auto__){
return (function (){return tailrecursion.hoplon.reload.reload_BANG_.call(null,(css[s]));
});})(seq__14457,chunk__14458,count__14459,i__14460,href_14477,temp__4092__auto___14476__$2,sheet_14475,temp__4092__auto___14474__$1,s,seq__14457__$1,temp__4092__auto__))
);
} else
{}
} else
{}
{
var G__14478 = cljs.core.next.call(null,seq__14457__$1);
var G__14479 = null;
var G__14480 = 0;
var G__14481 = 0;
seq__14457 = G__14478;
chunk__14458 = G__14479;
count__14459 = G__14480;
i__14460 = G__14481;
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
}).call(null);
};
var reload_css = function (var_args){
var p__14426 = null;if (arguments.length > 0) {
  p__14426 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return reload_css__delegate.call(this,p__14426);};
reload_css.cljs$lang$maxFixedArity = 0;
reload_css.cljs$lang$applyTo = (function (arglist__14482){
var p__14426 = cljs.core.seq(arglist__14482);
return reload_css__delegate(p__14426);
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
var reload_all__delegate = function (p__14483){var vec__14485 = p__14483;var interval = cljs.core.nth.call(null,vec__14485,0,null);tailrecursion.hoplon.reload.reload_js.call(null,interval);
return tailrecursion.hoplon.reload.reload_css.call(null,interval);
};
var reload_all = function (var_args){
var p__14483 = null;if (arguments.length > 0) {
  p__14483 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return reload_all__delegate.call(this,p__14483);};
reload_all.cljs$lang$maxFixedArity = 0;
reload_all.cljs$lang$applyTo = (function (arglist__14486){
var p__14483 = cljs.core.seq(arglist__14486);
return reload_all__delegate(p__14483);
});
reload_all.cljs$core$IFn$_invoke$arity$variadic = reload_all__delegate;
return reload_all;
})()
;
