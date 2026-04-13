import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchParticipants = createAsyncThunk(
  'participants/fetchByEvent',
  async (eventId) => {
    console.log("Chargement des participants pour l'événement:", eventId);
    await new Promise(resolve => setTimeout(resolve, 800)); // Імітація затримки
    return [
      { id: 1, name: "Jean Dupont", email: "jean.dupont@example.fr" },
      { id: 2, name: "Marie Claire", email: "m.claire@test.fr" },
      { id: 3, name: "Luc Besson", email: "luc.b@cinema.fr" }
    ];
  }
);

const participantsSlice = createSlice({
  name: 'participants',
  initialState: {
    items: [],
    loading: false,
    error: null,
    searchQuery: ''
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchParticipants.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchParticipants.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchParticipants.rejected, (state) => {
        state.loading = false;
        state.error = "Erreur de chargement";
      });
  }
});

export const { setSearchQuery } = participantsSlice.actions;
export default participantsSlice.reducer;