import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Friend = {
	id: number
	name: string
	account: string
	isFollowing: boolean
	avatar: string
}

type friendState = {
	friends: Friend[]
}

const initialState: friendState = {
	friends: [
		{
			id: 1,
			name: 'Max',
			account: 'max_999',
			isFollowing: true,
			avatar: '/images/avatars/a1.png',
		},
		{
			id: 2,
			name: 'fm',
			account: '__0831_xxx__',
			isFollowing: true,
			avatar: '/images/avatars/a2.png',
		},
		{
			id: 3,
			name: 'Joanne',
			account: 'gogogo0214',
			isFollowing: true,
			avatar: '/images/avatars/a3.png',
		},
		{
			id: 4,
			name: 'Focus',
			account: 'f0cus480',
			isFollowing: true,
			avatar: '/images/avatars/a4.png',
		},
		{
			id: 5,
			name: 'jenny',
			account: 'jennette2920',
			isFollowing: true,
			avatar: '/images/avatars/a5.png',
		},
		{
			id: 6,
			name: 'Alvin',
			account: 'alvin_999',
			isFollowing: true,
			avatar: '/images/avatars/a6.png',
		},
		{
			id: 7,
			name: 'Grace',
			account: 'gra444e',
			isFollowing: true,
			avatar: '/images/avatars/a7.png',
		},
		{
			id: 8,
			name: 'rance',
			account: 'hr23500098',
			isFollowing: true,
			avatar: '/images/avatars/a8.png',
		},
		{
			id: 9,
			name: 'Bruce',
			account: 'bruce_999',
			isFollowing: true,
			avatar: '/images/avatars/a9.png',
		},
		{
			id: 10,
			name: 'Amy',
			account: 'gogo_999',
			isFollowing: true,
			avatar: '/images/avatars/a10.png',
		},
	],
}

export const friendSlice = createSlice({
	name: 'friendsList',
	initialState,
	reducers: {
		follow: (state, action: PayloadAction<number>) => {
			const friends = state.friends
			for (let i = 0; i < friends.length; i++) {
				const friend = friends[i]
				if (friend.id === action.payload) friend.isFollowing = true
			}
		},
		unFollow: (state, action: PayloadAction<number>) => {
			const friends = state.friends
			for (let i = 0; i < friends.length; i++) {
				const friend = friends[i]
				if (friend.id === action.payload) friend.isFollowing = false
			}
		},
	},
})

export const { follow, unFollow } = friendSlice.actions

export default friendSlice.reducer
