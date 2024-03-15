import {LOGOURL} from "../utils/Constant"
const Header = () => {
  return (
    <div className="absolute z-10">
      <img src={LOGOURL} alt="logo" className="w-44" />
    </div>
  );
};

export default Header;
