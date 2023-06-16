import CardChamp from '../../components/champs/CardChamp';
import { useSelector } from 'react-redux';
import { AppStore } from '../../redux/store';
import '../../styles/ChampsGrid.scss'

function ChampsGrid(): JSX.Element {
  const champs = useSelector((state: AppStore) => state.champs)
  return (
    <>
      {champs.length === 0
        ? <div className='no_fav_container'>
          <img src="/img/no-fund.gif" height={200} alt="no results gif" />
          <h2>No results found</h2>
        </div>
        : <>
          <ul className="champs_grid">
            {champs.map(c => {
              return (
                <CardChamp
                  key={c.id}
                  id={c.id}
                  image={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${c.id}_0.jpg`}
                  title={c.title}
                  tags={c.tags} 
                  info={Object.values(c.info)} 
                />
              )
            })}
          </ul>
        </>
      }
    </>
  )
}

export default ChampsGrid