// Compiled by ClojureScript 0.0-2156
goog.provide('bootstrap.list');
goog.require('cljs.core');
goog.require('tailrecursion.javelin');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
/**
* @param {...*} var_args
*/
bootstrap.list.group = (function() { 
var group__delegate = function (args__2361__auto__){var vec__11720 = tailrecursion.hoplon.parse_args.call(null,args__2361__auto__);var attr = cljs.core.nth.call(null,vec__11720,0,null);var kids = cljs.core.nth.call(null,vec__11720,1,null);return cljs.core.apply.call(null,tailrecursion.hoplon.ul.call(null,new cljs.core.Keyword(null,"class","class",1108647146),"list-group"),attr,kids);
};
var group = function (var_args){
var args__2361__auto__ = null;if (arguments.length > 0) {
  args__2361__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return group__delegate.call(this,args__2361__auto__);};
group.cljs$lang$maxFixedArity = 0;
group.cljs$lang$applyTo = (function (arglist__11721){
var args__2361__auto__ = cljs.core.seq(arglist__11721);
return group__delegate(args__2361__auto__);
});
group.cljs$core$IFn$_invoke$arity$variadic = group__delegate;
return group;
})()
;
/**
* @param {...*} var_args
*/
bootstrap.list.item = (function() { 
var item__delegate = function (args__2361__auto__){var vec__11723 = tailrecursion.hoplon.parse_args.call(null,args__2361__auto__);var attr = cljs.core.nth.call(null,vec__11723,0,null);var kids = cljs.core.nth.call(null,vec__11723,1,null);return cljs.core.apply.call(null,tailrecursion.hoplon.li.call(null,new cljs.core.Keyword(null,"class","class",1108647146),"list-group-item"),attr,kids);
};
var item = function (var_args){
var args__2361__auto__ = null;if (arguments.length > 0) {
  args__2361__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return item__delegate.call(this,args__2361__auto__);};
item.cljs$lang$maxFixedArity = 0;
item.cljs$lang$applyTo = (function (arglist__11724){
var args__2361__auto__ = cljs.core.seq(arglist__11724);
return item__delegate(args__2361__auto__);
});
item.cljs$core$IFn$_invoke$arity$variadic = item__delegate;
return item;
})()
;
/**
* @param {...*} var_args
*/
bootstrap.list.divgroup = (function() { 
var divgroup__delegate = function (args__2361__auto__){var vec__11726 = tailrecursion.hoplon.parse_args.call(null,args__2361__auto__);var attr = cljs.core.nth.call(null,vec__11726,0,null);var kids = cljs.core.nth.call(null,vec__11726,1,null);return cljs.core.apply.call(null,tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"class","class",1108647146),"list-group"),attr,kids);
};
var divgroup = function (var_args){
var args__2361__auto__ = null;if (arguments.length > 0) {
  args__2361__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return divgroup__delegate.call(this,args__2361__auto__);};
divgroup.cljs$lang$maxFixedArity = 0;
divgroup.cljs$lang$applyTo = (function (arglist__11727){
var args__2361__auto__ = cljs.core.seq(arglist__11727);
return divgroup__delegate(args__2361__auto__);
});
divgroup.cljs$core$IFn$_invoke$arity$variadic = divgroup__delegate;
return divgroup;
})()
;
/**
* @param {...*} var_args
*/
bootstrap.list.divitem = (function() { 
var divitem__delegate = function (args__2361__auto__){var vec__11729 = tailrecursion.hoplon.parse_args.call(null,args__2361__auto__);var attr = cljs.core.nth.call(null,vec__11729,0,null);var kids = cljs.core.nth.call(null,vec__11729,1,null);return cljs.core.apply.call(null,tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"class","class",1108647146),"list-group-item"),attr,kids);
};
var divitem = function (var_args){
var args__2361__auto__ = null;if (arguments.length > 0) {
  args__2361__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return divitem__delegate.call(this,args__2361__auto__);};
divitem.cljs$lang$maxFixedArity = 0;
divitem.cljs$lang$applyTo = (function (arglist__11730){
var args__2361__auto__ = cljs.core.seq(arglist__11730);
return divitem__delegate(args__2361__auto__);
});
divitem.cljs$core$IFn$_invoke$arity$variadic = divitem__delegate;
return divitem;
})()
;
