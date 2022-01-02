<template>
    
     <v-form>
         
    <v-container>
         <v-row justify="center">
            <p class="p">Add Loan</p>
         

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
    <v-btn type="submit" @click="addloan" color="primary" elevation="2" plain x-large style="margin-left: 760px;">Submit</v-btn>

    </v-container>
  </v-form>
    
</template>
<script>
export default {
     name: 'AddLoan',
    data(){
     return {
        
        
     }
  },
    
    methods: {
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