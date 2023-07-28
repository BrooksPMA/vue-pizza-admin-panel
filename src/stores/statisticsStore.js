import { defineStore } from 'pinia';
import { doc, getDoc, updateDoc, increment } from 'firebase/firestore';
import { db } from '../plugins/firebase.js';

export const getStatisticsStore = defineStore({
  id: 'statisticsStore',

  state: () => ({
    data: [],
    isLoading: false,
  }),

  getters: {},

  actions: {
    async getOrderStatusData() {
      this.isLoading = true;
      this.data = [];
      try {
        const ref = doc(db, 'statistics', 'orderStatus');
        this.data = (await getDoc(ref)).data();
        this.isLoading = false;
      } catch (error) {
        console.log(error);
      }
    },
    async updateStatusCount(status) {
      const ref = doc(db, 'statistics', 'orderStatus');
      switch (status) {
        case 'inWork':
          await updateDoc(ref, {
            active: increment(-1),
            inWork: increment(1),
          });
          console.log('Добавлен в работу');
          break;
        case 'done':
          await updateDoc(ref, {
            inWork: increment(-1),
            done: increment(1),
          });
          console.log('Добавлен в выполненные');
          break;
        case 'cancelled':
          await updateDoc(ref, {
            inWork: increment(-1),
            cancelled: increment(1),
          });
          console.log('Добавлен в отменённые');
          break;
        case 'expired':
          await updateDoc(ref, {
            active: increment(-1),
            expired: increment(1),
          });
          console.log('Добавлен в просроченные');
          break;
      }
      // if (status === 'inWork') {
      //   await updateDoc(ref, {
      //     active: increment(-1),
      //     inWork: increment(1),
      //   });
      //   console.log('Добавлен в работу');
      // } else if (status === 'done') {
      //   await updateDoc(ref, {
      //     inWork: increment(-1),
      //     done: increment(1),
      //   });
      //   console.log('Добавлен в выполненные');
      // } else if (status === 'cancelled') {
      //   await updateDoc(ref, {
      //     inWork: increment(-1),
      //     cancelled: increment(1),
      //   });
      //   console.log('Добавлен в отменённые');
      // } else if (status === 'expired') {
      //   await updateDoc(ref, {
      //     active: increment(-1),
      //     expired: increment(1),
      //   });
      //   console.log('Добавлен в просроченные');
      // }
    },
    async clearOrderStatus() {
      const ref = doc(db, 'statistics', 'orderStatus');
      await updateDoc(ref, {
        active: 0,
        expired: 0,
        inWork: 0,
        done: 0,
        cancelled: 0,
      });
      console.log('clearOrderStatus');
    },
  },
});
