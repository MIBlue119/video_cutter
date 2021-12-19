import React, { useEffect, useRef, useState } from "react";
import WaveSurfer from 'wavesurfer.js';


// Set the waveform display config
const waveSuferOptionsConfigs = (ref) => ({
    backend: "MediaElement",
    displayMilliseconds: false,
    debug: true,
    waveColor: "#336699",
    progressColor: "black",
    cursorColor: "black",
    hideScrollbar: false,
    container: ref
});

// Define the `MediaLocalPlayer` component
const MediaLocalPlayer = ({ isFilePicked, selectedFile }) => {

    // Define the variable 
    const waveformRef = useRef(null);
    const wavesurfer = useRef(null);
    const [mediaPlaying, setPlay] = useState(false);
    let clientFileURL = "";

    // Define the handler
    const handlePlayPause = () => {
        wavesurfer.current.playPause();
    };

    // Render it once at the initial render
    useEffect(() => {
        const options = waveSuferOptionsConfigs(waveformRef.current);
        if (wavesurfer.current === null) {
            wavesurfer.current = WaveSurfer.create(options);
        }
    }, []);

    // Render it when the file selected
    useEffect(() => {
        if (isFilePicked === true) {
            setPlay(false);
            clientFileURL = URL.createObjectURL(selectedFile);
            console.log(selectedFile.type);

            wavesurfer.current.load(clientFileURL);
            wavesurfer.current.on("play", function () {
                setPlay(true);
            });
            wavesurfer.current.on("pause", function () {
                setPlay(false);
            });

            wavesurfer.current.on("ready", function () {
                console.log("Ready to draw the waveform");
            });
            wavesurfer.current.on("waveform-ready", function () {
                console.log("After draw the waveform");
            });
        }
        return () => {
            if (wavesurfer.current) {
                console.log("destory wavesurfer");
                wavesurfer.current.empty();
            }
        };
    }, [isFilePicked, selectedFile]);

    return (
        <div>
            <button className="button1" onClick={handlePlayPause}>
                {mediaPlaying ? "Press to Pause" : "Press to Play"}
            </button>
            <div id="waveform" ref={waveformRef}></div>
        </div>
    );
};

export default MediaLocalPlayer;