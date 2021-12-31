<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <!-- <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        /> -->
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          
        </h1>

        <!-- <p class="subheading font-weight-regular">
          For help and collaboration with other Vuetify developers,
          <br>please join our online
          <a
            href="https://community.vuetifyjs.com"
            target="_blank"
          >Discord Community</a>
        </p> -->
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <!-- <h2 class="headline font-weight-bold mb-3">
          What's next?
        </h2> -->

        <v-row justify="center">
          <!-- <form class="form-inline my-2 my-log-0">
         <router-link class="nav-link" to="/login" >Login</router-link>

         

       </form> -->

       <v-card-text>
               <v-text-field label="Email" v-model="email" :rules="[(v) => !!v || 'Email is required']" required/>
               <v-text-field label="Password"  type="password"  v-model="password" :rules="[(v) => !!v || 'Password is required']" required/>
            </v-card-text>
       <v-btn type="submit" @click="login">
                  Login
               </v-btn>
          <!-- <a
            v-for="(next, i) in whatsNext"
            :key="i"
            :href="next.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ next.text }}
          </a> -->
        </v-row>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <!-- <h2 class="headline font-weight-bold mb-3">
          Important Links
        </h2> -->

        <v-row justify="center">
          <!-- <a
            v-for="(link, i) in importantLinks"
            :key="i"
            :href="link.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ link.text }}
          </a> -->
        </v-row>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <!-- <h2 class="headline font-weight-bold mb-3">
          Ecosystem
        </h2> -->

        <v-row justify="center">
          <!-- <a
            v-for="(eco, i) in ecosystem"
            :key="i"
            :href="eco.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ eco.text }}
          </a> -->
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
  export default {
    name: 'HelloWorld',
    data(){
     return {
        email: "",
        password: "",
     }
  },
    
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
//     password: this.password,
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
//     password: this.password,
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




        axios({
  method: "post",
  url: 'http://127.0.0.1:8000/api/users/login/',
  timeout: 1000 * 5, // Wait for 5 seconds
  headers: {
    "Content-Type": "application/json"
  },
  data: {
    username: this.email,
    password: this.password
  }
})
  .then(response => {
    // const serverResponse = response.data;
    console.log(response.data)
    localStorage.setItem("token", response.data.token)
    if(response.data.is_loan_provider == true){
       this.$router.push('provider')
    }
    
     
  })
  .catch(error => {
    console.log(error);
});
  
     }
  }
  }
</script>
