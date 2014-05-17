// Compiled by ClojureScript 0.0-2156
goog.provide('bootstrap.core');
goog.require('cljs.core');
goog.require('tailrecursion.javelin');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
goog.require('bootstrap.meta');
goog.require('bootstrap.meta');
bootstrap.core.setup = (function setup(){return tailrecursion.hoplon.spliced.call(null,bootstrap.meta.viewport.call(null,"width=device-width, initial-scale=1.0"),tailrecursion.hoplon.link.call(null,new cljs.core.Keyword(null,"href","href",1017115293),"css/bootstrap.min.css",new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet",new cljs.core.Keyword(null,"media","media",1117676374),"screen"),tailrecursion.hoplon.link.call(null,new cljs.core.Keyword(null,"href","href",1017115293),"css/starter-template.css",new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet",new cljs.core.Keyword(null,"media","media",1117676374),"screen"));
});
/**
* @param {...*} var_args
*/
bootstrap.core.container = (function() { 
var container__delegate = function (args__2168__auto__){var vec__11461 = tailrecursion.hoplon.parse_args.call(null,args__2168__auto__);var attr = cljs.core.nth.call(null,vec__11461,0,null);var kids = cljs.core.nth.call(null,vec__11461,1,null);return cljs.core.apply.call(null,tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"class","class",1108647146),"container"),attr,kids);
};
var container = function (var_args){
var args__2168__auto__ = null;if (arguments.length > 0) {
  args__2168__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return container__delegate.call(this,args__2168__auto__);};
container.cljs$lang$maxFixedArity = 0;
container.cljs$lang$applyTo = (function (arglist__11462){
var args__2168__auto__ = cljs.core.seq(arglist__11462);
return container__delegate(args__2168__auto__);
});
container.cljs$core$IFn$_invoke$arity$variadic = container__delegate;
return container;
})()
;
/**
* @param {...*} var_args
*/
bootstrap.core.jumbotron = (function() { 
var jumbotron__delegate = function (args__2168__auto__){var vec__11464 = tailrecursion.hoplon.parse_args.call(null,args__2168__auto__);var attr = cljs.core.nth.call(null,vec__11464,0,null);var kids = cljs.core.nth.call(null,vec__11464,1,null);return cljs.core.apply.call(null,tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"class","class",1108647146),"jumbotron"),attr,kids);
};
var jumbotron = function (var_args){
var args__2168__auto__ = null;if (arguments.length > 0) {
  args__2168__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return jumbotron__delegate.call(this,args__2168__auto__);};
jumbotron.cljs$lang$maxFixedArity = 0;
jumbotron.cljs$lang$applyTo = (function (arglist__11465){
var args__2168__auto__ = cljs.core.seq(arglist__11465);
return jumbotron__delegate(args__2168__auto__);
});
jumbotron.cljs$core$IFn$_invoke$arity$variadic = jumbotron__delegate;
return jumbotron;
})()
;
