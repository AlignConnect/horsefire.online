import { Inter } from "next/font/google";
import "./globals.css";
import { GlobalContextProvider } from "./statemanage/context";
import Script from "next/script";
import Link from "next/link";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import Wrapper from "@/component/Wrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Horse Fire Tablet",
  description: "Horse Fire Tablet",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <input type="hidden" value="arayurveda.shop" id="sellerDomain" />
      <script
        src="https://fastrr-boost-ui.pickrr.com/assets/js/channels/shopify.js"
        defer
      ></script>
      <link
        rel="stylesheet"
        href="https://fastrr-boost-ui.pickrr.com/assets/styles/shopify.css"
      ></link>

      {/* <!--Google tag (gtag.js) -->
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-GC608J9SEF"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-GC608J9SEF');
      </script> */}

      <link rel="icon" href={"/main/hft_home/faviconhft.webp"} />

      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-MSTDF8RH0H`}
      />
      <Script strategy="lazyOnload">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-MSTDF8RH0H', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>

      {/* <!-- Adskeeper Sensor -->  */}
      <Script strategy="lazyOnload">
        {`
         (function() { var d = document, w = window; w.MgSensorData = w.MgSensorData || []; w.MgSensorData.push({ cid:687789, lng:"us", project: "a.adskeeper.co.uk" }); var l = "a.adskeeper.co.uk"; var n = d.getElementsByTagName("script")[0]; var s = d.createElement("script"); s.type = "text/javascript"; s.async = true; var dt = !Date.now?new Date().valueOf():Date.now(); s.src = "https://" + l + "/mgsensor.js?d=" + dt; n.parentNode.insertBefore(s, n); })();
        `}
      </Script>

      {/* <!-- Mgid Sensor -->  */}
      <Script strategy="lazyOnload">
        {`
         (function() { var d = document, w = window; w.MgSensorData = w.MgSensorData || []; w.MgSensorData.push({ cid:847503, lng:"us", project: "a.mgid.com" }); var l = "a.mgid.com"; var n = d.getElementsByTagName("script")[0]; var s = d.createElement("script"); s.type = "text/javascript"; s.async = true; var dt = !Date.now?new Date().valueOf():Date.now(); s.src = "https://" + l + "/mgsensor.js?d=" + dt; n.parentNode.insertBefore(s, n); })(); 
        `}
      </Script>

      {/* <!--Taboola Pixel Code  -->  */}
      <Script strategy="lazyOnload">
        {`
          window._tfa = window._tfa || [];
          window._tfa.push({notify: 'event', name: 'page_view', id: 1693731});
          !function (t, f, a, x) {
                 if (!document.getElementById(x)) {
                    t.async = 1;t.src = a;t.id=x;f.parentNode.insertBefore(t, f);
                 }
          }(document.createElement('script'),
          document.getElementsByTagName('script')[0],
          '//cdn.taboola.com/libtrc/unip/1693731/tfa.js',
          'tb_tfa_script');
        `}
      </Script>

      <Script>
        {` _tfa.push({notify: 'event', name: 'event_name', id: 1693731});  `}
      </Script>

      {/*Criteo  Dynamic Loader */}
      <Script
        strategy="lazyOnload"
        type="text/javascript"
        src="//dynamic.criteo.com/js/ld/ld.js?a=119703"
        async="true"
      ></Script>
      {/*Criteo  Dynamic Loader */}

      {/*Criteo  Homepage code */}
      <Script>
        {`window.criteo_q = window.criteo_q || [];
        var deviceType = /iPad/.test(navigator.userAgent) ? "t" : /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk/.test(navigator.userAgent) ? "m" : "d";
        window.criteo_q.push(
          { event: "setAccount", account: 119703 },
          { event: "setEmail", email: "##Email Address of User##" },
          { event: "setSiteType", type: deviceType},
          { event: "viewHome" }
        );
      `}
      </Script>
      {/*Criteo  Homepage code */}

      <body className={inter.className}>
        <GlobalContextProvider>
          <Wrapper>{children}</Wrapper>
        </GlobalContextProvider>
      </body>
    </html>
  );
}
