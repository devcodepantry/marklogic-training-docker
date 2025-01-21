xquery version "1.0-ml";

declare variable $URI as xs:string external; 

let $source := fn:doc($URI)

let $co := $source/contact/co/text() 
let $first := $source/contact/name/first/text() 
let $last := $source/contact/name/last/text()

let $doc := 
<envelope>
  <canonical>
    {if($co) then <company>{$co}</company> else ()}
    {if($first) then <firstName>{$first}</firstName> else ()}
    {if($last) then <lastName>{$last}</lastName> else ()}
  </canonical>
  <source>{$source}</source> 
</envelope> 

return xdmp:document-insert($URI, $doc, (), ("canonical", "corb_transformed")); 