(refer-clojure :exclude '[+ - * /])

(require '(garden
           [core :refer :all]
           [units :as g-unit :refer :all]
           [color :as color :refer :all]
           [arithmetic :refer [+ - * /]]
           [stylesheet :refer [at-media]]
           repl
           )
           '[garden.def :refer [defcssfn]]

         ;'[compass.config :refer [*config*]]
         ;'[compass.css-functions :refer [url]]
         '[compass.css3 :refer :all]
         ;'[compass.util :as util]
         '(compass.helpers
           [colors :refer :all]
           [display :refer :all]
           ;[image-size :refer :all]
           ;[inline-data :refer :all]
           ;[helpers.urls :refer :all]
         )
         '(compass.utilities.color
           [contrast :refer :all])
         '(compass.utilities.general
           [hacks :refer [has-layout]]
           [float :refer :all]
           [clearfix :refer :all])
         ;'[clojure.string :as str]
         ;'[clojure.set :as set]
         )


(css [:body {:height "10px"} (clearfix)])

(px 12)

(def mycolor (hsl 58 100 50))

(style {:height "10px" :width (em 20)})

(css  [:h2
       (reset-float)
       (opaque)
       {:width (em (+ 90 90))
        :height (px 10)
        :color mycolor}])

(color/darken mycolor 27)

(expand-hex "abc")

(weighted-mix "000" "999" 10)

(border-radius)


(def red (hsl 0 100 50))
(def yellow (hsl 58 100 50))
(def top-push "83px")


[:.logo-bar
{:width "100%"
 :text-align "center"}
[:.logo
 {:position "relative"}
 ]]

[:body {:background-color "#636160"
        :color "white"}]



[:.jumbotron
  {:position "relative"
   :margin {:top "0" :bottom "0"}
   :padding {:top "0" :bottom "0"}
   :background { :image "url(img/grounded-trans-bar_01.png)"
                 :repeat "horz"
                 :position "center 83px"
                 :color "#d3e9ed"
                 }
   }
]


[:.tag-line {
           :font-size "2.5em"
           :font-weight "norm"
           :margin-top "57px"
           }]

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
    [:.email]
]


[:.list-group-item
 {:background-color "inherit"
  :border "none"}
 [:div [:span {:font-size "1.3em"}]]]

[:a {:color "#bedda8"}
 [:&:hover {:color "#bedda8"
            :text-decoration "underline"}]]

[:.product-cat
 {:padding "0 3em"}
 [:h3
  {:font-size "3em"
   :margin-bottom ".6em"}]
 [:span
  {:font-size "1.3em"
   :line-height "1em"
   :color "#C8BEB9"
   :display "block"
   :margin-bottom "2em"}]
 ]

[:.product-list
 {:font-size "1.1em"}
 [:div {:margin-bottom "2em"}]
 [:h4 {:margin {:top "1em" :bottom ".7em"}
       :font-size "2.1em"
       :color "#6AB185"
       :text-shadow "2px 1px 7px  hsl(0, 0%, 30%)"}]
 [:p {:line-height "1.5em"}]
 [:ul {}]
 ]

[:.product-availibility
 #_[:span
  {:display "block"}]]
