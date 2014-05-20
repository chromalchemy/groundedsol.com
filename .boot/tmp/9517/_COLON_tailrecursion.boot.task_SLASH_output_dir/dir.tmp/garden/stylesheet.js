// Compiled by ClojureScript 0.0-2202
goog.provide('garden.stylesheet');
goog.require('cljs.core');
goog.require('garden.types');
goog.require('garden.types');
goog.require('garden.color');
goog.require('garden.color');
goog.require('garden.util');
goog.require('garden.util');
/**
* Create a rule function for the given selector. The `selector`
* argument must be valid selector (ie. a keyword, string, or symbol).
* Additional arguments may consist of extra selectors or
* declarations.
* 
* The returned function accepts any number of arguments which represent
* the rule's children.
* 
* Ex.
* (let [text-field (rule "[type="text"])]
* (text-field {:border ["1px" :solid "black"]}))
* ;; => ["[type="text"] {:boder ["1px" :solid "black"]}]
* @param {...*} var_args
*/
garden.stylesheet.rule = (function() { 
var rule__delegate = function (selector,more){if(!(((selector instanceof cljs.core.Keyword)) || (typeof selector === 'string') || ((selector instanceof cljs.core.Symbol))))
{throw cljs.core.ex_info.call(null,"Selector must be either a keyword, string, or symbol.",cljs.core.PersistentArrayMap.EMPTY);
} else
{return (function() { 
var G__205515__delegate = function (children){return cljs.core.into.call(null,cljs.core.apply.call(null,cljs.core.vector,selector,more),children);
};
var G__205515 = function (var_args){
var children = null;if (arguments.length > 0) {
  children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__205515__delegate.call(this,children);};
G__205515.cljs$lang$maxFixedArity = 0;
G__205515.cljs$lang$applyTo = (function (arglist__205516){
var children = cljs.core.seq(arglist__205516);
return G__205515__delegate(children);
});
G__205515.cljs$core$IFn$_invoke$arity$variadic = G__205515__delegate;
return G__205515;
})()
;
}
};
var rule = function (selector,var_args){
var more = null;if (arguments.length > 1) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return rule__delegate.call(this,selector,more);};
rule.cljs$lang$maxFixedArity = 1;
rule.cljs$lang$applyTo = (function (arglist__205517){
var selector = cljs.core.first(arglist__205517);
var more = cljs.core.rest(arglist__205517);
return rule__delegate(selector,more);
});
rule.cljs$core$IFn$_invoke$arity$variadic = rule__delegate;
return rule;
})()
;
garden.stylesheet.cssfn = (function cssfn(fn_name){return (function() { 
var G__205518__delegate = function (args){return (new garden.types.CSSFunction(fn_name,args));
};
var G__205518 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__205518__delegate.call(this,args);};
G__205518.cljs$lang$maxFixedArity = 0;
G__205518.cljs$lang$applyTo = (function (arglist__205519){
var args = cljs.core.seq(arglist__205519);
return G__205518__delegate(args);
});
G__205518.cljs$core$IFn$_invoke$arity$variadic = G__205518__delegate;
return G__205518;
})()
;
});
garden.stylesheet.at_rule = (function at_rule(identifier,value){return (new garden.types.CSSAtRule(identifier,value));
});
/**
* Create a CSS @font-face rule.
* @param {...*} var_args
*/
garden.stylesheet.at_font_face = (function() { 
var at_font_face__delegate = function (font_properties){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@font-face",font_properties], null);
};
var at_font_face = function (var_args){
var font_properties = null;if (arguments.length > 0) {
  font_properties = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return at_font_face__delegate.call(this,font_properties);};
at_font_face.cljs$lang$maxFixedArity = 0;
at_font_face.cljs$lang$applyTo = (function (arglist__205520){
var font_properties = cljs.core.seq(arglist__205520);
return at_font_face__delegate(font_properties);
});
at_font_face.cljs$core$IFn$_invoke$arity$variadic = at_font_face__delegate;
return at_font_face;
})()
;
/**
* Create a CSS @import rule.
* @param {...*} var_args
*/
garden.stylesheet.at_import = (function() {
var at_import = null;
var at_import__1 = (function (url){return garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"import","import",4124075799),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",1014020321),url,new cljs.core.Keyword(null,"media-queries","media-queries",3327326703),null], null));
});
var at_import__2 = (function() { 
var G__205521__delegate = function (url,media_queries){return garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"import","import",4124075799),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",1014020321),url,new cljs.core.Keyword(null,"media-queries","media-queries",3327326703),media_queries], null));
};
var G__205521 = function (url,var_args){
var media_queries = null;if (arguments.length > 1) {
  media_queries = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__205521__delegate.call(this,url,media_queries);};
G__205521.cljs$lang$maxFixedArity = 1;
G__205521.cljs$lang$applyTo = (function (arglist__205522){
var url = cljs.core.first(arglist__205522);
var media_queries = cljs.core.rest(arglist__205522);
return G__205521__delegate(url,media_queries);
});
G__205521.cljs$core$IFn$_invoke$arity$variadic = G__205521__delegate;
return G__205521;
})()
;
at_import = function(url,var_args){
var media_queries = var_args;
switch(arguments.length){
case 1:
return at_import__1.call(this,url);
default:
return at_import__2.cljs$core$IFn$_invoke$arity$variadic(url, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
at_import.cljs$lang$maxFixedArity = 1;
at_import.cljs$lang$applyTo = at_import__2.cljs$lang$applyTo;
at_import.cljs$core$IFn$_invoke$arity$1 = at_import__1;
at_import.cljs$core$IFn$_invoke$arity$variadic = at_import__2.cljs$core$IFn$_invoke$arity$variadic;
return at_import;
})()
;
/**
* Create a CSS @media rule.
* @param {...*} var_args
*/
garden.stylesheet.at_media = (function() { 
var at_media__delegate = function (media_queries,rules){return garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"media","media",1117676374),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"media-queries","media-queries",3327326703),media_queries,new cljs.core.Keyword(null,"rules","rules",1122778217),rules], null));
};
var at_media = function (media_queries,var_args){
var rules = null;if (arguments.length > 1) {
  rules = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return at_media__delegate.call(this,media_queries,rules);};
at_media.cljs$lang$maxFixedArity = 1;
at_media.cljs$lang$applyTo = (function (arglist__205523){
var media_queries = cljs.core.first(arglist__205523);
var rules = cljs.core.rest(arglist__205523);
return at_media__delegate(media_queries,rules);
});
at_media.cljs$core$IFn$_invoke$arity$variadic = at_media__delegate;
return at_media;
})()
;
/**
* Create a CSS @keyframes rule.
* @param {...*} var_args
*/
garden.stylesheet.at_keyframes = (function() { 
var at_keyframes__delegate = function (identifier,frames){return garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"keyframes","keyframes",3862205239),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"identifier","identifier",3690438683),identifier,new cljs.core.Keyword(null,"frames","frames",4042356760),frames], null));
};
var at_keyframes = function (identifier,var_args){
var frames = null;if (arguments.length > 1) {
  frames = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return at_keyframes__delegate.call(this,identifier,frames);};
at_keyframes.cljs$lang$maxFixedArity = 1;
at_keyframes.cljs$lang$applyTo = (function (arglist__205524){
var identifier = cljs.core.first(arglist__205524);
var frames = cljs.core.rest(arglist__205524);
return at_keyframes__delegate(identifier,frames);
});
at_keyframes.cljs$core$IFn$_invoke$arity$variadic = at_keyframes__delegate;
return at_keyframes;
})()
;
/**
* Create a color from RGB values.
*/
garden.stylesheet.rgb = (function rgb(r,g,b){return garden.color.rgb.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null));
});
/**
* Create a color from HSL values.
*/
garden.stylesheet.hsl = (function hsl(h,s,l){return garden.color.hsl.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l], null));
});
