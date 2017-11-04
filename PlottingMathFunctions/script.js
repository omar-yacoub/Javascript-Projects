var parameters = {
    target: '#myFunction',
    data: [{
      fn: 'sin(x)', // first function
      color: 'green'
   }, {
        fn: 'cos(x)', // second function
        color: 'red'
   }     
          ],
    grid: true,
    yAxis: {domain: [-1, 1]},
    xAxis: {domain: [0, 2*Math.PI]}
  };
  
  functionPlot(parameters);
  