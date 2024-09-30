import { useSelector } from "react-redux";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  deleteUserStart,
  deleteUserFailure,
  deleteUserSuccess,
  signOut,
} from "../redux/user/userSlice";
import { fadeContainer, slideUpItem, scaleButton } from "../animations/variants";

export default function Profile() {
  const dispatch = useDispatch();
  const fileRef = useRef(null);
  const [image, setImage] = useState(undefined);
  const [imagePercent, setImagePercent] = useState(0);
  const [imageError, setImageError] = useState(false);
  const [formData, setFormData] = useState({});
  const [updateSuccess, setUpdateSuccess] = useState(false);

  const { currentUser, loading, error } = useSelector((state) => state.user);

  useEffect(() => {
    if (image) {
      handleFileUpload(image);
    }
  }, [image]);

  const handleFileUpload = async (image) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + image.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImagePercent(Math.round(progress));
      },
      (error) => {
        setImageError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFormData({ ...formData, profilePicture: downloadURL });
        });
      }
    );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateUserStart());
      const res = await fetch(`/backend/user/update/${currentUser._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(updateUserFailure(data));
        return;
      }
      dispatch(updateUserSuccess(data));
      setUpdateSuccess(true);
    } catch (error) {
      dispatch(updateUserFailure(error));
    }
  };

  const profilePicture = formData.profilePicture || currentUser.profilePicture;

  const handleDeleteAccount = async () => {
    try {
      dispatch(deleteUserStart());
      const res = await fetch(`/backend/user/delete/${currentUser._id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(deleteUserFailure(data));
        return;
      }
      dispatch(deleteUserSuccess(data));
    } catch (error) {
      dispatch(deleteUserFailure(error));
    }
  };

  const handleSignOut = async () => {
    try {
      await fetch('/backend/auth/signout');
      dispatch(signOut());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <motion.div
      className="p-6 max-w-lg w-full sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-5/12 mx-auto bg-[#1c1c1b] rounded-lg shadow-lg"
      variants={fadeContainer}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="text-3xl font-bold text-center my-7 text-[#f7d185] sm:text-2xl"
        variants={slideUpItem}
      >
        Profile
      </motion.h1>
      <motion.form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
        variants={fadeContainer}
      >
        <input
          type="file"
          ref={fileRef}
          hidden
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <motion.img
          src={profilePicture}
          alt="profile"
          className="h-24 w-24 sm:h-20 sm:w-20 md:h-28 md:w-28 lg:h-32 lg:w-32 self-center cursor-pointer rounded-full object-cover mt-2 border-2 border-[#f7d185]"
          onClick={() => fileRef.current.click()}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
        />
        <p className="text-sm self-center text-[#E0E0E0]">
          {imageError ? (
            <span className="text-red-400">
              Error uploading image (file size must be less than 2 MB)
            </span>
          ) : imagePercent > 0 && imagePercent < 100 ? (
            <span>{`Uploading: ${imagePercent} %`}</span>
          ) : imagePercent === 100 ? (
            <span className="text-green-500">Image uploaded successfully</span>
          ) : (
            ""
          )}
        </p>
        <motion.input
          defaultValue={currentUser.username}
          type="text"
          id="username"
          placeholder="Username"
          className="bg-[#121212] text-[#E0E0E0] rounded-lg p-3 border border-[#f7d185] w-full sm:p-2 md:p-3"
          onChange={handleChange}
          variants={slideUpItem}
        />
        <motion.input
          defaultValue={currentUser.email}
          type="email"
          id="email"
          placeholder="Email"
          className="bg-[#121212] text-[#E0E0E0] rounded-lg p-3 border border-[#f7d185] w-full sm:p-2 md:p-3"
          onChange={handleChange}
          variants={slideUpItem}
        />
        <motion.input
          type="password"
          id="password"
          placeholder="Password"
          className="bg-[#121212] text-[#E0E0E0] rounded-lg p-3 border border-[#f7d185] w-full sm:p-2 md:p-3"
          onChange={handleChange}
          variants={slideUpItem}
        />
        <motion.button
          className="text-white p-3 rounded-lg bg-gradient-to-r from-green-400 to-green-700 hover:opacity-90 disabled:opacity-50 w-full sm:p-2 md:p-3"
          disabled={loading}
          variants={scaleButton}
          whileHover="hover"
        >
          {loading ? "Loading..." : "Update Profile"}
        </motion.button>
      </motion.form>
      <motion.div
        className="flex flex-col sm:flex-row justify-between mt-4 gap-2"
        variants={slideUpItem}
      >
        <span
          onClick={handleDeleteAccount}
          className="text-red-500 cursor-pointer bg-[#262222] my-4 rounded-lg p-2 font-semibold flex-1 text-center mx-1"
        >
          Delete Account
        </span>
        <span
          onClick={handleSignOut}
          className="text-red-500 cursor-pointer bg-[#262222] my-4 rounded-lg p-2 font-semibold flex-1 text-center mx-1"
        >
          Sign Out
        </span>
      </motion.div>
      <motion.p className="text-red-400 mt-5 text-center" variants={slideUpItem}>
        {error && "Something went wrong"}
      </motion.p>
      <motion.p className="text-green-500 mt-5 text-center" variants={slideUpItem}>
        {updateSuccess && "User is updated successfully"}
      </motion.p>
    </motion.div>
  );
}
