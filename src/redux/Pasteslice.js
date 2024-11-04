import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'

const initialState = {
  pastes : localStorage.getItem("pastes")
  ? JSON.parse(localStorage.getItem("pastes"))
  : []
}

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addToPastes: (state, action) => {
        // extracting paste from the action 
        const paste = action.payload;
      
        // Check if a paste with the same title already exists
        // The some method is used to check if there is any existing paste in the pastes array that has the same title as the new paste.
        const exists = state.pastes.some(existingPaste => existingPaste.title === paste.title);
        
        if (exists) {
          toast.error("Paste with this title already exists");
        } 
        else {
          state.pastes.push(paste);
          localStorage.setItem("pastes", JSON.stringify(state.pastes));
          toast.success("Paste created successfully");
        }
    },
      
    updateToPaste : (state , action) => {
      const paste = action.payload
    //   findind index of paste if paste already exists
      const index = state.pastes.findIndex((item) =>
        item._id === paste._id)

      if(index >= 0){
        // Update the paste at the found index

        state.pastes[index] = paste
        localStorage.setItem("pastes" , JSON.stringify(state.pastes))
        toast.success("Updated successfully")
      }

    },

    resetAllPaste: (state, action) => {
      state.pastes = [];
      localStorage.removeItem("pastes")
    },

    removeFromPaste(state , action){
        const pasteId = action.payload
        console.log(pasteId)
        const index = state.pastes.findIndex((item) => item._id === pasteId)

        if(index >= 0 ){
            state.pastes.splice(index , 1)
            localStorage.setItem("pastes" , JSON.stringify(state.pastes))
            toast.success("paste deleted")
        }
    }
  },
})

// Action creators are generated for each case reducer function
export const { addToPastes , updateToPaste , resetAllPaste , removeFromPaste } = pasteSlice.actions

export default pasteSlice.reducer