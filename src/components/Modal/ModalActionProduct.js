import React from "react";

import {Modal, TextField, Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import CloseIcon from '@material-ui/icons/Close';
import CheckIcon from '@material-ui/icons/Check';
import "./modal.css";

//estilo modal
const useStyles = makeStyles((theme) => ({
  modal: {
    position: 'absolute',
    width: 500,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #43425d',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  iconos:{
    cursor: 'pointer'
  }, 
  inputMaterial:{
    width: '100%'
  }
}));


export default function ModalActionProduct({titleModalInserirProduto,  
                                      titleModalEditar,
                                      titleModalDeletar,

                                      dadoSelecionado,

                                      modalInserirProduto,
                                      modalEditar,
                                      modalDeletar,

                                      inserirDados,
                                      editarDados,
                                      deletarDados,

                                      abrirFecharModalInserirProduto,
                                      abrirFecharModalEditar,
                                      abrirFecharModalDeletar,
                                      valorInputProduto
                                      //dataSelectCategory
                                    }) {

    //guardando estilo do modal
    const styles= useStyles();

    //const categoriaSelecionada = (<p><b>Categoria:</b> </p>)
    //const categoriaErro = (<p><b>Categoria não existe!</b></p>)

  
    //********** MODAL INSERIR PRODUTO **********//
    var bodyInserirProduct = (<div className={styles.modal}>
                              <h3>{titleModalInserirProduto}</h3>
                                <TextField className={styles.inputMaterial} label="Nome" name="name" onChange={valorInputProduto} />
                                <br />
                                <TextField className={styles.inputMaterial} label="Descrição" name="description" onChange={valorInputProduto} />
                                <br />
                                <TextField className={styles.inputMaterial} label="Valor" name="value" onChange={valorInputProduto} />
                                <br />
                                <TextField className={styles.inputMaterial} label="Cod Categoria" name="categoryId" onChange={valorInputProduto} />
                                <br /><br />
                                <div className="botao-modal" align="center">
                                    <Button color="primary" onClick={inserirDados}><CheckIcon/></Button>
                                    <Button onClick={abrirFecharModalInserirProduto}><CloseIcon/></Button>
                                </div>
                            </div>)
    //********** MODAL INSERIR PRODUTO **********//

    //********** MODAL EDITAR PRODUTO **********//
    var bodyEditar = ( <div className={styles.modal}>
                        <h3>{titleModalEditar}</h3>
                        <br />
                        <TextField className={styles.inputMaterial} 
                                    label="Nome" name="name" 
                                    onChange={valorInputProduto} 
                                    value={dadoSelecionado&&dadoSelecionado.name} />
                        <br />
                        <TextField className={styles.inputMaterial} 
                                    label="Descrição" name="description" 
                                    onChange={valorInputProduto}
                                    value={dadoSelecionado&&dadoSelecionado.description} /> 
                        <br />
                        <TextField className={styles.inputMaterial} 
                                    label="Valor" name="value" 
                                    onChange={valorInputProduto} 
                                    value={dadoSelecionado&&dadoSelecionado.value} />
                        <br />
                        <TextField className={styles.inputMaterial} 
                                    label="Cod Categoria" name="categoryId" 
                                    onChange={valorInputProduto}
                                    value={dadoSelecionado&&dadoSelecionado.description} />                      
                        <br /><br />
                        <div className="botao-modal" align="center">
                          <Button color="primary" onClick={editarDados} ><CheckIcon/></Button>
                          <Button onClick={abrirFecharModalEditar}><CloseIcon/></Button>
                        </div>
                      </div>)
    //********** MODAL EDITAR PRODUTO **********//

    //********** MODAL DELETAR PRODUTO **********//
    var bodyDeletar = (<div className={styles.modal}>
                        <h3>{titleModalDeletar}</h3>
                        <br />
                        <p>Tem certeza que dejesa deletar <b>{dadoSelecionado&&dadoSelecionado.name}</b> do produto?</p>         
                        <br /><br />
                        <div className="botao-modal" align="center">
                          <Button color="primary" onClick={deletarDados} ><CheckIcon/></Button>
                          <Button onClick={abrirFecharModalDeletar}><CloseIcon/></Button>
                        </div>
                      </div>)
    //********** MODAL DELETAR PRODUTO **********//


      return (
        <div>

          <Modal
            open={modalInserirProduto}
            onClose={abrirFecharModalInserirProduto}>
              {bodyInserirProduct}
          </Modal>

          <Modal
            open={modalEditar}
            onClose={abrirFecharModalEditar}>
              {bodyEditar}
          </Modal>

          <Modal
            open={modalDeletar}
            onClose={abrirFecharModalDeletar}>
              {bodyDeletar}
          </Modal>
      
        </div>
      );
                           
}
