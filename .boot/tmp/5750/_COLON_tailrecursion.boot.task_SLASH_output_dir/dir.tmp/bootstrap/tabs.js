// Compiled by ClojureScript 0.0-2156
goog.provide('bootstrap.tabs');
goog.require('cljs.core');
goog.require('tailrecursion.javelin');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
/**
* @param {...*} var_args
*/
bootstrap.tabs.active = (function() { 
var active__delegate = function (args__2168__auto__){var vec__11599 = tailrecursion.hoplon.parse_args.call(null,args__2168__auto__);var map__11600 = cljs.core.nth.call(null,vec__11599,0,null);var map__11600__$1 = ((cljs.core.seq_QMARK_.call(null,map__11600))?cljs.core.apply.call(null,cljs.core.hash_map,map__11600):map__11600);var state = cljs.core.get.call(null,map__11600__$1,new cljs.core.Keyword(null,"state","state",1123661827));var vec__11601 = cljs.core.nth.call(null,vec__11599,1,null);var elem = cljs.core.nth.call(null,vec__11601,0,null);return elem.call(null,new cljs.core.Keyword(null,"do-class","do-class",4607961384),tailrecursion.javelin.lift.call(null,(function (G__11602){return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",3885920888),G__11602], null);
})).call(null,state));
};
var active = function (var_args){
var args__2168__auto__ = null;if (arguments.length > 0) {
  args__2168__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return active__delegate.call(this,args__2168__auto__);};
active.cljs$lang$maxFixedArity = 0;
active.cljs$lang$applyTo = (function (arglist__11603){
var args__2168__auto__ = cljs.core.seq(arglist__11603);
return active__delegate(args__2168__auto__);
});
active.cljs$core$IFn$_invoke$arity$variadic = active__delegate;
return active;
})()
;
/**
* @param {...*} var_args
*/
bootstrap.tabs.trigger = (function() { 
var trigger__delegate = function (args__2168__auto__){var vec__11610 = tailrecursion.hoplon.parse_args.call(null,args__2168__auto__);var map__11611 = cljs.core.nth.call(null,vec__11610,0,null);var map__11611__$1 = ((cljs.core.seq_QMARK_.call(null,map__11611))?cljs.core.apply.call(null,cljs.core.hash_map,map__11611):map__11611);var tab = cljs.core.get.call(null,map__11611__$1,new cljs.core.Keyword(null,"tab","tab",1014018823));var for$ = cljs.core.get.call(null,map__11611__$1,new cljs.core.Keyword(null,"for","for",1014005819));var vec__11612 = cljs.core.nth.call(null,vec__11610,1,null);var elem = cljs.core.nth.call(null,vec__11612,0,null);return bootstrap.tabs.active.call(null,new cljs.core.Keyword(null,"state","state",1123661827),tailrecursion.javelin.lift.call(null,(function (G__11614,G__11615,G__11613){return G__11613.call(null,G__11614,G__11615);
})).call(null,for$,tab,cljs.core._EQ_),elem.call(null,new cljs.core.Keyword(null,"on-click","on-click",1416542092),(function (){return cljs.core.reset_BANG_.call(null,for$,tab);
})));
};
var trigger = function (var_args){
var args__2168__auto__ = null;if (arguments.length > 0) {
  args__2168__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return trigger__delegate.call(this,args__2168__auto__);};
trigger.cljs$lang$maxFixedArity = 0;
trigger.cljs$lang$applyTo = (function (arglist__11616){
var args__2168__auto__ = cljs.core.seq(arglist__11616);
return trigger__delegate(args__2168__auto__);
});
trigger.cljs$core$IFn$_invoke$arity$variadic = trigger__delegate;
return trigger;
})()
;
/**
* @param {...*} var_args
*/
bootstrap.tabs.content = (function() { 
var content__delegate = function (args__2168__auto__){var vec__11623 = tailrecursion.hoplon.parse_args.call(null,args__2168__auto__);var map__11624 = cljs.core.nth.call(null,vec__11623,0,null);var map__11624__$1 = ((cljs.core.seq_QMARK_.call(null,map__11624))?cljs.core.apply.call(null,cljs.core.hash_map,map__11624):map__11624);var tab = cljs.core.get.call(null,map__11624__$1,new cljs.core.Keyword(null,"tab","tab",1014018823));var for$ = cljs.core.get.call(null,map__11624__$1,new cljs.core.Keyword(null,"for","for",1014005819));var vec__11625 = cljs.core.nth.call(null,vec__11623,1,null);var elem = cljs.core.nth.call(null,vec__11625,0,null);return bootstrap.tabs.active.call(null,new cljs.core.Keyword(null,"state","state",1123661827),tailrecursion.javelin.lift.call(null,(function (G__11627,G__11628,G__11626){return G__11626.call(null,G__11627,G__11628);
})).call(null,for$,tab,cljs.core._EQ_),elem);
};
var content = function (var_args){
var args__2168__auto__ = null;if (arguments.length > 0) {
  args__2168__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return content__delegate.call(this,args__2168__auto__);};
content.cljs$lang$maxFixedArity = 0;
content.cljs$lang$applyTo = (function (arglist__11629){
var args__2168__auto__ = cljs.core.seq(arglist__11629);
return content__delegate(args__2168__auto__);
});
content.cljs$core$IFn$_invoke$arity$variadic = content__delegate;
return content;
})()
;
/**
* @param {...*} var_args
*/
bootstrap.tabs.tabs = (function() { 
var tabs__delegate = function (args__2168__auto__){var vec__11633 = tailrecursion.hoplon.parse_args.call(null,args__2168__auto__);var map__11634 = cljs.core.nth.call(null,vec__11633,0,null);var map__11634__$1 = ((cljs.core.seq_QMARK_.call(null,map__11634))?cljs.core.apply.call(null,cljs.core.hash_map,map__11634):map__11634);var attr = map__11634__$1;var type = cljs.core.get.call(null,map__11634__$1,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"tabs","tabs",1017456368));var state = cljs.core.get.call(null,map__11634__$1,new cljs.core.Keyword(null,"state","state",1123661827),tailrecursion.javelin.cell.call(null,0));var kids = cljs.core.nth.call(null,vec__11633,1,null);var ctnr = tailrecursion.hoplon.div.call(null,cljs.core.dissoc.call(null,attr,new cljs.core.Keyword(null,"state","state",1123661827)));var vec__11635 = cljs.core.apply.call(null,cljs.core.map,cljs.core.list,cljs.core.partition.call(null,2,kids));var trigs = cljs.core.nth.call(null,vec__11635,0,null);var conts = cljs.core.nth.call(null,vec__11635,1,null);var tclass = [cljs.core.str("nav nav-"),cljs.core.str(cljs.core.name.call(null,type))].join('');var a_void = ((function (ctnr,vec__11635,trigs,conts,tclass){
return (function (p1__8391_SHARP_){return tailrecursion.hoplon.a.call(null,new cljs.core.Keyword(null,"href","href",1017115293),"javascript:void(0)",p1__8391_SHARP_);
});})(ctnr,vec__11635,trigs,conts,tclass))
;var mktrig = ((function (ctnr,vec__11635,trigs,conts,tclass,a_void){
return (function (p1__8392_SHARP_,p2__8393_SHARP_){return bootstrap.tabs.trigger.call(null,new cljs.core.Keyword(null,"for","for",1014005819),state,new cljs.core.Keyword(null,"tab","tab",1014018823),p1__8392_SHARP_,tailrecursion.hoplon.li.call(null,a_void.call(null,p2__8393_SHARP_)));
});})(ctnr,vec__11635,trigs,conts,tclass,a_void))
;var mkcont = ((function (ctnr,vec__11635,trigs,conts,tclass,a_void,mktrig){
return (function (p1__8394_SHARP_,p2__8395_SHARP_){return bootstrap.tabs.content.call(null,new cljs.core.Keyword(null,"for","for",1014005819),state,new cljs.core.Keyword(null,"tab","tab",1014018823),p1__8394_SHARP_,p2__8395_SHARP_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),"tab-pane"));
});})(ctnr,vec__11635,trigs,conts,tclass,a_void,mktrig))
;var tab_bar = tailrecursion.hoplon.ul.call(null,new cljs.core.Keyword(null,"class","class",1108647146),tclass,cljs.core.map_indexed.call(null,mktrig,trigs));var content = tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"class","class",1108647146),"tab-content",cljs.core.map_indexed.call(null,mkcont,conts));return tailrecursion.hoplon.div.call(null,cljs.core.dissoc.call(null,attr,new cljs.core.Keyword(null,"state","state",1123661827)),tab_bar,content);
};
var tabs = function (var_args){
var args__2168__auto__ = null;if (arguments.length > 0) {
  args__2168__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return tabs__delegate.call(this,args__2168__auto__);};
tabs.cljs$lang$maxFixedArity = 0;
tabs.cljs$lang$applyTo = (function (arglist__11636){
var args__2168__auto__ = cljs.core.seq(arglist__11636);
return tabs__delegate(args__2168__auto__);
});
tabs.cljs$core$IFn$_invoke$arity$variadic = tabs__delegate;
return tabs;
})()
;
