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
return (function (p1__14266_SHARP_){return cljs.core._EQ_.call(null,"true",p1__14266_SHARP_.getResponseHeader("X-Dev-Mode"));
});})(last_mod,xhr_opts))
;var do_ajax = ((function (last_mod,xhr_opts,xhr_dev_QMARK_){
return (function (p1__14267_SHARP_,p2__14268_SHARP_){return jQuery.ajax(cljs.core.clj__GT_js.call(null,cljs.core.assoc.call(null,p1__14267_SHARP_,new cljs.core.Keyword(null,"success","success",3441701749),p2__14268_SHARP_)));
});})(last_mod,xhr_opts,xhr_dev_QMARK_))
;var xhr_mod = ((function (last_mod,xhr_opts,xhr_dev_QMARK_,do_ajax){
return (function (p1__14269_SHARP_){return Date.parse(p1__14269_SHARP_.getResponseHeader("Last-Modified"));
});})(last_mod,xhr_opts,xhr_dev_QMARK_,do_ajax))
;(function() { 
var do_poll__delegate = function (p__14273){var vec__14275 = p__14273;var _ = cljs.core.nth.call(null,vec__14275,0,null);var ___$1 = cljs.core.nth.call(null,vec__14275,1,null);var xhr = cljs.core.nth.call(null,vec__14275,2,null);if(cljs.core.truth_(xhr))
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
var p__14273 = null;if (arguments.length > 0) {
  p__14273 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return do_poll__delegate.call(this,p__14273);};
do_poll.cljs$lang$maxFixedArity = 0;
do_poll.cljs$lang$applyTo = (function (arglist__14276){
var p__14273 = cljs.core.seq(arglist__14276);
return do_poll__delegate(p__14273);
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
tailrecursion.hoplon.reload.on_modified = (function on_modified(url,interval,callback){return cljs.core.add_watch.call(null,tailrecursion.hoplon.reload.file_modified_atom.call(null,url,(function (){var or__9585__auto__ = interval;if(cljs.core.truth_(or__9585__auto__))
{return or__9585__auto__;
} else
{return 100;
}
})()),null,(function (p1__14279_SHARP_,p2__14280_SHARP_,p3__14277_SHARP_,p4__14278_SHARP_){if(cljs.core.truth_((function (){var and__9573__auto__ = p3__14277_SHARP_;if(cljs.core.truth_(and__9573__auto__))
{return cljs.core.not_EQ_.call(null,p3__14277_SHARP_,p4__14278_SHARP_);
} else
{return and__9573__auto__;
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
var reload_js__delegate = function (p__14281){var vec__14283 = p__14281;var interval = cljs.core.nth.call(null,vec__14283,0,null);return tailrecursion.hoplon.reload.on_modified.call(null,"main.js",interval,(function (){return window.location.reload();
}));
};
var reload_js = function (var_args){
var p__14281 = null;if (arguments.length > 0) {
  p__14281 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return reload_js__delegate.call(this,p__14281);};
reload_js.cljs$lang$maxFixedArity = 0;
reload_js.cljs$lang$applyTo = (function (arglist__14284){
var p__14281 = cljs.core.seq(arglist__14284);
return reload_js__delegate(p__14281);
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
var reload_css__delegate = function (p__14286){var vec__14304 = p__14286;var interval = cljs.core.nth.call(null,vec__14304,0,null);return (function wait_css(){var css = document.styleSheets;var each = cljs.core.range.call(null,0,css.length);var css_seq = cljs.core.keep.call(null,((function (css,each){
return (function (p1__14285_SHARP_){return p1__14285_SHARP_.href;
});})(css,each))
,(function (){var iter__10302__auto__ = ((function (css,each){
return (function iter__14313(s__14314){return (new cljs.core.LazySeq(null,((function (css,each){
return (function (){var s__14314__$1 = s__14314;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__14314__$1);if(temp__4092__auto__)
{var s__14314__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14314__$2))
{var c__10300__auto__ = cljs.core.chunk_first.call(null,s__14314__$2);var size__10301__auto__ = cljs.core.count.call(null,c__10300__auto__);var b__14316 = cljs.core.chunk_buffer.call(null,size__10301__auto__);if((function (){var i__14315 = 0;while(true){
if((i__14315 < size__10301__auto__))
{var s = cljs.core._nth.call(null,c__10300__auto__,i__14315);cljs.core.chunk_append.call(null,b__14316,(css[s]));
{
var G__14321 = (i__14315 + 1);
i__14315 = G__14321;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14316),iter__14313.call(null,cljs.core.chunk_rest.call(null,s__14314__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14316),null);
}
} else
{var s = cljs.core.first.call(null,s__14314__$2);return cljs.core.cons.call(null,(css[s]),iter__14313.call(null,cljs.core.rest.call(null,s__14314__$2)));
}
} else
{return null;
}
break;
}
});})(css,each))
,null,null));
});})(css,each))
;return iter__10302__auto__.call(null,each);
})());if(cljs.core.not.call(null,cljs.core.seq.call(null,css_seq)))
{return setTimeout(wait_css,(function (){var or__9585__auto__ = interval;if(cljs.core.truth_(or__9585__auto__))
{return or__9585__auto__;
} else
{return 100;
}
})());
} else
{var seq__14317 = cljs.core.seq.call(null,cljs.core.range.call(null,0,css.length));var chunk__14318 = null;var count__14319 = 0;var i__14320 = 0;while(true){
if((i__14320 < count__14319))
{var s = cljs.core._nth.call(null,chunk__14318,i__14320);var temp__4092__auto___14322 = (css[s]);if(cljs.core.truth_(temp__4092__auto___14322))
{var sheet_14323 = temp__4092__auto___14322;var temp__4092__auto___14324__$1 = sheet_14323.href;if(cljs.core.truth_(temp__4092__auto___14324__$1))
{var href_14325 = temp__4092__auto___14324__$1;tailrecursion.hoplon.reload.on_modified.call(null,href_14325,interval,((function (seq__14317,chunk__14318,count__14319,i__14320,href_14325,temp__4092__auto___14324__$1,sheet_14323,temp__4092__auto___14322,s){
return (function (){return tailrecursion.hoplon.reload.reload_BANG_.call(null,(css[s]));
});})(seq__14317,chunk__14318,count__14319,i__14320,href_14325,temp__4092__auto___14324__$1,sheet_14323,temp__4092__auto___14322,s))
);
} else
{}
} else
{}
{
var G__14326 = seq__14317;
var G__14327 = chunk__14318;
var G__14328 = count__14319;
var G__14329 = (i__14320 + 1);
seq__14317 = G__14326;
chunk__14318 = G__14327;
count__14319 = G__14328;
i__14320 = G__14329;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__14317);if(temp__4092__auto__)
{var seq__14317__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14317__$1))
{var c__10333__auto__ = cljs.core.chunk_first.call(null,seq__14317__$1);{
var G__14330 = cljs.core.chunk_rest.call(null,seq__14317__$1);
var G__14331 = c__10333__auto__;
var G__14332 = cljs.core.count.call(null,c__10333__auto__);
var G__14333 = 0;
seq__14317 = G__14330;
chunk__14318 = G__14331;
count__14319 = G__14332;
i__14320 = G__14333;
continue;
}
} else
{var s = cljs.core.first.call(null,seq__14317__$1);var temp__4092__auto___14334__$1 = (css[s]);if(cljs.core.truth_(temp__4092__auto___14334__$1))
{var sheet_14335 = temp__4092__auto___14334__$1;var temp__4092__auto___14336__$2 = sheet_14335.href;if(cljs.core.truth_(temp__4092__auto___14336__$2))
{var href_14337 = temp__4092__auto___14336__$2;tailrecursion.hoplon.reload.on_modified.call(null,href_14337,interval,((function (seq__14317,chunk__14318,count__14319,i__14320,href_14337,temp__4092__auto___14336__$2,sheet_14335,temp__4092__auto___14334__$1,s,seq__14317__$1,temp__4092__auto__){
return (function (){return tailrecursion.hoplon.reload.reload_BANG_.call(null,(css[s]));
});})(seq__14317,chunk__14318,count__14319,i__14320,href_14337,temp__4092__auto___14336__$2,sheet_14335,temp__4092__auto___14334__$1,s,seq__14317__$1,temp__4092__auto__))
);
} else
{}
} else
{}
{
var G__14338 = cljs.core.next.call(null,seq__14317__$1);
var G__14339 = null;
var G__14340 = 0;
var G__14341 = 0;
seq__14317 = G__14338;
chunk__14318 = G__14339;
count__14319 = G__14340;
i__14320 = G__14341;
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
var p__14286 = null;if (arguments.length > 0) {
  p__14286 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return reload_css__delegate.call(this,p__14286);};
reload_css.cljs$lang$maxFixedArity = 0;
reload_css.cljs$lang$applyTo = (function (arglist__14342){
var p__14286 = cljs.core.seq(arglist__14342);
return reload_css__delegate(p__14286);
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
var reload_all__delegate = function (p__14343){var vec__14345 = p__14343;var interval = cljs.core.nth.call(null,vec__14345,0,null);tailrecursion.hoplon.reload.reload_js.call(null,interval);
return tailrecursion.hoplon.reload.reload_css.call(null,interval);
};
var reload_all = function (var_args){
var p__14343 = null;if (arguments.length > 0) {
  p__14343 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return reload_all__delegate.call(this,p__14343);};
reload_all.cljs$lang$maxFixedArity = 0;
reload_all.cljs$lang$applyTo = (function (arglist__14346){
var p__14343 = cljs.core.seq(arglist__14346);
return reload_all__delegate(p__14343);
});
reload_all.cljs$core$IFn$_invoke$arity$variadic = reload_all__delegate;
return reload_all;
})()
;
