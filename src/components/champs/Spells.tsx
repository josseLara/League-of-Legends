import { passiveImage, spellsImage } from '../../helpers/apis';
import { useState, useEffect } from 'react';
import { Box } from '@mui/material';

type propsSpells = {
  passive: string,
  spellQ: string,
  spellW: string,
  spellE: string,
  spellR: string,
  descriptionP: string,
  descriptionQ: string,
  descriptionW: string,
  descriptionE: string,
  descriptionR: string,
  passiveName: string,
  nameQ: string
  nameW: string
  nameE: string
  nameR: string
}

export default function Spells({
  passive, spellQ, spellW, spellE, spellR, descriptionP, descriptionQ, descriptionW, descriptionE, descriptionR, passiveName, nameQ, nameW, nameE, nameR }
  : propsSpells) {

  const [currentDescription, setCurrentDescription] = useState(descriptionP)
  const [currentName, setCurrentName] = useState(passiveName)
  const [key, setKey] = useState('PASSIVE')

  const handleDescription = (des: string, name: string, key: string) => {
    setCurrentDescription(des)
    setCurrentName(name)
    setKey(key)
  }

  useEffect(() => {
    setCurrentDescription(descriptionP)
    setCurrentName(passiveName)
  }, [descriptionP, passiveName])

  return (

    <Box sx={{display:'flex',flexDirection:'column',gap:'20px'}}>
      <ul className='spells_list'>
        <li className={`spells_item ${currentDescription === descriptionP ? "selected" : 'not_selected'}`}>
          <div className='spells_item_skill' onClick={() => handleDescription(descriptionP, passiveName, 'PASSIVE')}>
            <img src={`${passiveImage}${passive}`} alt='passive' />
            <span>Passive</span>
          </div>
        </li>
        <li className={`spells_item ${currentDescription === descriptionQ ? "selected" : 'not_selected'}`} onClick={() => handleDescription(descriptionQ, nameQ, 'Q')}>
          <div className='spells_item_skill'>
            <img src={`${spellsImage}${spellQ}`} alt='Q' />
            <span>Q</span>
          </div>
        </li>
        <li className={`spells_item ${currentDescription === descriptionW ? "selected" : 'not_selected'}`} onClick={() => handleDescription(descriptionW, nameW, 'W')}>
          <div className='spells_item_skill'>
            <img src={`${spellsImage}${spellW}`} alt='W' />
            <span>W</span>
          </div>
        </li>

        <li className={`spells_item ${currentDescription === descriptionE ? "selected" : 'not_selected'}`}
          onClick={() => handleDescription(descriptionE, nameE, 'E')}>
          <div className='spells_item_skill'>
            <img src={`${spellsImage}${spellE}`} alt='E' />
            <span>E</span>
          </div>
        </li>
        <li className={`spells_item ${currentDescription === descriptionR ? "selected" : 'not_selected'}`}
         onClick={() => handleDescription(descriptionR, nameR, 'R')} >
          <div className='spells_item_skill'>
            <img src={`${spellsImage}${spellR}`} alt='R' />
            <span>R</span>
          </div>
        </li>
      </ul>

      <h6 className='spells-name'>{currentName} <span className='spells-name_key'>{key}</span></h6>
      <p className='spells-description' dangerouslySetInnerHTML={{ __html: currentDescription }} />
    </Box>
  );
}