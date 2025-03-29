import { Fragment, useEffect, useMemo } from 'react';
import { CellBase, Matrix } from 'react-spreadsheet';
import { Col, Row } from 'simple-display';
import { matrixToData, mmToPx } from '../../utils/convert';
import Button from '../button/button';
import './previa.scss';

export default function Previa({ data }: { data: Matrix<CellBase> }) {
  const convertedData = useMemo(() => matrixToData(data), [data]);

  return (
    <>
      <Row className='no-print'>
        <Col gap={10}>
          <Button
            onClick={() => {
              window.print();
            }}
          >
            Imprimir
          </Button>
        </Col>
      </Row>
      <Row>
        <Col className='no-print'>
          <h5>Prévia:</h5>
        </Col>
        <Col>
          <div
            className='previa'
            style={{ width: mmToPx(100), height: mmToPx(150) }}
          >
            <div className='conteudo'>
              {convertedData.map(({ left, right }, i) => (
                <div className='table-row' key={i}>
                  <div className='table-col'>
                    {left && (
                      <span>
                        {left.tipo} {left.nome}
                      </span>
                    )}
                    {right && (
                      <span>
                        {right.tipo} {right.nome}
                      </span>
                    )}
                  </div>
                  <div className='table-col'>
                    {left && <span className='preco'>{left.preco}</span>}
                    {right && <span className='preco'>{right.preco}</span>}
                  </div>
                  <div className='table-col'>
                    {left && (
                      <span>
                        <b>{left.tamanho}</b> - {left.cor}
                      </span>
                    )}
                    {right && (
                      <span>
                        <b>{right.tamanho}</b> - {right.cor}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}
