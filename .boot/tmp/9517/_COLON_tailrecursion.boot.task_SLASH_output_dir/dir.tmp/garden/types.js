// Compiled by ClojureScript 0.0-2202
goog.provide('garden.types');
goog.require('cljs.core');

/**
* @constructor
* @param {*} unit
* @param {*} magnitude
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
garden.types.CSSUnit = (function (unit,magnitude,__meta,__extmap){
this.unit = unit;
this.magnitude = magnitude;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>2){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
garden.types.CSSUnit.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__202077__auto__){var self__ = this;
var this__202077__auto____$1 = this;var h__201907__auto__ = self__.__hash;if(!((h__201907__auto__ == null)))
{return h__201907__auto__;
} else
{var h__201907__auto____$1 = cljs.core.hash_imap.call(null,this__202077__auto____$1);self__.__hash = h__201907__auto____$1;
return h__201907__auto____$1;
}
});
garden.types.CSSUnit.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__202082__auto__,k__202083__auto__){var self__ = this;
var this__202082__auto____$1 = this;return cljs.core._lookup.call(null,this__202082__auto____$1,k__202083__auto__,null);
});
garden.types.CSSUnit.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__202084__auto__,k203994,else__202085__auto__){var self__ = this;
var this__202084__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k203994,new cljs.core.Keyword(null,"unit","unit",1017498870)))
{return self__.unit;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k203994,new cljs.core.Keyword(null,"magnitude","magnitude",3292087682)))
{return self__.magnitude;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k203994,else__202085__auto__);
} else
{return null;
}
}
}
});
garden.types.CSSUnit.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__202089__auto__,k__202090__auto__,G__203993){var self__ = this;
var this__202089__auto____$1 = this;var pred__203996 = cljs.core.keyword_identical_QMARK_;var expr__203997 = k__202090__auto__;if(cljs.core.truth_(pred__203996.call(null,new cljs.core.Keyword(null,"unit","unit",1017498870),expr__203997)))
{return (new garden.types.CSSUnit(G__203993,self__.magnitude,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__203996.call(null,new cljs.core.Keyword(null,"magnitude","magnitude",3292087682),expr__203997)))
{return (new garden.types.CSSUnit(self__.unit,G__203993,self__.__meta,self__.__extmap,null));
} else
{return (new garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__202090__auto__,G__203993),null));
}
}
});
garden.types.CSSUnit.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__202096__auto__,writer__202097__auto__,opts__202098__auto__){var self__ = this;
var this__202096__auto____$1 = this;var pr_pair__202099__auto__ = ((function (this__202096__auto____$1){
return (function (keyval__202100__auto__){return cljs.core.pr_sequential_writer.call(null,writer__202097__auto__,cljs.core.pr_writer,""," ","",opts__202098__auto__,keyval__202100__auto__);
});})(this__202096__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__202097__auto__,pr_pair__202099__auto__,"#garden.types.CSSUnit{",", ","}",opts__202098__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"unit","unit",1017498870),self__.unit],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"magnitude","magnitude",3292087682),self__.magnitude],null))], null),self__.__extmap));
});
garden.types.CSSUnit.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__202087__auto__,entry__202088__auto__){var self__ = this;
var this__202087__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__202088__auto__))
{return cljs.core._assoc.call(null,this__202087__auto____$1,cljs.core._nth.call(null,entry__202088__auto__,0),cljs.core._nth.call(null,entry__202088__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__202087__auto____$1,entry__202088__auto__);
}
});
garden.types.CSSUnit.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__202094__auto__){var self__ = this;
var this__202094__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"unit","unit",1017498870),self__.unit],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"magnitude","magnitude",3292087682),self__.magnitude],null))], null),self__.__extmap));
});
garden.types.CSSUnit.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__202086__auto__){var self__ = this;
var this__202086__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
garden.types.CSSUnit.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__202078__auto__,other__202079__auto__){var self__ = this;
var this__202078__auto____$1 = this;if(cljs.core.truth_((function (){var and__201484__auto__ = other__202079__auto__;if(cljs.core.truth_(and__201484__auto__))
{return ((this__202078__auto____$1.constructor === other__202079__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__202078__auto____$1,other__202079__auto__));
} else
{return and__201484__auto__;
}
})()))
{return true;
} else
{return false;
}
});
garden.types.CSSUnit.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__202081__auto__,G__203993){var self__ = this;
var this__202081__auto____$1 = this;return (new garden.types.CSSUnit(self__.unit,self__.magnitude,G__203993,self__.__extmap,self__.__hash));
});
garden.types.CSSUnit.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__202076__auto__){var self__ = this;
var this__202076__auto____$1 = this;return (new garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,self__.__extmap,self__.__hash));
});
garden.types.CSSUnit.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__202080__auto__){var self__ = this;
var this__202080__auto____$1 = this;return self__.__meta;
});
garden.types.CSSUnit.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__202091__auto__,k__202092__auto__){var self__ = this;
var this__202091__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"magnitude","magnitude",3292087682),null,new cljs.core.Keyword(null,"unit","unit",1017498870),null], null), null),k__202092__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__202091__auto____$1),self__.__meta),k__202092__auto__);
} else
{return (new garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__202092__auto__)),null));
}
});
garden.types.CSSUnit.cljs$lang$type = true;
garden.types.CSSUnit.cljs$lang$ctorPrSeq = (function (this__202116__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"garden.types/CSSUnit");
});
garden.types.CSSUnit.cljs$lang$ctorPrWriter = (function (this__202116__auto__,writer__202117__auto__){return cljs.core._write.call(null,writer__202117__auto__,"garden.types/CSSUnit");
});
garden.types.__GT_CSSUnit = (function __GT_CSSUnit(unit,magnitude){return (new garden.types.CSSUnit(unit,magnitude));
});
garden.types.map__GT_CSSUnit = (function map__GT_CSSUnit(G__203995){return (new garden.types.CSSUnit(new cljs.core.Keyword(null,"unit","unit",1017498870).cljs$core$IFn$_invoke$arity$1(G__203995),new cljs.core.Keyword(null,"magnitude","magnitude",3292087682).cljs$core$IFn$_invoke$arity$1(G__203995),null,cljs.core.dissoc.call(null,G__203995,new cljs.core.Keyword(null,"unit","unit",1017498870),new cljs.core.Keyword(null,"magnitude","magnitude",3292087682))));
});

/**
* @constructor
* @param {*} function$
* @param {*} args
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
garden.types.CSSFunction = (function (function$,args,__meta,__extmap){
this.function$ = function$;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>2){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
garden.types.CSSFunction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__202077__auto__){var self__ = this;
var this__202077__auto____$1 = this;var h__201907__auto__ = self__.__hash;if(!((h__201907__auto__ == null)))
{return h__201907__auto__;
} else
{var h__201907__auto____$1 = cljs.core.hash_imap.call(null,this__202077__auto____$1);self__.__hash = h__201907__auto____$1;
return h__201907__auto____$1;
}
});
garden.types.CSSFunction.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__202082__auto__,k__202083__auto__){var self__ = this;
var this__202082__auto____$1 = this;return cljs.core._lookup.call(null,this__202082__auto____$1,k__202083__auto__,null);
});
garden.types.CSSFunction.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__202084__auto__,k204000,else__202085__auto__){var self__ = this;
var this__202084__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k204000,new cljs.core.Keyword(null,"function","function",2394842954)))
{return self__.function$;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k204000,new cljs.core.Keyword(null,"args","args",1016906831)))
{return self__.args;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k204000,else__202085__auto__);
} else
{return null;
}
}
}
});
garden.types.CSSFunction.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__202089__auto__,k__202090__auto__,G__203999){var self__ = this;
var this__202089__auto____$1 = this;var pred__204002 = cljs.core.keyword_identical_QMARK_;var expr__204003 = k__202090__auto__;if(cljs.core.truth_(pred__204002.call(null,new cljs.core.Keyword(null,"function","function",2394842954),expr__204003)))
{return (new garden.types.CSSFunction(G__203999,self__.args,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__204002.call(null,new cljs.core.Keyword(null,"args","args",1016906831),expr__204003)))
{return (new garden.types.CSSFunction(self__.function$,G__203999,self__.__meta,self__.__extmap,null));
} else
{return (new garden.types.CSSFunction(self__.function$,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__202090__auto__,G__203999),null));
}
}
});
garden.types.CSSFunction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__202096__auto__,writer__202097__auto__,opts__202098__auto__){var self__ = this;
var this__202096__auto____$1 = this;var pr_pair__202099__auto__ = ((function (this__202096__auto____$1){
return (function (keyval__202100__auto__){return cljs.core.pr_sequential_writer.call(null,writer__202097__auto__,cljs.core.pr_writer,""," ","",opts__202098__auto__,keyval__202100__auto__);
});})(this__202096__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__202097__auto__,pr_pair__202099__auto__,"#garden.types.CSSFunction{",", ","}",opts__202098__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"function","function",2394842954),self__.function$],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1016906831),self__.args],null))], null),self__.__extmap));
});
garden.types.CSSFunction.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__202087__auto__,entry__202088__auto__){var self__ = this;
var this__202087__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__202088__auto__))
{return cljs.core._assoc.call(null,this__202087__auto____$1,cljs.core._nth.call(null,entry__202088__auto__,0),cljs.core._nth.call(null,entry__202088__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__202087__auto____$1,entry__202088__auto__);
}
});
garden.types.CSSFunction.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__202094__auto__){var self__ = this;
var this__202094__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"function","function",2394842954),self__.function$],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1016906831),self__.args],null))], null),self__.__extmap));
});
garden.types.CSSFunction.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__202086__auto__){var self__ = this;
var this__202086__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
garden.types.CSSFunction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__202078__auto__,other__202079__auto__){var self__ = this;
var this__202078__auto____$1 = this;if(cljs.core.truth_((function (){var and__201484__auto__ = other__202079__auto__;if(cljs.core.truth_(and__201484__auto__))
{return ((this__202078__auto____$1.constructor === other__202079__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__202078__auto____$1,other__202079__auto__));
} else
{return and__201484__auto__;
}
})()))
{return true;
} else
{return false;
}
});
garden.types.CSSFunction.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__202081__auto__,G__203999){var self__ = this;
var this__202081__auto____$1 = this;return (new garden.types.CSSFunction(self__.function$,self__.args,G__203999,self__.__extmap,self__.__hash));
});
garden.types.CSSFunction.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__202076__auto__){var self__ = this;
var this__202076__auto____$1 = this;return (new garden.types.CSSFunction(self__.function$,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});
garden.types.CSSFunction.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__202080__auto__){var self__ = this;
var this__202080__auto____$1 = this;return self__.__meta;
});
garden.types.CSSFunction.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__202091__auto__,k__202092__auto__){var self__ = this;
var this__202091__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1016906831),null,new cljs.core.Keyword(null,"function","function",2394842954),null], null), null),k__202092__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__202091__auto____$1),self__.__meta),k__202092__auto__);
} else
{return (new garden.types.CSSFunction(self__.function$,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__202092__auto__)),null));
}
});
garden.types.CSSFunction.cljs$lang$type = true;
garden.types.CSSFunction.cljs$lang$ctorPrSeq = (function (this__202116__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"garden.types/CSSFunction");
});
garden.types.CSSFunction.cljs$lang$ctorPrWriter = (function (this__202116__auto__,writer__202117__auto__){return cljs.core._write.call(null,writer__202117__auto__,"garden.types/CSSFunction");
});
garden.types.__GT_CSSFunction = (function __GT_CSSFunction(function$,args){return (new garden.types.CSSFunction(function$,args));
});
garden.types.map__GT_CSSFunction = (function map__GT_CSSFunction(G__204001){return (new garden.types.CSSFunction(new cljs.core.Keyword(null,"function","function",2394842954).cljs$core$IFn$_invoke$arity$1(G__204001),new cljs.core.Keyword(null,"args","args",1016906831).cljs$core$IFn$_invoke$arity$1(G__204001),null,cljs.core.dissoc.call(null,G__204001,new cljs.core.Keyword(null,"function","function",2394842954),new cljs.core.Keyword(null,"args","args",1016906831))));
});

/**
* @constructor
* @param {*} identifier
* @param {*} value
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
garden.types.CSSAtRule = (function (identifier,value,__meta,__extmap){
this.identifier = identifier;
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>2){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
garden.types.CSSAtRule.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__202077__auto__){var self__ = this;
var this__202077__auto____$1 = this;var h__201907__auto__ = self__.__hash;if(!((h__201907__auto__ == null)))
{return h__201907__auto__;
} else
{var h__201907__auto____$1 = cljs.core.hash_imap.call(null,this__202077__auto____$1);self__.__hash = h__201907__auto____$1;
return h__201907__auto____$1;
}
});
garden.types.CSSAtRule.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__202082__auto__,k__202083__auto__){var self__ = this;
var this__202082__auto____$1 = this;return cljs.core._lookup.call(null,this__202082__auto____$1,k__202083__auto__,null);
});
garden.types.CSSAtRule.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__202084__auto__,k204006,else__202085__auto__){var self__ = this;
var this__202084__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k204006,new cljs.core.Keyword(null,"identifier","identifier",3690438683)))
{return self__.identifier;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k204006,new cljs.core.Keyword(null,"value","value",1125876963)))
{return self__.value;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k204006,else__202085__auto__);
} else
{return null;
}
}
}
});
garden.types.CSSAtRule.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__202089__auto__,k__202090__auto__,G__204005){var self__ = this;
var this__202089__auto____$1 = this;var pred__204008 = cljs.core.keyword_identical_QMARK_;var expr__204009 = k__202090__auto__;if(cljs.core.truth_(pred__204008.call(null,new cljs.core.Keyword(null,"identifier","identifier",3690438683),expr__204009)))
{return (new garden.types.CSSAtRule(G__204005,self__.value,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__204008.call(null,new cljs.core.Keyword(null,"value","value",1125876963),expr__204009)))
{return (new garden.types.CSSAtRule(self__.identifier,G__204005,self__.__meta,self__.__extmap,null));
} else
{return (new garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__202090__auto__,G__204005),null));
}
}
});
garden.types.CSSAtRule.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__202096__auto__,writer__202097__auto__,opts__202098__auto__){var self__ = this;
var this__202096__auto____$1 = this;var pr_pair__202099__auto__ = ((function (this__202096__auto____$1){
return (function (keyval__202100__auto__){return cljs.core.pr_sequential_writer.call(null,writer__202097__auto__,cljs.core.pr_writer,""," ","",opts__202098__auto__,keyval__202100__auto__);
});})(this__202096__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__202097__auto__,pr_pair__202099__auto__,"#garden.types.CSSAtRule{",", ","}",opts__202098__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"identifier","identifier",3690438683),self__.identifier],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",1125876963),self__.value],null))], null),self__.__extmap));
});
garden.types.CSSAtRule.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__202087__auto__,entry__202088__auto__){var self__ = this;
var this__202087__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__202088__auto__))
{return cljs.core._assoc.call(null,this__202087__auto____$1,cljs.core._nth.call(null,entry__202088__auto__,0),cljs.core._nth.call(null,entry__202088__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__202087__auto____$1,entry__202088__auto__);
}
});
garden.types.CSSAtRule.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__202094__auto__){var self__ = this;
var this__202094__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"identifier","identifier",3690438683),self__.identifier],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",1125876963),self__.value],null))], null),self__.__extmap));
});
garden.types.CSSAtRule.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__202086__auto__){var self__ = this;
var this__202086__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
garden.types.CSSAtRule.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__202078__auto__,other__202079__auto__){var self__ = this;
var this__202078__auto____$1 = this;if(cljs.core.truth_((function (){var and__201484__auto__ = other__202079__auto__;if(cljs.core.truth_(and__201484__auto__))
{return ((this__202078__auto____$1.constructor === other__202079__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__202078__auto____$1,other__202079__auto__));
} else
{return and__201484__auto__;
}
})()))
{return true;
} else
{return false;
}
});
garden.types.CSSAtRule.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__202081__auto__,G__204005){var self__ = this;
var this__202081__auto____$1 = this;return (new garden.types.CSSAtRule(self__.identifier,self__.value,G__204005,self__.__extmap,self__.__hash));
});
garden.types.CSSAtRule.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__202076__auto__){var self__ = this;
var this__202076__auto____$1 = this;return (new garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,self__.__extmap,self__.__hash));
});
garden.types.CSSAtRule.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__202080__auto__){var self__ = this;
var this__202080__auto____$1 = this;return self__.__meta;
});
garden.types.CSSAtRule.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__202091__auto__,k__202092__auto__){var self__ = this;
var this__202091__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"identifier","identifier",3690438683),null,new cljs.core.Keyword(null,"value","value",1125876963),null], null), null),k__202092__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__202091__auto____$1),self__.__meta),k__202092__auto__);
} else
{return (new garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__202092__auto__)),null));
}
});
garden.types.CSSAtRule.cljs$lang$type = true;
garden.types.CSSAtRule.cljs$lang$ctorPrSeq = (function (this__202116__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"garden.types/CSSAtRule");
});
garden.types.CSSAtRule.cljs$lang$ctorPrWriter = (function (this__202116__auto__,writer__202117__auto__){return cljs.core._write.call(null,writer__202117__auto__,"garden.types/CSSAtRule");
});
garden.types.__GT_CSSAtRule = (function __GT_CSSAtRule(identifier,value){return (new garden.types.CSSAtRule(identifier,value));
});
garden.types.map__GT_CSSAtRule = (function map__GT_CSSAtRule(G__204007){return (new garden.types.CSSAtRule(new cljs.core.Keyword(null,"identifier","identifier",3690438683).cljs$core$IFn$_invoke$arity$1(G__204007),new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(G__204007),null,cljs.core.dissoc.call(null,G__204007,new cljs.core.Keyword(null,"identifier","identifier",3690438683),new cljs.core.Keyword(null,"value","value",1125876963))));
});
