import { useAppSelector } from 'hooks'

import IGHeader from 'components/IGHeader'
import IGUser from 'components/IGUser'

const Following: React.FC = () => {
	const friendReducer = useAppSelector((state) => state.friendReducer)
	const friends = friendReducer.friends

	return (
		<>
			<IGHeader />
			<main className='max-w-[967px] mx-auto px-16 mobile:px-4'>
				<p className='box-border mt-6 mb-8 text-2xl font-bold mobile:mb-6'>Following</p>
				<div className='box-border p-4 bg-white border-[1px] border-gray-300 rounded-lg'>
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
