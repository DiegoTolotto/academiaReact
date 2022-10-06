import cerebro from '../imgs/cerebro.png'
import dinheiro from '../imgs/dinheiro.png'
import peso from '../imgs/peso.png'
import './selo.css'

export default function Selo() {
    return (
        <div className='selos'>
            <div className='containerSelo'>
                <img src={cerebro} className='imgs' alt='cerebro' />
                <p className='textoSelo'>Texto de venda Texto de venda<br />Texto de venda Texto de venda</p>
            </div>
            <div className='containerSelo'>
                <img src={dinheiro} className='imgs' alt='dinheiro' />
                <p className='textoSelo'>Texto de venda Texto de venda<br />Texto de venda Texto de venda</p>
            </div>
            <div className='containerSelo'>
                <img src={peso} className='imgs' alt='peso' />
                <p className='textoSelo'>Texto de venda Texto de venda<br />Texto de venda Texto de venda</p>
            </div>
        </div>
    )
}