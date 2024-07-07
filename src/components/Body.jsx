import React from "react";
import city from "../assets/images/city.jpg";
import side_arrow from "../assets/images/arrow.svg";
const BodyContent = () => (
  <main className="bg-gray-50 py-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Main Header Section */}
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold text-gray-900">
          Advance Your Career <span className="text-purple-600">Search</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Essential tools for job searching, resume submission, and finding the
          perfect candidate for your company.
        </p>
        <button className="mt-6 px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700">
          Get started!
        </button>
      </section>

      {/* Image with two boxes section */}
      <section className="relative py-8">
        <img
          src={city} // Replace with your image path
          alt="City view"
          className="w-full h-64 object-cover blur-sm"
        />
        <div className="absolute top-0 left-0 w-full h-full flex justify-around items-center px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow-lg p-6 w-64 text-center">
            <img src={side_arrow} className="h-25" alt="arrow"></img>
            <h2 className="text-xl font-semibold">LOREM IPSUM</h2>
          </div>
          <div className="bg-white shadow-lg p-6 w-64 text-center">
            <img src={side_arrow} className="h-25" alt="arrow"></img>
            <h2 className="text-xl font-semibold">LOREM IPSUM</h2>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="mt-12">
        <h2 className="text-3xl font-bold text-gray-900">Reviews</h2>
        <div className="mt-6 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((review) => (
            <div key={review} className="bg-white p-6 shadow-lg rounded-lg">
              <div className="flex items-center mb-4">
                {/* Replace with star rating component or SVG */}
                <div className="flex text-white-500">
                  <span className="text-yellow-500">
                    &#9733;&#9733;&#9733;&#9733;
                  </span>
                  &#9733;
                </div>
              </div>
              <h3 className="text-xl font-semibold">Review title</h3>
              <p className="mt-2 text-gray-600">Review body</p>
              <div className="mt-4 flex items-center">
                <img
                  src="path_to_reviewer_image.jpg" // Replace with reviewer's image path
                  alt="Reviewer"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <p className="text-gray-900 font-medium">Reviewer name</p>
                  <p className="text-gray-600 text-sm">Date</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  </main>
);

export default BodyContent;
