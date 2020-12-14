//useState useEffect necessário para implementar hooks
import React, {useEffect, useState} from "react";
import ListTable from "../ContentTable/BodyTable/ListTable";
import axios from "axios";

//import api from '../../api';

import ModalActionProduct from "../Modal/ModalActionProduct";

const colunas = [
    { field: "id", title: "ID" },
    { field: "name", title: "NOME" },
    { field: "description", title: "DESCRIÇÃO" },
    { field: "categoryId", title: "ID CATEGORIA" },
    { field: "category.name", title: "NOME CATEGORIA" },
    { field: "value", title: "VALOR" }
  ];

  
const baseUrl = "https://cors-anywhere.herokuapp.com/http://209.126.0.127:6001/api/product/";

//const baseUrlCategory = "https://cors-anywhere.herokuapp.com/http://209.126.0.127:6001/api/category/";


export default function ProductAction({titleModalInserirProduto, 
                                        titleModalEditar, 
                                        titleModalDeletar,
                                        modalInserirProduto, 
                                        modalEditar,
                                        modalDeletar,
                                        abrirFecharModalInserirProduto,
                                        abrirFecharModalEditar,
                                        abrirFecharModalDeletar
                                      }) {
  
  const [data, setData] = useState([]);

  /*const [dataCategory, setDataCategory] = useState([]);

  const actionGetCategory = async () => {
    await axios.get(baseUrlCategory)
    .then(response => {
      setDataCategory(response.data);
      //console.log(response.data);
    });
  };

  //passando o array vazio para funcinar apenas quando montar o componente
  useEffect(() => {
    actionGetCategory();
  }, []);*/

//********** ACTION POST **********//
  //passando null para os campos do json da api
  const [productSelecionada, setProductSelecionada]=useState({
    id: "",
    name: "",
    description: "",
    value: "",
    categoryId: null
  })

  //pegando o valor do input do formulário inserir
  const handleChange=e=>{
    const {name, value}=e.target;
    setProductSelecionada(prevState=>({
      ...prevState,
      [name]: value
    }));
    console.log(productSelecionada);
  }

  //chamo o post passando os dados digitados no formulário
  //insiro os dados na api e retorna a function para fechar o modal
  const actionPost=async()=>{
    await axios.post(baseUrl, productSelecionada)
    .then(response=>{
      setData(data.concat(response.data));
      
    });
  }
//********** ACTION POST **********//


//********** ACTION GET **********//
  const actionGet = async () => {
    await axios.get(baseUrl)
    .then(response => {
      setData(response.data);
      console.log(response.data);
    });
  };

  //passando o array vazio para funcinar apenas quando montar o componente
  useEffect(() => {
    actionGet();
  }, []);
//********** ACTION GET **********//



//selecionar a linha da tabela
//chamar o modal com os registros da linha
var selecionarProduto= function (name, caso) { 
  setProductSelecionada(name);
  (caso==="Editar")?abrirFecharModalEditar()
  :
  abrirFecharModalDeletar();
};

//********** ACTION PUT **********//
const actionPut = async() => {
  await axios.put(baseUrl+"/"+productSelecionada.id, productSelecionada)
  .then(response=>{
    var dataNova = data;
    dataNova.map((produto)=>{
      if(produto.id===productSelecionada.id){
        produto.name=productSelecionada.name;
        produto.description=productSelecionada.description;
        produto.description=productSelecionada.description;
      }
      setData(dataNova);
      return abrirFecharModalEditar();
    });
  }).catch(error=>{
    console.log(error);
  })
}
//********** ACTION PUT **********//


//********** ACTION DELETE **********//
const actionDelete = async() => {
  await axios.delete(baseUrl+"/"+productSelecionada.id)
  .then(response=>{
    setData(data.filter(produto=>produto.id!==productSelecionada.id));
    abrirFecharModalDeletar();
    console.log(response.data);
  }).catch(error=>{
    console.log(error);
  })
}
//********** ACTION DELETE **********//

  return (
    //selecionarDado={selecionarCategoria}
    <div>
        <ListTable colunas={colunas} data={data} selecionarDado={selecionarProduto}  />
        <ModalActionProduct valorInputProduto={handleChange} 
                      titleModalInserirProduto={titleModalInserirProduto} 
                      titleModalEditar={titleModalEditar}
                      titleModalDeletar={titleModalDeletar}

                      //dataSelectCategory={dataCategory}

                      inserirDados={actionPost}
                      editarDados={actionPut}
                      deletarDados={actionDelete}

                      dadoSelecionado={productSelecionada}
                      
                      modalInserirProduto={modalInserirProduto} 
                      modalEditar={modalEditar} 
                      modalDeletar={modalDeletar} 
                      abrirFecharModalInserirProduto={abrirFecharModalInserirProduto}
                      abrirFecharModalEditar={abrirFecharModalEditar}
                      abrirFecharModalDeletar={abrirFecharModalDeletar}
                       />
        
    </div>
  );
                       
}
