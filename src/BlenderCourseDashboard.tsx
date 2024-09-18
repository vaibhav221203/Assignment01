// src/BlenderCourseDashboard.tsx

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Heart, ShoppingCart, Bell } from 'lucide-react';
import { addToCart, buyNow } from './courseActions';
import { RootState } from './store';

// Assume this selector is defined to access the course state
const selectCourseData = (state: RootState) => state.course;

const BlenderCourseDashboard = () => {
  const dispatch = useDispatch();
  const courseData = useSelector(selectCourseData);

  const handleAddToCart = () => {
    dispatch(addToCart(courseData.id));
  };

  const handleBuyNow = () => {
    dispatch(buyNow(courseData.id));
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <header className="p-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Quantum</div>
        <div className="flex space-x-4">
          <Heart className="w-6 h-6" />
          <ShoppingCart className="w-6 h-6" />
          <Bell className="w-6 h-6" />
        </div>
      </header>
      <main className="p-6 flex">
        <nav className="w-1/4 pr-6">
          <h2 className="text-xl mb-4">Course</h2>
          <ul className="space-y-2">
            <li>Course Introduction</li>
            <li>Downloading Blender</li>
            <li>Settings and Preferences</li>
            <li>Blender Interface</li>
          </ul>
          {/* Add more course sections here */}
        </nav>
        <section className="w-1/2 bg-gray-800 rounded-lg p-6">
          <div className="aspect-video bg-purple-700 rounded-lg mb-6 flex items-center justify-center">
            <div className="text-6xl">▶️</div>
          </div>
          <h1 className="text-3xl font-bold mb-2">BLENDER 3D FUNDAMENTALS</h1>
          <p className="mb-4">Learn The Basics of 3D in Blender with a Project Based Approach</p>
          <div className="flex items-center mb-4">
            <img src="/api/placeholder/40/40" alt="Ryan Curtis" className="rounded-full mr-2" />
            <span>Ryan Curtis</span>
          </div>
          <p className="mb-4">
            Welcome to the exciting world of Blender 3D! In this comprehensive course, we will dive into the fundamentals
            of Blender, equipping you with the essential knowledge and skills to create stunning 3D projects. Whether
            you're a beginner eager to explore the realm of 3D modeling or an experienced artist looking to expand your
            capabilities, this course will guide you every step of the way.
          </p>
          {/* Add more course details here */}
        </section>
        <aside className="w-1/4 pl-6">
          <div className="bg-gray-800 rounded-lg p-4 mb-4">
            <h3 className="text-2xl font-bold mb-2">$15.99</h3>
            <p className="line-through text-gray-500">$39.99</p>
            <span className="bg-blue-500 text-white px-2 py-1 rounded">60% off</span>
            <ul className="my-4 space-y-2">
              <li>✓ 56 hours on-demand video</li>
              <li>✓ 6 Articles</li>
              <li>✓ 8 Downloadable resources</li>
              <li>✓ Mobile version</li>
            </ul>
            <button
              onClick={handleAddToCart}
              className="w-full bg-blue-600 text-white py-2 rounded mb-2"
            >
              Add to cart
            </button>
            <button
              onClick={handleBuyNow}
              className="w-full bg-white text-blue-600 py-2 rounded"
            >
              Buy now
            </button>
          </div>
          {/* Add instructor info and suggested courses here */}
        </aside>
      </main>
    </div>
  );
};

export default BlenderCourseDashboard;
