import { envlope } from "../../assets/icons";

export default function IconText({ icons = [], label }) {
  return (
    <div className="border border-white-4  rounded-lg p-5  flex flex-col items-center gap-5 shadow">
      <div className="flex gap-4">
        {icons.map((icon, i) => (
          <div key={i} className="p-3 bg-white-4 rounded">
            <img className="h-5 w-5" src={icon} alt="icon" />
          </div>
        ))}
      </div>
      <p className="text-grey-5">{label}</p>
    </div>
  );
}
