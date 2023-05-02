import { defineStore } from 'pinia';
import { collection, addDoc, doc, setDoc } from 'firebase/firestore';
import { db } from '../plugins/firebase.js';

export const useProductStore = defineStore({
  id: 'productStore',

  state: () => ({
    form: {},
  }),

  getters: {
    dbName: (state) => state.form.type,
    dbID: (state) => state.form.name,
  },

  // Action to submit form data to Firestore using addDoc()
  actions: {
    async submitForm() {
      try {
        await setDoc(doc(db, 'pizza', this.dbID), this.form);
      } catch (error) {
        console.error('Ошибка: ', error);
      }
    },
  },
});
