<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">

       
      
       
      </div>

      <!-- <v-spacer></v-spacer> -->

      <!-- <v-btn -->
       
      
       <!-- <form class="form-inline my-2 my-log-0">
         <router-link class="nav-link" to="/login">Login</router-link>

       </form> -->
      <!-- </v-btn> -->
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
