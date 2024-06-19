import {
  envlope,
  facebook,
  linkin,
  Logo,
  phone,
  subtract,
  twitter,
} from "../../../assets/icons";
import Container from "../container/Container";

export default function Footer() {
  return (
    <footer className=" bg-white-1">
      <Container>
        <div className=" pt-[50px] desktop:pt-[100px] flex flex-col laptop:flex-row gap-[40px]">
          <div className=" w-full laptop:w-5/12">
            <img
              src={Logo}
              alt=""
              className=" w-[44px] h-[44px] desktop:w-[54px] desktop:h-[54px] "
            />
            <div className=" space-y-4 mt-[35px]">
              <div className=" flex items-center gap-2">
                <img src={envlope} alt="" className=" w-[24px] h-[24px]" />
                <span className=" text-grey-5 text-[15px] tablet:text-lg">
                  hello@skillbridge.com
                </span>
              </div>
              <div className=" flex items-center gap-2">
                <img src={phone} alt="" className=" w-[24px] h-[24px]" />
                <span className=" text-grey-5 text-[15px] tablet:text-lg">
                  +91 91813 23 2309
                </span>
              </div>
              <div className=" flex items-center gap-2">
                <img src={subtract} alt="" className=" w-[24px] h-[24px]" />
                <span className=" text-grey-5 text-[15px] tablet:text-lg">
                  Somewhere in the World
                </span>
              </div>
            </div>
          </div>
          <div className=" w-full laptop:w-7/12 grid grid-cols-2 tablet:grid-cols-3 gap-[30px] tablet:gap-[10px]">
            <div className=" space-y-3">
              <h3 className=" text-lg desktop:text-[20px] text-grey-7 font-semibold">
                Home
              </h3>
              <p className=" text-grey-4 text-sm tablet:text-base desktop:text-lg">
                Benefits
              </p>
              <p className=" text-grey-4 text-sm tablet:text-base desktop:text-lg">
                Our Courses
              </p>
              <p className=" text-grey-4 text-sm tablet:text-base desktop:text-lg">
                Our Testimonials
              </p>
              <p className=" text-grey-4 text-sm tablet:text-base desktop:text-lg">
                Our FAQ
              </p>
            </div>
            <div className=" space-y-3">
              <h3 className=" text-lg desktop:text-[20px] text-grey-7 font-semibold">
                About Us
              </h3>
              <p className=" text-grey-4 text-sm tablet:text-base desktop:text-lg">
                Company
              </p>
              <p className=" text-grey-4 text-sm tablet:text-base desktop:text-lg">
                Achievements
              </p>
              <p className=" text-grey-4 text-sm tablet:text-base desktop:text-lg">
                Our Goals
              </p>
            </div>
            <div className=" space-y-3 col-span-2 tablet:col-span-1">
              <h3 className=" text-lg desktop:text-[20px] text-grey-7 font-semibold">
                Social Profiles
              </h3>
              <div className=" flex gap-3">
                <div className=" w-[44px] h-[44px] tablet:w-[52px] tablet:h-[52px] rounded-lg bg-white-2 border border-white-4 grid place-items-center">
                  <img
                    src={facebook}
                    alt=""
                    className=" w-[20px] target:w-[24px] "
                  />
                </div>
                <div className=" w-[44px] h-[44px] tablet:w-[52px] tablet:h-[52px] rounded-lg bg-white-2 border border-white-4 grid place-items-center">
                  <img
                    src={twitter}
                    alt=""
                    className=" w-[20px] target:w-[24px] "
                  />
                </div>
                <div className=" w-[44px] h-[44px] tablet:w-[52px] tablet:h-[52px] rounded-lg bg-white-2 border border-white-4 grid place-items-center">
                  <img
                    src={linkin}
                    alt=""
                    className=" w-[20px]  target:w-[24px] "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full h-[1px] bg-white-4 tablet:bg-white-3 my-[25px] desktop:my-[50px]"></div>
        <div className=" pb-[30px]">
          <p className=" text-center text-grey-3 text-sm tablet:text-lg">
            © 2023 Skillbridge. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
