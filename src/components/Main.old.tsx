import { useAppContext } from '../contexts/AppContext';

const Main = () => {
	const { getDocuments } = useAppContext();
	const documents = getDocuments();
	return (
		<>
			<main className='space-y-4 bg-red-200'>
				old design
			{documents.map((document) => (
				<div
					key={crypto.randomUUID()}
					className='h-32 border-[3px] border-dashed rounded-xl flex items-center justify-center'
				>
					{document.name}
				</div>
			))}
			</main>
		</>
	);
};

export default Main;
