import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  return( 
    <>
    <div className="mx-auto xl:mx-0">
      <Link 
          href={'/work'} 
          className="relative w-[180px] h-[180px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group">
        <Image 
          src={'/rounded-text.png'}
          width={138}
          height={141}
          alt=""
          className="animate-spin-slow w-full h-full max-w-[138px] max-h-[141px]" 
        />
        <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 transition-all duration-250" />
      </Link>
    </div>
    </>

  );
};

export default ProjectsBtn;
