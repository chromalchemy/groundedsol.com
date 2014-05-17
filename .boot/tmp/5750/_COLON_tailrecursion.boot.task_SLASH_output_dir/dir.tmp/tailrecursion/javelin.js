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
return (function (p1__12433_SHARP_,p2__12434_SHARP_){return cljs.core.assoc.call(null,p1__12433_SHARP_,p2__12434_SHARP_,p2__12434_SHARP_.rank);
});})(queue,next,value,continue_QMARK_))
;var siblings = cljs.core.pop.call(null,queue);var children = next.sinks;if(continue_QMARK_)
{next.prev = value;
} else
{}
{
var G__12435 = ((continue_QMARK_)?cljs.core.reduce.call(null,reducer,siblings,children):siblings);
queue = G__12435;
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
var seq__12440 = cljs.core.seq.call(null,cljs.core.filter.call(null,tailrecursion.javelin.cell_QMARK_,srcs));var chunk__12441 = null;var count__12442 = 0;var i__12443 = 0;while(true){
if((i__12443 < count__12442))
{var src = cljs.core._nth.call(null,chunk__12441,i__12443);src.sinks = cljs.core.disj.call(null,src.sinks,this$);
{
var G__12444 = seq__12440;
var G__12445 = chunk__12441;
var G__12446 = count__12442;
var G__12447 = (i__12443 + 1);
seq__12440 = G__12444;
chunk__12441 = G__12445;
count__12442 = G__12446;
i__12443 = G__12447;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12440);if(temp__4092__auto__)
{var seq__12440__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12440__$1))
{var c__10333__auto__ = cljs.core.chunk_first.call(null,seq__12440__$1);{
var G__12448 = cljs.core.chunk_rest.call(null,seq__12440__$1);
var G__12449 = c__10333__auto__;
var G__12450 = cljs.core.count.call(null,c__10333__auto__);
var G__12451 = 0;
seq__12440 = G__12448;
chunk__12441 = G__12449;
count__12442 = G__12450;
i__12443 = G__12451;
continue;
}
} else
{var src = cljs.core.first.call(null,seq__12440__$1);src.sinks = cljs.core.disj.call(null,src.sinks,this$);
{
var G__12452 = cljs.core.next.call(null,seq__12440__$1);
var G__12453 = null;
var G__12454 = 0;
var G__12455 = 0;
seq__12440 = G__12452;
chunk__12441 = G__12453;
count__12442 = G__12454;
i__12443 = G__12455;
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
var set_formula_BANG___delegate = function (this$,p__12460){var vec__12481 = p__12460;var f = cljs.core.nth.call(null,vec__12481,0,null);var sources = cljs.core.nth.call(null,vec__12481,1,null);tailrecursion.javelin.destroy_cell_BANG_.call(null,this$);
this$.sources = (cljs.core.truth_(f)?cljs.core.conj.call(null,cljs.core.vec.call(null,sources),f):cljs.core.vec.call(null,sources));
var seq__12482_12501 = cljs.core.seq.call(null,cljs.core.filter.call(null,tailrecursion.javelin.cell_QMARK_,this$.sources));var chunk__12483_12502 = null;var count__12484_12503 = 0;var i__12485_12504 = 0;while(true){
if((i__12485_12504 < count__12484_12503))
{var source_12505 = cljs.core._nth.call(null,chunk__12483_12502,i__12485_12504);source_12505.sinks = cljs.core.conj.call(null,source_12505.sinks,this$);
if((source_12505.rank > this$.rank))
{var seq__12486_12506 = cljs.core.seq.call(null,tailrecursion.javelin.bf_seq.call(null,cljs.core.identity,((function (seq__12482_12501,chunk__12483_12502,count__12484_12503,i__12485_12504,source_12505){
return (function (p1__12456_SHARP_){return p1__12456_SHARP_.sinks;
});})(seq__12482_12501,chunk__12483_12502,count__12484_12503,i__12485_12504,source_12505))
,source_12505));var chunk__12487_12507 = null;var count__12488_12508 = 0;var i__12489_12509 = 0;while(true){
if((i__12489_12509 < count__12488_12508))
{var dep_12510 = cljs.core._nth.call(null,chunk__12487_12507,i__12489_12509);dep_12510.rank = tailrecursion.javelin.next_rank.call(null);
{
var G__12511 = seq__12486_12506;
var G__12512 = chunk__12487_12507;
var G__12513 = count__12488_12508;
var G__12514 = (i__12489_12509 + 1);
seq__12486_12506 = G__12511;
chunk__12487_12507 = G__12512;
count__12488_12508 = G__12513;
i__12489_12509 = G__12514;
continue;
}
} else
{var temp__4092__auto___12515 = cljs.core.seq.call(null,seq__12486_12506);if(temp__4092__auto___12515)
{var seq__12486_12516__$1 = temp__4092__auto___12515;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12486_12516__$1))
{var c__10333__auto___12517 = cljs.core.chunk_first.call(null,seq__12486_12516__$1);{
var G__12518 = cljs.core.chunk_rest.call(null,seq__12486_12516__$1);
var G__12519 = c__10333__auto___12517;
var G__12520 = cljs.core.count.call(null,c__10333__auto___12517);
var G__12521 = 0;
seq__12486_12506 = G__12518;
chunk__12487_12507 = G__12519;
count__12488_12508 = G__12520;
i__12489_12509 = G__12521;
continue;
}
} else
{var dep_12522 = cljs.core.first.call(null,seq__12486_12516__$1);dep_12522.rank = tailrecursion.javelin.next_rank.call(null);
{
var G__12523 = cljs.core.next.call(null,seq__12486_12516__$1);
var G__12524 = null;
var G__12525 = 0;
var G__12526 = 0;
seq__12486_12506 = G__12523;
chunk__12487_12507 = G__12524;
count__12488_12508 = G__12525;
i__12489_12509 = G__12526;
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
var G__12527 = seq__12482_12501;
var G__12528 = chunk__12483_12502;
var G__12529 = count__12484_12503;
var G__12530 = (i__12485_12504 + 1);
seq__12482_12501 = G__12527;
chunk__12483_12502 = G__12528;
count__12484_12503 = G__12529;
i__12485_12504 = G__12530;
continue;
}
} else
{var temp__4092__auto___12531 = cljs.core.seq.call(null,seq__12482_12501);if(temp__4092__auto___12531)
{var seq__12482_12532__$1 = temp__4092__auto___12531;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12482_12532__$1))
{var c__10333__auto___12533 = cljs.core.chunk_first.call(null,seq__12482_12532__$1);{
var G__12534 = cljs.core.chunk_rest.call(null,seq__12482_12532__$1);
var G__12535 = c__10333__auto___12533;
var G__12536 = cljs.core.count.call(null,c__10333__auto___12533);
var G__12537 = 0;
seq__12482_12501 = G__12534;
chunk__12483_12502 = G__12535;
count__12484_12503 = G__12536;
i__12485_12504 = G__12537;
continue;
}
} else
{var source_12538 = cljs.core.first.call(null,seq__12482_12532__$1);source_12538.sinks = cljs.core.conj.call(null,source_12538.sinks,this$);
if((source_12538.rank > this$.rank))
{var seq__12490_12539 = cljs.core.seq.call(null,tailrecursion.javelin.bf_seq.call(null,cljs.core.identity,((function (seq__12482_12501,chunk__12483_12502,count__12484_12503,i__12485_12504,source_12538,seq__12482_12532__$1,temp__4092__auto___12531){
return (function (p1__12456_SHARP_){return p1__12456_SHARP_.sinks;
});})(seq__12482_12501,chunk__12483_12502,count__12484_12503,i__12485_12504,source_12538,seq__12482_12532__$1,temp__4092__auto___12531))
,source_12538));var chunk__12491_12540 = null;var count__12492_12541 = 0;var i__12493_12542 = 0;while(true){
if((i__12493_12542 < count__12492_12541))
{var dep_12543 = cljs.core._nth.call(null,chunk__12491_12540,i__12493_12542);dep_12543.rank = tailrecursion.javelin.next_rank.call(null);
{
var G__12544 = seq__12490_12539;
var G__12545 = chunk__12491_12540;
var G__12546 = count__12492_12541;
var G__12547 = (i__12493_12542 + 1);
seq__12490_12539 = G__12544;
chunk__12491_12540 = G__12545;
count__12492_12541 = G__12546;
i__12493_12542 = G__12547;
continue;
}
} else
{var temp__4092__auto___12548__$1 = cljs.core.seq.call(null,seq__12490_12539);if(temp__4092__auto___12548__$1)
{var seq__12490_12549__$1 = temp__4092__auto___12548__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12490_12549__$1))
{var c__10333__auto___12550 = cljs.core.chunk_first.call(null,seq__12490_12549__$1);{
var G__12551 = cljs.core.chunk_rest.call(null,seq__12490_12549__$1);
var G__12552 = c__10333__auto___12550;
var G__12553 = cljs.core.count.call(null,c__10333__auto___12550);
var G__12554 = 0;
seq__12490_12539 = G__12551;
chunk__12491_12540 = G__12552;
count__12492_12541 = G__12553;
i__12493_12542 = G__12554;
continue;
}
} else
{var dep_12555 = cljs.core.first.call(null,seq__12490_12549__$1);dep_12555.rank = tailrecursion.javelin.next_rank.call(null);
{
var G__12556 = cljs.core.next.call(null,seq__12490_12549__$1);
var G__12557 = null;
var G__12558 = 0;
var G__12559 = 0;
seq__12490_12539 = G__12556;
chunk__12491_12540 = G__12557;
count__12492_12541 = G__12558;
i__12493_12542 = G__12559;
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
var G__12560 = cljs.core.next.call(null,seq__12482_12532__$1);
var G__12561 = null;
var G__12562 = 0;
var G__12563 = 0;
seq__12482_12501 = G__12560;
chunk__12483_12502 = G__12561;
count__12484_12503 = G__12562;
i__12485_12504 = G__12563;
continue;
}
}
} else
{}
}
break;
}
var compute = (function (p1__12457_SHARP_){return cljs.core.apply.call(null,tailrecursion.javelin.deref_STAR_.call(null,cljs.core.peek.call(null,p1__12457_SHARP_)),cljs.core.map.call(null,tailrecursion.javelin.deref_STAR_,cljs.core.pop.call(null,p1__12457_SHARP_)));
});var thunk = ((function (compute){
return (function (){var x = this$.state;var y = compute.call(null,this$.sources);var seq__12494_12564 = cljs.core.seq.call(null,cljs.core.dissoc.call(null,this$.watches,new cljs.core.Keyword("tailrecursion.javelin","cell","tailrecursion.javelin/cell",3109523258)));var chunk__12495_12565 = null;var count__12496_12566 = 0;var i__12497_12567 = 0;while(true){
if((i__12497_12567 < count__12496_12566))
{var vec__12498_12568 = cljs.core._nth.call(null,chunk__12495_12565,i__12497_12567);var k_12569 = cljs.core.nth.call(null,vec__12498_12568,0,null);var f_12570__$1 = cljs.core.nth.call(null,vec__12498_12568,1,null);f_12570__$1.call(null,k_12569,this$,x,y);
{
var G__12571 = seq__12494_12564;
var G__12572 = chunk__12495_12565;
var G__12573 = count__12496_12566;
var G__12574 = (i__12497_12567 + 1);
seq__12494_12564 = G__12571;
chunk__12495_12565 = G__12572;
count__12496_12566 = G__12573;
i__12497_12567 = G__12574;
continue;
}
} else
{var temp__4092__auto___12575 = cljs.core.seq.call(null,seq__12494_12564);if(temp__4092__auto___12575)
{var seq__12494_12576__$1 = temp__4092__auto___12575;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12494_12576__$1))
{var c__10333__auto___12577 = cljs.core.chunk_first.call(null,seq__12494_12576__$1);{
var G__12578 = cljs.core.chunk_rest.call(null,seq__12494_12576__$1);
var G__12579 = c__10333__auto___12577;
var G__12580 = cljs.core.count.call(null,c__10333__auto___12577);
var G__12581 = 0;
seq__12494_12564 = G__12578;
chunk__12495_12565 = G__12579;
count__12496_12566 = G__12580;
i__12497_12567 = G__12581;
continue;
}
} else
{var vec__12499_12582 = cljs.core.first.call(null,seq__12494_12576__$1);var k_12583 = cljs.core.nth.call(null,vec__12499_12582,0,null);var f_12584__$1 = cljs.core.nth.call(null,vec__12499_12582,1,null);f_12584__$1.call(null,k_12583,this$,x,y);
{
var G__12585 = cljs.core.next.call(null,seq__12494_12576__$1);
var G__12586 = null;
var G__12587 = 0;
var G__12588 = 0;
seq__12494_12564 = G__12585;
chunk__12495_12565 = G__12586;
count__12496_12566 = G__12587;
i__12497_12567 = G__12588;
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
}):(function (p1__12459_SHARP_,p2__12458_SHARP_){return tailrecursion.javelin.propagate_BANG_.call(null,p2__12458_SHARP_);
})));
this$.input_QMARK_ = (cljs.core.truth_(f)?false:true);
this$.thunk = (cljs.core.truth_(f)?thunk:(function (){return cljs.core.deref.call(null,this$);
}));
var G__12500 = this$;tailrecursion.javelin.propagate_BANG_.call(null,G__12500);
return G__12500;
};
var set_formula_BANG_ = function (this$,var_args){
var p__12460 = null;if (arguments.length > 1) {
  p__12460 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_formula_BANG___delegate.call(this,this$,p__12460);};
set_formula_BANG_.cljs$lang$maxFixedArity = 1;
set_formula_BANG_.cljs$lang$applyTo = (function (arglist__12589){
var this$ = cljs.core.first(arglist__12589);
var p__12460 = cljs.core.rest(arglist__12589);
return set_formula_BANG___delegate(this$,p__12460);
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
tailrecursion.javelin.Cell.cljs$lang$ctorPrWriter = (function (this__10152__auto__,writer__10153__auto__,opt__10154__auto__){return cljs.core._write.call(null,writer__10153__auto__,"tailrecursion.javelin/Cell");
});
tailrecursion.javelin.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__12590 = cljs.core.seq.call(null,self__.watches);var chunk__12591 = null;var count__12592 = 0;var i__12593 = 0;while(true){
if((i__12593 < count__12592))
{var vec__12594 = cljs.core._nth.call(null,chunk__12591,i__12593);var key = cljs.core.nth.call(null,vec__12594,0,null);var f = cljs.core.nth.call(null,vec__12594,1,null);f.call(null,key,this$__$1,oldval,newval);
{
var G__12596 = seq__12590;
var G__12597 = chunk__12591;
var G__12598 = count__12592;
var G__12599 = (i__12593 + 1);
seq__12590 = G__12596;
chunk__12591 = G__12597;
count__12592 = G__12598;
i__12593 = G__12599;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12590);if(temp__4092__auto__)
{var seq__12590__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12590__$1))
{var c__10333__auto__ = cljs.core.chunk_first.call(null,seq__12590__$1);{
var G__12600 = cljs.core.chunk_rest.call(null,seq__12590__$1);
var G__12601 = c__10333__auto__;
var G__12602 = cljs.core.count.call(null,c__10333__auto__);
var G__12603 = 0;
seq__12590 = G__12600;
chunk__12591 = G__12601;
count__12592 = G__12602;
i__12593 = G__12603;
continue;
}
} else
{var vec__12595 = cljs.core.first.call(null,seq__12590__$1);var key = cljs.core.nth.call(null,vec__12595,0,null);var f = cljs.core.nth.call(null,vec__12595,1,null);f.call(null,key,this$__$1,oldval,newval);
{
var G__12604 = cljs.core.next.call(null,seq__12590__$1);
var G__12605 = null;
var G__12606 = 0;
var G__12607 = 0;
seq__12590 = G__12604;
chunk__12591 = G__12605;
count__12592 = G__12606;
i__12593 = G__12607;
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
var G__12608__delegate = function (sources){return tailrecursion.javelin.set_formula_BANG_.call(null,tailrecursion.javelin.cell.call(null,new cljs.core.Keyword("tailrecursion.javelin","none","tailrecursion.javelin/none",3109973412)),f,sources);
};
var G__12608 = function (var_args){
var sources = null;if (arguments.length > 0) {
  sources = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__12608__delegate.call(this,sources);};
G__12608.cljs$lang$maxFixedArity = 0;
G__12608.cljs$lang$applyTo = (function (arglist__12609){
var sources = cljs.core.seq(arglist__12609);
return G__12608__delegate(sources);
});
G__12608.cljs$core$IFn$_invoke$arity$variadic = G__12608__delegate;
return G__12608;
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
tailrecursion.javelin.input_QMARK_ = (function input_QMARK_(c){if(cljs.core.truth_((function (){var and__9573__auto__ = tailrecursion.javelin.cell_QMARK_.call(null,c);if(cljs.core.truth_(and__9573__auto__))
{return c.input_QMARK_;
} else
{return and__9573__auto__;
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
return (function (p1__12610_SHARP_,p2__12611_SHARP_){return (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.call(null,p1__12610_SHARP_,p2__12611_SHARP_),p2__12611_SHARP_],null));
});})(olds))
;var diff = ((function (olds,tag_neq){
return (function (p1__12613_SHARP_,p2__12612_SHARP_){return cljs.core.distinct.call(null,cljs.core.map.call(null,cljs.core.second,cljs.core.filter.call(null,cljs.core.first,cljs.core.map.call(null,tag_neq,p1__12613_SHARP_,p2__12612_SHARP_))));
});})(olds,tag_neq))
;var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__12615__delegate = function (rest__12614_SHARP_){var news = diff.call(null,cljs.core.deref.call(null,olds),rest__12614_SHARP_);cljs.core.reset_BANG_.call(null,olds,rest__12614_SHARP_);
return news;
};
var G__12615 = function (var_args){
var rest__12614_SHARP_ = null;if (arguments.length > 0) {
  rest__12614_SHARP_ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__12615__delegate.call(this,rest__12614_SHARP_);};
G__12615.cljs$lang$maxFixedArity = 0;
G__12615.cljs$lang$applyTo = (function (arglist__12616){
var rest__12614_SHARP_ = cljs.core.seq(arglist__12616);
return G__12615__delegate(rest__12614_SHARP_);
});
G__12615.cljs$core$IFn$_invoke$arity$variadic = G__12615__delegate;
return G__12615;
})()
;})(olds,tag_neq,diff))
;return cljs.core.apply.call(null,tailrecursion.javelin.lift.call(null,proc),cells);
};
var alts_BANG_ = function (var_args){
var cells = null;if (arguments.length > 0) {
  cells = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return alts_BANG___delegate.call(this,cells);};
alts_BANG_.cljs$lang$maxFixedArity = 0;
alts_BANG_.cljs$lang$applyTo = (function (arglist__12617){
var cells = cljs.core.seq(arglist__12617);
return alts_BANG___delegate(cells);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
tailrecursion.javelin.cell_map = (function cell_map(f,c){var cseq = tailrecursion.javelin.lift.call(null,cljs.core.seq).call(null,c);var safe_nth = ((function (cseq){
return (function (p1__12618_SHARP_,p2__12619_SHARP_){try{return cljs.core.nth.call(null,p1__12618_SHARP_,p2__12619_SHARP_);
}catch (e12622){if((e12622 instanceof Error))
{var _ = e12622;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12622;
} else
{return null;
}
}
}});})(cseq))
;return cljs.core.map.call(null,(function (p1__12620_SHARP_){return tailrecursion.javelin.lift.call(null,cljs.core.comp.call(null,f,safe_nth)).call(null,cseq,p1__12620_SHARP_);
}),cljs.core.range.call(null,0,cljs.core.count.call(null,cljs.core.deref.call(null,cseq))));
});
