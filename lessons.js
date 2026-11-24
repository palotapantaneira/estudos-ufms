/* Aulas introdutórias — revisão didática */
window.UFMS_LESSONS=[
 {
  "id": "logica",
  "title": "Lógica proposicional",
  "subject": "Raciocínio lógico",
  "role": "Comum",
  "subtitle": "Proposições, conectivos e negações",
  "sections": [
   {
    "id": "proposicoes",
    "title": "1. O que é uma proposição?",
    "readTime": 12,
    "sourceLabel": "Conteúdo introdutório de lógica",
    "content": [
     "Uma proposição é uma sentença declarativa à qual se pode atribuir exatamente um valor lógico: verdadeiro ou falso. Ela não precisa ser verdadeira para ser uma proposição; basta que possa ser julgada como verdadeira ou falsa.",
     "“Campo Grande é a capital de Mato Grosso do Sul” é uma proposição verdadeira. “2 + 2 = 5” é uma proposição falsa. Já uma pergunta como “Você estudou hoje?” e uma ordem como “Abra o livro” não são proposições.",
     "Uma sentença aberta, como “x + 2 = 5”, depende de uma variável cujo valor não foi determinado. Sem definir x, não é possível atribuir um único valor de verdade à expressão."
    ],
    "notebook": [
     "Proposição = frase declarativa com valor lógico V ou F.",
     "Perguntas, ordens e exclamações não são proposições.",
     "Sentença aberta contém variável não determinada."
    ],
    "questions": [
     {
      "id": "lp1",
      "text": "Qual frase é uma proposição lógica?",
      "options": [
       "Estude agora.",
       "Qual é a resposta?",
       "7 é um número ímpar.",
       "Que dia bonito!"
      ],
      "answer": 2,
      "explain": "“7 é um número ímpar” é uma afirmação declarativa avaliável como verdadeira. As outras frases expressam ordem, pergunta e exclamação.",
      "tag": "identificar proposições",
      "wrongHint": "Pode haver confusão entre uma frase que afirma algo e uma frase que apenas solicita ou expressa algo."
     },
     {
      "id": "lp2",
      "text": "Por que “x + 1 = 4”, sem valor definido para x, é uma sentença aberta?",
      "options": [
       "Porque toda equação é falsa.",
       "Porque o valor de verdade depende de x.",
       "Porque não contém números.",
       "Porque é uma pergunta."
      ],
      "answer": 1,
      "explain": "Sem conhecer x, a igualdade pode ser verdadeira ou falsa.",
      "tag": "sentenças abertas",
      "wrongHint": "Releia a diferença entre os conceitos cobrados antes de tentar novamente."
     },
     {
      "id": "lp3",
      "text": "A frase “10 é menor que 4” é:",
      "options": [
       "Proposição falsa.",
       "Proposição verdadeira.",
       "Ordem.",
       "Sentença aberta."
      ],
      "answer": 0,
      "explain": "É uma proposição, pois possui valor lógico definido; neste caso, falso.",
      "tag": "valor lógico",
      "wrongHint": "Releia a diferença entre os conceitos cobrados antes de tentar novamente."
     }
    ]
   },
   {
    "id": "conectivos",
    "title": "2. Conectivos e negação",
    "readTime": 15,
    "content": [
     "A conjunção “p e q” só é verdadeira quando as duas proposições são verdadeiras. Se qualquer uma for falsa, a conjunção é falsa.",
     "A disjunção inclusiva “p ou q” é verdadeira quando pelo menos uma proposição é verdadeira. É falsa apenas quando ambas são falsas.",
     "A negação “não p” inverte o valor lógico de p. A negação de “todos os alunos estudaram” é “pelo menos um aluno não estudou”, e não “nenhum aluno estudou”."
    ],
    "notebook": [
     "“e”: exige as duas partes verdadeiras.",
     "“ou” inclusivo: exige pelo menos uma parte verdadeira.",
     "“não”: inverte o valor lógico; negar “todos” é afirmar “existe ao menos um que não”."
    ],
    "questions": [
     {
      "id": "lc1",
      "text": "Se p é verdadeiro e q é falso, o valor de “p e q” é:",
      "options": [
       "Verdadeiro.",
       "Falso.",
       "Indeterminado.",
       "Depende de outra proposição."
      ],
      "answer": 1,
      "explain": "A conjunção exige que p e q sejam ambas verdadeiras; q é falsa.",
      "tag": "conjunção",
      "wrongHint": "Releia a diferença entre os conceitos cobrados antes de tentar novamente."
     },
     {
      "id": "lc2",
      "text": "Se p é verdadeiro e q é falso, o valor de “p ou q” inclusivo é:",
      "options": [
       "Verdadeiro.",
       "Falso.",
       "Indeterminado.",
       "Não é uma proposição."
      ],
      "answer": 0,
      "explain": "Na disjunção inclusiva, basta que pelo menos uma das proposições seja verdadeira.",
      "tag": "disjunção",
      "wrongHint": "Releia a diferença entre os conceitos cobrados antes de tentar novamente."
     },
     {
      "id": "lc3",
      "text": "Qual é a negação lógica de “Todos os servidores participaram”?",
      "options": [
       "Todos os servidores faltaram.",
       "Nenhum servidor participou.",
       "Pelo menos um servidor não participou.",
       "Pelo menos um servidor participou."
      ],
      "answer": 2,
      "explain": "Negar “todos participaram” equivale a afirmar a existência de ao menos um servidor que não participou.",
      "tag": "negação de quantificadores",
      "wrongHint": "Você pode estar trocando a negação de “todos” pela afirmação mais forte de que “ninguém” participou."
     }
    ]
   }
  ]
 },
 {
  "id": "portugues",
  "title": "Compreensão e coesão textual",
  "subject": "Português",
  "role": "Comum",
  "subtitle": "Ler, interpretar e relacionar ideias",
  "sections": [
   {
    "id": "coerencia",
    "title": "1. Coerência e coesão",
    "readTime": 12,
    "content": [
     "Coerência diz respeito à consistência do sentido global de um texto. Um texto coerente apresenta ideias que podem ser compreendidas em conjunto, sem contradições injustificadas.",
     "Coesão corresponde aos recursos linguísticos que relacionam partes do texto, como pronomes, conjunções, advérbios e repetições controladas. Um texto pode usar conectivos e ainda assim ser incoerente.",
     "Exemplo: “Joana estudou para a prova. Por isso, organizou um calendário de revisões.” O conectivo “por isso” expressa uma relação de consequência entre as orações."
    ],
    "notebook": [
     "Coerência = sentido e compatibilidade entre ideias.",
     "Coesão = mecanismos linguísticos de ligação.",
     "Conectivos indicam relações como causa, consequência, oposição e conclusão."
    ],
    "questions": [
     {
      "id": "pc1",
      "text": "Qual elemento é um recurso de coesão textual?",
      "options": [
       "Uma contradição não explicada.",
       "Uma conjunção que liga orações.",
       "Uma informação sem relação com o tema.",
       "Uma conclusão incompatível com a premissa."
      ],
      "answer": 1,
      "explain": "Conjunções estabelecem relações linguísticas entre partes do texto.",
      "tag": "coesão",
      "wrongHint": "Releia a diferença entre os conceitos cobrados antes de tentar novamente."
     },
     {
      "id": "pc2",
      "text": "Em “Estudou bastante, mas não conseguiu a nota desejada”, “mas” indica:",
      "options": [
       "Adição.",
       "Condição.",
       "Oposição.",
       "Finalidade."
      ],
      "answer": 2,
      "explain": "“Mas” introduz contraste em relação à expectativa criada pela primeira oração.",
      "tag": "conectivos adversativos",
      "wrongHint": "Releia a diferença entre os conceitos cobrados antes de tentar novamente."
     },
     {
      "id": "pc3",
      "text": "Um texto pode ter conectivos corretos e, ainda assim, não ter sentido global consistente?",
      "options": [
       "Sim, porque coesão não garante coerência.",
       "Não, porque conectivos sempre garantem coerência.",
       "Não, porque coerência depende apenas da pontuação.",
       "Sim, porque todas as conjunções são contraditórias."
      ],
      "answer": 0,
      "explain": "É possível haver ligações gramaticais sem que o conjunto das ideias seja consistente.",
      "tag": "diferença coesão e coerência",
      "wrongHint": "Releia a diferença entre os conceitos cobrados antes de tentar novamente."
     }
    ]
   },
   {
    "id": "interpretacao",
    "title": "2. Informação explícita e inferência",
    "readTime": 12,
    "content": [
     "A informação explícita está diretamente apresentada no texto. A inferência é uma conclusão construída a partir de pistas textuais e do contexto, sem acrescentar fatos que o texto não autoriza.",
     "Considere: “Quando chegou à biblioteca, Lara encontrou a porta fechada e um aviso de manutenção.” Pode-se inferir que a biblioteca não estava recebendo o público naquele momento, mas não que Lara desistiu de estudar.",
     "Em provas, diferencie o que o texto afirma, o que permite concluir e o que o leitor apenas imagina."
    ],
    "notebook": [
     "Explícito = está escrito.",
     "Inferência = conclusão sustentada por pistas.",
     "Evitar pressupostos e extrapolações sem base no texto."
    ],
    "questions": [
     {
      "id": "pi1",
      "text": "Texto: “A aula foi cancelada por falta de energia.” Qual informação é explícita?",
      "options": [
       "O professor estava doente.",
       "A turma recebeu tarefa extra.",
       "A aula foi cancelada.",
       "A escola ficará fechada amanhã."
      ],
      "answer": 2,
      "explain": "O cancelamento está diretamente afirmado no enunciado.",
      "tag": "informação explícita",
      "wrongHint": "Releia a diferença entre os conceitos cobrados antes de tentar novamente."
     },
     {
      "id": "pi2",
      "text": "Texto: “Ao chegar à biblioteca, Ana encontrou um aviso de manutenção e as portas fechadas.” O que é possível inferir?",
      "options": [
       "Ana voltou para casa.",
       "A biblioteca não atendia naquele momento.",
       "Todos os livros foram removidos.",
       "A manutenção durará uma semana."
      ],
      "answer": 1,
      "explain": "O aviso de manutenção e as portas fechadas sustentam a inferência de que não havia atendimento naquele instante.",
      "tag": "inferência",
      "wrongHint": "Releia a diferença entre os conceitos cobrados antes de tentar novamente."
     },
     {
      "id": "pi3",
      "text": "Qual alternativa representa extrapolação indevida?",
      "options": [
       "Concluir algo apoiado por pistas do texto.",
       "Identificar uma informação escrita literalmente.",
       "Distinguir opinião de fato.",
       "Atribuir ao personagem uma decisão não mencionada nem indicada."
      ],
      "answer": 3,
      "explain": "Uma decisão não sustentada pelo texto é uma suposição do leitor, não uma inferência segura.",
      "tag": "extrapolação",
      "wrongHint": "Releia a diferença entre os conceitos cobrados antes de tentar novamente."
     }
    ]
   }
  ]
 },
 {
  "id": "constitucional",
  "title": "Princípios da administração pública",
  "subject": "Legislação",
  "role": "Comum",
  "subtitle": "Constituição Federal, arts. 37 a 41 — introdução",
  "sourceUrl": "https://www.planalto.gov.br/ccivil_03/constituicao/constituicaocompilado.htm",
  "sections": [
   {
    "id": "limpe",
    "title": "1. Princípios do art. 37",
    "readTime": 14,
    "quote": "“legalidade, impessoalidade, moralidade, publicidade e eficiência”",
    "quoteFrom": "Constituição Federal, art. 37, caput — trecho literal",
    "content": [
     "O art. 37 da Constituição estabelece princípios aplicáveis à administração pública direta e indireta. Uma forma de memorizá-los é a sigla LIMPE. O texto legal deve ser consultado na versão consolidada oficial.",
     "Legalidade: o agente público atua conforme as competências e condições legais. Impessoalidade: decisões devem atender ao interesse público, sem favorecimento pessoal. Moralidade: a conduta administrativa deve observar padrões éticos e jurídicos.",
     "Publicidade: transparência dos atos, ressalvadas hipóteses legais de sigilo. Eficiência: busca de resultados e de bom uso dos recursos públicos, dentro da legalidade."
    ],
    "notebook": [
     "LIMPE: legalidade, impessoalidade, moralidade, publicidade e eficiência.",
     "Impessoalidade afasta favorecimento e promoção pessoal.",
     "Publicidade admite restrições legalmente justificadas."
    ],
    "questions": [
     {
      "id": "l37a",
      "text": "Qual atitude corresponde principalmente à impessoalidade?",
      "options": [
       "Favorecer conhecidos em atendimento.",
       "Dar prioridade por amizade.",
       "Aplicar critérios objetivos e iguais.",
       "Omitir decisões de interesse público."
      ],
      "answer": 2,
      "explain": "A impessoalidade exige decisões baseadas em critérios de interesse público, sem privilégios pessoais.",
      "tag": "impessoalidade",
      "wrongHint": "Suas respostas sugerem possível confusão entre o interesse público e preferências pessoais do agente."
     },
     {
      "id": "l37b",
      "text": "A publicidade de atos administrativos significa que:",
      "options": [
       "Toda informação é sempre pública sem exceções.",
       "A transparência é a regra, respeitados sigilos legais.",
       "Os atos podem permanecer secretos por vontade do gestor.",
       "Somente o interessado pode saber da existência do ato."
      ],
      "answer": 1,
      "explain": "Publicidade exige transparência, mas há restrições previstas em lei para dados protegidos.",
      "tag": "publicidade",
      "wrongHint": "Releia a diferença entre os conceitos cobrados antes de tentar novamente."
     },
     {
      "id": "l37c",
      "text": "Qual princípio enfatiza alcançar bons resultados com uso adequado dos recursos públicos?",
      "options": [
       "Eficiência.",
       "Impessoalidade.",
       "Publicidade.",
       "Moralidade."
      ],
      "answer": 0,
      "explain": "Eficiência exige atuação orientada a resultados e adequada utilização dos recursos, sem afastar os demais princípios.",
      "tag": "eficiência",
      "wrongHint": "Releia a diferença entre os conceitos cobrados antes de tentar novamente."
     }
    ]
   },
   {
    "id": "aplicacao",
    "title": "2. Aplicação prática",
    "readTime": 13,
    "content": [
     "Em questões de concursos, os princípios frequentemente aparecem em situações hipotéticas. O foco é identificar o problema central da conduta descrita e distinguir princípios que podem estar relacionados.",
     "Um atendimento que favoreça parentes por vínculo pessoal viola principalmente a impessoalidade. Um ato escondido sem base legal compromete principalmente a publicidade. Uma decisão sem respaldo em competência legal afronta a legalidade.",
     "A análise de um caso pode envolver mais de um princípio, mas uma questão objetiva costuma destacar o aspecto predominante."
    ],
    "notebook": [
     "Favorecimento pessoal → impessoalidade.",
     "Ocultação indevida de ato → publicidade.",
     "Agir sem competência legal → legalidade."
    ],
    "questions": [
     {
      "id": "l37d",
      "text": "Um gestor exige procedimento sem qualquer fundamento legal e fora de sua competência. Qual princípio é diretamente afetado?",
      "options": [
       "Publicidade.",
       "Legalidade.",
       "Eficiência.",
       "Impessoalidade."
      ],
      "answer": 1,
      "explain": "A legalidade condiciona a atuação do agente público ao ordenamento jurídico e às competências previstas.",
      "tag": "legalidade",
      "wrongHint": "Releia a diferença entre os conceitos cobrados antes de tentar novamente."
     },
     {
      "id": "l37e",
      "text": "Um servidor usa a estrutura pública para promover exclusivamente sua imagem pessoal. Qual princípio é especialmente comprometido?",
      "options": [
       "Impessoalidade.",
       "Eficiência.",
       "Publicidade.",
       "Razoabilidade."
      ],
      "answer": 0,
      "explain": "O uso de meios públicos para promoção pessoal conflita com a impessoalidade na atuação administrativa.",
      "tag": "impessoalidade",
      "wrongHint": "Releia a diferença entre os conceitos cobrados antes de tentar novamente."
     },
     {
      "id": "l37f",
      "text": "Uma unidade mantém um ato administrativo oculto sem justificativa legal. Qual princípio é mais diretamente afetado?",
      "options": [
       "Eficiência.",
       "Moralidade.",
       "Publicidade.",
       "Legalidade orçamentária."
      ],
      "answer": 2,
      "explain": "A falta de transparência sem amparo legal afronta o princípio da publicidade.",
      "tag": "publicidade",
      "wrongHint": "Releia a diferença entre os conceitos cobrados antes de tentar novamente."
     }
    ]
   },
   {
    "id": "concurso",
    "title": "3. Concurso e ingresso no serviço público (art. 37)",
    "readTime": 15,
    "content": [
     "O concurso é a regra para ingresso em cargo ou emprego público. A nomeação para cargo em comissão declarado em lei de livre nomeação e exoneração é uma exceção. Funções de confiança são exercidas exclusivamente por ocupantes de cargo efetivo; funções de confiança e cargos em comissão se destinam a direção, chefia e assessoramento.",
     "A validade constitucional do concurso é de até dois anos, admitida uma prorrogação pelo mesmo período. Durante o prazo previsto no edital, aprovados no concurso anterior têm prioridade sobre novos concursados para assumir cargo ou emprego na carreira.",
     "Exemplo: uma seleção da UFMS válida por um ano pode ser prorrogada por mais um ano. Não confunda o prazo do concurso com o prazo para tomar posse."
    ],
    "notebook": [
     "Concurso: regra de ingresso; cargo em comissão: exceção legal.",
     "Validade: até 2 anos + uma prorrogação por igual período.",
     "Função de confiança: exclusivamente servidor efetivo."
    ],
    "questions": [
     {
      "id": "cf37g",
      "text": "Um concurso válido por um ano pode ser prorrogado por quanto tempo, segundo a regra constitucional?",
      "options": [
       "Um ano, uma única vez.",
       "Dois anos, sempre.",
       "Prazo indeterminado.",
       "Seis meses, obrigatoriamente."
      ],
      "answer": 0,
      "explain": "A prorrogação, se concedida, é por período igual ao inicial.",
      "tag": "validade do concurso",
      "wrongHint": "Compare a situação com o dispositivo indicado e observe a diferença entre os conceitos."
     },
     {
      "id": "cf37h",
      "text": "Quem pode exercer função de confiança?",
      "options": [
       "Qualquer pessoa.",
       "Exclusivamente ocupantes de cargo efetivo.",
       "Apenas terceirizados.",
       "Apenas aposentados."
      ],
      "answer": 1,
      "explain": "O art. 37, V, reserva funções de confiança a servidores ocupantes de cargo efetivo.",
      "tag": "função de confiança",
      "wrongHint": "Compare a situação com o dispositivo indicado e observe a diferença entre os conceitos."
     },
     {
      "id": "cf37i",
      "text": "Qual hipótese constitui exceção constitucional à exigência de concurso?",
      "options": [
       "Todo cargo de universidade.",
       "Todo emprego público.",
       "Cargo em comissão declarado em lei de livre nomeação e exoneração.",
       "Qualquer contrato permanente."
      ],
      "answer": 2,
      "explain": "A exceção não abrange indiscriminadamente cargos efetivos.",
      "tag": "concurso público",
      "wrongHint": "Compare a situação com o dispositivo indicado e observe a diferença entre os conceitos."
     }
    ]
   },
   {
    "id": "mandato",
    "title": "4. Mandato eletivo, regime e previdência (arts. 38 a 40)",
    "readTime": 15,
    "content": [
     "O art. 38 disciplina a situação de servidor da administração direta, autárquica e fundacional eleito para mandato. Mandatos federal, estadual ou distrital exigem afastamento do cargo, emprego ou função. Para prefeito, há afastamento e opção de remuneração. Para vereador, se houver compatibilidade de horários, é possível receber as vantagens do cargo e a remuneração eletiva; sem compatibilidade, aplica-se a regra do prefeito.",
     "O art. 39 trata de aspectos da política de pessoal, remuneração e formação dos servidores. O art. 40 trata do regime próprio de previdência dos titulares de cargo efetivo, de caráter contributivo e solidário. Não confunda previdência com estabilidade.",
     "Leia integralmente os artigos 38 a 40 no texto constitucional oficial para aprofundar as regras e exceções. Esta seção é uma introdução, não uma cobertura integral."
    ],
    "notebook": [
     "Art. 38: mandato eletivo.",
     "Art. 39: política de pessoal e remuneração.",
     "Art. 40: previdência dos titulares de cargo efetivo."
    ],
    "questions": [
     {
      "id": "cf38a",
      "text": "Servidor eleito prefeito deve:",
      "options": [
       "Continuar sempre no cargo de origem.",
       "Afastar-se, podendo optar pela remuneração.",
       "Receber necessariamente as duas remunerações.",
       "Ser demitido."
      ],
      "answer": 1,
      "explain": "O art. 38, II, prevê afastamento e opção pela remuneração.",
      "tag": "mandato de prefeito",
      "wrongHint": "Compare a situação com o dispositivo indicado e observe a diferença entre os conceitos."
     },
     {
      "id": "cf38b",
      "text": "Servidor eleito vereador, com compatibilidade de horários, pode:",
      "options": [
       "Receber vantagens do cargo e remuneração eletiva.",
       "Ser demitido automaticamente.",
       "Receber apenas o salário de vereador.",
       "Dispensar o cumprimento do horário."
      ],
      "answer": 0,
      "explain": "A compatibilidade permite a acumulação prevista no art. 38, III.",
      "tag": "mandato de vereador",
      "wrongHint": "Compare a situação com o dispositivo indicado e observe a diferença entre os conceitos."
     },
     {
      "id": "cf40a",
      "text": "O regime próprio do art. 40 possui caráter:",
      "options": [
       "Exclusivamente privado.",
       "Não contributivo.",
       "Contributivo e solidário.",
       "Exclusivamente facultativo."
      ],
      "answer": 2,
      "explain": "A Constituição caracteriza o regime próprio dessa forma.",
      "tag": "previdência",
      "wrongHint": "Compare a situação com o dispositivo indicado e observe a diferença entre os conceitos."
     }
    ]
   },
   {
    "id": "estabilidade",
    "title": "5. Estabilidade e perda do cargo (art. 41)",
    "readTime": 15,
    "content": [
     "A estabilidade constitucional exige três anos de efetivo exercício para servidor nomeado para cargo efetivo por concurso, além da avaliação especial de desempenho por comissão instituída para essa finalidade.",
     "Estabilidade não significa impossibilidade de perder o cargo. O art. 41 prevê perda por decisão judicial definitiva, processo administrativo com ampla defesa ou avaliação periódica de desempenho na forma de lei complementar, com ampla defesa. A Constituição prevê também a hipótese do art. 169, § 4º.",
     "Se a demissão do servidor estável for invalidada judicialmente, ele será reintegrado. Se houver ocupante estável em seu lugar, este será reconduzido ao cargo de origem, aproveitado em outro cargo ou posto em disponibilidade, conforme a Constituição."
    ],
    "notebook": [
     "Estabilidade: 3 anos de efetivo exercício + avaliação especial.",
     "Estabilidade não é vitaliciedade.",
     "Demissão invalidada judicialmente → reintegração."
    ],
    "questions": [
     {
      "id": "cf41a",
      "text": "A estabilidade do servidor concursado exige, entre outros requisitos:",
      "options": [
       "Um ano de inscrição.",
       "Três anos de efetivo exercício.",
       "Dois anos após homologação.",
       "Apenas aprovação no concurso."
      ],
      "answer": 1,
      "explain": "O prazo constitucional é contado do efetivo exercício, com avaliação especial.",
      "tag": "estabilidade",
      "wrongHint": "Compare a situação com o dispositivo indicado e observe a diferença entre os conceitos."
     },
     {
      "id": "cf41b",
      "text": "É correto afirmar que o servidor estável:",
      "options": [
       "Jamais perde o cargo.",
       "Só perde o cargo por vontade própria.",
       "Pode perder o cargo mediante processo administrativo com ampla defesa.",
       "Não responde a processos administrativos."
      ],
      "answer": 2,
      "explain": "A estabilidade admite as hipóteses constitucionais de perda do cargo.",
      "tag": "perda do cargo",
      "wrongHint": "Compare a situação com o dispositivo indicado e observe a diferença entre os conceitos."
     },
     {
      "id": "cf41c",
      "text": "Demissão de servidor estável invalidada por sentença judicial gera:",
      "options": [
       "Reintegração.",
       "Nomeação inicial.",
       "Aposentadoria obrigatória.",
       "Exoneração."
      ],
      "answer": 0,
      "explain": "O art. 41, § 2º, prevê a reintegração.",
      "tag": "reintegração",
      "wrongHint": "Compare a situação com o dispositivo indicado e observe a diferença entre os conceitos."
     }
    ]
   }
  ]
 },
 {
  "id": "ldb",
  "title": "Educação superior na LDB",
  "subject": "Específicos 324",
  "role": "324",
  "subtitle": "Finalidades e organização da educação superior",
  "sourceUrl": "https://www.planalto.gov.br/ccivil_03/leis/l9394compilado.htm",
  "sections": [
   {
    "id": "finalidades",
    "title": "1. Finalidades da educação superior",
    "readTime": 13,
    "quote": "“estimular a criação cultural e o desenvolvimento do espírito científico e do pensamento reflexivo”",
    "quoteFrom": "Lei nº 9.394/1996, art. 43, inciso I — trecho literal",
    "content": [
     "O art. 43 da Lei de Diretrizes e Bases (LDB) apresenta finalidades da educação superior. Entre elas estão formação cultural e científica, pesquisa, divulgação do conhecimento e relacionamento com a sociedade.",
     "Para estudar a LDB, separe as finalidades institucionais dos procedimentos administrativos específicos. A lei federal fornece diretrizes gerais, enquanto regulamentos da UFMS tratam de rotinas acadêmicas próprias.",
     "Ao revisar esse tema, construa um quadro com “finalidades”, “modalidades de curso” e “autonomia universitária” e consulte os artigos correspondentes da versão oficial."
    ],
    "notebook": [
     "Art. 43: finalidades da educação superior.",
     "Educação superior envolve ensino, pesquisa, formação cultural e relacionamento com a sociedade.",
     "LDB traz regras gerais; normas UFMS detalham procedimentos próprios."
    ],
    "questions": [
     {
      "id": "ldb1",
      "text": "Segundo o art. 43 da LDB, é uma finalidade da educação superior:",
      "options": [
       "Estimular o pensamento reflexivo.",
       "Proibir pesquisa nas universidades.",
       "Limitar a criação cultural.",
       "Dispensar a difusão do conhecimento."
      ],
      "answer": 0,
      "explain": "O inciso I do art. 43 trata da criação cultural, do espírito científico e do pensamento reflexivo.",
      "tag": "finalidades da educação superior",
      "wrongHint": "Releia a diferença entre os conceitos cobrados antes de tentar novamente."
     },
     {
      "id": "ldb2",
      "text": "Qual documento estabelece diretrizes gerais da educação nacional?",
      "options": [
       "Somente o regulamento de matrícula da UFMS.",
       "A Lei de Diretrizes e Bases (Lei nº 9.394/1996).",
       "Somente o calendário acadêmico de cada universidade.",
       "O manual de identidade visual da instituição."
      ],
      "answer": 1,
      "explain": "A Lei nº 9.394/1996 estabelece as diretrizes e bases da educação nacional.",
      "tag": "hierarquia e função das normas",
      "wrongHint": "Releia a diferença entre os conceitos cobrados antes de tentar novamente."
     },
     {
      "id": "ldb3",
      "text": "Para conferir prazos e procedimentos específicos de matrícula da UFMS, a fonte mais adequada é:",
      "options": [
       "Uma opinião em rede social.",
       "Um resumo sem referência.",
       "A norma institucional vigente aplicável ao procedimento.",
       "Uma notícia antiga sem atualizações."
      ],
      "answer": 2,
      "explain": "Os procedimentos e prazos internos precisam ser confirmados na norma institucional vigente correspondente.",
      "tag": "normas internas UFMS",
      "wrongHint": "Releia a diferença entre os conceitos cobrados antes de tentar novamente."
     }
    ]
   },
   {
    "id": "autonomia",
    "title": "2. Regras gerais e normas internas",
    "readTime": 13,
    "content": [
     "Universidades possuem atribuições acadêmicas e administrativas definidas em lei. Para provas de assuntos estudantis, é importante distinguir o texto da LDB das normas específicas de graduação, pós-graduação e matrícula.",
     "O cronograma inclui a Resolução nº 430-Cograd/UFMS, a Instrução Normativa nº 88-Prograd/UFMS e a Resolução nº 1.035-Copp/UFMS. Para estudar artigos, prazos e exceções desses documentos, anexe as versões oficiais no módulo Biblioteca.",
     "Quando houver diferença aparente entre um resumo e a norma original, a leitura da norma atualizada é indispensável. O aplicativo pode organizar o documento e preparar material de revisão, mas não deve inventar redações ou prazos."
    ],
    "notebook": [
     "Separar diretriz federal de procedimento institucional.",
     "Conferir data, órgão emissor e versão vigente das normas.",
     "Registrar os artigos mais cobrados com referência exata."
    ],
    "questions": [
     {
      "id": "ldbi1",
      "text": "Uma instrução normativa específica da UFMS deve ser estudada principalmente para identificar:",
      "options": [
       "Procedimentos internos que ela regulamenta.",
       "A constituição de outro país.",
       "Fórmulas de probabilidade.",
       "A teoria das cores."
      ],
      "answer": 0,
      "explain": "Instruções normativas detalham procedimentos administrativos ou acadêmicos no âmbito de sua competência.",
      "tag": "função das normas",
      "wrongHint": "Releia a diferença entre os conceitos cobrados antes de tentar novamente."
     },
     {
      "id": "ldbi2",
      "text": "Se um resumo apresenta prazo diferente do texto oficial vigente, o que fazer?",
      "options": [
       "Decorar o resumo por ser mais curto.",
       "Conferir e priorizar a norma oficial aplicável.",
       "Escolher o prazo maior.",
       "Ignorar os dois documentos."
      ],
      "answer": 1,
      "explain": "Prazos devem ser confirmados na norma oficial vigente e em eventuais alterações.",
      "tag": "conferência de fonte",
      "wrongHint": "Releia a diferença entre os conceitos cobrados antes de tentar novamente."
     },
     {
      "id": "ldbi3",
      "text": "Qual prática ajuda a estudar normas institucionais sem confundir redação e explicação?",
      "options": [
       "Misturar opinião e artigo num único parágrafo.",
       "Anotar só o título da resolução.",
       "Separar citação literal, fonte e comentário explicativo.",
       "Excluir número e ano da norma."
      ],
      "answer": 2,
      "explain": "Separar fonte literal e explicação permite conferir facilmente o conteúdo normativo.",
      "tag": "leitura legislativa",
      "wrongHint": "Releia a diferença entre os conceitos cobrados antes de tentar novamente."
     }
    ]
   }
  ]
 },
 {
  "id": "cores",
  "title": "Cores e produção visual",
  "subject": "Específicos 510",
  "role": "510",
  "subtitle": "RGB, CMYK e aplicações",
  "sections": [
   {
    "id": "modelos",
    "title": "1. RGB e CMYK",
    "readTime": 13,
    "content": [
     "RGB é um modelo aditivo de cor baseado em luz: vermelho, verde e azul. É usado em telas e dispositivos digitais. A combinação de intensidades máximas das três cores produz luz branca.",
     "CMYK é um modelo subtrativo de quatro tintas: ciano, magenta, amarelo e preto (key). É usado na produção gráfica impressa. As cores visualizadas em um monitor podem mudar na impressão por diferenças entre os processos.",
     "Pantone é um sistema de referência e padronização de cores. Em projetos institucionais, o manual de identidade visual pode indicar combinações específicas para impressão e meios digitais."
    ],
    "notebook": [
     "RGB = luz / telas / síntese aditiva.",
     "CMYK = tintas / impressão / síntese subtrativa.",
     "Pantone = referência padronizada de cores."
    ],
    "questions": [
     {
      "id": "cor1",
      "text": "Qual modelo de cor é mais diretamente associado à exibição em telas?",
      "options": [
       "CMYK.",
       "RGB.",
       "Pantone Solid Coated.",
       "Escala de cinza impressa."
      ],
      "answer": 1,
      "explain": "RGB representa a combinação aditiva de luz usada em monitores e dispositivos digitais.",
      "tag": "RGB e CMYK",
      "wrongHint": "Releia a diferença entre os conceitos cobrados antes de tentar novamente."
     },
     {
      "id": "cor2",
      "text": "No modelo CMYK, a letra K refere-se a:",
      "options": [
       "Key (preto).",
       "Kelvin.",
       "Kinetic.",
       "Kroma."
      ],
      "answer": 0,
      "explain": "A letra K designa a tinta preta (key), importante para contraste e detalhes na impressão.",
      "tag": "componentes do CMYK",
      "wrongHint": "Releia a diferença entre os conceitos cobrados antes de tentar novamente."
     },
     {
      "id": "cor3",
      "text": "Qual afirmação explica por que uma cor pode mudar da tela para o papel?",
      "options": [
       "RGB e CMYK representam processos de cor diferentes.",
       "Telas e impressoras usam exatamente as mesmas tintas.",
       "Cores digitais não utilizam luz.",
       "Todo arquivo impresso é monocromático."
      ],
      "answer": 0,
      "explain": "Telas emitem luz (RGB), enquanto a impressão utiliza tintas (CMYK), com limitações de reprodução diferentes.",
      "tag": "conversão de cores",
      "wrongHint": "Releia a diferença entre os conceitos cobrados antes de tentar novamente."
     }
    ]
   },
   {
    "id": "hierarquia",
    "title": "2. Hierarquia e legibilidade",
    "readTime": 12,
    "content": [
     "Hierarquia visual orienta a ordem de leitura por meio de tamanho, contraste, posição, peso tipográfico e espaçamento. Um título deve chamar atenção antes dos detalhes de apoio quando essa for a intenção comunicativa.",
     "Legibilidade envolve a facilidade de identificar caracteres e palavras. Leiturabilidade diz respeito à facilidade de percorrer e compreender blocos maiores de texto. Tamanho, entrelinha, largura da coluna e contraste influenciam a experiência.",
     "Uma peça institucional deve buscar consistência gráfica, acessibilidade e distinção clara entre informação principal e secundária."
    ],
    "notebook": [
     "Hierarquia: organiza a prioridade visual de leitura.",
     "Legibilidade: reconhecimento das letras e palavras.",
     "Entrelinha, contraste e largura da coluna ajudam no conforto da leitura."
    ],
    "questions": [
     {
      "id": "hier1",
      "text": "Qual recurso costuma criar hierarquia visual clara em um cartaz?",
      "options": [
       "Todos os textos com mesmo tamanho e peso.",
       "Ausência total de contraste.",
       "Variação planejada de tamanho e peso tipográfico.",
       "Distribuição aleatória de informações."
      ],
      "answer": 2,
      "explain": "Tamanho e peso tipográfico permitem diferenciar títulos, subtítulos e corpo de texto.",
      "tag": "hierarquia visual",
      "wrongHint": "Releia a diferença entre os conceitos cobrados antes de tentar novamente."
     },
     {
      "id": "hier2",
      "text": "Para melhorar a leitura de um texto longo, qual medida costuma ajudar?",
      "options": [
       "Usar contraste adequado e entrelinha confortável.",
       "Eliminar espaçamento entre todas as linhas.",
       "Misturar muitas fontes sem critério.",
       "Reduzir o corpo a tamanho ilegível."
      ],
      "answer": 0,
      "explain": "Contraste e entrelinha adequados facilitam a leitura contínua.",
      "tag": "legibilidade",
      "wrongHint": "Releia a diferença entre os conceitos cobrados antes de tentar novamente."
     },
     {
      "id": "hier3",
      "text": "Em um material institucional, uma identidade visual consistente contribui para:",
      "options": [
       "Confundir a origem das peças.",
       "Manter reconhecimento e unidade entre materiais.",
       "Eliminar a necessidade de revisar conteúdo.",
       "Substituir informações por imagens sem texto."
      ],
      "answer": 1,
      "explain": "A consistência gráfica reforça identificação e organização das peças institucionais.",
      "tag": "identidade visual",
      "wrongHint": "Releia a diferença entre os conceitos cobrados antes de tentar novamente."
     }
    ]
   }
  ]
 },
 {
  "id": "ingles",
  "title": "Leitura em inglês",
  "subject": "Inglês",
  "role": "Comum",
  "subtitle": "Estratégias para interpretação de textos",
  "sections": [
   {
    "id": "reading",
    "title": "1. Skimming e scanning",
    "readTime": 10,
    "content": [
     "Skimming é uma leitura rápida para identificar o assunto central e a organização geral do texto. Você observa títulos, subtítulos, palavras recorrentes e ideias principais.",
     "Scanning é uma busca por dados específicos, como nomes, números, datas ou palavras-chave. Você não precisa compreender cada palavra do texto para localizar uma informação solicitada.",
     "Em exercícios de prova, leia primeiro o enunciado para decidir se deve buscar um dado específico ou compreender a ideia geral."
    ],
    "notebook": [
     "Skimming = visão geral e tema central.",
     "Scanning = localizar informação específica.",
     "Enunciado da questão orienta a estratégia de leitura."
    ],
    "questions": [
     {
      "id": "en1",
      "text": "Qual estratégia é mais indicada para localizar uma data em um texto extenso?",
      "options": [
       "Skimming.",
       "Scanning.",
       "Tradução integral de cada frase.",
       "Memorização de todas as palavras."
      ],
      "answer": 1,
      "explain": "Scanning permite procurar informações pontuais sem ler cada linha detalhadamente.",
      "tag": "scanning",
      "wrongHint": "Releia a diferença entre os conceitos cobrados antes de tentar novamente."
     },
     {
      "id": "en2",
      "text": "Qual é o objetivo principal do skimming?",
      "options": [
       "Identificar o tema geral do texto.",
       "Encontrar apenas a terceira data citada.",
       "Traduzir palavra por palavra.",
       "Contar os parágrafos sem lê-los."
      ],
      "answer": 0,
      "explain": "Skimming busca captar a ideia geral e a organização do texto.",
      "tag": "skimming",
      "wrongHint": "Releia a diferença entre os conceitos cobrados antes de tentar novamente."
     },
     {
      "id": "en3",
      "text": "Se a questão pede o assunto principal de uma notícia, o primeiro passo útil é:",
      "options": [
       "Ignorar o título.",
       "Procurar apenas os números.",
       "Ler título, início e ideias principais.",
       "Selecionar a primeira alternativa sem ler."
      ],
      "answer": 2,
      "explain": "Título e ideias centrais costumam revelar o tema e a organização do texto.",
      "tag": "estratégias de leitura",
      "wrongHint": "Releia a diferença entre os conceitos cobrados antes de tentar novamente."
     }
    ]
   }
  ]
 }
];
