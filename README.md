![ArcorOCR](./public/pdf_128.png)

# [ArcorOCR.com](https://ArcorOCR.com) | PDF OCR for the OCR-less

A simple PDF OCR overlay tool with a public web page. 

The backend currently uses Python but I am working on a Go implementation.

### Background:
This was created to demonstrate/prove the ease of implmenting an OCR scanner on a backend for a web application. A vendor is forcing it's clients to adopt OCR capable PDF processors to utilize their 'PDF scanning' feature. This is because the PDFs that they are providing the vendor with now are not searchable.

Requirments:
- Speed: 
   This needs to be fast enough to process large amounts of data in a reasonable amount of time
- Scalability;
   This should scale to handle increased load and utilization
- Security:
   This should not store any data and should NEVER communicate over plain HTTP (always use TLS to secure communcication and transmission of files)
- Simplicity: 
   This should be incredibly simple to use and pickup on. Keep things basic. Focus on conversion.

Additional:
- CI/CD:
   This should be easy to update/deploy changes to production quickly.
