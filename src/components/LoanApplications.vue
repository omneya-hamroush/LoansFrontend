<template>
    <v-container>
        <v-row justify="center">
            <p class="p">Your Loan Applications Table</p>
         

            </v-row>
         <v-data-table





    :headers="headers"
    :items="loanapps"
    :items-per-page="10"
    class="elevation-1"
    
    
    style="margin-top: 30px;"
  >

 
  
  </v-data-table>
                               <v-btn type="submit" @click="logout" color="primary" elevation="2" plain x-large style="margin-top: 350px;margin-left: 480px;">Logout</v-btn>

    </v-container>
</template>
<script>
export default {
    name: 'LoanApplications',
    data(){
        var storedLoanapps = JSON.parse(localStorage.getItem("loanapps"));
       

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
          { text: 'Fund ID', value: 'loan' },
          
        ],
        loanapps: storedLoanapps
        
      
        
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