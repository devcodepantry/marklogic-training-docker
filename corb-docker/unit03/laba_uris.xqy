xquery version "1.0-ml";

let $uris := cts:uris("", (), cts:and-query((cts:directory-query("/marketing/"), cts:collection-query("canonical"), cts:not-query(cts:document-query(cts:uri-match("/marketing/contact-cs*.xml"))))))
 
let $count := fn:count($uris)
return ($count, $uris)