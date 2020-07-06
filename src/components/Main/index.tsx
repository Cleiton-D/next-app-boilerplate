import { Container, Logo, Title, Description, Illustration } from './styles';

type Props = {
  title?: string;
  description?: string;
};

const Main: React.FC<Props> = ({
  title = 'React Avançado',
  description = 'Typescript, ReactJS, NextJS e Styled Components',
}) => (
  <Container>
    <Logo
      src="/assets/logo.svg"
      alt="Imagem de um átomo e React Avançado escrito ao lado."
    />
    <Title>{title}</Title>
    <Description>{description}</Description>
    <Illustration
      src="/assets/hero-illustration.svg"
      alt="Um desenvolvedor de frente para uma tela com código."
    />
  </Container>
);

export default Main;
