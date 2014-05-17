// Compiled by ClojureScript 0.0-2156
goog.provide('tailrecursion.hoplon.util');
goog.require('cljs.core');
goog.require('tailrecursion.javelin');
goog.require('cljs.reader');
goog.require('tailrecursion.javelin');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('clojure.string');
tailrecursion.hoplon.util.nth = (function nth(coll,n){try{return nth.call(null,coll,n);
}catch (e14358){if((e14358 instanceof Error))
{var e = e14358;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14358;
} else
{return null;
}
}
}});
tailrecursion.hoplon.util.name = (function name(x){try{return name.call(null,x);
}catch (e14360){if((e14360 instanceof Error))
{var e = e14360;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14360;
} else
{return null;
}
}
}});
tailrecursion.hoplon.util.interval = (function interval(f,msec){return window.setInterval(f,msec);
});
tailrecursion.hoplon.util.route_cell = (function route_cell(msec,default$){var hash = (function (){return window.location.hash;
});var ret = tailrecursion.javelin.cell.call(null,hash.call(null));tailrecursion.hoplon.util.interval.call(null,(function (){var h = hash.call(null);return cljs.core.reset_BANG_.call(null,ret,((cljs.core.empty_QMARK_.call(null,h))?default$:h));
}),msec);
return ret;
});
var qcache_14368 = cljs.core.atom.call(null,new cljs.core.Keyword("tailrecursion.hoplon.util","none","tailrecursion.hoplon.util/none",3610238792));/**
* @param {...*} var_args
*/
tailrecursion.hoplon.util.query = (function() { 
var query__delegate = function (p__14365){var vec__14367 = p__14365;var k = cljs.core.nth.call(null,vec__14367,0,null);var _ = cljs.core.nthnext.call(null,vec__14367,1);var args = vec__14367;if(!(cljs.core._EQ_.call(null,new cljs.core.Keyword("tailrecursion.hoplon.util","none","tailrecursion.hoplon.util/none",3610238792),cljs.core.deref.call(null,qcache_14368))))
{if(cljs.core.truth_(k))
{return cljs.core.deref.call(null,qcache_14368).call(null,tailrecursion.hoplon.util.name.call(null,k));
} else
{return cljs.core.deref.call(null,qcache_14368);
}
} else
{var s = window.location.search;if(cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,s)))
{var v = clojure.string.split.call(null,clojure.string.replace.call(null,s,/^\?/,""),/[&]/);var m = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapv.call(null,((function (v){
return (function (p1__14364_SHARP_){if((cljs.core.count.call(null,p1__14364_SHARP_) < 2))
{return cljs.core.conj.call(null,p1__14364_SHARP_,"");
} else
{return p1__14364_SHARP_;
}
});})(v))
,cljs.core.remove.call(null,((function (v){
return (function (p1__14363_SHARP_){return (cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null),p1__14363_SHARP_)) || (cljs.core._EQ_.call(null,0,cljs.core.count.call(null,p1__14363_SHARP_))) || ((2 < cljs.core.count.call(null,p1__14363_SHARP_)));
});})(v))
,cljs.core.mapv.call(null,((function (v){
return (function (p1__14362_SHARP_){return cljs.core.mapv.call(null,decodeURIComponent,p1__14362_SHARP_);
});})(v))
,cljs.core.mapv.call(null,((function (v){
return (function (p1__14361_SHARP_){return clojure.string.split.call(null,p1__14361_SHARP_,/[=]/);
});})(v))
,v)))));cljs.core.reset_BANG_.call(null,qcache_14368,m);
return cljs.core.apply.call(null,query,args);
} else
{return null;
}
}
};
var query = function (var_args){
var p__14365 = null;if (arguments.length > 0) {
  p__14365 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return query__delegate.call(this,p__14365);};
query.cljs$lang$maxFixedArity = 0;
query.cljs$lang$applyTo = (function (arglist__14369){
var p__14365 = cljs.core.seq(arglist__14369);
return query__delegate(p__14365);
});
query.cljs$core$IFn$_invoke$arity$variadic = query__delegate;
return query;
})()
;
tailrecursion.hoplon.util.pluralize = (function pluralize(word,count){return [cljs.core.str(word),cljs.core.str(((cljs.core.not_EQ_.call(null,1,count))?"s":null))].join('');
});
tailrecursion.hoplon.util.capitalize = (function capitalize(s){if(typeof s === 'string')
{return clojure.string.capitalize.call(null,s);
} else
{return null;
}
});
tailrecursion.hoplon.util.str_partition = (function str_partition(re,s){return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.apply,cljs.core.str),cljs.core.partition_by.call(null,(function (p1__14370_SHARP_){if(cljs.core.truth_(cljs.core.re_matches.call(null,re,p1__14370_SHARP_)))
{return true;
} else
{return null;
}
}),s));
});
tailrecursion.hoplon.util.capitalize_name = (function capitalize_name(s){return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,tailrecursion.hoplon.util.capitalize,tailrecursion.hoplon.util.str_partition.call(null,/[a-zA-Z]/,s)));
});
tailrecursion.hoplon.util.format_date = (function format_date(date_str){var vec__14372 = cljs.core.mapv.call(null,Number,clojure.string.split.call(null,date_str,/-/));var y = cljs.core.nth.call(null,vec__14372,0,null);var m = cljs.core.nth.call(null,vec__14372,1,null);var d = cljs.core.nth.call(null,vec__14372,2,null);var months = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["January","February","March","April","May","June","July","August","September","October","November","December"], null);var i = (m - 1);if((i < 0))
{return "<< Sorry, there was an error computing the date. >>";
} else
{return [cljs.core.str(tailrecursion.hoplon.util.nth.call(null,months,(m - 1))),cljs.core.str(" "),cljs.core.str(d),cljs.core.str(", "),cljs.core.str(y)].join('');
}
});
