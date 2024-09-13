import { useTranslations } from "next-intl";
import  Image  from 'next/image'
import HomeImg from '../../../public/home-img.webp'
import Home from "../home/page";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <section className="man-container">
      <div className="flex items-center justify-between flex-col text-center pt-5 h-full">
        <h1 className="text-2xl font-bold my-6 md:font-semibold md:text-4xl lg:text-5xl">Unlock Your Horse&apos;s Full Potential</h1>
        <p className="text-[11px] font-normal leading-snug px-4 mb-5 md:text-[13px]">
          Welcome to EquiTrain, your premier destination for horse training
          excellence. We offer top-notch horse coaching, rider training, and
          equine education resources to help you unlock your horse’s full
          potential. Whether you’re a beginner or an experienced equestrian, our
          expert advice and supportive community will help you achieve your
          goals.
        </p>
        <Image src={HomeImg} alt="home image" height={5600} width={1200} />
      </div>
      <Home />
    </section>
  );
}
