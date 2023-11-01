import ReactDOM from 'react-dom/client';
import { PDFViewer } from '@react-pdf/renderer';
import Test from './Components/Test';
import React from 'react';
import App from './App.jsx';

// const App = () => (
//   <PDFViewer style={{ width: '100%', height: '100vh' }} >
//     <Test />
//   </PDFViewer>
// );

// export default App;


// ReactDOM.createRoot(document.getElementById('root')).render(<App />);

// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// ReactPDF.render(<App />);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
