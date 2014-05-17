#!/usr/bin/env boot

#tailrecursion.boot.core/version "2.2.1"

(set-env!
  :project      'groundedsol
  :dependencies '[[tailrecursion/boot.core   "2.2.1"]
                  [tailrecursion/boot.task   "2.1.1"]
                  [tailrecursion/boot.notify "2.0.0-SNAPSHOT"]
                  [tailrecursion/boot.ring   "0.1.0-SNAPSHOT"]
                  [tailrecursion/hoplon      "5.5.1"]
                  [org.clojure/clojurescript "0.0-2156"]
                  [org.clojure/clojure       "1.5.1"]
                  [garden                    "1.1.5"]
                  [markdown-clj              "0.9.38"]
                  [jayq                      "2.5.0"]
                 ;;[expectations              "1.4.56"]
                 ;;[commons-codec             "1.8"]
                 ;;[commons-io                 "1.4"]
                  ]
  :src-paths    #{"src"}
  :out-path     "public"
  :garden       '[{:stylesheet garden.css/screen
                   :compiler {:pretty-print? false
                              :vendors ["webkit" "moz" "o" ]}}])


(require
   '[clojure.java.io             :as    io]
   '[tailrecursion.boot.core     :as    boot]
  '[tailrecursion.boot.task.ring   :refer [dev-server]]
  '[tailrecursion.hoplon.boot       :refer [hoplon]]
  '[tailrecursion.boot.task.notify :refer [hear]]
  '[garden.compiler                 :refer [compile-css]]
 '[tailrecursion.boot.task :refer :all]
  '[pmbauer.boot.task.repl :as repl]
  '[pmbauer.boot.task.cljs :as cljs]
 )

(deftask brepl
  "launch browser repl, default point browser to public/index.html"
  [& [index-file]]
  (comp (cljs/+ :browser)
        (cljs/+brepl (or index-file "public/index.html"))
        (repl/repl)))

(deftask livedev
        "watch everything"
         []
         (comp (watch) (hoplon {:prerender false}) (garden) (dev-server)))


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
               (doseq [build builds] (add-sync! (get-env :out-path) #{"assets"}) (garden-compile build)))
             (continue event))))

(deftask hlight
         "Single build for local dev."
         []
         (hoplon {:pretty-print  false
                  :prerender     false
                  :optimizations :whitespace}))

(deftask hdev
         "Hoplon watch"
         []
         (comp (watch) (hlight)))

(deftask gdev
         "Garden watch"
         []
         (comp (watch) (garden)))

(deftask ghdev
         "Garden and Hoplon watch"
         []
         (comp (watch) (hlight) (garden)))


