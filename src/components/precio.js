import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { Container, Row, Col } from 'reactstrap';


const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    color:'#000000',
    fontSize:"50px"
  },
  numero: {
    color:'#000000',
    fontSize:50,
    display:"inline"
  },
  activa:{
    backgroundColor:"#24c52496",
    borderRadius:"5%",
    marginBottom:"5px",
  },
  inactiva:{
  borderRadius:"5%",
  border:"solid 1px",

  },
  textAlign:{
    textAlign:"center"
  }
}));


const Precio = (props) => {
  const classes = useStyles();
  return (
  <>
  <Row className={(props.cantidad!=0)?classes.activa:classes.inactiva}>
    <Col xs="12" md="4" className={classes.textAlign}><h2 style={{margin:"0px"}}>{props.nombre} <h3 style={{margin:"0px"}}>${props.precio}</h3></h2></Col>
    <Col xs="12" md="8" className={classes.textAlign}>
    <IconButton className={classes.button} aria-label="Sacar" onClick={()=>{if (props.cantidad!=0) props.set(props.cantidad-1)}}>
       <RemoveIcon style={{fontSize:"45px"}}/>
    </IconButton>
    <div className={classes.numero}>{props.cantidad}</div>
    <IconButton className={classes.button} aria-label="Agregar" onClick={()=>{props.set(props.cantidad+1)}}>
      <AddIcon style={{fontSize:"45px"}} />
    </IconButton>
  </Col>
  </Row>
  </>
  )
}

export default Precio
