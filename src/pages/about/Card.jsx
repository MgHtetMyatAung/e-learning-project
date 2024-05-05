/* eslint-disable react/prop-types */
const Card = ({ heading, content, isEdit, img }) => {
  return (
    <div className="space-y-2 p-7 bg-white-1">
      {isEdit && <>{img}</>}
      <h3 className="font-medium ">{heading}</h3>
      <p className="text-grey-4">{content}</p>
    </div>
  );
};

export default Card;
