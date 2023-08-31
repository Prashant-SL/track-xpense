import { Toaster, toast } from "react-hot-toast";

const Header = () => {
  const isLoggedIn = localStorage.getItem("token") ? true : false;

  return (
    <div className="flex mt-4 items-center">
      <div className="flex items-center px-4 w-4/5 ">
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
        <p
          className="cursor-pointer h-9 bg-primary-50 text-xs text-purple-800 px-4 pt-2 rounded-lg"
          onClick={() => {
            localStorage.clear();
            toast.success("Logged Out");
            window.location.href = "/login";
          }}
        >
          Logout
        </p>
      )}
      <Toaster />
    </div>
  );
};

export default Header;
