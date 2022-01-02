<template>
    <v-container>
        <v-row justify="center">
            <p class="p">Welcome</p>
         

            </v-row>
            <!-- <p class="e">Please enter an amount for a fund:</p> -->
            <!-- <v-text-field label="Amount"  type="number" v-model="amount" style="margin-top: 20px;"/> -->
         <v-row justify="center">
         <v-btn type="submit" @click="addFund" color="primary" elevation="2" plain x-large >Add Fund</v-btn>
       <v-btn type="submit" @click="fetchFundsapps" color="primary" elevation="2" plain x-large style="margin-left: 300px;">View Funds Applications</v-btn>

         </v-row>
          <v-row justify="center" style="margin-top: 50px;">
        <v-btn type="submit" @click="addLoan" color="primary" elevation="2" plain x-large >Add Loan</v-btn>

       <v-btn type="submit" @click="fetchLoanapps" color="primary" elevation="2" plain x-large style="margin-left: 300px;">View Loans Applications</v-btn>
          </v-row>
        
                     <v-btn type="submit" @click="logout" color="primary" elevation="2" plain x-large style="margin-top: 350px;margin-left: 700px;">Logout</v-btn>
 

    </v-container>

    
</template>
<script>
export default {
     name: 'BankP',
    data(){
     return {
        
        amount: "",
     }
  },
    
    methods: {

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
       
      addLoan()
      {
        this.$router.push('addloan')
      },

      addFund()
      {
        this.$router.push('addfund')
      },
       
       fetchFundsapps()
            {
            //  const token = localStorage.getItem("token");
            //     console.log(`Token ${token}`)
                
       
              let uri = 'http://127.0.0.1:8000/api/fund-application/';
              this.axios.get(uri).then((response) => {
                  
                  console.log("ggggggggg")
                  console.log(response.data)
                  localStorage.setItem("allfundapps", JSON.stringify(response.data))
                //   localStorage.setItem("amount", this.amount)
                  this.$router.push('allfunds')
                  
                 
                 
                  
                  
              });
            },
            
            fetchLoanapps()
            {
            //  const token = localStorage.getItem("token");
            //     console.log(`Token ${token}`)
                
       
              let uri = 'http://127.0.0.1:8000/api/loan-application/';
              this.axios.get(uri).then((response) => {
                  
                  console.log("ggggggggg")
                  console.log(response.data)
                  localStorage.setItem("allloanapps", JSON.stringify(response.data))
                //   localStorage.setItem("amount", this.amount)
                  this.$router.push('allloans')
                  
                 
                 
                  
                  
              });
            }
            
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
</style>