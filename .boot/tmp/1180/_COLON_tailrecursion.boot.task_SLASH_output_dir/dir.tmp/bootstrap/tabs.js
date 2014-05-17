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
var active__delegate = function (args__2361__auto__){var vec__11792 = tailrecursion.hoplon.parse_args.call(null,args__2361__auto__);var map__11793 = cljs.core.nth.call(null,vec__11792,0,null);var map__11793__$1 = ((cljs.core.seq_QMARK_.call(null,map__11793))?cljs.core.apply.call(null,cljs.core.hash_map,map__11793):map__11793);var state = cljs.core.get.call(null,map__11793__$1,new cljs.core.Keyword(null,"state","state",1123661827));var vec__11794 = cljs.core.nth.call(null,vec__11792,1,null);var elem = cljs.core.nth.call(null,vec__11794,0,null);return elem.call(null,new cljs.core.Keyword(null,"do-class","do-class",4607961384),tailrecursion.javelin.lift.call(null,(function (G__11795){return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",3885920888),G__11795], null);
})).call(null,state));
};
var active = function (var_args){
var args__2361__auto__ = null;if (arguments.length > 0) {
  args__2361__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return active__delegate.call(this,args__2361__auto__);};
active.cljs$lang$maxFixedArity = 0;
active.cljs$lang$applyTo = (function (arglist__11796){
var args__2361__auto__ = cljs.core.seq(arglist__11796);
return active__delegate(args__2361__auto__);
});
active.cljs$core$IFn$_invoke$arity$variadic = active__delegate;
return active;
})()
;
/**
* @param {...*} var_args
*/
bootstrap.tabs.trigger = (function() { 
var trigger__delegate = function (args__2361__auto__){var vec__11803 = tailrecursion.hoplon.parse_args.call(null,args__2361__auto__);var map__11804 = cljs.core.nth.call(null,vec__11803,0,null);var map__11804__$1 = ((cljs.core.seq_QMARK_.call(null,map__11804))?cljs.core.apply.call(null,cljs.core.hash_map,map__11804):map__11804);var tab = cljs.core.get.call(null,map__11804__$1,new cljs.core.Keyword(null,"tab","tab",1014018823));var for$ = cljs.core.get.call(null,map__11804__$1,new cljs.core.Keyword(null,"for","for",1014005819));var vec__11805 = cljs.core.nth.call(null,vec__11803,1,null);var elem = cljs.core.nth.call(null,vec__11805,0,null);return bootstrap.tabs.active.call(null,new cljs.core.Keyword(null,"state","state",1123661827),tailrecursion.javelin.lift.call(null,(function (G__11807,G__11808,G__11806){return G__11806.call(null,G__11807,G__11808);
})).call(null,for$,tab,cljs.core._EQ_),elem.call(null,new cljs.core.Keyword(null,"on-click","on-click",1416542092),(function (){return cljs.core.reset_BANG_.call(null,for$,tab);
})));
};
var trigger = function (var_args){
var args__2361__auto__ = null;if (arguments.length > 0) {
  args__2361__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return trigger__delegate.call(this,args__2361__auto__);};
trigger.cljs$lang$maxFixedArity = 0;
trigger.cljs$lang$applyTo = (function (arglist__11809){
var args__2361__auto__ = cljs.core.seq(arglist__11809);
return trigger__delegate(args__2361__auto__);
});
trigger.cljs$core$IFn$_invoke$arity$variadic = trigger__delegate;
return trigger;
})()
;
/**
* @param {...*} var_args
*/
bootstrap.tabs.content = (function() { 
var content__delegate = function (args__2361__auto__){var vec__11816 = tailrecursion.hoplon.parse_args.call(null,args__2361__auto__);var map__11817 = cljs.core.nth.call(null,vec__11816,0,null);var map__11817__$1 = ((cljs.core.seq_QMARK_.call(null,map__11817))?cljs.core.apply.call(null,cljs.core.hash_map,map__11817):map__11817);var tab = cljs.core.get.call(null,map__11817__$1,new cljs.core.Keyword(null,"tab","tab",1014018823));var for$ = cljs.core.get.call(null,map__11817__$1,new cljs.core.Keyword(null,"for","for",1014005819));var vec__11818 = cljs.core.nth.call(null,vec__11816,1,null);var elem = cljs.core.nth.call(null,vec__11818,0,null);return bootstrap.tabs.active.call(null,new cljs.core.Keyword(null,"state","state",1123661827),tailrecursion.javelin.lift.call(null,(function (G__11820,G__11821,G__11819){return G__11819.call(null,G__11820,G__11821);
})).call(null,for$,tab,cljs.core._EQ_),elem);
};
var content = function (var_args){
var args__2361__auto__ = null;if (arguments.length > 0) {
  args__2361__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return content__delegate.call(this,args__2361__auto__);};
content.cljs$lang$maxFixedArity = 0;
content.cljs$lang$applyTo = (function (arglist__11822){
var args__2361__auto__ = cljs.core.seq(arglist__11822);
return content__delegate(args__2361__auto__);
});
content.cljs$core$IFn$_invoke$arity$variadic = content__delegate;
return content;
})()
;
/**
* @param {...*} var_args
*/
bootstrap.tabs.tabs = (function() { 
var tabs__delegate = function (args__2361__auto__){var vec__11826 = tailrecursion.hoplon.parse_args.call(null,args__2361__auto__);var map__11827 = cljs.core.nth.call(null,vec__11826,0,null);var map__11827__$1 = ((cljs.core.seq_QMARK_.call(null,map__11827))?cljs.core.apply.call(null,cljs.core.hash_map,map__11827):map__11827);var attr = map__11827__$1;var type = cljs.core.get.call(null,map__11827__$1,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"tabs","tabs",1017456368));var state = cljs.core.get.call(null,map__11827__$1,new cljs.core.Keyword(null,"state","state",1123661827),tailrecursion.javelin.cell.call(null,0));var kids = cljs.core.nth.call(null,vec__11826,1,null);var ctnr = tailrecursion.hoplon.div.call(null,cljs.core.dissoc.call(null,attr,new cljs.core.Keyword(null,"state","state",1123661827)));var vec__11828 = cljs.core.apply.call(null,cljs.core.map,cljs.core.list,cljs.core.partition.call(null,2,kids));var trigs = cljs.core.nth.call(null,vec__11828,0,null);var conts = cljs.core.nth.call(null,vec__11828,1,null);var tclass = [cljs.core.str("nav nav-"),cljs.core.str(cljs.core.name.call(null,type))].join('');var a_void = ((function (ctnr,vec__11828,trigs,conts,tclass){
return (function (p1__8584_SHARP_){return tailrecursion.hoplon.a.call(null,new cljs.core.Keyword(null,"href","href",1017115293),"javascript:void(0)",p1__8584_SHARP_);
});})(ctnr,vec__11828,trigs,conts,tclass))
;var mktrig = ((function (ctnr,vec__11828,trigs,conts,tclass,a_void){
return (function (p1__8585_SHARP_,p2__8586_SHARP_){return bootstrap.tabs.trigger.call(null,new cljs.core.Keyword(null,"for","for",1014005819),state,new cljs.core.Keyword(null,"tab","tab",1014018823),p1__8585_SHARP_,tailrecursion.hoplon.li.call(null,a_void.call(null,p2__8586_SHARP_)));
});})(ctnr,vec__11828,trigs,conts,tclass,a_void))
;var mkcont = ((function (ctnr,vec__11828,trigs,conts,tclass,a_void,mktrig){
return (function (p1__8587_SHARP_,p2__8588_SHARP_){return bootstrap.tabs.content.call(null,new cljs.core.Keyword(null,"for","for",1014005819),state,new cljs.core.Keyword(null,"tab","tab",1014018823),p1__8587_SHARP_,p2__8588_SHARP_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),"tab-pane"));
});})(ctnr,vec__11828,trigs,conts,tclass,a_void,mktrig))
;var tab_bar = tailrecursion.hoplon.ul.call(null,new cljs.core.Keyword(null,"class","class",1108647146),tclass,cljs.core.map_indexed.call(null,mktrig,trigs));var content = tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"class","class",1108647146),"tab-content",cljs.core.map_indexed.call(null,mkcont,conts));return tailrecursion.hoplon.div.call(null,cljs.core.dissoc.call(null,attr,new cljs.core.Keyword(null,"state","state",1123661827)),tab_bar,content);
};
var tabs = function (var_args){
var args__2361__auto__ = null;if (arguments.length > 0) {
  args__2361__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return tabs__delegate.call(this,args__2361__auto__);};
tabs.cljs$lang$maxFixedArity = 0;
tabs.cljs$lang$applyTo = (function (arglist__11829){
var args__2361__auto__ = cljs.core.seq(arglist__11829);
return tabs__delegate(args__2361__auto__);
});
tabs.cljs$core$IFn$_invoke$arity$variadic = tabs__delegate;
return tabs;
})()
;
