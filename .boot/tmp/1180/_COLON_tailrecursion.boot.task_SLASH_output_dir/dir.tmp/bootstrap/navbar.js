// Compiled by ClojureScript 0.0-2156
goog.provide('bootstrap.navbar');
goog.require('cljs.core');
goog.require('tailrecursion.javelin');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('bootstrap.meta');
goog.require('bootstrap.meta');
goog.require('bootstrap.core');
goog.require('bootstrap.core');
bootstrap.navbar.get_hash = (function get_hash(link){return cljs.core.subs.call(null,link.href,link.href.indexOf("#"));
});
bootstrap.navbar.active_QMARK_ = (function active_QMARK_(link,route){var h = bootstrap.navbar.get_hash.call(null,link);return cljs.core._EQ_.call(null,h,cljs.core.subs.call(null,route,0,cljs.core.count.call(null,h)));
});
/**
* @param {...*} var_args
*/
bootstrap.navbar.inverse = (function() { 
var inverse__delegate = function (args__2361__auto__){var vec__11738 = tailrecursion.hoplon.parse_args.call(null,args__2361__auto__);var attr = cljs.core.nth.call(null,vec__11738,0,null);var kids = cljs.core.nth.call(null,vec__11738,1,null);return cljs.core.apply.call(null,tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"class","class",1108647146),"navbar navbar-inverse"),attr,kids);
};
var inverse = function (var_args){
var args__2361__auto__ = null;if (arguments.length > 0) {
  args__2361__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return inverse__delegate.call(this,args__2361__auto__);};
inverse.cljs$lang$maxFixedArity = 0;
inverse.cljs$lang$applyTo = (function (arglist__11739){
var args__2361__auto__ = cljs.core.seq(arglist__11739);
return inverse__delegate(args__2361__auto__);
});
inverse.cljs$core$IFn$_invoke$arity$variadic = inverse__delegate;
return inverse;
})()
;
/**
* @param {...*} var_args
*/
bootstrap.navbar.header = (function() { 
var header__delegate = function (args__2361__auto__){var vec__11741 = tailrecursion.hoplon.parse_args.call(null,args__2361__auto__);var attr = cljs.core.nth.call(null,vec__11741,0,null);var kids = cljs.core.nth.call(null,vec__11741,1,null);return cljs.core.apply.call(null,tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"class","class",1108647146),"navbar-header"),attr,kids);
};
var header = function (var_args){
var args__2361__auto__ = null;if (arguments.length > 0) {
  args__2361__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return header__delegate.call(this,args__2361__auto__);};
header.cljs$lang$maxFixedArity = 0;
header.cljs$lang$applyTo = (function (arglist__11742){
var args__2361__auto__ = cljs.core.seq(arglist__11742);
return header__delegate(args__2361__auto__);
});
header.cljs$core$IFn$_invoke$arity$variadic = header__delegate;
return header;
})()
;
/**
* @param {...*} var_args
*/
bootstrap.navbar.collapse = (function() { 
var collapse__delegate = function (args__2361__auto__){var vec__11744 = tailrecursion.hoplon.parse_args.call(null,args__2361__auto__);var attr = cljs.core.nth.call(null,vec__11744,0,null);var kids = cljs.core.nth.call(null,vec__11744,1,null);return cljs.core.apply.call(null,tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"class","class",1108647146),"collapse navbar-collapse"),attr,kids);
};
var collapse = function (var_args){
var args__2361__auto__ = null;if (arguments.length > 0) {
  args__2361__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return collapse__delegate.call(this,args__2361__auto__);};
collapse.cljs$lang$maxFixedArity = 0;
collapse.cljs$lang$applyTo = (function (arglist__11745){
var args__2361__auto__ = cljs.core.seq(arglist__11745);
return collapse__delegate(args__2361__auto__);
});
collapse.cljs$core$IFn$_invoke$arity$variadic = collapse__delegate;
return collapse;
})()
;
/**
* @param {...*} var_args
*/
bootstrap.navbar.nav = (function() { 
var nav__delegate = function (args__2361__auto__){var vec__11747 = tailrecursion.hoplon.parse_args.call(null,args__2361__auto__);var attr = cljs.core.nth.call(null,vec__11747,0,null);var kids = cljs.core.nth.call(null,vec__11747,1,null);return cljs.core.apply.call(null,tailrecursion.hoplon.ul.call(null,new cljs.core.Keyword(null,"class","class",1108647146),"nav navbar-nav"),attr,kids);
};
var nav = function (var_args){
var args__2361__auto__ = null;if (arguments.length > 0) {
  args__2361__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return nav__delegate.call(this,args__2361__auto__);};
nav.cljs$lang$maxFixedArity = 0;
nav.cljs$lang$applyTo = (function (arglist__11748){
var args__2361__auto__ = cljs.core.seq(arglist__11748);
return nav__delegate(args__2361__auto__);
});
nav.cljs$core$IFn$_invoke$arity$variadic = nav__delegate;
return nav;
})()
;
/**
* @param {...*} var_args
*/
bootstrap.navbar.brand = (function() { 
var brand__delegate = function (args__2361__auto__){var vec__11750 = tailrecursion.hoplon.parse_args.call(null,args__2361__auto__);var attr = cljs.core.nth.call(null,vec__11750,0,null);var kids = cljs.core.nth.call(null,vec__11750,1,null);return cljs.core.apply.call(null,tailrecursion.hoplon.a.call(null,new cljs.core.Keyword(null,"class","class",1108647146),"navbar-brand"),attr,kids);
};
var brand = function (var_args){
var args__2361__auto__ = null;if (arguments.length > 0) {
  args__2361__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return brand__delegate.call(this,args__2361__auto__);};
brand.cljs$lang$maxFixedArity = 0;
brand.cljs$lang$applyTo = (function (arglist__11751){
var args__2361__auto__ = cljs.core.seq(arglist__11751);
return brand__delegate(args__2361__auto__);
});
brand.cljs$core$IFn$_invoke$arity$variadic = brand__delegate;
return brand;
})()
;
/**
* @param {...*} var_args
*/
bootstrap.navbar.fixed_top = (function() { 
var fixed_top__delegate = function (route,title_text,links){return bootstrap.navbar.inverse.call(null,new cljs.core.Keyword(null,"class","class",1108647146),"navbar-fixed-top").call(null,bootstrap.core.container.call(null,bootstrap.navbar.header.call(null,bootstrap.navbar.brand.call(null,new cljs.core.Keyword(null,"href","href",1017115293),bootstrap.navbar.get_hash.call(null,cljs.core.first.call(null,links)),title_text)),bootstrap.navbar.collapse.call(null,cljs.core.apply.call(null,bootstrap.navbar.nav.call(null),cljs.core.map.call(null,(function (p1__8076_SHARP_){return tailrecursion.hoplon.li.call(null,new cljs.core.Keyword(null,"do-class","do-class",4607961384),tailrecursion.javelin.lift.call(null,(function (G__11757,G__11755,G__11756){return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",3885920888),G__11755.call(null,G__11756,G__11757)], null);
})).call(null,route,bootstrap.navbar.active_QMARK_,p1__8076_SHARP_),p1__8076_SHARP_);
}),links)))));
};
var fixed_top = function (route,title_text,var_args){
var links = null;if (arguments.length > 2) {
  links = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fixed_top__delegate.call(this,route,title_text,links);};
fixed_top.cljs$lang$maxFixedArity = 2;
fixed_top.cljs$lang$applyTo = (function (arglist__11758){
var route = cljs.core.first(arglist__11758);
arglist__11758 = cljs.core.next(arglist__11758);
var title_text = cljs.core.first(arglist__11758);
var links = cljs.core.rest(arglist__11758);
return fixed_top__delegate(route,title_text,links);
});
fixed_top.cljs$core$IFn$_invoke$arity$variadic = fixed_top__delegate;
return fixed_top;
})()
;
