import dynamic from "next/dynamic";
import { CustomerDataValue } from "../../commonUse/FormDataValidation";
import { useGlobalContext } from "../../statemanage/context";
import { CustomerDataValidator } from '../../commonUse/FormDataValidation';
import axios from 'axios';

const Load = dynamic(() => import("@/app/commonUse/loader/FormLoader"), {
  loading: () => <p>Loading</p>
})

const AmaFlipDialog = dynamic(() => import('@/app/commonUse/AmaFlipDialog/AmaFlipDialog'), {
  loading: () => <p>loading</p>
});

const Form = () => {

  const handleChange = async (e) => {
    setCustomerData({ ...CustomerData, [e.target.name]: e.target.value })
  }

  const { CustomerData, setCustomerData, loading, checkoutDetail, setLoading, openPopup } = useGlobalContext();



  const handleFormSubmit = async (e) => {

    e.preventDefault();

    try {
      const getCustomData = CustomerDataValidator.JoiValidator(CustomerData);

      let check = await axios.get('https://api.ipify.org?format=json').then(response => {
        return response.data.ip
      }).catch(error => console.log(error));
      const formdata = new FormData();

      formdata.append("name", getCustomData.name);
      formdata.append("phone", getCustomData.phone);
      formdata.append("address", getCustomData.address);
      formdata.append("post", "Horsefire.online/MGH");
      formdata.append("product_name", "HorseFireTab-W3")
      formdata.append("ip", check ? check : "");
      formdata.append("checkout_toogle", checkoutDetail.checkoutChecked);
      formdata.append("blog_url", process.env.NEXT_APP_URL_MGH ?? "Horsefire.online/MGH");

      // let tracker = searchParams.get("krt-tracker");
      // const searchParamss_krt = searchParams.get("krt");
      // const searchParamss_krttracker = searchParams.get("krttracker");

      // searchParamss_krttracker && formdata.append('conversions_tracking', searchParamss_krttracker);
      // searchParamss_krt && formdata.append("conversions", searchParamss_krt);

      try {
        const form = await fetch(`https://horsefire.online/submitdata.php`, { body: formdata, method: "POST" })
        const data = await form.json();

        const blogWebId = data.blogWebId ?? null;
        if (data.ok) {
          setLoading(false);
          // openPopup();
          let destination = decodeURI(data.destination)
          let name = destination.split("?name=")[1].split("&")[0]
          let phone = destination.split("&phone=")[1].split("&")[0]
          return window.location.href = `${checkoutDetail.checkoutUrl}?source=${blogWebId}&name=${name}&phone=${phone}`
        }
        setLoading(false);
        return window.location.href = `${checkoutDetail.checkoutUrl}?source=${blogWebId}&name=&phone=`
      } catch (err) {
        setLoading(false);
        // openPopup();
        return window.location.href = checkoutDetail.checkoutUrl;
      }
    } catch (error) {
      setLoading(false);
      return alert(error);
    }

  }

  return (
    <div className="">

      {
        loading && <Load />
      }

      <div className={`max-w-2xl border-2 border-yellow-500 bg-slate-100 rounded-xl py-4 mx-auto fontNoto  p-3 text-white `}>
        <div>
          <p className="text-center  font-bold text-black text-[1.1rem] md:text-2xl mb-5"><span className="text-red-500">HorseFire Tablet</span> के बारे में ज्यादा जानकारी के लिए यहां आवेदन (Inquiry) करे</p>

          <form className="space-y-3" >

            {CustomerDataValue?.map((data, key) => {
              return <div className="flex flex-col" key={key}>
                <label className="font-semibold text-xl py-1 text-black">{data.label}</label>
                <div className="relative">
                  <input {...data.inputValue} className={`text-black pt-3 px-2 pb-2 border border-black w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 ${data.icon ? 'pl-[3.5rem]' : ''}`} onChange={handleChange} value={CustomerData[data.inputValue.name]} />
                  {data.icon && <span className="absolute text-black ransform translate-x-[-50%] translate-y-[-50%] top-1/2 left-5 border-r border-black px-2">{data.icon}</span>}
                </div>
              </div>
            })}

            <div className="flex justify-center items-center pt-5 ">
              <button
                type="submit"
                className={`bg-red-700 text-xl  fontPoppins font-bold p-3 py-4 md:w-72 w-full rounded-full
                 hover:bg-red-600 transition-colors text-white flex justify-center items-center`}
                onClick={handleFormSubmit}
              >
                ORDER NOW
              </button>
            </div>
          </form>
        </div>
      </div>
      <AmaFlipDialog />

    </div>
  );
};

export default Form;
