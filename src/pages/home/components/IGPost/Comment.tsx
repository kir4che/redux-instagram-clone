import { BsBookmark, BsChat, BsHeart, BsShare } from 'react-icons/bs'

type IGPostProps = {
	likes: number
	account: string
	description: string
	hashTags: string
	commentNums: number
	createTime: string
}

const Comment: React.FC<IGPostProps> = ({ likes, commentNums, description, hashTags, createTime, account }) => {
	return (
		<div className='px-3'>
			<section className='box-border flex justify-between my-3'>
				<div className='flex items-center space-x-3.5'>
					<BsHeart className='w-[22px] h-[22px]' />
					<BsChat className='w-[22px] h-[22px] scale-x-[-1]' />
					<BsShare className='w-[22px] h-[22px]' />
				</div>
				<BsBookmark className='w-[22px] h-[22px]' />
			</section>
			<p className='font-bold'>{likes} 個人都說讚</p>
			<p>
				<span className='inline-block mr-1 font-bold'>{account}</span>
				{description}
			</p>
			<p className='text-blue-900'>{hashTags}</p>
			<p className='text-gray-400 font-[500]'>查看全部 {commentNums} 則留言</p>
			<p className='mt-2 text-xs text-gray-400'>{createTime}</p>
		</div>
	)
}

export default Comment
