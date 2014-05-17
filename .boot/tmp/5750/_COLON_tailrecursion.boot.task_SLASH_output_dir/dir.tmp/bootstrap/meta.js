// Compiled by ClojureScript 0.0-2156
goog.provide('bootstrap.meta');
goog.require('cljs.core');
goog.require('tailrecursion.javelin');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
bootstrap.meta.meta = tailrecursion.hoplon.html_meta;
/**
* @param {...*} var_args
*/
bootstrap.meta.viewport = (function() { 
var viewport__delegate = function (args__2168__auto__){var vec__11539 = tailrecursion.hoplon.parse_args.call(null,args__2168__auto__);var attr = cljs.core.nth.call(null,vec__11539,0,null);var kids = cljs.core.nth.call(null,vec__11539,1,null);return bootstrap.meta.meta.call(null,new cljs.core.Keyword(null,"name","name",1017277949),"viewport",new cljs.core.Keyword(null,"content","content",1965434859),cljs.core.first.call(null,kids));
};
var viewport = function (var_args){
var args__2168__auto__ = null;if (arguments.length > 0) {
  args__2168__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return viewport__delegate.call(this,args__2168__auto__);};
viewport.cljs$lang$maxFixedArity = 0;
viewport.cljs$lang$applyTo = (function (arglist__11540){
var args__2168__auto__ = cljs.core.seq(arglist__11540);
return viewport__delegate(args__2168__auto__);
});
viewport.cljs$core$IFn$_invoke$arity$variadic = viewport__delegate;
return viewport;
})()
;
/**
* @param {...*} var_args
*/
bootstrap.meta.description = (function() { 
var description__delegate = function (args__2168__auto__){var vec__11542 = tailrecursion.hoplon.parse_args.call(null,args__2168__auto__);var attr = cljs.core.nth.call(null,vec__11542,0,null);var kids = cljs.core.nth.call(null,vec__11542,1,null);return bootstrap.meta.meta.call(null,new cljs.core.Keyword(null,"name","name",1017277949),"description",new cljs.core.Keyword(null,"content","content",1965434859),cljs.core.first.call(null,kids));
};
var description = function (var_args){
var args__2168__auto__ = null;if (arguments.length > 0) {
  args__2168__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return description__delegate.call(this,args__2168__auto__);};
description.cljs$lang$maxFixedArity = 0;
description.cljs$lang$applyTo = (function (arglist__11543){
var args__2168__auto__ = cljs.core.seq(arglist__11543);
return description__delegate(args__2168__auto__);
});
description.cljs$core$IFn$_invoke$arity$variadic = description__delegate;
return description;
})()
;
