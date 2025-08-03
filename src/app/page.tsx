import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          🚀 Project Unicorn AWS
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Phase 2: AWS + Docker CI/CD Learning Journey
        </p>
        <div className="text-sm text-gray-500">
          <p>Environment: {process.env.NODE_ENV}</p>
          <p>Deployed via: AWS ECS + GitHub Actions</p>
        </div>
      </div>
    </div>
  );
}