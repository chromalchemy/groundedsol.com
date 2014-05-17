// Compiled by ClojureScript 0.0-2156
goog.provide('tailrecursion.javelin');
goog.require('cljs.core');
goog.require('tailrecursion.priority_map');
goog.require('tailrecursion.priority_map');
/**
* Like tree-seq but traversal is breadth-first instead of depth-first.
*/
tailrecursion.javelin.bf_seq = (function bf_seq(branch_QMARK_,children,root){var walk = (function walk(queue){var temp__4092__auto__ = cljs.core.peek.call(null,queue);if(cljs.core.truth_(temp__4092__auto__))
{var node = temp__4092__auto__;return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,node,walk.call(null,cljs.core.into.call(null,cljs.core.pop.call(null,queue),(cljs.core.truth_(branch_QMARK_.call(null,node))?children.call(null,node):null))));
}),null,null));
} else
{return null;
}
});
return walk.call(null,cljs.core.conj.call(null,cljs.core.PersistentQueue.EMPTY,root));
});
tailrecursion.javelin.last_rank = cljs.core.atom.call(null,0);
tailrecursion.javelin.next_rank = (function next_rank(){return cljs.core.swap_BANG_.call(null,tailrecursion.javelin.last_rank,cljs.core.inc);
});
tailrecursion.javelin.deref_STAR_ = (function deref_STAR_(x){if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,x)))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
tailrecursion.javelin.propagate_BANG_ = (function propagate_BANG_(cell){var queue = tailrecursion.priority_map.priority_map.call(null,cell,cell.rank);while(true){
if(cljs.core.seq.call(null,queue))
{var next = cljs.core.key.call(null,cljs.core.peek.call(null,queue));var value = next.thunk.call(null);var continue_QMARK_ = cljs.core.not_EQ_.call(null,value,next.prev);var reducer = ((function (queue,next,value,continue_QMARK_){
return (function (p1__12573_SHARP_,p2__12574_SHARP_){return cljs.core.assoc.call(null,p1__12573_SHARP_,p2__12574_SHARP_,p2__12574_SHARP_.rank);
});})(queue,next,value,continue_QMARK_))
;var siblings = cljs.core.pop.call(null,queue);var children = next.sinks;if(continue_QMARK_)
{next.prev = value;
} else
{}
{
var G__12575 = ((continue_QMARK_)?cljs.core.reduce.call(null,reducer,siblings,children):siblings);
queue = G__12575;
continue;
}
} else
{return null;
}
break;
}
});
tailrecursion.javelin.destroy_cell_BANG_ = (function destroy_cell_BANG_(this$){var srcs = this$.sources;this$.sources = cljs.core.PersistentVector.EMPTY;
this$.watches = cljs.core.PersistentArrayMap.EMPTY;
var seq__12580 = cljs.core.seq.call(null,cljs.core.filter.call(null,tailrecursion.javelin.cell_QMARK_,srcs));var chunk__12581 = null;var count__12582 = 0;var i__12583 = 0;while(true){
if((i__12583 < count__12582))
{var src = cljs.core._nth.call(null,chunk__12581,i__12583);src.sinks = cljs.core.disj.call(null,src.sinks,this$);
{
var G__12584 = seq__12580;
var G__12585 = chunk__12581;
var G__12586 = count__12582;
var G__12587 = (i__12583 + 1);
seq__12580 = G__12584;
chunk__12581 = G__12585;
count__12582 = G__12586;
i__12583 = G__12587;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12580);if(temp__4092__auto__)
{var seq__12580__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12580__$1))
{var c__10526__auto__ = cljs.core.chunk_first.call(null,seq__12580__$1);{
var G__12588 = cljs.core.chunk_rest.call(null,seq__12580__$1);
var G__12589 = c__10526__auto__;
var G__12590 = cljs.core.count.call(null,c__10526__auto__);
var G__12591 = 0;
seq__12580 = G__12588;
chunk__12581 = G__12589;
count__12582 = G__12590;
i__12583 = G__12591;
continue;
}
} else
{var src = cljs.core.first.call(null,seq__12580__$1);src.sinks = cljs.core.disj.call(null,src.sinks,this$);
{
var G__12592 = cljs.core.next.call(null,seq__12580__$1);
var G__12593 = null;
var G__12594 = 0;
var G__12595 = 0;
seq__12580 = G__12592;
chunk__12581 = G__12593;
count__12582 = G__12594;
i__12583 = G__12595;
continue;
}
}
} else
{return null;
}
}
break;
}
});
/**
* @param {...*} var_args
*/
tailrecursion.javelin.set_formula_BANG_ = (function() { 
var set_formula_BANG___delegate = function (this$,p__12600){var vec__12621 = p__12600;var f = cljs.core.nth.call(null,vec__12621,0,null);var sources = cljs.core.nth.call(null,vec__12621,1,null);tailrecursion.javelin.destroy_cell_BANG_.call(null,this$);
this$.sources = (cljs.core.truth_(f)?cljs.core.conj.call(null,cljs.core.vec.call(null,sources),f):cljs.core.vec.call(null,sources));
var seq__12622_12641 = cljs.core.seq.call(null,cljs.core.filter.call(null,tailrecursion.javelin.cell_QMARK_,this$.sources));var chunk__12623_12642 = null;var count__12624_12643 = 0;var i__12625_12644 = 0;while(true){
if((i__12625_12644 < count__12624_12643))
{var source_12645 = cljs.core._nth.call(null,chunk__12623_12642,i__12625_12644);source_12645.sinks = cljs.core.conj.call(null,source_12645.sinks,this$);
if((source_12645.rank > this$.rank))
{var seq__12626_12646 = cljs.core.seq.call(null,tailrecursion.javelin.bf_seq.call(null,cljs.core.identity,((function (seq__12622_12641,chunk__12623_12642,count__12624_12643,i__12625_12644,source_12645){
return (function (p1__12596_SHARP_){return p1__12596_SHARP_.sinks;
});})(seq__12622_12641,chunk__12623_12642,count__12624_12643,i__12625_12644,source_12645))
,source_12645));var chunk__12627_12647 = null;var count__12628_12648 = 0;var i__12629_12649 = 0;while(true){
if((i__12629_12649 < count__12628_12648))
{var dep_12650 = cljs.core._nth.call(null,chunk__12627_12647,i__12629_12649);dep_12650.rank = tailrecursion.javelin.next_rank.call(null);
{
var G__12651 = seq__12626_12646;
var G__12652 = chunk__12627_12647;
var G__12653 = count__12628_12648;
var G__12654 = (i__12629_12649 + 1);
seq__12626_12646 = G__12651;
chunk__12627_12647 = G__12652;
count__12628_12648 = G__12653;
i__12629_12649 = G__12654;
continue;
}
} else
{var temp__4092__auto___12655 = cljs.core.seq.call(null,seq__12626_12646);if(temp__4092__auto___12655)
{var seq__12626_12656__$1 = temp__4092__auto___12655;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12626_12656__$1))
{var c__10526__auto___12657 = cljs.core.chunk_first.call(null,seq__12626_12656__$1);{
var G__12658 = cljs.core.chunk_rest.call(null,seq__12626_12656__$1);
var G__12659 = c__10526__auto___12657;
var G__12660 = cljs.core.count.call(null,c__10526__auto___12657);
var G__12661 = 0;
seq__12626_12646 = G__12658;
chunk__12627_12647 = G__12659;
count__12628_12648 = G__12660;
i__12629_12649 = G__12661;
continue;
}
} else
{var dep_12662 = cljs.core.first.call(null,seq__12626_12656__$1);dep_12662.rank = tailrecursion.javelin.next_rank.call(null);
{
var G__12663 = cljs.core.next.call(null,seq__12626_12656__$1);
var G__12664 = null;
var G__12665 = 0;
var G__12666 = 0;
seq__12626_12646 = G__12663;
chunk__12627_12647 = G__12664;
count__12628_12648 = G__12665;
i__12629_12649 = G__12666;
continue;
}
}
} else
{}
}
break;
}
} else
{}
{
var G__12667 = seq__12622_12641;
var G__12668 = chunk__12623_12642;
var G__12669 = count__12624_12643;
var G__12670 = (i__12625_12644 + 1);
seq__12622_12641 = G__12667;
chunk__12623_12642 = G__12668;
count__12624_12643 = G__12669;
i__12625_12644 = G__12670;
continue;
}
} else
{var temp__4092__auto___12671 = cljs.core.seq.call(null,seq__12622_12641);if(temp__4092__auto___12671)
{var seq__12622_12672__$1 = temp__4092__auto___12671;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12622_12672__$1))
{var c__10526__auto___12673 = cljs.core.chunk_first.call(null,seq__12622_12672__$1);{
var G__12674 = cljs.core.chunk_rest.call(null,seq__12622_12672__$1);
var G__12675 = c__10526__auto___12673;
var G__12676 = cljs.core.count.call(null,c__10526__auto___12673);
var G__12677 = 0;
seq__12622_12641 = G__12674;
chunk__12623_12642 = G__12675;
count__12624_12643 = G__12676;
i__12625_12644 = G__12677;
continue;
}
} else
{var source_12678 = cljs.core.first.call(null,seq__12622_12672__$1);source_12678.sinks = cljs.core.conj.call(null,source_12678.sinks,this$);
if((source_12678.rank > this$.rank))
{var seq__12630_12679 = cljs.core.seq.call(null,tailrecursion.javelin.bf_seq.call(null,cljs.core.identity,((function (seq__12622_12641,chunk__12623_12642,count__12624_12643,i__12625_12644,source_12678,seq__12622_12672__$1,temp__4092__auto___12671){
return (function (p1__12596_SHARP_){return p1__12596_SHARP_.sinks;
});})(seq__12622_12641,chunk__12623_12642,count__12624_12643,i__12625_12644,source_12678,seq__12622_12672__$1,temp__4092__auto___12671))
,source_12678));var chunk__12631_12680 = null;var count__12632_12681 = 0;var i__12633_12682 = 0;while(true){
if((i__12633_12682 < count__12632_12681))
{var dep_12683 = cljs.core._nth.call(null,chunk__12631_12680,i__12633_12682);dep_12683.rank = tailrecursion.javelin.next_rank.call(null);
{
var G__12684 = seq__12630_12679;
var G__12685 = chunk__12631_12680;
var G__12686 = count__12632_12681;
var G__12687 = (i__12633_12682 + 1);
seq__12630_12679 = G__12684;
chunk__12631_12680 = G__12685;
count__12632_12681 = G__12686;
i__12633_12682 = G__12687;
continue;
}
} else
{var temp__4092__auto___12688__$1 = cljs.core.seq.call(null,seq__12630_12679);if(temp__4092__auto___12688__$1)
{var seq__12630_12689__$1 = temp__4092__auto___12688__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12630_12689__$1))
{var c__10526__auto___12690 = cljs.core.chunk_first.call(null,seq__12630_12689__$1);{
var G__12691 = cljs.core.chunk_rest.call(null,seq__12630_12689__$1);
var G__12692 = c__10526__auto___12690;
var G__12693 = cljs.core.count.call(null,c__10526__auto___12690);
var G__12694 = 0;
seq__12630_12679 = G__12691;
chunk__12631_12680 = G__12692;
count__12632_12681 = G__12693;
i__12633_12682 = G__12694;
continue;
}
} else
{var dep_12695 = cljs.core.first.call(null,seq__12630_12689__$1);dep_12695.rank = tailrecursion.javelin.next_rank.call(null);
{
var G__12696 = cljs.core.next.call(null,seq__12630_12689__$1);
var G__12697 = null;
var G__12698 = 0;
var G__12699 = 0;
seq__12630_12679 = G__12696;
chunk__12631_12680 = G__12697;
count__12632_12681 = G__12698;
i__12633_12682 = G__12699;
continue;
}
}
} else
{}
}
break;
}
} else
{}
{
var G__12700 = cljs.core.next.call(null,seq__12622_12672__$1);
var G__12701 = null;
var G__12702 = 0;
var G__12703 = 0;
seq__12622_12641 = G__12700;
chunk__12623_12642 = G__12701;
count__12624_12643 = G__12702;
i__12625_12644 = G__12703;
continue;
}
}
} else
{}
}
break;
}
var compute = (function (p1__12597_SHARP_){return cljs.core.apply.call(null,tailrecursion.javelin.deref_STAR_.call(null,cljs.core.peek.call(null,p1__12597_SHARP_)),cljs.core.map.call(null,tailrecursion.javelin.deref_STAR_,cljs.core.pop.call(null,p1__12597_SHARP_)));
});var thunk = ((function (compute){
return (function (){var x = this$.state;var y = compute.call(null,this$.sources);var seq__12634_12704 = cljs.core.seq.call(null,cljs.core.dissoc.call(null,this$.watches,new cljs.core.Keyword("tailrecursion.javelin","cell","tailrecursion.javelin/cell",3109523258)));var chunk__12635_12705 = null;var count__12636_12706 = 0;var i__12637_12707 = 0;while(true){
if((i__12637_12707 < count__12636_12706))
{var vec__12638_12708 = cljs.core._nth.call(null,chunk__12635_12705,i__12637_12707);var k_12709 = cljs.core.nth.call(null,vec__12638_12708,0,null);var f_12710__$1 = cljs.core.nth.call(null,vec__12638_12708,1,null);f_12710__$1.call(null,k_12709,this$,x,y);
{
var G__12711 = seq__12634_12704;
var G__12712 = chunk__12635_12705;
var G__12713 = count__12636_12706;
var G__12714 = (i__12637_12707 + 1);
seq__12634_12704 = G__12711;
chunk__12635_12705 = G__12712;
count__12636_12706 = G__12713;
i__12637_12707 = G__12714;
continue;
}
} else
{var temp__4092__auto___12715 = cljs.core.seq.call(null,seq__12634_12704);if(temp__4092__auto___12715)
{var seq__12634_12716__$1 = temp__4092__auto___12715;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12634_12716__$1))
{var c__10526__auto___12717 = cljs.core.chunk_first.call(null,seq__12634_12716__$1);{
var G__12718 = cljs.core.chunk_rest.call(null,seq__12634_12716__$1);
var G__12719 = c__10526__auto___12717;
var G__12720 = cljs.core.count.call(null,c__10526__auto___12717);
var G__12721 = 0;
seq__12634_12704 = G__12718;
chunk__12635_12705 = G__12719;
count__12636_12706 = G__12720;
i__12637_12707 = G__12721;
continue;
}
} else
{var vec__12639_12722 = cljs.core.first.call(null,seq__12634_12716__$1);var k_12723 = cljs.core.nth.call(null,vec__12639_12722,0,null);var f_12724__$1 = cljs.core.nth.call(null,vec__12639_12722,1,null);f_12724__$1.call(null,k_12723,this$,x,y);
{
var G__12725 = cljs.core.next.call(null,seq__12634_12716__$1);
var G__12726 = null;
var G__12727 = 0;
var G__12728 = 0;
seq__12634_12704 = G__12725;
chunk__12635_12705 = G__12726;
count__12636_12706 = G__12727;
i__12637_12707 = G__12728;
continue;
}
}
} else
{}
}
break;
}
return this$.state = y;
});})(compute))
;var err_mesg = "formula cell can't be updated via swap! or reset!";cljs.core._add_watch.call(null,this$,new cljs.core.Keyword("tailrecursion.javelin","cell","tailrecursion.javelin/cell",3109523258),(cljs.core.truth_(f)?(function (){throw (new Error(err_mesg));
}):(function (p1__12599_SHARP_,p2__12598_SHARP_){return tailrecursion.javelin.propagate_BANG_.call(null,p2__12598_SHARP_);
})));
this$.input_QMARK_ = (cljs.core.truth_(f)?false:true);
this$.thunk = (cljs.core.truth_(f)?thunk:(function (){return cljs.core.deref.call(null,this$);
}));
var G__12640 = this$;tailrecursion.javelin.propagate_BANG_.call(null,G__12640);
return G__12640;
};
var set_formula_BANG_ = function (this$,var_args){
var p__12600 = null;if (arguments.length > 1) {
  p__12600 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_formula_BANG___delegate.call(this,this$,p__12600);};
set_formula_BANG_.cljs$lang$maxFixedArity = 1;
set_formula_BANG_.cljs$lang$applyTo = (function (arglist__12729){
var this$ = cljs.core.first(arglist__12729);
var p__12600 = cljs.core.rest(arglist__12729);
return set_formula_BANG___delegate(this$,p__12600);
});
set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_formula_BANG___delegate;
return set_formula_BANG_;
})()
;

/**
* @constructor
*/
tailrecursion.javelin.Cell = (function (meta,state,rank,prev,sources,sinks,thunk,watches,input_QMARK_){
this.meta = meta;
this.state = state;
this.rank = rank;
this.prev = prev;
this.sources = sources;
this.sinks = sinks;
this.thunk = thunk;
this.watches = watches;
this.input_QMARK_ = input_QMARK_;
this.cljs$lang$protocol_mask$partition1$ = 2;
this.cljs$lang$protocol_mask$partition0$ = 2147647488;
})
tailrecursion.javelin.Cell.cljs$lang$type = true;
tailrecursion.javelin.Cell.cljs$lang$ctorStr = "tailrecursion.javelin/Cell";
tailrecursion.javelin.Cell.cljs$lang$ctorPrWriter = (function (this__10345__auto__,writer__10346__auto__,opt__10347__auto__){return cljs.core._write.call(null,writer__10346__auto__,"tailrecursion.javelin/Cell");
});
tailrecursion.javelin.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__12730 = cljs.core.seq.call(null,self__.watches);var chunk__12731 = null;var count__12732 = 0;var i__12733 = 0;while(true){
if((i__12733 < count__12732))
{var vec__12734 = cljs.core._nth.call(null,chunk__12731,i__12733);var key = cljs.core.nth.call(null,vec__12734,0,null);var f = cljs.core.nth.call(null,vec__12734,1,null);f.call(null,key,this$__$1,oldval,newval);
{
var G__12736 = seq__12730;
var G__12737 = chunk__12731;
var G__12738 = count__12732;
var G__12739 = (i__12733 + 1);
seq__12730 = G__12736;
chunk__12731 = G__12737;
count__12732 = G__12738;
i__12733 = G__12739;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12730);if(temp__4092__auto__)
{var seq__12730__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12730__$1))
{var c__10526__auto__ = cljs.core.chunk_first.call(null,seq__12730__$1);{
var G__12740 = cljs.core.chunk_rest.call(null,seq__12730__$1);
var G__12741 = c__10526__auto__;
var G__12742 = cljs.core.count.call(null,c__10526__auto__);
var G__12743 = 0;
seq__12730 = G__12740;
chunk__12731 = G__12741;
count__12732 = G__12742;
i__12733 = G__12743;
continue;
}
} else
{var vec__12735 = cljs.core.first.call(null,seq__12730__$1);var key = cljs.core.nth.call(null,vec__12735,0,null);var f = cljs.core.nth.call(null,vec__12735,1,null);f.call(null,key,this$__$1,oldval,newval);
{
var G__12744 = cljs.core.next.call(null,seq__12730__$1);
var G__12745 = null;
var G__12746 = 0;
var G__12747 = 0;
seq__12730 = G__12744;
chunk__12731 = G__12745;
count__12732 = G__12746;
i__12733 = G__12747;
continue;
}
}
} else
{return null;
}
}
break;
}
});
tailrecursion.javelin.Cell.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,key,f);
});
tailrecursion.javelin.Cell.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,key);
});
tailrecursion.javelin.Cell.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return this$__$1.state;
});
tailrecursion.javelin.Cell.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.meta;
});
tailrecursion.javelin.Cell.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var self__ = this;
var this$__$1 = this;return cljs.core.write_all.call(null,writer,"#<Cell: ",cljs.core.pr_str.call(null,self__.state),">");
});
tailrecursion.javelin.__GT_Cell = (function __GT_Cell(meta,state,rank,prev,sources,sinks,thunk,watches,input_QMARK_){return (new tailrecursion.javelin.Cell(meta,state,rank,prev,sources,sinks,thunk,watches,input_QMARK_));
});
tailrecursion.javelin.lift = (function lift(f){return (function() { 
var G__12748__delegate = function (sources){return tailrecursion.javelin.set_formula_BANG_.call(null,tailrecursion.javelin.cell.call(null,new cljs.core.Keyword("tailrecursion.javelin","none","tailrecursion.javelin/none",3109973412)),f,sources);
};
var G__12748 = function (var_args){
var sources = null;if (arguments.length > 0) {
  sources = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__12748__delegate.call(this,sources);};
G__12748.cljs$lang$maxFixedArity = 0;
G__12748.cljs$lang$applyTo = (function (arglist__12749){
var sources = cljs.core.seq(arglist__12749);
return G__12748__delegate(sources);
});
G__12748.cljs$core$IFn$_invoke$arity$variadic = G__12748__delegate;
return G__12748;
})()
;
});
tailrecursion.javelin.cell = (function cell(x){return tailrecursion.javelin.set_formula_BANG_.call(null,(new tailrecursion.javelin.Cell(cljs.core.PersistentArrayMap.EMPTY,x,tailrecursion.javelin.next_rank.call(null),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});
tailrecursion.javelin.cell_QMARK_ = (function cell_QMARK_(c){if(cljs.core._EQ_.call(null,cljs.core.type.call(null,c),tailrecursion.javelin.Cell))
{return c;
} else
{return null;
}
});
tailrecursion.javelin.input_QMARK_ = (function input_QMARK_(c){if(cljs.core.truth_((function (){var and__9766__auto__ = tailrecursion.javelin.cell_QMARK_.call(null,c);if(cljs.core.truth_(and__9766__auto__))
{return c.input_QMARK_;
} else
{return and__9766__auto__;
}
})()))
{return c;
} else
{return null;
}
});
tailrecursion.javelin.set_cell_BANG_ = (function set_cell_BANG_(c,x){c.state = x;
return tailrecursion.javelin.set_formula_BANG_.call(null,c);
});
/**
* @param {...*} var_args
*/
tailrecursion.javelin.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (cells){var olds = cljs.core.atom.call(null,cljs.core.repeat.call(null,cljs.core.count.call(null,cells),new cljs.core.Keyword("tailrecursion.javelin","none","tailrecursion.javelin/none",3109973412)));var tag_neq = ((function (olds){
return (function (p1__12750_SHARP_,p2__12751_SHARP_){return (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.call(null,p1__12750_SHARP_,p2__12751_SHARP_),p2__12751_SHARP_],null));
});})(olds))
;var diff = ((function (olds,tag_neq){
return (function (p1__12753_SHARP_,p2__12752_SHARP_){return cljs.core.distinct.call(null,cljs.core.map.call(null,cljs.core.second,cljs.core.filter.call(null,cljs.core.first,cljs.core.map.call(null,tag_neq,p1__12753_SHARP_,p2__12752_SHARP_))));
});})(olds,tag_neq))
;var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__12755__delegate = function (rest__12754_SHARP_){var news = diff.call(null,cljs.core.deref.call(null,olds),rest__12754_SHARP_);cljs.core.reset_BANG_.call(null,olds,rest__12754_SHARP_);
return news;
};
var G__12755 = function (var_args){
var rest__12754_SHARP_ = null;if (arguments.length > 0) {
  rest__12754_SHARP_ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__12755__delegate.call(this,rest__12754_SHARP_);};
G__12755.cljs$lang$maxFixedArity = 0;
G__12755.cljs$lang$applyTo = (function (arglist__12756){
var rest__12754_SHARP_ = cljs.core.seq(arglist__12756);
return G__12755__delegate(rest__12754_SHARP_);
});
G__12755.cljs$core$IFn$_invoke$arity$variadic = G__12755__delegate;
return G__12755;
})()
;})(olds,tag_neq,diff))
;return cljs.core.apply.call(null,tailrecursion.javelin.lift.call(null,proc),cells);
};
var alts_BANG_ = function (var_args){
var cells = null;if (arguments.length > 0) {
  cells = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return alts_BANG___delegate.call(this,cells);};
alts_BANG_.cljs$lang$maxFixedArity = 0;
alts_BANG_.cljs$lang$applyTo = (function (arglist__12757){
var cells = cljs.core.seq(arglist__12757);
return alts_BANG___delegate(cells);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
tailrecursion.javelin.cell_map = (function cell_map(f,c){var cseq = tailrecursion.javelin.lift.call(null,cljs.core.seq).call(null,c);var safe_nth = ((function (cseq){
return (function (p1__12758_SHARP_,p2__12759_SHARP_){try{return cljs.core.nth.call(null,p1__12758_SHARP_,p2__12759_SHARP_);
}catch (e12762){if((e12762 instanceof Error))
{var _ = e12762;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12762;
} else
{return null;
}
}
}});})(cseq))
;return cljs.core.map.call(null,(function (p1__12760_SHARP_){return tailrecursion.javelin.lift.call(null,cljs.core.comp.call(null,f,safe_nth)).call(null,cseq,p1__12760_SHARP_);
}),cljs.core.range.call(null,0,cljs.core.count.call(null,cljs.core.deref.call(null,cseq))));
});
