import React from 'react';
import Image from "next/image";


function Header() {
    return (
        <div className="bg-white border border-gray-300 p-2 md:p-4 lg:p-5">
            <div className="flex justify-between px-2 md:px-20 lg:px-20 py-1 md:py-3 lg:py-5">
                <Image
                    src="/img/group.svg"
                    width={176}
                    height={34}
                    className="pl-1 md:pl-0 w-12 h-12 md:w-auto md:h-auto"
                    alt=""
                />
                <div className='flex items-center'>
                    <Image
                        src="/img/profil.svg"
                        width={30}
                        height={48}
                        className="w-8 h-8 md:w-10"
                        alt=""
                    />
                    <div className='pl-2'>
                        <p className="text-sm md:text-base lg:text-lg text-gray-700 font-montserrat">
                            Nicolas SIMON
                        </p>
                        <p className="text-xs md:text-sm lg:text-base text-gray-400 font-montserrat">
                            1000 $
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Header;
