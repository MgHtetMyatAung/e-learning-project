export default function Hero({ title, content }) {
  return (
    <div className="flex justify-center laptop:items-center  laptop:flex-row flex-col  desktop:gap-[100px] laptop:gap-[80px] gap-[16px]  border-b border-b-white-5 desktop:pb-[50px]  laptop:pb-[40px]  pb-[30px] laptop:my-[80px] my-[50px]">
      <p className="flex-1 text-grey-7 font-[600] desktop:text-[48px] laptop:text-[38px] text-[28px]  desktop:leading-[72px] laptop:leading-[57px] leading-[42px] ">
        {title}
      </p>
      <p className="flex-1 desktop::text-justify text-grey-4 font-[400] desktop:text-[18px] laptop:text-[16px] text-[14px] desktop:leading-[27px] laptop:leading-[24px] leading-[21px]">
        {content}
      </p>
    </div>
  );
}
