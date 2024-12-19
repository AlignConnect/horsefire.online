import { Noto_Serif_Devanagari } from "next/font/google";

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


function FlipAmazon() {
    return (
        <section className={noto.className}>
            <div className="py-3 text-center bg-white w-full  min-h-[120px]">
                <a href="https://flipkart.la/3wyXMkg" className="w-full grid leading-none min-h-[100px]">
                    <h5 className="purchaseProduct leading-tight text-center pt-2 mb-0">HORSE FIRE TABLET खरीदने के लिए निचे क्लिक करें</h5>
                    <img src="/common_images/bullriderGif.gif" alt="pic" className="mx-auto min-h-[50px]" loading='lazy' />
                </a>
            </div>
        </section>

    )
}

export default FlipAmazon;