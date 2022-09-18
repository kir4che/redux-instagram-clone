import { useAppSelector } from 'hooks'
import { Link } from 'react-router-dom'

import IGUser from 'components/IGUser'

const IGProfile: React.FC = () => {
	const friendReducer = useAppSelector((state) => state.friendReducer)
	const friends = friendReducer.friends.slice(0, 3)

	return (
		<aside className='box-border py-5 ml-8'>
			<IGUser account='kir4che' name='🍒' avatar='/images/avatar.png' size='medium' />
			<div className='flex items-center justify-between my-4 font-bold'>
				<p className='text-[15px] text-[#8E8E8E]'>推薦用戶</p>
				<Link to='/following'>
					<p className='text-[13px]'>查看全部</p>
				</Link>
			</div>
			<section className='pl-1 mb-3'>
				{friends.map((item) => {
					const { id, account, avatar, isFollowing } = item
					return (
						<div className='-mt-3' key={id}>
							<IGUser id={id} account={account} avatar={avatar} isFollowing={isFollowing} showFollow />
						</div>
					)
				})}
			</section>
			<footer className='text-[#c7c7c7] space-y-3'>
				<p className='font-medium leading-5 tracking-tighter'>
					關於・使用說明・新聞稿・API・工作機會・隱私・
					<br />
					使用條款・地點・語言
				</p>
				<p className='font-semibold'>© 2022INSTAGRAM</p>
			</footer>

			{/* <div className="-mt-3">
      <IGUser showFollow />
    </div>
    <div className="-mt-3">
      <IGUser showFollow />
    </div>
    <div className="-mt-3">
      <IGUser showFollow />
    </div> */}
		</aside>
	)
}

export default IGProfile
