(ns compass.reset.utilities
  (:require [compass.css3 :refer [*options*]]
            [garden.compiler :refer [compile-css]]))

;; compass exclusive ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; https://github.com/necolas/normalize.css/
(defn normalize [])

;; Mixins ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn global-reset [])

;; nested-reset
;; reset-box-model
;; reset-font
;; reset-focus
;; reset-body
;; reset-list-style
;; reset-table
;; reset-table-cell
;; reset-quotation
;; reset-image-anchor-border
;; reset-html5
;; reset-display
