import { useState } from "react";
import axios from "axios";

export default function Dasma() {
  const [files, setFiles] = useState([]);
  const [status, setStatus] = useState("");
  const [uploadedUrls, setUploadedUrls] = useState([]);

  const handleFileChange = (e) => {
    setFiles(Array.from(e.target.files));
  };
  const handleUpload = async () => {
    if (files.length === 0) {
      setStatus("Please select images to upload.");
      return;
    }

    const clientId = "51eabf8f61811b7";
    setStatus("Uploading...");
    const uploaded = [];

    for (const file of files) {
      if (file.size > 10 * 1024 * 1024) {
        setStatus(`File ${file.name} is too large (max 10MB).`);
        return;
      }

      const formData = new FormData();
      formData.append("image", file);

      try {
        const response = await fetch("https://api.imgur.com/3/image", {
          method: "POST",
          headers: {
            Authorization: `Client-ID ${clientId}`,
          },
          body: formData,
        });

        const result = await response.json();

        if (!response.ok) {
          throw new Error(result?.data?.error || "Upload failed");
        }

        uploaded.push(result.data.link);
      } catch (error) {
        console.error("Upload failed:", error);
        setStatus("Failed to upload one or more images.");
        return;
      }
    }

    setUploadedUrls(uploaded);
    setStatus("Upload complete!");
    setFiles([]);
  };

  return (
    <div>
      <h1>Dasma</h1>
      <p>Upload images (no backend):</p>

      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleFileChange}
      />
      <br />
      <button onClick={handleUpload}>Upload to Imgur</button>
      <p>{status}</p>

      {uploadedUrls.length > 0 && (
        <div>
          <h3>Uploaded Images:</h3>
          {uploadedUrls.map((url, idx) => (
            <img
              key={idx}
              src={url}
              alt={`Uploaded ${idx}`}
              width={150}
              style={{ margin: 8 }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
