import { render, screen } from '@testing-library/react';
import Main from './index.tsx';

describe('<Main />', () => {
  it('should render the heading', () => {
    // renderiza o component
    const { container } = render(<Main />);
    // busca o elemento e verifica a existência dele
    expect(screen.getByRole('heading', { name: /Boilerplate - Vite/i })).toBeInTheDocument();
    // gerar snapshot
    expect(container.firstChild).toMatchSnapshot();
  });
});
