![ArcorOCR](./public/pdf_128.png)

# ArcorOCR - [ArcorOCR.com](https://ArcorOCR.com)

A simple PDF OCR overlay tool with a public web page. 

The backend currently uses Python but I am working on a Go implementation.

### Background:
This was created to demonstrate/prove the ease of implmenting an OCR scanner on a backend for a web application.

Requirments:
- Speed: 
   This needs to be fast enough to process large amounts of data in a reasonable amount of time
- Scalability;
   This should scale to handle increased load and utilization
- Security:
   This should not store any data and should NEVER communicate over plain HTTP (always use TLS to secure communcication and transmission of files)
- Simplicity: 
   This should be incredibly simple to use and pickup on. Keep things basic. Focus on conversion.