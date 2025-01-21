xquery version "1.0-ml";

module namespace td = "http://marklogic.com/mlu/transform-date";

import module namespace mem = "http://xqdev.com/in-mem-update" at "/MarkLogic/appservices/utils/in-mem-update.xqy"; 

declare function td:transform($content as map:map, $context as map:map) as map:map*
{
  let $doc := map:get($content, "value")
  let $old-date-format := "[M]/[D]/[Y0001] [h01]:[m01]:[s01] [P]" 
  let $new-date-format := "[Y0001]-[M01]-[D01]" 
  let $old-date-value := $doc/foo/bar/data()
  let $new-date-value := fn:format-date(xs:date(xdmp:parse-dateTime($old-date-format, $old-date-value)), $new-date-format)
  let $new-doc := mem:node-replace($doc/foo/bar, <bar>{$new-date-value}</bar>)
  let $_ := map:put($content, "value", $new-doc)
  return $content
};