export interface Props {
    colors: ColorProps[];
    handleClique: (id: number) => Promise<void>;
}

export interface ColorProps {
  id: number;
  background: string;
  color: string;
  count: number;
}
