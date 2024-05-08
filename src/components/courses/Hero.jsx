export default function Hero({title,content}){
    return (
        <div className="flex justify-center laptop:items-center mx-auto laptop:flex-row laptop:py-24 py-12 gap-5 flex-col border-b border-b-white-5">
          <p className="flex-1 text-grey-7 laptop:text-[42px] font-[600] laptop:leading-[72px]   text-[28px] leading-[42px] ">
            {title}
          </p>
          <p className="flex-1 text-justify text-grey-4 ">
            {content}
          </p>
        </div>
     
    )
}