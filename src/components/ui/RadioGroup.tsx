import { useState } from 'react';
import { RadioGroup } from '@headlessui/react';

const plans = [
	{
		name: 'Startup',
		ram: '12GB',
		cpus: '6 CPUs',
		disk: '160 GB SSD disk',
	},
	{
		name: 'Business',
		ram: '16GB',
		cpus: '8 CPUs',
		disk: '512 GB SSD disk',
	},
	{
		name: 'Enterprise',
		ram: '32GB',
		cpus: '12 CPUs',
		disk: '1024 GB SSD disk',
	},
];

export default function Example({ options: plans }) {
	const [selected, setSelected] = useState(plans[0]);

	return (
		<div className='w-full px-4 py-16'>
			<div className='mx-auto w-full max-w-md'>
				<RadioGroup value={selected} onChange={setSelected}>
					<RadioGroup.Label className='sr-only'>Server size</RadioGroup.Label>
					<div className='space-y-2'>
						{plans.map((plan) => (
							<RadioGroup.Option
								key={plan.name}
								value={plan}
								className={({ active, checked }) =>
									`${
										active
											? 'ring-2 ring-white/60 ring-offset-2 ring-offset-sky-300'
											: ''
									}
                  ${checked ? 'bg-sky-900/75 text-white' : 'bg-white'}
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
								}
							>
								{({ checked }) => (
									<>
										<div className='flex w-full items-center justify-between'>
											<div className='flex items-center'>
												<div className='text-sm'>
													<RadioGroup.Label
														as='p'
														className={`font-medium  ${
															checked ? 'text-white' : 'text-gray-900'
														}`}
													>
														{plan.name}
													</RadioGroup.Label>
													<RadioGroup.Description
														as='span'
														className={`inline ${
															checked ? 'text-sky-100' : 'text-gray-500'
														}`}
													>
														<span>
															{plan.ram}/{plan.cpus}
														</span>{' '}
														<span aria-hidden='true'>&middot;</span>{' '}
														<span>{plan.disk}</span>
													</RadioGroup.Description>
												</div>
											</div>
											{checked && (
												<div className='shrink-0 text-white'>
													<CheckIcon className='h-6 w-6' />
												</div>
											)}
										</div>
									</>
								)}
							</RadioGroup.Option>
						))}
					</div>
				</RadioGroup>
			</div>
		</div>
	);
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg viewBox='0 0 24 24' fill='none' {...props}>
			<circle cx={12} cy={12} r={12} fill='#fff' opacity='0.2' />
			<path
				d='M7 13l3 3 7-7'
				stroke='#fff'
				strokeWidth={1.5}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
}

// <div className='flex gap-4'>
// <div className='input-container relative w-full'>
// <input
// {...register('costante_peso')}
// id='UOMO'
// value='UOMO'
// type='radio'
// // name='costante_peso'
// className='absolute h-full w-full m-0 cursor-pointer z-10 opacity-0 peer/uomo'
// checked
// />
// <div className='flex flex-col items-center peer-checked/uomo:bg-accent peer-checked/uomo:text-background h-full border rounded transition py-4'>
// <label htmlFor='UOMO' className='font-medium'>
// Uomo
// </label>
// </div>
// </div>

// <div className='input-container relative w-full'>
// <input
// {...register('costante_peso')}
// id='DONNA'
// value='DONNA'
// type='radio'
// // name='costante_peso'
// className='absolute h-full w-full m-0 cursor-pointer z-10 opacity-0 peer/donna'
// />
// <div className='flex flex-col items-center peer-checked/donna:bg-accent peer-checked/donna:text-background h-full border rounded transition py-4'>
// <label htmlFor='DONNA' className='font-medium '>
// Donna
// </label>
// </div>
// </div>
// </div>
