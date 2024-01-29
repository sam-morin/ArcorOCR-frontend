![ArcorOCR](./public/pdf_128.png)

# [ArcorOCR.com](https://ArcorOCR.com) Frontend | A simple PDF OCR for the OCR-less

A simple PDF OCR overlay tool with a public web page. 

The backend currently uses Python but I am working on a Go implementation.

### Background:
This was created to demonstrate/prove the ease of implmenting an OCR scanner on a backend for a web application. A vendor is forcing it's clients to adopt OCR capable PDF processors to utilize their 'PDF scanning' feature. This is because the PDFs that they are providing the vendor with now are not searchable.

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