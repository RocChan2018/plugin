<template>
  <div class="kyNav">
    <div class="container">
      <div class="left">
        <img
          class="logo"
          src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1739668837,4276000560&fm=26&gp=0.jpg"
          alt
        />
        <div class="nav_btn">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <ul class="right">
        <li>导航项</li>
        <li>导航项</li>
        <li>导航项</li>
        <li>导航项</li>
        <li>导航项</li>
        <li>导航项</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "ky-nav"
};
</script>
<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .kyNav {
    background: red;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .kyNav {
    background: green;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .kyNav {
    background: blue;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .kyNav {
    background: orange;
  }
  .kyNav {
    background-color: #eee;
  }
  .container {
    max-width: 1144px;
    margin: 0 auto;
    overflow: hidden;
  }
  .left {
    width: 300px;
    float: left;
    font-size: 0;
  }
  .left .logo {
    width: auto;
    height: 50px;
  }
  .right {
    margin-left: 300px;
    overflow: hidden;
  }
  ul li {
    float: right;
    line-height: 50px;
    padding: 0 20px;
  }
  .nav_btn {
    display: none;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
/* @media only screen and (min-width: 1200px) {
    .kyNav {background: pink;}
} */
</style>


