const baseURL = "http://localhost:8000";

export const getListData = async (serviceID) => {
  console.log(serviceID)
  // let data = await fetch(
  //   `${baseURL}/listagem?serviceID=${serviceID}`
  // );
  // data = await data.json();


  const data = {
    listOptions: [
      {
        id: 1,
        status: true,
        label: 'Teste1',
        anotherLabel: "Teste1outrotexto"
      },
      {
        id: 2,
        status: true,
        label: 'Teste2',
        anotherLabel: "Teste2outrotexto"
      },
      {
        id: 3,
        status: true,
        label: 'Teste3',
        anotherLabel: "Teste3outrotexto"
      },
      {
        id: 4,
        status: false,
        label: 'Teste4',
        anotherLabel: "Teste4outrotexto"
      }
    ]
  }
  
  console.log(data)
  return data.listOptions;
};
