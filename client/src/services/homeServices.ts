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
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3004/' }),
	endpoints: (builder) => ({
		// 取得全部貼文
		getIGPosts: builder.query<IGPost[], void>({
			query: () => 'posts',
		}),
		// 取得單一貼文
		getIGPostById: builder.query<IGPost, number>({
			query: (id) => `posts/${id}`,
		}),
		// 取得全部限時動態
		getIGStories: builder.query<IGStory[], void>({
			query: () => 'stories',
		}),
		// 取得單一限時動態
		getIGStoryById: builder.query<IGStory, number>({
			query: (id) => `stories/${id}`,
		}),
	}),
})

// homeApi 會帶有以下方法，可直接呼叫。
export const { 
	useGetIGPostsQuery, 
	useGetIGPostByIdQuery, 
	useGetIGStoriesQuery, 
	useGetIGStoryByIdQuery 
} = homeApi