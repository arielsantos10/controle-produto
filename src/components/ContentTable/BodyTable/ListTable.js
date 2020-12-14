import React from "react";
import PropTypes from "prop-types";

import { forwardRef } from "react";

import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";

import MaterialTable from "material-table";
//import TitleTable from "./TitleTable";

const tableIcons = {
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />)
};


export default function ListTable({ colunas, data, selecionarDado }) {

  return (
    <div>
      <MaterialTable
        columns={colunas}
        data={data}
        icons={tableIcons}
        localization={{
          body: {
            emptyDataSourceMessage: "Nenhum registro para exibir"
          },
          pagination: {
            labelRowsSelect: "linhas",
            labelDisplayedRows: "{count} de {from}-{to}",
            firstTooltip: "Primeira página",
            previousTooltip: "Página anterior",
            nextTooltip: "Próxima página",
            lastTooltip: "Última página"
          },
          header: {
            actions: "AÇÕES"
          }
        }}
        options={{
          search: false,
          showTitle: false,
          toolbar: false,
          actionsColumnIndex: -1
        }}
        actions={[
          {
            tooltip: "Editar",
            icon: tableIcons.Edit,
            onClick: (evt, rowData) => selecionarDado(rowData, "Editar")
          },
          {
            tooltip: "Deletar",
            icon: tableIcons.Delete,
            onClick: (evt, rowData) => selecionarDado(rowData, "Deletar")
          }
        ]}
      />
    </div>
  );
}

//biblioteca proptypes para definir os tipos das props
ListTable.propTypes = {
  colunas: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  selecionarDado: PropTypes.func.isRequired
};
