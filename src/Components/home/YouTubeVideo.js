import ReactPlayer from "react-player";

const YouTubeVideo = ({ url }) => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '70vh', /* Set the height of the container */
        }}>
            <ReactPlayer
                width="100%"
                height="100%"
                playing={true}
                controls
                url={url} /* Use the 'url' prop passed to the component */
            />
        </div>
    );
};

export default YouTubeVideo;
