import React, {useState} from "react";
import HeaderTable from "../../ContentTable/HeaderTable/HeaderTable";
import ProductAction from "../../Actions/ProductAction";
import ListAltIcon from "@material-ui/icons/ListAlt";

export default function Product() {

  //abrir e fechar modal
  const [modalInserirProduto, setModalInserirProduto]= useState(false);
  const [modalEditar, setModalEditar]= useState(false);
  const [modalDeletar, setModalDeletar]= useState(false);

  const abrirFecharModalInserirProduto=()=>{
    setModalInserirProduto(!modalInserirProduto);
  }
  const abrirFecharModalEditar=()=>{
    setModalEditar(!modalEditar);
  }
  const abrirFecharModalDeletar=()=>{
    setModalDeletar(!modalDeletar);
  }


    return (
      <div>
        <HeaderTable 
          titleTable="Produtos" 
          icon={<ListAltIcon />} 
          modalInserirButton={abrirFecharModalInserirProduto}
        />

        <ProductAction 
          titleModalInserirProduto="Inserir novo Produto" 
          titleModalEditar="Editar Produto" 
          titleModalDeletar="Deletar Produto"
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

