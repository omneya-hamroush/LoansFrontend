<template>
    <v-container>
        <v-row justify="center">
            <p class="p">Loans Applications Table</p>
         

            </v-row>
         <v-data-table





    :headers="headers"
    :items="loanapps"
    :items-per-page="10"
    class="elevation-1"
    
    
    style="margin-top: 30px;"
  >
  <template v-slot:item="{ item }">
        <tr :class="selectedRows.indexOf(item.id)>-1?'cyan':''" >
            <td>{{item.id}}</td>
            <td>{{item.amount}}</td>
            <td>{{item.status}}</td>
            <td>{{item.user.username}}</td>
            <td>{{item.loan}}</td>
            <v-btn color="primary" type="submit" @click="approve(item)">Approve</v-btn>
        </tr>
    </template>

 
  
  </v-data-table>
    </v-container>
</template>
<script>
export default {
    name: 'AllLoans',
    data(){
        var storedLoanapps = JSON.parse(localStorage.getItem("allloanapps"));
        // console.log(localStorage.getItem("allfundapps"))
       

     return {
        
        
       selectedRows: [{name:'Eclair'}],
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
          { text: 'Loan ID', value: 'loan' },
          { text: 'Actions', value: 'action'},
          
        ],
        loanapps: storedLoanapps
        
      
        
     }
  },
  methods:
  {
    approve(Data)
    {
      console.log(Data)
      console.log(localStorage.getItem("id"))
      console.log(Data.id)

       axios({
  method: "post",
  url: 'http://127.0.0.1:8000/api/addpayment/',
  timeout: 1000 * 5, // Wait for 5 seconds
  headers: {
    "Content-Type": "application/json"
  },
  data: {
    user_id: localStorage.getItem("id"),
    loanapp_id: Data.id
  }
})
  .then(response => {
    // const serverResponse = response.data;
    console.log(response.data)
   
   
    
     
  })
  .catch(error => {
    console.log(error);
});
window.location.reload()
    },
  }
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