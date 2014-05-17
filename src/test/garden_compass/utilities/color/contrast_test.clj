(ns compass.utilities.color.contrast-test
  (:require [compass.css-functions]
            [compass.utilities.color.contrast :refer :all]
            [compass.css3 :refer [*options*]]
            [garden.color :as color :refer [hsl]]
            [expectations :refer :all]))

;; contrast-color ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; Show dark color when lightness is more than threshold
(expect "black" (contrast-color {:color (hsl 180 60 50)}))

;; Show light color when lightness is less than threshold
(expect "white" (contrast-color {:color (hsl 180 60 20)}))

;; contrasted ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(expect {:background-color "black"
         :color "white"}
        (contrasted {:background-color "black"}))
