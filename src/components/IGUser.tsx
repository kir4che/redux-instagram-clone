import { useAppDispatch } from 'hooks'
import { memo } from 'react'
import { follow, unFollow } from 'slices/friendSlice'

type IGUserProps = {
	size?: 'medium' | 'small' | 'tiny'
	showFollow?: boolean
	isFollowing?: boolean
	account?: string
	name?: string
	avatar?: string
	id?: number
}

const IGUser: React.FC<IGUserProps> = memo(
	({ size = 'small', showFollow = false, isFollowing = false, account, name, avatar, id }) => {
		const dispatch = useAppDispatch()

		function followClickHandler() {
			if (id === undefined) return
			if (isFollowing) dispatch(unFollow(id))
			else dispatch(follow(id))
		}

		return (
			<div className='flex justify-between items-center h-[58px]'>
				<div className='flex items-center space-x-3'>
					<div
						className={`${size === 'medium' ? 'w-16 h-16 ring-[1px] border-2 border-white ring-gray-300' : 'w-8 h-8'} ${
							size === 'tiny' ? 'w-[24px] h-[24px]' : ''
						} bg-center bg-cover rounded-full cursor-pointer`}
						style={{ backgroundImage: `url(${avatar})` }}
					></div>
					<div className={`${size === 'tiny' ? 'hidden' : 'block'} font-bold`}>
						<p className='-mb-1 cursor-pointer'>{account}</p>
						<p className='text-gray-400'>{name}</p>
					</div>
				</div>
				{showFollow && (
					<p
						className={`${isFollowing ? 'text-gray-700' : 'text-blue-400'} pt-1 text-xs font-bold cursor-pointer`}
						onClick={followClickHandler}
					>
						{isFollowing ? 'FOLLOWING' : 'FOLLOW'}
					</p>
				)}
			</div>
		)
	}
)

export default IGUser
