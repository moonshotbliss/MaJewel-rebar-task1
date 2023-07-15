import { Icon } from 'react-icons-kit'
import {triplePoints} from 'react-icons-kit/metrize/triplePoints'
import {comment} from 'react-icons-kit/metrize/comment'
import {brush} from 'react-icons-kit/metrize/brush'
import {graphs} from 'react-icons-kit/metrize/graphs'


export default function Solutions(){
    let iconStyles = {color: 'rgb(43, 168, 252)'}
    return (
        <div className="solutions">
            <ul className='solutions__list'>
                <li>
                    <Icon style={iconStyles}icon={comment} size={80}/>
                    <h2>Consulting</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis aliquam faucibus purus in massa tempor. Tristique nulla aliquet enim tortor. Leo a diam sollicitudin tempor id eu nisl nunc mi. Neque egestas congue quisque egestas diam.</p>
                </li>
                <li>
                    <Icon style={iconStyles} icon={triplePoints} size={80}/>
                    <h2>Developing</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis aliquam faucibus purus in massa tempor. Tristique nulla aliquet enim tortor. Leo a diam sollicitudin tempor id eu nisl nunc mi. Neque egestas congue quisque egestas diam.</p>
                </li>
                <li>
                    <Icon style={iconStyles} icon={brush} size={80}/>
                    <h2>Designing</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis aliquam faucibus purus in massa tempor. Tristique nulla aliquet enim tortor. Leo a diam sollicitudin tempor id eu nisl nunc mi. Neque egestas congue quisque egestas diam.</p>
                </li>
                <li>
                    <Icon style={iconStyles} icon={graphs} size={80}/>
                    <h2>Analysis</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis aliquam faucibus purus in massa tempor. Tristique nulla aliquet enim tortor. Leo a diam sollicitudin tempor id eu nisl nunc mi. Neque egestas congue quisque egestas diam.</p>
                </li>
            </ul>

        </div>
    )
}