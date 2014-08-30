(ns compass.helpers.display-test
  (:require [expectations :refer :all]
            [compass.helpers.display :refer :all]
            [compass.css3 :refer [*options*]]
            [garden.compiler :refer [compile-css]])
  (:import [clojure.lang ExceptionInfo]))

;; Throws on unknown element
(expect ExceptionInfo (elements-of-type :foobar))

;; Single element
(expect
".example table {
  color: green;
}" (compile-css [:.example
                 (conj (elements-of-type :table)
                       {:color :green})]))


;; Many elements
(expect
".example article, .example aside, .example details, .example figcaption, .example figure, .example footer, .example header, .example hgroup, .example menu, .example nav, .example section, .example summary {
  color: green;
}" (compile-css [:.example
                 (conj (elements-of-type :html5-block)
                       {:color :green})]))
