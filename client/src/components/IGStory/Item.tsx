type ItemProps = {
	name: string
	avatar: string
}

const Item: React.FC<ItemProps> = ({ name, avatar }) => {
	return (
		<div className='space-y-1 text-center cursor-pointer'>
			<div
				className='w-[60px] h-[60px] bg-center bg-cover ring-2 border-2 border-white ring-red-500 rounded-full'
				style={{
					backgroundImage: `url(${avatar})`,
				}}
			></div>
			<p>{name}</p>
		</div>
	)
}

export default Item
