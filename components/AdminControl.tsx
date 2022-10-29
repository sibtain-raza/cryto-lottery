import React from 'react'
import { useContract, useContractWrite, useContractRead } from "@thirdweb-dev/react";
import {
  StarIcon, CurrencyDollarIcon, ArrowPathIcon, ArrowUturnDownIcon
} from '@heroicons/react/24/solid'
import toast from 'react-hot-toast';
import { currency } from '../constants'
import { ethers } from 'ethers';

function AdminControl() {
  const { contract, isLoading } = useContract("0x7c5CeecF49067BD9e5613596227cbD2ba64735a4")
  const { data: totalCommission } = useContractRead(contract, "operatorTotalCommission")
  const { mutateAsync: drawWinnerTicket } = useContractWrite(contract, "DrawWinnerTicket")
  const { mutateAsync: refundAll } = useContractWrite(contract, "RefundAll")
  const { mutateAsync: restartDraw } = useContractWrite(contract, "restartDraw")
  const { mutateAsync: withdrawCommission } = useContractWrite(contract, "WithdrawCommission")

  const handleDrawWinnerTicket = async () => {
    const notification = toast.loading("Picking the lucky Winner...🍀")
    try {
      const data = await drawWinnerTicket([{}])
      toast.success("Winner Picked! 🎉", { id: notification })
      console.log("call success")
    }
    catch (e) {
      toast.error("Something went wrong! 🤔", { id: notification })
      console.log("call failed")
    }
  }

  const handleRefundAll = async () => {
    const notification = toast.loading("Refunding...")
    try {
      const data = await refundAll([{}])
      toast.success("Done", { id: notification })
      console.log("call success")
    }
    catch (e) {
      toast.error("Something went wrong! 🤔", { id: notification })
      console.log("call failed")
    }
  }

  const handleRestartDraw = async () => {
    const notification = toast.loading("Restarting...")
    try {
      const data = await restartDraw([{}])
      toast.success("A new draw has started", { id: notification })
      console.log("call success")
    }
    catch (e) {
      toast.error("Something went wrong! 🤔", { id: notification })
      console.log("call failed")
    }
  }

  const handleWithdrawCommission = async () => {
    const notification = toast.loading("Withdrawing your commision...")
    try {
      const data = await withdrawCommission([{}])
      toast.success("Done! 🎉", { id: notification })
      console.log("call success")
    }
    catch (e) {
      toast.error("Something went wrong! 🤔", { id: notification })
      console.log("call failed")
    }
  }
  return (
    <div className='text-white px-5 py-3 rounded-md border-emerald-300/20 border'>
      <h2 className='font-bold text-center'>Admin Controls</h2>
      <p className='mb-5'>Total commision to be withdrawn:  {totalCommission && ethers.utils.formatEther(totalCommission?.toString())}{" "}{currency}</p>
      <div className='flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-0'>
        <button onClick={handleDrawWinnerTicket} className='bg-[#091f1c] p-2 flex-1 rounded-md border-[#004337]  border-2 hover:bg-emerald-500/50'>
          <StarIcon className='h-6 mx-auto mb-2 md:flex-row md:space-y-0' />Draw Winner</button>
        <button onClick={handleWithdrawCommission} className='bg-[#091f1c] p-2 flex-1 rounded-md border-[#004337]  border-2 hover:bg-emerald-500/50'>
          <CurrencyDollarIcon className='h-6 mx-auto mb-2' />
          Withdraw Commision</button>
        <button onClick={handleRestartDraw} className='bg-[#091f1c] p-2 flex-1 rounded-md border-[#004337]  border-2 hover:bg-emerald-500/50'>
          <ArrowPathIcon className='h-6 mx-auto mb-2' />
          Restart Draw</button>
        <button onClick={handleRefundAll} className='bg-[#091f1c] p-2 flex-1 rounded-md border-[#004337]  border-2 hover:bg-emerald-500/50'>
          <ArrowUturnDownIcon className='h-6 mx-auto mb-2' />
          Refund All</button>
      </div>
    </div>
  )
}

export default AdminControl