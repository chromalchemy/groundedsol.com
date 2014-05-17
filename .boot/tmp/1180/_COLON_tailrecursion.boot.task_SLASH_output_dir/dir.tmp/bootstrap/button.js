// Compiled by ClojureScript 0.0-2156
goog.provide('bootstrap.button');
goog.require('cljs.core');
goog.require('tailrecursion.javelin');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
/**
* @param {...*} var_args
*/
bootstrap.button.group = (function() { 
var group__delegate = function (args__2361__auto__){var vec__11636 = tailrecursion.hoplon.parse_args.call(null,args__2361__auto__);var attr = cljs.core.nth.call(null,vec__11636,0,null);var kids = cljs.core.nth.call(null,vec__11636,1,null);return cljs.core.apply.call(null,tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"class","class",1108647146),"btn-group"),attr,kids);
};
var group = function (var_args){
var args__2361__auto__ = null;if (arguments.length > 0) {
  args__2361__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return group__delegate.call(this,args__2361__auto__);};
group.cljs$lang$maxFixedArity = 0;
group.cljs$lang$applyTo = (function (arglist__11637){
var args__2361__auto__ = cljs.core.seq(arglist__11637);
return group__delegate(args__2361__auto__);
});
group.cljs$core$IFn$_invoke$arity$variadic = group__delegate;
return group;
})()
;
/**
* @param {...*} var_args
*/
bootstrap.button.default$ = (function() { 
var default$__delegate = function (args__2361__auto__){var vec__11639 = tailrecursion.hoplon.parse_args.call(null,args__2361__auto__);var attr = cljs.core.nth.call(null,vec__11639,0,null);var kids = cljs.core.nth.call(null,vec__11639,1,null);return cljs.core.apply.call(null,tailrecursion.hoplon.button.call(null,new cljs.core.Keyword(null,"type","type",1017479852),"button",new cljs.core.Keyword(null,"class","class",1108647146),"btn btn-default"),attr,kids);
};
var default$ = function (var_args){
var args__2361__auto__ = null;if (arguments.length > 0) {
  args__2361__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return default$__delegate.call(this,args__2361__auto__);};
default$.cljs$lang$maxFixedArity = 0;
default$.cljs$lang$applyTo = (function (arglist__11640){
var args__2361__auto__ = cljs.core.seq(arglist__11640);
return default$__delegate(args__2361__auto__);
});
default$.cljs$core$IFn$_invoke$arity$variadic = default$__delegate;
return default$;
})()
;
/**
* @param {...*} var_args
*/
bootstrap.button.small = (function() { 
var small__delegate = function (args__2361__auto__){var vec__11642 = tailrecursion.hoplon.parse_args.call(null,args__2361__auto__);var attr = cljs.core.nth.call(null,vec__11642,0,null);var kids = cljs.core.nth.call(null,vec__11642,1,null);return cljs.core.apply.call(null,tailrecursion.hoplon.button.call(null,new cljs.core.Keyword(null,"type","type",1017479852),"button",new cljs.core.Keyword(null,"class","class",1108647146),"btn btn-default btn-sm"),attr,kids);
};
var small = function (var_args){
var args__2361__auto__ = null;if (arguments.length > 0) {
  args__2361__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return small__delegate.call(this,args__2361__auto__);};
small.cljs$lang$maxFixedArity = 0;
small.cljs$lang$applyTo = (function (arglist__11643){
var args__2361__auto__ = cljs.core.seq(arglist__11643);
return small__delegate(args__2361__auto__);
});
small.cljs$core$IFn$_invoke$arity$variadic = small__delegate;
return small;
})()
;
/**
* @param {...*} var_args
*/
bootstrap.button.xsmall = (function() { 
var xsmall__delegate = function (args__2361__auto__){var vec__11645 = tailrecursion.hoplon.parse_args.call(null,args__2361__auto__);var attr = cljs.core.nth.call(null,vec__11645,0,null);var kids = cljs.core.nth.call(null,vec__11645,1,null);return cljs.core.apply.call(null,tailrecursion.hoplon.button.call(null,new cljs.core.Keyword(null,"type","type",1017479852),"button",new cljs.core.Keyword(null,"class","class",1108647146),"btn btn-default btn-xs"),attr,kids);
};
var xsmall = function (var_args){
var args__2361__auto__ = null;if (arguments.length > 0) {
  args__2361__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return xsmall__delegate.call(this,args__2361__auto__);};
xsmall.cljs$lang$maxFixedArity = 0;
xsmall.cljs$lang$applyTo = (function (arglist__11646){
var args__2361__auto__ = cljs.core.seq(arglist__11646);
return xsmall__delegate(args__2361__auto__);
});
xsmall.cljs$core$IFn$_invoke$arity$variadic = xsmall__delegate;
return xsmall;
})()
;
/**
* @param {...*} var_args
*/
bootstrap.button.start = (function() { 
var start__delegate = function (args__2361__auto__){var vec__11648 = tailrecursion.hoplon.parse_args.call(null,args__2361__auto__);var attr = cljs.core.nth.call(null,vec__11648,0,null);var kids = cljs.core.nth.call(null,vec__11648,1,null);return cljs.core.apply.call(null,tailrecursion.hoplon.a.call(null,new cljs.core.Keyword(null,"class","class",1108647146),"btn btn-large btn-primary"),attr,kids);
};
var start = function (var_args){
var args__2361__auto__ = null;if (arguments.length > 0) {
  args__2361__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return start__delegate.call(this,args__2361__auto__);};
start.cljs$lang$maxFixedArity = 0;
start.cljs$lang$applyTo = (function (arglist__11649){
var args__2361__auto__ = cljs.core.seq(arglist__11649);
return start__delegate(args__2361__auto__);
});
start.cljs$core$IFn$_invoke$arity$variadic = start__delegate;
return start;
})()
;
/**
* @param {...*} var_args
*/
bootstrap.button.more = (function() { 
var more__delegate = function (args__2361__auto__){var vec__11651 = tailrecursion.hoplon.parse_args.call(null,args__2361__auto__);var attr = cljs.core.nth.call(null,vec__11651,0,null);var kids = cljs.core.nth.call(null,vec__11651,1,null);return cljs.core.apply.call(null,tailrecursion.hoplon.a.call(null,new cljs.core.Keyword(null,"class","class",1108647146),"btn btn-primary"),attr,kids);
};
var more = function (var_args){
var args__2361__auto__ = null;if (arguments.length > 0) {
  args__2361__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return more__delegate.call(this,args__2361__auto__);};
more.cljs$lang$maxFixedArity = 0;
more.cljs$lang$applyTo = (function (arglist__11652){
var args__2361__auto__ = cljs.core.seq(arglist__11652);
return more__delegate(args__2361__auto__);
});
more.cljs$core$IFn$_invoke$arity$variadic = more__delegate;
return more;
})()
;
