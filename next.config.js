/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_APP_API_URL: "https://api.brahmikalp.com/api/",
    // NEXT_APP_API_URL_SHOPIFY: "https://shopifyapi.plantifygarden.in",
    NEXT_APP_API_URL_SHOPIFY: "https://webapi.brahmikalp.com",
    // NEXT_APP_API_URL_SHOPIFY: "http://192.168.1.71:3111",
    SHOPIFY_URL: "https://arayurveda.shop",

    SHOPIFY_GENERATE_TOKEN:
      "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzaG9waWZ5YWNjZXNzdG9rZW4iOiJzaHBhdF8wMDg2MGQ3ZDg5YjlhM2NhOTExMmI3MGQ3MGJmNWZmZiIsInNob3BpZnl1cmwiOiJodHRwczovLzZlMTJmNy04ZS5teXNob3BpZnkuY29tIiwiaWF0IjoxNzI1NTI5Mjc3fQ.F098pecX4aU-4jqgrszxR5gU7ac2eCAbxVoBX_xZCB_6qW5G0tHGhOgJPLzYu8J757DJtFEsA6iP90XJ4zMHnSAAJ8Uww2PUqBs3TgruHLHQNORkw78aEjAHN9EEDPg5A9tQlJXcyv7N7ws0u1A5rgNyeJZ8jmi_3t4raPVQi_GjkXW1UVu9WFpc131OWMr0N75fU4yFo5OH6N_vWHzO657tDFzo18lLiLa82_4ZUBaIEWk6JO4KhniIbSaNeTM1XJoYHz6CEyAV9gxnTHKqw2SBHsyTWwgK-gTqDQ895pVWaJQ55E0zJfAI5yeI3WPG0gOijHi1exUFEpSHwA_Sow",

    //main env

    NEXT_APP_URL: "https://horsefire.online",
    NEXT_APP_API_KEY: "ZGeUBcturTpUgtKASXLPpxtIbtPNNwuKPCFVNpcZeDzGRxHBst",

    NEXT_APP_URL_HFOMG: "https://horsefire.online/mg",
    NEXT_APP_API_KEY_HFOMG:
      "CpPELPYNatsJLMEdONUzurdrMbtzrHcHwgKKALvtZfRjalAiKi",

    NEXT_APP_URL_HMG: "https://horsefire.online/hmg",
    NEXT_APP_API_KEY_HMG: "TPBJzVUIJcjMwOtQOujgvLTGrXbpxqzWZxDyboWhknbaaToXBd",

    // https://horsefire.online/mg

    NEXT_APP_URL_OB: "https://horsefire.online/ob",
    NEXT_APP_API_KEY_OB: "ioFWDHfvgQJfqqZkvXWpJpdApEQeUEqYzAlUeNolJoEYjUGnJH",

    NEXT_APP_URL_AK: "https://horsefire.online/ak",
    NEXT_APP_API_KEY_AK: "ziToTojuxRbPQNeXXgRGlUvTwtFiPdjXiaNAroCKwlqpSUuvTK",

    // mvXbXOXSpJMLfNZPHPVHnDuoYfSSikNjlRwsFMCmEkUsLlQLbT

    NEXT_APP_URL_HFC: "https://horsefire.online/hfc",
    NEXT_APP_API_KEY_HFC: "mvXbXOXSpJMLfNZPHPVHnDuoYfSSikNjlRwsFMCmEkUsLlQLbT",

    // AmtRAvtBlkgZwjjnivXEOnaKSnaGSsmiSMupXojUhKXrmyREly

    NEXT_APP_URL_HNP: "https://horsefire.online/hnp",
    NEXT_APP_API_KEY_HNP: "AmtRAvtBlkgZwjjnivXEOnaKSnaGSsmiSMupXojUhKXrmyREly",

    // https://horsefire.online/og

    NEXT_APP_URL_OG: "https://horsefire.online/og",
    NEXT_APP_API_KEY_OG: "HDUJgWHRowmOjjfFclilbYcteqYRkMAfspmPvvwjMKFgmqRXDt",

    NEXT_APP_URL_HM: "https://horsefire.online/hm",
    NEXT_APP_API_KEY_HM: "BzpCOrWHytOChtGSXnqYXOVLPgBrcJJOTTdCfVxsCCfhcWHjrH",

    NEXT_APP_URL_AKH: "https://horsefire.online/akh",
    NEXT_APP_API_KEY_AKH: "WfVOZHcHuAFEIzkJxCNLjkLMUcRidKsRFNtwrVxQIvcbwXjuSC",

    NEXT_APP_URL_MGH: "https://horsefire.online/mgh",
    NEXT_APP_API_KEY_MGH: "leRdARIwUQsbCuLWhxnROmEYOhIUkjVTkfoGYQWFocREHynniP",

    NEXT_APP_URL_HTB: "https://horsefire.online/htb",
    NEXT_APP_API_KEY_HTB: "YhplGZFwQdESUOQEpghrhWWsjjdSOaWzYIREBNWwGADtiwMSlE",

    NEXT_APP_URL_HTD: "https://horsefire.online/htd",
    NEXT_APP_API_KEY_HTD: "mInkhFEgrCeyTrZzsEXwuCtOEgaLFgwzyTeIyIeXiUufeCmOmZ",

    NEXT_APP_URL_CK: "https://horsefire.online/ck",
    NEXT_APP_API_KEY_CK: "IWFMuxZcNpkxtwNidEVnLTvFSrMNFIfQcSkbCGkynKzNhsldyC",

    NEXT_APP_URL_HT: "https://horsefire.online/ht",
    NEXT_APP_API_KEY_HT: "SnjeRULQsrlzKCIMemuPWsxCFPTBmvcVrJzSWVPGSJnYssLuNy",

    NEXT_APP_URL_HK: "https://horsefire.online/hk",
    NEXT_APP_API_KEY_HK: "qcazhJlKQLDOvHnSHUsFMSkgEqcMcSwjIfjTFtTqtJJybUiXmP",

    NEXT_APP_URL_HFS: "https://horsefire.online/hfs",
    NEXT_APP_API_KEY_HFS: "HUdPodbhuKHtZChbyASRfGEAflPaJfUhYlXXTHzKAoiPMGRugm",

    // https://horsefire.online/hfu

    NEXT_APP_URL_HFU: "https://horsefire.online/hfu",
    NEXT_APP_API_KEY_HFU: "MuAHaLNVmYZlfZPSnLmjulqUMCCfNJQVuzDPgJeLefemXWkzZC",

    NEXT_APP_URL_HFK: "https://horsefire.online/hfk",
    NEXT_APP_API_KEY_HFK: "aBwVUICNmsheeBlOjUHADdmsQuyFMGchiwbmjjTHvKprgUtRSz",

    NEXT_APP_URL_HRM: "https://horsefire.online/hrm",
    NEXT_APP_API_KEY_HRM: "LaGMGDiztNZNrHmthrBpODByKQKKHOVylWpYjygAfbyFXuIQCb",

    NEXT_APP_URL_HRF: "https://horsefire.online/hrf",
    NEXT_APP_API_KEY_HRF: "rkqvVhIjPTYkwUbvFiFUoYAoRYKfYmxWiBKLbkSSPNPHgpsXFs",

    NEXT_APP_URL_HBF: "https://horsefire.online/hbf",
    NEXT_APP_API_KEY_HBF: "MAnvaHdQfogCBqMSlVdfYRDbSLqWbqThNZyOguCTiqbZFfbpNf",

    NEXT_APP_URL_HTF: "https://horsefire.online/htf",
    NEXT_APP_API_KEY_HTF: "BsDkpaTJUejmvzutzUYIHFkTzgPvltpuwftWDRokiQfTBPZTrr",

    NEXT_APP_URL_HTC: "https://horsefire.online/htc",
    NEXT_APP_API_KEY_HTC: "omncBUBDXTlsXkiMVzWNhNWNhCLQkEUXQSQqQIHPPhckYMYoes",

    NEXT_APP_URL_HFM: "https://horsefire.online/hfm",
    NEXT_APP_API_KEY_HFM: "xvNwWJqBqjuiMvJgHhBorTsfVWLUnyENGIUvjFrAdELwUTEhBY",


    
    NEXT_APP_URL_HFP: "https://horsefire.online/hfp",
    NEXT_APP_API_KEY_HFP: "zinSqJCNynijsAohrtXVeYyULYGlWJMlqpmUOebGmcwaiTzQcO",
        
    NEXT_APP_URL_PHF: "https://horsefire.online/phf",
    NEXT_APP_API_KEY_PHF: "GsLeGzyUcoDEpMDQuKBBykHJUYViUSancjjgbortAymGumASLv",
  },

  images: {
    unoptimized: true,
  },
  trailingSlash: true,

  output: "export",
  reactStrictMode: false,
};

module.exports = nextConfig;
