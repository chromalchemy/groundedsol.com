(ns compass.helpers.urls-test
  (:require [expectations :refer :all]
            [compass.helpers.urls :refer :all]
            [compass.config :refer [*config*]]
            [garden.compiler :refer [render-css]]))

;; Relative
(expect "url(/stylesheets/foo.css)"
        (render-css (stylesheet-url "foo.css")))

;; Absolute
(expect "url(/foo.css)"
        (render-css (stylesheet-url "/foo.css")))

;; Absolute
(expect "url(http://bar.com/foo.css)"
        (render-css (stylesheet-url "http://bar.com/foo.css")))
