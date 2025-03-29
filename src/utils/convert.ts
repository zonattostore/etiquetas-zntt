import { CellBase, Matrix } from 'react-spreadsheet';
import { ConvertedData, PreviaData } from '../models/data';

const dpr = window.devicePixelRatio;
const inch = 25.4; //1inch = 25.4 mm
const ppi = 264; //Ipad3 density

export function mmToPx(mm: number) {
  return ((mm / inch) * ppi) / dpr;
}

export function matrixToData(matrix: Matrix<CellBase>) {
  const dataArr = matrix.reduce<PreviaData[]>((acc, at) => {
    const [nome, tipo, tamanho, cor, quantidade, preco] = at.map(
      (r) => r?.value ?? ''
    );

    for (let i = 0; i < parseInt(quantidade); i++) {
      acc.push({
        nome,
        tipo,
        tamanho,
        cor,
        preco,
      });
    }

    return acc;
  }, []);

  return dataArr.reduce<ConvertedData[]>((ac, at, index) => {
    const obj: ConvertedData = {};

    if (index % 2 === 0) {
      obj.left = at;

      if (index + 1 < dataArr.length) {
        obj.right = dataArr[index + 1];
      }
      ac.push(obj);
    }
    return ac;
  }, []);
}
