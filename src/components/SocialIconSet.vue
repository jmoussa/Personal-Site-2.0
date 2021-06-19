<template>
  <div class="generic-container">
    <div class="flex-center">
      <a href="http://github.com/jmoussa"><i class="fa fa-github fa-4x icon-3d"></i></a> 
      <a href="http://linkedin.com/in/jmoussa"><i class="fa fa-linkedin fa-4x icon-3d"></i></a> 
      <a href="https://www.instagram.com/jmoussa.dev"><i class="fa fa-instagram fa-4x icon-3d"></i></a>
      <a href="./resume.pdf" target="_blank"><i class="fa fa-address-card-o fa-4x icon-3d" aria-hidden="true"></i></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "SocialIconSet"
};
</script>

<style scoped lang="scss">
a {
  margin: 0 2rem; 
}
$redColor: rgba(244,67,54,1);
$blueColor:rgba(33,150,243,1);

$redColor: rgba(66, 185, 131, 0.5);
$blueColor: rgba(66, 185, 131, 1);

.flex-center {
  width: 100%;
  min-height: 20vh;
  background: #000;
  
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
}

.icon-3d {
  padding: 10px;
  -webkit-animation: icon3d 200ms 10;
  animation: icon3d 200ms 10;
  color: #fff;
  &:hover {
    -webkit-animation: icon3d 200ms infinite;
          animation: icon3d 200ms infinite;
  }
}

@keyframes icon3d {
  0% {
    text-shadow: 5px 4px $redColor, -5px -6px $blueColor;
  }
  25% {
    text-shadow: -5px -6px $redColor, 5px 4px $blueColor;
  }
  50% {
    text-shadow: 5px -4px $redColor, -8px 4px $blueColor;
  }
  75% {
    text-shadow: -8px -4px $redColor, -5px -4px $blueColor;
  }
  100% {
    text-shadow: -5px 0 $redColor, 5px -4px $blueColor;
  }
}
</style>
