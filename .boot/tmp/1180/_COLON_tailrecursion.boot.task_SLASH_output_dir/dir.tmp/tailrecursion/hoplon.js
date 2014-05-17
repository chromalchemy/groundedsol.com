// Compiled by ClojureScript 0.0-2156
goog.provide('tailrecursion.hoplon');
goog.require('cljs.core');
goog.require('tailrecursion.javelin');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('tailrecursion.javelin');
tailrecursion.hoplon.is_ie8 = cljs.core.not.call(null,(window["Node"]));
tailrecursion.hoplon.node_QMARK_ = ((cljs.core.not.call(null,tailrecursion.hoplon.is_ie8))?(function (p1__13945_SHARP_){return (p1__13945_SHARP_ instanceof Node);
}):(function (p1__13946_SHARP_){try{return p1__13946_SHARP_.nodeType;
}catch (e13947){if((e13947 instanceof Error))
{var _ = e13947;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13947;
} else
{return null;
}
}
}}));
tailrecursion.hoplon.vector_QMARK__STAR_ = ((cljs.core.not.call(null,tailrecursion.hoplon.is_ie8))?cljs.core.vector_QMARK_:(function (p1__13948_SHARP_){try{return cljs.core.vector_QMARK_.call(null,p1__13948_SHARP_);
}catch (e13949){if((e13949 instanceof Error))
{var _ = e13949;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13949;
} else
{return null;
}
}
}}));
tailrecursion.hoplon.seq_QMARK__STAR_ = ((cljs.core.not.call(null,tailrecursion.hoplon.is_ie8))?cljs.core.seq_QMARK_:(function (p1__13950_SHARP_){try{return cljs.core.seq_QMARK_.call(null,p1__13950_SHARP_);
}catch (e13951){if((e13951 instanceof Error))
{var _ = e13951;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13951;
} else
{return null;
}
}
}}));
cljs.core.set_print_fn_BANG_.call(null,(function (p1__13952_SHARP_){if(cljs.core.truth_((function (){var and__9766__auto__ = console;if(cljs.core.truth_(and__9766__auto__))
{return console.log;
} else
{return and__9766__auto__;
}
})()))
{return console.log(p1__13952_SHARP_);
} else
{return null;
}
}));
tailrecursion.hoplon.safe_nth = (function() {
var safe_nth = null;
var safe_nth__2 = (function (coll,index){return safe_nth.call(null,coll,index,null);
});
var safe_nth__3 = (function (coll,index,not_found){try{return cljs.core.nth.call(null,coll,index,not_found);
}catch (e13954){if((e13954 instanceof Error))
{var _ = e13954;return not_found;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13954;
} else
{return null;
}
}
}});
safe_nth = function(coll,index,not_found){
switch(arguments.length){
case 2:
return safe_nth__2.call(this,coll,index);
case 3:
return safe_nth__3.call(this,coll,index,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
safe_nth.cljs$core$IFn$_invoke$arity$2 = safe_nth__2;
safe_nth.cljs$core$IFn$_invoke$arity$3 = safe_nth__3;
return safe_nth;
})()
;
tailrecursion.hoplon.timeout = (function() {
var timeout = null;
var timeout__1 = (function (f){return timeout.call(null,f,0);
});
var timeout__2 = (function (f,t){return window.setTimeout(f,t);
});
timeout = function(f,t){
switch(arguments.length){
case 1:
return timeout__1.call(this,f);
case 2:
return timeout__2.call(this,f,t);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
timeout.cljs$core$IFn$_invoke$arity$1 = timeout__1;
timeout.cljs$core$IFn$_invoke$arity$2 = timeout__2;
return timeout;
})()
;
tailrecursion.hoplon.unsplice = (function unsplice(forms){return cljs.core.mapcat.call(null,(function (p1__13955_SHARP_){if(cljs.core.truth_((function (){var or__9778__auto__ = tailrecursion.hoplon.seq_QMARK__STAR_.call(null,p1__13955_SHARP_);if(cljs.core.truth_(or__9778__auto__))
{return or__9778__auto__;
} else
{return tailrecursion.hoplon.vector_QMARK__STAR_.call(null,p1__13955_SHARP_);
}
})()))
{return unsplice.call(null,p1__13955_SHARP_);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13955_SHARP_], null);
}
}),forms);
});
tailrecursion.hoplon.when_dom = (function when_dom(this$,f){return tailrecursion.hoplon.timeout.call(null,(function doit(){if(cljs.core.truth_(document.documentElement.contains(this$)))
{return f.call(null);
} else
{return tailrecursion.hoplon.timeout.call(null,doit,20);
}
}));
});
tailrecursion.hoplon.parse_args = (function parse_args(p__13958){var vec__13960 = p__13958;var head = cljs.core.nth.call(null,vec__13960,0,null);var tail = cljs.core.nthnext.call(null,vec__13960,1);var args = vec__13960;var kw1_QMARK_ = cljs.core.comp.call(null,cljs.core.keyword_QMARK_,cljs.core.first);var mkkw = ((function (kw1_QMARK_){
return (function (p1__13956_SHARP_){return cljs.core.map.call(null,cljs.core.vec,cljs.core.take_while.call(null,kw1_QMARK_,cljs.core.partition.call(null,2,p1__13956_SHARP_)));
});})(kw1_QMARK_))
;var drkw = ((function (kw1_QMARK_,mkkw){
return (function (p1__13957_SHARP_){return cljs.core.mapcat.call(null,cljs.core.identity,cljs.core.drop_while.call(null,kw1_QMARK_,cljs.core.partition.call(null,2,2,cljs.core.PersistentVector.EMPTY,p1__13957_SHARP_)));
});})(kw1_QMARK_,mkkw))
;if(cljs.core.map_QMARK_.call(null,head))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [head,tail], null);
} else
{if((head instanceof cljs.core.Keyword))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,mkkw.call(null,args)),drkw.call(null,args)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args], null);
} else
{return null;
}
}
}
});
tailrecursion.hoplon.add_attributes_BANG_ = (function add_attributes_BANG_(this$,attr){var key_STAR_ = (function (p1__13962_SHARP_,p2__13961_SHARP_){var p = p2__13961_SHARP_.substr(0,3);return cljs.core.keyword.call(null,((!(cljs.core._EQ_.call(null,p1__13962_SHARP_,p)))?p2__13961_SHARP_:p2__13961_SHARP_.substr(3)));
});var dokey = cljs.core.partial.call(null,key_STAR_,"do-");var onkey = cljs.core.partial.call(null,key_STAR_,"on-");var dos = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ons = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var addcls = ((function (key_STAR_,dokey,onkey,dos,ons){
return (function (p1__13963_SHARP_,p2__13964_SHARP_){return clojure.string.join.call(null," ",cljs.core.into.call(null,cljs.core.set.call(null,clojure.string.split.call(null,p1__13963_SHARP_,/ /)),clojure.string.split.call(null,p2__13964_SHARP_,/ /)));
});})(key_STAR_,dokey,onkey,dos,ons))
;var seq__13995_14021 = cljs.core.seq.call(null,attr);var chunk__13996_14022 = null;var count__13997_14023 = 0;var i__13998_14024 = 0;while(true){
if((i__13998_14024 < count__13997_14023))
{var vec__13999_14025 = cljs.core._nth.call(null,chunk__13996_14022,i__13998_14024);var k_14026 = cljs.core.nth.call(null,vec__13999_14025,0,null);var v_14027 = cljs.core.nth.call(null,vec__13999_14025,1,null);var k_14028__$1 = cljs.core.name.call(null,k_14026);var e_14029 = jQuery(this$);if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,v_14027)))
{cljs.core.swap_BANG_.call(null,dos,cljs.core.assoc,dokey.call(null,k_14028__$1),v_14027);
} else
{if(cljs.core.fn_QMARK_.call(null,v_14027))
{cljs.core.swap_BANG_.call(null,ons,cljs.core.assoc,onkey.call(null,k_14028__$1),v_14027);
} else
{if(cljs.core._EQ_.call(null,k_14028__$1,"class"))
{var seq__14000_14030 = cljs.core.seq.call(null,clojure.string.split.call(null,v_14027,/ /));var chunk__14001_14031 = null;var count__14002_14032 = 0;var i__14003_14033 = 0;while(true){
if((i__14003_14033 < count__14002_14032))
{var cls_14034 = cljs.core._nth.call(null,chunk__14001_14031,i__14003_14033);e_14029.addClass(cls_14034);
{
var G__14035 = seq__14000_14030;
var G__14036 = chunk__14001_14031;
var G__14037 = count__14002_14032;
var G__14038 = (i__14003_14033 + 1);
seq__14000_14030 = G__14035;
chunk__14001_14031 = G__14036;
count__14002_14032 = G__14037;
i__14003_14033 = G__14038;
continue;
}
} else
{var temp__4092__auto___14039 = cljs.core.seq.call(null,seq__14000_14030);if(temp__4092__auto___14039)
{var seq__14000_14040__$1 = temp__4092__auto___14039;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14000_14040__$1))
{var c__10526__auto___14041 = cljs.core.chunk_first.call(null,seq__14000_14040__$1);{
var G__14042 = cljs.core.chunk_rest.call(null,seq__14000_14040__$1);
var G__14043 = c__10526__auto___14041;
var G__14044 = cljs.core.count.call(null,c__10526__auto___14041);
var G__14045 = 0;
seq__14000_14030 = G__14042;
chunk__14001_14031 = G__14043;
count__14002_14032 = G__14044;
i__14003_14033 = G__14045;
continue;
}
} else
{var cls_14046 = cljs.core.first.call(null,seq__14000_14040__$1);e_14029.addClass(cls_14046);
{
var G__14047 = cljs.core.next.call(null,seq__14000_14040__$1);
var G__14048 = null;
var G__14049 = 0;
var G__14050 = 0;
seq__14000_14030 = G__14047;
chunk__14001_14031 = G__14048;
count__14002_14032 = G__14049;
i__14003_14033 = G__14050;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,k_14028__$1,"css"))
{e_14029.css(cljs.core.clj__GT_js.call(null,v_14027));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core._EQ_.call(null,false,v_14027))
{e_14029.removeAttr(k_14028__$1);
} else
{if(cljs.core._EQ_.call(null,true,v_14027))
{e_14029.attr(k_14028__$1,k_14028__$1);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{e_14029.attr(k_14028__$1,[cljs.core.str(v_14027)].join(''));
} else
{}
}
}
} else
{}
}
}
}
}
{
var G__14051 = seq__13995_14021;
var G__14052 = chunk__13996_14022;
var G__14053 = count__13997_14023;
var G__14054 = (i__13998_14024 + 1);
seq__13995_14021 = G__14051;
chunk__13996_14022 = G__14052;
count__13997_14023 = G__14053;
i__13998_14024 = G__14054;
continue;
}
} else
{var temp__4092__auto___14055 = cljs.core.seq.call(null,seq__13995_14021);if(temp__4092__auto___14055)
{var seq__13995_14056__$1 = temp__4092__auto___14055;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13995_14056__$1))
{var c__10526__auto___14057 = cljs.core.chunk_first.call(null,seq__13995_14056__$1);{
var G__14058 = cljs.core.chunk_rest.call(null,seq__13995_14056__$1);
var G__14059 = c__10526__auto___14057;
var G__14060 = cljs.core.count.call(null,c__10526__auto___14057);
var G__14061 = 0;
seq__13995_14021 = G__14058;
chunk__13996_14022 = G__14059;
count__13997_14023 = G__14060;
i__13998_14024 = G__14061;
continue;
}
} else
{var vec__14004_14062 = cljs.core.first.call(null,seq__13995_14056__$1);var k_14063 = cljs.core.nth.call(null,vec__14004_14062,0,null);var v_14064 = cljs.core.nth.call(null,vec__14004_14062,1,null);var k_14065__$1 = cljs.core.name.call(null,k_14063);var e_14066 = jQuery(this$);if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,v_14064)))
{cljs.core.swap_BANG_.call(null,dos,cljs.core.assoc,dokey.call(null,k_14065__$1),v_14064);
} else
{if(cljs.core.fn_QMARK_.call(null,v_14064))
{cljs.core.swap_BANG_.call(null,ons,cljs.core.assoc,onkey.call(null,k_14065__$1),v_14064);
} else
{if(cljs.core._EQ_.call(null,k_14065__$1,"class"))
{var seq__14005_14067 = cljs.core.seq.call(null,clojure.string.split.call(null,v_14064,/ /));var chunk__14006_14068 = null;var count__14007_14069 = 0;var i__14008_14070 = 0;while(true){
if((i__14008_14070 < count__14007_14069))
{var cls_14071 = cljs.core._nth.call(null,chunk__14006_14068,i__14008_14070);e_14066.addClass(cls_14071);
{
var G__14072 = seq__14005_14067;
var G__14073 = chunk__14006_14068;
var G__14074 = count__14007_14069;
var G__14075 = (i__14008_14070 + 1);
seq__14005_14067 = G__14072;
chunk__14006_14068 = G__14073;
count__14007_14069 = G__14074;
i__14008_14070 = G__14075;
continue;
}
} else
{var temp__4092__auto___14076__$1 = cljs.core.seq.call(null,seq__14005_14067);if(temp__4092__auto___14076__$1)
{var seq__14005_14077__$1 = temp__4092__auto___14076__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14005_14077__$1))
{var c__10526__auto___14078 = cljs.core.chunk_first.call(null,seq__14005_14077__$1);{
var G__14079 = cljs.core.chunk_rest.call(null,seq__14005_14077__$1);
var G__14080 = c__10526__auto___14078;
var G__14081 = cljs.core.count.call(null,c__10526__auto___14078);
var G__14082 = 0;
seq__14005_14067 = G__14079;
chunk__14006_14068 = G__14080;
count__14007_14069 = G__14081;
i__14008_14070 = G__14082;
continue;
}
} else
{var cls_14083 = cljs.core.first.call(null,seq__14005_14077__$1);e_14066.addClass(cls_14083);
{
var G__14084 = cljs.core.next.call(null,seq__14005_14077__$1);
var G__14085 = null;
var G__14086 = 0;
var G__14087 = 0;
seq__14005_14067 = G__14084;
chunk__14006_14068 = G__14085;
count__14007_14069 = G__14086;
i__14008_14070 = G__14087;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,k_14065__$1,"css"))
{e_14066.css(cljs.core.clj__GT_js.call(null,v_14064));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core._EQ_.call(null,false,v_14064))
{e_14066.removeAttr(k_14065__$1);
} else
{if(cljs.core._EQ_.call(null,true,v_14064))
{e_14066.attr(k_14065__$1,k_14065__$1);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{e_14066.attr(k_14065__$1,[cljs.core.str(v_14064)].join(''));
} else
{}
}
}
} else
{}
}
}
}
}
{
var G__14088 = cljs.core.next.call(null,seq__13995_14056__$1);
var G__14089 = null;
var G__14090 = 0;
var G__14091 = 0;
seq__13995_14021 = G__14088;
chunk__13996_14022 = G__14089;
count__13997_14023 = G__14090;
i__13998_14024 = G__14091;
continue;
}
}
} else
{}
}
break;
}
if(cljs.core.seq.call(null,cljs.core.deref.call(null,dos)))
{setTimeout((function (){var seq__14009 = cljs.core.seq.call(null,cljs.core.deref.call(null,dos));var chunk__14010 = null;var count__14011 = 0;var i__14012 = 0;while(true){
if((i__14012 < count__14011))
{var vec__14013 = cljs.core._nth.call(null,chunk__14010,i__14012);var k = cljs.core.nth.call(null,vec__14013,0,null);var v = cljs.core.nth.call(null,vec__14013,1,null);tailrecursion.hoplon.do_BANG_.call(null,this$,k,cljs.core.deref.call(null,v));
cljs.core.add_watch.call(null,v,cljs.core.gensym.call(null),((function (seq__14009,chunk__14010,count__14011,i__14012,vec__14013,k,v){
return (function (p1__13966_SHARP_,p2__13967_SHARP_,p3__13968_SHARP_,p4__13965_SHARP_){return tailrecursion.hoplon.do_BANG_.call(null,this$,k,p4__13965_SHARP_);
});})(seq__14009,chunk__14010,count__14011,i__14012,vec__14013,k,v))
);
{
var G__14092 = seq__14009;
var G__14093 = chunk__14010;
var G__14094 = count__14011;
var G__14095 = (i__14012 + 1);
seq__14009 = G__14092;
chunk__14010 = G__14093;
count__14011 = G__14094;
i__14012 = G__14095;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__14009);if(temp__4092__auto__)
{var seq__14009__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14009__$1))
{var c__10526__auto__ = cljs.core.chunk_first.call(null,seq__14009__$1);{
var G__14096 = cljs.core.chunk_rest.call(null,seq__14009__$1);
var G__14097 = c__10526__auto__;
var G__14098 = cljs.core.count.call(null,c__10526__auto__);
var G__14099 = 0;
seq__14009 = G__14096;
chunk__14010 = G__14097;
count__14011 = G__14098;
i__14012 = G__14099;
continue;
}
} else
{var vec__14014 = cljs.core.first.call(null,seq__14009__$1);var k = cljs.core.nth.call(null,vec__14014,0,null);var v = cljs.core.nth.call(null,vec__14014,1,null);tailrecursion.hoplon.do_BANG_.call(null,this$,k,cljs.core.deref.call(null,v));
cljs.core.add_watch.call(null,v,cljs.core.gensym.call(null),((function (seq__14009,chunk__14010,count__14011,i__14012,vec__14014,k,v,seq__14009__$1,temp__4092__auto__){
return (function (p1__13966_SHARP_,p2__13967_SHARP_,p3__13968_SHARP_,p4__13965_SHARP_){return tailrecursion.hoplon.do_BANG_.call(null,this$,k,p4__13965_SHARP_);
});})(seq__14009,chunk__14010,count__14011,i__14012,vec__14014,k,v,seq__14009__$1,temp__4092__auto__))
);
{
var G__14100 = cljs.core.next.call(null,seq__14009__$1);
var G__14101 = null;
var G__14102 = 0;
var G__14103 = 0;
seq__14009 = G__14100;
chunk__14010 = G__14101;
count__14011 = G__14102;
i__14012 = G__14103;
continue;
}
}
} else
{return null;
}
}
break;
}
}),0);
} else
{}
if(cljs.core.seq.call(null,cljs.core.deref.call(null,ons)))
{setTimeout((function (){var seq__14015 = cljs.core.seq.call(null,cljs.core.deref.call(null,ons));var chunk__14016 = null;var count__14017 = 0;var i__14018 = 0;while(true){
if((i__14018 < count__14017))
{var vec__14019 = cljs.core._nth.call(null,chunk__14016,i__14018);var k = cljs.core.nth.call(null,vec__14019,0,null);var v = cljs.core.nth.call(null,vec__14019,1,null);tailrecursion.hoplon.on_BANG_.call(null,this$,k,v);
{
var G__14104 = seq__14015;
var G__14105 = chunk__14016;
var G__14106 = count__14017;
var G__14107 = (i__14018 + 1);
seq__14015 = G__14104;
chunk__14016 = G__14105;
count__14017 = G__14106;
i__14018 = G__14107;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__14015);if(temp__4092__auto__)
{var seq__14015__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14015__$1))
{var c__10526__auto__ = cljs.core.chunk_first.call(null,seq__14015__$1);{
var G__14108 = cljs.core.chunk_rest.call(null,seq__14015__$1);
var G__14109 = c__10526__auto__;
var G__14110 = cljs.core.count.call(null,c__10526__auto__);
var G__14111 = 0;
seq__14015 = G__14108;
chunk__14016 = G__14109;
count__14017 = G__14110;
i__14018 = G__14111;
continue;
}
} else
{var vec__14020 = cljs.core.first.call(null,seq__14015__$1);var k = cljs.core.nth.call(null,vec__14020,0,null);var v = cljs.core.nth.call(null,vec__14020,1,null);tailrecursion.hoplon.on_BANG_.call(null,this$,k,v);
{
var G__14112 = cljs.core.next.call(null,seq__14015__$1);
var G__14113 = null;
var G__14114 = 0;
var G__14115 = 0;
seq__14015 = G__14112;
chunk__14016 = G__14113;
count__14017 = G__14114;
i__14018 = G__14115;
continue;
}
}
} else
{return null;
}
}
break;
}
}),0);
} else
{}
return this$;
});
tailrecursion.hoplon.append_child = ((cljs.core.not.call(null,tailrecursion.hoplon.is_ie8))?(function (p1__14116_SHARP_,p2__14117_SHARP_){return p1__14116_SHARP_.appendChild(p2__14117_SHARP_);
}):(function (p1__14118_SHARP_,p2__14119_SHARP_){try{return p1__14118_SHARP_.appendChild(p2__14119_SHARP_);
}catch (e14120){if((e14120 instanceof Error))
{var _ = e14120;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14120;
} else
{return null;
}
}
}}));
tailrecursion.hoplon.add_children_BANG_ = (function add_children_BANG_(this$,kids){var node = (function (p1__14121_SHARP_){if(typeof p1__14121_SHARP_ === 'string')
{return tailrecursion.hoplon.$text.call(null,p1__14121_SHARP_);
} else
{if(cljs.core.truth_(tailrecursion.hoplon.node_QMARK_.call(null,p1__14121_SHARP_)))
{return p1__14121_SHARP_;
} else
{return null;
}
}
});var seq__14126_14130 = cljs.core.seq.call(null,cljs.core.keep.call(null,node,tailrecursion.hoplon.unsplice.call(null,kids)));var chunk__14127_14131 = null;var count__14128_14132 = 0;var i__14129_14133 = 0;while(true){
if((i__14129_14133 < count__14128_14132))
{var x_14134 = cljs.core._nth.call(null,chunk__14127_14131,i__14129_14133);tailrecursion.hoplon.append_child.call(null,this$,x_14134);
{
var G__14135 = seq__14126_14130;
var G__14136 = chunk__14127_14131;
var G__14137 = count__14128_14132;
var G__14138 = (i__14129_14133 + 1);
seq__14126_14130 = G__14135;
chunk__14127_14131 = G__14136;
count__14128_14132 = G__14137;
i__14129_14133 = G__14138;
continue;
}
} else
{var temp__4092__auto___14139 = cljs.core.seq.call(null,seq__14126_14130);if(temp__4092__auto___14139)
{var seq__14126_14140__$1 = temp__4092__auto___14139;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14126_14140__$1))
{var c__10526__auto___14141 = cljs.core.chunk_first.call(null,seq__14126_14140__$1);{
var G__14142 = cljs.core.chunk_rest.call(null,seq__14126_14140__$1);
var G__14143 = c__10526__auto___14141;
var G__14144 = cljs.core.count.call(null,c__10526__auto___14141);
var G__14145 = 0;
seq__14126_14130 = G__14142;
chunk__14127_14131 = G__14143;
count__14128_14132 = G__14144;
i__14129_14133 = G__14145;
continue;
}
} else
{var x_14146 = cljs.core.first.call(null,seq__14126_14140__$1);tailrecursion.hoplon.append_child.call(null,this$,x_14146);
{
var G__14147 = cljs.core.next.call(null,seq__14126_14140__$1);
var G__14148 = null;
var G__14149 = 0;
var G__14150 = 0;
seq__14126_14130 = G__14147;
chunk__14127_14131 = G__14148;
count__14128_14132 = G__14149;
i__14129_14133 = G__14150;
continue;
}
}
} else
{}
}
break;
}
return this$;
});
tailrecursion.hoplon.on_append_BANG_ = (function on_append_BANG_(this$,f){return this$.hoplonIFn = f;
});
Element.prototype.cljs$core$IFn$ = true;
Element.prototype.call = (function() { 
var G__14158__delegate = function (self__,args){var self____$1 = this;var this$ = self____$1;var vec__14152 = tailrecursion.hoplon.parse_args.call(null,args);var attr = cljs.core.nth.call(null,vec__14152,0,null);var kids = cljs.core.nth.call(null,vec__14152,1,null);if(cljs.core.truth_(this$.hoplonIFn))
{var G__14153 = this$;G__14153.hoplonIFn(attr,kids);
return G__14153;
} else
{var G__14154 = this$;tailrecursion.hoplon.add_attributes_BANG_.call(null,G__14154,attr);
tailrecursion.hoplon.add_children_BANG_.call(null,G__14154,kids);
return G__14154;
}
};
var G__14158 = function (self__,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__14158__delegate.call(this,self__,args);};
G__14158.cljs$lang$maxFixedArity = 1;
G__14158.cljs$lang$applyTo = (function (arglist__14159){
var self__ = cljs.core.first(arglist__14159);
var args = cljs.core.rest(arglist__14159);
return G__14158__delegate(self__,args);
});
G__14158.cljs$core$IFn$_invoke$arity$variadic = G__14158__delegate;
return G__14158;
})()
;
Element.prototype.apply = (function (self__,args14151){var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args14151)));
});
Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__14160__delegate = function (args){var this$ = this;var vec__14155 = tailrecursion.hoplon.parse_args.call(null,args);var attr = cljs.core.nth.call(null,vec__14155,0,null);var kids = cljs.core.nth.call(null,vec__14155,1,null);if(cljs.core.truth_(this$.hoplonIFn))
{var G__14156 = this$;G__14156.hoplonIFn(attr,kids);
return G__14156;
} else
{var G__14157 = this$;tailrecursion.hoplon.add_attributes_BANG_.call(null,G__14157,attr);
tailrecursion.hoplon.add_children_BANG_.call(null,G__14157,kids);
return G__14157;
}
};
var G__14160 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__14160__delegate.call(this,args);};
G__14160.cljs$lang$maxFixedArity = 0;
G__14160.cljs$lang$applyTo = (function (arglist__14161){
var args = cljs.core.seq(arglist__14161);
return G__14160__delegate(args);
});
G__14160.cljs$core$IFn$_invoke$arity$variadic = G__14160__delegate;
return G__14160;
})()
;
Element.prototype.cljs$core$IPrintWithWriter$ = true;
Element.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var this$__$1 = this;return cljs.core.write_all.call(null,writer,"#<Element: ",this$__$1.tagName,">");
});
tailrecursion.hoplon.make_singleton_ctor = (function make_singleton_ctor(tag){return (function() { 
var G__14162__delegate = function (args){var old = (document.getElementsByTagName(tag)[0]);var new$ = document.createElement(tag);if(cljs.core.truth_(old))
{old.parentNode.replaceChild(new$,old);
} else
{}
return cljs.core.apply.call(null,new$,args);
};
var G__14162 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__14162__delegate.call(this,args);};
G__14162.cljs$lang$maxFixedArity = 0;
G__14162.cljs$lang$applyTo = (function (arglist__14163){
var args = cljs.core.seq(arglist__14163);
return G__14162__delegate(args);
});
G__14162.cljs$core$IFn$_invoke$arity$variadic = G__14162__delegate;
return G__14162;
})()
;
});
tailrecursion.hoplon.make_elem_ctor = (function make_elem_ctor(tag){return (function() { 
var G__14164__delegate = function (args){return cljs.core.apply.call(null,document.createElement(tag),args);
};
var G__14164 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__14164__delegate.call(this,args);};
G__14164.cljs$lang$maxFixedArity = 0;
G__14164.cljs$lang$applyTo = (function (arglist__14165){
var args = cljs.core.seq(arglist__14165);
return G__14164__delegate(args);
});
G__14164.cljs$core$IFn$_invoke$arity$variadic = G__14164__delegate;
return G__14164;
})()
;
});
tailrecursion.hoplon.html_body = tailrecursion.hoplon.make_singleton_ctor.call(null,"body");
tailrecursion.hoplon.html_head = tailrecursion.hoplon.make_singleton_ctor.call(null,"head");
tailrecursion.hoplon.html = tailrecursion.hoplon.make_singleton_ctor.call(null,"html");
tailrecursion.hoplon.a = tailrecursion.hoplon.make_elem_ctor.call(null,"a");
tailrecursion.hoplon.abbr = tailrecursion.hoplon.make_elem_ctor.call(null,"abbr");
tailrecursion.hoplon.acronym = tailrecursion.hoplon.make_elem_ctor.call(null,"acronym");
tailrecursion.hoplon.address = tailrecursion.hoplon.make_elem_ctor.call(null,"address");
tailrecursion.hoplon.applet = tailrecursion.hoplon.make_elem_ctor.call(null,"applet");
tailrecursion.hoplon.area = tailrecursion.hoplon.make_elem_ctor.call(null,"area");
tailrecursion.hoplon.article = tailrecursion.hoplon.make_elem_ctor.call(null,"article");
tailrecursion.hoplon.aside = tailrecursion.hoplon.make_elem_ctor.call(null,"aside");
tailrecursion.hoplon.audio = tailrecursion.hoplon.make_elem_ctor.call(null,"audio");
tailrecursion.hoplon.b = tailrecursion.hoplon.make_elem_ctor.call(null,"b");
tailrecursion.hoplon.base = tailrecursion.hoplon.make_elem_ctor.call(null,"base");
tailrecursion.hoplon.basefont = tailrecursion.hoplon.make_elem_ctor.call(null,"basefont");
tailrecursion.hoplon.bdi = tailrecursion.hoplon.make_elem_ctor.call(null,"bdi");
tailrecursion.hoplon.bdo = tailrecursion.hoplon.make_elem_ctor.call(null,"bdo");
tailrecursion.hoplon.big = tailrecursion.hoplon.make_elem_ctor.call(null,"big");
tailrecursion.hoplon.blockquote = tailrecursion.hoplon.make_elem_ctor.call(null,"blockquote");
tailrecursion.hoplon.br = tailrecursion.hoplon.make_elem_ctor.call(null,"br");
tailrecursion.hoplon.button = tailrecursion.hoplon.make_elem_ctor.call(null,"button");
tailrecursion.hoplon.canvas = tailrecursion.hoplon.make_elem_ctor.call(null,"canvas");
tailrecursion.hoplon.caption = tailrecursion.hoplon.make_elem_ctor.call(null,"caption");
tailrecursion.hoplon.center = tailrecursion.hoplon.make_elem_ctor.call(null,"center");
tailrecursion.hoplon.cite = tailrecursion.hoplon.make_elem_ctor.call(null,"cite");
tailrecursion.hoplon.code = tailrecursion.hoplon.make_elem_ctor.call(null,"code");
tailrecursion.hoplon.col = tailrecursion.hoplon.make_elem_ctor.call(null,"col");
tailrecursion.hoplon.colgroup = tailrecursion.hoplon.make_elem_ctor.call(null,"colgroup");
tailrecursion.hoplon.command = tailrecursion.hoplon.make_elem_ctor.call(null,"command");
tailrecursion.hoplon.data = tailrecursion.hoplon.make_elem_ctor.call(null,"data");
tailrecursion.hoplon.datalist = tailrecursion.hoplon.make_elem_ctor.call(null,"datalist");
tailrecursion.hoplon.dd = tailrecursion.hoplon.make_elem_ctor.call(null,"dd");
tailrecursion.hoplon.del = tailrecursion.hoplon.make_elem_ctor.call(null,"del");
tailrecursion.hoplon.details = tailrecursion.hoplon.make_elem_ctor.call(null,"details");
tailrecursion.hoplon.dfn = tailrecursion.hoplon.make_elem_ctor.call(null,"dfn");
tailrecursion.hoplon.dir = tailrecursion.hoplon.make_elem_ctor.call(null,"dir");
tailrecursion.hoplon.div = tailrecursion.hoplon.make_elem_ctor.call(null,"div");
tailrecursion.hoplon.dl = tailrecursion.hoplon.make_elem_ctor.call(null,"dl");
tailrecursion.hoplon.dt = tailrecursion.hoplon.make_elem_ctor.call(null,"dt");
tailrecursion.hoplon.em = tailrecursion.hoplon.make_elem_ctor.call(null,"em");
tailrecursion.hoplon.embed = tailrecursion.hoplon.make_elem_ctor.call(null,"embed");
tailrecursion.hoplon.eventsource = tailrecursion.hoplon.make_elem_ctor.call(null,"eventsource");
tailrecursion.hoplon.fieldset = tailrecursion.hoplon.make_elem_ctor.call(null,"fieldset");
tailrecursion.hoplon.figcaption = tailrecursion.hoplon.make_elem_ctor.call(null,"figcaption");
tailrecursion.hoplon.figure = tailrecursion.hoplon.make_elem_ctor.call(null,"figure");
tailrecursion.hoplon.font = tailrecursion.hoplon.make_elem_ctor.call(null,"font");
tailrecursion.hoplon.footer = tailrecursion.hoplon.make_elem_ctor.call(null,"footer");
tailrecursion.hoplon.form = tailrecursion.hoplon.make_elem_ctor.call(null,"form");
tailrecursion.hoplon.frame = tailrecursion.hoplon.make_elem_ctor.call(null,"frame");
tailrecursion.hoplon.frameset = tailrecursion.hoplon.make_elem_ctor.call(null,"frameset");
tailrecursion.hoplon.h1 = tailrecursion.hoplon.make_elem_ctor.call(null,"h1");
tailrecursion.hoplon.h2 = tailrecursion.hoplon.make_elem_ctor.call(null,"h2");
tailrecursion.hoplon.h3 = tailrecursion.hoplon.make_elem_ctor.call(null,"h3");
tailrecursion.hoplon.h4 = tailrecursion.hoplon.make_elem_ctor.call(null,"h4");
tailrecursion.hoplon.h5 = tailrecursion.hoplon.make_elem_ctor.call(null,"h5");
tailrecursion.hoplon.h6 = tailrecursion.hoplon.make_elem_ctor.call(null,"h6");
tailrecursion.hoplon.header = tailrecursion.hoplon.make_elem_ctor.call(null,"header");
tailrecursion.hoplon.hgroup = tailrecursion.hoplon.make_elem_ctor.call(null,"hgroup");
tailrecursion.hoplon.hr = tailrecursion.hoplon.make_elem_ctor.call(null,"hr");
tailrecursion.hoplon.i = tailrecursion.hoplon.make_elem_ctor.call(null,"i");
tailrecursion.hoplon.iframe = tailrecursion.hoplon.make_elem_ctor.call(null,"iframe");
tailrecursion.hoplon.img = tailrecursion.hoplon.make_elem_ctor.call(null,"img");
tailrecursion.hoplon.input = tailrecursion.hoplon.make_elem_ctor.call(null,"input");
tailrecursion.hoplon.ins = tailrecursion.hoplon.make_elem_ctor.call(null,"ins");
tailrecursion.hoplon.isindex = tailrecursion.hoplon.make_elem_ctor.call(null,"isindex");
tailrecursion.hoplon.kbd = tailrecursion.hoplon.make_elem_ctor.call(null,"kbd");
tailrecursion.hoplon.keygen = tailrecursion.hoplon.make_elem_ctor.call(null,"keygen");
tailrecursion.hoplon.label = tailrecursion.hoplon.make_elem_ctor.call(null,"label");
tailrecursion.hoplon.legend = tailrecursion.hoplon.make_elem_ctor.call(null,"legend");
tailrecursion.hoplon.li = tailrecursion.hoplon.make_elem_ctor.call(null,"li");
tailrecursion.hoplon.link = tailrecursion.hoplon.make_elem_ctor.call(null,"link");
tailrecursion.hoplon.html_map = tailrecursion.hoplon.make_elem_ctor.call(null,"map");
tailrecursion.hoplon.mark = tailrecursion.hoplon.make_elem_ctor.call(null,"mark");
tailrecursion.hoplon.menu = tailrecursion.hoplon.make_elem_ctor.call(null,"menu");
tailrecursion.hoplon.html_meta = tailrecursion.hoplon.make_elem_ctor.call(null,"meta");
tailrecursion.hoplon.meter = tailrecursion.hoplon.make_elem_ctor.call(null,"meter");
tailrecursion.hoplon.nav = tailrecursion.hoplon.make_elem_ctor.call(null,"nav");
tailrecursion.hoplon.noframes = tailrecursion.hoplon.make_elem_ctor.call(null,"noframes");
tailrecursion.hoplon.noscript = tailrecursion.hoplon.make_elem_ctor.call(null,"noscript");
tailrecursion.hoplon.object = tailrecursion.hoplon.make_elem_ctor.call(null,"object");
tailrecursion.hoplon.ol = tailrecursion.hoplon.make_elem_ctor.call(null,"ol");
tailrecursion.hoplon.optgroup = tailrecursion.hoplon.make_elem_ctor.call(null,"optgroup");
tailrecursion.hoplon.option = tailrecursion.hoplon.make_elem_ctor.call(null,"option");
tailrecursion.hoplon.output = tailrecursion.hoplon.make_elem_ctor.call(null,"output");
tailrecursion.hoplon.p = tailrecursion.hoplon.make_elem_ctor.call(null,"p");
tailrecursion.hoplon.param = tailrecursion.hoplon.make_elem_ctor.call(null,"param");
tailrecursion.hoplon.pre = tailrecursion.hoplon.make_elem_ctor.call(null,"pre");
tailrecursion.hoplon.progress = tailrecursion.hoplon.make_elem_ctor.call(null,"progress");
tailrecursion.hoplon.q = tailrecursion.hoplon.make_elem_ctor.call(null,"q");
tailrecursion.hoplon.rp = tailrecursion.hoplon.make_elem_ctor.call(null,"rp");
tailrecursion.hoplon.rt = tailrecursion.hoplon.make_elem_ctor.call(null,"rt");
tailrecursion.hoplon.ruby = tailrecursion.hoplon.make_elem_ctor.call(null,"ruby");
tailrecursion.hoplon.s = tailrecursion.hoplon.make_elem_ctor.call(null,"s");
tailrecursion.hoplon.samp = tailrecursion.hoplon.make_elem_ctor.call(null,"samp");
tailrecursion.hoplon.script = tailrecursion.hoplon.make_elem_ctor.call(null,"script");
tailrecursion.hoplon.section = tailrecursion.hoplon.make_elem_ctor.call(null,"section");
tailrecursion.hoplon.select = tailrecursion.hoplon.make_elem_ctor.call(null,"select");
tailrecursion.hoplon.small = tailrecursion.hoplon.make_elem_ctor.call(null,"small");
tailrecursion.hoplon.source = tailrecursion.hoplon.make_elem_ctor.call(null,"source");
tailrecursion.hoplon.span = tailrecursion.hoplon.make_elem_ctor.call(null,"span");
tailrecursion.hoplon.strike = tailrecursion.hoplon.make_elem_ctor.call(null,"strike");
tailrecursion.hoplon.strong = tailrecursion.hoplon.make_elem_ctor.call(null,"strong");
tailrecursion.hoplon.style = tailrecursion.hoplon.make_elem_ctor.call(null,"style");
tailrecursion.hoplon.sub = tailrecursion.hoplon.make_elem_ctor.call(null,"sub");
tailrecursion.hoplon.summary = tailrecursion.hoplon.make_elem_ctor.call(null,"summary");
tailrecursion.hoplon.sup = tailrecursion.hoplon.make_elem_ctor.call(null,"sup");
tailrecursion.hoplon.table = tailrecursion.hoplon.make_elem_ctor.call(null,"table");
tailrecursion.hoplon.tbody = tailrecursion.hoplon.make_elem_ctor.call(null,"tbody");
tailrecursion.hoplon.td = tailrecursion.hoplon.make_elem_ctor.call(null,"td");
tailrecursion.hoplon.textarea = tailrecursion.hoplon.make_elem_ctor.call(null,"textarea");
tailrecursion.hoplon.tfoot = tailrecursion.hoplon.make_elem_ctor.call(null,"tfoot");
tailrecursion.hoplon.th = tailrecursion.hoplon.make_elem_ctor.call(null,"th");
tailrecursion.hoplon.thead = tailrecursion.hoplon.make_elem_ctor.call(null,"thead");
tailrecursion.hoplon.html_time = tailrecursion.hoplon.make_elem_ctor.call(null,"time");
tailrecursion.hoplon.title = tailrecursion.hoplon.make_elem_ctor.call(null,"title");
tailrecursion.hoplon.tr = tailrecursion.hoplon.make_elem_ctor.call(null,"tr");
tailrecursion.hoplon.track = tailrecursion.hoplon.make_elem_ctor.call(null,"track");
tailrecursion.hoplon.tt = tailrecursion.hoplon.make_elem_ctor.call(null,"tt");
tailrecursion.hoplon.u = tailrecursion.hoplon.make_elem_ctor.call(null,"u");
tailrecursion.hoplon.ul = tailrecursion.hoplon.make_elem_ctor.call(null,"ul");
tailrecursion.hoplon.html_var = tailrecursion.hoplon.make_elem_ctor.call(null,"var");
tailrecursion.hoplon.video = tailrecursion.hoplon.make_elem_ctor.call(null,"video");
tailrecursion.hoplon.wbr = tailrecursion.hoplon.make_elem_ctor.call(null,"wbr");
tailrecursion.hoplon.spliced = cljs.core.vector;
tailrecursion.hoplon.$text = (function $text(p1__14166_SHARP_){return document.createTextNode(p1__14166_SHARP_);
});
tailrecursion.hoplon.$comment = (function $comment(p1__14167_SHARP_){return document.createComment(p1__14167_SHARP_);
});
tailrecursion.hoplon.initialized_QMARK_ = cljs.core.atom.call(null,false);
tailrecursion.hoplon._STAR_initfns_STAR_ = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
tailrecursion.hoplon.add_initfn_BANG_ = (function add_initfn_BANG_(f){if(cljs.core.truth_(cljs.core.deref.call(null,tailrecursion.hoplon.initialized_QMARK_)))
{return f.call(null);
} else
{return cljs.core.swap_BANG_.call(null,tailrecursion.hoplon._STAR_initfns_STAR_,cljs.core.conj,f);
}
});
tailrecursion.hoplon.init = (function init(){return setTimeout((function (){jQuery("body").on("submit",(function (p1__14168_SHARP_){return p1__14168_SHARP_.preventDefault();
}));
cljs.core.reset_BANG_.call(null,tailrecursion.hoplon.initialized_QMARK_,true);
var seq__14173 = cljs.core.seq.call(null,cljs.core.deref.call(null,tailrecursion.hoplon._STAR_initfns_STAR_));var chunk__14174 = null;var count__14175 = 0;var i__14176 = 0;while(true){
if((i__14176 < count__14175))
{var f = cljs.core._nth.call(null,chunk__14174,i__14176);f.call(null);
{
var G__14177 = seq__14173;
var G__14178 = chunk__14174;
var G__14179 = count__14175;
var G__14180 = (i__14176 + 1);
seq__14173 = G__14177;
chunk__14174 = G__14178;
count__14175 = G__14179;
i__14176 = G__14180;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__14173);if(temp__4092__auto__)
{var seq__14173__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14173__$1))
{var c__10526__auto__ = cljs.core.chunk_first.call(null,seq__14173__$1);{
var G__14181 = cljs.core.chunk_rest.call(null,seq__14173__$1);
var G__14182 = c__10526__auto__;
var G__14183 = cljs.core.count.call(null,c__10526__auto__);
var G__14184 = 0;
seq__14173 = G__14181;
chunk__14174 = G__14182;
count__14175 = G__14183;
i__14176 = G__14184;
continue;
}
} else
{var f = cljs.core.first.call(null,seq__14173__$1);f.call(null);
{
var G__14185 = cljs.core.next.call(null,seq__14173__$1);
var G__14186 = null;
var G__14187 = 0;
var G__14188 = 0;
seq__14173 = G__14185;
chunk__14174 = G__14186;
count__14175 = G__14187;
i__14176 = G__14188;
continue;
}
}
} else
{return null;
}
}
break;
}
}),0);
});
tailrecursion.hoplon.by_id = (function by_id(id){return document.getElementById(cljs.core.name.call(null,id));
});
tailrecursion.hoplon.val_id = (function val_id(id){return tailrecursion.hoplon.do_BANG_.call(null,tailrecursion.hoplon.by_id.call(null,id),new cljs.core.Keyword(null,"value","value",1125876963));
});
tailrecursion.hoplon.rel = (function rel(other,event){var os = cljs.core.js__GT_clj.call(null,jQuery(other).offset());var ox = os.call(null,"left");var oy = os.call(null,"top");return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",1013904362),(event.pageX - ox),new cljs.core.Keyword(null,"y","y",1013904363),(event.pageY - oy)], null);
});
tailrecursion.hoplon.relx = (function relx(other,event){return new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.rel.call(null,other,event));
});
tailrecursion.hoplon.rely = (function rely(other,event){return new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.rel.call(null,other,event));
});
tailrecursion.hoplon.rel_event = (function rel_event(rel_to,tag,handler){return (function (event){(event[[cljs.core.str(tag),cljs.core.str("X")].join('')] = tailrecursion.hoplon.relx.call(null,rel_to,event));
(event[[cljs.core.str(tag),cljs.core.str("Y")].join('')] = tailrecursion.hoplon.rely.call(null,rel_to,event));
return handler.call(null,event);
});
});
tailrecursion.hoplon.text_val_BANG_ = (function() {
var text_val_BANG_ = null;
var text_val_BANG___1 = (function (e){return e.val();
});
var text_val_BANG___2 = (function (e,v){return e.val([cljs.core.str(v)].join(''));
});
text_val_BANG_ = function(e,v){
switch(arguments.length){
case 1:
return text_val_BANG___1.call(this,e);
case 2:
return text_val_BANG___2.call(this,e,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_val_BANG_.cljs$core$IFn$_invoke$arity$1 = text_val_BANG___1;
text_val_BANG_.cljs$core$IFn$_invoke$arity$2 = text_val_BANG___2;
return text_val_BANG_;
})()
;
tailrecursion.hoplon.check_val_BANG_ = (function() {
var check_val_BANG_ = null;
var check_val_BANG___1 = (function (e){return e.is(":checked");
});
var check_val_BANG___2 = (function (e,v){return e.prop("checked",cljs.core.boolean$.call(null,v));
});
check_val_BANG_ = function(e,v){
switch(arguments.length){
case 1:
return check_val_BANG___1.call(this,e);
case 2:
return check_val_BANG___2.call(this,e,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_val_BANG_.cljs$core$IFn$_invoke$arity$1 = check_val_BANG___1;
check_val_BANG_.cljs$core$IFn$_invoke$arity$2 = check_val_BANG___2;
return check_val_BANG_;
})()
;
tailrecursion.hoplon.do_BANG_ = (function (){var method_table__10636__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__10637__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__10638__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__10639__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__10640__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",2558708147),new cljs.core.Keyword("tailrecursion.hoplon","default","tailrecursion.hoplon/default",1265562704)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("do!",(function (elem,key,val){return key;
}),new cljs.core.Keyword("tailrecursion.hoplon","default","tailrecursion.hoplon/default",1265562704),hierarchy__10640__auto__,method_table__10636__auto__,prefer_table__10637__auto__,method_cache__10638__auto__,cached_hierarchy__10639__auto__));
})();
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword("tailrecursion.hoplon","default","tailrecursion.hoplon/default",1265562704),(function (elem,key,val){return tailrecursion.hoplon.do_BANG_.call(null,elem,new cljs.core.Keyword(null,"attr","attr",1016909155),new cljs.core.PersistentArrayMap.fromArray([key,val], true, false));
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"value","value",1125876963),(function() { 
var G__14189__delegate = function (elem,_,args){var e = jQuery(elem);return cljs.core.apply.call(null,((cljs.core._EQ_.call(null,"checkbox",e.attr("type")))?tailrecursion.hoplon.check_val_BANG_:tailrecursion.hoplon.text_val_BANG_),e,args);
};
var G__14189 = function (elem,_,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__14189__delegate.call(this,elem,_,args);};
G__14189.cljs$lang$maxFixedArity = 2;
G__14189.cljs$lang$applyTo = (function (arglist__14190){
var elem = cljs.core.first(arglist__14190);
arglist__14190 = cljs.core.next(arglist__14190);
var _ = cljs.core.first(arglist__14190);
var args = cljs.core.rest(arglist__14190);
return G__14189__delegate(elem,_,args);
});
G__14189.cljs$core$IFn$_invoke$arity$variadic = G__14189__delegate;
return G__14189;
})()
);
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"attr","attr",1016909155),(function (elem,_,kvs){return elem.call(null,kvs);
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"class","class",1108647146),(function (elem,_,kvs){var elem__$1 = jQuery(elem);var seq__14191 = cljs.core.seq.call(null,kvs);var chunk__14192 = null;var count__14193 = 0;var i__14194 = 0;while(true){
if((i__14194 < count__14193))
{var vec__14195 = cljs.core._nth.call(null,chunk__14192,i__14194);var c = cljs.core.nth.call(null,vec__14195,0,null);var p_QMARK_ = cljs.core.nth.call(null,vec__14195,1,null);elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));
{
var G__14197 = seq__14191;
var G__14198 = chunk__14192;
var G__14199 = count__14193;
var G__14200 = (i__14194 + 1);
seq__14191 = G__14197;
chunk__14192 = G__14198;
count__14193 = G__14199;
i__14194 = G__14200;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__14191);if(temp__4092__auto__)
{var seq__14191__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14191__$1))
{var c__10526__auto__ = cljs.core.chunk_first.call(null,seq__14191__$1);{
var G__14201 = cljs.core.chunk_rest.call(null,seq__14191__$1);
var G__14202 = c__10526__auto__;
var G__14203 = cljs.core.count.call(null,c__10526__auto__);
var G__14204 = 0;
seq__14191 = G__14201;
chunk__14192 = G__14202;
count__14193 = G__14203;
i__14194 = G__14204;
continue;
}
} else
{var vec__14196 = cljs.core.first.call(null,seq__14191__$1);var c = cljs.core.nth.call(null,vec__14196,0,null);var p_QMARK_ = cljs.core.nth.call(null,vec__14196,1,null);elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));
{
var G__14205 = cljs.core.next.call(null,seq__14191__$1);
var G__14206 = null;
var G__14207 = 0;
var G__14208 = 0;
seq__14191 = G__14205;
chunk__14192 = G__14206;
count__14193 = G__14207;
i__14194 = G__14208;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"css","css",1014003061),(function (elem,_,kvs){var e = jQuery(elem);var seq__14209 = cljs.core.seq.call(null,kvs);var chunk__14210 = null;var count__14211 = 0;var i__14212 = 0;while(true){
if((i__14212 < count__14211))
{var vec__14213 = cljs.core._nth.call(null,chunk__14210,i__14212);var k = cljs.core.nth.call(null,vec__14213,0,null);var v = cljs.core.nth.call(null,vec__14213,1,null);e.css(cljs.core.name.call(null,k),[cljs.core.str(v)].join(''));
{
var G__14215 = seq__14209;
var G__14216 = chunk__14210;
var G__14217 = count__14211;
var G__14218 = (i__14212 + 1);
seq__14209 = G__14215;
chunk__14210 = G__14216;
count__14211 = G__14217;
i__14212 = G__14218;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__14209);if(temp__4092__auto__)
{var seq__14209__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14209__$1))
{var c__10526__auto__ = cljs.core.chunk_first.call(null,seq__14209__$1);{
var G__14219 = cljs.core.chunk_rest.call(null,seq__14209__$1);
var G__14220 = c__10526__auto__;
var G__14221 = cljs.core.count.call(null,c__10526__auto__);
var G__14222 = 0;
seq__14209 = G__14219;
chunk__14210 = G__14220;
count__14211 = G__14221;
i__14212 = G__14222;
continue;
}
} else
{var vec__14214 = cljs.core.first.call(null,seq__14209__$1);var k = cljs.core.nth.call(null,vec__14214,0,null);var v = cljs.core.nth.call(null,vec__14214,1,null);e.css(cljs.core.name.call(null,k),[cljs.core.str(v)].join(''));
{
var G__14223 = cljs.core.next.call(null,seq__14209__$1);
var G__14224 = null;
var G__14225 = 0;
var G__14226 = 0;
seq__14209 = G__14223;
chunk__14210 = G__14224;
count__14211 = G__14225;
i__14212 = G__14226;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"toggle","toggle",4440567494),(function (elem,_,v){return jQuery(elem).toggle(cljs.core.boolean$.call(null,v));
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"slide-toggle","slide-toggle",3005235810),(function (elem,_,v){if(cljs.core.truth_(v))
{return jQuery(elem).hide().slideDown("fast");
} else
{return jQuery(elem).slideUp("fast");
}
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"fade-toggle","fade-toggle",514539319),(function (elem,_,v){if(cljs.core.truth_(v))
{return jQuery(elem).hide().fadeIn("fast");
} else
{return jQuery(elem).fadeOut("fast");
}
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"focus","focus",1111509066),(function (elem,_,v){return setTimeout((function (){if(cljs.core.truth_(v))
{return jQuery(elem).focus(jQuery(elem).focusout());
} else
{return null;
}
}),0);
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"select","select",4402849902),(function (elem,_,___$1){return jQuery(elem).select();
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"focus-select","focus-select",3635190531),(function (elem,_,v){if(cljs.core.truth_(v))
{tailrecursion.hoplon.do_BANG_.call(null,elem,new cljs.core.Keyword(null,"focus","focus",1111509066),v);
return tailrecursion.hoplon.do_BANG_.call(null,elem,new cljs.core.Keyword(null,"select","select",4402849902),v);
} else
{return null;
}
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"text","text",1017460895),(function (elem,_,v){return jQuery(elem).text([cljs.core.str(v)].join(''));
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"scroll-to","scroll-to",1431647469),(function (elem,_,v){if(cljs.core.truth_(v))
{var body = jQuery("body");var elem__$1 = jQuery(elem);return body.animate(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scrollTop","scrollTop",1431684794),elem__$1.offset().top], null)));
} else
{return null;
}
}));
tailrecursion.hoplon.on_BANG_ = (function (){var method_table__10636__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__10637__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__10638__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__10639__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__10640__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",2558708147),new cljs.core.Keyword("tailrecursion.hoplon","default","tailrecursion.hoplon/default",1265562704)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("on!",(function (elem,event,callback){return event;
}),new cljs.core.Keyword("tailrecursion.hoplon","default","tailrecursion.hoplon/default",1265562704),hierarchy__10640__auto__,method_table__10636__auto__,prefer_table__10637__auto__,method_cache__10638__auto__,cached_hierarchy__10639__auto__));
})();
cljs.core._add_method.call(null,tailrecursion.hoplon.on_BANG_,new cljs.core.Keyword("tailrecursion.hoplon","default","tailrecursion.hoplon/default",1265562704),(function (elem,event,callback){return tailrecursion.hoplon.when_dom.call(null,elem,(function (){return jQuery(elem).on(cljs.core.name.call(null,event),callback);
}));
}));
tailrecursion.hoplon.loop_tpl_STAR_ = (function loop_tpl_STAR_(items,reverse_QMARK_,tpl){var pool_size = tailrecursion.javelin.cell.call(null,0);var items_seq = tailrecursion.javelin.lift.call(null,((function (pool_size){
return (function (G__14253,G__14252){return G__14252.call(null,G__14253);
});})(pool_size))
).call(null,items,cljs.core.seq);var cur_count = tailrecursion.javelin.lift.call(null,((function (pool_size,items_seq){
return (function (G__14254,G__14255){return G__14254.call(null,G__14255);
});})(pool_size,items_seq))
).call(null,cljs.core.count,items_seq);var show_ith_QMARK_ = ((function (pool_size,items_seq,cur_count){
return (function (p1__14227_SHARP_){return tailrecursion.javelin.lift.call(null,((function (pool_size,items_seq,cur_count){
return (function (G__14257,G__14256){return (G__14256 < G__14257);
});})(pool_size,items_seq,cur_count))
).call(null,cur_count,p1__14227_SHARP_);
});})(pool_size,items_seq,cur_count))
;var ith_item = ((function (pool_size,items_seq,cur_count,show_ith_QMARK_){
return (function (p1__14228_SHARP_){return tailrecursion.javelin.lift.call(null,((function (pool_size,items_seq,cur_count,show_ith_QMARK_){
return (function (G__14258,G__14260,G__14259){return G__14258.call(null,G__14259,G__14260);
});})(pool_size,items_seq,cur_count,show_ith_QMARK_))
).call(null,tailrecursion.hoplon.safe_nth,p1__14228_SHARP_,items_seq);
});})(pool_size,items_seq,cur_count,show_ith_QMARK_))
;var d = tailrecursion.hoplon.span.call(null);tailrecursion.hoplon.when_dom.call(null,d,(function (){var p = d.parentNode;p.removeChild(d);
return tailrecursion.javelin.lift.call(null,(function (G__14274,G__14272,G__14268,G__14269,G__14266,G__14270,G__14265,G__14267,G__14273,G__14271){if(cljs.core.truth_((G__14265 < G__14266)))
{var seq__14261_14275 = cljs.core.seq.call(null,G__14267.call(null,G__14265,G__14266));var chunk__14262_14276 = null;var count__14263_14277 = 0;var i__14264_14278 = 0;while(true){
if(cljs.core.truth_((i__14264_14278 < count__14263_14277)))
{var i_14279 = cljs.core._nth.call(null,chunk__14262_14276,i__14264_14278);var e_14280 = G__14268.call(null,G__14269.call(null,i_14279)).call(null,new cljs.core.Keyword(null,"do-toggle","do-toggle",1250159176),G__14270.call(null,i_14279));if(cljs.core.not.call(null,G__14271))
{G__14272.appendChild(e_14280);
} else
{G__14272.insertBefore(e_14280,G__14272.firstChild);
}
{
var G__14281 = seq__14261_14275;
var G__14282 = chunk__14262_14276;
var G__14283 = count__14263_14277;
var G__14284 = (i__14264_14278 + 1);
seq__14261_14275 = G__14281;
chunk__14262_14276 = G__14282;
count__14263_14277 = G__14283;
i__14264_14278 = G__14284;
continue;
}
} else
{var temp__4092__auto___14285 = cljs.core.seq.call(null,seq__14261_14275);if(temp__4092__auto___14285)
{var seq__14261_14286__$1 = temp__4092__auto___14285;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14261_14286__$1))
{var c__10526__auto___14287 = cljs.core.chunk_first.call(null,seq__14261_14286__$1);{
var G__14288 = cljs.core.chunk_rest.call(null,seq__14261_14286__$1);
var G__14289 = c__10526__auto___14287;
var G__14290 = cljs.core.count.call(null,c__10526__auto___14287);
var G__14291 = 0;
seq__14261_14275 = G__14288;
chunk__14262_14276 = G__14289;
count__14263_14277 = G__14290;
i__14264_14278 = G__14291;
continue;
}
} else
{var i_14292 = cljs.core.first.call(null,seq__14261_14286__$1);var e_14293 = G__14268.call(null,G__14269.call(null,i_14292)).call(null,new cljs.core.Keyword(null,"do-toggle","do-toggle",1250159176),G__14270.call(null,i_14292));if(cljs.core.not.call(null,G__14271))
{G__14272.appendChild(e_14293);
} else
{G__14272.insertBefore(e_14293,G__14272.firstChild);
}
{
var G__14294 = cljs.core.next.call(null,seq__14261_14286__$1);
var G__14295 = null;
var G__14296 = 0;
var G__14297 = 0;
seq__14261_14275 = G__14294;
chunk__14262_14276 = G__14295;
count__14263_14277 = G__14296;
i__14264_14278 = G__14297;
continue;
}
}
} else
{}
}
break;
}
return G__14273.call(null,G__14274,G__14266);
} else
{return null;
}
})).call(null,tailrecursion.javelin.cell.call(null,pool_size),p,tpl,ith_item,cur_count,show_ith_QMARK_,pool_size,cljs.core.range,cljs.core.reset_BANG_,reverse_QMARK_);
}));
return d;
});
