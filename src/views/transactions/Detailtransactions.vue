<template>
  <div class="card text-center mt-4" v-for="t in transaction" :key ="t.id">
  <div class="card-header">Detail Transaksi</div>
  <div class="card-body">
    <h5 class="card-title">{{t.tanggal_transaksi}}</h5>
    <p class="card-text">{{t.nama}}</p>
    <p class="card-text">{{t.email}}</p>
    <p class="card-text">{{t.alamat}}</p>
    <p class="card-text">{{t.berat}}</p>
    <p class="card-text">{{t.keterangan}}</p>
  </div>
  <div class="card-footer">
   <router-link
              class="btn btn-success"
              :to="{ name: 'Edittransactions', params: { id: t.id } }"
              >Edit</router-link
            >
            <button
              @click.prevent="transactionDelete(t.id)"
              class="btn btn-danger"
            >
              Delete
            </button>
  </div>
</div>
</template>

<script>
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";
export default {
  setup() { 
    
    let transaction =ref([]);
    const router = useRouter();
    const route = useRoute();
    onMounted(() => {
      axios
        .get(` http://127.0.0.1:8000/api/transactions/${route.params.id}`)
        .then((Response) => {
          console.log(Response.data.data.nama);
          transaction.value = Response.data.data;
         
        })
        .catch((error) => {
          console.log(error.Response.data);
        });
    });
   function transactionDelete(id){
      axios
        .delete(`http://127.0.0.1:8000/api/transactions/${id}`)
        .then(() => {
          router.go(-1);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    
    return {
      transaction,
      router,
      transactionDelete,
      route,
    };
  },
};
</script>

<style>
</style>