// import { BellAlertIcon,PuzzlePieceIcon,BookOpenIcon,InboxStackIcon,HandThumbUpIcon,SparklesIcon,UserGroupIcon,ShieldCheckIcon } from "@heroicons/react/24/solid";

import { Button } from "../../components/button";
import CardBox from "./CardBox";
import CardBox2 from "./CardBox2";

export default function AboutUsPage() {
  return (
    <div className="container mx-auto ">
      <div className="flex flex-col gap-6 py-20 tablet:gap-12 tablet:flex-row tablet:items-center">
        <h2 className="tablet:w-[50%] text-3xl font-semibold tracking-wide ">
          About Skillbridge
        </h2>
        <p className="tablet:w-[50%] text-grey-4">
          Welcome to our platform, where we are passionate about empowering
          individuals to master the world of design and development. We offer a
          wide range of online courses designed to equip learners with the
          skills and knowledge needed to succeed in the ever-evolving digital
          landscape.
        </p>
      </div>
      <div className="py-8">
        <CardBox
          heading={"Achievements"}
          content={
            "Our commitment to excellence has led us to achieve significant milestones along our journey. Here are some of our notable achievements"
          }
          content2={""}
        />
      </div>
      <div className="py-8">
        <CardBox2
          heading={"Our Goals"}
          content={
            "At SkillBridge, our goal is to empower individuals from all backgrounds to thrive in the world of design and development. We believe that education should be accessible and  transformative, enabling learners to pursue their passions and make a meaningful impact."
          }
          content2={"Through our carefully crafted courses, we aim to"}
        />
      </div>
      <div className="p-10 mb-16 tablet:items-center tablet:justify-between tablet:flex bg-white-1">
        <div className="mb-8 tablet:mb-0">
          <p className="text-3xl font-semibold max-w-[80%] pb-3 tablet:pb-0 ">
            <span className=" text-orange-8">Together</span>, let's shape the
            future of digital innovation
          </p>
          <p className="text-grey-4">
            Join us on this exciting learning journey and unlock your potential
            in design and development.
          </p>
        </div>
        <Button label={"Join Now"} className={" bg-orange-8 text-white-1"} />
      </div>
    </div>
  );
}
