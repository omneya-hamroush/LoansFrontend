<template>
    <v-container>
        <v-row justify="center">
            <p class="p">Funds Applications Table</p>
         

            </v-row>
         <v-data-table





    :headers="headers"
    :items="fundapps"
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
            <td>{{item.fund}}</td>
            <v-btn color="primary" type="submit" @click="approve(item)">Approve</v-btn>
        </tr>
    </template>
 
   <!-- <template v-slot:item.action="{ item }">
    <v-btn color="primary" type="submit" @click="approve">Approve</v-btn>
  </template> -->
  </v-data-table>
    </v-container>
</template>
<script>
import axios from "axios";
export default {
    name: 'AllFunds',
    data(){
        var storedFundapps = JSON.parse(localStorage.getItem("allfundapps"));
        console.log(localStorage.getItem("allfundapps"))
       

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
          { text: 'Fund ID', value: 'fund' },
          { text: 'Actions', value: 'action'},
          
        ],
        fundapps: storedFundapps
        
      
        
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
  url: 'http://127.0.0.1:8000/api/approvefund/',
  timeout: 1000 * 5, // Wait for 5 seconds
  headers: {
    "Content-Type": "application/json"
  },
  data: {
    
    fundapp_id: Data.id
  }
})
  .then(response => {
    // const serverResponse = response.data;
    console.log(response.data)
   
   
    
     
  })
  .catch(error => {
    console.log(error);
});
// window.location.reload()
    },
//     handleClick(value) {
//     this.highlightClickedRow(value);
//     this.viewDetails(value);
// },
// highlightClickedRow(value) {
//     const tr = value.target.parentNode;
//     tr.classList.add('highlight');
// },
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