"use client";
import React, { useEffect, useMemo, useState } from 'react';
import { useGlobalContext } from "@/app/statemanage/context";
import dynamic from "next/dynamic";


const BottomPopupCall = dynamic(() => import('./bottomPopupCall'), {
    loading: () => <p>loading</p>
});

const BottomPopupForm = dynamic(() => import('./bottomPopupForm'), {
    loading: () => <p>loading</p>
})

const BottomHandler = () => {

    const { GetCallSetting, FetchWebCheckout, callDetail, sc } = useGlobalContext();


    const [Ap, setAp] = useState({ api: "", key: "" });


    function checkcall() {

        let checkcolumn = localStorage.getItem('PATH_KEY');

        switch (checkcolumn) {

            case "/":
                return setAp({
                    api: process.env.NEXT_APP_URL,
                    key: process.env.NEXT_APP_API_KEY
                });
            case "/mg":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFOMG,
                    key: process.env.NEXT_APP_API_KEY_HFOMG
                });
            case "/hmg":
                return setAp({
                    api: process.env.NEXT_APP_URL_HMG,
                    key: process.env.NEXT_APP_API_KEY_HMG
                });

            case "/ob":
                return setAp({
                    api: process.env.NEXT_APP_URL_OB,
                    key: process.env.NEXT_APP_API_KEY_OB
                });

            case "/ak":
                return setAp({
                    api: process.env.NEXT_APP_URL_AK,
                    key: process.env.NEXT_APP_API_KEY_AK
                });

            case "/og":
                return setAp({
                    api: process.env.NEXT_APP_URL_OG,
                    key: process.env.NEXT_APP_API_KEY_OG
                });


            case "/mgh":
                return setAp({
                    api: process.env.NEXT_APP_URL_MGH,
                    key: process.env.NEXT_APP_API_KEY_MGH
                });

            case "/hm":
                return setAp({
                    api: process.env.NEXT_APP_URL_HM,
                    key: process.env.NEXT_APP_API_KEY_HM
                });


            case "/akh":
                return setAp({
                    api: process.env.NEXT_APP_URL_AKH,
                    key: process.env.NEXT_APP_API_KEY_AKH
                });

            case "/hfc":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFC,
                    key: process.env.NEXT_APP_API_KEY_HFC
                });

            case "/hnp":
                return setAp({
                    api: process.env.NEXT_APP_URL_HNP,
                    key: process.env.NEXT_APP_API_KEY_HNP
                });

            case "/htb":
                return setAp({
                    api: process.env.NEXT_APP_URL_HTB,
                    key: process.env.NEXT_APP_API_KEY_HTB
                });

            case "/htd":
                return setAp({
                    api: process.env.NEXT_APP_URL_HTD,
                    key: process.env.NEXT_APP_API_KEY_HTD
                });

            case "/ck":
                return setAp({
                    api: process.env.NEXT_APP_URL_CK,
                    key: process.env.NEXT_APP_API_KEY_CK
                });

            case "/ht":
                return setAp({
                    api: process.env.NEXT_APP_URL_HT,
                    key: process.env.NEXT_APP_API_KEY_HT
                });

            case "/hk":
                return setAp({
                    api: process.env.NEXT_APP_URL_HK,
                    key: process.env.NEXT_APP_API_KEY_HK
                });

            case "/hfs":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFS,
                    key: process.env.NEXT_APP_API_KEY_HFS
                });


            case "/hfu":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFU,
                    key: process.env.NEXT_APP_API_KEY_HFU
                });

            case "/hfk":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFK,
                    key: process.env.NEXT_APP_API_KEY_HFK
                });


            case "/hrm":
                return setAp({
                    api: process.env.NEXT_APP_URL_HRM,
                    key: process.env.NEXT_APP_API_KEY_HRM
                });


            case "/hrf":
                return setAp({
                    api: process.env.NEXT_APP_URL_HRF,
                    key: process.env.NEXT_APP_API_KEY_HRF
                });

            case "/hbf":
                return setAp({
                    api: process.env.NEXT_APP_URL_HBF,
                    key: process.env.NEXT_APP_API_KEY_HBF
                });

            case "/htf":
                return setAp({
                    api: process.env.NEXT_APP_URL_HTF,
                    key: process.env.NEXT_APP_API_KEY_HTF
                });

            case "/htc":
                return setAp({
                    api: process.env.NEXT_APP_URL_HTC,
                    key: process.env.NEXT_APP_API_KEY_HTC
                });

            case "/hfm":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFM,
                    key: process.env.NEXT_APP_API_KEY_HFM
                });

            case "/hfp":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFP,
                    key: process.env.NEXT_APP_API_KEY_HFP
                });


            case "/phf":
                return setAp({
                    api: process.env.NEXT_APP_URL_PHF,
                    key: process.env.NEXT_APP_API_KEY_PHF
                });

            default:
                return setAp({
                    api: process.env.NEXT_APP_URL,
                    key: process.env.NEXT_APP_API_KEY
                });
        }

    }

    useEffect(() => {
        checkcall();
    }, []);



    useMemo(() => {

        if (Ap.api && Ap.key) {
            GetCallSetting(Ap.key);
            FetchWebCheckout(Ap.key, Ap.api);
        }

    }, [Ap]);


    return (

        <div className={`w-full block sm:hidden ${sc > 50 ? "tt" : 'xx'} fixed z-[10000] text-white`}>



            {callDetail.callStatus ? <BottomPopupCall /> :
                <BottomPopupForm />}
        </div>

    )
}

export default BottomHandler;