const CONFIG = {
    binaryThresh: 0.5, // ¯\_(ツ)_/¯
    hiddenLayers: [3], // array of ints for the sizes of the hidden layers in the network
    activation: 'sigmoid' // supported activation types: ['sigmoid', 'relu', 'leaky-relu', 'tanh']
  };

const NET = new brain.NeuralNetwork(CONFIG);


    
NET.train([{
    input: [1, 1],
    output: [0,0]
  },
  {
    input: [1, 2],
    output: [0,0]
  },
  {
    input: [2, 2],
    output: [0,0]
  },
  {
    input: [2, 1],
    output: [0,0]
  },
  {
    input: [-1, 1],
    output: [0,1]
  },
  {
    input: [-1, 2],
    output: [0,1]
  },
  {
    input: [-2, 2],
    output: [0,1]
  },
  {
    input: [-2, 1],
    output: [0,1]
  },
  {
    input: [-1, -1],
    output: [1,0]
  },
  {
    input: [-1, -2],
    output: [1,0]
  },
  {
    input: [-2, -2],
    output: [1,0]
  },
  {
    input: [-2, -1],
    output: [1,0]
  },
  {
    input: [1, -1],
    output: [1,1]
  },
  {
    input: [1, -2],
    output: [1,1]
  },
  {
    input: [2, -2],
    output: [1,1]
  },
  {
    input: [2, -1],
    output: [1,1]
  }
]);
const D = document;

let val1 = D.querySelector('#codX');
let val2 = D.querySelector('#codY');

let txt2 = D.querySelector('#txt2');
let txt3 = D.querySelector('#txt3');



D.querySelector('#calcular').addEventListener('click',()=>{
    console.log('click');
    const OUT = NET.run([val1.value, val2.value]);
    console.log(`Salida=${OUT[0]}`);
    console.log(`Salida=${OUT[1]}`);


    if(OUT[0]<0.5 && OUT[1]<0.5){//primera Salida=0,0
        txt2.value=0;
        txt3.value=0;
    }else if(OUT[0]<0.5 && OUT[1]>=0.5){//primera Salida=0,1
        txt2.value=0;
        txt3.value=1;
    }
    else if(OUT[0]>=0.5 && OUT[1]<0.5){//primera Salida=1,0
        txt2.value=1;
        txt3.value=0;
    }
    else if(OUT[0]>=0.5 && OUT[1]>=0.5){//primera Salida=1,1
        txt2.value=1;
        txt3.value=1;
    }
});
;
D.querySelector('#graficar').addEventListener('click',()=>{
    let micanvas=D.querySelector('#canva').getContext('2d');
    var chart=new Chart(micanvas,{
        type: 'scatter',
        data: {
            datasets: [{
                label:'Puntos',
                data: [
                    {x: -10, y: -10},
                    {x: 10, y: 10},

                    {x: 1, y: 1},
                    {x: 1, y: 2},
                    {x: 2, y: 2},
                    {x: 2, y: 1},

                    {x: -1, y: 1},
                    {x: -1, y: 2},
                    {x: -2, y: 2},
                    {x: -2, y: 1},

                    {x: -1, y: -1},
                    {x: -1, y: -2},
                    {x: -2, y: -2},
                    {x: -2, y: -1},

                    {x: 1, y: -1},
                    {x: 1, y: -2},
                    {x: 2, y: -2},
                    {x: 2, y: -1},

                    {x: val1, y: val2}
                ],
                backgroundColor:"11FF02",
                hoverBackgroundColor: "FF0202",
            }]
        }
    });
});




