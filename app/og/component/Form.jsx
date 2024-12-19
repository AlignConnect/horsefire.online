"use client";
import { useGlobalContext } from "@/app/statemanage/context";
import { CustomerDataValidator, CustomerDataValue } from "@/app/commonUse/FormDataValidation";
import axios from 'axios';
import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import { Noto_Serif_Devanagari, Poppins } from "next/font/google";

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const poppin = Poppins({
    subsets: ['latin'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


const Load = dynamic(() => import("@/app/commonUse/loader/FormLoader"), {
    loading: () => <p>df</p>
});


const Form = () => {
    const searchParams = useSearchParams();

    const { CustomerData, setCustomerData, checkoutDetail, setLoading, loading, openPopup } = useGlobalContext();

    const handleChange = async (e) => {
        setCustomerData({ ...CustomerData, [e.target.name]: e.target.value })
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {
            const getCustomData = CustomerDataValidator.JoiValidator(CustomerData);

            let check = await axios.get('https://api.ipify.org?format=json').then(response => {
                return response.data.ip
            }).catch(error => console.log(error))
            const formdata = new FormData();

            formdata.append("name", getCustomData.name)
            formdata.append("phone", getCustomData.phone)
            formdata.append("address", getCustomData.address)
            formdata.append("post", "Horsefire.online/og")
            formdata.append("ip", check ? check : "")
            formdata.append("checkout_toogle", checkoutDetail.checkoutChecked)
            formdata.append("blog_url", process.env.NEXT_APP_URL_OG ?? "horsefire.online/og")

            const searchParamss_krt = searchParams.get("krt");
            const searchParamss_krttracker = searchParams.get("krttracker");
            const searchParamss_hfcadu = searchParams.get("hfcadu");
            const searchParamss_hfcmybid = searchParams.get("hfcmybid");

            searchParamss_krttracker && formdata.append('conversions_tracking', searchParamss_krttracker);
            searchParamss_krt && formdata.append("conversions", searchParamss_krt);
            searchParamss_hfcadu && formdata.append("hfcadu", searchParamss_hfcadu);
            searchParamss_hfcmybid && formdata.append("hfcmybid", searchParamss_hfcmybid);

            const searchParamss_hftevadev = searchParams.get("hftevadev");
            searchParamss_hftevadev && formdata.append("hftevadev", searchParamss_hftevadev);

            try {
                setLoading(true)
                const form = await fetch(`https://horsefire.online/submitdata.php`, { body: formdata, method: "POST" })
                const data = await form.json()

                const blogWebId = data.blogWebId ?? null;
                if (data.ok) {
                    setLoading(false)
                    let destination = decodeURI(data.destination)
                    let name = destination.split("?name=")[1].split("&")[0]
                    let phone = destination.split("&phone=")[1].split("&")[0]
                    return window.location.href = `${checkoutDetail.checkoutUrl}?source=${blogWebId}&name=${name}&phone=${phone}`
                }
                setLoading(false)
                return window.location.href = `${checkoutDetail.checkoutUrl}?source=${blogWebId}&name=&phone=`
            } catch (err) {
                setLoading(false)
                return window.location.href = checkoutDetail.checkoutUrl;
            }
        } catch (error) {
            setLoading(false)
            return alert(error);
        }

    }

    return (
        <div id="form" className={poppin.className}>

            {
                loading && <Load />
            }


            <div className="mx-auto bg-[#f3f3f3]  px-4 py-6 border border-black rounded-lg my-5" id='formcallhide'>
                <div>
                    <div className="text-center">
                        <h1 className="text-4xl font-semibold inline-flex border-bottom border-b-2 border-black"> Contact Us </h1>
                    </div>
                    <form className="space-y-3">
                        {CustomerDataValue?.map((data, key) => {
                            return <div className={`${noto.className} flex flex-col my-6`} key={key}>
                                <label className={`font-semibold text-md py-1 `}>{data.label}</label>
                                <div className="relative">
                                    <input {...data.inputValue} className={` py-3 border border-black w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 ${data.icon ? 'pl-[3.5rem]' : 'pl-[0.7rem]'}`} onChange={handleChange} value={CustomerData[data.inputValue.name]} />
                                    {data.icon && <span className="absolute ransform translate-x-[-50%] translate-y-[-50%] top-1/2 left-5 border-r border-black px-2">{data.icon}</span>}
                                </div>
                            </div>
                        })}
                        <div className="flex justify-center items-center">
                            <button onClick={handleFormSubmit} type="button" className={`${poppin.className} bg-[#ff0000] text-white text-xl font-semibold p-2 md:w-72 w-full rounded-xl hover:bg-yellow-400/80 transition-colors`}>
                                SUBMIT
                            </button>
                        </div>
                    </form>
                </div>

            </div>

        </div>


    );
};

export default Form;
