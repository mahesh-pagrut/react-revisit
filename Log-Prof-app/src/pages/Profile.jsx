import React, { useEffect, useState } from "react";
import { useUser } from "../context/UserContext";
import uploadImage from "../services/imageUpload";
import { createUser, updateUser } from "../services/crudApi";

const Profile = () => {
  const { user, setUser } = useUser();

  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [image, setImage] = useState("");
  const [isNewUser, setIsNewUser] = useState(true);
  const [loading, setLoading] = useState(false);

  // If no user in context, show loading screen
  if (!user) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-lg text-gray-700">Loading user data...</p>
      </div>
    );
  }

  // Reset form when user context changes
  useEffect(() => {
    if (!user) return;

    const isExisting = Boolean(user._id);
    setIsNewUser(!isExisting);

    setName(isExisting ? user.name || "" : "");
    setBio(isExisting ? user.bio || "" : "");
    setImage(isExisting ? user.image || "" : "");
  }, [user]);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setLoading(true);
    const imageUrl = await uploadImage(file);
    setImage(imageUrl);
    setLoading(false);
  };

  const handleSave = async (e) => {
    e.preventDefault();

    const updateData = {
      name,
      email: user.email,
      bio,
      image,
    };

    try {
      if (isNewUser) {
        const newUser = await createUser(updateData);
        setUser(newUser); // This will trigger useEffect and refill form
        alert("Profile created successfully!");
      } else {
        await updateUser(user._id, updateData);
        setUser({ ...user, ...updateData });
        alert("Profile updated successfully!");
      }
    } catch (error) {
      console.log("save error", error);
      alert("Something went wrong while saving.");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 px-4">
      <form
        onSubmit={handleSave}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold mb-4 text-purple-700 text-center">
          Profile Page
        </h2>

        <label className="block mb-2 font-medium">Name</label>
        <input
          className="w-full border px-3 py-2 rounded mb-4"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label className="block mb-2 font-medium">Email</label>
        <input
          className="w-full border px-3 py-2 rounded mb-4 bg-gray-100"
          value={user.email}
          readOnly
        />

        <label className="block mb-2 font-medium">Bio</label>
        <textarea
          className="w-full border px-3 py-2 rounded mb-4"
          rows="3"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />

        <label className="block mb-2 font-medium">Profile Picture</label>
        {image && (
          <img
            src={image}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover mb-2"
          />
        )}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="mb-4"
        />
        {loading && (
          <p className="text-sm text-blue-500 mb-2">Uploading image...</p>
        )}

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition"
        >
          Save
        </button>

        <button
          onClick={() => {
            setUser(null);
            window.location.href = "/";
          }}
          type="button"
          className="mt-4 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
        >
          Logout
        </button>
      </form>
    </div>
  );
};

export default Profile;
