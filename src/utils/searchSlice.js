import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
	name: "search",
	initialState: {
		cache: {}
	},
	reducers: {
		cacheResults: (state, action) => {
			// ip: ["ip", "ipho", "iphone"]
			state.cache = { ...state.cache, ...action.payload };
		}
	}
});

export const { cacheResults } = searchSlice.actions;
export default searchSlice.reducer;

/* 

Cache: 

[i,ip,iph,ipho,iphone]

time complexity of an array = O(n)
time complexity of an object/Hash Map = O(1)

{
  i:
  ip:
  iph:
  ipho:
  iphone:
}
*/
