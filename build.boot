#!/usr/bin/env boot

#tailrecursion.boot.core/version "2.3.1"

(set-env!
  :project      'groundedsol
  :dependencies '[;;[org.clojure/clojure       "1.6.0"]
                  [org.clojure/clojurescript "0.0-2202"]
                  [tailrecursion/boot.core   "2.3.1"]
                  [tailrecursion/boot.task   "2.1.3"]
                  [tailrecursion/boot.notify "2.0.1"]
                  [tailrecursion/boot.ring   "0.1.0"]
                  [tailrecursion/hoplon      "5.8.3"]
                  [garden                    "1.1.6"]
                  ;;[markdown-clj              "0.9.41"]
                  [jayq                      "2.5.1"]
                 ;;[expectations              "1.4.56"]
                 [commons-codec             "1.8"]
                 [commons-io                 "1.4"]
                  ]
  :src-paths    #{"src"}
  :out-path     "public"
  :garden       '[{:stylesheet garden.css/screen
                   :compiler {:pretty-print? false
                              :vendors ["webkit" "moz" "o" ]}}])

(require
  '[clojure.java.io                   :as    io]
  '[tailrecursion.boot.core           :as    boot]
  '[tailrecursion.hoplon.boot         :refer :all]
  '[tailrecursion.boot.task           :refer :all]
  '[tailrecursion.boot.task.notify    :refer [hear]]
  '[tailrecursion.boot.task.ring      :refer [dev-server]]
  '[garden.compiler                   :refer [compile-css]]
  ;;'[pmbauer.boot.task.repl            :as repl]
 ;;'[pmbauer.boot.task.cljs            :as cljs]
 )


(deftask brepl
  "launch browser repl, default point browser to public/index.html"
  [& [index-file]]
  (comp (cljs/+ :browser)
        (cljs/+brepl (or index-file "public/index.html"))
        (repl/repl)))

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
           (add-sync! (get-env :out-path) #{"assets"})                  (garden-compile build)))
       (continue event))))

(deftask hlight
   "light hoplon build for local dev."
   []
   (hoplon {:pretty-print  false
            :prerender     false
            :optimizations :whitespace}))

(deftask hdev
   "Hoplon watch"
   []
  (comp
      (watch)
      (hlight)))

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

