
import React, { useState } from 'react';

function UploadPage() {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);
    await fetch('/api/upload/', {
      method: 'POST',
      body: formData,
    });
  };

  return (
    <div>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload PDF</button>
    </div>
  );
}

export default UploadPage;
