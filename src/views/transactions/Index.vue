<template>
  <div class="home">
    <!--img alt="Vue logo" src="../assets/logo.png">-->
    <Slider />
    <hr class="my-3" />
    <router-link class="btn btn-primary" to="/createtransactions"
      >Add transactions</router-link>


<Cardtransactions :transactions="transactions"/>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">Tanggal Transaksi</th>
          <th scope="col">Nama</th>
          <th scope="col">Email</th>
          <th scope="col">Alamat</th>
          <th scope="col">Berat</th>
          <th scope="col">Keterangan</th>
          <th scope="col">Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(transaction, index) in transactions" :key="index">
          <td>{{ transaction.tanggal_transaksi }}</td>
          <td>{{ transaction.nama }}</td>
          <td>{{ transaction.email }}</td>
          <td>{{ transaction.alamat }}</td>
          <td>{{ transaction.berat }}</td>
          <td>{{ transaction.keterangan }}</td>
          <td>
            <router-link
              class="btn btn-success"
              :to="{ name: 'Edittransactions', params: { id: transaction.id } }"
              >Edit</router-link
            >
            <button
              @click.prevent="transactionDelete(transaction.id)"
              class="btn btn-danger"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
// @ is an alias to /src
import Slider from "@/components/Slider.vue";
import Cardtransactions from "@/components/Cardtransactions.vue";
import { onMounted, ref } from "vue";
export default {
  name: "Home",
  components: {
    Slider,
    Cardtransactions,
  },
  setup() {
    let transactions = ref([]);
    onMounted(() => {
      axios.get('http://127.0.0.1:8000/api/transactions/')
        .then((Response) => {
          transactions.value = Response.data.data;
        })
        .catch((error) => {
          console.log(error);
        })
    })
    function transactionDelete(id){
      axios
        .delete(`http://127.0.0.1:8000/api/transactions/${id}`)
        .then(() => {
          let z = this.transactions.map((transactions) => transactions.id).indexOf(id);
          this.transactions.splice(z, 1);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    return {
      transactions,
      transactionDelete,
    };
  },
};
</script>