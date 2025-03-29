export type PreviaData = {
  nome: string;
  tipo: string;
  tamanho: string;
  cor: string;
  preco: number;
};

export type ConvertedData = { left?: PreviaData; right?: PreviaData };
