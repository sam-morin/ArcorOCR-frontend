import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import UploadButton from './components/UploadButton';
import Footer from './components/Footer';
import Toggle from './components/Toggle';
import { Grid } from '@mui/material';

const uploadEndpointRoot = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5002/upload';

// const isProduction = process.env.NODE_ENV === 'production';
// const uploadEndpointRoot = isProduction ? 'https://arcorocr.com/upload' : 'http://localhost:5002/upload';

// // const uploadEndpointRoot = 'https://arcorocr.com/upload'
// const uploadEndpointRoot = 'http://localhost:5002/upload'

function App() {
  const [uploading, setUploading] = useState(false);
  const [success, setSuccess] = useState();
  const [removeToggle, setRemoveToggle] = useState(false);
  const [renameToggle, setRenameToggle] = useState(false);
  const [newName, setNewName] = useState('');
  const [currentName, setCurrentName] = useState('');

  const uploadEndpoint = uploadEndpointRoot + (removeToggle ? '/remove' : '')

  // const handleFileUploadStage = async (file) => {
  //   setCurrentName(file.name)
  // }

  const handleFileUpload = async (file) => {
    setUploading(true);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch(uploadEndpoint, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const blob = await response.blob();

        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = newName !== '' ? `${newName}.pdf` : (`${file.name.split('.')[0]}_ArcorOCR${removeToggle ? '-REMOVED' : ''}.pdf`);
        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);

        setSuccess(true);
        setTimeout(() => setSuccess(), 7000);
      } else {
        console.error('Error uploading file:', response.statusText);
        setSuccess(false);
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      setSuccess(false);
    }

    setUploading(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      handleFileUpload(file)
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleToggle = () => {
    setRemoveToggle(!removeToggle)
  }

  const handleToggleRename = () => {
    setRenameToggle(!renameToggle)
  }

  return (
    <div className="App" onDrop={handleDrop} onDragOver={handleDragOver}>
      <div className='App-inner'>
        <Header removeToggled={removeToggle} />
        {/* <div style={{paddingBottom: '10px', display: 'flex', justifyContent: "center"}}>
          <Toggle label={"Remove text layer from PDF"} handleToggle={handleToggle} removeToggled={removeToggle} tooltipTitle={`${removeToggle ? 'Disable this to perfrom OCR and apply a text layer to the original PDF' : 'Enable this to strip text from PDF with existing text layer'}`} />
        </div> */}
        <Grid container spacing={5}>
          <Grid item sx={6}>
            <div style={{paddingBottom: '10px', display: 'flex', justifyContent: "center"}}>
              <Toggle label={"Remove text layer from PDF"} handleToggle={handleToggle} removeToggled={removeToggle} tooltipTitle={`${removeToggle ? 'Disable this to perfrom OCR and apply a text layer to the original PDF' : 'Enable this to strip text from PDF with existing text layer'}`} />
            </div>
          </Grid>
          <Grid item sx={6}>
            <div style={{paddingBottom: "10px", display: 'flex', justifyContent: "center"}}>
              <Toggle label={"Rename PDF"} handleToggle={handleToggleRename} removeToggled={renameToggle} />
            </div>
          </Grid>
        </Grid>
        {renameToggle && (
            <>
              <div style={{paddingBottom: "10px", display: 'flex', justifyContent: "center", width: "100%"}}>
                <input 
                  type='text'
                  value={newName === '' ? currentName : newName}
                  onChange={(e) => setNewName(e.target.value)}
                  style={{
                    backgroundColor: "rgb(186, 222, 255)",
                    fontSize: "16px",
                    borderRadius: "10px",
                    border: "2px solid #154367",
                    padding: "6.5px",
                    fontFamily: "Quicksand",
                    fontWeight: "bold",
                    width: "100%",
                    color: "#154367"
                  }}
                />
                <span style={{fontFamily: "Quicksand", fontSize: "22px", fontWeight: "bold"}}>.pdf</span>
              </div>
            </>
          )}
          <UploadButton
            uploading={uploading}
            success={success}
            renameToggle={renameToggle}
            renameToggleAction={'Upload'}
            handleFileUpload={handleFileUpload}
          />
        <Footer />
      </div>
    </div>
  );
}

export default App;
