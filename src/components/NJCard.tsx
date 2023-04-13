import { ReactNode } from 'react';

interface Props {
  className?: string;
  children: ReactNode;
}

export const NJCard = (props: Props) => {
  const { className = '', children } = props;
  return <div className={`njn-card border rounded card-background ${className}`}>{children}</div>;
};
