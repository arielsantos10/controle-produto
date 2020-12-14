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




export default function ModalActionCategory({titleModalInserir,  
                                      titleModalEditar,
                                      titleModalDeletar,

                                      dadoSelecionado,

                                      modalInserir,
                                      modalEditar,
                                      modalDeletar,

                                      inserirDados,
                                      editarDados,
                                      deletarDados,

                                      abrirFecharModalInserir,
                                      abrirFecharModalEditar,
                                      abrirFecharModalDeletar,

                                      valorInput
                                    }) {

    //guardando estilo do modal
    const styles= useStyles();

    //********** MODAL INSERIR CATEGORIA **********//
    var bodyInserir = (<div className={styles.modal}>
                        <h3>{titleModalInserir}</h3>
                        <br />
                        <TextField className={styles.inputMaterial} label="Nome" name="name" onChange={valorInput} />
                        <br />
                        <TextField className={styles.inputMaterial} label="Descrição" name="description" onChange={valorInput} />          
                        <br /><br />
                        <div className="botao-modal" align="center">
                            <Button color="primary" onClick={inserirDados}><CheckIcon/></Button>
                            <Button onClick={abrirFecharModalInserir}><CloseIcon/></Button>
                        </div>
                    </div>)
    //********** MODAL INSERIR CATEGORIA **********//
    
    //********** MODAL EDITAR CATEGORIA **********//
    var bodyEditar = ( <div className={styles.modal}>
                        <h3>{titleModalEditar}</h3>
                        <br />
                        <TextField className={styles.inputMaterial} 
                                    label="Nome" name="name" 
                                    onChange={valorInput} 
                                    value={dadoSelecionado&&dadoSelecionado.name} />
                        <br />
                        <TextField className={styles.inputMaterial} 
                                    label="Descrição" name="description" 
                                    onChange={valorInput}
                                    value={dadoSelecionado&&dadoSelecionado.description} />          
                        <br /><br />
                        <div className="botao-modal" align="center">
                          <Button color="primary" onClick={editarDados} ><CheckIcon/></Button>
                          <Button onClick={abrirFecharModalEditar}><CloseIcon/></Button>
                        </div>
                      </div>)
    //********** MODAL EDITAR CATEGORIA **********//

    //********** MODAL DELETAR CATEGORIA **********//
    var bodyDeletar = (<div className={styles.modal}>
                        <h3>{titleModalDeletar}</h3>
                        <br />
                        <p>Tem certeza que dejesa deletar <b>{dadoSelecionado&&dadoSelecionado.name}</b> da categoria?</p>         
                        <br /><br />
                        <div className="botao-modal" align="center">
                          <Button color="primary" onClick={deletarDados} ><CheckIcon/></Button>
                          <Button onClick={abrirFecharModalDeletar}><CloseIcon/></Button>
                        </div>
                      </div>)
    //********** MODAL DELETAR CATEGORIA **********//



      return (
        <div>
          <Modal
            open={modalInserir}
            onClose={abrirFecharModalInserir}>
              {bodyInserir}
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
