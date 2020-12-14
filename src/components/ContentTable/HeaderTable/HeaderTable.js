import React from "react";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Button from '@material-ui/core/Button';
import "./header-table.css";


export default function HeaderTable({ titleTable, icon, modalInserirButton}) {
  return (
    <div>
      <div style={{ width: "100%" }}>
        <Box display="flex">
          <Box display="flex" alignItems="center" flexGrow={1}>
            <Box color="#b087ee" mx="5px">
              {icon}
            </Box>
            <Box fontSize="1.1em">{titleTable}</Box>
          </Box>
          <Box p={1} >
            <Button className="botao" variant="outlined" onClick={modalInserirButton}>
              <span>ADD</span>
              <AddCircleIcon />
            </Button>
          </Box>
        </Box>
      </div>
    </div>
  );
}

//biblioteca proptypes para definir os tipos das props
HeaderTable.propTypes = {
  titleTable: PropTypes.string.isRequired
};
