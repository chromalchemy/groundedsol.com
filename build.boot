#!/usr/bin/env boot

#tailrecursion.boot.core/version "2.5.1"

(set-env!
  :project      'groundedsol
  :dependencies '[;;[org.clojure/clojure       "1.6.0"]
                  ;;[org.clojure/clojurescript "0.0-2311"]
                  ;;[tailrecursion/boot.core   "2.3.1"]
                  [tailrecursion/boot.task   "2.2.4"]
                  [tailrecursion/boot.notify "2.0.2"]
                  ;;[tailrecursion/boot.ring   "0.2.1"]
                  [tailrecursion/hoplon      "5.10.23"]
                  [garden                    "1.2.1"]
                  ;;[markdown-clj              "0.9.41"]
                  [jayq                      "2.5.2"]
                 ;;[expectations              "1.4.56"]
                 [commons-codec             "1.8"]
                 [commons-io                 "1.4"]
                  ]
  :src-paths    #{"src"}
  :out-path     "resources/public"
  :garden       '[{:stylesheet garden.css/screen
                   :compiler {:pretty-print? false
                              :vendors ["webkit" "moz" "o" ]}}])

;; Static resources (css, images, etc.):
(add-sync! (get-env :out-path) #{"assets"})

(require
  '[clojure.java.io                   :as    io]
  '[tailrecursion.boot.core           :as    boot]
  '[tailrecursion.hoplon.boot         :refer :all]
  '[tailrecursion.boot.task           :refer :all]
  '[tailrecursion.boot.task.notify    :refer [hear]]
  '[tailrecursion.boot.task.ring      :refer [dev-server]]
  '[garden.compiler                   :refer [compile-css]]
 )

(defn garden-compile
  [{:keys [stylesheet compiler] :as build}]
  (let [tmpdir   (boot/mkoutdir! ::garden-tmp)
        out-file (->> (or (get compiler :output-to)
                          (str (name stylesheet) ".css"))
                      (io/file tmpdir)
                      .getPath)]
    (println "[garden] Compiling" stylesheet "...")
    (require (symbol (namespace stylesheet)) :reload-all)
    (compile-css
      (assoc compiler :output-to out-file)
      @(resolve stylesheet))))


(deftask garden [& opts]
   (fn [continue]
     (fn [event]
       (when-let [builds (get-env :garden)]
         (doseq [build builds]
           (add-sync! (get-env :out-path) #{"assets"})                            (garden-compile build)))
       (continue event))))

(deftask development
  "Build hopdemo for development."
  []
  (comp (watch) (hoplon {:pretty-print true :prerender false}) (dev-server)))


(deftask hlight
   "light hoplon build for local dev."
   []
   (hoplon {:pretty-print  false
            :prerender     false
            :optimizations :whitespace}))

(deftask hdev
   "Hoplon watch"
   []
   (comp (watch) (hoplon {:pretty-print true :prerender false}) (dev-server)))

(deftask gdev
   "Garden watch"
   []
   (comp
    (watch)
    (garden)))

(deftask ghdev
   "Garden and Hoplon watch"
   []
   (comp
    (watch)
    (hlight)
    (garden)))

(deftask livedev
  "watch-reload everything"
   []
   (comp
    (watch)
    (dev-server)
    (hlight)
    (garden)))

(deftask sassdev
  ""
   []
   (comp
    (watch)
    (dev-server)
    (hlight)))

