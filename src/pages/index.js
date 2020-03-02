import React,{ useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Precio from '../components/precio'


const IndexPage = () => {
  const [menor, setMenor] = useState(0);
  const [mayor, setMayor] = useState(0);
  const [carpa, setCarpa] = useState(0);
  const [auto, setAuto] = useState(0);
  const [remolque, setRemolque] = useState(0);
  const [mchico, setMchico] = useState(0);
  const [mgrande, setMgrande] = useState(0);
  const [camper, setCamper] = useState(0);
  const reiniciar=()=>{
    setMenor(0);
    setMayor(0);
    setCarpa(0);
    setAuto(0);
    setRemolque(0);
    setMchico(0);
    setMgrande(0);
    setCamper(0);
  }
  const listaPrecios=[
    {
      nombre:"Menor",
      setNombre:setMenor,
      cantidad:menor,
      precio:200
    },
    {
      nombre:"Mayor",
      setNombre:setMayor,
      cantidad:mayor,
      precio:400
    },
    {
      nombre:"Carpa",
      setNombre:setCarpa,
      cantidad:carpa,
      precio:200
    },
    {
      nombre:"Auto",
      setNombre:setAuto,
      cantidad:auto,
      precio:300
    },

    {
      nombre:"Remolq",
      setNombre:setRemolque,
      cantidad:remolque,
      precio:250
    },
    {
      nombre:"Camper",
      setNombre:setCamper,
      cantidad:camper,
      precio:500
    },
    {
      nombre:"Mchico",
      setNombre:setMchico,
      cantidad:mchico,
      precio:550
    },
    {
      nombre:"Mgrand",
      setNombre:setMgrande,
      cantidad:mgrande,
      precio:600
    }

    ]
  var total=0;
  for (var a of listaPrecios)
  {

  total=total+a.cantidad*a.precio;
  }
  return (
  <Layout total={total} reiniciar={reiniciar} personas={menor+mayor} >
    <SEO title="Home" />
   {listaPrecios.map((x,i)=>(

   <>
    <Precio key={i} nombre={x.nombre} cantidad={x.cantidad} set={x.setNombre} precio={x.precio} />
   </>
   
   ))}
  </Layout>
  )
}

export default IndexPage
