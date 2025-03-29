import { useState } from 'react';
import Spreadsheet, { CellBase, Matrix } from 'react-spreadsheet';
import { Col, Container, Row } from 'simple-display';
import Previa from './components/previa/previa';
import TableButton from './components/tableButton/tableButton';

export default function App() {
  const columns = ['Nome', 'Tipo', 'Tamanho', 'Cor', 'Quantidade', 'Preço'];
  const [data, setData] = useState<Matrix<CellBase>>([
    Array(columns.length).fill({}),
  ]);

  const addRow = () => setData([...data, Array(columns.length).fill({})]);

  return (
    <Container>
      <Row className='no-print'>
        <Col>
          <h5>Tabela de conteúdo:</h5>
        </Col>
        <Col>
          <Spreadsheet
            className='spreadsheet'
            columnLabels={columns}
            data={data}
            onChange={setData}
            hideRowIndicators
          />
          <TableButton onClick={addRow}>+</TableButton>
        </Col>
      </Row>

      <Previa data={data} />
    </Container>
  );
}
