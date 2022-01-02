<template>
    <v-container>
        <v-row justify="center">
            <p class="p">Welcome</p>
         

            </v-row>
            <p class="e">Please enter an amount for a loan:</p>
            <v-text-field label="Amount"  type="number" v-model="amount" style="margin-top: 20px;"/>

         <v-btn type="submit" @click="fetchLoans" color="primary" elevation="2" plain x-large style="margin-top: -190px;">Show Loans</v-btn>

          <v-btn type="submit" @click="fetchLoanapps" color="primary" elevation="2" plain x-large style="margin-top: 200px; margin-left: -170px;">View Loan Applications</v-btn>
       
        
 

    </v-container>

    
</template>



<script>
export default {
     name: 'Customer',
    data(){
     return {
        
        amount: "",
     }
  },
    
    methods: {
       
       fetchLoans()
            {
                const token = localStorage.getItem("token");
                console.log(`Token ${token}`)
       
              let uri = 'http://127.0.0.1:8000/api/getloans/';
              this.axios.get(uri, {params: {
                  amount: this.amount
                  }}, { headers: {"Authorization" : `Token ${token}`,  "Content-Type": 'application/json'} }).then((response) => {
                  // this.tickets = response.data;
                  console.log("ggggggggg")
                  console.log(response.data.data)
                  localStorage.setItem("loans", JSON.stringify(response.data.data))
                  localStorage.setItem("amount", this.amount)
                  this.$router.push('loans')
                  
                  this.results = response.data
                //   this.funds = response.data.data
                  if(response.data == "No matching loans"){
                    this.display = false 
                  }
                  else {
                      this.display = true
                  }
                  console.log("ffffffffff")
                  console.log(this.results)
                  
              });
            },
            fetchLoanapps()
            {
               
                const token = localStorage.getItem("token");
                console.log(`Token ${token}`)
                
              let uri = 'http://127.0.0.1:8000/api/getloanapplications/';
              this.axios.get(uri, {params: {
                  user_id: localStorage.getItem("id")
                  }}, { headers: {"Authorization" : `Token ${token}`,  "Content-Type": 'application/json'} }).then((response) => {
                 
                  console.log("ggggggggg")
                  console.log(response.data.data)
                  localStorage.setItem("loanapps", JSON.stringify(response.data.data))
               
                  this.$router.push('loanapplications')
                  
                
                  if(response.data == "No Applications found"){
                    this.display = false 
                  }
                  else {
                      this.display = true
                  }
                  
                  
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