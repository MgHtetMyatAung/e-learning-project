import { useState } from "react";
import FAQCard from "../../card/FAQCard";

export default function FAQSession({ FAQ }) {
  const [selectedId, setSelectedId] = useState(1);

  const selectedHandel = (id) => {
    const activeId = id === selectedId ? null : id;
    setSelectedId(activeId);
  };

  return (
    <div className=" bg-white-1 rounded-[12px] tablet:py-[80px] tablet:px-[60px] p-[24px] gap-[3rem] grid desktop:grid-cols-5 grid-cols-1 mb-[3rem] desktop:mb-[6rem]">
      <div className="col-span-2">
        <div className="mb-[20px] ">
          <h1 className=" text-[30px] font-semibold">
            Frequently Asked Questions
          </h1>
          <p className=" text-[15px] text-grey-5">
            Still you have any questions? Contact our Team via
            support@skillbridge.com
          </p>
        </div>
        <div className="">
          <button className=" py-[10px] px-[15px] bg-white-1 rounded-[8px] shadow-sm">
            See All FAQ&#39;s
          </button>
        </div>
      </div>
      <div className="col-span-3 grid gap-[20px]">
        {FAQ &&
          FAQ.map((faq) => {
            return (
              <FAQCard
                key={faq.id}
                selectedId={selectedId}
                selectedHandel={selectedHandel}
                {...faq}
              />
            );
          })}
      </div>
    </div>
  );
}
