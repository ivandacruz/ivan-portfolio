import Image from "next/image";

const TopLeftImg = () => {
    return (
        <div className="absolute left-0 top-0 mix-blend-color-dodge z-10 w-[150px] xl:w-[150px] opacity-50">
            {/* img de fundo canto esquerdo no alto */}
            <Image src='/top-left-img.png' width={300} height={200} alt="" />
        </div>
    );
};

export default TopLeftImg;