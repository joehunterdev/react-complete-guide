import { Document,Page } from '@react-pdf/renderer';
import Html from 'react-pdf-html';
//background-image: url(https://joehunter.es/img/code-bkg.jpg);
import ProfileImage from "../assets/image/cv-square.jpg";

const HtmlTest = () => {
    const html = `<html>
        <body>
            <style>
            .skills .page-header {
                height: 60vh;
                max-height: 1050px;
                padding: 0;
                color: #fff;
                position: relative;
                // background-position: center center;
                margin-bottom: 5%;
            }
            .content-center {
                text-align: center;
            }
            </style>
            <div className="page-header-row">
                <div className="cv-profile-image">
                    <img className="border-circle" src={ProfileImage}></img>
                    <div className="container">
                        <h1>Joe Hunter</h1>
                        <p className="cv-heading-subtitle">Web Developer</p>
                    </div>
                </div>
            </div>
        </body>
    </html>`;

    return (
        <Document>
            <Page>
                <Html>{html}</Html>
            </Page>
        </Document>    );

};

export default HtmlTest;
