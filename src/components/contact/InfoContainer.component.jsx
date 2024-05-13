import { IconAndText } from ".";


import { contactList } from "../../data/ContactList";

export default function InfoContainer() {
  return (
    <div className="desktop:space-y-[50px] laptop:space-y-[24px] space-y-[20px] laptop:col-span-1 col-span-3 desktop:p-[80px] laptop:p-[60px] p-[30px]">
      {/* card  */}
      {contactList.map((contact, index) => (
        <IconAndText key={index} icons={contact.icons} label={contact.label} />
      ))}
    </div>
  );
}
