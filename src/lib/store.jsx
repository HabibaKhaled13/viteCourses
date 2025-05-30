import { configureStore } from "@reduxjs/toolkit";
import { apiReducuer } from "./apiCourses";
import { testReducer } from "./testmonial";
import { courseReducer } from "./courseCategory";
import { instrcutorsReducer } from "./instrcutors";

export let store = configureStore({
  reducer: {
    apiProvider: apiReducuer,
    testProvider: testReducer,
    courseProvider: courseReducer,
    instructorsProvider: instrcutorsReducer
  },
});
