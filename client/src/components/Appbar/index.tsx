import InputField from "components/blocks/InputField";
import { IAppBar } from "./type";
import { Navigate, useNavigate } from "react-router-dom";

const AppBar: React.FC<IAppBar> = ({ onChange, loggedUser }) => {
  const { first_name, last_name } = loggedUser && loggedUser;
  const navigate = useNavigate();

  function handleLogout(): void {
    navigate("/logout");
  }

  return (
    <div className="flex justify-between items-center mt-2 mx-6">
      <h1 className="text-[#1E56A0] text-[32px] font-semibold">Lumen &lt;/&gt;</h1>
      <div className="flex flex-row items-center gap-7">
        <InputField
          onChange={onChange}
          type="text"
          placeholder="Search docs..."
        />
        <div className="cursor-default w-24 h-24 rounded-full bg-gray-400 text-white text-xl font-semibold flex justify-center items-center">
          {first_name&&first_name}
        </div>
        <button
          onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default AppBar;
