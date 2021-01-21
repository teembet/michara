<template>
   <!--========== FOOTER ==========-->
        <footer class="footer section bd-container">
            <div class="footer__container bd-grid">
                <div class="footer__content">
                    <a href="#" class="footer__logo">Tasty Food</a>
                    <span class="footer__description">Restaurant</span>
                    <div>
                        <a href="#" class="footer__social"><i class='bx bxl-facebook'></i></a>
                        <a href="#" class="footer__social"><i class='bx bxl-instagram'></i></a>
                        <a href="#" class="footer__social"><i class='bx bxl-twitter'></i></a>
                    </div>
                </div>

                <div class="footer__content">
                    <h3 class="footer__title">Services</h3>
                    <ul>
                        <li><a href="#" class="footer__link">Delivery</a></li>
                        <li><a href="#" class="footer__link">Pricing</a></li>
                        <li><a href="#" class="footer__link">Fast food</a></li>
                        <li><a href="#" class="footer__link">Reserve your spot</a></li>
                    </ul>
                </div>

                <div class="footer__content">
                    <h3 class="footer__title">Information</h3>
                    <ul>
                        <li><a href="#" class="footer__link">Event</a></li>
                        <li><a href="#" class="footer__link">Contact us</a></li>
                        <li><a href="#" class="footer__link">Privacy policy</a></li>
                        <li><a href="#" class="footer__link">Terms of services</a></li>
                    </ul>
                </div>

                <div class="footer__content">
                    <h3 class="footer__title">Adress</h3>
                    <ul>
                        <li>Lima - Peru</li>
                        <li>Jr Union #999</li>
                        <li>999 - 888 - 777</li>
                        <li>tastyfood@email.com</li>
                    </ul>
                </div>
            </div>

            <p class="footer__copy">&#169; 2020 Bedimcode. All right reserved</p>
        </footer>

</template>
<script>
export default {
  data: () => ({
    icons: [
      "fab fa-facebook",
      "fab fa-twitter",
      "fab fa-google-plus",
      "fab fa-linkedin",
      "fab fa-instagram",
    ],
  }),
};
</script>
<style scoped>
.theme--dark.v-footer {
    background-color: white  !important; 
     color: #FFFFFF;
}
.footer__container{
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  row-gap: 2rem;
}

.footer__logo{
  font-size: var(--h3-font-size);
  color: var(--first-color);
  font-weight: var(--font-semi-bold);
}

.footer__description{
  display: block;
  font-size: var(--small-font-size);
  margin: .25rem 0 var(--mb-3);
}

.footer__social{
  font-size: 1.5rem;
  color: var(--title-color);
  margin-right: var(--mb-2);
}

.footer__title{
  font-size: var(--h2-font-size);
  color: var(--title-color);
  margin-bottom: var(--mb-2);
}

.footer__link{
  display: inline-block;
  color: var(--text-color);
  margin-bottom: var(--mb-1);
}

.footer__link:hover{
  color: var(--first-color);
}

.footer__copy{
  text-align: center;
  font-size: var(--small-font-size);
  color: var(--text-color-light);
  margin-top: 3.5rem;
}
</style>
