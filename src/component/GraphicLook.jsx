import Graphics from './Graphics'
import Graphics2 from './Graphics2'
import Nav from './Nav'

const GraphicLook = () => {
  return (
    <>
    <div class="allGrafic">
        <Nav/>
        <section class="spacing">
        <Graphics/>
        </section>
        <section class="spacingTwo">
         <Graphics2/>
        </section>
    </div>
    <div class='buttonGrafic'>
    <button className="btn btn-primary">Comparar</button>
    </div>
    </>
  )
}

export default GraphicLook

//falta configurar el evento onclick y el cambio de estado booleano para que aparezca y desaparezca y segundo gráfico.-