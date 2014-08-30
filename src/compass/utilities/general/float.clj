(ns compass.utilities.general.float
  (:require [compass.css3 :refer [*options*]]))

;; Mixins ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn float
  ([] (float :left))
  ([side]
     {:display :inline
      :float side}))

(defn float-left []
  (float :left))

(defn float-right []
  (float :right))

(defn reset-float
  ([] (reset-float :block))
  ([display]
     {:float :none
      :display display}))
