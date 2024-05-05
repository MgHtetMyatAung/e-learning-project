import { Alert, Bag, Book, HashTag } from "../../assets/icons";
import Card from "./Card";

/* eslint-disable react/prop-types */
const CardBox = ({ heading, content, content2 }) => {
  return (
    <div>
      <h2 className="pb-3 text-3xl font-normal tracking-wide ">{heading}</h2>
      <p className="text-grey-4">{content}</p>
      <p className="text-grey-4">{content2}</p>
      <div className="grid gap-5 py-12 tablet:grid-cols-2">
        <Card
          img={
            <img
              src={Bag}
              alt="bag icon"
              className="py-2 px-3 border border-orange-4 bg-orange-3 w-[2.5rem] mb-5"
            />
          }
          isEdit={true}
          heading={"Provide Practical Skills"}
          content={
            "We focus on delivering practical skills that are relevant to the current industry demands. Our courses are designed to equip learners with the knowledge and tools needed to excel in their chosen field."
          }
        />

        <Card
          img={
            <img
              src={Book}
              alt="bag icon"
              className="py-2 px-3 border border-orange-4 bg-orange-3 w-[2.6rem] mb-5"
            />
          }
          isEdit={true}
          heading={"Foster Creative Problem-Solving"}
          content={
            "We encourage creative thinking and problem-solving abilities, allowing our students to tackle real-world challenges with confidence and innovation."
          }
        />
        <Card
          img={
            <img
              src={HashTag}
              alt="hash tag icon"
              className="p-2  border border-orange-4 bg-orange-3 w-[2.5rem] mb-5"
            />
          }
          isEdit={true}
          heading={"Promote Collaboration and Community"}
          content={
            "We believe in the power of collaboration and peer learning. Our platform fosters a supportive and inclusive community where learners can connect, share insights, and grow together."
          }
        />
        <Card
          img={
            <img
              src={Alert}
              alt="alert icon"
              className="p-2  border border-orange-4 bg-orange-3 w-[2.6rem] mb-5"
            />
          }
          isEdit={true}
          heading={"Stay Ahead of the Curve"}
          content={
            "The digital landscape is constantly evolving, and we strive to stay at the forefront of industry trends. We regularly update our course content to ensure our students receive the latest knowledge and skills."
          }
        />
      </div>
    </div>
  );
};

export default CardBox;
