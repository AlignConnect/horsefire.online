"use client";
import { useGlobalContext } from "@/app/statemanage/context";
import { CustomerDataValidator, CustomerDataValue } from "@/app/commonUse/FormDataValidation";
import axios from 'axios';
import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";

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
            formdata.append("post", "Horsefire.online/ob")
            formdata.append("ip", check ? check : "")
            formdata.append("checkout_toogle", checkoutDetail.checkoutChecked)
            formdata.append("blog_url", "horsefire.online/ob")

            // const searchParamss_krt = searchParams.get("krt");
            // const searchParamss_krttracker = searchParams.get("krttracker");
            // const searchParamss_hfcadu = searchParams.get("hfcadu");
            // const searchParamss_hfcmybid = searchParams.get("hfcmybid");

            // searchParamss_krttracker && formdata.append('conversions_tracking', searchParamss_krttracker);
            // searchParamss_krt && formdata.append("conversions", searchParamss_krt);
            // searchParamss_hfcadu && formdata.append("hfcadu", searchParamss_hfcadu);
            // searchParamss_hfcmybid && formdata.append("hfcmybid", searchParamss_hfcmybid);

            // const searchParamss_hftevadev = searchParams.get("hftevadev");
            // searchParamss_hftevadev && formdata.append("hftevadev", searchParamss_hftevadev);

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
        <div id="form" className="w-full md:w-[768px] mx-auto md:my-10" >

            {
                loading && <Load />
            }


            <div className="mx-auto fontNoto  bg-zinc-800 px-4 py-10" id='formcallhide'>
                <div className="w-full md:w-[90%] px-5 py-5 mx-auto border">
                    <h1 className="fontPoppins text-xl md:text-2xl text-center font-bold border-bottom text-white  border-sky-500">  कॉल पर विशेषज्ञ डॉक्टरों से मुफ्त सलाह के लिए फॉर्म भरें ! </h1>
                    <form className="space-y-3">
                        {CustomerDataValue?.map((data, key) => {
                            return <div className="flex flex-col my-6" key={key}>
                                <label className="font-semibold text-md py-1 text-white">{data.label}</label>
                                <div className="relative">
                                    <input {...data.inputValue} className={` py-3 text-white bg-transparent border w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 ${data.icon ? 'pl-[3.5rem]' : ''}`} onChange={handleChange} value={CustomerData[data.inputValue.name]} />
                                    {data.icon && <span className="absolute transform text-white translate-x-[-50%] translate-y-[-50%] top-1/2 left-5 border-r border-white px-2">{data.icon}</span>}
                                </div>
                            </div>
                        })}
                        <div className="flex justify-center items-center pt-4">
                            <button onClick={handleFormSubmit} type="button" className="bg-yellow-400 text-xl font-bold p-3  md:w-72 w-full rounded-xl hover:bg-yellow-400/80 transition-colors ">
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
