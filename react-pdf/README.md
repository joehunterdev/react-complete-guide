## React PDF Generator

### TODO

- [ ] Remove unwanted from repo 
- [] Custom JH favicon
- [] Meta other 
- [] Load content fetch useEffect / useCallback
- [ ] Page
    - [ ]Custom background 

- [ ] Header
    - [ ] Custom Background
    - [x] Profile image
    - [x] My name
    - [x] Subtitle 1 Custom Bold font
    - [x] Subtitle 2 Custom Font
- [ ] About me block ?
    - [ ] Main text
    - [ ] Contact info 
- [ ] Experiences block
    - [ ] 3 col flexbox 
        - List See if we get styling similar to website with icons + stcking
        - Strongs ?
            - [ ]   This is some text. Some of it is` <Text style={{ fontFamily: 'italic font' }}`

        - Vertically stacked experiences ?
    - Education block
    - Skills block


### Techincal debt: 
        - [x] Repeatedly Downloading Pdfs and then opening them
            - render in browser !
                - See test.jsx <PDFViewer> and rendewr app cmp normally
        - [ ] zoom pdf renderer 100% (defaultScale={1} ? Sure i saw this working before)
        - [x] Issue when rendering and failing in bkg
            - Open new tab may fix issue
            - [ ] Capture errors from the pdf renderer (errror boundary) 
### Bugs:
    - <VIEW /> Look at rendering methods to fix this
    
### Design Review:
Most importantly skim over all of requirements and follow up with adjustments
    - [ ] Borders
    - [ ] Font sizes
    - [ ] Image Relative Sizing

### Threat Analysis:
    - [x] Background image
        -  absolute positioning for Text components over an image
    - Will this work on the web
    - [] reliably pulling content from my cv html / web ?
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
    - How to fit across various pages
        - [x] Has built in page breaks wrapper engine 