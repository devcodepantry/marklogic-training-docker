xquery version "1.0-ml";
module namespace trans = "http://marklogic.com/rest-api/transform/envelope";

declare function trans:transform(
  $context as map:map,
  $params as map:map,
  $content as document-node()
) as document-node()
{
  let $uri := map:get($context, "uri")
  let $envelope :=
    document {
      element envelope {
        element canonical {
          element firstName { $content/contact/first/data() },
          element lastName { $content/contact/last/data() },
          element address { $content/contact/address/data() },
          element city { $content/contact/city/data() },
          element state { $content/contact/state/data() },
          element zip { $content/contact/zip/data() },
          element email { $content/contact/email/data() }
        },
        element source { $content }
      }
    }

  return $envelope
};
