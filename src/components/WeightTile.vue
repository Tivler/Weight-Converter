<template>
<div class="card mb-2" :class="cardColor">
    <div class="card-block">
        <h4>{{ this.$props.metricUnit }} </h4>
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
    props: ['color', 'weight', 'metricUnit'],
    data() {
      return {
        cardColor: this.$props.color,
        weightToConvert: this.$props.weight,
        calculations: {
          gramsDivider: '453.59237',
          kgDivider: '2.2046',
          ouncesMult: '16'
        }
      }
    },
    methods: {
     convertWeight(w) {
       const { gramsDivider, kgDivider, ouncesMult } = this.calculations;
     }
    },
    computed: {
      convertedWeight(w) {
        const { gramsDivider, kgDivider, ouncesMult } = this.calculations;

        const units = ['grams', 'kilograms', 'ounces'];

        units.map((unit) => {
          console.log('Unit:', unit);
        });
      }
    },
    mounted() {
      //this.convertWeight(this.$props.weight);
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
    text-transform: capitalize;
    font-weight: 700;
  }

  #weightOutput {
    font-size: .8rem;
  }
</style>

