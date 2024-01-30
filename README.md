<!-- ![ArcorOCR](./public/pdf_128.png)

# [ArcorOCR.com](https://ArcorOCR.com) Frontend | PDF OCR for the OCR-less -->

<div align="center">
  <a href="https://arcorocr.com" target="_blank">
    <img src="./public/pdf_512.png" alt="Logo" width="140">
  </a>

  <h1 align="center"><a href="https://arcorocr.com" target="_blank">ArcorOCR.com</a> | Frontend</h1>

  <h3 align="center">
    PDF OCR for the OCR-less
    <!-- <br />
    <a href="https://github.com/othneildrew/Best-README-Template"><strong>Explore the docs »</strong></a>
    <br /> -->
    <br /> 
    <a href="https://arcorocr.com">View Demo</a>
    ·
    <a href="https://github.com/sam-morin/ArcorOCR-backend-python/issues">Report Bug</a>
    ·
    <a href="https://github.com/sam-morin/ArcorOCR-backend-python/issues">Request Feature</a>
  </h3>
</div>

A simple PDF OCR overlay (add/remove) tool with a public web page. 

### Background:
This was created to demonstrate/prove the ease of implmenting an OCR scanner/converter/generator backend functionality for a web application. 

A particular vendor is essentially forcing their clients to adopt OCR capable PDF processors to utilize their 'PDF import' feature. Their documentation says nothing about any specific PDF requirements and the web application spits out a somewhat vague error when using a non-searchable PDF. They aren't handling cases where the PDF is flat/doesn't already contain a text layer. In my opinion, this responsibility should fall within the purview of the vendor. They should handle this case where there is no OCR layer, then scan and generate one. If they could really nail down an OCR function - it could potentially contribute to more reliable/controllable post-processing and possibly less support tickets/interaction. 

I wanted to see what kind of investment this would incurr against performance to determine the weight of my argument.

## Objectives:
(scope of this list: **frontend**)
- Speed: 
   This needs to be fast enough to process large amounts of data in a reasonable amount of time
- Scalability:
   This should scale to handle increased load and utilization
- Security:
   This should not store any data and should NEVER communicate over plain HTTP (always use TLS to secure communcication and transmission of files)
- Simplicity: 
   This should be incredibly simple to use and pickup on. Keep things basic. Focus on conversion.
- CI/CD:
   This should be easy to update/deploy changes to production quickly

## Implemented:
(scope of this list: **frontend**)
- Speed:
   The frontend is running in a docker container with sufficient resources
- Scalability:
   Currently running in a single Github Runner producing 2 containers (shouldn't need more for frontend). Equal weight LB with nginx. Looking into Podman.
- Security:
   Confirm production application is running over TLS and employing HSTS on the root domain. TLS 1.3 only. Various other Cloudflare protections.
- Simplicity: 
   Frontend application is very easy to use. Choose a file to convert, wait for it to convert & download.
- CI/CD:
   Using Github Action Runner(s) for frontend.

# Screenshot

![ArcorOCR SCR1](./public/ArcorOCR-scr1.png)

# Running

### Production

1. Pull the source and CD
```shell
git pull https://github.com/sam-morin/ArcorOCR-frontend.git && cd ArcorOCR-frontend
```

2. Build image
```shell
docker build . -t arcorocr-frontend
```

3. Run the image
```shell
docker run -d --restart unless-stopped -p SOME_PUBLIC_PORT:3000 arcorocr-frontend
```

### Development

1. Pull the source and CD
```shell
git pull https://github.com/sam-morin/ArcorOCR-frontend.git && cd ArcorOCR-frontend
```

2. Install node modules
```shell
npm install
```

3. Run hot-reload dev server
```shell
npm run start
```