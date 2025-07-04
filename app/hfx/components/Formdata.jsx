"use "
import { Poppins } from 'next/font/google';
import { useGlobalContext } from "@/app/statemanage/context";
import { CustomerDataValidator, CustomerDataValue } from "@/app/commonUse/FormDataValidation";
import axios from 'axios';
import { useSearchParams } from "next/navigation";
import dynamic from 'next/dynamic';

const poppin = Poppins({
    subsets: ['latin'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const FormLoader = dynamic(() => import('@/app/commonUse/loader/FormLoader'), {
    loading: () => <p>loader</p>
});


const AmaFlipDialog = dynamic(() => import('@/app/commonUse/AmaFlipDialog/AmaFlipDialog'), {
    loading: () => <p>loading</p>
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
            formdata.append("post", "Horsefire.online/HFX");
            formdata.append("ip", check ? check : "");
            formdata.append("checkout_toogle", checkoutDetail.checkoutChecked);
            formdata.append("blog_url", process.env.NEXT_APP_URL_HFX ?? "horsefire.online/hfx");

            // let tracker = searchParams.get("krt-tracker");
            const searchParamss_krt = searchParams.get("krt");
            const searchParamss_krttracker = searchParams.get("krttracker");
            const searchParamss_tbhft = searchParams.get("tbclid");
            console.log('searchParamss_tbhft: ', searchParamss_tbhft);

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

    return (
        <div className="">
            <div className="bg-inherit rounded-md p-2" id="form">

                {
                    loading && <FormLoader />
                }


                <h1 className="text-2xl text-center  text-[#f5f604] font-extrabold px-2 py-5 md:pt-5">
                    <div className="fontNoto max-w-xl mx-auto">
                        कॉल पर विशेषज्ञ डॉक्टरों से मुफ्त सलाह के लिए फॉर्म भरें !
                    </div>
                </h1>

                <div className={`pb-4 text-black ${poppin.className}`} id='formcallhide'>
                    <div className="max-w-2xl md:mx-auto  bg-black p-3 border border-dashed border-white rounded-xl">
                        <div className="py-4">
                            <div className="text-center text-white">
                                <h1 className=" text-2xl font-bold border-b mb-5 inline-block border-white"> Contact Us </h1>
                            </div>
                            <form className="space-y-2 ">

                                {CustomerDataValue?.map((data, key) => {
                                    return <div className="flex flex-col" key={key}>
                                        <label className="font-semibold text-white fontArya text-sm py-1">{data.label}</label>
                                        <div className="relative">
                                            <input {...data.inputValue} className={`fontArya p-3 border border-solid border-black w-full rounded-lg focus:outline-none focus:ring-2  focus:ring-red-500 ${data.icon ? 'pl-[3.5rem]' : ''}`} onChange={handleChange} value={CustomerData[data.inputValue.name]} />
                                            {data.icon && <span className="absolute ransform translate-x-[-50%] translate-y-[-50%] top-1/2 left-5 border-r border-black px-2">{data.icon}</span>}
                                        </div>
                                    </div>
                                })}

                                <div className="flex justify-center items-center pt-4 ">
                                    <button onClick={handleFormSubmit} type="button" className="text-white font-bold py-2 px-10 rounded-bl-xl rounded-tr-xl text-lg bg-gradient-to-b from-[#1c1c1c] to-black border border-yellow-400 shadow-[0_0_10px_0_rgba(255,255,0,0.5)] hover:brightness-110 transition">
                                        SUBMIT
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <AmaFlipDialog type='taboola' />
        </div>
    );
};

export default Formdata;
