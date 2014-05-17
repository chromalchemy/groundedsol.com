(ns garden.css
  (:refer-clojure :exclude [+ - * /])
  (:require
     [garden.core :refer :all]
     [garden.color :as color :refer [rgb hsl]]
     [garden.def :refer [defstyles defkeyframes defcssfn]]
     [garden.units :refer [px em]]
     [garden.arithmetic :refer [+ - * /]]
     [garden.stylesheet :refer [at-media]]
     [garden.types]
     [garden.util :as util]
     [clojure.set :as set])

;;    [compass.css3 :refer [transparent]]
;;    [compass.helpers.colors :refer :all]
;;    [compass.helpers.display :refer :all]
;;    [compass.utilities.color.contrast :refer :all]
;;    [compass.utilities.general.hacks :refer [has-layout]]
;;    [compass.utilities.general.float :refer :all]
;;    [compass.utilities.general.clearfix :refer :all]

  #_(:import garden.types.CSSFunction
           garden.types.CSSAtRule)
)


(defstyles screen

[:.demox ^:prefix {:animation {"duration" "6s"
                               "delay" "4s"
                               "iteration-count" "infinite"}}]

(defkeyframes myanimation
       [:from {:color "blue"}]
       [:to   {:color "red"}])

 myanimation
  [:.demo
       ^:prefix
  {:animation  [[myanimation "5s" :infinite :alternate]]}]




[:.logo-bar
  {:width "100%"
   :text-align "center"}

  [:.logo {:position "relative"
           :top "83px"}]]

[:body {:background-color "#636160"
        :color "white"}]


[:.jumbotron
  {:position "relative"
   :margin {:top "0" :bottom "0"}
   :padding {:top "0" :bottom "0"}
   :background { :image "url(img/grounded-trans-bar_01.png)"
                 :repeat "horz"
                 :position "center 83px"
                 :color "#d3e9ed"  }}]


[:.tag-line {
           :font-size "2.5em"
           :font-weight "norm"
           :margin-top "57px"}]

[:.container ]

[:.contact
  {:line-height "1.3em"
   :letter-spacing ".05em"
   :font-size "1.6em"
   :margin-top "2.6em"}
  [:span :a {:display "block"}]
    [:.name]
    [:.telephone]
    [:.web]
    [:.email]]


[:.list-group-item
 {:background-color "inherit"
  :border "none"}
 [:div
  [:span {:font-size "1.3em"}]]]


[:a {:color "#bedda8"}
 [:&:hover {:color "#bedda8"
            :text-decoration "underline"}]]


[:.product-cat
 {:padding "0 3em"}
 [:h3
  {:font-size "2em"
   :margin-bottom ".6em"}]
 [:span
  {:font-size "1.3em"
   :line-height "1em"
   :color "#C8BEB9"
   :display "block"
   :margin-bottom "2em"}]]


[:.product-list
 {:font-size "1.1em"}
 [:div {:margin-bottom "2em"}]
 [:h4 {:margin {:top "1em" :bottom ".7em"}
       :font-size "2.1em"
       :color "#6AB185"
       :text-shadow "2px 1px 7px  hsl(0, 0%, 30%)"}]
 [:p {:line-height "1.5em"}]
 [:ul {}]]


[:.product-availibility
 #_[:span
  {:display "block"}]]


 )



