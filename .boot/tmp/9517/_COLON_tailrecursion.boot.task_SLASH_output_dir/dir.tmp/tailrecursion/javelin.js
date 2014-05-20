// Compiled by ClojureScript 0.0-2202
goog.provide('tailrecursion.javelin');
goog.require('cljs.core');
goog.require('tailrecursion.priority_map');
goog.require('tailrecursion.priority_map');
/**
* Like tree-seq but traversal is breadth-first instead of depth-first.
*/
tailrecursion.javelin.bf_seq = (function bf_seq(branch_QMARK_,children,root){var walk = (function walk(queue){var temp__4092__auto__ = cljs.core.peek.call(null,queue);if(cljs.core.truth_(temp__4092__auto__))
{var node = temp__4092__auto__;return (new cljs.core.LazySeq(null,((function (node,temp__4092__auto__){
return (function (){return cljs.core.cons.call(null,node,walk.call(null,cljs.core.into.call(null,cljs.core.pop.call(null,queue),(cljs.core.truth_(branch_QMARK_.call(null,node))?children.call(null,node):null))));
});})(node,temp__4092__auto__))
,null,null));
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
return (function (p1__204240_SHARP_,p2__204241_SHARP_){return cljs.core.assoc.call(null,p1__204240_SHARP_,p2__204241_SHARP_,p2__204241_SHARP_.rank);
});})(queue,next,value,continue_QMARK_))
;var siblings = cljs.core.pop.call(null,queue);var children = next.sinks;if(continue_QMARK_)
{next.prev = value;
} else
{}
{
var G__204242 = ((continue_QMARK_)?cljs.core.reduce.call(null,reducer,siblings,children):siblings);
queue = G__204242;
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
var seq__204247 = cljs.core.seq.call(null,cljs.core.filter.call(null,tailrecursion.javelin.cell_QMARK_,srcs));var chunk__204248 = null;var count__204249 = 0;var i__204250 = 0;while(true){
if((i__204250 < count__204249))
{var src = cljs.core._nth.call(null,chunk__204248,i__204250);src.sinks = cljs.core.disj.call(null,src.sinks,this$);
{
var G__204251 = seq__204247;
var G__204252 = chunk__204248;
var G__204253 = count__204249;
var G__204254 = (i__204250 + 1);
seq__204247 = G__204251;
chunk__204248 = G__204252;
count__204249 = G__204253;
i__204250 = G__204254;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__204247);if(temp__4092__auto__)
{var seq__204247__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__204247__$1))
{var c__202244__auto__ = cljs.core.chunk_first.call(null,seq__204247__$1);{
var G__204255 = cljs.core.chunk_rest.call(null,seq__204247__$1);
var G__204256 = c__202244__auto__;
var G__204257 = cljs.core.count.call(null,c__202244__auto__);
var G__204258 = 0;
seq__204247 = G__204255;
chunk__204248 = G__204256;
count__204249 = G__204257;
i__204250 = G__204258;
continue;
}
} else
{var src = cljs.core.first.call(null,seq__204247__$1);src.sinks = cljs.core.disj.call(null,src.sinks,this$);
{
var G__204259 = cljs.core.next.call(null,seq__204247__$1);
var G__204260 = null;
var G__204261 = 0;
var G__204262 = 0;
seq__204247 = G__204259;
chunk__204248 = G__204260;
count__204249 = G__204261;
i__204250 = G__204262;
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
var set_formula_BANG___delegate = function (this$,p__204267){var vec__204288 = p__204267;var f = cljs.core.nth.call(null,vec__204288,0,null);var sources = cljs.core.nth.call(null,vec__204288,1,null);tailrecursion.javelin.destroy_cell_BANG_.call(null,this$);
this$.sources = (cljs.core.truth_(f)?cljs.core.conj.call(null,cljs.core.vec.call(null,sources),f):cljs.core.vec.call(null,sources));
var seq__204289_204308 = cljs.core.seq.call(null,cljs.core.filter.call(null,tailrecursion.javelin.cell_QMARK_,this$.sources));var chunk__204290_204309 = null;var count__204291_204310 = 0;var i__204292_204311 = 0;while(true){
if((i__204292_204311 < count__204291_204310))
{var source_204312 = cljs.core._nth.call(null,chunk__204290_204309,i__204292_204311);source_204312.sinks = cljs.core.conj.call(null,source_204312.sinks,this$);
if((source_204312.rank > this$.rank))
{var seq__204293_204313 = cljs.core.seq.call(null,tailrecursion.javelin.bf_seq.call(null,cljs.core.identity,((function (seq__204289_204308,chunk__204290_204309,count__204291_204310,i__204292_204311,source_204312,vec__204288,f,sources){
return (function (p1__204263_SHARP_){return p1__204263_SHARP_.sinks;
});})(seq__204289_204308,chunk__204290_204309,count__204291_204310,i__204292_204311,source_204312,vec__204288,f,sources))
,source_204312));var chunk__204294_204314 = null;var count__204295_204315 = 0;var i__204296_204316 = 0;while(true){
if((i__204296_204316 < count__204295_204315))
{var dep_204317 = cljs.core._nth.call(null,chunk__204294_204314,i__204296_204316);dep_204317.rank = tailrecursion.javelin.next_rank.call(null);
{
var G__204318 = seq__204293_204313;
var G__204319 = chunk__204294_204314;
var G__204320 = count__204295_204315;
var G__204321 = (i__204296_204316 + 1);
seq__204293_204313 = G__204318;
chunk__204294_204314 = G__204319;
count__204295_204315 = G__204320;
i__204296_204316 = G__204321;
continue;
}
} else
{var temp__4092__auto___204322 = cljs.core.seq.call(null,seq__204293_204313);if(temp__4092__auto___204322)
{var seq__204293_204323__$1 = temp__4092__auto___204322;if(cljs.core.chunked_seq_QMARK_.call(null,seq__204293_204323__$1))
{var c__202244__auto___204324 = cljs.core.chunk_first.call(null,seq__204293_204323__$1);{
var G__204325 = cljs.core.chunk_rest.call(null,seq__204293_204323__$1);
var G__204326 = c__202244__auto___204324;
var G__204327 = cljs.core.count.call(null,c__202244__auto___204324);
var G__204328 = 0;
seq__204293_204313 = G__204325;
chunk__204294_204314 = G__204326;
count__204295_204315 = G__204327;
i__204296_204316 = G__204328;
continue;
}
} else
{var dep_204329 = cljs.core.first.call(null,seq__204293_204323__$1);dep_204329.rank = tailrecursion.javelin.next_rank.call(null);
{
var G__204330 = cljs.core.next.call(null,seq__204293_204323__$1);
var G__204331 = null;
var G__204332 = 0;
var G__204333 = 0;
seq__204293_204313 = G__204330;
chunk__204294_204314 = G__204331;
count__204295_204315 = G__204332;
i__204296_204316 = G__204333;
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
var G__204334 = seq__204289_204308;
var G__204335 = chunk__204290_204309;
var G__204336 = count__204291_204310;
var G__204337 = (i__204292_204311 + 1);
seq__204289_204308 = G__204334;
chunk__204290_204309 = G__204335;
count__204291_204310 = G__204336;
i__204292_204311 = G__204337;
continue;
}
} else
{var temp__4092__auto___204338 = cljs.core.seq.call(null,seq__204289_204308);if(temp__4092__auto___204338)
{var seq__204289_204339__$1 = temp__4092__auto___204338;if(cljs.core.chunked_seq_QMARK_.call(null,seq__204289_204339__$1))
{var c__202244__auto___204340 = cljs.core.chunk_first.call(null,seq__204289_204339__$1);{
var G__204341 = cljs.core.chunk_rest.call(null,seq__204289_204339__$1);
var G__204342 = c__202244__auto___204340;
var G__204343 = cljs.core.count.call(null,c__202244__auto___204340);
var G__204344 = 0;
seq__204289_204308 = G__204341;
chunk__204290_204309 = G__204342;
count__204291_204310 = G__204343;
i__204292_204311 = G__204344;
continue;
}
} else
{var source_204345 = cljs.core.first.call(null,seq__204289_204339__$1);source_204345.sinks = cljs.core.conj.call(null,source_204345.sinks,this$);
if((source_204345.rank > this$.rank))
{var seq__204297_204346 = cljs.core.seq.call(null,tailrecursion.javelin.bf_seq.call(null,cljs.core.identity,((function (seq__204289_204308,chunk__204290_204309,count__204291_204310,i__204292_204311,source_204345,seq__204289_204339__$1,temp__4092__auto___204338,vec__204288,f,sources){
return (function (p1__204263_SHARP_){return p1__204263_SHARP_.sinks;
});})(seq__204289_204308,chunk__204290_204309,count__204291_204310,i__204292_204311,source_204345,seq__204289_204339__$1,temp__4092__auto___204338,vec__204288,f,sources))
,source_204345));var chunk__204298_204347 = null;var count__204299_204348 = 0;var i__204300_204349 = 0;while(true){
if((i__204300_204349 < count__204299_204348))
{var dep_204350 = cljs.core._nth.call(null,chunk__204298_204347,i__204300_204349);dep_204350.rank = tailrecursion.javelin.next_rank.call(null);
{
var G__204351 = seq__204297_204346;
var G__204352 = chunk__204298_204347;
var G__204353 = count__204299_204348;
var G__204354 = (i__204300_204349 + 1);
seq__204297_204346 = G__204351;
chunk__204298_204347 = G__204352;
count__204299_204348 = G__204353;
i__204300_204349 = G__204354;
continue;
}
} else
{var temp__4092__auto___204355__$1 = cljs.core.seq.call(null,seq__204297_204346);if(temp__4092__auto___204355__$1)
{var seq__204297_204356__$1 = temp__4092__auto___204355__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__204297_204356__$1))
{var c__202244__auto___204357 = cljs.core.chunk_first.call(null,seq__204297_204356__$1);{
var G__204358 = cljs.core.chunk_rest.call(null,seq__204297_204356__$1);
var G__204359 = c__202244__auto___204357;
var G__204360 = cljs.core.count.call(null,c__202244__auto___204357);
var G__204361 = 0;
seq__204297_204346 = G__204358;
chunk__204298_204347 = G__204359;
count__204299_204348 = G__204360;
i__204300_204349 = G__204361;
continue;
}
} else
{var dep_204362 = cljs.core.first.call(null,seq__204297_204356__$1);dep_204362.rank = tailrecursion.javelin.next_rank.call(null);
{
var G__204363 = cljs.core.next.call(null,seq__204297_204356__$1);
var G__204364 = null;
var G__204365 = 0;
var G__204366 = 0;
seq__204297_204346 = G__204363;
chunk__204298_204347 = G__204364;
count__204299_204348 = G__204365;
i__204300_204349 = G__204366;
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
var G__204367 = cljs.core.next.call(null,seq__204289_204339__$1);
var G__204368 = null;
var G__204369 = 0;
var G__204370 = 0;
seq__204289_204308 = G__204367;
chunk__204290_204309 = G__204368;
count__204291_204310 = G__204369;
i__204292_204311 = G__204370;
continue;
}
}
} else
{}
}
break;
}
var compute = ((function (vec__204288,f,sources){
return (function (p1__204264_SHARP_){return cljs.core.apply.call(null,tailrecursion.javelin.deref_STAR_.call(null,cljs.core.peek.call(null,p1__204264_SHARP_)),cljs.core.map.call(null,tailrecursion.javelin.deref_STAR_,cljs.core.pop.call(null,p1__204264_SHARP_)));
});})(vec__204288,f,sources))
;var thunk = ((function (compute,vec__204288,f,sources){
return (function (){var x = this$.state;var y = compute.call(null,this$.sources);var seq__204301_204371 = cljs.core.seq.call(null,cljs.core.dissoc.call(null,this$.watches,new cljs.core.Keyword("tailrecursion.javelin","cell","tailrecursion.javelin/cell",3109523258)));var chunk__204302_204372 = null;var count__204303_204373 = 0;var i__204304_204374 = 0;while(true){
if((i__204304_204374 < count__204303_204373))
{var vec__204305_204375 = cljs.core._nth.call(null,chunk__204302_204372,i__204304_204374);var k_204376 = cljs.core.nth.call(null,vec__204305_204375,0,null);var f_204377__$1 = cljs.core.nth.call(null,vec__204305_204375,1,null);f_204377__$1.call(null,k_204376,this$,x,y);
{
var G__204378 = seq__204301_204371;
var G__204379 = chunk__204302_204372;
var G__204380 = count__204303_204373;
var G__204381 = (i__204304_204374 + 1);
seq__204301_204371 = G__204378;
chunk__204302_204372 = G__204379;
count__204303_204373 = G__204380;
i__204304_204374 = G__204381;
continue;
}
} else
{var temp__4092__auto___204382 = cljs.core.seq.call(null,seq__204301_204371);if(temp__4092__auto___204382)
{var seq__204301_204383__$1 = temp__4092__auto___204382;if(cljs.core.chunked_seq_QMARK_.call(null,seq__204301_204383__$1))
{var c__202244__auto___204384 = cljs.core.chunk_first.call(null,seq__204301_204383__$1);{
var G__204385 = cljs.core.chunk_rest.call(null,seq__204301_204383__$1);
var G__204386 = c__202244__auto___204384;
var G__204387 = cljs.core.count.call(null,c__202244__auto___204384);
var G__204388 = 0;
seq__204301_204371 = G__204385;
chunk__204302_204372 = G__204386;
count__204303_204373 = G__204387;
i__204304_204374 = G__204388;
continue;
}
} else
{var vec__204306_204389 = cljs.core.first.call(null,seq__204301_204383__$1);var k_204390 = cljs.core.nth.call(null,vec__204306_204389,0,null);var f_204391__$1 = cljs.core.nth.call(null,vec__204306_204389,1,null);f_204391__$1.call(null,k_204390,this$,x,y);
{
var G__204392 = cljs.core.next.call(null,seq__204301_204383__$1);
var G__204393 = null;
var G__204394 = 0;
var G__204395 = 0;
seq__204301_204371 = G__204392;
chunk__204302_204372 = G__204393;
count__204303_204373 = G__204394;
i__204304_204374 = G__204395;
continue;
}
}
} else
{}
}
break;
}
return this$.state = y;
});})(compute,vec__204288,f,sources))
;var err_mesg = "formula cell can't be updated via swap! or reset!";cljs.core._add_watch.call(null,this$,new cljs.core.Keyword("tailrecursion.javelin","cell","tailrecursion.javelin/cell",3109523258),(cljs.core.truth_(f)?((function (compute,thunk,err_mesg,vec__204288,f,sources){
return (function (){throw (new Error(err_mesg));
});})(compute,thunk,err_mesg,vec__204288,f,sources))
:((function (compute,thunk,err_mesg,vec__204288,f,sources){
return (function (p1__204266_SHARP_,p2__204265_SHARP_){return tailrecursion.javelin.propagate_BANG_.call(null,p2__204265_SHARP_);
});})(compute,thunk,err_mesg,vec__204288,f,sources))
));
this$.input_QMARK_ = (cljs.core.truth_(f)?false:true);
this$.thunk = (cljs.core.truth_(f)?thunk:((function (compute,thunk,err_mesg,vec__204288,f,sources){
return (function (){return cljs.core.deref.call(null,this$);
});})(compute,thunk,err_mesg,vec__204288,f,sources))
);
var G__204307 = this$;tailrecursion.javelin.propagate_BANG_.call(null,G__204307);
return G__204307;
};
var set_formula_BANG_ = function (this$,var_args){
var p__204267 = null;if (arguments.length > 1) {
  p__204267 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_formula_BANG___delegate.call(this,this$,p__204267);};
set_formula_BANG_.cljs$lang$maxFixedArity = 1;
set_formula_BANG_.cljs$lang$applyTo = (function (arglist__204396){
var this$ = cljs.core.first(arglist__204396);
var p__204267 = cljs.core.rest(arglist__204396);
return set_formula_BANG___delegate(this$,p__204267);
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
this.cljs$lang$protocol_mask$partition1$ = 98306;
this.cljs$lang$protocol_mask$partition0$ = 2147647488;
})
tailrecursion.javelin.Cell.cljs$lang$type = true;
tailrecursion.javelin.Cell.cljs$lang$ctorStr = "tailrecursion.javelin/Cell";
tailrecursion.javelin.Cell.cljs$lang$ctorPrWriter = (function (this__202063__auto__,writer__202064__auto__,opt__202065__auto__){return cljs.core._write.call(null,writer__202064__auto__,"tailrecursion.javelin/Cell");
});
tailrecursion.javelin.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__204397 = cljs.core.seq.call(null,self__.watches);var chunk__204398 = null;var count__204399 = 0;var i__204400 = 0;while(true){
if((i__204400 < count__204399))
{var vec__204401 = cljs.core._nth.call(null,chunk__204398,i__204400);var key = cljs.core.nth.call(null,vec__204401,0,null);var f = cljs.core.nth.call(null,vec__204401,1,null);f.call(null,key,this$__$1,oldval,newval);
{
var G__204403 = seq__204397;
var G__204404 = chunk__204398;
var G__204405 = count__204399;
var G__204406 = (i__204400 + 1);
seq__204397 = G__204403;
chunk__204398 = G__204404;
count__204399 = G__204405;
i__204400 = G__204406;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__204397);if(temp__4092__auto__)
{var seq__204397__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__204397__$1))
{var c__202244__auto__ = cljs.core.chunk_first.call(null,seq__204397__$1);{
var G__204407 = cljs.core.chunk_rest.call(null,seq__204397__$1);
var G__204408 = c__202244__auto__;
var G__204409 = cljs.core.count.call(null,c__202244__auto__);
var G__204410 = 0;
seq__204397 = G__204407;
chunk__204398 = G__204408;
count__204399 = G__204409;
i__204400 = G__204410;
continue;
}
} else
{var vec__204402 = cljs.core.first.call(null,seq__204397__$1);var key = cljs.core.nth.call(null,vec__204402,0,null);var f = cljs.core.nth.call(null,vec__204402,1,null);f.call(null,key,this$__$1,oldval,newval);
{
var G__204411 = cljs.core.next.call(null,seq__204397__$1);
var G__204412 = null;
var G__204413 = 0;
var G__204414 = 0;
seq__204397 = G__204411;
chunk__204398 = G__204412;
count__204399 = G__204413;
i__204400 = G__204414;
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
tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this$,f){var self__ = this;
var this$__$1 = this;return cljs.core.reset_BANG_.call(null,this$__$1,f.call(null,this$__$1.state));
});
tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){var self__ = this;
var this$__$1 = this;return cljs.core.reset_BANG_.call(null,this$__$1,f.call(null,this$__$1.state,a));
});
tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){var self__ = this;
var this$__$1 = this;return cljs.core.reset_BANG_.call(null,this$__$1,f.call(null,this$__$1.state,a,b));
});
tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){var self__ = this;
var this$__$1 = this;return cljs.core.reset_BANG_.call(null,this$__$1,cljs.core.apply.call(null,f,this$__$1.state,a,b,xs));
});
tailrecursion.javelin.Cell.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,new_value){var self__ = this;
var this$__$1 = this;var old_value = this$__$1.state;this$__$1.state = new_value;
if((this$__$1.watches == null))
{} else
{cljs.core._notify_watches.call(null,this$__$1,old_value,new_value);
}
return new_value;
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
var G__204415__delegate = function (sources){return tailrecursion.javelin.set_formula_BANG_.call(null,tailrecursion.javelin.cell.call(null,new cljs.core.Keyword("tailrecursion.javelin","none","tailrecursion.javelin/none",3109973412)),f,sources);
};
var G__204415 = function (var_args){
var sources = null;if (arguments.length > 0) {
  sources = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__204415__delegate.call(this,sources);};
G__204415.cljs$lang$maxFixedArity = 0;
G__204415.cljs$lang$applyTo = (function (arglist__204416){
var sources = cljs.core.seq(arglist__204416);
return G__204415__delegate(sources);
});
G__204415.cljs$core$IFn$_invoke$arity$variadic = G__204415__delegate;
return G__204415;
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
tailrecursion.javelin.input_QMARK_ = (function input_QMARK_(c){if(cljs.core.truth_((function (){var and__201484__auto__ = tailrecursion.javelin.cell_QMARK_.call(null,c);if(cljs.core.truth_(and__201484__auto__))
{return c.input_QMARK_;
} else
{return and__201484__auto__;
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
return (function (p1__204417_SHARP_,p2__204418_SHARP_){return (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.call(null,p1__204417_SHARP_,p2__204418_SHARP_),p2__204418_SHARP_],null));
});})(olds))
;var diff = ((function (olds,tag_neq){
return (function (p1__204420_SHARP_,p2__204419_SHARP_){return cljs.core.distinct.call(null,cljs.core.map.call(null,cljs.core.second,cljs.core.filter.call(null,cljs.core.first,cljs.core.map.call(null,tag_neq,p1__204420_SHARP_,p2__204419_SHARP_))));
});})(olds,tag_neq))
;var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__204422__delegate = function (rest__204421_SHARP_){var news = diff.call(null,cljs.core.deref.call(null,olds),rest__204421_SHARP_);cljs.core.reset_BANG_.call(null,olds,rest__204421_SHARP_);
return news;
};
var G__204422 = function (var_args){
var rest__204421_SHARP_ = null;if (arguments.length > 0) {
  rest__204421_SHARP_ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__204422__delegate.call(this,rest__204421_SHARP_);};
G__204422.cljs$lang$maxFixedArity = 0;
G__204422.cljs$lang$applyTo = (function (arglist__204423){
var rest__204421_SHARP_ = cljs.core.seq(arglist__204423);
return G__204422__delegate(rest__204421_SHARP_);
});
G__204422.cljs$core$IFn$_invoke$arity$variadic = G__204422__delegate;
return G__204422;
})()
;})(olds,tag_neq,diff))
;return cljs.core.apply.call(null,tailrecursion.javelin.lift.call(null,proc),cells);
};
var alts_BANG_ = function (var_args){
var cells = null;if (arguments.length > 0) {
  cells = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return alts_BANG___delegate.call(this,cells);};
alts_BANG_.cljs$lang$maxFixedArity = 0;
alts_BANG_.cljs$lang$applyTo = (function (arglist__204424){
var cells = cljs.core.seq(arglist__204424);
return alts_BANG___delegate(cells);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
tailrecursion.javelin.cell_map = (function cell_map(f,c){var cseq = tailrecursion.javelin.lift.call(null,cljs.core.seq).call(null,c);var safe_nth = ((function (cseq){
return (function (p1__204425_SHARP_,p2__204426_SHARP_){try{return cljs.core.nth.call(null,p1__204425_SHARP_,p2__204426_SHARP_);
}catch (e204429){if((e204429 instanceof Error))
{var _ = e204429;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e204429;
} else
{return null;
}
}
}});})(cseq))
;return cljs.core.map.call(null,((function (cseq,safe_nth){
return (function (p1__204427_SHARP_){return tailrecursion.javelin.lift.call(null,cljs.core.comp.call(null,f,safe_nth)).call(null,cseq,p1__204427_SHARP_);
});})(cseq,safe_nth))
,cljs.core.range.call(null,0,cljs.core.count.call(null,cljs.core.deref.call(null,cseq))));
});
