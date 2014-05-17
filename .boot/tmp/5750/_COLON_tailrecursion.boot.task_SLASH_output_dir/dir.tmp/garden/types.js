// Compiled by ClojureScript 0.0-2156
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
garden.types.CSSUnit.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10166__auto__){var self__ = this;
var this__10166__auto____$1 = this;var h__9996__auto__ = self__.__hash;if(!((h__9996__auto__ == null)))
{return h__9996__auto__;
} else
{var h__9996__auto____$1 = cljs.core.hash_imap.call(null,this__10166__auto____$1);self__.__hash = h__9996__auto____$1;
return h__9996__auto____$1;
}
});
garden.types.CSSUnit.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10171__auto__,k__10172__auto__){var self__ = this;
var this__10171__auto____$1 = this;return cljs.core._lookup.call(null,this__10171__auto____$1,k__10172__auto__,null);
});
garden.types.CSSUnit.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10173__auto__,k14218,else__10174__auto__){var self__ = this;
var this__10173__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k14218,new cljs.core.Keyword(null,"unit","unit",1017498870)))
{return self__.unit;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k14218,new cljs.core.Keyword(null,"magnitude","magnitude",3292087682)))
{return self__.magnitude;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k14218,else__10174__auto__);
} else
{return null;
}
}
}
});
garden.types.CSSUnit.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10178__auto__,k__10179__auto__,G__14217){var self__ = this;
var this__10178__auto____$1 = this;var pred__14220 = cljs.core.keyword_identical_QMARK_;var expr__14221 = k__10179__auto__;if(cljs.core.truth_(pred__14220.call(null,new cljs.core.Keyword(null,"unit","unit",1017498870),expr__14221)))
{return (new garden.types.CSSUnit(G__14217,self__.magnitude,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__14220.call(null,new cljs.core.Keyword(null,"magnitude","magnitude",3292087682),expr__14221)))
{return (new garden.types.CSSUnit(self__.unit,G__14217,self__.__meta,self__.__extmap,null));
} else
{return (new garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__10179__auto__,G__14217),null));
}
}
});
garden.types.CSSUnit.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10185__auto__,writer__10186__auto__,opts__10187__auto__){var self__ = this;
var this__10185__auto____$1 = this;var pr_pair__10188__auto__ = (function (keyval__10189__auto__){return cljs.core.pr_sequential_writer.call(null,writer__10186__auto__,cljs.core.pr_writer,""," ","",opts__10187__auto__,keyval__10189__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__10186__auto__,pr_pair__10188__auto__,"#garden.types.CSSUnit{",", ","}",opts__10187__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"unit","unit",1017498870),self__.unit],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"magnitude","magnitude",3292087682),self__.magnitude],null))], null),self__.__extmap));
});
garden.types.CSSUnit.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10176__auto__,entry__10177__auto__){var self__ = this;
var this__10176__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__10177__auto__))
{return cljs.core._assoc.call(null,this__10176__auto____$1,cljs.core._nth.call(null,entry__10177__auto__,0),cljs.core._nth.call(null,entry__10177__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__10176__auto____$1,entry__10177__auto__);
}
});
garden.types.CSSUnit.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10183__auto__){var self__ = this;
var this__10183__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"unit","unit",1017498870),self__.unit],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"magnitude","magnitude",3292087682),self__.magnitude],null))], null),self__.__extmap));
});
garden.types.CSSUnit.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10175__auto__){var self__ = this;
var this__10175__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
garden.types.CSSUnit.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10167__auto__,other__10168__auto__){var self__ = this;
var this__10167__auto____$1 = this;if(cljs.core.truth_((function (){var and__9573__auto__ = other__10168__auto__;if(cljs.core.truth_(and__9573__auto__))
{return ((this__10167__auto____$1.constructor === other__10168__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__10167__auto____$1,other__10168__auto__));
} else
{return and__9573__auto__;
}
})()))
{return true;
} else
{return false;
}
});
garden.types.CSSUnit.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10170__auto__,G__14217){var self__ = this;
var this__10170__auto____$1 = this;return (new garden.types.CSSUnit(self__.unit,self__.magnitude,G__14217,self__.__extmap,self__.__hash));
});
garden.types.CSSUnit.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10165__auto__){var self__ = this;
var this__10165__auto____$1 = this;return (new garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,self__.__extmap,self__.__hash));
});
garden.types.CSSUnit.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10169__auto__){var self__ = this;
var this__10169__auto____$1 = this;return self__.__meta;
});
garden.types.CSSUnit.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10180__auto__,k__10181__auto__){var self__ = this;
var this__10180__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"magnitude","magnitude",3292087682),null,new cljs.core.Keyword(null,"unit","unit",1017498870),null], null), null),k__10181__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__10180__auto____$1),self__.__meta),k__10181__auto__);
} else
{return (new garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__10181__auto__)),null));
}
});
garden.types.CSSUnit.cljs$lang$type = true;
garden.types.CSSUnit.cljs$lang$ctorPrSeq = (function (this__10205__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"garden.types/CSSUnit");
});
garden.types.CSSUnit.cljs$lang$ctorPrWriter = (function (this__10205__auto__,writer__10206__auto__){return cljs.core._write.call(null,writer__10206__auto__,"garden.types/CSSUnit");
});
garden.types.__GT_CSSUnit = (function __GT_CSSUnit(unit,magnitude){return (new garden.types.CSSUnit(unit,magnitude));
});
garden.types.map__GT_CSSUnit = (function map__GT_CSSUnit(G__14219){return (new garden.types.CSSUnit(new cljs.core.Keyword(null,"unit","unit",1017498870).cljs$core$IFn$_invoke$arity$1(G__14219),new cljs.core.Keyword(null,"magnitude","magnitude",3292087682).cljs$core$IFn$_invoke$arity$1(G__14219),null,cljs.core.dissoc.call(null,G__14219,new cljs.core.Keyword(null,"unit","unit",1017498870),new cljs.core.Keyword(null,"magnitude","magnitude",3292087682))));
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
garden.types.CSSFunction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10166__auto__){var self__ = this;
var this__10166__auto____$1 = this;var h__9996__auto__ = self__.__hash;if(!((h__9996__auto__ == null)))
{return h__9996__auto__;
} else
{var h__9996__auto____$1 = cljs.core.hash_imap.call(null,this__10166__auto____$1);self__.__hash = h__9996__auto____$1;
return h__9996__auto____$1;
}
});
garden.types.CSSFunction.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10171__auto__,k__10172__auto__){var self__ = this;
var this__10171__auto____$1 = this;return cljs.core._lookup.call(null,this__10171__auto____$1,k__10172__auto__,null);
});
garden.types.CSSFunction.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10173__auto__,k14224,else__10174__auto__){var self__ = this;
var this__10173__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k14224,new cljs.core.Keyword(null,"function","function",2394842954)))
{return self__.function$;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k14224,new cljs.core.Keyword(null,"args","args",1016906831)))
{return self__.args;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k14224,else__10174__auto__);
} else
{return null;
}
}
}
});
garden.types.CSSFunction.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10178__auto__,k__10179__auto__,G__14223){var self__ = this;
var this__10178__auto____$1 = this;var pred__14226 = cljs.core.keyword_identical_QMARK_;var expr__14227 = k__10179__auto__;if(cljs.core.truth_(pred__14226.call(null,new cljs.core.Keyword(null,"function","function",2394842954),expr__14227)))
{return (new garden.types.CSSFunction(G__14223,self__.args,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__14226.call(null,new cljs.core.Keyword(null,"args","args",1016906831),expr__14227)))
{return (new garden.types.CSSFunction(self__.function$,G__14223,self__.__meta,self__.__extmap,null));
} else
{return (new garden.types.CSSFunction(self__.function$,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__10179__auto__,G__14223),null));
}
}
});
garden.types.CSSFunction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10185__auto__,writer__10186__auto__,opts__10187__auto__){var self__ = this;
var this__10185__auto____$1 = this;var pr_pair__10188__auto__ = (function (keyval__10189__auto__){return cljs.core.pr_sequential_writer.call(null,writer__10186__auto__,cljs.core.pr_writer,""," ","",opts__10187__auto__,keyval__10189__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__10186__auto__,pr_pair__10188__auto__,"#garden.types.CSSFunction{",", ","}",opts__10187__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"function","function",2394842954),self__.function$],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1016906831),self__.args],null))], null),self__.__extmap));
});
garden.types.CSSFunction.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10176__auto__,entry__10177__auto__){var self__ = this;
var this__10176__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__10177__auto__))
{return cljs.core._assoc.call(null,this__10176__auto____$1,cljs.core._nth.call(null,entry__10177__auto__,0),cljs.core._nth.call(null,entry__10177__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__10176__auto____$1,entry__10177__auto__);
}
});
garden.types.CSSFunction.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10183__auto__){var self__ = this;
var this__10183__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"function","function",2394842954),self__.function$],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1016906831),self__.args],null))], null),self__.__extmap));
});
garden.types.CSSFunction.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10175__auto__){var self__ = this;
var this__10175__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
garden.types.CSSFunction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10167__auto__,other__10168__auto__){var self__ = this;
var this__10167__auto____$1 = this;if(cljs.core.truth_((function (){var and__9573__auto__ = other__10168__auto__;if(cljs.core.truth_(and__9573__auto__))
{return ((this__10167__auto____$1.constructor === other__10168__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__10167__auto____$1,other__10168__auto__));
} else
{return and__9573__auto__;
}
})()))
{return true;
} else
{return false;
}
});
garden.types.CSSFunction.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10170__auto__,G__14223){var self__ = this;
var this__10170__auto____$1 = this;return (new garden.types.CSSFunction(self__.function$,self__.args,G__14223,self__.__extmap,self__.__hash));
});
garden.types.CSSFunction.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10165__auto__){var self__ = this;
var this__10165__auto____$1 = this;return (new garden.types.CSSFunction(self__.function$,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});
garden.types.CSSFunction.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10169__auto__){var self__ = this;
var this__10169__auto____$1 = this;return self__.__meta;
});
garden.types.CSSFunction.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10180__auto__,k__10181__auto__){var self__ = this;
var this__10180__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1016906831),null,new cljs.core.Keyword(null,"function","function",2394842954),null], null), null),k__10181__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__10180__auto____$1),self__.__meta),k__10181__auto__);
} else
{return (new garden.types.CSSFunction(self__.function$,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__10181__auto__)),null));
}
});
garden.types.CSSFunction.cljs$lang$type = true;
garden.types.CSSFunction.cljs$lang$ctorPrSeq = (function (this__10205__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"garden.types/CSSFunction");
});
garden.types.CSSFunction.cljs$lang$ctorPrWriter = (function (this__10205__auto__,writer__10206__auto__){return cljs.core._write.call(null,writer__10206__auto__,"garden.types/CSSFunction");
});
garden.types.__GT_CSSFunction = (function __GT_CSSFunction(function$,args){return (new garden.types.CSSFunction(function$,args));
});
garden.types.map__GT_CSSFunction = (function map__GT_CSSFunction(G__14225){return (new garden.types.CSSFunction(new cljs.core.Keyword(null,"function","function",2394842954).cljs$core$IFn$_invoke$arity$1(G__14225),new cljs.core.Keyword(null,"args","args",1016906831).cljs$core$IFn$_invoke$arity$1(G__14225),null,cljs.core.dissoc.call(null,G__14225,new cljs.core.Keyword(null,"function","function",2394842954),new cljs.core.Keyword(null,"args","args",1016906831))));
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
garden.types.CSSAtRule.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10166__auto__){var self__ = this;
var this__10166__auto____$1 = this;var h__9996__auto__ = self__.__hash;if(!((h__9996__auto__ == null)))
{return h__9996__auto__;
} else
{var h__9996__auto____$1 = cljs.core.hash_imap.call(null,this__10166__auto____$1);self__.__hash = h__9996__auto____$1;
return h__9996__auto____$1;
}
});
garden.types.CSSAtRule.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10171__auto__,k__10172__auto__){var self__ = this;
var this__10171__auto____$1 = this;return cljs.core._lookup.call(null,this__10171__auto____$1,k__10172__auto__,null);
});
garden.types.CSSAtRule.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10173__auto__,k14230,else__10174__auto__){var self__ = this;
var this__10173__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k14230,new cljs.core.Keyword(null,"identifier","identifier",3690438683)))
{return self__.identifier;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k14230,new cljs.core.Keyword(null,"value","value",1125876963)))
{return self__.value;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k14230,else__10174__auto__);
} else
{return null;
}
}
}
});
garden.types.CSSAtRule.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10178__auto__,k__10179__auto__,G__14229){var self__ = this;
var this__10178__auto____$1 = this;var pred__14232 = cljs.core.keyword_identical_QMARK_;var expr__14233 = k__10179__auto__;if(cljs.core.truth_(pred__14232.call(null,new cljs.core.Keyword(null,"identifier","identifier",3690438683),expr__14233)))
{return (new garden.types.CSSAtRule(G__14229,self__.value,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__14232.call(null,new cljs.core.Keyword(null,"value","value",1125876963),expr__14233)))
{return (new garden.types.CSSAtRule(self__.identifier,G__14229,self__.__meta,self__.__extmap,null));
} else
{return (new garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__10179__auto__,G__14229),null));
}
}
});
garden.types.CSSAtRule.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10185__auto__,writer__10186__auto__,opts__10187__auto__){var self__ = this;
var this__10185__auto____$1 = this;var pr_pair__10188__auto__ = (function (keyval__10189__auto__){return cljs.core.pr_sequential_writer.call(null,writer__10186__auto__,cljs.core.pr_writer,""," ","",opts__10187__auto__,keyval__10189__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__10186__auto__,pr_pair__10188__auto__,"#garden.types.CSSAtRule{",", ","}",opts__10187__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"identifier","identifier",3690438683),self__.identifier],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",1125876963),self__.value],null))], null),self__.__extmap));
});
garden.types.CSSAtRule.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10176__auto__,entry__10177__auto__){var self__ = this;
var this__10176__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__10177__auto__))
{return cljs.core._assoc.call(null,this__10176__auto____$1,cljs.core._nth.call(null,entry__10177__auto__,0),cljs.core._nth.call(null,entry__10177__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__10176__auto____$1,entry__10177__auto__);
}
});
garden.types.CSSAtRule.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10183__auto__){var self__ = this;
var this__10183__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"identifier","identifier",3690438683),self__.identifier],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",1125876963),self__.value],null))], null),self__.__extmap));
});
garden.types.CSSAtRule.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10175__auto__){var self__ = this;
var this__10175__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
garden.types.CSSAtRule.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10167__auto__,other__10168__auto__){var self__ = this;
var this__10167__auto____$1 = this;if(cljs.core.truth_((function (){var and__9573__auto__ = other__10168__auto__;if(cljs.core.truth_(and__9573__auto__))
{return ((this__10167__auto____$1.constructor === other__10168__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__10167__auto____$1,other__10168__auto__));
} else
{return and__9573__auto__;
}
})()))
{return true;
} else
{return false;
}
});
garden.types.CSSAtRule.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10170__auto__,G__14229){var self__ = this;
var this__10170__auto____$1 = this;return (new garden.types.CSSAtRule(self__.identifier,self__.value,G__14229,self__.__extmap,self__.__hash));
});
garden.types.CSSAtRule.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10165__auto__){var self__ = this;
var this__10165__auto____$1 = this;return (new garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,self__.__extmap,self__.__hash));
});
garden.types.CSSAtRule.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10169__auto__){var self__ = this;
var this__10169__auto____$1 = this;return self__.__meta;
});
garden.types.CSSAtRule.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10180__auto__,k__10181__auto__){var self__ = this;
var this__10180__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"identifier","identifier",3690438683),null,new cljs.core.Keyword(null,"value","value",1125876963),null], null), null),k__10181__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__10180__auto____$1),self__.__meta),k__10181__auto__);
} else
{return (new garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__10181__auto__)),null));
}
});
garden.types.CSSAtRule.cljs$lang$type = true;
garden.types.CSSAtRule.cljs$lang$ctorPrSeq = (function (this__10205__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"garden.types/CSSAtRule");
});
garden.types.CSSAtRule.cljs$lang$ctorPrWriter = (function (this__10205__auto__,writer__10206__auto__){return cljs.core._write.call(null,writer__10206__auto__,"garden.types/CSSAtRule");
});
garden.types.__GT_CSSAtRule = (function __GT_CSSAtRule(identifier,value){return (new garden.types.CSSAtRule(identifier,value));
});
garden.types.map__GT_CSSAtRule = (function map__GT_CSSAtRule(G__14231){return (new garden.types.CSSAtRule(new cljs.core.Keyword(null,"identifier","identifier",3690438683).cljs$core$IFn$_invoke$arity$1(G__14231),new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(G__14231),null,cljs.core.dissoc.call(null,G__14231,new cljs.core.Keyword(null,"identifier","identifier",3690438683),new cljs.core.Keyword(null,"value","value",1125876963))));
});
