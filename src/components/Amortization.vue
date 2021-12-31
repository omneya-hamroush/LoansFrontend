<template>
    <v-container>
       <v-row justify="center">
            <p class="p">Amortization Table</p>
         

            </v-row>
         <v-data-table





    :headers="headers"
    :items="funds"
    :items-per-page="10"
    class="elevation-1"
    
    
    style="margin-top: 30px;"
  >

 
  
  </v-data-table>
    
    
           <!-- <v-btn type="submit" @click="createFund" color="primary" style="margin-top:100px" elevation="2" plain x-large>Create Fund</v-btn>
           <v-btn type="submit" @click="amortization" color="primary" style="margin-top:100px; margin-left:450px;" elevation="2" plain x-large>Amortization table</v-btn> -->

    </v-container>
</template>
<script>
import axios from "axios"

export default {
    name: 'Amortization',
    data(){
        var storedFunds = JSON.parse(localStorage.getItem("table"));
        // var list = []
        // for(i=0; i<storedFunds.length; i++){
        //     list. 
        // }

     return {
        
        //  v-if="awesome"
        // display = false,
    //    selectedRows: [{name:'Eclair'}],
        headers: [
          {
            text: 'Month',
            align: 'start',
            sortable: false,
            value: 'Month',
          },
          { text: 'Payment', value: 'Payment' },
          { text: 'Interest', value: 'Interest' },
          { text: 'Principal', value: 'principal' },
          { text: 'Balance', value: 'Balance' },
          
        ],
        funds: storedFunds
        
      
        
     }
  },
   methods: 
   {

   }
}
</script>
<style scoped>
.p {
    font-family: Avenir;
    font-weight: bold;
    font-size: 40px;
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