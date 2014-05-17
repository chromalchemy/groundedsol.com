// Compiled by ClojureScript 0.0-2156
goog.provide('bootstrap.page');
goog.require('cljs.core');
goog.require('tailrecursion.javelin');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
goog.require('bootstrap.navbar');
goog.require('bootstrap.navbar');
goog.require('bootstrap.meta');
goog.require('bootstrap.meta');
goog.require('bootstrap.core');
goog.require('bootstrap.core');
/**
* @param {...*} var_args
*/
bootstrap.page.navbar_fixed_top = (function() { 
var navbar_fixed_top__delegate = function (route,title_text,description,kvs){return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return tailrecursion.hoplon.spliced.call(null,bootstrap.core.setup.call(null),tailrecursion.hoplon.title.call(null,title_text),bootstrap.meta.description.call(null,description));
}),cljs.core.apply.call(null,bootstrap.navbar.fixed_top,route,title_text,cljs.core.map.call(null,cljs.core.first,kvs))], null),cljs.core.map.call(null,(function (p__11764){var vec__11765 = p__11764;var l = cljs.core.nth.call(null,vec__11765,0,null);var c = cljs.core.nth.call(null,vec__11765,1,null);return c.call(null,new cljs.core.Keyword(null,"do-toggle","do-toggle",1250159176),tailrecursion.javelin.lift.call(null,(function (G__11768,G__11767,G__11766){return G__11766.call(null,G__11767,G__11768);
})).call(null,route,l,bootstrap.navbar.active_QMARK_));
}),kvs));
};
var navbar_fixed_top = function (route,title_text,description,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return navbar_fixed_top__delegate.call(this,route,title_text,description,kvs);};
navbar_fixed_top.cljs$lang$maxFixedArity = 3;
navbar_fixed_top.cljs$lang$applyTo = (function (arglist__11769){
var route = cljs.core.first(arglist__11769);
arglist__11769 = cljs.core.next(arglist__11769);
var title_text = cljs.core.first(arglist__11769);
arglist__11769 = cljs.core.next(arglist__11769);
var description = cljs.core.first(arglist__11769);
var kvs = cljs.core.rest(arglist__11769);
return navbar_fixed_top__delegate(route,title_text,description,kvs);
});
navbar_fixed_top.cljs$core$IFn$_invoke$arity$variadic = navbar_fixed_top__delegate;
return navbar_fixed_top;
})()
;
/**
* @param {...*} var_args
*/
bootstrap.page.header = (function() { 
var header__delegate = function (args__2361__auto__){var vec__11771 = tailrecursion.hoplon.parse_args.call(null,args__2361__auto__);var attr = cljs.core.nth.call(null,vec__11771,0,null);var kids = cljs.core.nth.call(null,vec__11771,1,null);return cljs.core.apply.call(null,tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"class","class",1108647146),"page-header"),attr,kids);
};
var header = function (var_args){
var args__2361__auto__ = null;if (arguments.length > 0) {
  args__2361__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return header__delegate.call(this,args__2361__auto__);};
header.cljs$lang$maxFixedArity = 0;
header.cljs$lang$applyTo = (function (arglist__11772){
var args__2361__auto__ = cljs.core.seq(arglist__11772);
return header__delegate(args__2361__auto__);
});
header.cljs$core$IFn$_invoke$arity$variadic = header__delegate;
return header;
})()
;
