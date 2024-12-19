import { useGlobalContext } from "@/app/statemanage/context";
import './Ama.css';


const AmaFlipDialog = ({ flipcartlink, type }) => {
    const { isPopupOpen, closePopup } = useGlobalContext();


    let checkoutUrl = "https://flipkart.la/3uLkXGV"
    let closeurl = "https://flipkart.la/489K5Wg";
    let amazonurl = null;


    if (type == "ts") {
        checkoutUrl = "https://flipkart.la/3vbpnaY"
        closeurl = "https://flipkart.la/3U8RSQi";
        amazonurl = null;

    }
    else if (type == "taboola") {
        checkoutUrl = "https://bit.ly/3KvM9OP"
        closeurl = "https://amzn.to/3zX3KwL";
        amazonurl = 'https://amzn.to/3zNgXs3'
    }
    else {
        checkoutUrl = "https://flipkart.la/3uLkXGV"
        closeurl = "https://flipkart.la/489K5Wg";
        amazonurl = null;
    }


    return (
        <div>

            {isPopupOpen && (
                <div className="overlay overflow-visible">
                    <div className="bg-[white] px-2 py-0 rounded-xl w-[95%] md:w-[500px] ">


                        <section className="text-end p-2 sm:p-3 relative" style={{ fontFamily: "sans-serif" }}>
                            <button className="text-xl text-black absolute right-5" onClick={() => {
                                closePopup();
                                window.location.href = closeurl;
                            }}>
                                X
                            </button>


                            <div className='text-center'>

                                <section className="w-[95%] mx-auto sm:w-full py-2">
                                    <a href={checkoutUrl} style={{ textDecoration: 'none' }}><img src="/checkout_images/flippro.webp" alt="no" className="w-full" /></a>
                                </section>

                                <section className="p-2 bg-[white] text-center font-bold border border-white rounded-[5px] mx-2 flex justify-center items-center gap-2" >
                                    <div className='w-[3rem] md:w-[5rem]'  >
                                        <img src="/common_images/secure.png" alt="no" className="w-full" />
                                    </div>

                                    <div className='text-md text-black'>
                                        Buy from Trusted Website
                                    </div>


                                </section>





                                <div className='text-lg' >
                                    Flipkart से खरीदने के लिए निचे क्लिक करें
                                </div>


                                <div className="grid justify-center my-1">
                                    <div className="flex items-center gap-2">
                                        <div className="fingImg11">
                                            <img src="/common_images/fingure.png" alt="" width={'100%'} />
                                        </div>

                                        <div className="AmaFlipPop" style={{ paddingTop: '-0.5rem' }}>
                                            <a href={checkoutUrl} style={{ textDecoration: 'none' }}><img src="/common_images/flipkart.png" className='OrderNowPopAmaFlip' alt="pic" style={{ width: '75%' }} /></a>
                                        </div>


                                        <div className="fingImg">
                                            <img src="/common_images/fingure.png" alt="" width={'100%'} />
                                        </div>
                                    </div>
                                </div>

                                {amazonurl && <div>
                                    <div className='text-lg' >
                                        Amazon से खरीदने के लिए निचे क्लिक करें
                                    </div>


                                    <div className="grid justify-center my-1">
                                        <div className="flex items-center gap-2">
                                            <div className="fingImg11">
                                                <img src="/common_images/fingure.png" alt="" width={'100%'} />
                                            </div>

                                            <div className="AmaFlipPop" style={{ paddingTop: '-0.5rem' }}>
                                                <a href={amazonurl} style={{ textDecoration: 'none' }}><img src="/common_images/amaz.png" className='OrderNowPopAmaFlip' alt="pic" style={{ width: '75%' }} /></a>
                                            </div>


                                            <div className="fingImg">
                                                <img src="/common_images/fingure.png" alt="" width={'100%'} />
                                            </div>
                                        </div>
                                    </div>
                                </div>}


                                <div className='bg-[#ffa800] py-2 my-4 -mx-1 px-1 rounded-md text-center font-bold text-md'>आपकी यौन समस्या का 100% गारंटीड इलाज</div>

                            </div>

                        </section>
                    </div>
                </div>
            )}



        </div>
    )
}

export default AmaFlipDialog;