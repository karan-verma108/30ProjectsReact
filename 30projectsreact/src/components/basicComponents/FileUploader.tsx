import { useState } from 'react';

export default function FileUploader(): JSX.Element {
  const [file, setFile]: [
    Blob | MediaSource | null,
    React.Dispatch<React.SetStateAction<Blob | MediaSource | null>>
  ] = useState<Blob | MediaSource | null>(null);

  const handleFileChange = (e: React.BaseSyntheticEvent) => {
    setFile(e.target.files[0]);
  };
  return (
    <div>
      <h1>Below you can upload your image</h1>
      <input
        type='file'
        placeholder='Choose a file'
        id='file'
        name='file'
        accept='image/*'
        onChange={handleFileChange}
      />

      {file && file !== null && (
        <img src={URL.createObjectURL(file)} alt='img' /> //URL.createObjectURL is used to create a path for this file
      )}
    </div>
  );
}
