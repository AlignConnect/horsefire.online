"use client"
import dynamic from "next/dynamic"
import './componet/br.css'
import { useEffect } from "react"

// const Header = dynamic(() => import('./componet/Header'), {
//   loading: () => <p>loader</p>
// })

const Header = dynamic(() => import('./componet/MgHeader'), {
  loading: () => <p>loader</p>
})
const Form = dynamic(() => import('./componet/Form'), {
  loading: () => <p>loader</p>
})

const Section1 = dynamic(() => import('./componet/Section1'), {
  loading: () => <p>loader</p>
})
const Section2 = dynamic(() => import('./componet/Section2'), {
  loading: () => <p>loader</p>
});

const Section4 = dynamic(() => import('./componet/Section4'), {
  loading: () => <p>loader</p>
});

const CustomerReview = dynamic(() => import('./componet/Reviews'), {
  loading: () => <p>loader</p>
});

const Footer = dynamic(() => import('@/app/commonUse/Footer'), {
  loading: () => <p>loader</p>
});

const Footerp = dynamic(() => import('@/app/commonUse/bottompopup/BottomHandler'), {
  loading: () => <p>loader</p>
})

const page = () => {

  useEffect(() => {

    localStorage.setItem("PATH_KEY", "/mgh");

  }, [])


  return (
    <section className="bg-black mb-[4rem] sm:mb-0">


      <Header />
      <section className="w-full md:w-[710px] mx-auto px-2 bg-white">
        <Form />
        <Section1 />
        <Section2 />
        <Section4 />
        <Form />
        <CustomerReview />
      </section>
      <Footer />
      <Footerp />



    </section>
  )
}

export default page