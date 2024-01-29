import React from 'react';
import Button from '@mui/material/Button';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import CircularProgress from '@mui/material/CircularProgress';

export default function UploadButton({ uploading, success, handleFileUpload, renameToggleAction, tooManyUploads }) {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      style={{ cursor: 'pointer' }}
    >
      <input
        type="file"
        accept=".pdf"
        style={{ display: 'none' }}
        id="file-input"
        onChange={handleFileChange}
        disabled={tooManyUploads}
      />
      <label htmlFor="file-input">
        <Button
          variant="contained"
          component="span"
          className='avro'
          style={{
            fontSize: '20px',
            textTransform: 'none',
            borderRadius: '25px',
            backgroundColor: "#154367",
            fontFamily: "Arvo", 
            fontWeight: "700"
          }}
          startIcon={
            success ? (
              <CheckCircleOutlineOutlinedIcon />
            ) : (success === false || tooManyUploads) ? (
              <ErrorOutlineOutlinedIcon />
            ) : uploading ? (
              <CircularProgress size={20} thickness={5.5} style={{ color: 'white' }} />
            ) : (
              <UploadFileIcon />
            )
          }
        >
          {success
            ? 'Downloaded PDF'
            : tooManyUploads
            ? `Hey! Too many requests!`
            : success === false
            ? 'Something went wrong!'
            : uploading
            ? 'Converting PDF'
            : `${renameToggleAction} PDF`}
        </Button>
        <br />
      </label>
    </div>
  );
}
