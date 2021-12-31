<template>
  <v-app id="inspire">
    <v-main class="grey lighten-3">
      <v-form>
         <v-card>
            <!-- <v-card-text>
               <v-text-field label="Email" v-model="email" :rules="[(v) => !!v || 'Email is required']" required/>
               <v-text-field label="Password"  type="password" v-model="password" :rules="[(v) => !!v || 'Password is required']" required/>
            </v-card-text> -->
            <v-card-actions>
               <v-btn type="submit" @click="login">
                  Login
               </v-btn>
            </v-card-actions>
         </v-card>
      </v-form>
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios";

export default {
  name: "Test",
  // data(){
  //    return {
  //       email: "",
  //       password: "",
  //    }
  // },
  methods: {

     fetchItems()
            {
               var data = {
          //  fund_id: this.email,
           amount: 6000,
        };
              let uri = 'http://127.0.0.1:8000/api/getfunds/';
              this.axios.get(uri, {params: {amount: 6000}}).then((response) => {
                  // this.tickets = response.data;
                  console.log(response.data)
              });
            },
  login(){
    this.$router.push('login2')
  }
//      login(){
//         try {
//                    axios({
//   method: "post",
//   url: 'http://127.0.0.1:8000/api/users/login/',
//   // timeout: 30000 * 5, // Wait for 5 seconds
//   headers: {
//     "Content-Type": "application/json"
//   },
//   data: {
//     username: this.email,
//     password: this.password
//   }
// })
//   .then(response => {
//     const serverResponse = response.data;
//     // do sth ...
//     console.log(response.data)
//   })
//   .catch(error => {
//     console.log(error);
// });

//         } catch (error) {
//          //   console.log.(error);
//                    axios({
//   method: "post",
//   url: 'http://127.0.0.1:8000/api/users/login/',
//   // timeout: 1000 * 5, // Wait for 5 seconds
//   headers: {
//     "Content-Type": "application/json"
//   },
//   data: {
//     username: this.email,
//     password: this.password
//   }
// })
//   .then(response => {
//     const serverResponse = response.data;
//     // do sth ...
//     console.log(response.data)
//   })
//   .catch(error => {
//     console.log(error);
// });
//         }








//         axios({
//   method: "post",
//   url: 'http://127.0.0.1:8000/api/users/login/',
//   timeout: 1000 * 5, // Wait for 5 seconds
//   headers: {
//     "Content-Type": "application/json"
//   },
//   data: {
//     username: this.email,
//     password: this.password
//   }
// })
//   .then(response => {
//     const serverResponse = response.data;
//     // do sth ...
//     console.log(response.data)
//   })
//   .catch(error => {
//     console.log(error);
// });
      //   console.log(this.email)
      //   this.$router.push('Home') 
      //   var data = {
      //      fund_id: this.email,
      //      amount: this.password,
      //   };
      //   axios.post('http://127.0.0.1:8000/api/addfund/', data)
      //   .then(response => console.log(response.data))
      //   .catch(error => {
      //      console.log(error)
      //   })
      //   axios({
      //      method: 'post',
      //      url: 'http://127.0.0.1:8000/api/users/login/',
      //      data:
      //      {
      //         username: this.email,
      //         password: this.password,
      //      }
      //   })
      //   .then(function(response){
      //      localStorage.setItem("token", response.token)
      //      console.log(response)
      //   })
      //   .catch(function(error){
      //      console.log(error);
      //   })
    //  }
  }
}
</script>

<style scoped>
.submit-form {
  max-width: 300px;
}
</style>
