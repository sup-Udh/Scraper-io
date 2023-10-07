const brain = require("brain.js")

const data = require("./data.json");

// Define the training data
const net  = new brain.recurrent.LSTM();

const trainingData = data.map(item => ({
    input: item.text,
    output: item.category


}))
// console log the traning process
net.train(trainingData, {
    iterations: 100

})

const output = net.run("i wrote the api")
console.log(output)