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
tailrecursion.hoplon.node_QMARK_ = ((cljs.core.not.call(null,tailrecursion.hoplon.is_ie8))?(function (p1__13805_SHARP_){return (p1__13805_SHARP_ instanceof Node);
}):(function (p1__13806_SHARP_){try{return p1__13806_SHARP_.nodeType;
}catch (e13807){if((e13807 instanceof Error))
{var _ = e13807;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13807;
} else
{return null;
}
}
}}));
tailrecursion.hoplon.vector_QMARK__STAR_ = ((cljs.core.not.call(null,tailrecursion.hoplon.is_ie8))?cljs.core.vector_QMARK_:(function (p1__13808_SHARP_){try{return cljs.core.vector_QMARK_.call(null,p1__13808_SHARP_);
}catch (e13809){if((e13809 instanceof Error))
{var _ = e13809;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13809;
} else
{return null;
}
}
}}));
tailrecursion.hoplon.seq_QMARK__STAR_ = ((cljs.core.not.call(null,tailrecursion.hoplon.is_ie8))?cljs.core.seq_QMARK_:(function (p1__13810_SHARP_){try{return cljs.core.seq_QMARK_.call(null,p1__13810_SHARP_);
}catch (e13811){if((e13811 instanceof Error))
{var _ = e13811;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13811;
} else
{return null;
}
}
}}));
cljs.core.set_print_fn_BANG_.call(null,(function (p1__13812_SHARP_){if(cljs.core.truth_((function (){var and__9573__auto__ = console;if(cljs.core.truth_(and__9573__auto__))
{return console.log;
} else
{return and__9573__auto__;
}
})()))
{return console.log(p1__13812_SHARP_);
} else
{return null;
}
}));
tailrecursion.hoplon.safe_nth = (function() {
var safe_nth = null;
var safe_nth__2 = (function (coll,index){return safe_nth.call(null,coll,index,null);
});
var safe_nth__3 = (function (coll,index,not_found){try{return cljs.core.nth.call(null,coll,index,not_found);
}catch (e13814){if((e13814 instanceof Error))
{var _ = e13814;return not_found;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13814;
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
tailrecursion.hoplon.unsplice = (function unsplice(forms){return cljs.core.mapcat.call(null,(function (p1__13815_SHARP_){if(cljs.core.truth_((function (){var or__9585__auto__ = tailrecursion.hoplon.seq_QMARK__STAR_.call(null,p1__13815_SHARP_);if(cljs.core.truth_(or__9585__auto__))
{return or__9585__auto__;
} else
{return tailrecursion.hoplon.vector_QMARK__STAR_.call(null,p1__13815_SHARP_);
}
})()))
{return unsplice.call(null,p1__13815_SHARP_);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13815_SHARP_], null);
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
tailrecursion.hoplon.parse_args = (function parse_args(p__13818){var vec__13820 = p__13818;var head = cljs.core.nth.call(null,vec__13820,0,null);var tail = cljs.core.nthnext.call(null,vec__13820,1);var args = vec__13820;var kw1_QMARK_ = cljs.core.comp.call(null,cljs.core.keyword_QMARK_,cljs.core.first);var mkkw = ((function (kw1_QMARK_){
return (function (p1__13816_SHARP_){return cljs.core.map.call(null,cljs.core.vec,cljs.core.take_while.call(null,kw1_QMARK_,cljs.core.partition.call(null,2,p1__13816_SHARP_)));
});})(kw1_QMARK_))
;var drkw = ((function (kw1_QMARK_,mkkw){
return (function (p1__13817_SHARP_){return cljs.core.mapcat.call(null,cljs.core.identity,cljs.core.drop_while.call(null,kw1_QMARK_,cljs.core.partition.call(null,2,2,cljs.core.PersistentVector.EMPTY,p1__13817_SHARP_)));
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
tailrecursion.hoplon.add_attributes_BANG_ = (function add_attributes_BANG_(this$,attr){var key_STAR_ = (function (p1__13822_SHARP_,p2__13821_SHARP_){var p = p2__13821_SHARP_.substr(0,3);return cljs.core.keyword.call(null,((!(cljs.core._EQ_.call(null,p1__13822_SHARP_,p)))?p2__13821_SHARP_:p2__13821_SHARP_.substr(3)));
});var dokey = cljs.core.partial.call(null,key_STAR_,"do-");var onkey = cljs.core.partial.call(null,key_STAR_,"on-");var dos = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ons = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var addcls = ((function (key_STAR_,dokey,onkey,dos,ons){
return (function (p1__13823_SHARP_,p2__13824_SHARP_){return clojure.string.join.call(null," ",cljs.core.into.call(null,cljs.core.set.call(null,clojure.string.split.call(null,p1__13823_SHARP_,/ /)),clojure.string.split.call(null,p2__13824_SHARP_,/ /)));
});})(key_STAR_,dokey,onkey,dos,ons))
;var seq__13855_13881 = cljs.core.seq.call(null,attr);var chunk__13856_13882 = null;var count__13857_13883 = 0;var i__13858_13884 = 0;while(true){
if((i__13858_13884 < count__13857_13883))
{var vec__13859_13885 = cljs.core._nth.call(null,chunk__13856_13882,i__13858_13884);var k_13886 = cljs.core.nth.call(null,vec__13859_13885,0,null);var v_13887 = cljs.core.nth.call(null,vec__13859_13885,1,null);var k_13888__$1 = cljs.core.name.call(null,k_13886);var e_13889 = jQuery(this$);if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,v_13887)))
{cljs.core.swap_BANG_.call(null,dos,cljs.core.assoc,dokey.call(null,k_13888__$1),v_13887);
} else
{if(cljs.core.fn_QMARK_.call(null,v_13887))
{cljs.core.swap_BANG_.call(null,ons,cljs.core.assoc,onkey.call(null,k_13888__$1),v_13887);
} else
{if(cljs.core._EQ_.call(null,k_13888__$1,"class"))
{var seq__13860_13890 = cljs.core.seq.call(null,clojure.string.split.call(null,v_13887,/ /));var chunk__13861_13891 = null;var count__13862_13892 = 0;var i__13863_13893 = 0;while(true){
if((i__13863_13893 < count__13862_13892))
{var cls_13894 = cljs.core._nth.call(null,chunk__13861_13891,i__13863_13893);e_13889.addClass(cls_13894);
{
var G__13895 = seq__13860_13890;
var G__13896 = chunk__13861_13891;
var G__13897 = count__13862_13892;
var G__13898 = (i__13863_13893 + 1);
seq__13860_13890 = G__13895;
chunk__13861_13891 = G__13896;
count__13862_13892 = G__13897;
i__13863_13893 = G__13898;
continue;
}
} else
{var temp__4092__auto___13899 = cljs.core.seq.call(null,seq__13860_13890);if(temp__4092__auto___13899)
{var seq__13860_13900__$1 = temp__4092__auto___13899;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13860_13900__$1))
{var c__10333__auto___13901 = cljs.core.chunk_first.call(null,seq__13860_13900__$1);{
var G__13902 = cljs.core.chunk_rest.call(null,seq__13860_13900__$1);
var G__13903 = c__10333__auto___13901;
var G__13904 = cljs.core.count.call(null,c__10333__auto___13901);
var G__13905 = 0;
seq__13860_13890 = G__13902;
chunk__13861_13891 = G__13903;
count__13862_13892 = G__13904;
i__13863_13893 = G__13905;
continue;
}
} else
{var cls_13906 = cljs.core.first.call(null,seq__13860_13900__$1);e_13889.addClass(cls_13906);
{
var G__13907 = cljs.core.next.call(null,seq__13860_13900__$1);
var G__13908 = null;
var G__13909 = 0;
var G__13910 = 0;
seq__13860_13890 = G__13907;
chunk__13861_13891 = G__13908;
count__13862_13892 = G__13909;
i__13863_13893 = G__13910;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,k_13888__$1,"css"))
{e_13889.css(cljs.core.clj__GT_js.call(null,v_13887));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core._EQ_.call(null,false,v_13887))
{e_13889.removeAttr(k_13888__$1);
} else
{if(cljs.core._EQ_.call(null,true,v_13887))
{e_13889.attr(k_13888__$1,k_13888__$1);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{e_13889.attr(k_13888__$1,[cljs.core.str(v_13887)].join(''));
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
var G__13911 = seq__13855_13881;
var G__13912 = chunk__13856_13882;
var G__13913 = count__13857_13883;
var G__13914 = (i__13858_13884 + 1);
seq__13855_13881 = G__13911;
chunk__13856_13882 = G__13912;
count__13857_13883 = G__13913;
i__13858_13884 = G__13914;
continue;
}
} else
{var temp__4092__auto___13915 = cljs.core.seq.call(null,seq__13855_13881);if(temp__4092__auto___13915)
{var seq__13855_13916__$1 = temp__4092__auto___13915;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13855_13916__$1))
{var c__10333__auto___13917 = cljs.core.chunk_first.call(null,seq__13855_13916__$1);{
var G__13918 = cljs.core.chunk_rest.call(null,seq__13855_13916__$1);
var G__13919 = c__10333__auto___13917;
var G__13920 = cljs.core.count.call(null,c__10333__auto___13917);
var G__13921 = 0;
seq__13855_13881 = G__13918;
chunk__13856_13882 = G__13919;
count__13857_13883 = G__13920;
i__13858_13884 = G__13921;
continue;
}
} else
{var vec__13864_13922 = cljs.core.first.call(null,seq__13855_13916__$1);var k_13923 = cljs.core.nth.call(null,vec__13864_13922,0,null);var v_13924 = cljs.core.nth.call(null,vec__13864_13922,1,null);var k_13925__$1 = cljs.core.name.call(null,k_13923);var e_13926 = jQuery(this$);if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,v_13924)))
{cljs.core.swap_BANG_.call(null,dos,cljs.core.assoc,dokey.call(null,k_13925__$1),v_13924);
} else
{if(cljs.core.fn_QMARK_.call(null,v_13924))
{cljs.core.swap_BANG_.call(null,ons,cljs.core.assoc,onkey.call(null,k_13925__$1),v_13924);
} else
{if(cljs.core._EQ_.call(null,k_13925__$1,"class"))
{var seq__13865_13927 = cljs.core.seq.call(null,clojure.string.split.call(null,v_13924,/ /));var chunk__13866_13928 = null;var count__13867_13929 = 0;var i__13868_13930 = 0;while(true){
if((i__13868_13930 < count__13867_13929))
{var cls_13931 = cljs.core._nth.call(null,chunk__13866_13928,i__13868_13930);e_13926.addClass(cls_13931);
{
var G__13932 = seq__13865_13927;
var G__13933 = chunk__13866_13928;
var G__13934 = count__13867_13929;
var G__13935 = (i__13868_13930 + 1);
seq__13865_13927 = G__13932;
chunk__13866_13928 = G__13933;
count__13867_13929 = G__13934;
i__13868_13930 = G__13935;
continue;
}
} else
{var temp__4092__auto___13936__$1 = cljs.core.seq.call(null,seq__13865_13927);if(temp__4092__auto___13936__$1)
{var seq__13865_13937__$1 = temp__4092__auto___13936__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13865_13937__$1))
{var c__10333__auto___13938 = cljs.core.chunk_first.call(null,seq__13865_13937__$1);{
var G__13939 = cljs.core.chunk_rest.call(null,seq__13865_13937__$1);
var G__13940 = c__10333__auto___13938;
var G__13941 = cljs.core.count.call(null,c__10333__auto___13938);
var G__13942 = 0;
seq__13865_13927 = G__13939;
chunk__13866_13928 = G__13940;
count__13867_13929 = G__13941;
i__13868_13930 = G__13942;
continue;
}
} else
{var cls_13943 = cljs.core.first.call(null,seq__13865_13937__$1);e_13926.addClass(cls_13943);
{
var G__13944 = cljs.core.next.call(null,seq__13865_13937__$1);
var G__13945 = null;
var G__13946 = 0;
var G__13947 = 0;
seq__13865_13927 = G__13944;
chunk__13866_13928 = G__13945;
count__13867_13929 = G__13946;
i__13868_13930 = G__13947;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,k_13925__$1,"css"))
{e_13926.css(cljs.core.clj__GT_js.call(null,v_13924));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core._EQ_.call(null,false,v_13924))
{e_13926.removeAttr(k_13925__$1);
} else
{if(cljs.core._EQ_.call(null,true,v_13924))
{e_13926.attr(k_13925__$1,k_13925__$1);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{e_13926.attr(k_13925__$1,[cljs.core.str(v_13924)].join(''));
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
var G__13948 = cljs.core.next.call(null,seq__13855_13916__$1);
var G__13949 = null;
var G__13950 = 0;
var G__13951 = 0;
seq__13855_13881 = G__13948;
chunk__13856_13882 = G__13949;
count__13857_13883 = G__13950;
i__13858_13884 = G__13951;
continue;
}
}
} else
{}
}
break;
}
if(cljs.core.seq.call(null,cljs.core.deref.call(null,dos)))
{setTimeout((function (){var seq__13869 = cljs.core.seq.call(null,cljs.core.deref.call(null,dos));var chunk__13870 = null;var count__13871 = 0;var i__13872 = 0;while(true){
if((i__13872 < count__13871))
{var vec__13873 = cljs.core._nth.call(null,chunk__13870,i__13872);var k = cljs.core.nth.call(null,vec__13873,0,null);var v = cljs.core.nth.call(null,vec__13873,1,null);tailrecursion.hoplon.do_BANG_.call(null,this$,k,cljs.core.deref.call(null,v));
cljs.core.add_watch.call(null,v,cljs.core.gensym.call(null),((function (seq__13869,chunk__13870,count__13871,i__13872,vec__13873,k,v){
return (function (p1__13826_SHARP_,p2__13827_SHARP_,p3__13828_SHARP_,p4__13825_SHARP_){return tailrecursion.hoplon.do_BANG_.call(null,this$,k,p4__13825_SHARP_);
});})(seq__13869,chunk__13870,count__13871,i__13872,vec__13873,k,v))
);
{
var G__13952 = seq__13869;
var G__13953 = chunk__13870;
var G__13954 = count__13871;
var G__13955 = (i__13872 + 1);
seq__13869 = G__13952;
chunk__13870 = G__13953;
count__13871 = G__13954;
i__13872 = G__13955;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__13869);if(temp__4092__auto__)
{var seq__13869__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13869__$1))
{var c__10333__auto__ = cljs.core.chunk_first.call(null,seq__13869__$1);{
var G__13956 = cljs.core.chunk_rest.call(null,seq__13869__$1);
var G__13957 = c__10333__auto__;
var G__13958 = cljs.core.count.call(null,c__10333__auto__);
var G__13959 = 0;
seq__13869 = G__13956;
chunk__13870 = G__13957;
count__13871 = G__13958;
i__13872 = G__13959;
continue;
}
} else
{var vec__13874 = cljs.core.first.call(null,seq__13869__$1);var k = cljs.core.nth.call(null,vec__13874,0,null);var v = cljs.core.nth.call(null,vec__13874,1,null);tailrecursion.hoplon.do_BANG_.call(null,this$,k,cljs.core.deref.call(null,v));
cljs.core.add_watch.call(null,v,cljs.core.gensym.call(null),((function (seq__13869,chunk__13870,count__13871,i__13872,vec__13874,k,v,seq__13869__$1,temp__4092__auto__){
return (function (p1__13826_SHARP_,p2__13827_SHARP_,p3__13828_SHARP_,p4__13825_SHARP_){return tailrecursion.hoplon.do_BANG_.call(null,this$,k,p4__13825_SHARP_);
});})(seq__13869,chunk__13870,count__13871,i__13872,vec__13874,k,v,seq__13869__$1,temp__4092__auto__))
);
{
var G__13960 = cljs.core.next.call(null,seq__13869__$1);
var G__13961 = null;
var G__13962 = 0;
var G__13963 = 0;
seq__13869 = G__13960;
chunk__13870 = G__13961;
count__13871 = G__13962;
i__13872 = G__13963;
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
{setTimeout((function (){var seq__13875 = cljs.core.seq.call(null,cljs.core.deref.call(null,ons));var chunk__13876 = null;var count__13877 = 0;var i__13878 = 0;while(true){
if((i__13878 < count__13877))
{var vec__13879 = cljs.core._nth.call(null,chunk__13876,i__13878);var k = cljs.core.nth.call(null,vec__13879,0,null);var v = cljs.core.nth.call(null,vec__13879,1,null);tailrecursion.hoplon.on_BANG_.call(null,this$,k,v);
{
var G__13964 = seq__13875;
var G__13965 = chunk__13876;
var G__13966 = count__13877;
var G__13967 = (i__13878 + 1);
seq__13875 = G__13964;
chunk__13876 = G__13965;
count__13877 = G__13966;
i__13878 = G__13967;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__13875);if(temp__4092__auto__)
{var seq__13875__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13875__$1))
{var c__10333__auto__ = cljs.core.chunk_first.call(null,seq__13875__$1);{
var G__13968 = cljs.core.chunk_rest.call(null,seq__13875__$1);
var G__13969 = c__10333__auto__;
var G__13970 = cljs.core.count.call(null,c__10333__auto__);
var G__13971 = 0;
seq__13875 = G__13968;
chunk__13876 = G__13969;
count__13877 = G__13970;
i__13878 = G__13971;
continue;
}
} else
{var vec__13880 = cljs.core.first.call(null,seq__13875__$1);var k = cljs.core.nth.call(null,vec__13880,0,null);var v = cljs.core.nth.call(null,vec__13880,1,null);tailrecursion.hoplon.on_BANG_.call(null,this$,k,v);
{
var G__13972 = cljs.core.next.call(null,seq__13875__$1);
var G__13973 = null;
var G__13974 = 0;
var G__13975 = 0;
seq__13875 = G__13972;
chunk__13876 = G__13973;
count__13877 = G__13974;
i__13878 = G__13975;
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
tailrecursion.hoplon.append_child = ((cljs.core.not.call(null,tailrecursion.hoplon.is_ie8))?(function (p1__13976_SHARP_,p2__13977_SHARP_){return p1__13976_SHARP_.appendChild(p2__13977_SHARP_);
}):(function (p1__13978_SHARP_,p2__13979_SHARP_){try{return p1__13978_SHARP_.appendChild(p2__13979_SHARP_);
}catch (e13980){if((e13980 instanceof Error))
{var _ = e13980;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13980;
} else
{return null;
}
}
}}));
tailrecursion.hoplon.add_children_BANG_ = (function add_children_BANG_(this$,kids){var node = (function (p1__13981_SHARP_){if(typeof p1__13981_SHARP_ === 'string')
{return tailrecursion.hoplon.$text.call(null,p1__13981_SHARP_);
} else
{if(cljs.core.truth_(tailrecursion.hoplon.node_QMARK_.call(null,p1__13981_SHARP_)))
{return p1__13981_SHARP_;
} else
{return null;
}
}
});var seq__13986_13990 = cljs.core.seq.call(null,cljs.core.keep.call(null,node,tailrecursion.hoplon.unsplice.call(null,kids)));var chunk__13987_13991 = null;var count__13988_13992 = 0;var i__13989_13993 = 0;while(true){
if((i__13989_13993 < count__13988_13992))
{var x_13994 = cljs.core._nth.call(null,chunk__13987_13991,i__13989_13993);tailrecursion.hoplon.append_child.call(null,this$,x_13994);
{
var G__13995 = seq__13986_13990;
var G__13996 = chunk__13987_13991;
var G__13997 = count__13988_13992;
var G__13998 = (i__13989_13993 + 1);
seq__13986_13990 = G__13995;
chunk__13987_13991 = G__13996;
count__13988_13992 = G__13997;
i__13989_13993 = G__13998;
continue;
}
} else
{var temp__4092__auto___13999 = cljs.core.seq.call(null,seq__13986_13990);if(temp__4092__auto___13999)
{var seq__13986_14000__$1 = temp__4092__auto___13999;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13986_14000__$1))
{var c__10333__auto___14001 = cljs.core.chunk_first.call(null,seq__13986_14000__$1);{
var G__14002 = cljs.core.chunk_rest.call(null,seq__13986_14000__$1);
var G__14003 = c__10333__auto___14001;
var G__14004 = cljs.core.count.call(null,c__10333__auto___14001);
var G__14005 = 0;
seq__13986_13990 = G__14002;
chunk__13987_13991 = G__14003;
count__13988_13992 = G__14004;
i__13989_13993 = G__14005;
continue;
}
} else
{var x_14006 = cljs.core.first.call(null,seq__13986_14000__$1);tailrecursion.hoplon.append_child.call(null,this$,x_14006);
{
var G__14007 = cljs.core.next.call(null,seq__13986_14000__$1);
var G__14008 = null;
var G__14009 = 0;
var G__14010 = 0;
seq__13986_13990 = G__14007;
chunk__13987_13991 = G__14008;
count__13988_13992 = G__14009;
i__13989_13993 = G__14010;
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
var G__14018__delegate = function (self__,args){var self____$1 = this;var this$ = self____$1;var vec__14012 = tailrecursion.hoplon.parse_args.call(null,args);var attr = cljs.core.nth.call(null,vec__14012,0,null);var kids = cljs.core.nth.call(null,vec__14012,1,null);if(cljs.core.truth_(this$.hoplonIFn))
{var G__14013 = this$;G__14013.hoplonIFn(attr,kids);
return G__14013;
} else
{var G__14014 = this$;tailrecursion.hoplon.add_attributes_BANG_.call(null,G__14014,attr);
tailrecursion.hoplon.add_children_BANG_.call(null,G__14014,kids);
return G__14014;
}
};
var G__14018 = function (self__,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__14018__delegate.call(this,self__,args);};
G__14018.cljs$lang$maxFixedArity = 1;
G__14018.cljs$lang$applyTo = (function (arglist__14019){
var self__ = cljs.core.first(arglist__14019);
var args = cljs.core.rest(arglist__14019);
return G__14018__delegate(self__,args);
});
G__14018.cljs$core$IFn$_invoke$arity$variadic = G__14018__delegate;
return G__14018;
})()
;
Element.prototype.apply = (function (self__,args14011){var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args14011)));
});
Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__14020__delegate = function (args){var this$ = this;var vec__14015 = tailrecursion.hoplon.parse_args.call(null,args);var attr = cljs.core.nth.call(null,vec__14015,0,null);var kids = cljs.core.nth.call(null,vec__14015,1,null);if(cljs.core.truth_(this$.hoplonIFn))
{var G__14016 = this$;G__14016.hoplonIFn(attr,kids);
return G__14016;
} else
{var G__14017 = this$;tailrecursion.hoplon.add_attributes_BANG_.call(null,G__14017,attr);
tailrecursion.hoplon.add_children_BANG_.call(null,G__14017,kids);
return G__14017;
}
};
var G__14020 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__14020__delegate.call(this,args);};
G__14020.cljs$lang$maxFixedArity = 0;
G__14020.cljs$lang$applyTo = (function (arglist__14021){
var args = cljs.core.seq(arglist__14021);
return G__14020__delegate(args);
});
G__14020.cljs$core$IFn$_invoke$arity$variadic = G__14020__delegate;
return G__14020;
})()
;
Element.prototype.cljs$core$IPrintWithWriter$ = true;
Element.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var this$__$1 = this;return cljs.core.write_all.call(null,writer,"#<Element: ",this$__$1.tagName,">");
});
tailrecursion.hoplon.make_singleton_ctor = (function make_singleton_ctor(tag){return (function() { 
var G__14022__delegate = function (args){var old = (document.getElementsByTagName(tag)[0]);var new$ = document.createElement(tag);if(cljs.core.truth_(old))
{old.parentNode.replaceChild(new$,old);
} else
{}
return cljs.core.apply.call(null,new$,args);
};
var G__14022 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__14022__delegate.call(this,args);};
G__14022.cljs$lang$maxFixedArity = 0;
G__14022.cljs$lang$applyTo = (function (arglist__14023){
var args = cljs.core.seq(arglist__14023);
return G__14022__delegate(args);
});
G__14022.cljs$core$IFn$_invoke$arity$variadic = G__14022__delegate;
return G__14022;
})()
;
});
tailrecursion.hoplon.make_elem_ctor = (function make_elem_ctor(tag){return (function() { 
var G__14024__delegate = function (args){return cljs.core.apply.call(null,document.createElement(tag),args);
};
var G__14024 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__14024__delegate.call(this,args);};
G__14024.cljs$lang$maxFixedArity = 0;
G__14024.cljs$lang$applyTo = (function (arglist__14025){
var args = cljs.core.seq(arglist__14025);
return G__14024__delegate(args);
});
G__14024.cljs$core$IFn$_invoke$arity$variadic = G__14024__delegate;
return G__14024;
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
tailrecursion.hoplon.$text = (function $text(p1__14026_SHARP_){return document.createTextNode(p1__14026_SHARP_);
});
tailrecursion.hoplon.$comment = (function $comment(p1__14027_SHARP_){return document.createComment(p1__14027_SHARP_);
});
tailrecursion.hoplon.initialized_QMARK_ = cljs.core.atom.call(null,false);
tailrecursion.hoplon._STAR_initfns_STAR_ = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
tailrecursion.hoplon.add_initfn_BANG_ = (function add_initfn_BANG_(f){if(cljs.core.truth_(cljs.core.deref.call(null,tailrecursion.hoplon.initialized_QMARK_)))
{return f.call(null);
} else
{return cljs.core.swap_BANG_.call(null,tailrecursion.hoplon._STAR_initfns_STAR_,cljs.core.conj,f);
}
});
tailrecursion.hoplon.init = (function init(){return setTimeout((function (){jQuery("body").on("submit",(function (p1__14028_SHARP_){return p1__14028_SHARP_.preventDefault();
}));
cljs.core.reset_BANG_.call(null,tailrecursion.hoplon.initialized_QMARK_,true);
var seq__14033 = cljs.core.seq.call(null,cljs.core.deref.call(null,tailrecursion.hoplon._STAR_initfns_STAR_));var chunk__14034 = null;var count__14035 = 0;var i__14036 = 0;while(true){
if((i__14036 < count__14035))
{var f = cljs.core._nth.call(null,chunk__14034,i__14036);f.call(null);
{
var G__14037 = seq__14033;
var G__14038 = chunk__14034;
var G__14039 = count__14035;
var G__14040 = (i__14036 + 1);
seq__14033 = G__14037;
chunk__14034 = G__14038;
count__14035 = G__14039;
i__14036 = G__14040;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__14033);if(temp__4092__auto__)
{var seq__14033__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14033__$1))
{var c__10333__auto__ = cljs.core.chunk_first.call(null,seq__14033__$1);{
var G__14041 = cljs.core.chunk_rest.call(null,seq__14033__$1);
var G__14042 = c__10333__auto__;
var G__14043 = cljs.core.count.call(null,c__10333__auto__);
var G__14044 = 0;
seq__14033 = G__14041;
chunk__14034 = G__14042;
count__14035 = G__14043;
i__14036 = G__14044;
continue;
}
} else
{var f = cljs.core.first.call(null,seq__14033__$1);f.call(null);
{
var G__14045 = cljs.core.next.call(null,seq__14033__$1);
var G__14046 = null;
var G__14047 = 0;
var G__14048 = 0;
seq__14033 = G__14045;
chunk__14034 = G__14046;
count__14035 = G__14047;
i__14036 = G__14048;
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
tailrecursion.hoplon.do_BANG_ = (function (){var method_table__10443__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__10444__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__10445__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__10446__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__10447__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",2558708147),new cljs.core.Keyword("tailrecursion.hoplon","default","tailrecursion.hoplon/default",1265562704)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("do!",(function (elem,key,val){return key;
}),new cljs.core.Keyword("tailrecursion.hoplon","default","tailrecursion.hoplon/default",1265562704),hierarchy__10447__auto__,method_table__10443__auto__,prefer_table__10444__auto__,method_cache__10445__auto__,cached_hierarchy__10446__auto__));
})();
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword("tailrecursion.hoplon","default","tailrecursion.hoplon/default",1265562704),(function (elem,key,val){return tailrecursion.hoplon.do_BANG_.call(null,elem,new cljs.core.Keyword(null,"attr","attr",1016909155),new cljs.core.PersistentArrayMap.fromArray([key,val], true, false));
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"value","value",1125876963),(function() { 
var G__14049__delegate = function (elem,_,args){var e = jQuery(elem);return cljs.core.apply.call(null,((cljs.core._EQ_.call(null,"checkbox",e.attr("type")))?tailrecursion.hoplon.check_val_BANG_:tailrecursion.hoplon.text_val_BANG_),e,args);
};
var G__14049 = function (elem,_,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__14049__delegate.call(this,elem,_,args);};
G__14049.cljs$lang$maxFixedArity = 2;
G__14049.cljs$lang$applyTo = (function (arglist__14050){
var elem = cljs.core.first(arglist__14050);
arglist__14050 = cljs.core.next(arglist__14050);
var _ = cljs.core.first(arglist__14050);
var args = cljs.core.rest(arglist__14050);
return G__14049__delegate(elem,_,args);
});
G__14049.cljs$core$IFn$_invoke$arity$variadic = G__14049__delegate;
return G__14049;
})()
);
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"attr","attr",1016909155),(function (elem,_,kvs){return elem.call(null,kvs);
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"class","class",1108647146),(function (elem,_,kvs){var elem__$1 = jQuery(elem);var seq__14051 = cljs.core.seq.call(null,kvs);var chunk__14052 = null;var count__14053 = 0;var i__14054 = 0;while(true){
if((i__14054 < count__14053))
{var vec__14055 = cljs.core._nth.call(null,chunk__14052,i__14054);var c = cljs.core.nth.call(null,vec__14055,0,null);var p_QMARK_ = cljs.core.nth.call(null,vec__14055,1,null);elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));
{
var G__14057 = seq__14051;
var G__14058 = chunk__14052;
var G__14059 = count__14053;
var G__14060 = (i__14054 + 1);
seq__14051 = G__14057;
chunk__14052 = G__14058;
count__14053 = G__14059;
i__14054 = G__14060;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__14051);if(temp__4092__auto__)
{var seq__14051__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14051__$1))
{var c__10333__auto__ = cljs.core.chunk_first.call(null,seq__14051__$1);{
var G__14061 = cljs.core.chunk_rest.call(null,seq__14051__$1);
var G__14062 = c__10333__auto__;
var G__14063 = cljs.core.count.call(null,c__10333__auto__);
var G__14064 = 0;
seq__14051 = G__14061;
chunk__14052 = G__14062;
count__14053 = G__14063;
i__14054 = G__14064;
continue;
}
} else
{var vec__14056 = cljs.core.first.call(null,seq__14051__$1);var c = cljs.core.nth.call(null,vec__14056,0,null);var p_QMARK_ = cljs.core.nth.call(null,vec__14056,1,null);elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));
{
var G__14065 = cljs.core.next.call(null,seq__14051__$1);
var G__14066 = null;
var G__14067 = 0;
var G__14068 = 0;
seq__14051 = G__14065;
chunk__14052 = G__14066;
count__14053 = G__14067;
i__14054 = G__14068;
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
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"css","css",1014003061),(function (elem,_,kvs){var e = jQuery(elem);var seq__14069 = cljs.core.seq.call(null,kvs);var chunk__14070 = null;var count__14071 = 0;var i__14072 = 0;while(true){
if((i__14072 < count__14071))
{var vec__14073 = cljs.core._nth.call(null,chunk__14070,i__14072);var k = cljs.core.nth.call(null,vec__14073,0,null);var v = cljs.core.nth.call(null,vec__14073,1,null);e.css(cljs.core.name.call(null,k),[cljs.core.str(v)].join(''));
{
var G__14075 = seq__14069;
var G__14076 = chunk__14070;
var G__14077 = count__14071;
var G__14078 = (i__14072 + 1);
seq__14069 = G__14075;
chunk__14070 = G__14076;
count__14071 = G__14077;
i__14072 = G__14078;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__14069);if(temp__4092__auto__)
{var seq__14069__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14069__$1))
{var c__10333__auto__ = cljs.core.chunk_first.call(null,seq__14069__$1);{
var G__14079 = cljs.core.chunk_rest.call(null,seq__14069__$1);
var G__14080 = c__10333__auto__;
var G__14081 = cljs.core.count.call(null,c__10333__auto__);
var G__14082 = 0;
seq__14069 = G__14079;
chunk__14070 = G__14080;
count__14071 = G__14081;
i__14072 = G__14082;
continue;
}
} else
{var vec__14074 = cljs.core.first.call(null,seq__14069__$1);var k = cljs.core.nth.call(null,vec__14074,0,null);var v = cljs.core.nth.call(null,vec__14074,1,null);e.css(cljs.core.name.call(null,k),[cljs.core.str(v)].join(''));
{
var G__14083 = cljs.core.next.call(null,seq__14069__$1);
var G__14084 = null;
var G__14085 = 0;
var G__14086 = 0;
seq__14069 = G__14083;
chunk__14070 = G__14084;
count__14071 = G__14085;
i__14072 = G__14086;
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
tailrecursion.hoplon.on_BANG_ = (function (){var method_table__10443__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__10444__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__10445__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__10446__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__10447__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",2558708147),new cljs.core.Keyword("tailrecursion.hoplon","default","tailrecursion.hoplon/default",1265562704)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("on!",(function (elem,event,callback){return event;
}),new cljs.core.Keyword("tailrecursion.hoplon","default","tailrecursion.hoplon/default",1265562704),hierarchy__10447__auto__,method_table__10443__auto__,prefer_table__10444__auto__,method_cache__10445__auto__,cached_hierarchy__10446__auto__));
})();
cljs.core._add_method.call(null,tailrecursion.hoplon.on_BANG_,new cljs.core.Keyword("tailrecursion.hoplon","default","tailrecursion.hoplon/default",1265562704),(function (elem,event,callback){return tailrecursion.hoplon.when_dom.call(null,elem,(function (){return jQuery(elem).on(cljs.core.name.call(null,event),callback);
}));
}));
tailrecursion.hoplon.loop_tpl_STAR_ = (function loop_tpl_STAR_(items,reverse_QMARK_,tpl){var pool_size = tailrecursion.javelin.cell.call(null,0);var items_seq = tailrecursion.javelin.lift.call(null,((function (pool_size){
return (function (G__14113,G__14112){return G__14112.call(null,G__14113);
});})(pool_size))
).call(null,items,cljs.core.seq);var cur_count = tailrecursion.javelin.lift.call(null,((function (pool_size,items_seq){
return (function (G__14114,G__14115){return G__14114.call(null,G__14115);
});})(pool_size,items_seq))
).call(null,cljs.core.count,items_seq);var show_ith_QMARK_ = ((function (pool_size,items_seq,cur_count){
return (function (p1__14087_SHARP_){return tailrecursion.javelin.lift.call(null,((function (pool_size,items_seq,cur_count){
return (function (G__14116,G__14117){return (G__14116 < G__14117);
});})(pool_size,items_seq,cur_count))
).call(null,p1__14087_SHARP_,cur_count);
});})(pool_size,items_seq,cur_count))
;var ith_item = ((function (pool_size,items_seq,cur_count,show_ith_QMARK_){
return (function (p1__14088_SHARP_){return tailrecursion.javelin.lift.call(null,((function (pool_size,items_seq,cur_count,show_ith_QMARK_){
return (function (G__14118,G__14120,G__14119){return G__14118.call(null,G__14119,G__14120);
});})(pool_size,items_seq,cur_count,show_ith_QMARK_))
).call(null,tailrecursion.hoplon.safe_nth,p1__14088_SHARP_,items_seq);
});})(pool_size,items_seq,cur_count,show_ith_QMARK_))
;var d = tailrecursion.hoplon.span.call(null);tailrecursion.hoplon.when_dom.call(null,d,(function (){var p = d.parentNode;p.removeChild(d);
return tailrecursion.javelin.lift.call(null,(function (G__14134,G__14132,G__14128,G__14129,G__14126,G__14130,G__14125,G__14127,G__14133,G__14131){if(cljs.core.truth_((G__14125 < G__14126)))
{var seq__14121_14135 = cljs.core.seq.call(null,G__14127.call(null,G__14125,G__14126));var chunk__14122_14136 = null;var count__14123_14137 = 0;var i__14124_14138 = 0;while(true){
if(cljs.core.truth_((i__14124_14138 < count__14123_14137)))
{var i_14139 = cljs.core._nth.call(null,chunk__14122_14136,i__14124_14138);var e_14140 = G__14128.call(null,G__14129.call(null,i_14139)).call(null,new cljs.core.Keyword(null,"do-toggle","do-toggle",1250159176),G__14130.call(null,i_14139));if(cljs.core.not.call(null,G__14131))
{G__14132.appendChild(e_14140);
} else
{G__14132.insertBefore(e_14140,G__14132.firstChild);
}
{
var G__14141 = seq__14121_14135;
var G__14142 = chunk__14122_14136;
var G__14143 = count__14123_14137;
var G__14144 = (i__14124_14138 + 1);
seq__14121_14135 = G__14141;
chunk__14122_14136 = G__14142;
count__14123_14137 = G__14143;
i__14124_14138 = G__14144;
continue;
}
} else
{var temp__4092__auto___14145 = cljs.core.seq.call(null,seq__14121_14135);if(temp__4092__auto___14145)
{var seq__14121_14146__$1 = temp__4092__auto___14145;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14121_14146__$1))
{var c__10333__auto___14147 = cljs.core.chunk_first.call(null,seq__14121_14146__$1);{
var G__14148 = cljs.core.chunk_rest.call(null,seq__14121_14146__$1);
var G__14149 = c__10333__auto___14147;
var G__14150 = cljs.core.count.call(null,c__10333__auto___14147);
var G__14151 = 0;
seq__14121_14135 = G__14148;
chunk__14122_14136 = G__14149;
count__14123_14137 = G__14150;
i__14124_14138 = G__14151;
continue;
}
} else
{var i_14152 = cljs.core.first.call(null,seq__14121_14146__$1);var e_14153 = G__14128.call(null,G__14129.call(null,i_14152)).call(null,new cljs.core.Keyword(null,"do-toggle","do-toggle",1250159176),G__14130.call(null,i_14152));if(cljs.core.not.call(null,G__14131))
{G__14132.appendChild(e_14153);
} else
{G__14132.insertBefore(e_14153,G__14132.firstChild);
}
{
var G__14154 = cljs.core.next.call(null,seq__14121_14146__$1);
var G__14155 = null;
var G__14156 = 0;
var G__14157 = 0;
seq__14121_14135 = G__14154;
chunk__14122_14136 = G__14155;
count__14123_14137 = G__14156;
i__14124_14138 = G__14157;
continue;
}
}
} else
{}
}
break;
}
return G__14133.call(null,G__14134,G__14126);
} else
{return null;
}
})).call(null,tailrecursion.javelin.cell.call(null,pool_size),p,tpl,ith_item,cur_count,show_ith_QMARK_,pool_size,cljs.core.range,cljs.core.reset_BANG_,reverse_QMARK_);
}));
return d;
});
