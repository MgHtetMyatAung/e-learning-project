import {Link} from "react-router-dom";
export default function Button({ className, label }) {
  return (
    <button
        className={` tablet:text-lg px-[20px] py-[10px] tablet:px-[25px] tablet:py-[12px] rounded-lg ${className}`}
      >
      <Link to={`/${label.toLowerCase()}`}>
        {label}
      </Link>
      </button>
  );
}
