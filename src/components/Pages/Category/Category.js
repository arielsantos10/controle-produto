import React, {useState} from "react";
import HeaderTable from "../../ContentTable/HeaderTable/HeaderTable";
import CategoryAction from "../../Actions/CategoryAction";
import ListAltIcon from "@material-ui/icons/ListAlt";

export default function Category() {

  //abrir e fechar modal
  const [modalInserir, setModalInserir]= useState(false);
  const [modalEditar, setModalEditar]= useState(false);
  const [modalDeletar, setModalDeletar]= useState(false);

  const abrirFecharModalInserir=()=>{
    setModalInserir(!modalInserir);
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
          titleTable="Categorias" 
          icon={<ListAltIcon />} 
          modalInserirButton={abrirFecharModalInserir}
        />

        <CategoryAction 
          titleModalInserir="Inserir nova Categoria" 
          titleModalEditar="Editar Categoria" 
          titleModalDeletar="Deletar Categoria"
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

