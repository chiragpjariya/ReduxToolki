import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    Datas: [
        {
            id: 1,
            text: "hellow"
        }
    ]
}

export const FormSlice = createSlice({
    name: "Form",
    initialState,
    reducers: {
        AddData: (state, action) => {
            const data = {
                id: nanoid(),
                text: action.payload.text,
                password: action.payload.password,
            }
            state.Datas.push(data);
        }
    }
})


// export {AddData} = FormSlice.actions
export default FormSlice.reducer;
export const { AddData } = FormSlice.actions
