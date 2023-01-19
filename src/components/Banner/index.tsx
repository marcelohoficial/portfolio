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
      <div id="banner" className="flex text-white w-screen min-h-screen">
        <div id="description" className="w-1/2 pl-10 pt-20 min-h-full">
          <h2 className="text-6xl">
            Design and Code with{" "}
            <span className="animate-pulse font-bold">React</span> to apps.
          </h2>
          <p className="mt-2 text-md font-medium text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In eius
            minus accusantium rerum, nam pariatur? Aperiam ea impedit ducimus
            ipsa maxime molestiae aspernatur nobis iusto modi? Consectetur
            numquam modi ratione!
          </p>
          <span className="mt-2 text-sm font-light text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
            a, praesentium deleniti cum soluta quos, ut voluptate doloribus eum
            illo, similique quas corporis? Nam suscipit ullam neque nemo? Nulla,
            debitis?
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
