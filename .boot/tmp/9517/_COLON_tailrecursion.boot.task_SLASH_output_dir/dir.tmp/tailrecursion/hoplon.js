// Compiled by ClojureScript 0.0-2202
goog.provide('tailrecursion.hoplon');
goog.require('cljs.core');
goog.require('tailrecursion.javelin');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('tailrecursion.javelin');
tailrecursion.hoplon.is_ie8 = cljs.core.not.call(null,(window["Node"]));
tailrecursion.hoplon.node_QMARK_ = ((cljs.core.not.call(null,tailrecursion.hoplon.is_ie8))?(function (p1__205525_SHARP_){return (p1__205525_SHARP_ instanceof Node);
}):(function (p1__205526_SHARP_){try{return p1__205526_SHARP_.nodeType;
}catch (e205527){if((e205527 instanceof Error))
{var _ = e205527;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e205527;
} else
{return null;
}
}
}}));
tailrecursion.hoplon.vector_QMARK__STAR_ = ((cljs.core.not.call(null,tailrecursion.hoplon.is_ie8))?cljs.core.vector_QMARK_:(function (p1__205528_SHARP_){try{return cljs.core.vector_QMARK_.call(null,p1__205528_SHARP_);
}catch (e205529){if((e205529 instanceof Error))
{var _ = e205529;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e205529;
} else
{return null;
}
}
}}));
tailrecursion.hoplon.seq_QMARK__STAR_ = ((cljs.core.not.call(null,tailrecursion.hoplon.is_ie8))?cljs.core.seq_QMARK_:(function (p1__205530_SHARP_){try{return cljs.core.seq_QMARK_.call(null,p1__205530_SHARP_);
}catch (e205531){if((e205531 instanceof Error))
{var _ = e205531;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e205531;
} else
{return null;
}
}
}}));
cljs.core.set_print_fn_BANG_.call(null,(function (p1__205532_SHARP_){if(cljs.core.truth_((function (){var and__201484__auto__ = console;if(cljs.core.truth_(and__201484__auto__))
{return console.log;
} else
{return and__201484__auto__;
}
})()))
{return console.log(p1__205532_SHARP_);
} else
{return null;
}
}));
tailrecursion.hoplon.safe_nth = (function() {
var safe_nth = null;
var safe_nth__2 = (function (coll,index){return safe_nth.call(null,coll,index,null);
});
var safe_nth__3 = (function (coll,index,not_found){try{return cljs.core.nth.call(null,coll,index,not_found);
}catch (e205534){if((e205534 instanceof Error))
{var _ = e205534;return not_found;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e205534;
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
tailrecursion.hoplon.unsplice = (function unsplice(forms){return cljs.core.mapcat.call(null,(function (p1__205535_SHARP_){if(cljs.core.truth_((function (){var or__201496__auto__ = tailrecursion.hoplon.seq_QMARK__STAR_.call(null,p1__205535_SHARP_);if(cljs.core.truth_(or__201496__auto__))
{return or__201496__auto__;
} else
{return tailrecursion.hoplon.vector_QMARK__STAR_.call(null,p1__205535_SHARP_);
}
})()))
{return unsplice.call(null,p1__205535_SHARP_);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__205535_SHARP_], null);
}
}),forms);
});
tailrecursion.hoplon.when_dom = (function when_dom(this$,f){if(!((this$ instanceof Element)))
{return f.call(null);
} else
{return tailrecursion.hoplon.timeout.call(null,(function doit(){if(cljs.core.truth_(document.documentElement.contains(this$)))
{return f.call(null);
} else
{return tailrecursion.hoplon.timeout.call(null,doit,20);
}
}));
}
});
tailrecursion.hoplon.parse_args = (function parse_args(p__205538){var vec__205540 = p__205538;var head = cljs.core.nth.call(null,vec__205540,0,null);var tail = cljs.core.nthnext.call(null,vec__205540,1);var args = vec__205540;var kw1_QMARK_ = cljs.core.comp.call(null,cljs.core.keyword_QMARK_,cljs.core.first);var mkkw = ((function (kw1_QMARK_,vec__205540,head,tail,args){
return (function (p1__205536_SHARP_){return cljs.core.map.call(null,cljs.core.vec,cljs.core.take_while.call(null,kw1_QMARK_,cljs.core.partition.call(null,2,p1__205536_SHARP_)));
});})(kw1_QMARK_,vec__205540,head,tail,args))
;var drkw = ((function (kw1_QMARK_,mkkw,vec__205540,head,tail,args){
return (function (p1__205537_SHARP_){return cljs.core.mapcat.call(null,cljs.core.identity,cljs.core.drop_while.call(null,kw1_QMARK_,cljs.core.partition.call(null,2,2,cljs.core.PersistentVector.EMPTY,p1__205537_SHARP_)));
});})(kw1_QMARK_,mkkw,vec__205540,head,tail,args))
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
tailrecursion.hoplon.add_attributes_BANG_ = (function add_attributes_BANG_(this$,attr){var key_STAR_ = (function (p1__205542_SHARP_,p2__205541_SHARP_){var n = (function (){var s = cljs.core.name.call(null,p2__205541_SHARP_);var c = cljs.core.last.call(null,s);if(!(cljs.core._EQ_.call(null,"=",c)))
{return s;
} else
{return s.slice(0,-1);
}
})();var p = n.substr(0,3);return cljs.core.keyword.call(null,cljs.core.namespace.call(null,p2__205541_SHARP_),((!(cljs.core._EQ_.call(null,p1__205542_SHARP_,p)))?n:n.substr(3)));
});var dokey = cljs.core.partial.call(null,key_STAR_,"do-");var onkey = cljs.core.partial.call(null,key_STAR_,"on-");var dos = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ons = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var addcls = ((function (key_STAR_,dokey,onkey,dos,ons){
return (function (p1__205543_SHARP_,p2__205544_SHARP_){return clojure.string.join.call(null," ",cljs.core.into.call(null,cljs.core.set.call(null,clojure.string.split.call(null,p1__205543_SHARP_,/ /)),clojure.string.split.call(null,p2__205544_SHARP_,/ /)));
});})(key_STAR_,dokey,onkey,dos,ons))
;var seq__205567_205585 = cljs.core.seq.call(null,attr);var chunk__205568_205586 = null;var count__205569_205587 = 0;var i__205570_205588 = 0;while(true){
if((i__205570_205588 < count__205569_205587))
{var vec__205571_205589 = cljs.core._nth.call(null,chunk__205568_205586,i__205570_205588);var k_205590 = cljs.core.nth.call(null,vec__205571_205589,0,null);var v_205591 = cljs.core.nth.call(null,vec__205571_205589,1,null);if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,v_205591)))
{cljs.core.swap_BANG_.call(null,dos,cljs.core.assoc,dokey.call(null,k_205590),v_205591);
} else
{if(cljs.core.fn_QMARK_.call(null,v_205591))
{cljs.core.swap_BANG_.call(null,ons,cljs.core.assoc,onkey.call(null,k_205590),v_205591);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{tailrecursion.hoplon.do_BANG_.call(null,this$,dokey.call(null,k_205590),v_205591);
} else
{}
}
}
{
var G__205592 = seq__205567_205585;
var G__205593 = chunk__205568_205586;
var G__205594 = count__205569_205587;
var G__205595 = (i__205570_205588 + 1);
seq__205567_205585 = G__205592;
chunk__205568_205586 = G__205593;
count__205569_205587 = G__205594;
i__205570_205588 = G__205595;
continue;
}
} else
{var temp__4092__auto___205596 = cljs.core.seq.call(null,seq__205567_205585);if(temp__4092__auto___205596)
{var seq__205567_205597__$1 = temp__4092__auto___205596;if(cljs.core.chunked_seq_QMARK_.call(null,seq__205567_205597__$1))
{var c__202244__auto___205598 = cljs.core.chunk_first.call(null,seq__205567_205597__$1);{
var G__205599 = cljs.core.chunk_rest.call(null,seq__205567_205597__$1);
var G__205600 = c__202244__auto___205598;
var G__205601 = cljs.core.count.call(null,c__202244__auto___205598);
var G__205602 = 0;
seq__205567_205585 = G__205599;
chunk__205568_205586 = G__205600;
count__205569_205587 = G__205601;
i__205570_205588 = G__205602;
continue;
}
} else
{var vec__205572_205603 = cljs.core.first.call(null,seq__205567_205597__$1);var k_205604 = cljs.core.nth.call(null,vec__205572_205603,0,null);var v_205605 = cljs.core.nth.call(null,vec__205572_205603,1,null);if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,v_205605)))
{cljs.core.swap_BANG_.call(null,dos,cljs.core.assoc,dokey.call(null,k_205604),v_205605);
} else
{if(cljs.core.fn_QMARK_.call(null,v_205605))
{cljs.core.swap_BANG_.call(null,ons,cljs.core.assoc,onkey.call(null,k_205604),v_205605);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{tailrecursion.hoplon.do_BANG_.call(null,this$,dokey.call(null,k_205604),v_205605);
} else
{}
}
}
{
var G__205606 = cljs.core.next.call(null,seq__205567_205597__$1);
var G__205607 = null;
var G__205608 = 0;
var G__205609 = 0;
seq__205567_205585 = G__205606;
chunk__205568_205586 = G__205607;
count__205569_205587 = G__205608;
i__205570_205588 = G__205609;
continue;
}
}
} else
{}
}
break;
}
if(cljs.core.seq.call(null,cljs.core.deref.call(null,dos)))
{setTimeout(((function (key_STAR_,dokey,onkey,dos,ons,addcls){
return (function (){var seq__205573 = cljs.core.seq.call(null,cljs.core.deref.call(null,dos));var chunk__205574 = null;var count__205575 = 0;var i__205576 = 0;while(true){
if((i__205576 < count__205575))
{var vec__205577 = cljs.core._nth.call(null,chunk__205574,i__205576);var k = cljs.core.nth.call(null,vec__205577,0,null);var v = cljs.core.nth.call(null,vec__205577,1,null);tailrecursion.hoplon.do_BANG_.call(null,this$,k,cljs.core.deref.call(null,v));
cljs.core.add_watch.call(null,v,cljs.core.gensym.call(null),((function (seq__205573,chunk__205574,count__205575,i__205576,vec__205577,k,v,key_STAR_,dokey,onkey,dos,ons,addcls){
return (function (p1__205546_SHARP_,p2__205547_SHARP_,p3__205548_SHARP_,p4__205545_SHARP_){return tailrecursion.hoplon.do_BANG_.call(null,this$,k,p4__205545_SHARP_);
});})(seq__205573,chunk__205574,count__205575,i__205576,vec__205577,k,v,key_STAR_,dokey,onkey,dos,ons,addcls))
);
{
var G__205610 = seq__205573;
var G__205611 = chunk__205574;
var G__205612 = count__205575;
var G__205613 = (i__205576 + 1);
seq__205573 = G__205610;
chunk__205574 = G__205611;
count__205575 = G__205612;
i__205576 = G__205613;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__205573);if(temp__4092__auto__)
{var seq__205573__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__205573__$1))
{var c__202244__auto__ = cljs.core.chunk_first.call(null,seq__205573__$1);{
var G__205614 = cljs.core.chunk_rest.call(null,seq__205573__$1);
var G__205615 = c__202244__auto__;
var G__205616 = cljs.core.count.call(null,c__202244__auto__);
var G__205617 = 0;
seq__205573 = G__205614;
chunk__205574 = G__205615;
count__205575 = G__205616;
i__205576 = G__205617;
continue;
}
} else
{var vec__205578 = cljs.core.first.call(null,seq__205573__$1);var k = cljs.core.nth.call(null,vec__205578,0,null);var v = cljs.core.nth.call(null,vec__205578,1,null);tailrecursion.hoplon.do_BANG_.call(null,this$,k,cljs.core.deref.call(null,v));
cljs.core.add_watch.call(null,v,cljs.core.gensym.call(null),((function (seq__205573,chunk__205574,count__205575,i__205576,vec__205578,k,v,seq__205573__$1,temp__4092__auto__,key_STAR_,dokey,onkey,dos,ons,addcls){
return (function (p1__205546_SHARP_,p2__205547_SHARP_,p3__205548_SHARP_,p4__205545_SHARP_){return tailrecursion.hoplon.do_BANG_.call(null,this$,k,p4__205545_SHARP_);
});})(seq__205573,chunk__205574,count__205575,i__205576,vec__205578,k,v,seq__205573__$1,temp__4092__auto__,key_STAR_,dokey,onkey,dos,ons,addcls))
);
{
var G__205618 = cljs.core.next.call(null,seq__205573__$1);
var G__205619 = null;
var G__205620 = 0;
var G__205621 = 0;
seq__205573 = G__205618;
chunk__205574 = G__205619;
count__205575 = G__205620;
i__205576 = G__205621;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(key_STAR_,dokey,onkey,dos,ons,addcls))
,0);
} else
{}
if(cljs.core.seq.call(null,cljs.core.deref.call(null,ons)))
{setTimeout(((function (key_STAR_,dokey,onkey,dos,ons,addcls){
return (function (){var seq__205579 = cljs.core.seq.call(null,cljs.core.deref.call(null,ons));var chunk__205580 = null;var count__205581 = 0;var i__205582 = 0;while(true){
if((i__205582 < count__205581))
{var vec__205583 = cljs.core._nth.call(null,chunk__205580,i__205582);var k = cljs.core.nth.call(null,vec__205583,0,null);var v = cljs.core.nth.call(null,vec__205583,1,null);tailrecursion.hoplon.on_BANG_.call(null,this$,k,v);
{
var G__205622 = seq__205579;
var G__205623 = chunk__205580;
var G__205624 = count__205581;
var G__205625 = (i__205582 + 1);
seq__205579 = G__205622;
chunk__205580 = G__205623;
count__205581 = G__205624;
i__205582 = G__205625;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__205579);if(temp__4092__auto__)
{var seq__205579__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__205579__$1))
{var c__202244__auto__ = cljs.core.chunk_first.call(null,seq__205579__$1);{
var G__205626 = cljs.core.chunk_rest.call(null,seq__205579__$1);
var G__205627 = c__202244__auto__;
var G__205628 = cljs.core.count.call(null,c__202244__auto__);
var G__205629 = 0;
seq__205579 = G__205626;
chunk__205580 = G__205627;
count__205581 = G__205628;
i__205582 = G__205629;
continue;
}
} else
{var vec__205584 = cljs.core.first.call(null,seq__205579__$1);var k = cljs.core.nth.call(null,vec__205584,0,null);var v = cljs.core.nth.call(null,vec__205584,1,null);tailrecursion.hoplon.on_BANG_.call(null,this$,k,v);
{
var G__205630 = cljs.core.next.call(null,seq__205579__$1);
var G__205631 = null;
var G__205632 = 0;
var G__205633 = 0;
seq__205579 = G__205630;
chunk__205580 = G__205631;
count__205581 = G__205632;
i__205582 = G__205633;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(key_STAR_,dokey,onkey,dos,ons,addcls))
,0);
} else
{}
return this$;
});
tailrecursion.hoplon.append_child = ((cljs.core.not.call(null,tailrecursion.hoplon.is_ie8))?(function (p1__205634_SHARP_,p2__205635_SHARP_){return p1__205634_SHARP_.appendChild(p2__205635_SHARP_);
}):(function (p1__205636_SHARP_,p2__205637_SHARP_){try{return p1__205636_SHARP_.appendChild(p2__205637_SHARP_);
}catch (e205638){if((e205638 instanceof Error))
{var _ = e205638;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e205638;
} else
{return null;
}
}
}}));
tailrecursion.hoplon.replace_children_BANG_ = (function replace_children_BANG_(this$,new_children){jQuery(this$).empty();
return tailrecursion.hoplon.add_children_BANG_.call(null,this$,((cljs.core.sequential_QMARK_.call(null,new_children))?new_children:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_children], null)));
});
tailrecursion.hoplon.add_children_BANG_ = (function add_children_BANG_(this$,p__205644){var vec__205650 = p__205644;var child_cell = cljs.core.nth.call(null,vec__205650,0,null);var _ = cljs.core.nthnext.call(null,vec__205650,1);var kids = vec__205650;if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,child_cell)))
{tailrecursion.hoplon.replace_children_BANG_.call(null,this$,cljs.core.deref.call(null,child_cell));
cljs.core.add_watch.call(null,child_cell,cljs.core.gensym.call(null),((function (vec__205650,child_cell,_,kids){
return (function (p1__205640_SHARP_,p2__205641_SHARP_,p3__205642_SHARP_,p4__205639_SHARP_){return tailrecursion.hoplon.replace_children_BANG_.call(null,this$,p4__205639_SHARP_);
});})(vec__205650,child_cell,_,kids))
);
} else
{var node_205655 = ((function (vec__205650,child_cell,_,kids){
return (function (p1__205643_SHARP_){if(typeof p1__205643_SHARP_ === 'string')
{return tailrecursion.hoplon.$text.call(null,p1__205643_SHARP_);
} else
{if(cljs.core.truth_(tailrecursion.hoplon.node_QMARK_.call(null,p1__205643_SHARP_)))
{return p1__205643_SHARP_;
} else
{return null;
}
}
});})(vec__205650,child_cell,_,kids))
;var seq__205651_205656 = cljs.core.seq.call(null,cljs.core.keep.call(null,node_205655,tailrecursion.hoplon.unsplice.call(null,kids)));var chunk__205652_205657 = null;var count__205653_205658 = 0;var i__205654_205659 = 0;while(true){
if((i__205654_205659 < count__205653_205658))
{var x_205660 = cljs.core._nth.call(null,chunk__205652_205657,i__205654_205659);tailrecursion.hoplon.append_child.call(null,this$,x_205660);
{
var G__205661 = seq__205651_205656;
var G__205662 = chunk__205652_205657;
var G__205663 = count__205653_205658;
var G__205664 = (i__205654_205659 + 1);
seq__205651_205656 = G__205661;
chunk__205652_205657 = G__205662;
count__205653_205658 = G__205663;
i__205654_205659 = G__205664;
continue;
}
} else
{var temp__4092__auto___205665 = cljs.core.seq.call(null,seq__205651_205656);if(temp__4092__auto___205665)
{var seq__205651_205666__$1 = temp__4092__auto___205665;if(cljs.core.chunked_seq_QMARK_.call(null,seq__205651_205666__$1))
{var c__202244__auto___205667 = cljs.core.chunk_first.call(null,seq__205651_205666__$1);{
var G__205668 = cljs.core.chunk_rest.call(null,seq__205651_205666__$1);
var G__205669 = c__202244__auto___205667;
var G__205670 = cljs.core.count.call(null,c__202244__auto___205667);
var G__205671 = 0;
seq__205651_205656 = G__205668;
chunk__205652_205657 = G__205669;
count__205653_205658 = G__205670;
i__205654_205659 = G__205671;
continue;
}
} else
{var x_205672 = cljs.core.first.call(null,seq__205651_205666__$1);tailrecursion.hoplon.append_child.call(null,this$,x_205672);
{
var G__205673 = cljs.core.next.call(null,seq__205651_205666__$1);
var G__205674 = null;
var G__205675 = 0;
var G__205676 = 0;
seq__205651_205656 = G__205673;
chunk__205652_205657 = G__205674;
count__205653_205658 = G__205675;
i__205654_205659 = G__205676;
continue;
}
}
} else
{}
}
break;
}
}
return this$;
});
tailrecursion.hoplon.on_append_BANG_ = (function on_append_BANG_(this$,f){return this$.hoplonIFn = f;
});
Element.prototype.cljs$core$IFn$ = true;
Element.prototype.call = (function() { 
var G__205684__delegate = function (self__,args){var self____$1 = this;var this$ = self____$1;var vec__205678 = tailrecursion.hoplon.parse_args.call(null,args);var attr = cljs.core.nth.call(null,vec__205678,0,null);var kids = cljs.core.nth.call(null,vec__205678,1,null);if(cljs.core.truth_(this$.hoplonIFn))
{var G__205679 = this$;G__205679.hoplonIFn(attr,kids);
return G__205679;
} else
{var G__205680 = this$;tailrecursion.hoplon.add_attributes_BANG_.call(null,G__205680,attr);
tailrecursion.hoplon.add_children_BANG_.call(null,G__205680,kids);
return G__205680;
}
};
var G__205684 = function (self__,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__205684__delegate.call(this,self__,args);};
G__205684.cljs$lang$maxFixedArity = 1;
G__205684.cljs$lang$applyTo = (function (arglist__205685){
var self__ = cljs.core.first(arglist__205685);
var args = cljs.core.rest(arglist__205685);
return G__205684__delegate(self__,args);
});
G__205684.cljs$core$IFn$_invoke$arity$variadic = G__205684__delegate;
return G__205684;
})()
;
Element.prototype.apply = (function (self__,args205677){var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args205677)));
});
Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__205686__delegate = function (args){var this$ = this;var vec__205681 = tailrecursion.hoplon.parse_args.call(null,args);var attr = cljs.core.nth.call(null,vec__205681,0,null);var kids = cljs.core.nth.call(null,vec__205681,1,null);if(cljs.core.truth_(this$.hoplonIFn))
{var G__205682 = this$;G__205682.hoplonIFn(attr,kids);
return G__205682;
} else
{var G__205683 = this$;tailrecursion.hoplon.add_attributes_BANG_.call(null,G__205683,attr);
tailrecursion.hoplon.add_children_BANG_.call(null,G__205683,kids);
return G__205683;
}
};
var G__205686 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__205686__delegate.call(this,args);};
G__205686.cljs$lang$maxFixedArity = 0;
G__205686.cljs$lang$applyTo = (function (arglist__205687){
var args = cljs.core.seq(arglist__205687);
return G__205686__delegate(args);
});
G__205686.cljs$core$IFn$_invoke$arity$variadic = G__205686__delegate;
return G__205686;
})()
;
Element.prototype.cljs$core$IPrintWithWriter$ = true;
Element.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var this$__$1 = this;return cljs.core.write_all.call(null,writer,"#<Element: ",this$__$1.tagName,">");
});
tailrecursion.hoplon.make_singleton_ctor = (function make_singleton_ctor(tag){return (function() { 
var G__205688__delegate = function (args){var old = (document.getElementsByTagName(tag)[0]);var new$ = document.createElement(tag);if(cljs.core.truth_(old))
{old.parentNode.replaceChild(new$,old);
} else
{}
return cljs.core.apply.call(null,new$,args);
};
var G__205688 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__205688__delegate.call(this,args);};
G__205688.cljs$lang$maxFixedArity = 0;
G__205688.cljs$lang$applyTo = (function (arglist__205689){
var args = cljs.core.seq(arglist__205689);
return G__205688__delegate(args);
});
G__205688.cljs$core$IFn$_invoke$arity$variadic = G__205688__delegate;
return G__205688;
})()
;
});
tailrecursion.hoplon.make_elem_ctor = (function make_elem_ctor(tag){return (function() { 
var G__205690__delegate = function (args){return cljs.core.apply.call(null,document.createElement(tag),args);
};
var G__205690 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__205690__delegate.call(this,args);};
G__205690.cljs$lang$maxFixedArity = 0;
G__205690.cljs$lang$applyTo = (function (arglist__205691){
var args = cljs.core.seq(arglist__205691);
return G__205690__delegate(args);
});
G__205690.cljs$core$IFn$_invoke$arity$variadic = G__205690__delegate;
return G__205690;
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
tailrecursion.hoplon.$text = (function $text(p1__205692_SHARP_){return document.createTextNode(p1__205692_SHARP_);
});
tailrecursion.hoplon.$comment = (function $comment(p1__205693_SHARP_){return document.createComment(p1__205693_SHARP_);
});
tailrecursion.hoplon.initialized_QMARK_ = cljs.core.atom.call(null,false);
tailrecursion.hoplon._STAR_initfns_STAR_ = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
tailrecursion.hoplon.add_initfn_BANG_ = (function add_initfn_BANG_(f){if(cljs.core.truth_(cljs.core.deref.call(null,tailrecursion.hoplon.initialized_QMARK_)))
{return f.call(null);
} else
{return cljs.core.swap_BANG_.call(null,tailrecursion.hoplon._STAR_initfns_STAR_,cljs.core.conj,f);
}
});
tailrecursion.hoplon.init = (function init(){return setTimeout((function (){jQuery("body").on("submit",(function (p1__205694_SHARP_){return p1__205694_SHARP_.preventDefault();
}));
cljs.core.reset_BANG_.call(null,tailrecursion.hoplon.initialized_QMARK_,true);
var seq__205699 = cljs.core.seq.call(null,cljs.core.deref.call(null,tailrecursion.hoplon._STAR_initfns_STAR_));var chunk__205700 = null;var count__205701 = 0;var i__205702 = 0;while(true){
if((i__205702 < count__205701))
{var f = cljs.core._nth.call(null,chunk__205700,i__205702);f.call(null);
{
var G__205703 = seq__205699;
var G__205704 = chunk__205700;
var G__205705 = count__205701;
var G__205706 = (i__205702 + 1);
seq__205699 = G__205703;
chunk__205700 = G__205704;
count__205701 = G__205705;
i__205702 = G__205706;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__205699);if(temp__4092__auto__)
{var seq__205699__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__205699__$1))
{var c__202244__auto__ = cljs.core.chunk_first.call(null,seq__205699__$1);{
var G__205707 = cljs.core.chunk_rest.call(null,seq__205699__$1);
var G__205708 = c__202244__auto__;
var G__205709 = cljs.core.count.call(null,c__202244__auto__);
var G__205710 = 0;
seq__205699 = G__205707;
chunk__205700 = G__205708;
count__205701 = G__205709;
i__205702 = G__205710;
continue;
}
} else
{var f = cljs.core.first.call(null,seq__205699__$1);f.call(null);
{
var G__205711 = cljs.core.next.call(null,seq__205699__$1);
var G__205712 = null;
var G__205713 = 0;
var G__205714 = 0;
seq__205699 = G__205711;
chunk__205700 = G__205712;
count__205701 = G__205713;
i__205702 = G__205714;
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
tailrecursion.hoplon.do_BANG_ = (function (){var method_table__202354__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__202355__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__202356__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__202357__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__202358__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",2558708147),new cljs.core.Keyword("tailrecursion.hoplon","default","tailrecursion.hoplon/default",1265562704)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("do!",((function (method_table__202354__auto__,prefer_table__202355__auto__,method_cache__202356__auto__,cached_hierarchy__202357__auto__,hierarchy__202358__auto__){
return (function (elem,key,val){return key;
});})(method_table__202354__auto__,prefer_table__202355__auto__,method_cache__202356__auto__,cached_hierarchy__202357__auto__,hierarchy__202358__auto__))
,new cljs.core.Keyword("tailrecursion.hoplon","default","tailrecursion.hoplon/default",1265562704),hierarchy__202358__auto__,method_table__202354__auto__,prefer_table__202355__auto__,method_cache__202356__auto__,cached_hierarchy__202357__auto__));
})();
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword("tailrecursion.hoplon","default","tailrecursion.hoplon/default",1265562704),(function (elem,key,val){return tailrecursion.hoplon.do_BANG_.call(null,elem,new cljs.core.Keyword(null,"attr","attr",1016909155),new cljs.core.PersistentArrayMap.fromArray([key,val], true, false));
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"value","value",1125876963),(function() { 
var G__205715__delegate = function (elem,_,args){var e = jQuery(elem);return cljs.core.apply.call(null,((cljs.core._EQ_.call(null,"checkbox",e.attr("type")))?tailrecursion.hoplon.check_val_BANG_:tailrecursion.hoplon.text_val_BANG_),e,args);
};
var G__205715 = function (elem,_,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__205715__delegate.call(this,elem,_,args);};
G__205715.cljs$lang$maxFixedArity = 2;
G__205715.cljs$lang$applyTo = (function (arglist__205716){
var elem = cljs.core.first(arglist__205716);
arglist__205716 = cljs.core.next(arglist__205716);
var _ = cljs.core.first(arglist__205716);
var args = cljs.core.rest(arglist__205716);
return G__205715__delegate(elem,_,args);
});
G__205715.cljs$core$IFn$_invoke$arity$variadic = G__205715__delegate;
return G__205715;
})()
);
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"attr","attr",1016909155),(function (elem,_,kvs){var e = jQuery(elem);var seq__205717 = cljs.core.seq.call(null,kvs);var chunk__205718 = null;var count__205719 = 0;var i__205720 = 0;while(true){
if((i__205720 < count__205719))
{var vec__205721 = cljs.core._nth.call(null,chunk__205718,i__205720);var k = cljs.core.nth.call(null,vec__205721,0,null);var v = cljs.core.nth.call(null,vec__205721,1,null);var k_205723__$1 = cljs.core.name.call(null,k);if(cljs.core._EQ_.call(null,false,v))
{e.removeAttr(k_205723__$1);
} else
{e.attr(k_205723__$1,((cljs.core._EQ_.call(null,true,v))?k_205723__$1:v));
}
{
var G__205724 = seq__205717;
var G__205725 = chunk__205718;
var G__205726 = count__205719;
var G__205727 = (i__205720 + 1);
seq__205717 = G__205724;
chunk__205718 = G__205725;
count__205719 = G__205726;
i__205720 = G__205727;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__205717);if(temp__4092__auto__)
{var seq__205717__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__205717__$1))
{var c__202244__auto__ = cljs.core.chunk_first.call(null,seq__205717__$1);{
var G__205728 = cljs.core.chunk_rest.call(null,seq__205717__$1);
var G__205729 = c__202244__auto__;
var G__205730 = cljs.core.count.call(null,c__202244__auto__);
var G__205731 = 0;
seq__205717 = G__205728;
chunk__205718 = G__205729;
count__205719 = G__205730;
i__205720 = G__205731;
continue;
}
} else
{var vec__205722 = cljs.core.first.call(null,seq__205717__$1);var k = cljs.core.nth.call(null,vec__205722,0,null);var v = cljs.core.nth.call(null,vec__205722,1,null);var k_205732__$1 = cljs.core.name.call(null,k);if(cljs.core._EQ_.call(null,false,v))
{e.removeAttr(k_205732__$1);
} else
{e.attr(k_205732__$1,((cljs.core._EQ_.call(null,true,v))?k_205732__$1:v));
}
{
var G__205733 = cljs.core.next.call(null,seq__205717__$1);
var G__205734 = null;
var G__205735 = 0;
var G__205736 = 0;
seq__205717 = G__205733;
chunk__205718 = G__205734;
count__205719 = G__205735;
i__205720 = G__205736;
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
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"class","class",1108647146),(function (elem,_,kvs){var elem__$1 = jQuery(elem);var __GT_map = ((function (elem__$1){
return (function (p1__205737_SHARP_){return cljs.core.zipmap.call(null,p1__205737_SHARP_,cljs.core.repeat.call(null,true));
});})(elem__$1))
;var clmap = ((cljs.core.map_QMARK_.call(null,kvs))?kvs:__GT_map.call(null,((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq.call(null,kvs))));var seq__205738 = cljs.core.seq.call(null,clmap);var chunk__205739 = null;var count__205740 = 0;var i__205741 = 0;while(true){
if((i__205741 < count__205740))
{var vec__205742 = cljs.core._nth.call(null,chunk__205739,i__205741);var c = cljs.core.nth.call(null,vec__205742,0,null);var p_QMARK_ = cljs.core.nth.call(null,vec__205742,1,null);elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));
{
var G__205744 = seq__205738;
var G__205745 = chunk__205739;
var G__205746 = count__205740;
var G__205747 = (i__205741 + 1);
seq__205738 = G__205744;
chunk__205739 = G__205745;
count__205740 = G__205746;
i__205741 = G__205747;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__205738);if(temp__4092__auto__)
{var seq__205738__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__205738__$1))
{var c__202244__auto__ = cljs.core.chunk_first.call(null,seq__205738__$1);{
var G__205748 = cljs.core.chunk_rest.call(null,seq__205738__$1);
var G__205749 = c__202244__auto__;
var G__205750 = cljs.core.count.call(null,c__202244__auto__);
var G__205751 = 0;
seq__205738 = G__205748;
chunk__205739 = G__205749;
count__205740 = G__205750;
i__205741 = G__205751;
continue;
}
} else
{var vec__205743 = cljs.core.first.call(null,seq__205738__$1);var c = cljs.core.nth.call(null,vec__205743,0,null);var p_QMARK_ = cljs.core.nth.call(null,vec__205743,1,null);elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));
{
var G__205752 = cljs.core.next.call(null,seq__205738__$1);
var G__205753 = null;
var G__205754 = 0;
var G__205755 = 0;
seq__205738 = G__205752;
chunk__205739 = G__205753;
count__205740 = G__205754;
i__205741 = G__205755;
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
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"css","css",1014003061),(function (elem,_,kvs){var e = jQuery(elem);var seq__205756 = cljs.core.seq.call(null,kvs);var chunk__205757 = null;var count__205758 = 0;var i__205759 = 0;while(true){
if((i__205759 < count__205758))
{var vec__205760 = cljs.core._nth.call(null,chunk__205757,i__205759);var k = cljs.core.nth.call(null,vec__205760,0,null);var v = cljs.core.nth.call(null,vec__205760,1,null);e.css(cljs.core.name.call(null,k),[cljs.core.str(v)].join(''));
{
var G__205762 = seq__205756;
var G__205763 = chunk__205757;
var G__205764 = count__205758;
var G__205765 = (i__205759 + 1);
seq__205756 = G__205762;
chunk__205757 = G__205763;
count__205758 = G__205764;
i__205759 = G__205765;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__205756);if(temp__4092__auto__)
{var seq__205756__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__205756__$1))
{var c__202244__auto__ = cljs.core.chunk_first.call(null,seq__205756__$1);{
var G__205766 = cljs.core.chunk_rest.call(null,seq__205756__$1);
var G__205767 = c__202244__auto__;
var G__205768 = cljs.core.count.call(null,c__202244__auto__);
var G__205769 = 0;
seq__205756 = G__205766;
chunk__205757 = G__205767;
count__205758 = G__205768;
i__205759 = G__205769;
continue;
}
} else
{var vec__205761 = cljs.core.first.call(null,seq__205756__$1);var k = cljs.core.nth.call(null,vec__205761,0,null);var v = cljs.core.nth.call(null,vec__205761,1,null);e.css(cljs.core.name.call(null,k),[cljs.core.str(v)].join(''));
{
var G__205770 = cljs.core.next.call(null,seq__205756__$1);
var G__205771 = null;
var G__205772 = 0;
var G__205773 = 0;
seq__205756 = G__205770;
chunk__205757 = G__205771;
count__205758 = G__205772;
i__205759 = G__205773;
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
{return jQuery(elem).focus();
} else
{return jQuery(elem).focusout();
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
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"html","html",1017117469),(function (elem,_,v){return jQuery(elem).html(v);
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"scroll-to","scroll-to",1431647469),(function (elem,_,v){if(cljs.core.truth_(v))
{var body = jQuery("body,html");var elem__$1 = jQuery(elem);return body.animate(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scrollTop","scrollTop",1431684794),elem__$1.offset().top], null)));
} else
{return null;
}
}));
tailrecursion.hoplon.on_BANG_ = (function (){var method_table__202354__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__202355__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__202356__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__202357__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__202358__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",2558708147),new cljs.core.Keyword("tailrecursion.hoplon","default","tailrecursion.hoplon/default",1265562704)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("on!",((function (method_table__202354__auto__,prefer_table__202355__auto__,method_cache__202356__auto__,cached_hierarchy__202357__auto__,hierarchy__202358__auto__){
return (function (elem,event,callback){return event;
});})(method_table__202354__auto__,prefer_table__202355__auto__,method_cache__202356__auto__,cached_hierarchy__202357__auto__,hierarchy__202358__auto__))
,new cljs.core.Keyword("tailrecursion.hoplon","default","tailrecursion.hoplon/default",1265562704),hierarchy__202358__auto__,method_table__202354__auto__,prefer_table__202355__auto__,method_cache__202356__auto__,cached_hierarchy__202357__auto__));
})();
cljs.core._add_method.call(null,tailrecursion.hoplon.on_BANG_,new cljs.core.Keyword("tailrecursion.hoplon","default","tailrecursion.hoplon/default",1265562704),(function (elem,event,callback){return tailrecursion.hoplon.when_dom.call(null,elem,(function (){return jQuery(elem).on(cljs.core.name.call(null,event),callback);
}));
}));
tailrecursion.hoplon.loop_tpl_STAR_ = (function loop_tpl_STAR_(items,reverse_QMARK_,tpl){var pool_size = tailrecursion.javelin.cell.call(null,0);var items_seq = tailrecursion.javelin.lift.call(null,((function (pool_size){
return (function (G__205800,G__205799){return G__205799.call(null,G__205800);
});})(pool_size))
).call(null,items,cljs.core.seq);var cur_count = tailrecursion.javelin.lift.call(null,((function (pool_size,items_seq){
return (function (G__205801,G__205802){return G__205801.call(null,G__205802);
});})(pool_size,items_seq))
).call(null,cljs.core.count,items_seq);var show_ith_QMARK_ = ((function (pool_size,items_seq,cur_count){
return (function (p1__205774_SHARP_){return tailrecursion.javelin.lift.call(null,((function (pool_size,items_seq,cur_count){
return (function (G__205804,G__205803){return (G__205803 < G__205804);
});})(pool_size,items_seq,cur_count))
).call(null,cur_count,p1__205774_SHARP_);
});})(pool_size,items_seq,cur_count))
;var ith_item = ((function (pool_size,items_seq,cur_count,show_ith_QMARK_){
return (function (p1__205775_SHARP_){return tailrecursion.javelin.lift.call(null,((function (pool_size,items_seq,cur_count,show_ith_QMARK_){
return (function (G__205805,G__205807,G__205806){return G__205805.call(null,G__205806,G__205807);
});})(pool_size,items_seq,cur_count,show_ith_QMARK_))
).call(null,tailrecursion.hoplon.safe_nth,p1__205775_SHARP_,items_seq);
});})(pool_size,items_seq,cur_count,show_ith_QMARK_))
;var d = tailrecursion.hoplon.span.call(null);tailrecursion.hoplon.when_dom.call(null,d,((function (d,pool_size,items_seq,cur_count,show_ith_QMARK_,ith_item){
return (function (){var p = d.parentNode;p.removeChild(d);
return tailrecursion.javelin.lift.call(null,((function (p,d,pool_size,items_seq,cur_count,show_ith_QMARK_,ith_item){
return (function (G__205821,G__205819,G__205815,G__205816,G__205813,G__205817,G__205812,G__205814,G__205820,G__205818){if(cljs.core.truth_((G__205812 < G__205813)))
{var seq__205808_205822 = cljs.core.seq.call(null,G__205814.call(null,G__205812,G__205813));var chunk__205809_205823 = null;var count__205810_205824 = 0;var i__205811_205825 = 0;while(true){
if(cljs.core.truth_((i__205811_205825 < count__205810_205824)))
{var i_205826 = cljs.core._nth.call(null,chunk__205809_205823,i__205811_205825);var e_205827 = G__205815.call(null,G__205816.call(null,i_205826)).call(null,new cljs.core.Keyword(null,"do-toggle","do-toggle",1250159176),G__205817.call(null,i_205826));if(cljs.core.not.call(null,G__205818))
{G__205819.appendChild(e_205827);
} else
{G__205819.insertBefore(e_205827,G__205819.firstChild);
}
{
var G__205828 = seq__205808_205822;
var G__205829 = chunk__205809_205823;
var G__205830 = count__205810_205824;
var G__205831 = (i__205811_205825 + 1);
seq__205808_205822 = G__205828;
chunk__205809_205823 = G__205829;
count__205810_205824 = G__205830;
i__205811_205825 = G__205831;
continue;
}
} else
{var temp__4092__auto___205832 = cljs.core.seq.call(null,seq__205808_205822);if(temp__4092__auto___205832)
{var seq__205808_205833__$1 = temp__4092__auto___205832;if(cljs.core.chunked_seq_QMARK_.call(null,seq__205808_205833__$1))
{var c__202244__auto___205834 = cljs.core.chunk_first.call(null,seq__205808_205833__$1);{
var G__205835 = cljs.core.chunk_rest.call(null,seq__205808_205833__$1);
var G__205836 = c__202244__auto___205834;
var G__205837 = cljs.core.count.call(null,c__202244__auto___205834);
var G__205838 = 0;
seq__205808_205822 = G__205835;
chunk__205809_205823 = G__205836;
count__205810_205824 = G__205837;
i__205811_205825 = G__205838;
continue;
}
} else
{var i_205839 = cljs.core.first.call(null,seq__205808_205833__$1);var e_205840 = G__205815.call(null,G__205816.call(null,i_205839)).call(null,new cljs.core.Keyword(null,"do-toggle","do-toggle",1250159176),G__205817.call(null,i_205839));if(cljs.core.not.call(null,G__205818))
{G__205819.appendChild(e_205840);
} else
{G__205819.insertBefore(e_205840,G__205819.firstChild);
}
{
var G__205841 = cljs.core.next.call(null,seq__205808_205833__$1);
var G__205842 = null;
var G__205843 = 0;
var G__205844 = 0;
seq__205808_205822 = G__205841;
chunk__205809_205823 = G__205842;
count__205810_205824 = G__205843;
i__205811_205825 = G__205844;
continue;
}
}
} else
{}
}
break;
}
return G__205820.call(null,G__205821,G__205813);
} else
{return null;
}
});})(p,d,pool_size,items_seq,cur_count,show_ith_QMARK_,ith_item))
).call(null,tailrecursion.javelin.cell.call(null,pool_size),p,tpl,ith_item,cur_count,show_ith_QMARK_,pool_size,cljs.core.range,cljs.core.reset_BANG_,reverse_QMARK_);
});})(d,pool_size,items_seq,cur_count,show_ith_QMARK_,ith_item))
);
return d;
});
/**
* Manage the URL hash via Javelin cells. There are three arities:
* 
* - When called with no arguments this function returns a formula cell whose
* value is the URL hash or nil.
* 
* - When called with a single string argument, the argument is taken as the
* default value, which is returned in place of nil when there is no hash.
* 
* - When a single cell argument is provided, the URL hash is kept synced to the
* value of the cell.
* 
* - When a cell and a callback function are both provided, the URL hash is kept
* synced to the value of the cell as above, and any attempt to change the hash
* other than via the setter cell causes the callback to be called. The callback
* should be a function of one argument, the requested URL hash.
*/
tailrecursion.hoplon.route_cell = (function() {
var route_cell = null;
var route_cell__0 = (function (){var r = (function (){var ret__202511__auto__ = tailrecursion.javelin.cell.call(null,window.location.hash);setInterval(((function (ret__202511__auto__){
return (function (){return cljs.core.reset_BANG_.call(null,ret__202511__auto__,window.location.hash);
});})(ret__202511__auto__))
,100);
return tailrecursion.javelin.lift.call(null,((function (ret__202511__auto__){
return (function (G__205854){return G__205854;
});})(ret__202511__auto__))
).call(null,ret__202511__auto__);
})();return tailrecursion.javelin.lift.call(null,((function (r){
return (function (G__205855,G__205856){if(cljs.core.truth_(G__205855.call(null,"",G__205856)))
{return G__205856;
} else
{return null;
}
});})(r))
).call(null,cljs.core.not_EQ_,r);
});
var route_cell__1 = (function (setter_or_dfl){if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,setter_or_dfl)))
{var setter__202512__auto__ = setter_or_dfl;var callback__202513__auto__ = (function (){var or__201496__auto__ = null;if(cljs.core.truth_(or__201496__auto__))
{return or__201496__auto__;
} else
{return cljs.core.identity;
}
})();tailrecursion.javelin.lift.call(null,((function (setter__202512__auto__,callback__202513__auto__){
return (function (G__205858,G__205857){return G__205857.location.hash = G__205858;
});})(setter__202512__auto__,callback__202513__auto__))
).call(null,setter__202512__auto__,window);
setInterval(((function (setter__202512__auto__,callback__202513__auto__){
return (function (){if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,setter__202512__auto__),window.location.hash))
{callback__202513__auto__.call(null,window.location.hash);
return window.location.hash = cljs.core.deref.call(null,setter__202512__auto__);
} else
{return null;
}
});})(setter__202512__auto__,callback__202513__auto__))
,100);
return setter__202512__auto__;
} else
{var r = route_cell.call(null);return tailrecursion.javelin.lift.call(null,((function (r){
return (function (G__205860,G__205859){var or__201496__auto__ = G__205859;if(cljs.core.truth_(or__201496__auto__))
{return or__201496__auto__;
} else
{return G__205860;
}
});})(r))
).call(null,setter_or_dfl,r);
}
});
var route_cell__2 = (function (setter,callback){var setter__202512__auto__ = setter;var callback__202513__auto__ = (function (){var or__201496__auto__ = callback;if(cljs.core.truth_(or__201496__auto__))
{return or__201496__auto__;
} else
{return cljs.core.identity;
}
})();tailrecursion.javelin.lift.call(null,((function (setter__202512__auto__,callback__202513__auto__){
return (function (G__205862,G__205861){return G__205861.location.hash = G__205862;
});})(setter__202512__auto__,callback__202513__auto__))
).call(null,setter__202512__auto__,window);
setInterval(((function (setter__202512__auto__,callback__202513__auto__){
return (function (){if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,setter__202512__auto__),window.location.hash))
{callback__202513__auto__.call(null,window.location.hash);
return window.location.hash = cljs.core.deref.call(null,setter__202512__auto__);
} else
{return null;
}
});})(setter__202512__auto__,callback__202513__auto__))
,100);
return setter__202512__auto__;
});
route_cell = function(setter,callback){
switch(arguments.length){
case 0:
return route_cell__0.call(this);
case 1:
return route_cell__1.call(this,setter);
case 2:
return route_cell__2.call(this,setter,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
route_cell.cljs$core$IFn$_invoke$arity$0 = route_cell__0;
route_cell.cljs$core$IFn$_invoke$arity$1 = route_cell__1;
route_cell.cljs$core$IFn$_invoke$arity$2 = route_cell__2;
return route_cell;
})()
;
