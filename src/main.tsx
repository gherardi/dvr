import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppProvider } from './contexts/AppContext';
import Header from './components/Header.tsx';
import Main from './components/Main.tsx';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<AppProvider>
			<div className='max-w-6xl px-4 mx-auto'>
				<Header />
				<Main />
			</div>
		</AppProvider>
	</React.StrictMode>
);
