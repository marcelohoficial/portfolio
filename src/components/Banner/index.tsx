import Image from "next/image";

export default function Banner() {
  const myBanners = [
    { src: "images/banners/1mockup-card2.svg", alt: "Banner" },
    { src: "images/banners/2mockup-card2.svg", alt: "Banner" },
    { src: "images/banners/3mockup-content.svg", alt: "Banner" },
    { src: "images/banners/4mockup2-bg.svg", alt: "Banner" },
    { src: "images/banners/5mockup3-bg.svg", alt: "Banner" },
  ];

  return (
    <>
      <div
        id="banner"
        className="flex text-white w-screen min-h-screen border-b-2"
      >
        <div id="description" className="w-1/2 pl-10 pt-40 min-h-full">
          <h2 className="text-5xl">
            Desenvolvendo, muito
            <span className="animate-pulse font-bold"> Código</span> e sonhos.
          </h2>
          <p className="mt-2 text-md font-bold text-justify">
            Um universo de possibilidades, com uma infinidade de recusos.
          </p>
          <span className="mt-2 text-sm font-light text-justify">
            Idealizar, projetar e codar.
          </span>
        </div>
        <div id="images" className="w-2/3 pl-4 flex flex-col dzunxg">
          <div className="flex pl-4">
            <Image
              src="/images/banners/1mockup-card2.svg"
              alt="Banner"
              width={153}
              height={100}
            />
            <Image
              src="/images/banners/2mockup-card2.svg"
              alt="Banner"
              width={153}
              height={100}
              className="mt-4 ml-10"
            />
          </div>
          <Image
            src="/images/banners/3mockup-content.svg"
            alt="Banner"
            width={671}
            height={408}
            className="-mt-8 self-center"
          />
          <div id="footer" className="flex -mt-60 z-10">
            <Image
              src="/images/banners/4mockup2-bg.svg"
              alt="Banner"
              width={384}
              height={253}
              className="-ml-10"
            />
            <Image
              src="/images/banners/5mockup3-bg.svg"
              alt="Banner"
              width={384}
              height={253}
              className=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
