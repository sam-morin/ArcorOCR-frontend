import { Tooltip } from '@mui/material';
import '../App.css';
import pdfLogo from './pdf_128.png';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export default function Header ({removeToggled}) {
    return (
        <header>
            <div style={{ paddingBottom: "0px" }}>
                <div>
                    <span className='barlow' style={{ fontSize: "70px", color: "#154367" }}>
                        <img src={pdfLogo} width={55} /> Arcor<span style={{color: "#F05642"}}>OCR</span>
                        <span><sup style={{ fontSize: "14px", verticalAlign: "top", marginTop: "15px" }}>BETA</sup></span>
                        <span style={{marginLeft: "-28px"}}><Tooltip title="This site was created using React.js, Gunicorn and OCRmyPDF. It was also created to prove a point. The backend took less than 30 min.. I've already begun working on a Go implmentation. It currently runs on 16 cores with 24GB of RAM."><InfoOutlinedIcon /></Tooltip></span>
                    </span>
                </div>
                <div style={{marginTop: "-15px"}}>
                    <span className='quicksand' style={{ fontSize: "16px" }}>
                        <i>conveniently and securely apply a text layer to a PDF</i>
                    </span>
                </div>
            </div>
            {removeToggled ? (
                <div style={{fontFamily: "Quicksand"}}>
                    <p>1. Upload a PDF that is searchable</p>
                    <p>2. Get a PDF back that isn't searchable</p>
                </div>
            )  : (
                <div style={{fontFamily: "Quicksand"}}>
                    <p>1. Upload a PDF that isn't searchable</p>
                    <p>2. Get a PDF back that is searchable</p>
                </div>
            )}
        </header>
    )
}