<template>
  <div class="mouse"></div>
</template>
<style lang="scss">
.mouse {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 30px;
  height: 60px;
  border: 2px solid var(--main-color-black);
  border-radius: 60px;
  opacity: 0.7;
  &::before {
    content: "";
    width: 2px;
    height: 25px;
    position: absolute;
    top: 10%;
    background: var(--main-color-black);
    left: 50%;
    transform: translateX(-50%);
    border-radius: 20%;
    animation: mouse 5s infinite;
    opacity: 1;
  }
}

@keyframes mouse {
  0% {
    top: 10%;
    height: 15px;
  }
  50% {
    top: 40%;
    height: 25px;
  }
  100% {
    top: 10%;
    height: 15px;
  }
}
</style>