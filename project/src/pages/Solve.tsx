import React, { useState, useRef } from 'react';
import Webcam from 'react-webcam';
import { Camera, Upload, X } from 'lucide-react';

const Solve = () => {
  const [showCamera, setShowCamera] = useState(false);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [solution, setSolution] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const webcamRef = useRef<Webcam>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const captureImage = React.useCallback(() => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      setCapturedImage(imageSrc);
      setShowCamera(false);
    }
  }, [webcamRef]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSolve = async () => {
    setLoading(true);
    // Simulate AI processing delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    setSolution("2x + 3 = 7\nStep 1: Subtract 3 from both sides\n2x = 4\nStep 2: Divide both sides by 2\nx = 2");
    setLoading(false);
  };

  const resetImages = () => {
    setCapturedImage(null);
    setUploadedImage(null);
    setSolution(null);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Solve Math Problem</h1>

      {!showCamera && !capturedImage && !uploadedImage && (
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <button
            onClick={() => setShowCamera(true)}
            className="flex flex-col items-center justify-center p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-all"
          >
            <Camera className="h-12 w-12 text-indigo-600 mb-4" />
            <span className="text-lg font-medium">Take Photo</span>
          </button>

          <button
            onClick={() => fileInputRef.current?.click()}
            className="flex flex-col items-center justify-center p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-all"
          >
            <Upload className="h-12 w-12 text-indigo-600 mb-4" />
            <span className="text-lg font-medium">Upload Image</span>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileUpload}
            />
          </button>
        </div>
      )}

      {showCamera && (
        <div className="relative">
          <Webcam
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            className="w-full rounded-xl shadow-lg"
          />
          <div className="flex justify-center gap-4 mt-4">
            <button
              onClick={captureImage}
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700"
            >
              Capture
            </button>
            <button
              onClick={() => setShowCamera(false)}
              className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {(capturedImage || uploadedImage) && (
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="relative">
            <img
              src={capturedImage || uploadedImage || ''}
              alt="Math problem"
              className="w-full rounded-lg"
            />
            <button
              onClick={resetImages}
              className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {!solution && (
            <button
              onClick={handleSolve}
              disabled={loading}
              className={`w-full mt-4 py-3 rounded-lg text-white font-medium ${
                loading ? 'bg-indigo-400' : 'bg-indigo-600 hover:bg-indigo-700'
              }`}
            >
              {loading ? 'Processing...' : 'Solve Problem'}
            </button>
          )}

          {solution && (
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-3">Solution:</h3>
              <pre className="bg-gray-50 p-4 rounded-lg whitespace-pre-wrap font-mono">
                {solution}
              </pre>
              <button
                onClick={resetImages}
                className="w-full mt-4 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 font-medium"
              >
                Solve Another Problem
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Solve;