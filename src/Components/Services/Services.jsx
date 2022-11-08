import { config } from '@fortawesome/fontawesome-svg-core';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card/Card';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => {
                setServices(data)

                // console.log(data)
            })
    }, []);


    console.log(services);


    return (
        <div>



            <div>
                <div className="p-6 py-12 mt-5 dark:bg-violet-400 dark:text-gray-900">
                    <div className="container mx-auto">
                        <div className="flex flex-col lg:flex-row items-center justify-between">
                            <h2 className="text-center text-6xl tracking-tighter font-bold">Up to
                                50% Off
                            </h2>
                            <div className="space-x-2 text-center py-2 lg:py-0">
                                <span> Use code:</span>
                                <span className="font-bold text-lg">MAMBA</span>
                            </div>
                            <Link to="" rel="noreferrer noopener" className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block dark:bg-gray-50 dark:text-gray-900 dark:border-gray-400">Book Now</Link>
                        </div>
                    </div>
                </div>
            </div>


            <div>

                <h2 className="text-center text-6xl tracking-tighter font-bold">
                    Our Services
                </h2>


            </div>





            <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-2 mb-20 justify-items-center'>
                {
                    services.map(service =>
                        <Card
                            key={service._id}
                            service={service}>
                        </Card>)
                }
            </div>


        </div >
    );
};

export default Services;