import { useRef } from 'react';

interface ImageUploadProps {
  images: File[];
  onImagesChange: (images: File[]) => void;
  maxImages?: number;
}

export default function ImageUpload({ images, onImagesChange, maxImages = 3 }: ImageUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const availableSlots = maxImages - images.length;
    const newImages = [...images, ...files.slice(0, availableSlots)];
    onImagesChange(newImages);
    if (inputRef.current) inputRef.current.value = '';
  };

  const removeImage = (index: number) => {
    const newImages = images.filter((_, i) => i !== index);
    onImagesChange(newImages);
  };

  const getUploadLabel = () => {
    if (images.length >= maxImages) return 'Maximum 3 images reached';
    if (images.length > 0) return `${images.length}/${maxImages} images selected`;
    return 'Choose images or drag & drop';
  };

  return (
    <div className="form-group-blue">
      <label>Upload Images (Optional - Max {maxImages})</label>
      <div className="file-upload-wrapper">
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          multiple
          className="file-input"
          onChange={handleFileChange}
          disabled={images.length >= maxImages}
          id="quoteImages"
        />
        <label htmlFor="quoteImages" className="file-upload-label">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M17 8L12 3L7 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 3V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>{getUploadLabel()}</span>
        </label>
        {images.length > 0 && (
          <div className="image-preview">
            {images.map((image, index) => (
              <div key={index} className="image-preview-item">
                <img src={URL.createObjectURL(image)} alt={`Preview ${index + 1}`} />
                <button
                  type="button"
                  className="remove-image"
                  onClick={() => removeImage(index)}
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
