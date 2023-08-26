import React from 'react';
import Image from "next/image";

function Footer() {
    return (
        <div className="fixed inset-x-0 bottom-0">
            <Image
                src="/img/redForm.svg"
                width={144}
                height={136}
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
            <Image
                src="/img/yellowForm.svg"
                width={124}
                height={136}
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
            <Image src="/img/wave.svg"
                   width={1920}
                   height={121}
                   className="" alt="" />
        </div>
    );
}

export default Footer;