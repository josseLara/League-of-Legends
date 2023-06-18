import { getChamps } from '../../service/getAllChamps';
import { getChampData } from '../../service/getChampData';

// getAllChamps
describe('getAllChamps', () => {
  it('should return an array of champions', async () => {
    const champs = await getChamps();
    expect(typeof champs === 'object').toBe(true);
  });
});

// getChampData

describe('getChampData', () => {
  it('should return champion data', async () => {
    // Llamamos a la función que queremos probar y comprobamos que devuelve los datos correctos
    const champData = await getChampData('Yorick');
    expect(champData.Yorick.id).toEqual('Yorick');
    expect(champData.Yorick.name).toEqual('Yorick');
    expect(champData.Yorick.image.full).toEqual('Yorick.png');
    expect(champData.Yorick.title).toEqual('Shepherd of Souls');
  });
});

