import { defineStore } from 'pinia';
import { doc, collection, deleteDoc } from 'firebase/firestore';
import { db } from '../plugins/firebase.js';

export const delProductStore = defineStore({
  id: 'delProductStore',

  state: () => ({
    data: {},
  }),

  getters: {
    docType: (state) => state.data.type,
    docID: (state) => state.data.name,
  },

  actions: {
    async delDocWithType() {
      const productCollection = collection(db, this.docType);
      try {
        await deleteDoc(doc(productCollection, this.docID));
      } catch (error) {
        console.log(error);
      }
    },
  },
});
