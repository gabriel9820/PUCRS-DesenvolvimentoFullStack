const soap = require("soap");

const baseUrl =
  "https://apps.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente?wsdl";

soap.createClient(baseUrl, (err, client) => {
  // console.log(
  //   "Describe WSDL -> ",
  //   client.describe().AtendeClienteService.AtendeClientePort
  // );

  const cep = "91520260";

  client.consultaCEP({ cep }, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Endereço: ", result.return);
    }
  });
});
