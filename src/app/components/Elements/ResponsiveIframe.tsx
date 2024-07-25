import React from 'react';

const ResponsiveIframe = ({ src, title }: {src: string, title: string}) => (
    <div className="video-container"> 
        <iframe
            src={src}
            title={title}
            allowFullScreen
            frameBorder="0"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        />
    </div>
);

export default ResponsiveIframe;