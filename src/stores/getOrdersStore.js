import { defineStore } from 'pinia';
import {
  doc,
  collection,
  deleteDoc,
  getDoc,
  getDocs,
  orderBy,
  query,
  updateDoc,
} from 'firebase/firestore';
import { db } from '../plugins/firebase.js';

export const getOrdersStore = defineStore({
  id: 'getOrdersStore',

  state: () => ({
    data: [],
    isLoading: false,
  }),

  actions: {
    async getOrders() {
      this.isLoading = true;
      this.data = [];
      try {
        const docRef = collection(db, 'orders');
        const orderedQuery = query(docRef, orderBy('id', 'desc'));
        const querySnapshot = await getDocs(orderedQuery);

        querySnapshot.forEach((doc) => {
          this.data.push(doc.data());
        });
        this.isLoading = false;
      } catch (error) {
        console.error('Ошибка: ', error);
      }
    },
    async getOrderWithId(id) {
      this.isLoading = true;
      this.data = [];
      try {
        const docRef = doc(db, 'orders', id);
        this.data = (await getDoc(docRef)).data();
        this.isLoading = false;
      } catch (error) {
        console.log(error);
      }
    },
    async deleteAllDocuments() {
      try {
        const querySnapshot = await getDocs(collection(db, 'orders'));
        querySnapshot.docs.map((doc) => deleteDoc(doc.ref));
      } catch (error) {
        console.log(error);
      }
    },
    async updateOrderStatus(id, status) {
      this.isLoading = true;
      console.log('id: ', id);
      try {
        const orderRef = doc(db, 'orders', id);
        await updateDoc(orderRef, {
          status: status,
        });
        // this.getOrderWithId(id);
        this.isLoading = false;
      } catch (error) {
        console.log('updateOrderStatus error: ', error);
      }
    },
  },
});
