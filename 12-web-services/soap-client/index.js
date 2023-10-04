const soap = require("soap");

const baseUrl = "http://www.dneonline.com/calculator.asmx?wsdl";

soap.createClient(baseUrl, (err, client) => {
  // console.log("Describe WSDL -> ", client.describe().Calculator.CalculatorSoap);

  const intA = 10;
  const intB = 5;

  client.Add({ intA, intB }, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Soma: ", result.AddResult);
    }
  });

  client.Subtract({ intA, intB }, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Subtração: ", result.SubtractResult);
    }
  });

  client.Multiply({ intA, intB }, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Multiplicação: ", result.MultiplyResult);
    }
  });

  client.Divide({ intA, intB }, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Divisão: ", result.DivideResult);
    }
  });
});
