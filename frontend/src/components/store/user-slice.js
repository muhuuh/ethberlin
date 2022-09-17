import { createSlice } from "@reduxjs/toolkit";

const DUMMY_DATA = [
  {
    id: 0,
    email: "lala@outlook.com",
    wallet: "12345",
    logedIn: false,
    achievement: [],
  },
  {
    id: 1,
    email: "tom@outlook.com",
    wallet: "13579",
    logedIn: false,
    achievement: [],
  },
  {
    id: 2,
    email: "ling@outlook.com",
    wallet: "02468",
    logedIn: false,
    achievement: [],
  },
];

const defaultState = { userList: DUMMY_DATA, totalUsers: 0 };

const userSlice = createSlice({
  name: "user",
  initialState: defaultState,
  reducers: {
    addUser(state, action) {
      const newUser = action.payload;
      const existingUser = state.userList.find(
        (user) => user.id === newUser.id
      );

      if (existingUser) {
        return;
      } else {
        state.totalUsers++;
        state.userList.push({
          id: newUser.id,
          email: newUser.email,
          wallet: newUser.wallet,
          logedIn: newUser.logedIn,
          achievement: [],
        });
      }
    },
    addReward(state, action) {
      const id = action.payload.id;
      const existingUser = state.userList.find((user) => user.id === id);

      if (!existingUser) {
        return;
      } else {
        existingUser.userList.achievement.push(action.payload.reward);
      }
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice;
