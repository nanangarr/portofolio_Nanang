import React from 'react';
import { certificates } from '../Data';
import { motion } from 'framer-motion';

const Certificate = () => {
    return (
        <div id="certificate" className="w-full min-h-screen p-2 flex flex-col justify-center items-center">
            <div className='w-full sm:w-10/12 mx-auto p-4 flex flex-col justify-center h-full'>
                <div className="max-w-7xl mx-auto w-full">
                    <div className="pb-8">
                        <p className="text-4xl font-bold inline border-b-4 border-secondary">
                            Certificates
                        </p>
                        <p className="py-4">Check out some of my certifications</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {certificates.map((certificate, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-[400px]"
                            >
                                <div className="h-64 overflow-hidden">
                                    <img
                                        src={certificate.image}
                                        alt={certificate.title}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div className="p-4 flex-1 flex flex-col justify-between">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                        {certificate.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4">
                                        {certificate.issuer}
                                    </p>
                                    <div className="mt-2">
                                        <a
                                            href={certificate.pdfUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block w-full"
                                        >
                                            <button className="w-full text-center rounded-lg px-4 py-2 bg-[#267D49] text-white font-bold text-sm
                                                hover:bg-[#1b5934] transition-colors duration-300"
                                            >
                                                View
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Certificate;
