import { Link } from 'react-router-dom'

import { AiOutlineMessage } from 'react-icons/ai'
import { FiHeart, FiPlusSquare, FiUsers } from 'react-icons/fi'
import { VscHome } from 'react-icons/vsc'
import IGUser from '@/components/IGUser'

const IGNav: React.FC = () => {
	return (
		<nav className='flex items-center space-x-5'>
			<Link to='/'>
				<VscHome className='w-[26px] h-[26px]' />
			</Link>
			<Link to='/'>
				<AiOutlineMessage className='w-6 h-6' />
			</Link>
			<Link to='/'>
				<FiPlusSquare className='w-6 h-6' />
			</Link>
			<Link
				to='/following'
				onClick={() => {
					fetch('http://localhost:3004/posts/1', {
						method: 'PUT',
						body: JSON.stringify({ title: 'json-server', author: '2222' }),
						headers: { 'content-type': 'application/json' },
					})
				}}
			>
				<FiUsers className='w-6 h-6' />
			</Link>
			<Link to='/'>
				<FiHeart className='w-6 h-6' />
			</Link>
			<Link to='/'>
				<IGUser avatar='/images/avatar.png' size='tiny' />
			</Link>
		</nav>
	)
}

export default IGNav
