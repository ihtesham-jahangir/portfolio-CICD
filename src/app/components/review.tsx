"use client"
import React, { useState, useEffect } from "react";

// Define the type for a review
interface Review {
  name: string;
  review: string;
  stars: number;
  image: string;
  websiteName: string;
  websiteLink: string;
}

const Reviews = () => {
  // Use the Review interface for the reviews state
  const [reviews, setReviews] = useState<Review[]>(() => {
    // Load saved reviews from local storage
    const savedReviews = localStorage.getItem("reviews");
    return savedReviews ? JSON.parse(savedReviews) : [];
  });

  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [stars, setStars] = useState(0);
  const [image, setImage] = useState<string>("");
  const [websiteName, setWebsiteName] = useState("");
  const [websiteLink, setWebsiteLink] = useState("");

  useEffect(() => {
    // Save reviews to local storage when reviews array changes
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [reviews]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setImage(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newReview: Review = {
      name,
      review,
      stars,
      image,
      websiteName,
      websiteLink,
    };

    setReviews([...reviews, newReview]);

    // Reset form fields
    setName("");
    setReview("");
    setStars(0);
    setImage("");
    setWebsiteName("");
    setWebsiteLink("");
  };

  const handleResetReviews = () => {
    localStorage.removeItem("reviews");
    setReviews([]);
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-white">
      <h2 className="text-4xl font-bold text-center mb-8">Share Your Experience</h2>

      {/* Form Section */}
      <form onSubmit={handleSubmit} className="mb-12 space-y-4 bg-white p-6 rounded-lg shadow-md">
        <div>
          <label className="block text-lg font-semibold mb-1">Name</label>
          <input
            type="text"
            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-lg font-semibold mb-1">Review</label>
          <textarea
            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-lg font-semibold mb-1">Star Rating</label>
          <div className="flex items-center">
            <input
              type="range"
              min="0"
              max="5"
              step="0.1"
              className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none"
              value={stars}
              onChange={(e) => setStars(parseFloat(e.target.value))}
            />
            <span className="ml-4 text-lg font-semibold">{stars.toFixed(1)}</span>
          </div>
        </div>

        <div>
          <label className="block text-lg font-semibold mb-1">Upload Image</label>
          <input
            type="file"
            accept="image/*"
            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none"
            onChange={handleImageUpload}
          />
        </div>

        <div>
          <label className="block text-lg font-semibold mb-1">Website Name</label>
          <input
            type="text"
            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={websiteName}
            onChange={(e) => setWebsiteName(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-lg font-semibold mb-1">Website Link</label>
          <input
            type="url"
            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={websiteLink}
            onChange={(e) => setWebsiteLink(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Submit Review
        </button>

        <button
          type="button"
          onClick={handleResetReviews}
          className="bg- text-white px-4 py-2 rounded-lg mt-4 hover: focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Reset Reviews
        </button>
      </form>

      {/* Reviews Section */}
      <div className="flex justify-center space-x-8">
        {reviews.map((review, index) => (
          <div key={index} className="text-center max-w-xs">
            <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-2 border-gray-300">
              {review.image && (
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            <div className="mt-6">
              <p className="text-xl font-semibold">{review.name}</p>
              <p className="text-gray-600">{`⭐`.repeat(Math.round(review.stars))}</p>
              <p className="mt-4 text-gray-700">{review.review}</p>
              {review.websiteName && (
                <p className="mt-2 text-gray-800">
                  Website:{" "}
                  <a
                    href={review.websiteLink}
                    className="text-indigo-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {review.websiteName}
                  </a>
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
