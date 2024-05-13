export default function labelInput({
  label='',
  placeholder='',
  col = 1,
  isTextArea = false,
}) {
  return (
    <div className={`space-y-4  laptop:col-span-${col} col-span-2`}>
      <label className="block font-[500] desktop:text-[18px] desktop:leading-[27px] laptop:text-[16px] laptop:leading-[24px] text-[14px] leading-[21px] text-grey-7">{label}</label>
      {isTextArea ? (
        <textarea onChange={()=>{return}} value={placeholder} className="border w-full desktop:py-[24px] desktop:px-[20px] p-[20px] border-white-5 rounded-md shadow-sm text-grey-3" rows={4}>
         
        </textarea>
      ) : (
        <input
          className="border w-full desktop:px-[20px] desktop:py-[24px] p-[20px] laptop: border-white-5 rounded-[6px] shadow-sm placeholder:text-grey-3 placeholder:text-[16px] placeholder:leading-[20px]"
          placeholder={placeholder}
          type="text"
        />
      )}
    </div>
  );
}
