import React from "react";
import { FiCopy } from "react-icons/fi";
const Referal: React.FC = () => (
  <div className='space-y-9'>
    <div className='text-center'>
      <p className='font-bold'>Invite your friends and get N200 per referral</p>
      <p className='text-sm text-gray-400'>
        Earn money when your friends sign up using your regerral code and verify
        their account &amp; washes an minimun of two vehicles
      </p>
    </div>
    <div className='cursor-pointer flex justify-between items-center border-2 border-gray-400 border-dashed p-4 rounded-lg '>
      <span className='font-bold'>LIV31</span>
      <span className='text-xs flex items-center'>
        <FiCopy className='text-xl mr-3' />
        <span>Copy</span>
      </span>
    </div>
    <div className='bg-white rounded-lg flex justify-between items-center p-4'>
      <span className='text-sm'>People referred</span>
      <span className='text-lg font-bold'>0</span>
    </div>
  </div>
);
export default Referal;
