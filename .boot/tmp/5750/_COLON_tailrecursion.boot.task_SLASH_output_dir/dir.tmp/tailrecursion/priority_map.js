// Compiled by ClojureScript 0.0-2156
goog.provide('tailrecursion.priority_map');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.reader');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
*/
tailrecursion.priority_map.PersistentPriorityMap = (function (priority__GT_set_of_items,item__GT_priority,meta,__hash){
this.priority__GT_set_of_items = priority__GT_set_of_items;
this.item__GT_priority = item__GT_priority;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2565220111;
})
tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$type = true;
tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$ctorStr = "tailrecursion.priority-map/PersistentPriorityMap";
tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$ctorPrWriter = (function (this__10152__auto__,writer__10153__auto__,opt__10154__auto__){return cljs.core._write.call(null,writer__10153__auto__,"tailrecursion.priority-map/PersistentPriorityMap");
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var h__9996__auto__ = self__.__hash;if(!((h__9996__auto__ == null)))
{return h__9996__auto__;
} else
{var h__9996__auto____$1 = cljs.core.hash_imap.call(null,this$__$1);self__.__hash = h__9996__auto____$1;
return h__9996__auto____$1;
}
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,item){var self__ = this;
var this$__$1 = this;return cljs.core.get.call(null,self__.item__GT_priority,item);
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,item,not_found){var self__ = this;
var coll__$1 = this;return cljs.core.get.call(null,self__.item__GT_priority,item,not_found);
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,item,priority){var self__ = this;
var this$__$1 = this;var temp__4090__auto__ = cljs.core.get.call(null,self__.item__GT_priority,item,null);if(cljs.core.truth_(temp__4090__auto__))
{var current_priority = temp__4090__auto__;if(cljs.core._EQ_.call(null,current_priority,priority))
{return this$__$1;
} else
{var item_set = cljs.core.get.call(null,self__.priority__GT_set_of_items,current_priority);if(cljs.core._EQ_.call(null,cljs.core.count.call(null,item_set),1))
{return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.call(null,cljs.core.dissoc.call(null,self__.priority__GT_set_of_items,current_priority),priority,cljs.core.conj.call(null,cljs.core.get.call(null,self__.priority__GT_set_of_items,priority,cljs.core.PersistentHashSet.EMPTY),item)),cljs.core.assoc.call(null,self__.item__GT_priority,item,priority),self__.meta,null));
} else
{return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.call(null,self__.priority__GT_set_of_items,current_priority,cljs.core.disj.call(null,cljs.core.get.call(null,self__.priority__GT_set_of_items,current_priority),item),priority,cljs.core.conj.call(null,cljs.core.get.call(null,self__.priority__GT_set_of_items,priority,cljs.core.PersistentHashSet.EMPTY),item)),cljs.core.assoc.call(null,self__.item__GT_priority,item,priority),self__.meta,null));
}
}
} else
{return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.call(null,self__.priority__GT_set_of_items,priority,cljs.core.conj.call(null,cljs.core.get.call(null,self__.priority__GT_set_of_items,priority,cljs.core.PersistentHashSet.EMPTY),item)),cljs.core.assoc.call(null,self__.item__GT_priority,item,priority),self__.meta,null));
}
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this$,item){var self__ = this;
var this$__$1 = this;return cljs.core.contains_QMARK_.call(null,self__.item__GT_priority,item);
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.call = (function() {
var G__12648 = null;
var G__12648__2 = (function (self__,item){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$2(null,item);
});
var G__12648__3 = (function (self__,item,not_found){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$3(null,item,not_found);
});
G__12648 = function(self__,item,not_found){
switch(arguments.length){
case 2:
return G__12648__2.call(this,self__,item);
case 3:
return G__12648__3.call(this,self__,item,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__12648;
})()
;
tailrecursion.priority_map.PersistentPriorityMap.prototype.apply = (function (self__,args12623){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args12623)));
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (item){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$2(null,item);
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (item,not_found){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$3(null,item,not_found);
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var self__ = this;
var coll__$1 = this;var pr_pair = (function (keyval){return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});return cljs.core.pr_sequential_writer.call(null,writer,pr_pair,"#tailrecursion.priority-map {",", ","}",opts,coll__$1);
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,entry){var self__ = this;
var this$__$1 = this;if(cljs.core.vector_QMARK_.call(null,entry))
{return cljs.core._assoc.call(null,this$__$1,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this$__$1,entry);
}
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.seq.call(null,(function (){var iter__10302__auto__ = (function iter__12624(s__12625){return (new cljs.core.LazySeq(null,(function (){var s__12625__$1 = s__12625;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__12625__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var vec__12631 = cljs.core.first.call(null,xs__4579__auto__);var priority = cljs.core.nth.call(null,vec__12631,0,null);var item_set = cljs.core.nth.call(null,vec__12631,1,null);var iterys__10298__auto__ = ((function (s__12625__$1,vec__12631,priority,item_set,xs__4579__auto__,temp__4092__auto__){
return (function iter__12626(s__12627){return (new cljs.core.LazySeq(null,((function (s__12625__$1,vec__12631,priority,item_set,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__12627__$1 = s__12627;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__12627__$1);if(temp__4092__auto____$1)
{var s__12627__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__12627__$2))
{var c__10300__auto__ = cljs.core.chunk_first.call(null,s__12627__$2);var size__10301__auto__ = cljs.core.count.call(null,c__10300__auto__);var b__12629 = cljs.core.chunk_buffer.call(null,size__10301__auto__);if((function (){var i__12628 = 0;while(true){
if((i__12628 < size__10301__auto__))
{var item = cljs.core._nth.call(null,c__10300__auto__,i__12628);cljs.core.chunk_append.call(null,b__12629,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));
{
var G__12649 = (i__12628 + 1);
i__12628 = G__12649;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12629),iter__12626.call(null,cljs.core.chunk_rest.call(null,s__12627__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12629),null);
}
} else
{var item = cljs.core.first.call(null,s__12627__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),iter__12626.call(null,cljs.core.rest.call(null,s__12627__$2)));
}
} else
{return null;
}
break;
}
});})(s__12625__$1,vec__12631,priority,item_set,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__12625__$1,vec__12631,priority,item_set,xs__4579__auto__,temp__4092__auto__))
;var fs__10299__auto__ = cljs.core.seq.call(null,iterys__10298__auto__.call(null,item_set));if(fs__10299__auto__)
{return cljs.core.concat.call(null,fs__10299__auto__,iter__12624.call(null,cljs.core.rest.call(null,s__12625__$1)));
} else
{{
var G__12650 = cljs.core.rest.call(null,s__12625__$1);
s__12625__$1 = G__12650;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__10302__auto__.call(null,cljs.core.rseq.call(null,self__.priority__GT_set_of_items));
})());
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (this$,ascending_QMARK_){var self__ = this;
var this$__$1 = this;return (cljs.core.truth_(ascending_QMARK_)?cljs.core.seq:cljs.core.rseq).call(null,this$__$1);
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (this$,k,ascending_QMARK_){var self__ = this;
var this$__$1 = this;var sets = (cljs.core.truth_(ascending_QMARK_)?cljs.core.subseq.call(null,self__.priority__GT_set_of_items,cljs.core._GT__EQ_,k):cljs.core.rsubseq.call(null,self__.priority__GT_set_of_items,cljs.core._LT__EQ_,k));return cljs.core.seq.call(null,(function (){var iter__10302__auto__ = (function iter__12632(s__12633){return (new cljs.core.LazySeq(null,(function (){var s__12633__$1 = s__12633;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__12633__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var vec__12639 = cljs.core.first.call(null,xs__4579__auto__);var priority = cljs.core.nth.call(null,vec__12639,0,null);var item_set = cljs.core.nth.call(null,vec__12639,1,null);var iterys__10298__auto__ = ((function (s__12633__$1,vec__12639,priority,item_set,xs__4579__auto__,temp__4092__auto__){
return (function iter__12634(s__12635){return (new cljs.core.LazySeq(null,((function (s__12633__$1,vec__12639,priority,item_set,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__12635__$1 = s__12635;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__12635__$1);if(temp__4092__auto____$1)
{var s__12635__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__12635__$2))
{var c__10300__auto__ = cljs.core.chunk_first.call(null,s__12635__$2);var size__10301__auto__ = cljs.core.count.call(null,c__10300__auto__);var b__12637 = cljs.core.chunk_buffer.call(null,size__10301__auto__);if((function (){var i__12636 = 0;while(true){
if((i__12636 < size__10301__auto__))
{var item = cljs.core._nth.call(null,c__10300__auto__,i__12636);cljs.core.chunk_append.call(null,b__12637,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));
{
var G__12651 = (i__12636 + 1);
i__12636 = G__12651;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12637),iter__12634.call(null,cljs.core.chunk_rest.call(null,s__12635__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12637),null);
}
} else
{var item = cljs.core.first.call(null,s__12635__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),iter__12634.call(null,cljs.core.rest.call(null,s__12635__$2)));
}
} else
{return null;
}
break;
}
});})(s__12633__$1,vec__12639,priority,item_set,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__12633__$1,vec__12639,priority,item_set,xs__4579__auto__,temp__4092__auto__))
;var fs__10299__auto__ = cljs.core.seq.call(null,iterys__10298__auto__.call(null,item_set));if(fs__10299__auto__)
{return cljs.core.concat.call(null,fs__10299__auto__,iter__12632.call(null,cljs.core.rest.call(null,s__12633__$1)));
} else
{{
var G__12652 = cljs.core.rest.call(null,s__12633__$1);
s__12633__$1 = G__12652;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__10302__auto__.call(null,sets);
})());
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (this$,entry){var self__ = this;
var this$__$1 = this;return cljs.core.val.call(null,entry);
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.compare;
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.seq.call(null,(function (){var iter__10302__auto__ = (function iter__12640(s__12641){return (new cljs.core.LazySeq(null,(function (){var s__12641__$1 = s__12641;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__12641__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var vec__12647 = cljs.core.first.call(null,xs__4579__auto__);var priority = cljs.core.nth.call(null,vec__12647,0,null);var item_set = cljs.core.nth.call(null,vec__12647,1,null);var iterys__10298__auto__ = ((function (s__12641__$1,vec__12647,priority,item_set,xs__4579__auto__,temp__4092__auto__){
return (function iter__12642(s__12643){return (new cljs.core.LazySeq(null,((function (s__12641__$1,vec__12647,priority,item_set,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__12643__$1 = s__12643;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__12643__$1);if(temp__4092__auto____$1)
{var s__12643__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__12643__$2))
{var c__10300__auto__ = cljs.core.chunk_first.call(null,s__12643__$2);var size__10301__auto__ = cljs.core.count.call(null,c__10300__auto__);var b__12645 = cljs.core.chunk_buffer.call(null,size__10301__auto__);if((function (){var i__12644 = 0;while(true){
if((i__12644 < size__10301__auto__))
{var item = cljs.core._nth.call(null,c__10300__auto__,i__12644);cljs.core.chunk_append.call(null,b__12645,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));
{
var G__12653 = (i__12644 + 1);
i__12644 = G__12653;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12645),iter__12642.call(null,cljs.core.chunk_rest.call(null,s__12643__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12645),null);
}
} else
{var item = cljs.core.first.call(null,s__12643__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),iter__12642.call(null,cljs.core.rest.call(null,s__12643__$2)));
}
} else
{return null;
}
break;
}
});})(s__12641__$1,vec__12647,priority,item_set,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__12641__$1,vec__12647,priority,item_set,xs__4579__auto__,temp__4092__auto__))
;var fs__10299__auto__ = cljs.core.seq.call(null,iterys__10298__auto__.call(null,item_set));if(fs__10299__auto__)
{return cljs.core.concat.call(null,fs__10299__auto__,iter__12640.call(null,cljs.core.rest.call(null,s__12641__$1)));
} else
{{
var G__12654 = cljs.core.rest.call(null,s__12641__$1);
s__12641__$1 = G__12654;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__10302__auto__.call(null,self__.priority__GT_set_of_items);
})());
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.count.call(null,self__.item__GT_priority);
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if((cljs.core.count.call(null,self__.item__GT_priority) === 0))
{return null;
} else
{var f = cljs.core.first.call(null,self__.priority__GT_set_of_items);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,cljs.core.val.call(null,f)),cljs.core.key.call(null,f)], null);
}
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if((cljs.core.count.call(null,self__.item__GT_priority) === 0))
{throw (new Error("Can't pop empty priority map"));
} else
{var f = cljs.core.first.call(null,self__.priority__GT_set_of_items);var item_set = cljs.core.val.call(null,f);var item = cljs.core.first.call(null,item_set);var priority = cljs.core.key.call(null,f);if(cljs.core._EQ_.call(null,cljs.core.count.call(null,item_set),1))
{return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.dissoc.call(null,self__.priority__GT_set_of_items,priority),cljs.core.dissoc.call(null,self__.item__GT_priority,item),self__.meta,null));
} else
{return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.call(null,self__.priority__GT_set_of_items,priority,cljs.core.disj.call(null,item_set,item)),cljs.core.dissoc.call(null,self__.item__GT_priority,item),self__.meta,null));
}
}
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var self__ = this;
var this$__$1 = this;return cljs.core._equiv.call(null,self__.item__GT_priority,other);
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,meta__$1){var self__ = this;
var this$__$1 = this;return (new tailrecursion.priority_map.PersistentPriorityMap(self__.priority__GT_set_of_items,self__.item__GT_priority,meta__$1,self__.__hash));
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.meta;
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.with_meta.call(null,tailrecursion.priority_map.PersistentPriorityMap.EMPTY,self__.meta);
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this$,item){var self__ = this;
var this$__$1 = this;var priority = self__.item__GT_priority.call(null,item,new cljs.core.Keyword("tailrecursion.priority-map","not-found","tailrecursion.priority-map/not-found",3913856644));if(cljs.core._EQ_.call(null,priority,new cljs.core.Keyword("tailrecursion.priority-map","not-found","tailrecursion.priority-map/not-found",3913856644)))
{return this$__$1;
} else
{var item_set = self__.priority__GT_set_of_items.call(null,priority);if(cljs.core._EQ_.call(null,cljs.core.count.call(null,item_set),1))
{return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.dissoc.call(null,self__.priority__GT_set_of_items,priority),cljs.core.dissoc.call(null,self__.item__GT_priority,item),self__.meta,null));
} else
{return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.call(null,self__.priority__GT_set_of_items,priority,cljs.core.disj.call(null,item_set,item)),cljs.core.dissoc.call(null,self__.item__GT_priority,item),self__.meta,null));
}
}
});
tailrecursion.priority_map.__GT_PersistentPriorityMap = (function __GT_PersistentPriorityMap(priority__GT_set_of_items,item__GT_priority,meta,__hash){return (new tailrecursion.priority_map.PersistentPriorityMap(priority__GT_set_of_items,item__GT_priority,meta,__hash));
});
tailrecursion.priority_map.PersistentPriorityMap.EMPTY = (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map.call(null),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null));
tailrecursion.priority_map.pm_empty_by = (function pm_empty_by(comparator){return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map_by.call(null,comparator),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null));
});
tailrecursion.priority_map.read_priority_map = (function read_priority_map(elems){if(cljs.core.map_QMARK_.call(null,elems))
{return cljs.core.into.call(null,tailrecursion.priority_map.PersistentPriorityMap.EMPTY,elems);
} else
{return cljs.reader.reader_error.call(null,null,"Priority map literal expects a map for its elements.");
}
});
cljs.reader.register_tag_parser_BANG_.call(null,"tailrecursion.priority-map",tailrecursion.priority_map.read_priority_map);
/**
* keyval => key val
* Returns a new priority map with supplied mappings.
* @param {...*} var_args
*/
tailrecursion.priority_map.priority_map = (function() { 
var priority_map__delegate = function (keyvals){var in$ = cljs.core.seq.call(null,keyvals);var out = tailrecursion.priority_map.PersistentPriorityMap.EMPTY;while(true){
if(in$)
{{
var G__12655 = cljs.core.nnext.call(null,in$);
var G__12656 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__12655;
out = G__12656;
continue;
}
} else
{return out;
}
break;
}
};
var priority_map = function (var_args){
var keyvals = null;if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return priority_map__delegate.call(this,keyvals);};
priority_map.cljs$lang$maxFixedArity = 0;
priority_map.cljs$lang$applyTo = (function (arglist__12657){
var keyvals = cljs.core.seq(arglist__12657);
return priority_map__delegate(keyvals);
});
priority_map.cljs$core$IFn$_invoke$arity$variadic = priority_map__delegate;
return priority_map;
})()
;
/**
* keyval => key val
* Returns a new priority map with supplied
* mappings, using the supplied comparator.
* @param {...*} var_args
*/
tailrecursion.priority_map.priority_map_by = (function() { 
var priority_map_by__delegate = function (comparator,keyvals){var in$ = cljs.core.seq.call(null,keyvals);var out = tailrecursion.priority_map.pm_empty_by.call(null,comparator);while(true){
if(in$)
{{
var G__12658 = cljs.core.nnext.call(null,in$);
var G__12659 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__12658;
out = G__12659;
continue;
}
} else
{return out;
}
break;
}
};
var priority_map_by = function (comparator,var_args){
var keyvals = null;if (arguments.length > 1) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return priority_map_by__delegate.call(this,comparator,keyvals);};
priority_map_by.cljs$lang$maxFixedArity = 1;
priority_map_by.cljs$lang$applyTo = (function (arglist__12660){
var comparator = cljs.core.first(arglist__12660);
var keyvals = cljs.core.rest(arglist__12660);
return priority_map_by__delegate(comparator,keyvals);
});
priority_map_by.cljs$core$IFn$_invoke$arity$variadic = priority_map_by__delegate;
return priority_map_by;
})()
;
