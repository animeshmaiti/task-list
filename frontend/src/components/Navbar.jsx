import { useAuth } from "./context/authContext";

export const Navbar = () => {
  const {Logout,authUser}=useAuth();
  const fullName = authUser?.fullName || "User";
  const logout=authUser?'Logout':'Login';
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <p className="justify-between">{fullName}</p>
            </li>
            <li>
              <p onClick={Logout}>{logout}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
