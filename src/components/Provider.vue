<template>
    <v-container>
        <v-row justify="center">
            <p class="p">Welcome</p>
         

            </v-row>
            <p class="e">Please enter the amount of fund you want:</p>
            <v-text-field label="Amount"  type="number" v-model="amount" style="margin-top: 20px;"/>

         <v-btn type="submit" @click="fetchFunds" color="primary" elevation="2" plain x-large>Show Funds</v-btn>

       
 

    </v-container>

    
</template>



<script>
export default {
     name: 'Provider',
    data(){
     return {
        
        amount: "",
     }
  },
    
    methods: {
       
       fetchFunds()
            {
                const token = localStorage.getItem("token");
                console.log(`Token ${token}`)
                
        //        var data = {
        //   //  fund_id: this.email,
        //    amount: "",
        // };
              let uri = 'http://127.0.0.1:8000/api/getfunds/';
              this.axios.get(uri, {params: {
                  amount: this.amount
                  }}, { headers: {"Authorization" : `Token ${token}`,  "Content-Type": 'application/json'} }).then((response) => {
                  // this.tickets = response.data;
                  console.log("ggggggggg")
                  console.log(response.data.data)
                  localStorage.setItem("funds", JSON.stringify(response.data.data))
                  localStorage.setItem("amount", this.amount)
                  this.$router.push('funds')
                  
                  this.results = response.data
                //   this.funds = response.data.data
                  if(response.data == "No matching funds"){
                    this.display = false 
                  }
                  else {
                      this.display = true
                  }
                  console.log("ffffffffff")
                  console.log(this.results)
                  
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
</style>