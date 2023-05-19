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
        console.log('trying to delete ' + this.docType + ' ' + this.docID);
        // await deleteDoc(doc(db, this.docType, this.docID));
        await deleteDoc(doc(productCollection, this.docID));
        console.log('deleted');
      } catch (error) {
        console.log(error);
      }
    },
  },
});
