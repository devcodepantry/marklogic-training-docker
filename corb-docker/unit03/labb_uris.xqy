xquery version "1.0-ml";

let $uris := cts:uris("", (), cts:document-query(cts:uri-match("/marketing/contact-cs*.xml")))
 
let $count := fn:count($uris)
return ($count, $uris)