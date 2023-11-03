## React PDF Generator

### TODO
- [] Alias on cv / curriculum seo
- [ ] Remove unwanted from repo 
- [ ] Custom JH favicon
- [ ] Meta other 
- [ ] Global styles
    - [] Black style
    - [] White/Printeable
    - [ ] Link color
- [ ] Layout 
    - [] Chronological
    - [] Skills Based
    - [] Standard Typical C.V. 
    - [ ] Left col for title, period & Company ?

- [] Language Logic and how to handle this
    - [ ] Const with template vars ?
    - [ ] Figure how to do this language switch
    - [ ] React Router ?
- [x] Load content fetch useEffect / useCallback
- [ ] Page
    - [ ]Custom background 
    - !Flexbox is to continue implementing should we continue building
- [ ] Header
    - [x] Custom Background
    - [x] Profile image
    - [x] My name
    - [x] Subtitle 1 Custom Bold font
    - [x] Subtitle 2 Custom Font
- [x] About me block ?
    - [x] Main text
    - [x] Contact info 
- [ ] Experiences block
    - [x] 3 col flexbox 
        - List See if we get styling similar to website with icons + stcking
        - Strongs ?
            - [x]  This is some text. Some of it is` <Text style={{ fontFamily: 'italic font' }}`
        - [x] Vertically stacked experience summary ? x3 
            - [x] Icons
    - [] Education block
        - [x] 3 Col flexbox
        - [ ] Add awards ?
    - Skills block ?

- [] Data fetching
     - [x] Setup a json api 
        - [x] Curriculum to json 
            - [x] Jquery to generate json
        - [x] Fix CORS issues (Only Get)
     - [x] Setup a custom use-http.js / or useCallback directly 
     - [ ] Clean up data before hand in desc '",\n,"   " '
     - [] Md to json ?
        - [x] I dont think feedback to user is a big concern but its neat
    - Generic text filter function utils

### Techincal debt: 
        - [x] Repeatedly Downloading Pdfs and then opening them
            - render in browser !
                - See test.jsx <PDFViewer> and rendewr app cmp normally
        - [ ] zoom pdf renderer 100% (defaultScale={1} ? Sure i saw this working before)
        - [x] Issue when rendering and failing in bkg
            - Open new tab may fix issue
            - [] Capture errors from the pdf renderer (errror boundary) 
            - [x] ~~pull/scrape html from the web because of cors issues.~~
        - [] Render in browser rather than serverside ?

### BUGS :
    - <VIEW /> Look at rendering methods to fix this
    - [] Render crash see notes below

### Design Review:
Most importantly skim over all of requirements and follow up with adjustments
    - [ ] Borders
    - [ ] Font sizes
    - [ ] Image Relative Sizing
    - [ ] Element positioning like contact info

### Threat Analysis:
    - [x] Background image
        -  absolute positioning for Text components over an image
    - Will this work on the web
    - [x] reliably pulling content from my cv html / web ?
        - some styles work 
    - how much markup can be pulled in and will work ?
      - Works but seems like an ugly solution https://www.npmjs.com/package/react-pdf-html
    - [x] can styling be integrated directly from stylesheet ?
        - [x] Box-Shadows: no ?
        - [x] Circular border ?
        - [x] Custom fonts ? Yes
        - [x] Transparen background ? Yes
        - Yes, but not all styles work. In react dom yes but not in pdf doc
    - flex box works / horizontal aligned divs
    - [x] How to fit across various pages
        - Has built in page breaks wrapper engine set wrap={false}

###  BUG Render Crash  :

Optimize your PDF content: If your PDF contains large images or complex vector graphics, consider optimizing these assets to reduce their file size.

Render PDF progressively: Instead of rendering the entire PDF at once, consider rendering it page by page or section by section. This can help reduce the memory usage.

Increase memory limit: If you're using Node.js to serve your application, you can increase the memory limit using the --max-old-space-size flag. For example, node --max-old-space-size=4096 yourScript.js will increase the memory limit to 4GB.

Use a PDF.js viewer: PDF.js is a JavaScript library that renders PDFs in the browser using HTML5 and JavaScript, without the need for a server. It's more efficient and might solve your issue.

Remember to always test your application in multiple browsers and devices to ensure the best performance and compatibility.