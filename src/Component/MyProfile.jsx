import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const MyProfile = () => {
  const { user, updateUser, setUser } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    if (user) {
      setName(user.displayName || "");
      setPhotoURL(user.photoURL || "");
    }
  }, [user]);

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    if (!user) {
      toast.error("No user found. Please log in first.");
      return;
    }

    setLoading(true);

    updateUser({ displayName: name, photoURL })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL });
        toast.success("Profile updated successfully!");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Profile update failed!");
      })
      .finally(() => setLoading(false));
  };

  
  if (!user) {
    return (
      <div className="min-h-screen flex justify-center items-center text-xl text-red-500">
        No user found. Please login first.
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 bg-[#f8f5ef] flex justify-center items-start">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-purple-700">
          My Profile
        </h2>

        {/* Avatar */}
        <div className="flex flex-col items-center mb-6">
          <img
            src={user.photoURL || " "}
            alt={user.displayName || "User"}
            className="w-28 h-28 rounded-full border-2 border-purple-400 mb-2"
          />
          <h3 className="text-xl font-semibold">{user.displayName || "User"}</h3>
          <p className="text-gray-500">{user.email}</p>
        </div>

        <form onSubmit={handleUpdateProfile} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Full Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your full name"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Photo URL</label>
            <input
              type="url"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              placeholder="https://example.com/photo.jpg"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            disabled={loading}
          >
            {loading ? "Saving..." : "Save Changes"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
