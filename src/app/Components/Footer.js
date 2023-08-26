import React from 'react';

function Footer() {
    return (
        <div className="fixed inset-x-0 bottom-0">
            <img
                src="/img/redForm.svg"
                className="fixed"
                style={{
                    width: '144px',
                    height: '136px',
                    left: '259px',
                    bottom: '-17.5px',
                    zIndex: -1,
                }}
                alt=""
            />
            <img
                src="/img/yellowForm.svg"
                className="fixed bottom-0 right-0"
                style={{
                    width: '124px',
                    height: '136px',
                    left: '1199px',
                    bottom: '15.5px',
                    zIndex: -1,
                }}
                alt=""
            />
            <img src="/img/wave.svg" className="" alt="" />
        </div>
    );
}

export default Footer;