import { useAppSelector } from '@/hooks'

import IGHeader from '@/components/IGHeader'
import IGUser from '@/components/IGUser'

const Following: React.FC = () => {
	const friendReducer = useAppSelector((state) => state.friendReducer)
	const friends = friendReducer.friends

	return (
		<>
			<IGHeader />
			<main className='max-w-[967px] mx-auto px-4'>
				<p className='my-6 text-2xl font-bold'>Following</p>
				<div className='p-4 bg-white border border-gray-300 rounded-lg'>
					{friends.map((item) => {
						const { id, account, avatar, isFollowing, name } = item
						return (
							<div className='-mt-3' key={id}>
								<IGUser id={id} account={account} name={name} avatar={avatar} isFollowing={isFollowing} showFollow />
							</div>
						)
					})}
				</div>
			</main>
		</>
	)
}

export default Following
