// Pool geral de todas as matérias disponíveis
export const allSubjects = [
  "Gestão de Pessoas",
  "Marketing",
  "Finanças",
  "Empreendedorismo",
  "Estratégia Empresarial",
  "Programação Orientada a Objetos",
  "Banco de Dados",
  "Desenvolvimento Web",
  "Arquitetura de Software",
  "Testes de Software",
  "Direito Civil",
  "Direito Penal",
  "Direito Constitucional",
  "Direito Trabalhista",
  "Direito Empresarial",
  "Anatomia",
  "Fisiologia",
  "Patologia",
  "Farmacologia",
  "Clínica Médica",
  "Matemática Aplicada",
  "Estatística",
  "Metodologia Científica",
  "Ética Profissional",
  "Comunicação e Expressão",
  "Gestão de Projetos",
  "Inovação e Tecnologia",
  "Sustentabilidade",
  "Liderança",
  "Pesquisa e Desenvolvimento",
]

// Função para sortear matérias aleatoriamente
export function getRandomSubjects(count: number = 5): string[] {
  const shuffled = [...allSubjects].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, count)
}

// Função que retorna matérias aleatórias para qualquer curso
export function getSubjectsByCourse(course: string): string[] {
  // Sempre retorna matérias sorteadas aleatoriamente, independente do curso
  return getRandomSubjects(5)
}

