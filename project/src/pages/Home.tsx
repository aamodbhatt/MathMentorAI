import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Camera, Upload, Brain } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Solve Math Problems Instantly
        </h1>
        <p className="text-xl text-gray-600">
          Upload or capture your math problems and get step-by-step solutions powered by AI
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-center mb-4">
            <Upload className="h-12 w-12 text-indigo-600" />
          </div>
          <h2 className="text-xl font-semibold text-center mb-2">Upload Image</h2>
          <p className="text-gray-600 text-center">
            Upload a photo of your handwritten math problem
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-center mb-4">
            <Camera className="h-12 w-12 text-indigo-600" />
          </div>
          <h2 className="text-xl font-semibold text-center mb-2">Take Photo</h2>
          <p className="text-gray-600 text-center">
            Use your camera to capture the math problem
          </p>
        </div>
      </div>

      <div className="text-center">
        <button
          onClick={() => navigate('/solve')}
          className="bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-indigo-700 transition-colors"
        >
          Start Solving
        </button>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold text-center mb-8">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Camera className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="font-semibold mb-2">Capture or Upload</h3>
            <p className="text-gray-600">Take a photo or upload an image of your math problem</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Brain className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="font-semibold mb-2">AI Processing</h3>
            <p className="text-gray-600">Our AI analyzes and solves your problem</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <svg className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Get Solution</h3>
            <p className="text-gray-600">Receive detailed step-by-step solutions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;