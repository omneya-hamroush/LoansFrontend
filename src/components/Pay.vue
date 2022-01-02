<template>
    
     <v-form>
         
    <v-container>
         
      <v-row>
        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
           
            label="Amount to be paid"
            outlined
            :value="total"
            style="margin-top: 100px;"
          ></v-text-field>
        </v-col>

        <v-row >
            <p class="p">Card Details:</p>
         

            </v-row>

    
         <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            
            label="Email"
            outlined
            style="margin-top: 250px; margin-left: -450px;"
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          
        >
          <v-text-field
            
            label="CARD"
            outlined
            
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            
            label="CVV"
            outlined
            style="margin-top:100px;"
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            
            label="MM/DD/YY"
            outlined
            style="margin-top:-110px;"
          ></v-text-field>
        </v-col>
       
        
      </v-row>
    <v-btn type="submit" color="primary" elevation="2" plain x-large style="    margin-left: 100px;
    width: 700px;">PAY</v-btn>

    </v-container>
  </v-form>
    
</template>
<script>
export default {
    name: 'Pay',
    data(){
     return {
        
        total: localStorage.getItem("total"),
        
     }
  },
}
</script>
<style scoped>
.p {
    font-family: Avenir;
    font-weight: bold;
    font-size: 30px;
    color: steelblue;
    margin-left: -425px;
    margin-top: 200px;
}

.e {
    font-size: 21px;
    font-family: Avenir;
    color: steelblue;
    margin-top: 100px;
    

}
</style>