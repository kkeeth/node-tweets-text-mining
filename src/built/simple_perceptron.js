var Simple_perceptron = (function () {
    function Simple_perceptron() {
        this.DATA_COUNT = 100;
        this.DIMENSION = 140;
        this.LOOP_MAX = 1000;
        var weight = new Array(this.DIMENSION);
        for (var i = 0; i < this.DIMENSION; i++) {
            weight[i] = Math.random();
        }
    }
    return Simple_perceptron;
}());
exports.Simple_perceptron = Simple_perceptron;