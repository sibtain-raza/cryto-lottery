import React from 'react'
import { useContract, useContractRead } from '@thirdweb-dev/react'
import Countdown from 'react-countdown';
type Props = {
    hours: number,
    minutes: number,
    seconds: number,
    completed: boolean,
}

function CountdownTImer() {
    const { contract } = useContract("0x7c5CeecF49067BD9e5613596227cbD2ba64735a4");
    const { data: expiration, isLoading: isLoadingExpiration } = useContractRead(contract, "expiration")

    const renderer = ({ hours, minutes, seconds, completed }: Props) => {
        if (completed) {
            return (
                <div>
                    <h2 className='text-white text-center animate-bounce'>Ticket sales are currently CLOSED</h2>
                    <div>
                        <div className='flex space-x-3'>
                            <div className='flex-1' >
                                <div className='text-5xl text-center text-white rounded-lg lg:min-w-[150px] bg-[#013f34] animate-pulse'>{hours}</div>
                                <div className='text-center text-white uppercase text-sm pt-4'>hours</div>
                            </div>

                            <div className='flex-1'>
                                <div className='text-5xl text-center text-white rounded-lg lg:min-w-[150px] bg-[#013f34] animate-pulse'>{minutes}</div>
                                <div className='text-center text-white uppercase text-sm pt-4'>minutes</div>
                            </div>

                            <div className='flex-1'>
                                <div className='text-5xl text-center text-white rounded-lg lg:min-w-[150px] bg-[#013f34] animate-pulse'>{seconds}</div>
                                <div className='text-center text-white uppercase text-sm pt-4'>seconds</div>
                            </div>
                        </div>
                    </div>
                </div>)
        } else {
            return (
                <div>
                    <h3 className='text-white text-sm mb-2 italic'>Time Remaining</h3>
                    <div className='flex space-x-6'>
                        <div className='flex-1' >
                            <div className='text-5xl text-center text-white rounded-lg lg:min-w-[150px] bg-[#013f34] animate-pulse'>{hours}</div>
                            <div className='text-center text-white uppercase text-sm pt-4'>hours</div>
                        </div>

                        <div className='flex-1'>
                            <div className='text-5xl text-center text-white rounded-lg lg:min-w-[150px] bg-[#013f34] animate-pulse'>{minutes}</div>
                            <div className='text-center text-white uppercase text-sm pt-4'>minutes</div>
                        </div>

                        <div className='flex-1'>
                            <div className='text-5xl text-center text-white rounded-lg lg:min-w-[150px] bg-[#013f34] animate-pulse'>{seconds}</div>
                            <div className='text-center text-white uppercase text-sm pt-4'>seconds</div>
                        </div>
                    </div>
                </div>)
        }

    }

    return (
        <div>
            <Countdown date={new Date(expiration * 1000)} renderer={renderer} />
        </div>
    )
}

export default CountdownTImer