![ArcorOCR](./public/pdf_128.png)

# [ArcorOCR.com](https://ArcorOCR.com) Frontend | PDF OCR for the OCR-less

A simple PDF OCR overlay (add/remove) tool with a public web page. 

### Background:
This was created to demonstrate/prove the ease of implmenting an OCR scanner/converter/generator backend functionality for a web application. 

A vendor is essentially forcing it's clients to adopt OCR capable PDF processors to utilize their 'PDF scanning' feature. I have now become involved, and naturally I wanted to put my money where my mouth is. Their documentation says nothing about any specific PDF requirements and the web application spits out a somewhat vague error when using a non-searchable PDF. They aren't handling cases where the PDF is flat/doesn't already contain a text layer. In my opinion, this responsibility should fall within the purview of the vendor. They should handle this case where there is no OCR layer, then scan and generate one. If they could really nail down an OCR function - it could potentially contribute to more reliable/controllable post-processing and possibly less support tickets/interaction. 

## Objectives:
- Speed: 
   This needs to be fast enough to process large amounts of data in a reasonable amount of time
- Scalability:
   This should scale to handle increased load and utilization
- Security:
   This should not store any data and should NEVER communicate over plain HTTP (always use TLS to secure communcication and transmission of files)
- Simplicity: 
   This should be incredibly simple to use and pickup on. Keep things basic. Focus on conversion.

Additional:
- CI/CD:
   This should be easy to update/deploy changes to production quickly

## Implemented:
(Scope: **frontend**)
- Speed:
   The frontend is running in a docker container with sufficient resources
- Scalability:
   Currently running in a single Github Runner producing 2 containers (shouldn't need more for frontend). Equal weight LB with nginx. Looking into Podman.
- Security:
   Confirm production application is running over TLS and employing HSTS on the root domain. TLS 1.3 only. Various other Cloudflare protections.
- Simplicity: 
   Frontend application is very easy to use. Choose a file to convert, wait for it to convert & download.

Additional:
- CI/CD:
   Using Github Action Runner(s) for frontend.