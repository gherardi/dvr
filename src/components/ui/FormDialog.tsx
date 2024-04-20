import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

interface FormDialogProps {
	dialogTitle: string;
	dialogDescription?: string;
	isOpen: boolean;
	handleClose: () => void;
	onSubmit: () => void;
	children: React.ReactNode;
}

export default function FormDialog({
	dialogTitle,
	dialogDescription,
	isOpen,
	handleClose,
	onSubmit,
	children,
}: FormDialogProps) {
	return (
		<Transition appear show={isOpen} as={Fragment}>
			<Dialog as='div' className='relative z-10' onClose={handleClose}>
				<Transition.Child
					as={Fragment}
					enter='ease-out duration-300'
					enterFrom='opacity-0'
					enterTo='opacity-100'
					leave='ease-in duration-200'
					leaveFrom='opacity-100'
					leaveTo='opacity-0'
				>
					<div className='fixed inset-0 bg-black/25' />
				</Transition.Child>

				<div className='fixed inset-0 overflow-y-auto'>
					<div className='flex items-center justify-center min-h-full p-4 text-center'>
						<Transition.Child
							as={Fragment}
							enter='ease-out duration-300'
							enterFrom='opacity-0 scale-95'
							enterTo='opacity-100 scale-100'
							leave='ease-in duration-200'
							leaveFrom='opacity-100 scale-100'
							leaveTo='opacity-0 scale-95'
						>
							<Dialog.Panel className='w-full max-w-xl p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl'>
								<Dialog.Title
									as='h3'
									className='mb-2 text-lg font-medium leading-6 text-gray-900'
								>
									{dialogTitle}
								</Dialog.Title>
								{dialogDescription && (
									<div>
										<p className='text-sm text-gray-500'>{dialogDescription}</p>
									</div>
								)}
								<form className='space-y-4 mt-6' onSubmit={onSubmit}>
									{children}
								</form>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition>
	);
}
