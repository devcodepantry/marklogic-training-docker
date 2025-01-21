xquery version "1.0-ml";

declare variable $URI as xs:string external; 

let $doc := fn:doc($URI)

let $address := $doc/envelope/source/contact/addr/text()
let $city := $doc/envelope/source/contact/city/text()
let $state := $doc/envelope/source/contact/state/text()
let $zip := $doc/envelope/source/contact/zip/text()
let $phone-work := $doc/envelope/source/contact/phone/work/text()
let $phone-mobile := $doc/envelope/source/contact/phone/mobile/text()
let $phone-home := $doc/envelope/source/contact/phone/home/text()
let $email := $doc/envelope/source/contact/email/text()
let $mailok := $doc/envelope/source/contact/communications/mailok/text()
let $emailok := $doc/envelope/source/contact/communications/emailok/text()
let $frequency := $doc/envelope/source/contact/communications/frequency/text()

return (
  if($address) then xdmp:node-insert-child($doc/envelope/canonical, <address>{$address}</address>) else (), 
  if($city) then xdmp:node-insert-child($doc/envelope/canonical, <city>{$city}</city>) else (),
  if($state) then xdmp:node-insert-child($doc/envelope/canonical, <state>{$state}</state>) else (),
  if($zip) then xdmp:node-insert-child($doc/envelope/canonical, <zip>{$zip}</zip>) else (),  
  if($phone-work) then xdmp:node-insert-child($doc/envelope/canonical, <phoneWork>{$phone-work}</phoneWork>) else (),
  if($phone-mobile) then xdmp:node-insert-child($doc/envelope/canonical, <phoneMobile>{$phone-mobile}</phoneMobile>) else (),
  if($phone-home) then xdmp:node-insert-child($doc/envelope/canonical, <phoneHome>{$phone-home}</phoneHome>) else (),    
  if($email) then xdmp:node-insert-child($doc/envelope/canonical, <email>{$email}</email>) else (),
  if($mailok) then xdmp:node-insert-child($doc/envelope/canonical, <mailOk>{$mailok}</mailOk>) else (),
  if($emailok) then xdmp:node-insert-child($doc/envelope/canonical, <emailOk>{$emailok}</emailOk>) else (),
  if($frequency) then xdmp:node-insert-child($doc/envelope/canonical, <frequency>{$frequency}</frequency>) else ()
)