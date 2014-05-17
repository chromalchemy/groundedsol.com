(ns compass.util
  (:require [clojure.string :as str]
            [clojure.java.io :as io]
            [garden.color :as color])
  (:import [java.io File]
           [javax.imageio ImageIO ImageReader]
           [java.nio.file Files]
           [org.apache.commons.io FilenameUtils]
           [org.apache.commons.codec.binary Base64]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn join-with-slash [& args]
  (as-> (str/join "/" args) _
        (str/replace _ #"\/+" "/")))

(defn absolute-path?
  "Path starts with \"http\" or \"/\"."
  [path]
  (or (= \/ (first path))
      (.startsWith path "http")))

(defn get-extension
  "Returns ext string or nil."
  [path]
  (not-empty (FilenameUtils/getExtension (str/trim path))))

(defn base64-encode-string [bytes]
  (Base64/encodeBase64String bytes))

;; Mime types ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn extension-to-mime [ext]
  (let [mimes {"png"  "image/png"
               "jpg"  "image/jpeg"
               "jpeg" "image/jpeg"
               "gif"  "image/gif"
               "svg"  "image/svg+xml"
               "otf"  "font/opentype"
               "eot"  "application/vnd.ms-fontobject"
               "ttf"  "font/truetype"
               "woff" "application/x-font-woff"
               "off"  "font/openfont"}]
    (or (mimes ext)
        (when-let [alpha-ext (re-find #"\p{Alpha}+" ext)]
          (str "image/" alpha-ext)))))

(defn path-to-mime
  "Determines mime type from path string.
   If it knows the mime, it returns it.
   If it doesn't, it will guess \"image/<ext>\".
   If there is no ext, it returns nil."
  [path]
  (extension-to-mime (get-extension path)))

;; File IO ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; (defn get-file-bytes [file]
;;   (Files/readAllBytes (.toPath file)))

;; (defn get-image-dimensions
;;   "Reads enough bytes to determin image dimenisons.
;;    Returns {:height Int, :width Int}"
;;   [file]
;;   (with-open [in (ImageIO/createImageInputStream file)]
;;     (let [readers (ImageIO/getImageReaders in)]
;;       (if-let [r (and (.hasNext readers) (.next readers))]
;;         (try
;;           (.setInput r in)
;;           {:height (.getHeight r 0)
;;            :width (.getWidth r 0)}
;;           (finally
;;             (.dispose r)))))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;


