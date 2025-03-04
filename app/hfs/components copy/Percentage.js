"use client";
import React, { useEffect, useState } from "react";
import $ from 'jquery';

function Percentage() {

    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        function handleScroll() {
            const sectionElement = document.getElementById('processbaract');
            if (sectionElement) {
                const rect = sectionElement.getBoundingClientRect();
                const threshold = 350;
                if (rect.top <= threshold && rect.bottom >= threshold) {
                    setIsActive(true);
                }
                else {
                }
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isActive]);

    useEffect(() => {
        if (isActive) {
            progress_bar();
        }
    }, [isActive])

    function progress_bar() {

        var speed = 30;
        var items = $('.progress_bar').find('.progress_bar_item');


        items.each(function () {

            var item = $(this).find('.progress');
            var itemValue = item.data('progress');
            var i = 0;
            var value = $(this);

            var count = setInterval(function () {
                if (i <= itemValue) {
                    var iStr = i.toString();

                    item.css({
                        'width': iStr + '%'
                    });
                    value.find('.item_value').html(iStr + '%');
                }
                else {
                    clearInterval(count);
                }
                i++;
            }, speed);

        });
    }

    const Percentage_and_title = (arr) => {
        return arr?.map((e, key) => {
            return <div className='ce_ixelgen_progress_bar' key={key}>
                <div className="w-full max-w-2xl mx-auto progress_bar px-2">
                    <div className="progress_bar_item">
                        <div className='fontNoto item_label text-[1.1rem] md:text-[1.3rem] text-justify'>
                            {e.title}
                        </div>
                        <div className='flex items-center gap-1'>
                            <div className="item_bar ">
                                <div className="progress " data-progress={e.percentage}>
                                </div>
                            </div>
                            <div className='fontPoppins item_value'>
                                0%
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        })
    }


    return (



        <div className="w-full max-w-6xl mx-auto">

            <div className='py-4' id='processbaract'>
                {
                    Percentage_and_title([
                        {
                            title: "आपका मानसिक जीवन बेहतर हो जाएगा!", percentage: "97"
                        },
                        {
                            title: "आपका वैवाहिक जीवन सुखी हो जाएगा!", percentage: "94"
                        },
                        {
                            title: "आपके आध्यात्मिक जीवन में सुधार होगा!", percentage: "92"
                        },
                        {
                            title: "आतंरिक क्षमता बढ़ जाएगी!", percentage: "100"
                        },
                        {
                            title: "आपको कभी निराश नहीं होना पड़ेगा!", percentage: "100"
                        }
                    ])

                }
            </div>



        </div>
    )
}

export default Percentage