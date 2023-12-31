import { LogIn } from "lucide-react";
import { Toaster, toast } from "react-hot-toast";

const Header = () => {
  const isLoggedIn = localStorage.getItem("token") ? true : false;

  const handleLogout = () => {
    localStorage.clear();
    toast.success("Logged Out");
    setTimeout(() => {
      window.location.href = "/";
    }, 1200);
  };

  return (
    <div className="flex bg-white mt-4 z-10 items-center">
      <div
        className="flex items-center px-4 w-4/5"
        onClick={() => (window.location.href = "/")}
      >
        <img
          src="/assets/TrackXpenseLogo.png"
          width="40px"
          className="rounded-50 border"
        />
        {isLoggedIn ? (
          <h2 className="text-left ml-3">
            Welcome!&nbsp;
            <p className="text-primary-600 first-letter:capitalize">
              {localStorage.getItem("username")?.toUpperCase()}
            </p>
          </h2>
        ) : (
          <p className="ml-2 -mt-1 text-primary-900">Track Xpense</p>
        )}
      </div>
      {isLoggedIn && (
        <div
          onClick={handleLogout}
          className="flex cursor-pointer h-9 -ml-4 bg-primary-50 px-2 items-center gap-x-2 rounded-lg"
        >
          <p className="text-xs text-purple-800">Logout</p>
          <LogIn className="w-4" color="#391599" />
        </div>
      )}
      <Toaster />
    </div>
  );
};

export default Header;
