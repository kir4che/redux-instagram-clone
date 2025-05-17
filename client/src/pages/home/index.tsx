import IGHeader from '@/components/IGHeader'
import { useGetIGPostsQuery } from '@/services/homeServices'

import Loading from '@/components/Loading'
import IGPost from '@/components/IGPost'
import IGProfile from '@/components/IGProfile'
import IGStory from '@/components/IGStory'

const IGPostList: React.FC = () => {
	const { data, isLoading } = useGetIGPostsQuery()

	return (
		<>
			{isLoading && (
				<div className='flex justify-center w-full mt-20'>
					<Loading />
				</div>
			)}
			{!isLoading &&
				data?.map((item) => {
					const { id, account, avatar, photo, likes, description, hashTags, commentNums, createTime } = item
					return (
						<div key={id}>
							<IGPost
								account={account}
								avatar={avatar}
								photo={photo}
								likes={likes}
								description={description}
								hashTags={hashTags}
								commentNums={commentNums}
								createTime={createTime}
							/>
						</div>
					)
				})}
		</>
	)
}

const Home: React.FC = () => {
	return (
		<>
			<IGHeader />
			<div className='max-w-[1024px] mx-auto mt-4 px-24'>
				<div className='flex justify-center'>
					<div className='w-screen'>
						<IGStory />
						<IGPostList />
					</div>
					<div className='w-[567px]'>
						<IGProfile />
					</div>
				</div>
			</div>
		</>
	)
}

export default Home
