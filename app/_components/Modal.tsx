'use client';

import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
  Select,
} from '@headlessui/react';
import { useState } from 'react';

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className='ml-auto mr-2 lg:mr-4 py-1 px-2 xl:py-1 xl:px-3 rounded-md bg-slate-100 lg:text-2xl'
        onClick={() => setIsOpen(true)}
      >
        +
      </button>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className='relative z-50'
      >
        <div className='fixed inset-0 flex w-screen items-center justify-center p-4'>
          <DialogPanel className='max-w-lg space-y-4 border-2 rounded-xl border-primary bg-gray-400 p-12'>
            <DialogTitle className='font-bold'>
              Log Your Study Session
            </DialogTitle>
            <Description>How long was your study session?</Description>
            <div>
              <label htmlFor='unit' className='mr-2'>
                Minutes or Hours:
              </label>
              <Select
                name='unit'
                aria-label='Unit of measurement for time'
                className='mr-2 border-2 rounded-lg'
              >
                <option value='hours'>Hours</option>
                <option value='minutes'>Minutes</option>
              </Select>
            </div>
            <label htmlFor='log'>Session Length:</label>
            <input
              type='number'
              className='ml-2 border-2 rounded-lg border-primary'
              name='log'
            />
            <div className='flex gap-4'>
              <button
                className='border-2 p-1 px-2 rounded-md bg-red-400'
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
              <button
                className='border-2 py-1 px-2 rounded-md bg-blue-400'
                onClick={() => setIsOpen(false)}
              >
                Log
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
