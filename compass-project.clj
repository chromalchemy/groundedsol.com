(defproject compass "0.1.0-SNAPSHOT"
  :description "A port of Compass to Clojure for use with Garden."
  :url "http://github.com/danneu/compass"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-2156"]
                 [garden "1.1.5"]
                 [commons-codec "1.9"]
                 [commons-io "2.4"]]
  :plugins [[lein-expectations "0.0.7"]]
  )
