export default function labelInput({
  label='',
  placeholder='',
  col = 1,
  isTextArea = false,
}) {
  return (
    <div className={`space-y-4  laptop:col-span-${col} col-span-2`}>
      <label className="block font-semibold text-grey-6">{label}</label>
      {isTextArea ? (
        <textarea onChange={()=>{return}} value={placeholder} className="border w-full p-4 border-white-5 rounded-md shadow-sm text-grey-3" rows={5}>
         
        </textarea>
      ) : (
        <input
          className="border w-full p-4 border-white-5 rounded-md shadow-sm placeholder:text-grey-3"
          placeholder={placeholder}
          type="text"
        />
      )}
    </div>
  );
}
