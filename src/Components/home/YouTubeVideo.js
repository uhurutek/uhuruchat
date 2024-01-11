import ReactPlayer from "react-player";

const YouTubeVideo = ({ url }) => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '70vh',
        }} >
            <ReactPlayer
                width="100%"
                height="100%"
                playing={true}
                controls
                url={url}
            />
        </div>
    );
};

export default YouTubeVideo;
