// Compiled by ClojureScript 0.0-2202
goog.provide('tailrecursion.hoplon.util');
goog.require('cljs.core');
goog.require('tailrecursion.javelin');
goog.require('cljs.reader');
goog.require('tailrecursion.javelin');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('clojure.string');
tailrecursion.hoplon.util.nth = (function nth(coll,n){try{return nth.call(null,coll,n);
}catch (e205864){if((e205864 instanceof Error))
{var e = e205864;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e205864;
} else
{return null;
}
}
}});
tailrecursion.hoplon.util.name = (function name(x){try{return name.call(null,x);
}catch (e205866){if((e205866 instanceof Error))
{var e = e205866;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e205866;
} else
{return null;
}
}
}});
tailrecursion.hoplon.util.interval = (function interval(f,msec){return window.setInterval(f,msec);
});
tailrecursion.hoplon.util.route_cell = (function route_cell(msec,default$){var hash = (function (){return window.location.hash;
});var ret = tailrecursion.javelin.cell.call(null,hash.call(null));tailrecursion.hoplon.util.interval.call(null,((function (ret,hash){
return (function (){var h = hash.call(null);return cljs.core.reset_BANG_.call(null,ret,((cljs.core.empty_QMARK_.call(null,h))?default$:h));
});})(ret,hash))
,msec);
return ret;
});
var qcache_205874 = cljs.core.atom.call(null,new cljs.core.Keyword("tailrecursion.hoplon.util","none","tailrecursion.hoplon.util/none",3610238792));/**
* @param {...*} var_args
*/
tailrecursion.hoplon.util.query = ((function (qcache_205874){
return (function() { 
var query__delegate = function (p__205871){var vec__205873 = p__205871;var k = cljs.core.nth.call(null,vec__205873,0,null);var _ = cljs.core.nthnext.call(null,vec__205873,1);var args = vec__205873;if(!(cljs.core._EQ_.call(null,new cljs.core.Keyword("tailrecursion.hoplon.util","none","tailrecursion.hoplon.util/none",3610238792),cljs.core.deref.call(null,qcache_205874))))
{if(cljs.core.truth_(k))
{return cljs.core.deref.call(null,qcache_205874).call(null,tailrecursion.hoplon.util.name.call(null,k));
} else
{return cljs.core.deref.call(null,qcache_205874);
}
} else
{var s = window.location.search;if(cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,s)))
{var v = clojure.string.split.call(null,clojure.string.replace.call(null,s,/^\?/,""),/[&]/);var m = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapv.call(null,((function (v,s,vec__205873,k,_,args,qcache_205874){
return (function (p1__205870_SHARP_){if((cljs.core.count.call(null,p1__205870_SHARP_) < 2))
{return cljs.core.conj.call(null,p1__205870_SHARP_,"");
} else
{return p1__205870_SHARP_;
}
});})(v,s,vec__205873,k,_,args,qcache_205874))
,cljs.core.remove.call(null,((function (v,s,vec__205873,k,_,args,qcache_205874){
return (function (p1__205869_SHARP_){return (cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null),p1__205869_SHARP_)) || (cljs.core._EQ_.call(null,0,cljs.core.count.call(null,p1__205869_SHARP_))) || ((2 < cljs.core.count.call(null,p1__205869_SHARP_)));
});})(v,s,vec__205873,k,_,args,qcache_205874))
,cljs.core.mapv.call(null,((function (v,s,vec__205873,k,_,args,qcache_205874){
return (function (p1__205868_SHARP_){return cljs.core.mapv.call(null,decodeURIComponent,p1__205868_SHARP_);
});})(v,s,vec__205873,k,_,args,qcache_205874))
,cljs.core.mapv.call(null,((function (v,s,vec__205873,k,_,args,qcache_205874){
return (function (p1__205867_SHARP_){return clojure.string.split.call(null,p1__205867_SHARP_,/[=]/);
});})(v,s,vec__205873,k,_,args,qcache_205874))
,v)))));cljs.core.reset_BANG_.call(null,qcache_205874,m);
return cljs.core.apply.call(null,query,args);
} else
{return null;
}
}
};
var query = function (var_args){
var p__205871 = null;if (arguments.length > 0) {
  p__205871 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return query__delegate.call(this,p__205871);};
query.cljs$lang$maxFixedArity = 0;
query.cljs$lang$applyTo = (function (arglist__205875){
var p__205871 = cljs.core.seq(arglist__205875);
return query__delegate(p__205871);
});
query.cljs$core$IFn$_invoke$arity$variadic = query__delegate;
return query;
})()
;})(qcache_205874))
;
tailrecursion.hoplon.util.pluralize = (function pluralize(word,count){return [cljs.core.str(word),cljs.core.str(((cljs.core.not_EQ_.call(null,1,count))?"s":null))].join('');
});
tailrecursion.hoplon.util.capitalize = (function capitalize(s){if(typeof s === 'string')
{return clojure.string.capitalize.call(null,s);
} else
{return null;
}
});
tailrecursion.hoplon.util.str_partition = (function str_partition(re,s){return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.apply,cljs.core.str),cljs.core.partition_by.call(null,(function (p1__205876_SHARP_){if(cljs.core.truth_(cljs.core.re_matches.call(null,re,p1__205876_SHARP_)))
{return true;
} else
{return null;
}
}),s));
});
tailrecursion.hoplon.util.capitalize_name = (function capitalize_name(s){return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,tailrecursion.hoplon.util.capitalize,tailrecursion.hoplon.util.str_partition.call(null,/[a-zA-Z]/,s)));
});
tailrecursion.hoplon.util.format_date = (function format_date(date_str){var vec__205878 = cljs.core.mapv.call(null,Number,clojure.string.split.call(null,date_str,/-/));var y = cljs.core.nth.call(null,vec__205878,0,null);var m = cljs.core.nth.call(null,vec__205878,1,null);var d = cljs.core.nth.call(null,vec__205878,2,null);var months = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["January","February","March","April","May","June","July","August","September","October","November","December"], null);var i = (m - 1);if((i < 0))
{return "<< Sorry, there was an error computing the date. >>";
} else
{return [cljs.core.str(tailrecursion.hoplon.util.nth.call(null,months,(m - 1))),cljs.core.str(" "),cljs.core.str(d),cljs.core.str(", "),cljs.core.str(y)].join('');
}
});
