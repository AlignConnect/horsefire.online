"use client";
import React, { useEffect, useState, useRef } from 'react';
import ReactPlayer from 'react-player';

const YoutubeFrame = ({ vid }) => {
    const [load, setLoad] = useState(false);
    const videoRef = useRef(null);


    const [wi, setwi] = useState(window.innerWidth)

    useEffect(() => {

        window.addEventListener("resize", () => {

            setwi(window.innerWidth)

        })

    }, [])






    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setLoad(true);
                observer.disconnect();
            }
        });

        observer.observe(videoRef.current);



        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };
    }, []);




    

    return (
        <div ref={videoRef}>
            {load ? (
                <ReactPlayer
                    url={`https://www.youtube.com/embed/${vid}`}
                    width={wi > 460 ? "53%" : "73%"}
                    height={wi > 460 ? "400px" : "330px"}
                    style={{ margin: "auto" }}
                    playing={true} // Default play state
                    controls={false} // Enable controls
                    light={true} // Lazy loads with a thumbnail
                    config={{
                        youtube: {
                            playerVars: {
                                modestbranding: 1, // Minimizes branding
                                rel: 0, // Related videos restricted to the same channel
                                showinfo: 0, // Deprecated but sometimes effective
                            },
                        },
                    }}
                />
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
};

export default YoutubeFrame;
