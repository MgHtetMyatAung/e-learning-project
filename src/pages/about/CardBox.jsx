import { Crown, FaceMask, Medal, ThunderSign } from "../../assets/icons";
import Card from "./Card";

/* eslint-disable react/prop-types */
const CardBox = ({ heading, content, content2 }) => {
  return (
    <div>
      <h2 className="pb-3 text-3xl font-normal tracking-wide ">{heading}</h2>
      <p className="text-grey-4">{content}</p>
      <p>{content2}</p>
      <div className="grid gap-5 py-12 tablet:grid-cols-2">
        <Card
          img={
            <img
              src={Crown}
              alt="crown icon"
              className="p-2 border border-orange-4 bg-orange-3 w-[2.5rem] mb-5"
            />
          }
          isEdit={true}
          heading={"Trusted by Thousands"}
          content={
            "We have successfully served thousands of students, helping them unlock their potential and achieve their career goals."
          }
        />
        <Card
          img={
            <img
              src={Medal}
              alt="medal icon"
              className="py-2 px-3 border border-orange-4 bg-orange-3 w-[2.7rem] mb-5"
            />
          }
          isEdit={true}
          heading={"Award-Winning Courses"}
          content={
            "Our courses have received recognition and accolades in the industry for their quality, depth of content, and effective teaching methodologies."
          }
        />
        <Card
          img={
            <img
              src={FaceMask}
              alt="face mask icon"
              className="p-2 border border-orange-4 bg-orange-3 w-[2.7rem] mb-5"
            />
          }
          isEdit={true}
          heading={"Positive Student Feedback"}
          content={
            "We take pride in the positive feedback we receive from our students, who appreciate the practicality and relevance of our course materials."
          }
        />
        <Card
          img={
            <img
              src={ThunderSign}
              alt="thunder sign icon"
              className="py-2 px-3 border border-orange-4 bg-orange-3 w-[2.6rem] mb-5"
            />
          }
          isEdit={true}
          heading={"Industry Partnership"}
          content={
            "We have established strong partnerships with industry leaders, enabling us to provide our students with access to the latest tools and technologies"
          }
        />
      </div>
    </div>
  );
};

export default CardBox;
