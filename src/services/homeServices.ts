import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type IGPost = {
	id: number
	account: string
	avatar: string
	photo: string
	likes: number
	description: string
	hashTags: string
	commentNums: number
	createTime: string
}

type IGStory = {
	id: number
	name: string
	avatar: string
}

// 建立 RTKQ 的 API service，並取名為 homeApi。
export const homeApi = createApi({
	reducerPath: 'homeApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://fake-ins-api-production.up.railway.app/' }),
	endpoints: (builder) => ({
		getIGPosts: builder.query<IGPost[], number | 'all'>({
			query: (id) => {
				if (id !== 'all') return `posts/${id}`
				return 'posts'
			},
		}),
		getIGStoies: builder.query<IGStory[], number | 'all'>({
			query: (id) => {
				if (id !== 'all') return `stories/${id}`
				return 'stories'
			},
		}),
	}),
})

// homeApi 會帶有 useGetIGPostsQuery、useGetIGStoiesQuery 方法，可直接呼叫。
export const { useGetIGPostsQuery, useGetIGStoiesQuery } = homeApi
