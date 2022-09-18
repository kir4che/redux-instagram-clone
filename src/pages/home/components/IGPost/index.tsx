import IGUser from 'components/IGUser'
import Comment from './Comment'

type IGPostProps = {
	avatar: string
	account: string
	photo: string
	likes: number
	description: string
	hashTags: string
	commentNums: number
	createTime: string
}

const IGPost: React.FC<IGPostProps> = ({
	account,
	avatar,
	photo,
	likes,
	description,
	hashTags,
	commentNums,
	createTime,
}) => {
	return (
		<article className='mb-4 pb-3 bg-white border-[1px] border-gray-300 rounded-lg shadow-sm'>
			<section className='pl-3'>
				<IGUser account={account} avatar={avatar} />
			</section>
			<img src={photo} alt='' />
			<Comment
				account={account}
				likes={likes}
				description={description}
				hashTags={hashTags}
				commentNums={commentNums}
				createTime={createTime}
			/>
		</article>
	)
}

export default IGPost
