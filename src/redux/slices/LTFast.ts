import { createSlice } from '@reduxjs/toolkit';
import QuestionData from '../../test.json';

// type Questions = {
//     id: number;
//     question: string;
//     options: string[];
//     correctAnswer: string;
//   }

const LTFastSlice = createSlice({
    name: 'questions',
    initialState: {
        questions: QuestionData,
    },
    reducers: {
      setQuestions(state, action) {
        state.questions = action.payload;
      },
    }})

    export const {} = LTFastSlice.actions;
    export default LTFastSlice.reducer;