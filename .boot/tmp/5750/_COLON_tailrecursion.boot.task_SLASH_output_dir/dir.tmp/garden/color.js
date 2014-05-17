// Compiled by ClojureScript 0.0-2156
goog.provide('garden.color');
goog.require('cljs.core');
goog.require('garden.util');
goog.require('garden.util');
goog.require('garden.util');
goog.require('clojure.string');
goog.require('clojure.string');

/**
* @constructor
* @param {*} red
* @param {*} green
* @param {*} blue
* @param {*} hue
* @param {*} saturation
* @param {*} lightness
* @param {*} alpha
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
garden.color.CSSColor = (function (red,green,blue,hue,saturation,lightness,alpha,__meta,__extmap){
this.red = red;
this.green = green;
this.blue = blue;
this.hue = hue;
this.saturation = saturation;
this.lightness = lightness;
this.alpha = alpha;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667595;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>7){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
garden.color.CSSColor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10166__auto__){var self__ = this;
var this__10166__auto____$1 = this;var h__9996__auto__ = self__.__hash;if(!((h__9996__auto__ == null)))
{return h__9996__auto__;
} else
{var h__9996__auto____$1 = cljs.core.hash_imap.call(null,this__10166__auto____$1);self__.__hash = h__9996__auto____$1;
return h__9996__auto____$1;
}
});
garden.color.CSSColor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10171__auto__,k__10172__auto__){var self__ = this;
var this__10171__auto____$1 = this;return cljs.core._lookup.call(null,this__10171__auto____$1,k__10172__auto__,null);
});
garden.color.CSSColor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10173__auto__,k14374,else__10174__auto__){var self__ = this;
var this__10173__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k14374,new cljs.core.Keyword(null,"red","red",1014017027)))
{return self__.red;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k14374,new cljs.core.Keyword(null,"green","green",1112523381)))
{return self__.green;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k14374,new cljs.core.Keyword(null,"blue","blue",1016931276)))
{return self__.blue;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k14374,new cljs.core.Keyword(null,"hue","hue",1014007914)))
{return self__.hue;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k14374,new cljs.core.Keyword(null,"saturation","saturation",783413060)))
{return self__.saturation;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k14374,new cljs.core.Keyword(null,"lightness","lightness",1700345823)))
{return self__.lightness;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k14374,new cljs.core.Keyword(null,"alpha","alpha",1106814160)))
{return self__.alpha;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k14374,else__10174__auto__);
} else
{return null;
}
}
}
}
}
}
}
}
});
garden.color.CSSColor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10178__auto__,k__10179__auto__,G__14373){var self__ = this;
var this__10178__auto____$1 = this;var pred__14377 = cljs.core.keyword_identical_QMARK_;var expr__14378 = k__10179__auto__;if(cljs.core.truth_(pred__14377.call(null,new cljs.core.Keyword(null,"red","red",1014017027),expr__14378)))
{return (new garden.color.CSSColor(G__14373,self__.green,self__.blue,self__.hue,self__.saturation,self__.lightness,self__.alpha,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__14377.call(null,new cljs.core.Keyword(null,"green","green",1112523381),expr__14378)))
{return (new garden.color.CSSColor(self__.red,G__14373,self__.blue,self__.hue,self__.saturation,self__.lightness,self__.alpha,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__14377.call(null,new cljs.core.Keyword(null,"blue","blue",1016931276),expr__14378)))
{return (new garden.color.CSSColor(self__.red,self__.green,G__14373,self__.hue,self__.saturation,self__.lightness,self__.alpha,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__14377.call(null,new cljs.core.Keyword(null,"hue","hue",1014007914),expr__14378)))
{return (new garden.color.CSSColor(self__.red,self__.green,self__.blue,G__14373,self__.saturation,self__.lightness,self__.alpha,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__14377.call(null,new cljs.core.Keyword(null,"saturation","saturation",783413060),expr__14378)))
{return (new garden.color.CSSColor(self__.red,self__.green,self__.blue,self__.hue,G__14373,self__.lightness,self__.alpha,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__14377.call(null,new cljs.core.Keyword(null,"lightness","lightness",1700345823),expr__14378)))
{return (new garden.color.CSSColor(self__.red,self__.green,self__.blue,self__.hue,self__.saturation,G__14373,self__.alpha,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__14377.call(null,new cljs.core.Keyword(null,"alpha","alpha",1106814160),expr__14378)))
{return (new garden.color.CSSColor(self__.red,self__.green,self__.blue,self__.hue,self__.saturation,self__.lightness,G__14373,self__.__meta,self__.__extmap,null));
} else
{return (new garden.color.CSSColor(self__.red,self__.green,self__.blue,self__.hue,self__.saturation,self__.lightness,self__.alpha,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__10179__auto__,G__14373),null));
}
}
}
}
}
}
}
});
garden.color.CSSColor.prototype.call = (function() {
var G__14380 = null;
var G__14380__1 = (function (self__){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$;
});
var G__14380__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var this$ = self____$1;return cljs.core.get.call(null,this$,k);
});
var G__14380__3 = (function (self__,k,missing){var self__ = this;
var self____$1 = this;var this$ = self____$1;return cljs.core.get.call(null,this$,k,missing);
});
G__14380 = function(self__,k,missing){
switch(arguments.length){
case 1:
return G__14380__1.call(this,self__);
case 2:
return G__14380__2.call(this,self__,k);
case 3:
return G__14380__3.call(this,self__,k,missing);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__14380;
})()
;
garden.color.CSSColor.prototype.apply = (function (self__,args14376){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args14376)));
});
garden.color.CSSColor.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){var self__ = this;
var this$ = this;return this$;
});
garden.color.CSSColor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var this$ = this;return cljs.core.get.call(null,this$,k);
});
garden.color.CSSColor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,missing){var self__ = this;
var this$ = this;return cljs.core.get.call(null,this$,k,missing);
});
garden.color.CSSColor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10185__auto__,writer__10186__auto__,opts__10187__auto__){var self__ = this;
var this__10185__auto____$1 = this;var pr_pair__10188__auto__ = (function (keyval__10189__auto__){return cljs.core.pr_sequential_writer.call(null,writer__10186__auto__,cljs.core.pr_writer,""," ","",opts__10187__auto__,keyval__10189__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__10186__auto__,pr_pair__10188__auto__,"#garden.color.CSSColor{",", ","}",opts__10187__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"red","red",1014017027),self__.red],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"green","green",1112523381),self__.green],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"blue","blue",1016931276),self__.blue],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hue","hue",1014007914),self__.hue],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"saturation","saturation",783413060),self__.saturation],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"lightness","lightness",1700345823),self__.lightness],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"alpha","alpha",1106814160),self__.alpha],null))], null),self__.__extmap));
});
garden.color.CSSColor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10176__auto__,entry__10177__auto__){var self__ = this;
var this__10176__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__10177__auto__))
{return cljs.core._assoc.call(null,this__10176__auto____$1,cljs.core._nth.call(null,entry__10177__auto__,0),cljs.core._nth.call(null,entry__10177__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__10176__auto____$1,entry__10177__auto__);
}
});
garden.color.CSSColor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10183__auto__){var self__ = this;
var this__10183__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"red","red",1014017027),self__.red],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"green","green",1112523381),self__.green],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"blue","blue",1016931276),self__.blue],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hue","hue",1014007914),self__.hue],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"saturation","saturation",783413060),self__.saturation],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"lightness","lightness",1700345823),self__.lightness],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"alpha","alpha",1106814160),self__.alpha],null))], null),self__.__extmap));
});
garden.color.CSSColor.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10175__auto__){var self__ = this;
var this__10175__auto____$1 = this;return (7 + cljs.core.count.call(null,self__.__extmap));
});
garden.color.CSSColor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10167__auto__,other__10168__auto__){var self__ = this;
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
garden.color.CSSColor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10170__auto__,G__14373){var self__ = this;
var this__10170__auto____$1 = this;return (new garden.color.CSSColor(self__.red,self__.green,self__.blue,self__.hue,self__.saturation,self__.lightness,self__.alpha,G__14373,self__.__extmap,self__.__hash));
});
garden.color.CSSColor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10165__auto__){var self__ = this;
var this__10165__auto____$1 = this;return (new garden.color.CSSColor(self__.red,self__.green,self__.blue,self__.hue,self__.saturation,self__.lightness,self__.alpha,self__.__meta,self__.__extmap,self__.__hash));
});
garden.color.CSSColor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10169__auto__){var self__ = this;
var this__10169__auto____$1 = this;return self__.__meta;
});
garden.color.CSSColor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10180__auto__,k__10181__auto__){var self__ = this;
var this__10180__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"red","red",1014017027),null,new cljs.core.Keyword(null,"alpha","alpha",1106814160),null,new cljs.core.Keyword(null,"hue","hue",1014007914),null,new cljs.core.Keyword(null,"blue","blue",1016931276),null,new cljs.core.Keyword(null,"lightness","lightness",1700345823),null,new cljs.core.Keyword(null,"green","green",1112523381),null,new cljs.core.Keyword(null,"saturation","saturation",783413060),null], null), null),k__10181__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__10180__auto____$1),self__.__meta),k__10181__auto__);
} else
{return (new garden.color.CSSColor(self__.red,self__.green,self__.blue,self__.hue,self__.saturation,self__.lightness,self__.alpha,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__10181__auto__)),null));
}
});
garden.color.CSSColor.cljs$lang$type = true;
garden.color.CSSColor.cljs$lang$ctorPrSeq = (function (this__10205__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"garden.color/CSSColor");
});
garden.color.CSSColor.cljs$lang$ctorPrWriter = (function (this__10205__auto__,writer__10206__auto__){return cljs.core._write.call(null,writer__10206__auto__,"garden.color/CSSColor");
});
garden.color.__GT_CSSColor = (function __GT_CSSColor(red,green,blue,hue,saturation,lightness,alpha){return (new garden.color.CSSColor(red,green,blue,hue,saturation,lightness,alpha));
});
garden.color.map__GT_CSSColor = (function map__GT_CSSColor(G__14375){return (new garden.color.CSSColor(new cljs.core.Keyword(null,"red","red",1014017027).cljs$core$IFn$_invoke$arity$1(G__14375),new cljs.core.Keyword(null,"green","green",1112523381).cljs$core$IFn$_invoke$arity$1(G__14375),new cljs.core.Keyword(null,"blue","blue",1016931276).cljs$core$IFn$_invoke$arity$1(G__14375),new cljs.core.Keyword(null,"hue","hue",1014007914).cljs$core$IFn$_invoke$arity$1(G__14375),new cljs.core.Keyword(null,"saturation","saturation",783413060).cljs$core$IFn$_invoke$arity$1(G__14375),new cljs.core.Keyword(null,"lightness","lightness",1700345823).cljs$core$IFn$_invoke$arity$1(G__14375),new cljs.core.Keyword(null,"alpha","alpha",1106814160).cljs$core$IFn$_invoke$arity$1(G__14375),null,cljs.core.dissoc.call(null,G__14375,new cljs.core.Keyword(null,"red","red",1014017027),new cljs.core.Keyword(null,"green","green",1112523381),new cljs.core.Keyword(null,"blue","blue",1016931276),new cljs.core.Keyword(null,"hue","hue",1014007914),new cljs.core.Keyword(null,"saturation","saturation",783413060),new cljs.core.Keyword(null,"lightness","lightness",1700345823),new cljs.core.Keyword(null,"alpha","alpha",1106814160))));
});
garden.color.as_color = garden.color.map__GT_CSSColor;
/**
* Create an RGB color.
*/
garden.color.rgb = (function() {
var rgb = null;
var rgb__1 = (function (p__14382){var vec__14384 = p__14382;var r = cljs.core.nth.call(null,vec__14384,0,null);var g = cljs.core.nth.call(null,vec__14384,1,null);var b = cljs.core.nth.call(null,vec__14384,2,null);var vs = vec__14384;if(cljs.core.every_QMARK_.call(null,(function (p1__14381_SHARP_){return garden.util.between_QMARK_.call(null,p1__14381_SHARP_,0,255);
}),vs))
{return garden.color.as_color.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"red","red",1014017027),r,new cljs.core.Keyword(null,"green","green",1112523381),g,new cljs.core.Keyword(null,"blue","blue",1016931276),b], null));
} else
{throw cljs.core.ex_info.call(null,"RGB values must be between 0 and 255",cljs.core.PersistentArrayMap.EMPTY);
}
});
var rgb__3 = (function (r,g,b){return rgb.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null));
});
rgb = function(r,g,b){
switch(arguments.length){
case 1:
return rgb__1.call(this,r);
case 3:
return rgb__3.call(this,r,g,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rgb.cljs$core$IFn$_invoke$arity$1 = rgb__1;
rgb.cljs$core$IFn$_invoke$arity$3 = rgb__3;
return rgb;
})()
;
/**
* Create an RGBA color.
*/
garden.color.rgba = (function() {
var rgba = null;
var rgba__1 = (function (p__14385){var vec__14387 = p__14385;var r = cljs.core.nth.call(null,vec__14387,0,null);var g = cljs.core.nth.call(null,vec__14387,1,null);var b = cljs.core.nth.call(null,vec__14387,2,null);var a = cljs.core.nth.call(null,vec__14387,3,null);if(garden.util.between_QMARK_.call(null,a,0,1))
{return garden.color.as_color.call(null,cljs.core.assoc.call(null,garden.color.rgb.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null)),new cljs.core.Keyword(null,"alpha","alpha",1106814160),a));
} else
{throw cljs.core.ex_info.call(null,"Alpha value must be between 0 and 1",cljs.core.PersistentArrayMap.EMPTY);
}
});
var rgba__4 = (function (r,g,b,a){return rgba.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b,a], null));
});
rgba = function(r,g,b,a){
switch(arguments.length){
case 1:
return rgba__1.call(this,r);
case 4:
return rgba__4.call(this,r,g,b,a);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rgba.cljs$core$IFn$_invoke$arity$1 = rgba__1;
rgba.cljs$core$IFn$_invoke$arity$4 = rgba__4;
return rgba;
})()
;
/**
* Create an HSL color.
*/
garden.color.hsl = (function() {
var hsl = null;
var hsl__1 = (function (p__14389){var vec__14392 = p__14389;var h = cljs.core.nth.call(null,vec__14392,0,null);var s = cljs.core.nth.call(null,vec__14392,1,null);var l = cljs.core.nth.call(null,vec__14392,2,null);var vec__14393 = cljs.core.map.call(null,(function (p1__14388_SHARP_){return cljs.core.get.call(null,p1__14388_SHARP_,new cljs.core.Keyword(null,"magnitude","magnitude",3292087682),p1__14388_SHARP_);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l], null));var h__$1 = cljs.core.nth.call(null,vec__14393,0,null);var s__$1 = cljs.core.nth.call(null,vec__14393,1,null);var l__$1 = cljs.core.nth.call(null,vec__14393,2,null);if((garden.util.between_QMARK_.call(null,s__$1,0,100)) && (garden.util.between_QMARK_.call(null,l__$1,0,100)))
{return garden.color.as_color.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hue","hue",1014007914),cljs.core.mod.call(null,h__$1,360),new cljs.core.Keyword(null,"saturation","saturation",783413060),s__$1,new cljs.core.Keyword(null,"lightness","lightness",1700345823),l__$1], null));
} else
{throw cljs.core.ex_info.call(null,"Saturation and lightness must be between 0(%) and 100(%)",cljs.core.PersistentArrayMap.EMPTY);
}
});
var hsl__3 = (function (h,s,l){return hsl.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l], null));
});
hsl = function(h,s,l){
switch(arguments.length){
case 1:
return hsl__1.call(this,h);
case 3:
return hsl__3.call(this,h,s,l);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hsl.cljs$core$IFn$_invoke$arity$1 = hsl__1;
hsl.cljs$core$IFn$_invoke$arity$3 = hsl__3;
return hsl;
})()
;
/**
* Create an HSLA color.
*/
garden.color.hsla = (function() {
var hsla = null;
var hsla__1 = (function (p__14394){var vec__14396 = p__14394;var h = cljs.core.nth.call(null,vec__14396,0,null);var s = cljs.core.nth.call(null,vec__14396,1,null);var l = cljs.core.nth.call(null,vec__14396,2,null);var a = cljs.core.nth.call(null,vec__14396,3,null);if(garden.util.between_QMARK_.call(null,a,0,1))
{return garden.color.as_color.call(null,cljs.core.assoc.call(null,garden.color.hsl.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l], null)),new cljs.core.Keyword(null,"alpha","alpha",1106814160),a));
} else
{throw cljs.core.ex_info.call(null,"Alpha value must be between 0 and 1",cljs.core.PersistentArrayMap.EMPTY);
}
});
var hsla__4 = (function (h,s,l,a){return hsla.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l,a], null));
});
hsla = function(h,s,l,a){
switch(arguments.length){
case 1:
return hsla__1.call(this,h);
case 4:
return hsla__4.call(this,h,s,l,a);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hsla.cljs$core$IFn$_invoke$arity$1 = hsla__1;
hsla.cljs$core$IFn$_invoke$arity$4 = hsla__4;
return hsla;
})()
;
/**
* Return true if color is an RGB color.
*/
garden.color.rgb_QMARK_ = (function rgb_QMARK_(color){return (cljs.core.map_QMARK_.call(null,color)) && (cljs.core.every_QMARK_.call(null,color,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"red","red",1014017027),null,new cljs.core.Keyword(null,"blue","blue",1016931276),null,new cljs.core.Keyword(null,"green","green",1112523381),null], null), null)));
});
/**
* Return true if color is an HSL color.
*/
garden.color.hsl_QMARK_ = (function hsl_QMARK_(color){return (cljs.core.map_QMARK_.call(null,color)) && (cljs.core.every_QMARK_.call(null,color,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hue","hue",1014007914),null,new cljs.core.Keyword(null,"lightness","lightness",1700345823),null,new cljs.core.Keyword(null,"saturation","saturation",783413060),null], null), null)));
});
/**
* Return true if x is a color.
*/
garden.color.color_QMARK_ = (function color_QMARK_(x){return (garden.color.rgb_QMARK_.call(null,x)) || (garden.color.hsl_QMARK_.call(null,x));
});
/**
* Regular expression for matching a hexadecimal color.
* Matches hexadecimal colors of length three or six possibly
* lead by a "#". The color portion is captured.
*/
garden.color.hex_re = /#?([\da-fA-F]{6}|[\da-fA-F]{3})/;
/**
* Returns true if x is a hexadecimal color.
*/
garden.color.hex_QMARK_ = (function hex_QMARK_(x){return cljs.core.boolean$.call(null,(function (){var and__9573__auto__ = typeof x === 'string';if(and__9573__auto__)
{return cljs.core.re_matches.call(null,garden.color.hex_re,x);
} else
{return and__9573__auto__;
}
})());
});
/**
* Convert a hexadecimal color to an RGB color map.
*/
garden.color.hex__GT_rgb = (function hex__GT_rgb(s){var temp__4092__auto__ = cljs.core.re_matches.call(null,garden.color.hex_re,s);if(cljs.core.truth_(temp__4092__auto__))
{var vec__14400 = temp__4092__auto__;var _ = cljs.core.nth.call(null,vec__14400,0,null);var hex = cljs.core.nth.call(null,vec__14400,1,null);var hex__$1 = ((cljs.core._EQ_.call(null,3,cljs.core.count.call(null,hex)))?cljs.core.apply.call(null,cljs.core.str,cljs.core.mapcat.call(null,(function (p1__14397_SHARP_){return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__14397_SHARP_),p1__14397_SHARP_);
}),hex)):hex);return garden.color.rgb.call(null,cljs.core.map.call(null,(function (p1__14398_SHARP_){return garden.util.string__GT_int.call(null,p1__14398_SHARP_,16);
}),cljs.core.re_seq.call(null,/[\da-fA-F]{2}/,hex__$1)));
} else
{return null;
}
});
/**
* Convert an RGB color map to a hexadecimal color.
*/
garden.color.rgb__GT_hex = (function rgb__GT_hex(p__14401){var map__14403 = p__14401;var map__14403__$1 = ((cljs.core.seq_QMARK_.call(null,map__14403))?cljs.core.apply.call(null,cljs.core.hash_map,map__14403):map__14403);var r = cljs.core.get.call(null,map__14403__$1,new cljs.core.Keyword(null,"red","red",1014017027));var g = cljs.core.get.call(null,map__14403__$1,new cljs.core.Keyword(null,"green","green",1112523381));var b = cljs.core.get.call(null,map__14403__$1,new cljs.core.Keyword(null,"blue","blue",1016931276));var hex_part = (function hex_part(v){return clojure.string.replace.call(null,garden.util.format.call(null,"%2s",garden.util.int__GT_string.call(null,v,16))," ","0");
});
return cljs.core.apply.call(null,cljs.core.str,"#",cljs.core.map.call(null,hex_part,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null)));
});
/**
* Convert an RGB color map to an HSL color map.
*/
garden.color.rgb__GT_hsl = (function rgb__GT_hsl(p__14405){var map__14411 = p__14405;var map__14411__$1 = ((cljs.core.seq_QMARK_.call(null,map__14411))?cljs.core.apply.call(null,cljs.core.hash_map,map__14411):map__14411);var color = map__14411__$1;var blue = cljs.core.get.call(null,map__14411__$1,new cljs.core.Keyword(null,"blue","blue",1016931276));var green = cljs.core.get.call(null,map__14411__$1,new cljs.core.Keyword(null,"green","green",1112523381));var red = cljs.core.get.call(null,map__14411__$1,new cljs.core.Keyword(null,"red","red",1014017027));if(garden.color.hsl_QMARK_.call(null,color))
{return color;
} else
{var vec__14412 = cljs.core.map.call(null,(function (p1__14404_SHARP_){return (p1__14404_SHARP_ / 255);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [red,green,blue], null));var r = cljs.core.nth.call(null,vec__14412,0,null);var g = cljs.core.nth.call(null,vec__14412,1,null);var b = cljs.core.nth.call(null,vec__14412,2,null);var mx = (function (){var x__9892__auto__ = (function (){var x__9892__auto__ = r;var y__9893__auto__ = g;return ((x__9892__auto__ > y__9893__auto__) ? x__9892__auto__ : y__9893__auto__);
})();var y__9893__auto__ = b;return ((x__9892__auto__ > y__9893__auto__) ? x__9892__auto__ : y__9893__auto__);
})();var mn = (function (){var x__9899__auto__ = (function (){var x__9899__auto__ = r;var y__9900__auto__ = g;return ((x__9899__auto__ < y__9900__auto__) ? x__9899__auto__ : y__9900__auto__);
})();var y__9900__auto__ = b;return ((x__9899__auto__ < y__9900__auto__) ? x__9899__auto__ : y__9900__auto__);
})();var d = (mx - mn);var h = (function (){var pred__14413 = cljs.core._EQ_;var expr__14414 = mx;if(cljs.core.truth_(pred__14413.call(null,mn,expr__14414)))
{return 0;
} else
{if(cljs.core.truth_(pred__14413.call(null,r,expr__14414)))
{return (60 * ((g - b) / d));
} else
{if(cljs.core.truth_(pred__14413.call(null,g,expr__14414)))
{return ((60 * ((b - r) / d)) + 120);
} else
{if(cljs.core.truth_(pred__14413.call(null,b,expr__14414)))
{return ((60 * ((r - g) / d)) + 240);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__14414)].join('')));
}
}
}
}
})();var l = ((mx + mn) / 2);var s = ((cljs.core._EQ_.call(null,mx,mn))?0:(((l < 0.5))?(d / (2 * l)):((new cljs.core.Keyword(null,"else","else",1017020587))?(d / (2 - (2 * l))):null)));return garden.color.hsl.call(null,cljs.core.mod.call(null,h,360),(100 * s),(100 * l));
}
});
/**
* Convert an HSL color map to an RGB color map.
*/
garden.color.hsl__GT_rgb = (function hsl__GT_rgb(p__14417){var map__14420 = p__14417;var map__14420__$1 = ((cljs.core.seq_QMARK_.call(null,map__14420))?cljs.core.apply.call(null,cljs.core.hash_map,map__14420):map__14420);var color = map__14420__$1;var lightness = cljs.core.get.call(null,map__14420__$1,new cljs.core.Keyword(null,"lightness","lightness",1700345823));var saturation = cljs.core.get.call(null,map__14420__$1,new cljs.core.Keyword(null,"saturation","saturation",783413060));var hue = cljs.core.get.call(null,map__14420__$1,new cljs.core.Keyword(null,"hue","hue",1014007914));if(garden.color.rgb_QMARK_.call(null,color))
{return color;
} else
{var h = (hue / 360.0);var s = (saturation / 100.0);var l = (lightness / 100.0);var m2 = (((l <= 0.5))?(l * (s + 1)):((l + s) - (l * s)));var m1 = ((2 * l) - m2);var vec__14421 = cljs.core.map.call(null,((function (h,s,l,m2,m1){
return (function (p1__14416_SHARP_){return Math.round.call(null,(p1__14416_SHARP_ * 255));
});})(h,s,l,m2,m1))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.color.hue__GT_rgb.call(null,m1,m2,(h + (1.0 / 3))),garden.color.hue__GT_rgb.call(null,m1,m2,h),garden.color.hue__GT_rgb.call(null,m1,m2,(h - (1.0 / 3)))], null));var r = cljs.core.nth.call(null,vec__14421,0,null);var g = cljs.core.nth.call(null,vec__14421,1,null);var b = cljs.core.nth.call(null,vec__14421,2,null);return garden.color.rgb.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null));
}
});
garden.color.hue__GT_rgb = (function hue__GT_rgb(m1,m2,h){var h__$1 = (((h < 0))?(h + 1):(((h > 1))?(h - 1):((new cljs.core.Keyword(null,"else","else",1017020587))?h:null)));if(((6 * h__$1) < 1))
{return (m1 + (((m2 - m1) * h__$1) * 6));
} else
{if(((2 * h__$1) < 1))
{return m2;
} else
{if(((3 * h__$1) < 2))
{return (m1 + (((m2 - m1) * ((2.0 / 3) - h__$1)) * 6));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return m1;
} else
{return null;
}
}
}
}
});
/**
* Convert an HSL color map to a hexadecimal string.
*/
garden.color.hsl__GT_hex = (function hsl__GT_hex(color){return garden.color.rgb__GT_hex.call(null,garden.color.hsl__GT_rgb.call(null,color));
});
/**
* Convert a hexadecimal color to an HSL color.
*/
garden.color.hex__GT_hsl = (function hex__GT_hsl(color){return garden.color.rgb__GT_hsl.call(null,garden.color.hex__GT_rgb.call(null,color));
});
garden.color.percent_clip = cljs.core.partial.call(null,garden.util.clip,0,100);
garden.color.rgb_clip = cljs.core.partial.call(null,garden.util.clip,0,255);
/**
* Convert a color to a hexadecimal string.
*/
garden.color.as_hex = (function as_hex(x){if(garden.color.hex_QMARK_.call(null,x))
{return x;
} else
{if(garden.color.rgb_QMARK_.call(null,x))
{return garden.color.rgb__GT_hex.call(null,x);
} else
{if(garden.color.hsl_QMARK_.call(null,x))
{return garden.color.hsl__GT_hex.call(null,x);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.ex_info.call(null,[cljs.core.str("Can't convert "),cljs.core.str(x),cljs.core.str(" to a color.")].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else
{return null;
}
}
}
}
});
/**
* Convert a color to a RGB.
*/
garden.color.as_rgb = (function as_rgb(x){if(garden.color.rgb_QMARK_.call(null,x))
{return x;
} else
{if(garden.color.hsl_QMARK_.call(null,x))
{return garden.color.hsl__GT_rgb.call(null,x);
} else
{if(garden.color.hex_QMARK_.call(null,x))
{return garden.color.hex__GT_rgb.call(null,x);
} else
{if(typeof x === 'number')
{return garden.color.rgb.call(null,cljs.core.map.call(null,garden.color.rgb_clip,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,x,x], null)));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.ex_info.call(null,[cljs.core.str("Can't convert "),cljs.core.str(x),cljs.core.str(" to a color.")].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else
{return null;
}
}
}
}
}
});
/**
* Convert a color to a HSL.
*/
garden.color.as_hsl = (function as_hsl(x){if(garden.color.hsl_QMARK_.call(null,x))
{return x;
} else
{if(garden.color.rgb_QMARK_.call(null,x))
{return garden.color.rgb__GT_hsl.call(null,x);
} else
{if(garden.color.hex_QMARK_.call(null,x))
{return garden.color.hex__GT_hsl.call(null,x);
} else
{if(typeof x === 'number')
{return garden.color.hsl.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,garden.color.percent_clip.call(null,x),garden.color.percent_clip.call(null,x)], null));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.ex_info.call(null,[cljs.core.str("Can't convert "),cljs.core.str(x),cljs.core.str(" to a color.")].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else
{return null;
}
}
}
}
}
});
garden.color.restrict_rgb = (function restrict_rgb(m){return cljs.core.select_keys.call(null,m,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"red","red",1014017027),new cljs.core.Keyword(null,"green","green",1112523381),new cljs.core.Keyword(null,"blue","blue",1016931276)], null));
});
garden.color.make_color_operation = (function make_color_operation(op){return (function() {
var color_op = null;
var color_op__1 = (function (a){return a;
});
var color_op__2 = (function (a,b){var o = cljs.core.comp.call(null,garden.color.rgb_clip,op);var a__$1 = garden.color.restrict_rgb.call(null,garden.color.as_rgb.call(null,a));var b__$1 = garden.color.restrict_rgb.call(null,garden.color.as_rgb.call(null,b));return garden.color.as_color.call(null,cljs.core.merge_with.call(null,o,a__$1,b__$1));
});
var color_op__3 = (function() { 
var G__14422__delegate = function (a,b,more){return cljs.core.reduce.call(null,color_op,color_op.call(null,a,b),more);
};
var G__14422 = function (a,b,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__14422__delegate.call(this,a,b,more);};
G__14422.cljs$lang$maxFixedArity = 2;
G__14422.cljs$lang$applyTo = (function (arglist__14423){
var a = cljs.core.first(arglist__14423);
arglist__14423 = cljs.core.next(arglist__14423);
var b = cljs.core.first(arglist__14423);
var more = cljs.core.rest(arglist__14423);
return G__14422__delegate(a,b,more);
});
G__14422.cljs$core$IFn$_invoke$arity$variadic = G__14422__delegate;
return G__14422;
})()
;
color_op = function(a,b,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return color_op__1.call(this,a);
case 2:
return color_op__2.call(this,a,b);
default:
return color_op__3.cljs$core$IFn$_invoke$arity$variadic(a,b, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_op.cljs$lang$maxFixedArity = 2;
color_op.cljs$lang$applyTo = color_op__3.cljs$lang$applyTo;
color_op.cljs$core$IFn$_invoke$arity$1 = color_op__1;
color_op.cljs$core$IFn$_invoke$arity$2 = color_op__2;
color_op.cljs$core$IFn$_invoke$arity$variadic = color_op__3.cljs$core$IFn$_invoke$arity$variadic;
return color_op;
})()
});
/**
* Add the RGB components of two or more colors.
*/
garden.color.color_PLUS_ = garden.color.make_color_operation.call(null,cljs.core._PLUS_);
/**
* Subtract the RGB components of two or more colors.
*/
garden.color.color_ = garden.color.make_color_operation.call(null,cljs.core._);
/**
* Multiply the RGB components of two or more colors.
*/
garden.color.color_STAR_ = garden.color.make_color_operation.call(null,cljs.core._STAR_);
/**
* Multiply the RGB components of two or more colors.
*/
garden.color.color_div = garden.color.make_color_operation.call(null,cljs.core._SLASH_);
garden.color.update_color = (function update_color(color,field,f,v){var v__$1 = (function (){var or__9585__auto__ = new cljs.core.Keyword(null,"magnitude","magnitude",3292087682).cljs$core$IFn$_invoke$arity$1(v);if(cljs.core.truth_(or__9585__auto__))
{return or__9585__auto__;
} else
{return v;
}
})();return cljs.core.update_in.call(null,garden.color.as_hsl.call(null,color),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [field], null),f,v__$1);
});
/**
* Rotates the hue value of a given color by amount.
*/
garden.color.rotate_hue = (function rotate_hue(color,amount){return garden.color.update_color.call(null,color,new cljs.core.Keyword(null,"hue","hue",1014007914),cljs.core.comp.call(null,(function (p1__14424_SHARP_){return cljs.core.mod.call(null,p1__14424_SHARP_,360);
}),cljs.core._PLUS_),amount);
});
/**
* Increase the saturation value of a given color by amount.
*/
garden.color.saturate = (function saturate(color,amount){return garden.color.update_color.call(null,color,new cljs.core.Keyword(null,"saturation","saturation",783413060),cljs.core.comp.call(null,garden.color.percent_clip,cljs.core._PLUS_),amount);
});
/**
* Decrease the saturation value of a given color by amount.
*/
garden.color.desaturate = (function desaturate(color,amount){return garden.color.update_color.call(null,color,new cljs.core.Keyword(null,"saturation","saturation",783413060),cljs.core.comp.call(null,garden.color.percent_clip,cljs.core._),amount);
});
/**
* Increase the lightness value a given color by amount.
*/
garden.color.lighten = (function lighten(color,amount){return garden.color.update_color.call(null,color,new cljs.core.Keyword(null,"lightness","lightness",1700345823),cljs.core.comp.call(null,garden.color.percent_clip,cljs.core._PLUS_),amount);
});
/**
* Decrease the lightness value a given color by amount.
*/
garden.color.darken = (function darken(color,amount){return garden.color.update_color.call(null,color,new cljs.core.Keyword(null,"lightness","lightness",1700345823),cljs.core.comp.call(null,garden.color.percent_clip,cljs.core._),amount);
});
/**
* Return the inversion of a color.
*/
garden.color.invert = (function invert(color){return garden.color.as_color.call(null,cljs.core.merge_with.call(null,cljs.core._,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"red","red",1014017027),255,new cljs.core.Keyword(null,"green","green",1112523381),255,new cljs.core.Keyword(null,"blue","blue",1016931276),255], null),garden.color.as_rgb.call(null,color)));
});
/**
* Mix two or more colors by averaging their RGB channels.
* @param {...*} var_args
*/
garden.color.mix = (function() {
var mix = null;
var mix__2 = (function (color_1,color_2){var c1 = garden.color.restrict_rgb.call(null,garden.color.as_rgb.call(null,color_1));var c2 = garden.color.restrict_rgb.call(null,garden.color.as_rgb.call(null,color_2));return garden.color.as_color.call(null,cljs.core.merge_with.call(null,garden.util.average,c1,c2));
});
var mix__3 = (function() { 
var G__14425__delegate = function (color_1,color_2,more){return cljs.core.reduce.call(null,mix,mix.call(null,color_1,color_2),more);
};
var G__14425 = function (color_1,color_2,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__14425__delegate.call(this,color_1,color_2,more);};
G__14425.cljs$lang$maxFixedArity = 2;
G__14425.cljs$lang$applyTo = (function (arglist__14426){
var color_1 = cljs.core.first(arglist__14426);
arglist__14426 = cljs.core.next(arglist__14426);
var color_2 = cljs.core.first(arglist__14426);
var more = cljs.core.rest(arglist__14426);
return G__14425__delegate(color_1,color_2,more);
});
G__14425.cljs$core$IFn$_invoke$arity$variadic = G__14425__delegate;
return G__14425;
})()
;
mix = function(color_1,color_2,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return mix__2.call(this,color_1,color_2);
default:
return mix__3.cljs$core$IFn$_invoke$arity$variadic(color_1,color_2, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mix.cljs$lang$maxFixedArity = 2;
mix.cljs$lang$applyTo = mix__3.cljs$lang$applyTo;
mix.cljs$core$IFn$_invoke$arity$2 = mix__2;
mix.cljs$core$IFn$_invoke$arity$variadic = mix__3.cljs$core$IFn$_invoke$arity$variadic;
return mix;
})()
;
/**
* Return the complement of a color.
*/
garden.color.complement = (function complement(color){return garden.color.rotate_hue.call(null,color,180);
});
/**
* @param {...*} var_args
*/
garden.color.hue_rotations = (function() { 
var hue_rotations__delegate = function (color,amounts){return cljs.core.map.call(null,cljs.core.partial.call(null,garden.color.rotate_hue,color),amounts);
};
var hue_rotations = function (color,var_args){
var amounts = null;if (arguments.length > 1) {
  amounts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return hue_rotations__delegate.call(this,color,amounts);};
hue_rotations.cljs$lang$maxFixedArity = 1;
hue_rotations.cljs$lang$applyTo = (function (arglist__14427){
var color = cljs.core.first(arglist__14427);
var amounts = cljs.core.rest(arglist__14427);
return hue_rotations__delegate(color,amounts);
});
hue_rotations.cljs$core$IFn$_invoke$arity$variadic = hue_rotations__delegate;
return hue_rotations;
})()
;
/**
* Given a color return a triple of colors which are 0, 30, and 60
* degrees clockwise from it. If a second falsy argument is passed the
* returned values will be in a counter-clockwise direction.
*/
garden.color.analogous = (function() {
var analogous = null;
var analogous__1 = (function (color){return analogous.call(null,color,true);
});
var analogous__2 = (function (color,clockwise_QMARK_){var sign = (cljs.core.truth_(clockwise_QMARK_)?cljs.core._PLUS_:cljs.core._);return garden.color.hue_rotations.call(null,color,0,sign.call(null,30),sign.call(null,60));
});
analogous = function(color,clockwise_QMARK_){
switch(arguments.length){
case 1:
return analogous__1.call(this,color);
case 2:
return analogous__2.call(this,color,clockwise_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
analogous.cljs$core$IFn$_invoke$arity$1 = analogous__1;
analogous.cljs$core$IFn$_invoke$arity$2 = analogous__2;
return analogous;
})()
;
/**
* Given a color return a triple of colors which are equidistance apart
* on the color wheel.
*/
garden.color.triad = (function triad(color){return garden.color.hue_rotations.call(null,color,0,120,240);
});
/**
* Given a color return a triple of the color and the two colors on
* either side of it's complement.
*/
garden.color.split_complement = (function() {
var split_complement = null;
var split_complement__1 = (function (color){return split_complement.call(null,color,130);
});
var split_complement__2 = (function (color,distance_from_complement){var d = garden.util.clip.call(null,1,179,distance_from_complement);return garden.color.hue_rotations.call(null,color,0,d,(- d));
});
split_complement = function(color,distance_from_complement){
switch(arguments.length){
case 1:
return split_complement__1.call(this,color);
case 2:
return split_complement__2.call(this,color,distance_from_complement);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split_complement.cljs$core$IFn$_invoke$arity$1 = split_complement__1;
split_complement.cljs$core$IFn$_invoke$arity$2 = split_complement__2;
return split_complement;
})()
;
/**
* Given a color return a quadruple of four colors which are
* equidistance on the color wheel (ie. a pair of complements). An
* optional angle may be given for color of the second complement in the
* pair (this defaults to 90 when only color is passed).
*/
garden.color.tetrad = (function() {
var tetrad = null;
var tetrad__1 = (function (color){return tetrad.call(null,color,90);
});
var tetrad__2 = (function (color,angle){var a = garden.util.clip.call(null,1,90,Math.abs.call(null,new cljs.core.Keyword(null,"magnitude","magnitude",3292087682).cljs$core$IFn$_invoke$arity$2(angle,angle)));var color_2 = garden.color.rotate_hue.call(null,color,a);return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.color.rotate_hue.call(null,color,0),garden.color.complement.call(null,color),color_2,garden.color.complement.call(null,color_2)], null);
});
tetrad = function(color,angle){
switch(arguments.length){
case 1:
return tetrad__1.call(this,color);
case 2:
return tetrad__2.call(this,color,angle);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tetrad.cljs$core$IFn$_invoke$arity$1 = tetrad__1;
tetrad.cljs$core$IFn$_invoke$arity$2 = tetrad__2;
return tetrad;
})()
;
/**
* Given a color return a list of shades from lightest to darkest by
* a step. By default the step is 10. White and black are excluded from
* the returned list.
*/
garden.color.shades = (function() {
var shades = null;
var shades__1 = (function (color){return shades.call(null,color,10);
});
var shades__2 = (function (color,step){var c = garden.color.as_hsl.call(null,color);var iter__10302__auto__ = (function iter__14432(s__14433){return (new cljs.core.LazySeq(null,(function (){var s__14433__$1 = s__14433;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__14433__$1);if(temp__4092__auto__)
{var s__14433__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14433__$2))
{var c__10300__auto__ = cljs.core.chunk_first.call(null,s__14433__$2);var size__10301__auto__ = cljs.core.count.call(null,c__10300__auto__);var b__14435 = cljs.core.chunk_buffer.call(null,size__10301__auto__);if((function (){var i__14434 = 0;while(true){
if((i__14434 < size__10301__auto__))
{var i = cljs.core._nth.call(null,c__10300__auto__,i__14434);cljs.core.chunk_append.call(null,b__14435,cljs.core.assoc.call(null,c,new cljs.core.Keyword(null,"lightness","lightness",1700345823),(i * step)));
{
var G__14436 = (i__14434 + 1);
i__14434 = G__14436;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14435),iter__14432.call(null,cljs.core.chunk_rest.call(null,s__14433__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14435),null);
}
} else
{var i = cljs.core.first.call(null,s__14433__$2);return cljs.core.cons.call(null,cljs.core.assoc.call(null,c,new cljs.core.Keyword(null,"lightness","lightness",1700345823),(i * step)),iter__14432.call(null,cljs.core.rest.call(null,s__14433__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__10302__auto__.call(null,cljs.core.range.call(null,1,Math.floor.call(null,(100.0 / step))));
});
shades = function(color,step){
switch(arguments.length){
case 1:
return shades__1.call(this,color);
case 2:
return shades__2.call(this,color,step);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shades.cljs$core$IFn$_invoke$arity$1 = shades__1;
shades.cljs$core$IFn$_invoke$arity$2 = shades__2;
return shades;
})()
;
