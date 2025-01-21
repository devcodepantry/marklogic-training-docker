xquery version "1.0-ml";

let $uris := cts:uris("", (), cts:and-query((cts:directory-query("/marketing/"), cts:collection-query("raw"))))

let $count := fn:count($uris)

return ($count, $uris) 