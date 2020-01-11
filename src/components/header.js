import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    color:'#fff',
    marginLeft:"20px",
    fontSize:"20px",
    marginTop:"0px",
    border:"1px solid rgba(255, 255, 255, 0.5)",
    float:"right",
    marginBottom:"10px"
  }
}));

const Header = ({ siteTitle,reiniciar,sitePerPerson }) => 
  {
    const classes = useStyles();
    return(
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
      paddingBottom:"10px"
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
          <br/>
          {sitePerPerson}
      <IconButton className={classes.button} aria-label="Agregar" onClick={()=>{reiniciar()}}>
         <DeleteIcon style={{fontSize:"42px"}} />
      </IconButton>
        </Link>
      </h1>
    </div>
  </header>
)}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
