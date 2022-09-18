import { Link } from 'react-router-dom'

import IGNav from './IGNav'

const IGHeader: React.FC = () => {
	return (
		<header className='sticky top-0 bg-white border-b-[1px] border-gray-300'>
			<div className='flex justify-between items-center max-w-[967px] h-[60px] mx-auto px-2 box-border tablet:px-4'>
				<Link to='/' className='w-[110px]'>
					<img src='/images/logo.svg' alt='' />
				</Link>
				<IGNav />
			</div>
		</header>
	)
}

export default IGHeader
