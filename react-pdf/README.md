## React PDF Generator
    - Background image
        -  absolute positioning for Text components over an image
    - Will this work on the web
    - reliably pulling content from my cv html / web ?
        - some styles work 
    - how much markup can be pulled in and will work ?
      - Works but seems like an ugly solution https://www.npmjs.com/package/react-pdf-html
    - [x] can styling be integrated directly from stylesheet ?
        - [] Box-Shadows: no ?
        - [x] Circular border ?
        - [x] Custom fonts ? Yes
        - [x] Transparen background ? Yes
        - Yes, but not all styles work. In react dom yes but not in pdf doc
    - flex box works / horizontal aligned divs
    - Fix custom fonts
    - How to fit across various pages
        - Has built in page breaks wrapper engine 

    - Strucuture this doc
        - [ ] Header
            - [x] Profile image
            - [x] My name
            - [ ] Subtitle 1 Custom Bold font
            - [ ] Subtitle 2 Custom Font
        - About me block
        - Experiences block
            - Vertically stacked experiences ?
        - Education block
        - Skills block

Techincal debt: 
        - [x] Repeatedly Downloading Pdfs and then opening them
            - render in browser !
                - See test.jsx <PDFViewer> and rendewr app cmp normally
- Bugs:
    - <VIEW /> Look at rendering methods to fix this