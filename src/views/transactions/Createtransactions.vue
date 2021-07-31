<template>
<div class="card shadow mt-3">
  <div class="card-body">
    <h5 class="card-title">Add Transactions</h5>
     <form class="row g-3" @submit.prevent="store">
    <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Tanggal Transaksi</label>
    <input type="text" class="form-control" id="inputEmail4" 
    v-model="transaction.tanggal_transaksi" />
      <div class="alert alert-danger" v-if="validation.tanggal_transaksi">
        {{ validation.tanggal_transaksi[0] }}
      </div>
  </div>
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Nama</label>
    <input type="text" class="form-control" id="inputEmail4" 
    v-model="transaction.nama" />
      <div class="alert alert-danger" v-if="validation.nama">
        {{ validation.nama[0] }}
      </div>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Email</label>
    <input type="text" class="form-control" id="inputPassword4"
    v-model="transaction.email"/>
    <div class="alert alert-danger" v-if="validation.email">
        {{ validation.email[0] }}
      </div>
  </div>
  <div class="col-6">
    <label for="inputAddress" class="form-label">Alamat</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="Masukkan Alamat"
    v-model="transaction.alamat" />
    <div class="alert alert-danger" v-if="validation.alamat">
        {{ validation.alamat[0] }}
      </div>
  </div>
    <div class="col-6">
    <label for="inputAddress" class="form-label">Berat</label>
    <input type="text" class="form-control" id="inputAddress"
    v-model="transaction.berat" />
    <div class="alert alert-danger" v-if="validation.berat">
        {{ validation.berat[0] }}
      </div>
  </div>
    <div class="col-6">
    <label for="inputAddress" class="form-label">Keterangan</label>
    <input type="text" class="form-control" id="inputAddress"
    v-model="transaction.keterangan" />
    <div class="alert alert-danger" v-if="validation.keterangan">
        {{ validation.keterangan[0] }}
      </div>
  </div>
  <div class="col-6">
    <label for="inputAddress" class="form-label">Notes</label>
    <select class="form-select" aria-label="Default select example" v-model="transaction.notes_id">
        <option v-for="note in notes" :key="note.id" :value="note.id">
          {{ note.id}}
          </option>
    </select>
  </div>
  
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Add</button>
  </div>
</form>
  </div>
</div>
 
</template>
<script>
import { ref } from 'vue';
import { reactive, onMounted } from 'vue';
import { useRouter } from 'vue-router'
import axios from 'axios'
//import { response } from 'express';
export default {
  setup() {
    const transaction = reactive({
      tanggal_transaksi: '',
      nama: '',
      email: '',
      alamat: '',
      berat: '',
      keterangan: '',
      notes_id: '',
    });
    let notes = ref([]);
    const validation = ref([]);
    const router = useRouter();
    onMounted(() =>{
      axios.get('http://127.0.0.1:8000/api/notes')
      .then((response) => {
        notes.value = response.data.data;
        console.log(response);
      })
      .catch((error) => {
        validation.value = error.response.data;
        console.log(error);
      });
});
    function store(){
      let tanggal_transaksi = transaction.tanggal_transaksi;
      let nama = transaction.nama;
      let email = transaction.email;
      let alamat = transaction.alamat;
      let berat = transaction.berat;
      let keterangan = transaction.keterangan;
      let notes_id = transaction.notes_id;
      axios.post('http://127.0.0.1:8000/api/transactions', {
        tanggal_transaksi: tanggal_transaksi,
        nama: nama,
        email: email,
        alamat: alamat,
        berat: berat,
        keterangan: keterangan,
        notes_id : notes_id,
      }).then(() => {
        router.push({
          name:'Home'
        })
      }).catch(error => {
        console.log(error)
      })
    }
    return {
      transaction,
      validation,
      router, 
      store,
      notes
    }
  },
}
</script>