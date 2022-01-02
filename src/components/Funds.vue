<template>
    <v-container>
        <p class="e">Choose a fund:</p>
         <v-data-table





    :headers="headers"
    :items="funds"
    :items-per-page="5"
    class="elevation-1"
    v-model="selectedRows"
    item-key="id"
    :select-options="{
                  enabled: true,
                  selectOnCheckboxOnly: true,
                }"
    
    style="margin-top: 30px;"
  >

  <template v-slot:item="{ item }">
    <!-- <tr :class="item === selectedRow ? 'custom-highlight-row' : ''" @click="onClickItem(item)"> -->
        <tr :class="selectedRows.indexOf(item.id)>-1?'cyan':''" @click="onClickItem(item)">
            <td>{{item.id}}</td>
            <td>{{item.minimum}}</td>
            <td>{{item.maximum}}</td>
            <td>{{item.interest_rate}}</td>
            <td>{{item.duration}}</td>
            <!-- <td>{{item.iron}}</td> -->
        </tr>
    </template>
  
  </v-data-table>
    
    
           <v-btn type="submit" @click="createFund" color="primary" style="margin-top:100px" elevation="2" plain x-large>Create Fund</v-btn>
           <v-btn type="submit" @click="amortization" color="primary" style="margin-top:100px; margin-left:450px;" elevation="2" plain x-large>Amortization table</v-btn>
                             <v-btn type="submit" @click="logout" color="primary" elevation="2" plain x-large style="margin-top: 150px;margin-left: 740px;">Logout</v-btn>

    </v-container>
</template>
<script>
import axios from "axios"

export default {
    name: 'Funds',
    data(){
        var storedFunds = JSON.parse(localStorage.getItem("funds"));
        // var list = []
        // for(i=0; i<storedFunds.length; i++){
        //     list. 
        // }

     return {
        
        //  v-if="awesome"
        // display = false,
      //  selectedRow: null,
      selectedRows: [{name:'Eclair'}],
        headers: [
          {
            text: 'ID',
            align: 'start',
            sortable: false,
            value: 'id',
          },
          { text: 'Minimum', value: 'minimum' },
          { text: 'Maximum', value: 'maximum' },
          { text: 'Interest Rate (%)', value: 'interest_rate' },
          { text: 'Term (years)', value: 'duration' },
          
        ],
        funds: storedFunds
        
      
        
     }
  },
   methods: 
   {
       logout()

      {
         const token = localStorage.getItem("token");
         console.log(`Token ${token}`)
         let uri = 'http://127.0.0.1:8000/api/users/logout/';
         this.axios.delete(uri, { headers: {"Authorization" : `Token ${token}`,  "Content-Type": 'application/json'} }).then((response) => {
                  
                  console.log("ggggggggg")
                  console.log(response.data)
                  localStorage.removeItem("funds")
                  localStorage.removeItem("loans")
                  localStorage.removeItem("token")
                  localStorage.removeItem("table")
                  localStorage.removeItem("loanapps")
                  localStorage.removeItem("fundapps")
                  localStorage.removeItem("amount")
                  localStorage.removeItem("id")
                  localStorage.removeItem("allfundapps")
                  localStorage.removeItem("allloanapps")
                  localStorage.removeItem("payments")
                  this.$router.push('login')
                  
                 
                 
                  
              });
      },
       
       amortization(){
        let uri = 'http://127.0.0.1:8000/api/amortization/';
           this.axios.get(uri, {params: {
                  amount: parseInt(localStorage.getItem("amount")),
                  fund_id: this.data.id
                  }}).then((response) => {
                  // this.tickets = response.data;
                  console.log("ggggggggg")
                  console.log(response.data)
                  localStorage.setItem("table", JSON.stringify(response.data.amortization_table))
                //   localStorage.setItem("amount", this.amount)
                  this.$router.push('amortization')
                  
                //   this.results = response.data
                //   this.funds = response.data.data
                  
                  
              });
       },
       createFund(){

        //    var storedNames = JSON.parse(localStorage.getItem("funds"));
        //    console.log(storedNames)
    console.log(typeof(this.data.id))
            axios({
  method: "post",
  url: 'http://127.0.0.1:8000/api/addfund/?',
  timeout: 1000 * 5, // Wait for 5 seconds
  headers: {
    "Content-Type": "application/json"
  },
  data: {
    
    amount: parseInt(localStorage.getItem("amount")),
    fund_id: this.data.id,
  }
})
  .then(response => {
    // const serverResponse = response.data;
    console.log(response.data)
   
    
    
     
  })
  .catch(error => {
    console.log(error);
});
       },

       onClickItem(value) {
    //  this.display = true
     console.log(value)
     this.data = value
    //  console.log(this.data.id)
  },
       
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