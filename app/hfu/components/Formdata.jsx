"use client"
import { Poppins } from 'next/font/google';
import { useGlobalContext } from "@/app/statemanage/context";
import { CustomerDataValidator, CustomerDataValue } from "@/app/commonUse/FormDataValidation";
import axios from 'axios';
import { useSearchParams } from "next/navigation";
import dynamic from 'next/dynamic';
import AmaFlipDialog from '@/app/commonUse/AmaFlipDialog/AmaFlipDialog';

const poppin = Poppins({
    subsets: ['latin'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const FormLoader = dynamic(() => import('@/app/commonUse/loader/FormLoader'), {
    loading: () => <p>loader</p>
});


const Formdata = () => {
    const searchParams = useSearchParams();

    const { CustomerData, setCustomerData, checkoutDetail, setLoading, loading, openPopup } = useGlobalContext();

    const handleChange = async (e) => {
        setCustomerData({ ...CustomerData, [e.target.name]: e.target.value })
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setLoading(false);

        try {
            const getCustomData = CustomerDataValidator.JoiValidator(CustomerData);

            let check = await axios.get('https://api.ipify.org?format=json').then(response => {
                return response.data.ip
            }).catch(error => console.log(error))
            const formdata = new FormData();

            formdata.append("name", getCustomData.name);
            formdata.append("phone", getCustomData.phone);
            formdata.append("address", getCustomData.address);
            formdata.append("post", "Horsefire.online/HFU");
            formdata.append("ip", check ? check : "");
            formdata.append("checkout_toogle", checkoutDetail.checkoutChecked);
            formdata.append("blog_url", process.env.NEXT_APP_URL_HFU ?? "horsefire.online/hfu");

            // let tracker = searchParams.get("krt-tracker");
            const searchParamss_krt = searchParams.get("krt");
            const searchParamss_krttracker = searchParams.get("krttracker");
            const searchParamss_tbhft = searchParams.get("tbclid");

            searchParamss_krttracker && formdata.append('conversions_tracking', searchParamss_krttracker);
            searchParamss_krt && formdata.append("conversions", searchParamss_krt);
            searchParamss_tbhft && formdata.append("tb_conversions", searchParamss_tbhft);


            try {
                setLoading(true)
                const form = await fetch(`https://horsefire.online/submitdata.php`, { body: formdata, method: "POST" })
                const data = await form.json()

                const blogWebId = data.blogWebId ?? null
                if (data.ok) {
                    setLoading(false);
                    let destination = decodeURI(data.destination)
                    let name = destination.split("?name=")[1].split("&")[0]
                    let phone = destination.split("&phone=")[1].split("&")[0]
                    return window.location.href = `${checkoutDetail.checkoutUrl}?source=${blogWebId}&name=${name}&phone=${phone}`
                    // return openPopup();

                }
                setLoading(false);
                return window.location.href = `${checkoutDetail.checkoutUrl}?source=${blogWebId}&name=&phone=`
                // return openPopup();

            } catch (err) {
                setLoading(false);
                return window.location.href = checkoutDetail.checkoutUrl;
                // return openPopup();

            }
        } catch (error) {
            setLoading(false);
            return alert(error);
        }

    }

    return (<div className="three_bg  rounded-md " id="form">

        {
            loading && <FormLoader />
        }
        <div className='bg-black'>
            <div className='w-full max-w-6xl mx-auto'>
                <div className="pt-2 pb-1 flex " >
                    <div className='fontNoto flex gap-1 items-center font-semibold text-md md:text-xl px-2 text-yellow-300'>
                        सूचना:
                    </div>
                    <marquee className='fontNoto text-md md:text-xl text-white' direction="left">हॉर्सफायर के बढ़ते लोकप्रियता को देखते हुए आजकल मार्केट में नकली प्रोडक्ट आ गए है तो ध्यानपूर्वक <span className="fontPoppins text-red-600 font-extrabold">AR Ayurveda</span> ब्रांड देखकर ही आर्डर करें!</marquee >
                </div>
            </div>
        </div>

        <h1 className="sm:text-3xl text-2xl text-center  text-white font-semibold px-2 py-5 md:pt-5">



            <div className="fontArya max-w-xl mx-auto">
                कॉल पर विशेषज्ञ से मुफ्त सलाह के लिए फॉर्म भरें!
            </div>
        </h1>

        <div className={`pb-4 text-black p-2 ${poppin.className}`} id='formcallhide'>
            <div className="max-w-2xl md:mx-auto  bg-slate-50 p-3 border border-black rounded-lg">
                <div className="py-4">
                    <div className="text-center">
                        <h1 className=" text-2xl font-bold border-b mb-5 inline-block border-black"> Contact Us </h1>
                    </div>
                    <form className="space-y-2 ">

                        {CustomerDataValue?.map((data, key) => {
                            return <div className="flex flex-col" key={key}>
                                <label className="font-semibold fontArya text-sm py-1 text-start">{data.label}</label>
                                <div className="relative">
                                    <input {...data.inputValue} className={`fontArya py-3 px-2 border border-solid border-black w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 ${data.icon ? 'pl-[3.2rem]' : ''}`} onChange={handleChange} value={CustomerData[data.inputValue.name]} />
                                    {data.icon && <span className="absolute ransform translate-x-[-50%] translate-y-[-50%] top-1/2 left-5 border-r border-black px-2">{data.icon}</span>}
                                </div>
                            </div>
                        })}

                        <div className="flex justify-center items-center pt-4 ">
                            <button onClick={handleFormSubmit} type="button" className="bg-zinc-900 text-xl font-bold p-3 pt-3 md:w-72 w-full rounded-md hover:bg-zinc-950 transition-colors text-white">
                                SUBMIT
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <AmaFlipDialog type='taboola' />
    </div>

    );
};

export default Formdata;