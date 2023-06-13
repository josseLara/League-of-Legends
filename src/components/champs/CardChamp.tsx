import { Link } from 'react-router-dom'
import { IChamps } from '../../types/champs.types'
import '../../styles/CardChamp.scss'
import Tooltip from '@mui/material/Tooltip';
import { splitName } from '../../helpers/splitName'
import FavButton from '../../components/buttons/FavButton'
import { useEffect, useRef, useState } from 'react';

/**
 * Component that display the card with the information of the champion 
 */
function CardChamp({ id, image, title, tags, info }: IChamps): JSX.Element {

    const elementoRef = useRef()
    const [isIntersecting, setIsIntersecting] = useState(false)
    let difficulty = parseInt(info[3]) < 3 ? 'LOW' : parseInt(info[3]) < 10 ? 'MODERATE' : 'HIGH';
    useEffect(() => {
        const elemento = elementoRef.current
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                setIsIntersecting(entry.isIntersecting)
            })
        },
            {
                threshold: 0.5
            }
        )

        if (elemento) {
            observer.observe(elemento)
        }

    }, [])

    return (

        <li key={id} className={`card_champ ${isIntersecting ? 'show' : 'hidden'}`} ref={elementoRef}>
            <div className="card_champ_content">
                <span className='card_champ_content_title'>{title}</span>
            </div>
            <Link to={`/champions/${id}`} className='card_champ_link' id={id}>
                <img src={image} className='card_champ_img' alt={image} />
            </Link>
            <div className="card_champ_info">
                <div className='card_champ_info_tags'>
                    {tags.map(tag => {
                        return (
                            <Tooltip title={`${tag}`} arrow key={`${tag}`} >
                                <img
                                    src={`/tags/${tag}.png`}
                                    alt={`${id + tag}`}
                                    key={`${id + tag}`}
                                />
                            </Tooltip>
                        )
                    })}
                </div>
                <span className="card_champ_info_name">{splitName(id)}</span>
            </div>

            <div className="card_champ_sidebar">
                <div className="card_champ_sidebar_info">

                    {
                        ['ATK', 'DEF', 'MAG'].map((item, index) => {
                            return (
                                <div className="card_champ_sidebar_info_item" key={index}>
                                    <p>{item}</p>
                                    <span>{info[index]}</span>
                                </div>
                            )
                        })
                    }

                </div>
                <div className="card_champ_sidebar_dif">
                    {/* <p>DIFFICULTY</p> */}
                    <div className='card_champ_sidebar_dif_lines'>
                        <span className="line"></span>
                        <span className={`line ${difficulty == 'LOW'? 'inactive' :'' }`}></span>
                        <span className={`line ${difficulty == 'MODERATE' || difficulty == 'LOW' ? 'inactive' :'' }`}></span>
                    </div>
                    <span>{difficulty}</span>
                </div>
                <FavButton id={id} />
            </div>

        </li>
    )
}

export default CardChamp