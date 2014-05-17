// Compiled by ClojureScript 0.0-2156
goog.provide('garden.arithmetic');
goog.require('cljs.core');
goog.require('garden.units');
goog.require('garden.color');
goog.require('garden.color');
goog.require('garden.color');
goog.require('garden.units');
goog.require('garden.units');
/**
* Generic addition operator. Transparently computes the sum of
* `CSSUnit`s,`CSSColor`s, and numbers.
* @param {...*} var_args
*/
garden.arithmetic._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___0 = (function (){return 0;
});
var _PLUS___1 = (function (x){return x;
});
var _PLUS___2 = (function (x,y){if(garden.units.unit_QMARK_.call(null,x))
{return garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"unit","unit",1017498870).cljs$core$IFn$_invoke$arity$1(x)).call(null,x,y);
} else
{if(garden.color.color_QMARK_.call(null,x))
{return garden.color.color_PLUS_.call(null,x,y);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if((garden.units.unit_QMARK_.call(null,y)) || (garden.color.color_QMARK_.call(null,y)))
{return _PLUS_.call(null,y,x);
} else
{return (x + y);
}
} else
{return null;
}
}
}
});
var _PLUS___3 = (function() { 
var G__14577__delegate = function (x,y,more){return cljs.core.reduce.call(null,_PLUS_,_PLUS_.call(null,x,y),more);
};
var G__14577 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__14577__delegate.call(this,x,y,more);};
G__14577.cljs$lang$maxFixedArity = 2;
G__14577.cljs$lang$applyTo = (function (arglist__14578){
var x = cljs.core.first(arglist__14578);
arglist__14578 = cljs.core.next(arglist__14578);
var y = cljs.core.first(arglist__14578);
var more = cljs.core.rest(arglist__14578);
return G__14577__delegate(x,y,more);
});
G__14577.cljs$core$IFn$_invoke$arity$variadic = G__14577__delegate;
return G__14577;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _PLUS___0.call(this);
case 1:
return _PLUS___1.call(this,x);
case 2:
return _PLUS___2.call(this,x,y);
default:
return _PLUS___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___3.cljs$lang$applyTo;
_PLUS_.cljs$core$IFn$_invoke$arity$0 = _PLUS___0;
_PLUS_.cljs$core$IFn$_invoke$arity$1 = _PLUS___1;
_PLUS_.cljs$core$IFn$_invoke$arity$2 = _PLUS___2;
_PLUS_.cljs$core$IFn$_invoke$arity$variadic = _PLUS___3.cljs$core$IFn$_invoke$arity$variadic;
return _PLUS_;
})()
;
/**
* Generic subtraction operator. Transparently computes the difference
* between `CSSUnit`s, `CSSColor`s, and numbers.
* @param {...*} var_args
*/
garden.arithmetic._ = (function() {
var _ = null;
var ___1 = (function (x){if(garden.units.unit_QMARK_.call(null,x))
{return cljs.core.update_in.call(null,x,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"magnitude","magnitude",3292087682)], null),cljs.core._);
} else
{if(garden.color.color_QMARK_.call(null,x))
{return x;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return (- x);
} else
{return null;
}
}
}
});
var ___2 = (function (x,y){if(garden.units.unit_QMARK_.call(null,x))
{return garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"unit","unit",1017498870).cljs$core$IFn$_invoke$arity$1(x)).call(null,x,y);
} else
{if(garden.color.color_QMARK_.call(null,x))
{return garden.color.color_.call(null,x,y);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(garden.units.unit_QMARK_.call(null,y))
{var map__14580 = y;var map__14580__$1 = ((cljs.core.seq_QMARK_.call(null,map__14580))?cljs.core.apply.call(null,cljs.core.hash_map,map__14580):map__14580);var m = cljs.core.get.call(null,map__14580__$1,new cljs.core.Keyword(null,"magnitude","magnitude",3292087682));return cljs.core.assoc.call(null,y,new cljs.core.Keyword(null,"magnitude","magnitude",3292087682),(x - m));
} else
{if(garden.color.color_QMARK_.call(null,y))
{return garden.color.color_.call(null,x,y);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return (x - y);
} else
{return null;
}
}
}
} else
{return null;
}
}
}
});
var ___3 = (function() { 
var G__14581__delegate = function (x,y,more){return cljs.core.reduce.call(null,_,_.call(null,x,y),more);
};
var G__14581 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__14581__delegate.call(this,x,y,more);};
G__14581.cljs$lang$maxFixedArity = 2;
G__14581.cljs$lang$applyTo = (function (arglist__14582){
var x = cljs.core.first(arglist__14582);
arglist__14582 = cljs.core.next(arglist__14582);
var y = cljs.core.first(arglist__14582);
var more = cljs.core.rest(arglist__14582);
return G__14581__delegate(x,y,more);
});
G__14581.cljs$core$IFn$_invoke$arity$variadic = G__14581__delegate;
return G__14581;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return ___1.call(this,x);
case 2:
return ___2.call(this,x,y);
default:
return ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___3.cljs$lang$applyTo;
_.cljs$core$IFn$_invoke$arity$1 = ___1;
_.cljs$core$IFn$_invoke$arity$2 = ___2;
_.cljs$core$IFn$_invoke$arity$variadic = ___3.cljs$core$IFn$_invoke$arity$variadic;
return _;
})()
;
/**
* Generic multiplication operation. Transparently computes the product
* between `CSSUnit`s, `CSSColor`s, and numbers.
* @param {...*} var_args
*/
garden.arithmetic._STAR_ = (function() {
var _STAR_ = null;
var _STAR___0 = (function (){return 1;
});
var _STAR___1 = (function (x){return x;
});
var _STAR___2 = (function (x,y){if(garden.units.unit_QMARK_.call(null,x))
{return garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"unit","unit",1017498870).cljs$core$IFn$_invoke$arity$1(x)).call(null,x,y);
} else
{if(garden.color.color_QMARK_.call(null,x))
{return garden.color.color_STAR_.call(null,x,y);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if((garden.units.unit_QMARK_.call(null,y)) || (garden.color.color_QMARK_.call(null,y)))
{return _STAR_.call(null,y,x);
} else
{return (x * y);
}
} else
{return null;
}
}
}
});
var _STAR___3 = (function() { 
var G__14583__delegate = function (x,y,more){return cljs.core.reduce.call(null,_STAR_,_STAR_.call(null,x,y),more);
};
var G__14583 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__14583__delegate.call(this,x,y,more);};
G__14583.cljs$lang$maxFixedArity = 2;
G__14583.cljs$lang$applyTo = (function (arglist__14584){
var x = cljs.core.first(arglist__14584);
arglist__14584 = cljs.core.next(arglist__14584);
var y = cljs.core.first(arglist__14584);
var more = cljs.core.rest(arglist__14584);
return G__14583__delegate(x,y,more);
});
G__14583.cljs$core$IFn$_invoke$arity$variadic = G__14583__delegate;
return G__14583;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _STAR___0.call(this);
case 1:
return _STAR___1.call(this,x);
case 2:
return _STAR___2.call(this,x,y);
default:
return _STAR___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___3.cljs$lang$applyTo;
_STAR_.cljs$core$IFn$_invoke$arity$0 = _STAR___0;
_STAR_.cljs$core$IFn$_invoke$arity$1 = _STAR___1;
_STAR_.cljs$core$IFn$_invoke$arity$2 = _STAR___2;
_STAR_.cljs$core$IFn$_invoke$arity$variadic = _STAR___3.cljs$core$IFn$_invoke$arity$variadic;
return _STAR_;
})()
;
/**
* Generic division operation. Transparently computes the quotient
* between `CSSUnit`s, `CSSColor`s, and numbers.
* @param {...*} var_args
*/
garden.arithmetic._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___1 = (function (x){if(garden.units.unit_QMARK_.call(null,x))
{return cljs.core.update_in.call(null,x,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"magnitude","magnitude",3292087682)], null),cljs.core._SLASH_);
} else
{if(garden.color.color_QMARK_.call(null,x))
{return garden.color.color_div.call(null,x);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return (1 / x);
} else
{return null;
}
}
}
});
var _SLASH___2 = (function (x,y){if(garden.units.unit_QMARK_.call(null,x))
{return garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"unit","unit",1017498870).cljs$core$IFn$_invoke$arity$1(x)).call(null,x,y);
} else
{if(garden.color.color_QMARK_.call(null,x))
{return garden.color.color_div.call(null,x,y);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(garden.units.unit_QMARK_.call(null,y))
{var map__14586 = y;var map__14586__$1 = ((cljs.core.seq_QMARK_.call(null,map__14586))?cljs.core.apply.call(null,cljs.core.hash_map,map__14586):map__14586);var m = cljs.core.get.call(null,map__14586__$1,new cljs.core.Keyword(null,"magnitude","magnitude",3292087682));return cljs.core.assoc.call(null,y,new cljs.core.Keyword(null,"magnitude","magnitude",3292087682),(x / m));
} else
{if(garden.color.color_QMARK_.call(null,y))
{return garden.color.color_div.call(null,x,y);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return (x / y);
} else
{return null;
}
}
}
} else
{return null;
}
}
}
});
var _SLASH___3 = (function() { 
var G__14587__delegate = function (x,y,more){return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__14587 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__14587__delegate.call(this,x,y,more);};
G__14587.cljs$lang$maxFixedArity = 2;
G__14587.cljs$lang$applyTo = (function (arglist__14588){
var x = cljs.core.first(arglist__14588);
arglist__14588 = cljs.core.next(arglist__14588);
var y = cljs.core.first(arglist__14588);
var more = cljs.core.rest(arglist__14588);
return G__14587__delegate(x,y,more);
});
G__14587.cljs$core$IFn$_invoke$arity$variadic = G__14587__delegate;
return G__14587;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _SLASH___1.call(this,x);
case 2:
return _SLASH___2.call(this,x,y);
default:
return _SLASH___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___3.cljs$lang$applyTo;
_SLASH_.cljs$core$IFn$_invoke$arity$1 = _SLASH___1;
_SLASH_.cljs$core$IFn$_invoke$arity$2 = _SLASH___2;
_SLASH_.cljs$core$IFn$_invoke$arity$variadic = _SLASH___3.cljs$core$IFn$_invoke$arity$variadic;
return _SLASH_;
})()
;
