import './styles/theme.css'
import './styles/global.css'
import { Heading } from './components/Heading'

export function App(){
    return (
        <div>
            <h1>Ola mundo</h1>
            <Heading/>
            <p>Nossa main recebe nossos componentes com o export, não podemos fazer mais de uma linha html sem o ()</p>
        </div>
    )
}