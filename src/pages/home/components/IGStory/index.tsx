import Loading from 'components/Loading'
import { useGetIGStoiesQuery } from 'services/homeServices'
import Item from './Item'

const IGStory: React.FC = () => {
	const { data, isLoading } = useGetIGStoiesQuery('all')

	return (
		<div className='flex items-center w-full h-[118px] mb-4 pt-2 px-5 space-x-4 bg-white border-[1px] border-gray-300 rounded-lg box-border overflow-x-auto overflow-y-hidden no-scrollbar'>
			{isLoading && (
				<div className='flex justify-center w-full'>
					<Loading />
				</div>
			)}
			{!isLoading &&
				data?.map((item) => {
					const { id, name, avatar } = item
					return (
						<div key={id}>
							<Item name={name} avatar={avatar} />
						</div>
					)
				})}
		</div>
	)
}

export default IGStory
