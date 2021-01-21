<template>
  <div>
    <header class="1-header" id="header">
    <v-toolbar color="#fff" height="80" text flat>
      <router-link to="/">
        <v-toolbar-title class="">
          <img src="../assets/michara.png" class="logo" alt="logo-michara" style="width:170px;height:auto;" />
        </v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <v-icon
        style="float:right;font-size:40px;color:#f25d13;margin-top:20px;"
        @click.stop="drawer = !drawer"
        class="hidden-md-and-up"
      >menu</v-icon>
      <ul class="hidden-sm-and-down">
        <router-link to="/">
          <li class="nav-link">
            <p class="linka">Home</p>
          </li>
        </router-link>
        <a href="#about" >
          <li class="nav-link">
            <p class="linka">About Us</p>
          </li>
        </a>
        <router-link to="/menu">
          <li class="nav-link">
            <p class="linka">Services</p>
          </li>
        </router-link>
        <router-link to="/help">
          <li class="nav-link">
            <p class="linka">Contact</p>
          </li>
        </router-link>

<!--         
          <li class="nav-link">
            <v-btn color="#3CB371" @click="dialog=true" outlined dark class="nav-btn">Login/SignUp</v-btn>
          </li> -->
       
        <!-- <li class="nav-link">
          <span class="email black-text">
            <div>
              <v-avatar :size="30" color="grey lighten-4">
                <div class="photo">
                  <img src="../assets/user.png" alt width="30px" height="30px" />
                </div>
              </v-avatar>
              <v-menu v-model="menu" :close-on-content-click="false" :nudge-width="200" offset-x>
                <template v-slot:activator="{on}">
               <v-btn text v-on="on" ><strong class="white--text">  user </strong></v-btn></template>

               <v-card text>
        <v-list>
          <v-list-item avatar>
            <v-list-item-avatar>
             <div class= "photo">
           <img src= "../assets/user.png" alt="" width="30px" height="30px" >
        </div>
        
     
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>  user </v-list-item-title>
              <v-list-item-sub-title>currentUser </v-list-item-sub-title>
            </v-list-item-content>

            <v-list-item-action>
              <v-btn
                :class="fav ? 'red--text' : ''"
                icon
                @click="fav = !fav"
              >
                <v-icon>favorite</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>
   
        <v-list >
          <v-list-item @click=" $router.push({path: '/dashboard'})  ">
           <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item>

          <v-list-item @click="logout">
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
              </v-menu>
            </div>
          </span>
        </li> -->
      </ul>
    </v-toolbar>
    </header>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <center>
        <div class="nav-mobile">
          <div>
            <span class="email black-text">
              <v-avatar :size="50" color="grey lighten-4">
                <div class="photo" style="align-self:center">
                 <img src="../assets/user.png" class="" alt="profile" style="width:30px; height:auto"  />
                </div>
              </v-avatar>
            </span>
          </div>
          <br />
          <h3></h3>
          <div class="nav-mobile-link">
            <router-link to="/">
              <strong>Home</strong>
            </router-link>
          </div>
          <div class="nav-mobile-link">
            <router-link to="#about">
              <strong>About Us</strong>
            </router-link>
          </div>
          <div class="nav-mobile-link">
            <router-link to="/menu">
              <strong>Menu</strong>
            </router-link>
          </div>
          <div class="nav-mobile-link">
            <router-link to="/help">
              <strong>Help</strong>
            </router-link>
          </div>
          <div>
          
              <v-btn color="#3CB371" dark class="log-btn" @click="dialog=true">Login/SignUp</v-btn>
           
          </div>
          <br />
          <div>
            <v-btn color="#3CB371" dark class="log-btn" 
            outlined
            @click="logout">Logout</v-btn>
          </div>
        </div>
      </center>
    </v-navigation-drawer>
     <auth v-model="dialog"/>

  </div>
 
</template>

<script>
import auth from './auth.vue'
// import db from './firebaseinit.js'
// import {  firebaseinit } from './firebaseinit.js'
// import firebase from 'firebase'
export default {
   components: {
      auth
    },
  data() {
    return {
      fav: true,
      menu: false,
      message: false,
      hints: true,
      dialog:false,
      photo: "",
      isLoggedin: false,
      currentUser: "",
      user: "",
      drawer: null,
      items: [
        { title: "Home", icon: "home" },
        { title: "About", icon: "question_answer" },
        { title: "Blog", icon: "message" },
        { title: "Our Programmes", icon: "dashboard" },
        { title: "Podcasts", icon: "mic" },
        { title: "Contact Us", icon: "phone" },
      ],
    };
    
  },
  // created(){
  //         if(firebase.auth().currentUser){

  //             this.isLoggedin = true;
  //             this.currentUser = firebase.auth().currentUser.email;
  //              db.collection('users').where('Email', '==', this.currentUser).get().then(
  //     querySnapshot => {
  //       querySnapshot.forEach(doc =>{
  //         this.user = doc.data().Fullname
  //       })
  //     }
  //   )
  //         }
  // },
  methods:{
    callhome(){
      console.log(this.nav,"nav")
      },
     logout(){
        //  firebase.auth().signOut()
        //  .then(() => {
        //      this.$router.go({ path: this.$router.path })
        //  });
     }
  }
};
</script>

<style scoped>
.white {
  background-color: white;
}
.nav-link {
  display: inline-block;
  margin-right: 40px;
  margin-top: 20px;
  color: rgb(60, 179, 113);;
}
.nav-link a {
  color: rgb(60, 179, 113);;
  text-decoration: none;
}
.nav-link :hover {
  color: #272727;
  transition: all 1s;
}
.logo {
  margin-top: 20px;
  margin-left: 50px;
}
.photo {
  width: 30px;
  height: 30px;
}
.linka {
  font-size: 15px;
}
.log-btn {
  color: white;
  text-decoration: none;
}
.log-btn a {
  color: white;
  text-decoration: none;
}
.nav-mobile-link {
  font-size: 25px;
  margin: 20px 0px 20px 0px;
}
.nav-mobile-link a {
  color: rgb(36, 36, 36);
  text-decoration: none;
}
.nav-mobile-link :hover {
  color: #f25d13;
  transition: all 1s;
}
.nav-mobile {
  padding: 40px 0px 40px 0px;
}
@media (max-width: 991px) {
  .nav-link {
    display: inline-block;
    margin-right: 40px;
    margin-top: 20px;
    color: #f25d13;
  }
  .nav-link a {
    color: #f25d13;
    text-decoration: none;
  }
  .nav-link :hover {
    color: #272727;
    transition: all 1s;
  }
  .logo {
    margin-top: 20px;
    margin-left: 0px;
  }
}
@media (max-width: 767px) {
  .nav-link {
    display: inline-block;
    margin-right: 40px;
    margin-top: 20px;
    color: #f25d13;
  }
  .nav-link a {
    color: #f25d13;
    text-decoration: none;
  }
  .nav-link :hover {
    color: #272727;
    transition: all 1s;
  }
  .logo {
    margin-top: 20px;
    margin-left: 0px;
  }
}
@media (max-width: 479px) {
  .nav-link {
    display: inline-block;
    margin-right: 40px;
    margin-top: 20px;
    color: #f25d13;
  }
  .nav-link a {
    color: #f25d13;
    text-decoration: none;
  }
  .nav-link :hover {
    color: #272727;
    transition: all 1s;
  }
  .logo {
    margin-top: 20px;
    margin-left: 0px;
  }
}

.nav{
  max-width: 1024px;
  height: var(--header-height);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@media screen and (max-width: 768px){
  .nav__menu{
    position: fixed;
    top: -100%;
    left: 0;
    width: 100%;
    padding: 1.5rem 0 1rem;
    text-align: center;
    background-color: var(--body-color);
    transition: .4s;
    box-shadow: 0 4px 4px rgba(0,0,0,.1);
    border-radius: 0 0 1rem 1rem;
    z-index: var(--z-fixed);
  }
}

.nav__item{
  margin-bottom: var(--mb-2) !important;
}

.nav__link, .nav__logo, .nav__toggle{
  color: var(--text-color) !important;
  font-weight: var(--font-medium) !important;
}

.nav__logo:hover{
  color: var(--first-color)!important;
}

.nav__link{
  transition: .3s !important;
}

.nav__link:hover{
  color: var(--first-color) !important;
}

.nav__toggle{
  font-size: 1.3rem!important;
  cursor: pointer;
}

/* Show menu */
.show-menu{
  top: var(--header-height)!important;
}

/* Active menu */
.active-link{
  color: var(--first-color) !important;
}

/* Change background header */
.scroll-header{
  box-shadow: 0 2px 4px rgba(0,0,0,.1)!important;
}

</style>
