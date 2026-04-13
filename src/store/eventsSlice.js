import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    { 
      id: 1, 
      title: "Conférence sur la santé mentale", 
      description: "Discussion sur la gestion de l'anxiété et du stress.",
      date: "2026-04-10", 
      organizer: "Centre de Psychologie",
      registered: true,
      isFavorite: true
    },
    { 
      id: 2, 
      title: "Atelier de pleine conscience", 
      description: "Exercices pratiques de pleine conscience.",
      date: "2026-04-15", 
      organizer: "Laboratoire Mind",
      registered: false,
      isFavorite: false
    },
    { 
      id: 3, 
      title: "Séminaire sur la dépression", 
      description: "Comprendre la dépression et les méthodes de traitement.",
      date: "2026-05-02", 
      organizer: "Fondation Santé",
      registered: true,
      isFavorite: true
    },
    { 
      id: 4, 
      title: "Groupe de soutien anxiété", 
      description: "Rencontres pour partager ses expériences.",
      date: "2026-05-10", 
      organizer: "Psych Club",
      registered: false,
      isFavorite: false
    }
  ],
};

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    toggleRegistration: (state, action) => {
      const event = state.items.find(item => item.id === action.payload);
      if (event) event.registered = !event.registered;
    },
    toggleFavorite: (state, action) => {
      const event = state.items.find(item => item.id === action.payload);
      if (event) event.isFavorite = !event.isFavorite;
    }
  }
});

export const { toggleRegistration, toggleFavorite } = eventsSlice.actions;
export default eventsSlice.reducer;