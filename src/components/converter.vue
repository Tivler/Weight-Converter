<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <h1 class="display-4 text-center mb-3"> Weight Converter</h1>
        <form @submit.prevent="convertWeight">
          <div class="form-group">
            <input v-model="weight" id="lbsInput" type="number" class="form-control form-control-lg" placeholder="Enter Pounds...">
          </div>
        </form>

        <div id="output" v-if="submitted">
          <weight-tile metricUnit="grams" :weight="gramsOutput" color="bg-warning"></weight-tile>
          <weight-tile metricUnit="kilograms" :weight="kgOutput" color="bg-info"></weight-tile>
          <weight-tile metricUnit="ounces" :weight="ouncesOutput" color="bg-secondary"></weight-tile>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WeightTile from './WeightTile'

/* eslint-disable */
  export default {
    name: 'converter',
    components: {
        WeightTile
    },
    data() {
      return {
        weight: null,
        unit: null,
        calculations: {
          gramsDivider: '453.59237',
          kgDivider: '2.2046',
          ouncesMult: '16'
        },
        gramsOutput: null,
        kgOutput: null,
        ouncesOutput: null,
        submitted: false
      }
    },
    methods: {
      convertWeight() {
        console.log('Converting weight');
        this.submitted = true;

        const { gramsDivider, kgDivider, ouncesMult } = this.calculations;

        const units = ['grams', 'kilograms', 'ounces'];

        /*
          To get kilograms, divide by 2 then take off 1/10th of your answer
          Eg 100 pounds… Divide by two = 50 Kg. Take off 1/10th = (50 – 5) = 45 Kg.
          This is close to the genuine answer of 45.35923kg, and is a much easier sum to do in your head!
         */

        units.map((unit) => {
          switch(unit) {
              case 'grams':
                this.gramsOutput = this.weight % gramsDivider;
                console.log('Grams!');
                break;
              case 'kilograms':
                this.kgOutput = this.weight % 10 - 0.1
              default:
                return;
          }
          console.log('Unit:', unit);
        });
      },
      handleWeightForm(e) {
        console.log('Handling for submitted', e.target.value);
      }
    }
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

//   function foo() {
//     return {
//       weight: null,

//     }
//   }

//   let person = {
//     name: 'Tim',
//     job: 'Engineer',
//     goToWork: function() {
//       console.log('Going to write some shitty code for an evil company.');
//     }
//   }
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

  #gramsOutput {
    font-size: .8rem;
  }

  #kgOutput {
    font-size: .8rem;
  }

  #ozOutput {
    font-size: .8rem;
  }
</style>
