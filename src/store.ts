import { configureStore } from '@reduxjs/toolkit'
import { homeApi } from 'services/homeServices'
import friendReducer from 'slices/friendSlice'

// 透過 configureStore 建立 Redux Store
export const store = configureStore({
	reducer: {
		[homeApi.reducerPath]: homeApi.reducer,
		friendReducer,
	},
	// 加入 api middleware 來啟用 caching、invalidation、polling 等其他方法
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(homeApi.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export default store
