import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";


// Aqui apenas nosso botão circulante
const ProjectsBtn = () => {
  return( 
    <div className="mx-auto xl:mx-0">
      <Link 
          href={'/work'} 
          className="relative w-[175px] h-[175px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group">
        <Image 
          src={'/rounded-text.png'}
          width={141}
          height={148}
          alt=""
          className="animate-spin-slow w-full h-full max-w-[141px] max-h-[148px] " 
        />
        <HiArrowRight className="absolute text-4xl group-hover:translate-x-6 transition-all duration-300  text-cyan-600" />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
