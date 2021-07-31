<template>
<div class="row">
  <div class="col-lg-4 mt-3" 
  v-for="(transaction, index) in transactions" :key="index">
  <div class="card">
  <div class="card-body">
    <h5 class="card-title">{{transaction.tanggal_transaksi}}</h5>
    <p class="card-text">{{transaction.nama}}</p>
    <p class="card-title">{{transaction.email}}</p>
    <p class="card-text">{{transaction.alamat}}</p>
    <p class="card-title">{{transaction.berat}}</p>
    <p class="card-text">{{transaction.keterangan}}</p>  
  </div>
  <div class="card-footer text-muted">
   <router-link
              class="btn btn-primary"
              :to="{ name: 'Detailtransactions', params: { id: transaction.id } }"
              >Detail</router-link>
  </div>
</div>
</div>
</div>
</template>

<script>
export default {
    props: ["transactions"],
}
</script>

<style>
</style>