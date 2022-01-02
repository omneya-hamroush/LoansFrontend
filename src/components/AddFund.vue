<template>
    
     <v-form>
         
    <v-container>
         <v-row justify="center">
            <p class="p">Add Fund</p>
         

            </v-row>
      <v-row>
        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="min"
            label="Minimum"
            outlined
            style="margin-top: 100px;"
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="max"
            label="Maximum"
            outlined
            style="margin-top: 100px;"
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="rate"
            label="Interest rate"
            outlined
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="duration"
            label="Duration"
            outlined
          ></v-text-field>
        </v-col>
      </v-row>
    <v-btn type="submit" @click="addfund" color="primary" elevation="2" plain x-large style="margin-left: 760px;">Submit</v-btn>

    </v-container>
  </v-form>
    
</template>
<script>
export default {
     name: 'AddFund',
    data(){
     return {
        
        min:"",
        max:"",
        rate:"",
        duration:""
     }
  },
    
    methods: {
        addfund()
        {
            console.log(this.rate)
            console.log("--------")
            console.log(this.min)
           axios({
  method: "post",
  url: 'http://127.0.0.1:8000/api/fund/?',
  timeout: 1000 * 5, // Wait for 5 seconds
  headers: {
    "Content-Type": "application/json"
  },
  data: {
    minimum: this.min,
    maximum: this.max,
    interest_rate: this.rate,
    duration: this.duration,
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