import { Poppins } from "next/font/google";

const poppin = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});
const Orderbtn2 = () => {

  return (
    <div className="flex flex-col justify-center items-center mt-5 md:mt-10 pb-2">

      <div className="golden-btn pb-2">
        <a
          className={`p-3 px-12 data-animation foo rounded-full block bg-gradient-to-b from-red-500 to-red-700 text-2xl md:text-3xl text-white uppercase font-bold ${poppin.className}`}
          href="#findform"
        >
          order now
        </a>
      </div>
    </div>
  );
};

export default Orderbtn2;
