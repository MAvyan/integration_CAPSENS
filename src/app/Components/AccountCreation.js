import React from 'react';
import Image from "next/image";

function AccountCreation() {
    return (
        <div className='bg-white border border-gray-500 rounded-lg pb-20 pt-5 px-4 lg:pl-240 lg:pr-240 ml-2 lg:ml-20 mr-2 lg:mr-20 mt-5 mb-14'>
            <div className='flex flex-col items-center p-4 md:p-8 mt-4 md:mt-0'>
                <p className="text-4xl text-gray-700 font-semibold font-montserrat mb-5 text-center pt-4">
                    Je crée mon compte <span className="text-red-500">en tant que ...</span>
                </p>
                <p className="text-base tracking-wider leading-6 text-gray-700 font-normal font-montserrat text-center pb-10">
                    Choisissez dès maintenant si vous souhaitez investir en tant que particulier
                    <br />ou en tant que personne morale.
                </p>
            </div>
            <div className=''>
                <div className='bg-[#F9FBFF] border border-gray-500 rounded-lg p-4 md:p-8 flex flex-col items-center mt-4 md:mt-0'>
                    <Image src="/img/pp.svg"
                           width={27}
                           height={32}
                           className='mb-3 md:mb-5'
                           alt='' />
                    <p className='text-base tracking-wide md:text-lg text-gray-700 font-medium font-montserrat text-center'>
                        Personne physique
                    </p>
                    <p className='text-gray-500 tracking-wide text-sm md:text-base font-normal font-montserrat text-center'>
                        Vous créez ce compte pour vous-même en tant qu’individu
                    </p>
                </div>
                <div className='mx-auto ml-20 mr-20 mt-10 mb-10 flex justify-center items-center'>
                    <Image
                        src="/img/line.svg"
                        width={313}
                        height={0}
                        className="w-full h-auto mr-6"
                        alt=""
                    />
                    <p className="text-gray-500 text-lg font-montserrat">
                        ou
                    </p>
                    <Image
                        src="/img/line.svg"
                        width={313}
                        height={0}
                        className="w-full h-auto ml-6"
                        alt=""
                    />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8'>
                    <div className='bg-white border border-gray-500 rounded-lg p-4 md:p-8 flex flex-col items-center'>
                        <Image src="/img/building.svg"
                               width={33}
                               height={32}
                               className='mb-3 md:mb-5'
                               alt='' />
                        <p className='text-base tracking-wide md:text-lg text-gray-700 font-medium font-montserrat text-center'>
                            Association
                        </p>
                        <p className='text-gray-500 tracking-wide text-sm md:text-base font-normal font-montserrat text-center'>
                            Personne morale
                        </p>
                    </div>
                    <div className='bg-white border border-gray-500 rounded-lg p-4 md:p-8 flex flex-col items-center mt-4 md:mt-0'>
                        <Image src="/img/building.svg"
                               width={33}
                               height={32}
                               className='mb-3 md:mb-5'
                               alt='' />
                        <p className='text-base tracking-wide md:text-lg text-gray-700 font-medium font-montserrat text-center'>
                            Entreprise
                        </p>
                        <p className='text-gray-500 tracking-wide text-sm md:text-base font-normal font-montserrat text-center'>
                            Personne morale
                        </p>
                    </div>
                    <div className='bg-white border border-gray-500 rounded-lg p-4 md:p-8 flex flex-col items-center mt-4 md:mt-0'>
                        <Image src="/img/building.svg"
                               width={33}
                               height={32}
                               className='mb-3 md:mb-5'
                               alt='' />
                        <p className='text-base tracking-wide md:text-lg text-gray-700 font-medium font-montserrat text-center'>
                            Micro-Entreprise
                        </p>
                        <p className='text-gray-500 tracking-wide text-sm md:text-base font-normal font-montserrat text-center'>
                            Personne morale
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AccountCreation;
