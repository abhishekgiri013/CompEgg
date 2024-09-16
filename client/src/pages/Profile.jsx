import { useSelector } from "react-redux";
import { useRef, useState ,useEffect} from "react";
export default function Profile() {
  const fileRef = useRef(null);
  const [image, setImage] = useState(undefined);
  console.log(image);
  
  const { currentUser } = useSelector((state) => state.user);
  useEffect(() =>{
    if(image) {
        handleFileUpload(image);
    }
  },[image]);

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7 text-yellow-400 ">
        Profile
      </h1>
      <form className="flex flex-col gap-4">
        <input type="file" ref={fileRef} hidden accept="image/*" onChange={(e) => setImage(e.target.files[0])}/>
        <img
          src={currentUser.profilePicture}
          alt="profile"
          className="h-24 w-24 self-center cursor-pointer rounded-full object-cover mt-2"
          onClick={()=>fileRef.current.click()}
        />
        <input
          defaultValue={currentUser.username}
          type="text"
          id="username"
          placeholder="Username"
          className="bg-slate-100 rounded-lg p-3 text-black"
        />
        <input
          defaultValue={currentUser.email}
          type="text"
          id="email"
          placeholder="Email"
          className="bg-slate-100 rounded-lg p-3 text-black"
        />
        <input
          type="password"
          id="password"
          placeholder="Password"
          className="bg-slate-100 rounded-lg p-3 text-black"
        />
        <button className="text-[#f7fbf7] p-3 rounded-lg hover:opacity-90 disabled:opacity-75 bg-gradient-to-r from-green-400 to-green-700">
          Edit Profile
        </button>
      </form>
      <div className="flex justify-between">
        <span className="text-red-700 cursor-pointer bg-[#262222] my-4 rounded-lg p-2 font-semibold">
          Delete Account
        </span>
        <span className="text-red-700 cursor-pointer bg-[#262222] my-4 rounded-lg p-2 font-semibold">
          Sign Out{" "}
        </span>
      </div>
    </div>
  );
}
