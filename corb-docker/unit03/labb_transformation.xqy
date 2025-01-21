xquery version "1.0-ml";

declare variable $URI as xs:string external; 

let $doc := fn:doc($URI)

let $address := $doc/envelope/source/contact/address/text()
let $city := $doc/envelope/source/contact/city/text()
let $state := $doc/envelope/source/contact/state/text()
let $zip := $doc/envelope/source/contact/zip/text()
let $email := $doc/envelope/source/contact/email/text()

return (
  if($address) then xdmp:node-insert-child($doc/envelope/canonical, <address>{$address}</address>) else (), 
  if($city) then xdmp:node-insert-child($doc/envelope/canonical, <city>{$city}</city>) else (),
  if($state) then xdmp:node-insert-child($doc/envelope/canonical, <state>{$state}</state>) else (),
  if($zip) then xdmp:node-insert-child($doc/envelope/canonical, <zip>{$zip}</zip>) else (),  
  if($email) then xdmp:node-insert-child($doc/envelope/canonical, <email>{$email}</email>) else ()
)