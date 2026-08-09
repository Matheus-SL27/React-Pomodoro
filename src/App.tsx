import './styles/theme.css'
import './styles/global.css'
import { Heading } from './components/Heading'
import { TimerIcon } from 'lucide-react'

export function App(){
    return (
        <div>
            <Heading>
                Olá Mundo!
                <button>
                    <TimerIcon/>
                </button>
            </Heading>
            <p>Nossa main recebe nossos componentes com o export, não podemos fazer mais de uma linha html sem o ()</p>
        </div>
    )
}