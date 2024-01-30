import '../App.css';
import pdfLogo from '../pdf_128.png';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Tooltip } from '@mui/material';

export default function Header ({removeToggled}) {
    return (
        <header>
            <div>
                <span className='barlow' style={{ fontSize: "70px", color: "#154367" }}>
                    <img src={pdfLogo} alt='PDF icon' width={55} /> Arcor<span style={{color: "#F05642"}}>OCR</span>
                    <span><sup style={{ fontSize: "14px", verticalAlign: "top", marginTop: "15px" }}>BETA</sup></span>
                    <span style={{marginLeft: "-28px"}}><Tooltip title={<span>ArcorOCR was developed with React.js, Gunicorn and OCRmyPDF. It was also created to prove a point - you can read more about that <a href='https://github.com/sam-morin/ArcorOCR-frontend' target='_blank' rel="noreferrer">here</a>.</span>}><InfoOutlinedIcon /></Tooltip></span>
                </span>
            </div>
            <div style={{marginTop: "-15px"}}>
                <span className='quicksand' style={{ fontSize: "16px" }}>
                    <i>conveniently and securely apply a text layer to a PDF</i>
                </span>
            </div>
            <div style={{fontFamily: "Quicksand"}}>
                <p>1. Upload a PDF that {removeToggled ? 'is' : "isn't"} searchable</p>
                <p>2. Get a PDF back that {removeToggled ? "isn't" : 'is'} searchable</p>
            </div>
        </header>
    )
}