<template>

  <a-scene renderer="colorManagement: true;">
    <a-assets>
      <img id="notredam" :src="notredam" alt="Foto 360º da Igreja de Notre Dam">
    </a-assets>

    <!-- Objects -->
    <a-entity position="0 0 -1.5">
      <a-box
        depth="0.05"
        height="0.5"
        position="0 3.2 -3.8"
        width="1"
        v-bind:color="buttonColor"
        v-on:mouseenter="reset"
        shadow
      >
        <!-- <a-entity text="value: ANIMAR; font: ../assets/Roboto-msdf.json" position="-0.45 0 0.07" color="#000">   
        </a-entity> -->
        <a-text
        color="#000"
        position="-0.45 0 0.07"
        value="ANIMAR"
        ></a-text>
      </a-box>
      
      <a-box
        position="-1 0.5 -3" rotation="0 45 0" shadow
        :color="boxColor"
      ></a-box>

      <a-sphere
        position="0 1.25 -5" color="#ef2d5e" shadow
        :radius="sphereRadius"
      ></a-sphere>

      <a-cylinder
        radius="0.5" height="1.5" color="#ffc65d" shadow
        :position="cylinderPosition"
      ></a-cylinder>

      <a-plane
        position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7bc8a4" shadow="cast: false"
        :visible="planeVisibility.toString()"
      ></a-plane>
    </a-entity>

    <!-- Sky -->
    <a-sky src="#notredam"></a-sky>

    <!-- Player -->
    <a-camera position="0 1.6 0" rotation="0 -180 0">
      <a-cursor position="0 0 -1"></a-cursor>
    </a-camera>

  </a-scene>  

</template>

<script>
export default {
    name: 'HelloAframe',

    data() {
      return {
        boxColor: '#4cc3d9',
        buttonColor: '#fff',
        sphereRadius: 1.25,
        cylinderPosition: '1 0.75 -3',
        planeVisibility: true,
        notredam: require('../assets/notredam.jpg'),
        roboto: require('../assets/Roboto-msdf.json')
    }
  },
  methods: {
    animate() {
      setTimeout(() => {
        this.boxColor = 'dodgerblue';
      }, 1500);

      setTimeout(() => {
        this.sphereRadius = 1.75;
      }, 2000);

      setTimeout(() => {
        this.cylinderPosition = '1 2 -3';
      }, 2500);

      setTimeout(() => {
        this.planeVisibility = false;
      }, 3000);
    },
    reset() {
      const { boxColor, buttonColor, sphereRadius, cylinderPosition, planeVisibility } = this.originalData;

      this.buttonColor = 'palegoldenrod';
      this.boxColor = boxColor;
      this.sphereRadius = sphereRadius;
      this.cylinderPosition = cylinderPosition;
      this.planeVisibility = planeVisibility;

      this.animate();

      setTimeout(() => {
        this.buttonColor = buttonColor;
      }, 500);
    },
  },
  mounted() {
    this.originalData = JSON.parse(JSON.stringify(this.$data));

  }
}
</script>

<style>
</style>
