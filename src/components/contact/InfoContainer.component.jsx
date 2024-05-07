import { IconAndText } from ".";
import {
    envlope,
    facebook,
    linkin,
    phone,
    subtract,
    twitter,
  } from "../../assets/icons";
export default function InfoContainer(){
    return(
        <div className="laptop:p-20 p-10 space-y-16 laptop:col-span-1 col-span-3">
        {/* card  */}

        <IconAndText icons={[envlope]} label={"support@skillbridge.com"} />
        <IconAndText icons={[phone]} label={"+91 00000 00000"} />
        <IconAndText icons={[subtract]} label={"Some Where in the World"} />
        <IconAndText
          icons={[facebook, twitter, linkin]}
          label={"Social Profiles"}
        />
      </div>
    )
}