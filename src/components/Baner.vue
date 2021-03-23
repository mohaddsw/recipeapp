<template>
  <!-- banner  -->
  <div class="banner">
    <div class="bannerBg">
      <h1>Recipe Vue App</h1>
    </div>
    <div class="bannerSearch">
      <form class="searchFood">
        <input type="text" placeholder="Food Name" />
        <span class="button">
          <mdicon name="magnify" />
        </span>
      </form>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.banner {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100%;
  height: 70vh;
  position: relative;
}
.banner .bannerBg {
  width: 100%;
  height: 100%;
  position: absolute;
  background-image: url('../assets/image/hedear1.jpg');
  background-size: cover;
  background-position: center;
}
.banner .bannerBg h1 {
  color: #f2f2f0;
  font-family: 'Chango', cursive;
  font-size: 70px;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.banner .bannerSearch {
  position: absolute;
  bottom: 10%;
  width: 50%;
}
.banner .bannerSearch .searchFood {
  width: 100%;
  position: relative;
  background: #f2f2f0;
  border-radius: 50px;
  overflow: hidden;
}
.banner .bannerSearch .searchFood input[type='text'] {
  padding: 20px 0;
  outline: none;
  border: 0;
  background: transparent;
  padding: 20px 50px;
  width: 80%;
  color: #d97c2b;
}
.banner .bannerSearch .searchFood span.button {
  position: absolute;
  top: 0;
  right: 0;
  outline: none;
  border: 0;
  display: block;
  width: 20%;
  height: 100%;
  cursor: pointer;
  border-radius: 50px;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  color: #d97c2b;
  transition: all 0.5s ease-in-out;
}
.banner .bannerSearch .searchFood span.button:hover {
  background: #d97c2b2a;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .banner .bannerBg h1 {
    font-size: 40px;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .banner .bannerBg h1 {
    font-size: 50px;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .banner .bannerBg h1 {
    font-size: 50px;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .banner .bannerBg h1 {
    font-size: 70px;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .banner .bannerBg h1 {
    font-size: 70px;
  }
}
</style>
