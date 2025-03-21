import { useSelector } from "react-redux";
import { IoShareOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";
import StackIcon from "tech-stack-icons";
import { useState } from "react";
import Share from "../components/Share";
import ReactMarkdown from "react-markdown" ;

const obj = {
  English: "https://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg",
  Hindi: "https://purecatamphetamine.github.io/country-flag-icons/3x2/IN.svg",
  Polish: "https://purecatamphetamine.github.io/country-flag-icons/3x2/PL.svg",
  German: "https://purecatamphetamine.github.io/country-flag-icons/3x2/DE.svg",
  French: "https://purecatamphetamine.github.io/country-flag-icons/3x2/FR.svg",
  Spanish: "https://purecatamphetamine.github.io/country-flag-icons/3x2/ES.svg",
  Arabic: "https://purecatamphetamine.github.io/country-flag-icons/3x2/SA.svg",
  Portugese:
    "https://purecatamphetamine.github.io/country-flag-icons/3x2/PT.svg",
  Mandarin:
    "https://purecatamphetamine.github.io/country-flag-icons/3x2/CN.svg",
  Japanese:
    "https://purecatamphetamine.github.io/country-flag-icons/3x2/JP.svg",
};
const default_avatar="https://img.freepik.com/premium-vector/man-avatar-profile-picture-isolated-background-avatar-profile-picture-man_1293239-4841.jpg?semt=ais_hybrid"

function Mobile() {

  const displayName = useSelector(
    (state) => state.user.currentUser.displayName
  );
  let userImage = useSelector((state) => state.user.currentUser.photoURL);
  const username = useSelector((state) => state.user.username.username);
  const about = useSelector((state) => state.user.userDetails?.about);
  const college = useSelector((state) => state.user.userDetails?.college);
  const location = useSelector((state) => state.user.userDetails?.location);
  const skills = useSelector((state) => state.user.userDetails?.techStack);
  const languages = useSelector((state) => state.user.userDetails?.languages);
  const socials = useSelector((state) => state.social?.socials);
  const theme = useSelector((state) => state.user.username.theme) ; 
  const font = useSelector((state) => state.user.username.font) ; 
  const [share,setShare]=useState(false)
  function handleShare()
  {
    setShare(()=>!share)
  }
  if(userImage.includes("google"))
    userImage=undefined
  return (
    <>
      {displayName && (
        <div data-theme={theme} data-font={font} className="relative overflow-y-scroll xl:w-100 xl:block hidden">
          <div  className={`font-[family-name:var(--primary-font)] min-h-screen overflow-y-scroll no-scrollbar bg-[var(--primary-bg-color)] rounded-[3rem] border-12 border-black w-[95%] text-[var(--primary-text-color)] relative overflow-x-hidden`}>
            <div className="w-[95%] flex justify-end my-2">
              <span className={`bg-[var(--primary-button-color)] p-0.5 rounded-md cursor-pointer ${share ? "opacity-50" : ""}`}
              onClick={handleShare}>
                <IoShareOutline color="var(--secondary-text-color)" />
              </span>
            </div>
            {share && <Share share={share} setShare={setShare}/>}
            <div className={`flex flex-col justify-center items-center gap-4 ${share ? "opacity-25" : ""}`}>
              <img
                src={userImage||default_avatar}
                className="rounded-full w-30 h-30 border-6 border-[var(--primary-button-color)] absolute top-10"
              />
              <div className="bg-[var(--secondary-bg-color)] w-[96%] mx-auto my-18 rounded-lg flex flex-col gap-2">
                <div className="mt-16">
                  {location && (
                    <div className="text-sm gap-1 flex justify-center items-center">
                      <span>
                        <FaLocationDot color="var(--primary-text-color)" />
                      </span>
                      <p className="capitalize">{location}</p>
                    </div>
                  )}
                  {college && (
                    <div className="text-sm flex gap-1 justify-center items-center">
                      <span>
                        <GiGraduateCap color="var(--primary-text-color)" />
                      </span>
                      <p className="uppercase">{college}</p>
                    </div>
                  )}
                  <h1 className="font-semibold uppercase text-[28px]">
                    {displayName}
                  </h1>
                  <h2 className="text-md bg-[var(--primary-button-color)] cursor-pointer hover:bg-[var(--primary-button-color-hover)] text-[var(--secondary-text-color)] hover:text-[var(--primary-text-color)] w-fit px-3 py-0.5 rounded-xl mx-auto italic">
                    @{username}
                  </h2>
                  <p className="text-md my-1 break-words"><ReactMarkdown>{about}</ReactMarkdown></p>
                </div>
                {skills && skills.length > 0 && (
                  <>
                    <div className="w-[90%] h-0.5 bg-[var(--secondary-bg-color)] mx-auto my-2">
                      <hr />
                    </div>
                    <h1 className="text-start text-sm italic mx-4">Skills:</h1>
                    <div className="flex gap-3 p-2 flex-wrap">
                      {skills.map((skill, index) => (
                        <div
                          key={index}
                          className="w-12 h-12 p-2 bg-[var(--primary-bg-color)] rounded-[16px] gap-2 items-center justify-center"
                        >
                          <div className="w-8 h-8 flex justify-center items-center">
                            <StackIcon name={skill} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
                {languages && languages.length > 0 && (
                  <>
                    <div className="w-[90%] h-0.5 bg-[var(--primary-bg-color)] mx-auto my-2">
                      <hr />
                    </div>
                    <h1 className="italic text-start text-sm mx-4">
                      Languages:
                    </h1>
                    <div className="grid gap-3 p-2 grid-cols-10 mx-2">
                      {languages.map((language, index) => (
                        <div
                          key={index}
                          className="w-10 h-10 overflow-hidden rounded-full hover:scale-[1.5] cursor-pointer"
                        >
                          <img
                            key={index}
                            src={obj[language.language]}
                            alt={language.language}
                            className="h-full object-cover w-full"
                          />
                        </div>
                      ))}
                    </div>
                  </>
                )}
                {socials && Object.keys(socials).length>=6 && (
                  <>
                    <div className="w-[90%] h-0.5 bg-[var(--secondary-bg-color)] mx-auto my-2">
                      <hr />
                    </div>
                    <p className="text-sm italic text-start mx-4">
                      You can find me on ...
                    </p>
                    <div className="flex gap-2 justify-center items-center my-3">
                      {socials["Github"] && (
                        <a target="_blank" href={socials["Github"]}>
                          <FaGithub size={30} color="var(--primary-button-color)"/>
                        </a>
                      )}
                      {socials["Instagram"] && (
                        <a target="_blank" href={socials["Instagram"]}>
                          <FaInstagram size={30} color="var(--primary-button-color)" />
                        </a>
                      )}
                      {socials["LinkedIn"] && (
                        <a target="_blank" href={socials["LinkedIn"]}>
                          <FaLinkedin size={30} color="var(--primary-button-color)" />
                        </a>
                      )}
                      {socials["Email"] && (
                        <a target="_blank" href={"mailto:"+socials["Email"]}>
                          <MdEmail size={30} color="var(--primary-button-color)" />
                        </a>
                      )}
                      {socials["Twitter"] && (
                        <a target="_blank" href={socials["Twitter"]}>
                          <FaXTwitter size={30} color="var(--primary-button-color)" />
                        </a>
                      )}
                      {socials["Youtube"] && (
                        <a target="_blank" href={socials["Youtube"]}>
                          <FaYoutube size={30} color="var(--primary-button-color)" />
                        </a>
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Mobile;
