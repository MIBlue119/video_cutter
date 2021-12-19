import React, { useEffect, useState } from "react";

const App = () => {
    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);

    // Define the file selected handler
    const selectedFileHandler = (event) => {
        const selectedFileFromClient = event.target.files[0];
        selectedFile(selectedFileFromClient);
        selectedFileFromClient(true);
    };


    return (
        <div className="ui container">
            <div className="ui label">
                <h1>Video Cutter</h1>
            </div>
            <br />
            <label htmlFor="file">Upload your media(video/audio)</label>

            <input
                className="ui input"
                type="file"
                onChange={selectedFileHandler}
                accept="audio/*,video/*"
            />
        </div>
    );
};
export default App;