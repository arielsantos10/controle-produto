//useState useEffect necessário para implementar hooks
import React, {useEffect, useState} from "react";
import ListTable from "../ContentTable/BodyTable/ListTable";
import axios from "axios";

//import api from '../../api';

import ModalActionCategory from "../Modal/ModalActionCategory";

const colunas = [
    { field: "id", title: "ID" },
    { field: "name", title: "NOME" },
    { field: "description", title: "DESCRIÇÃO" }
  ];

  
const baseUrl = "https://cors-anywhere.herokuapp.com/http://209.126.0.127:6001/api/category/";


export default function CategoryAction({titleModalInserir, 
                                        titleModalEditar, 
                                        titleModalDeletar,
                                        modalInserir, 
                                        modalEditar,
                                        modalDeletar,
                                        abrirFecharModalInserir,
                                        abrirFecharModalEditar,
                                        abrirFecharModalDeletar
                                      }) {
  
  const [data, setData] = useState([]);

//********** ACTION POST **********//
  //passando null para os campos do json da api
  const [categoriaSelecionada, setCategoriaSelecionada]=useState({
    id: "",
    name: "",
    description: ""
  })

  //pegando o valor do input do formulário inserir
  const handleChange=e=>{
    const {name, value}=e.target;
    setCategoriaSelecionada(prevState=>({
      ...prevState,
      [name]: value
    }));
  }

  //chamo o post passando os dados digitados no formulário
  //insiro os dados na api e retorna a function para fechar o modal
  const actionPost=async()=>{
    await axios.post(baseUrl, categoriaSelecionada)
    .then(response=>{
      setData(data.concat(response.data));
      abrirFecharModalInserir()
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
var selecionarCategoria = function (name, caso) { 
  setCategoriaSelecionada(name);
  (caso==="Editar")?abrirFecharModalEditar()
  :
  abrirFecharModalDeletar()
};

//********** ACTION PUT **********//
const actionPut = async() => {
  await axios.put(baseUrl+"/"+categoriaSelecionada.id, categoriaSelecionada)
  .then(response=>{
    var dataNova = data;
    dataNova.map((categoria)=>{
      if(categoria.id===categoriaSelecionada.id){
        categoria.name=categoriaSelecionada.name;
        categoria.description=categoriaSelecionada.description;
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
  await axios.delete(baseUrl+"/"+categoriaSelecionada.id)
  .then(response=>{
    setData(data.filter(categoria=>categoria.id!==categoriaSelecionada.id));
    abrirFecharModalDeletar();
    console.log(response.data);
  }).catch(error=>{
    console.log(error);
  })
}
//********** ACTION DELETE **********//

  return (
    <div>
        <ListTable colunas={colunas} data={data} selecionarDado={selecionarCategoria} />
        <ModalActionCategory valorInput={handleChange} 
                      titleModalInserir={titleModalInserir} 
                      titleModalEditar={titleModalEditar}
                      titleModalDeletar={titleModalDeletar}
                      inserirDados={actionPost}
                      editarDados={actionPut}
                      deletarDados={actionDelete}
                      dadoSelecionado={categoriaSelecionada}
                      modalInserir={modalInserir} 
                      modalEditar={modalEditar} 
                      modalDeletar={modalDeletar} 
                      abrirFecharModalInserir={abrirFecharModalInserir}
                      abrirFecharModalEditar={abrirFecharModalEditar}
                      abrirFecharModalDeletar={abrirFecharModalDeletar}
                       />
    </div>
  );
}
