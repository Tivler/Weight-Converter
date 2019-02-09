<template>
<div class="container">
        <div class="row">
            <div class="col-md-6 offset-md-3">
                <h1 class="display-4 text-center mb-3"> Weight Converter</h1>
                <form>
                    <div class="form-group">
                        <input id="lbsInput" type="number" class="form-control form-control-lg" placeholder="Enter Pounds...">
                    </div>
                </form>
                <div id="output">
                    <div class="card bg-warning mb-2">
                        <div class="card-block">
                            <h4>Grams:</h4>
                            <div id="gramsOutput"></div>
                        </div>
                    </div>

                    <div class="card bg-info mb-2">
                        <div class="card-block">
                            <h4>Kilograms:</h4>
                            <div id="kgOutput"></div>
                        </div>
                    </div>

                    <div class="card bg-secondary mb-2">
                        <div class="card-block">
                            <h4>Ounces:</h4>
                            <div id="ozOutput"></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
    font-family: Roboto;
    margin-top: 70px;
    background: #283565;
    color: #fff;
    overflow: hidden;
}

.container {
   margin: 0;
   position: absolute;
   top: 50%;
   left: 50%;
   margin-right: -50%;
   transform: translate(-50%, -50%);
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
