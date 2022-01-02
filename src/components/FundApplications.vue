<template>
    <v-container>
        <v-row justify="center">
            <p class="p">Fund Applications Table</p>
         

            </v-row>
         <v-data-table





    :headers="headers"
    :items="fundapps"
    :items-per-page="10"
    class="elevation-1"
    
    
    style="margin-top: 30px;"
  >

 
  
  </v-data-table>
    </v-container>
</template>
<script>
export default {
    name: 'FundApplications',
    data(){
        var storedFundapps = JSON.parse(localStorage.getItem("fundapps"));
       

     return {
        
        
    //    selectedRows: [{name:'Eclair'}],
        headers: [
          {
            text: 'ID',
            align: 'start',
            sortable: false,
            value: 'id',
          },
          { text: 'Amount', value: 'amount' },
          { text: 'Status', value: 'status' },
          { text: 'User', value: 'user.username' },
          { text: 'Fund ID', value: 'fund' },
          
        ],
        fundapps: storedFundapps
        
      
        
     }
  },
}
</script>
<style scoped>
.p {
    font-family: Avenir;
    font-weight: bold;
    font-size: 48px;
    color: steelblue;
}

.e {
    font-size: 21px;
    font-family: Avenir;
    color: steelblue;
    margin-top: 100px;

}
 tr.v-data-table__selected {
    background: #7d92f5 !important;
  }
</style>