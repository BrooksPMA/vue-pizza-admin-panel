import { defineStore } from 'pinia';
import { doc, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '../plugins/firebase.js';

export const setProductStore = defineStore({
  id: 'setProductStore',

  state: () => ({
    form: {},
    isLoading: false,
    loaded: false,
  }),

  getters: {
    docType: (state) => state.form.type,
    docID: (state) => state.form.name,
  },

  actions: {
    async submitForm() {
      this.isLoading = true;
      try {
        await setDoc(doc(db, this.docType, this.docID), this.form);
        console.log(
          this.docType +
            ' c именем ' +
            this.docID +
            ' был успешно добавлен в бд!'
        );
        this.loaded = true;
      } catch (error) {
        console.error('Ошибка: ', error);
      }
      setTimeout(() => (this.loaded = false), 1000);
      this.isLoading = false;
    },
    async updateForm() {
      this.isLoading = true;
      try {
        await updateDoc(doc(db, this.docType, this.docID), this.form);
        this.loaded = true;
      } catch (error) {
        console.log(error);
      }
      setTimeout(() => (this.loaded = false), 1000);
      this.isLoading = false;
    },
  },
});
