<template>
    <v-container>
        <v-row justify="center">
            <p class="p">Payments Table</p>
         

            </v-row>
         <v-data-table





    :headers="headers"
    :items="payments"
    :items-per-page="10"
    class="elevation-1"
    
    
    style="margin-top: 30px;"
  >
  <template v-slot:item="{ item }">
        <tr :class="selectedRows.indexOf(item.id)>-1?'cyan':''" >
            <td>{{item.id}}</td>
            <td>{{item.title}}</td>
            <td>{{item.description}}</td>
            <td>{{item.total}}</td>
            <td>{{item.status}}</td>
            <td>{{item.deadline}}</td>
            <td>{{item.date_of_payment}}</td>
            <v-btn color="primary" type="submit" @click="pay(item)">Pay</v-btn>
        </tr>
    </template>

 <!-- <template v-slot:[`item.actions`]="{ item }">
    <v-btn color="primary" type="submit" @click="pay(item)">Pay</v-btn>
  </template> -->
  
  </v-data-table>
    </v-container>
</template>
<script>
export default {
    name: 'FundApplications',
    data(){
        var storedPayments = JSON.parse(localStorage.getItem("payments"));
        console.log(localStorage.getItem("payments"))
       

     return {
        
        
       selectedRows: [{name:'Eclair'}],
        headers: [
          {
            text: 'ID',
            align: 'start',
            sortable: false,
            value: 'id',
          },
          { text: 'Title', value: 'title' },
          { text: 'Description', value: 'description' },
          { text: 'Total', value: 'total' },
          { text: 'Status', value: 'status' },
          { text: 'Deadline', value: 'deadline' },
          { text: 'Date of Payment', value: 'date_of_payment' },
          { text: 'Actions', value: 'action' },
          
        ],
        payments: storedPayments
        
      
        
     }
  },
  methods:
  {
    pay(Data)
    {
      console.log(Data)
      // console.log(localStorage.getItem("id"))
      // console.log(Data.id)

     localStorage.setItem("total", Data.total)
    this.$router.push('pay')
   
// window.location.reload()
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