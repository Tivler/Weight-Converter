<template>
<div class="card mb-2" :class="cardColor">
    <div class="card-block">
        <h4>{{ name  }} </h4>
        <div id="weightOutput">
          {{ convertedWeight }}
        </div>
    </div>
</div>
</template>

<script>
/* eslint-disable */
  export default {
    name: 'weightTile',
    props: ['name', 'color', 'weight'],
    data() {
      return {
        cardColor: this.$props.color,
        convertedWeight: null
      }
    },
    methods: {
     convertWeight(w) {
       // Hey sorry phone died
       // Write logic to handle converting weight for different types of weights
       // Update convertedWeightTile data attribute

      console.log('Converting bro:', w); 
     }  
    },
    created() {
      this.convertWeight(this.$props.weight);
    }
    // TODO: Write a function that converts weight

    // Hooks are things that happen. Like events. created is when the component lands on the page. beforeCreate is before component is created
  }
  // console.log('Vue is here')
  /* document.getElementById('output').style.visibility = 'hidden';
  document.getElementById('lbsInput').addEventListener('input', function (e) {
      document.getElementById('output').style.visibility = 'visible';
      let lbs = e.target.value;
      document.getElementById('gramsOutput').innerHTML = lbs / 0.0022046;
      document.getElementById('kgOutput').innerHTML = lbs / 2.2046;
      document.getElementById('ozOutput').innerHTML = lbs * 16;
  }); */
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    background-color: aliceblue;
    padding: 50px;
  }
  
  .display-4 {
    font-family: "Raleway";
    font-weight: 500;
  }
  
  .card-block {
    padding: 20px;
  }
  
  .card-block h4 {
    font-weight: 700;
  }
  
  #weightOutput {
    font-size: .8rem;
  }
</style>
  