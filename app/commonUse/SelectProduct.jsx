import { useFetchProductsQuery } from "@/redux/services/products";
import ShiProcket from "../commonUse/shiprocket";
import {
  changeSelectedProduct,
  decrementQuantity,
  incrementQuantity,
} from "@/redux/slices/ProductInfo";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const SelectProduct = () => {
  const searchParams = useSearchParams();

  const taboola_tracking = searchParams.get("tbclid");

  const { data } = useFetchProductsQuery({ id: "9565083402555" });
  console.log('data: ', data);

  const [subtotal, setSubtotal] = useState(0);

  const dispatch = useDispatch();
  const productInfo = useSelector((state) => state.productInfo);

  // console.log(productInfo);

  const products = productInfo?.productsdata;
  const quantity = productInfo?.quantity;
  const allVariants = productInfo?.allVariants;
  const selectProducts = productInfo?.selectProducts;

  const imageSrc = data?.images?.find((x) => String(x?.id) === String(selectProducts?.image_id))?.src;


  const handleChangeSingleVarient = (event) => {
    const variantId = event.target.value;
    // console.log('variantId: ', variantId);
    const selected = allVariants.find((v) => {
      return v.id === Number(variantId);
    });

    dispatch(changeSelectedProduct({ selectProducts: selected }));
  };

  // buyDirect:function(e){shiprocketCheckoutDirectHandler(e),l({name:"MANUAL_INTEG_".concat(null==e?void 0:e.type,"_BUTTON_CLICKED"),category:null==e?void 0:e.type})}

  useEffect(() => {
    const calculatedSubtotal = parseInt(selectProducts?.price) * quantity;
    setSubtotal(calculatedSubtotal);
  }, [quantity, selectProducts?.price]);

  const reasons = (arr) => {
    return arr?.map((e, key) => {
      return (
        <div key={key} className="">
          <img
            src={e.reason_img}
            className="mx-auto md:w-20 w-16 "
            alt="reason_img"
            loading="lazy"
          />
          <div className="md:text-md text-sm text-center text-black font-semibold pt-2">
            <div dangerouslySetInnerHTML={{ __html: e.reason_title }} />
          </div>
        </div>
      );
    });
  };

  return (
    <div className="bg-white pt-5 poppinsFont sm:pt-10">
      <div className="max-w-5xl mx-auto  px-3  ">
        <div className="grid sm:grid-cols-2 items-center sm:gap-3">
          <div className="">
            {imageSrc ? (
              <img
                src={imageSrc}
                alt="pic"
                className="w-full"
                loading="lazy"
                id="buynow"
              />
            ) : (
              <p>Product image's not available</p> // This can be a fallback message or a placeholder image
            )}
          </div>

          <div className="">

            <div className="fontPoppins font-extrabold text-3xl py-2">
              Horse Fire Tablets
            </div>

            <div className="flex items-center py-2 space-x-2">
              <span className="text-gray-500 text-lg line-through">
                ₹{parseInt(selectProducts?.compare_at_price)}
              </span>
              <span className="text-4xl font-extrabold text-gray-900">
                <span className="">₹{parseInt(selectProducts?.price)}</span>
              </span>
              <span className="clip_off text-white text-sm font-semibold bg-red-700 px-4 py-0.5 ">
                {parseInt(
                  ((selectProducts?.compare_at_price - selectProducts?.price) /
                    selectProducts?.compare_at_price) *
                  100
                )}
                % off
              </span>
            </div>

            {/* Size Info */}
            <div className="flex items-center my-2">
              <span className="text-lg font-semibold">Size:</span>
              <span className="bg-red-100  text-red-600 font-semibold py-1 px-2 rounded-md ml-2">
                {selectProducts?.title}
              </span>
            </div>
          </div>
        </div>

        {/* <div className="md:col-span-8 col-span-7  text-left">
            <h2 className="sm:text-[1.6vw] text-md font-extrabold">
              Buy more, Save more!
            </h2>
            <p className="text-gray-600 text-sm poppinsFont text-left">
              Don't miss out on these amazing deals!
            </p>
          </div> */}

        <button className="bg-red-500 text-white font-bold mt-5 mb-3 py-2 px-4 rounded-md md:text-md text-sm">
          Special offer!
        </button>
        <div className="text-green-700 md:text-md text-[0.92rem] bg-[#fff9ef]  mb-5 p-1 font-semibold px-2">
          Get extra 10% discount on online payment
        </div>

        <div className="grid grid-cols-1 items-center  mt-2 selectedItem ">
          {allVariants?.map((variant, key) => {
            return (
              <label
                key={variant.id}
                value={variant.id}
                htmlFor={variant.id}
                className={`relative`}
              >
                {key === 1 && (
                  <div className="absolute top-0 left-0 bg-[#df7700] px-1 rounded-ss-lg z-10 text-white text-sm">
                    Most popular
                  </div>
                )}
                <div
                  className={`border-2 rounded-lg border-red-500 p-2 sm:p-4 mb-4 sm:flex items-center justify-between gap-5 ${selectProducts.id === variant.id ? "activeStatus2" : ""
                    }`}
                >
                  <div
                    className={`flex items-center gap-3 ${key === 1 && "pt-5"}`}
                  >
                    <input
                      type="radio"
                      id={variant.id}
                      name="name"
                      value={variant.id}
                      onChange={handleChangeSingleVarient}
                      checked={selectProducts.id === variant.id}
                    />
                    <div>
                      <h3 className="font-bold text-md">
                        {variant?.title} (
                        {parseInt(
                          ((variant?.compare_at_price - variant?.price) /
                            variant?.compare_at_price) *
                          100
                        )}
                        % off)
                      </h3>
                      <p className="text-sm text-gray-500 fontPoppins">
                        (extra 10% discount on online payment)
                      </p>
                    </div>
                  </div>
                  <div className="text-left ms-5 sm:ms-0 flex items-center gap-2 sm:block">
                    <p
                      className="line-through text-md text-gray-400  fontPoppins"
                      style={{ textDecoration: "line-through red" }}
                    >
                      ₹{parseInt(variant?.compare_at_price)}
                    </p>

                    <p className="text-green-700 font-bold text-2xl  fontPoppins">
                      ₹{parseInt(variant?.price)}
                    </p>
                  </div>
                </div>
              </label>
            );
          })}
        </div>
        <div className="sm:flex  items-center text-center ">
          <ShiProcket />
        </div>

        <img
          src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/e87c6e29-6fc5-41dd-cde9-912aca28dc00/public"
          sizes="560px"
          alt="checkout "
          loading="lazy"
          className="mx-auto mt-2  sm:mt-5 sm:mb-10"
          width="560"
          height="326"
        />
      </div>
    </div>
  );
};

export default SelectProduct;
