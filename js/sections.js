document.getElementById('historico').innerHTML = `
  <p class="section-title">Histórico da proteção de dados</p>
  <div class="card-grid">
    <div class="info-card accent"><div class="orange-num">137</div><div class="card-value">países com lei de privacidade</div><div class="card-detail">em 2021, segundo a UNCTAD</div></div>
    <div class="info-card"><div class="card-label">vigência plena no Brasil</div><div class="orange-num">2021</div><div class="card-detail">aprovada em 2018 (Lei 13.709)</div></div>
  </div>
  <div class="info-card full" style="margin-bottom:12px;"><div class="card-label">objetivo da lei — art. 1º</div><div class="card-value">Proteger a liberdade, privacidade e personalidade da pessoa natural</div></div>
  <p class="section-title" style="margin-top:1.2rem;">Linha do tempo</p>
  <div style="background:var(--color-background-primary);border:0.5px solid var(--color-border-tertiary);border-radius:var(--border-radius-lg);padding:0.5rem 1rem;">
    <div class="timeline-item"><span class="tl-year">1890</span><span class="tl-flag">🇺🇸</span><div><div class="tl-text">Right to Privacy</div><div class="tl-sub">Primeira doutrina jurídica sobre privacidade</div></div></div>
    <div class="timeline-item"><span class="tl-year">1948</span><span class="tl-flag">🌎</span><div><div class="tl-text">Declaração Universal dos Direitos Humanos</div><div class="tl-sub">Privacidade como direito fundamental</div></div></div>
    <div class="timeline-item"><span class="tl-year">1970</span><span class="tl-flag">🇩🇪</span><div><div class="tl-text">Lei de Hesse</div><div class="tl-sub">Primeira lei de proteção de dados do mundo</div></div></div>
    <div class="timeline-item"><span class="tl-year">1974</span><span class="tl-flag">🇺🇸</span><div><div class="tl-text">Privacy Act</div><div class="tl-sub">EUA regulamenta dados em arquivos federais</div></div></div>
    <div class="timeline-item"><span class="tl-year">1988</span><span class="tl-flag">🇧🇷</span><div><div class="tl-text">Constituição Federal</div><div class="tl-sub">Art. 5º, X: intimidade e vida privada invioláveis</div></div></div>
    <div class="timeline-item"><span class="tl-year">1995</span><span class="tl-flag">🇪🇺</span><div><div class="tl-text">Diretiva 95/46/CE</div><div class="tl-sub">União Europeia regula tratamento de dados</div></div></div>
    <div class="timeline-item"><span class="tl-year">2014</span><span class="tl-flag">🇧🇷</span><div><div class="tl-text">Marco Civil da Internet</div><div class="tl-sub">Proteção de dados como princípio (art. 3º)</div></div></div>
    <div class="timeline-item"><span class="tl-year">2016</span><span class="tl-flag">🇪🇺</span><div><div class="tl-text">GDPR</div><div class="tl-sub">Regulamento europeu — referência global para a LGPD</div></div></div>
    <div class="timeline-item" style="border-bottom:none;"><span class="tl-year">2018</span><span class="tl-flag">🇧🇷</span><div><div class="tl-text">LGPD aprovada</div><div class="tl-sub">Vigência plena a partir de agosto de 2021</div></div></div>
  </div>
`;

document.getElementById('conceitos').innerHTML = `
  <p class="section-title">Conceitos fundamentais — art. 5º</p>
  <div class="info-card full accent" style="margin-bottom:12px;"><div class="card-label">dado pessoal</div><div class="card-value">Qualquer informação relacionada a pessoa natural identificada ou identificável</div><div class="card-detail">Exemplos: nome, CPF, e-mail, endereço, profissão, idade</div></div>
  <div class="info-card full" style="margin-bottom:12px;border-left:3px solid #DC3C3C;"><div class="card-label">dado pessoal sensível</div><div class="card-value">Dados com potencial discriminatório</div><div class="card-detail">Inclui: origem racial, convicção religiosa, opinião política, filiação sindical, dados de saúde, dados biométricos, dados de crianças e adolescentes</div></div>
  <div class="card-grid">
    <div class="info-card"><div class="card-label">titular de dados</div><div class="card-value">Pessoa natural a quem se referem os dados pessoais</div></div>
    <div class="info-card"><div class="card-label">tratamento de dados</div><div class="card-value">Toda operação realizada com dados pessoais</div><div class="card-detail">Coleta, acesso, classificação, exclusão e outros</div></div>
  </div>
  <p class="section-title" style="margin-top:1.4rem;">Aplicação da lei — art. 3º</p>
  <div class="highlight-box">A LGPD aplica-se a qualquer operação de tratamento realizada por <strong>pessoa física ou jurídica</strong>, por <strong>meio digital ou físico</strong>, <strong>independente do país da sede</strong> ou localização dos dados, desde que o tratamento ocorra no território nacional ou envolva indivíduos localizados no Brasil.</div>
  <div class="info-card full" style="border-left:3px solid #DC3C3C;margin-bottom:1rem;"><div class="card-label">a lei não se aplica a:</div><div class="card-detail" style="font-size:0.83rem;line-height:1.7;">• Pessoas físicas para fins particulares e não econômicos<br>• Fins exclusivamente jornalísticos ou artísticos<br>• Fins acadêmicos (com exceção dos arts. 7º a 11)<br>• Segurança pública / esfera penal</div></div>
  <p class="section-title">ANPD — Autoridade Nacional de Proteção de Dados</p>
  <div class="info-card full accent"><div class="card-label">função — art. 55-J</div><div class="card-value">Zelar, regulamentar e fiscalizar o cumprimento da LGPD no Brasil</div><div class="card-detail" style="margin-top:8px;">Acesso: <span style="color:#FF781E;">www.gov.br/anpd/pt-br</span></div></div>
`;

document.getElementById('principios').innerHTML = `
  <p class="section-title">Princípios da LGPD — art. 6º</p>
  <p style="font-size:0.82rem;color:var(--color-text-secondary);margin-bottom:1rem;">Clique em um princípio para ver detalhes</p>
  <div class="principle-grid">
    <div class="principle-card" onclick="togglePrinciple(this,'fin')"><div class="principle-icon">F</div><div class="principle-name">Finalidade</div></div>
    <div class="principle-card" onclick="togglePrinciple(this,'nec')"><div class="principle-icon">N</div><div class="principle-name">Necessidade</div></div>
    <div class="principle-card" onclick="togglePrinciple(this,'adeq')"><div class="principle-icon">A</div><div class="principle-name">Adequação</div></div>
    <div class="principle-card" onclick="togglePrinciple(this,'tra')"><div class="principle-icon">T</div><div class="principle-name">Transparência</div></div>
    <div class="principle-card" onclick="togglePrinciple(this,'seg')"><div class="principle-icon">S</div><div class="principle-name">Segurança</div></div>
    <div class="principle-card" onclick="togglePrinciple(this,'prev')"><div class="principle-icon">P</div><div class="principle-name">Prevenção</div></div>
    <div class="principle-card" onclick="togglePrinciple(this,'qual')"><div class="principle-icon">Q</div><div class="principle-name">Qualidade</div></div>
    <div class="principle-card" onclick="togglePrinciple(this,'resp')"><div class="principle-icon">R</div><div class="principle-name">Responsabilização</div></div>
  </div>
  <div id="detail-fin" class="principle-detail"><strong style="color:var(--color-text-primary);">Finalidade</strong> — tratamento para propósitos legítimos, específicos, explícitos e informados ao titular; sem possibilidade de tratamento posterior incompatível.</div>
  <div id="detail-nec" class="principle-detail"><strong style="color:var(--color-text-primary);">Necessidade</strong> — limitação do tratamento ao mínimo necessário para a realização das finalidades, com abrangência dos dados pertinentes e não excessivos.</div>
  <div id="detail-adeq" class="principle-detail"><strong style="color:var(--color-text-primary);">Adequação</strong> — compatibilidade do tratamento com as finalidades informadas ao titular, de acordo com o contexto do tratamento.</div>
  <div id="detail-tra" class="principle-detail"><strong style="color:var(--color-text-primary);">Transparência</strong> — garantia de informações claras, precisas e facilmente acessíveis sobre o tratamento, observado o segredo comercial do agente.</div>
  <div id="detail-seg" class="principle-detail"><strong style="color:var(--color-text-primary);">Segurança</strong> — medidas técnicas e administrativas para proteger os dados de acessos não autorizados e situações acidentais ou ilícitas. Envolve <strong style="color:#FF781E;">C</strong>onfidencialidade, <strong style="color:#FF781E;">I</strong>ntegridade e <strong style="color:#FF781E;">D</strong>isponibilidade (tríade CID).</div>
  <div id="detail-prev" class="principle-detail"><strong style="color:var(--color-text-primary);">Prevenção</strong> — adoção de medidas para prevenir a ocorrência de danos em virtude do tratamento de dados pessoais.</div>
  <div id="detail-qual" class="principle-detail"><strong style="color:var(--color-text-primary);">Qualidade dos dados</strong> — garantia de exatidão, clareza, relevância e atualização dos dados, conforme a necessidade e o cumprimento da finalidade.</div>
  <div id="detail-resp" class="principle-detail"><strong style="color:var(--color-text-primary);">Responsabilização e prestação de contas</strong> — demonstração pelo agente da adoção de medidas eficazes e capazes de comprovar o cumprimento das normas.</div>
`;

document.getElementById('bases').innerHTML = `
  <p class="section-title">Bases legais — arts. 7º e 11</p>
  <div class="highlight-box">O tratamento de dados <strong>só pode ser realizado</strong> quando enquadrado em uma das hipóteses legais previstas na LGPD. Dados sensíveis possuem bases mais restritas.</div>
  <div class="bases-table">
    <div class="bt-row bt-header"><div>base legal</div><div style="text-align:center;">gerais</div><div style="text-align:center;">sensíveis</div></div>
    <div class="bt-row"><div class="bt-base">Consentimento do titular</div><div><div class="check-yes">✓</div></div><div><div class="check-yes">✓</div></div></div>
    <div class="bt-row"><div class="bt-base">Obrigação legal ou regulatória</div><div><div class="check-yes">✓</div></div><div><div class="check-yes">✓</div></div></div>
    <div class="bt-row"><div class="bt-base">Execução de políticas públicas</div><div><div class="check-yes">✓</div></div><div><div class="check-yes">✓</div></div></div>
    <div class="bt-row"><div class="bt-base">Estudos por órgãos de pesquisa</div><div><div class="check-yes">✓</div></div><div><div class="check-yes">✓</div></div></div>
    <div class="bt-row"><div class="bt-base">Execução de contrato</div><div><div class="check-yes">✓</div></div><div><div class="check-no">✗</div></div></div>
    <div class="bt-row"><div class="bt-base">Exercício regular de direitos</div><div><div class="check-yes">✓</div></div><div><div class="check-yes">✓</div></div></div>
    <div class="bt-row"><div class="bt-base">Proteção da vida</div><div><div class="check-yes">✓</div></div><div><div class="check-yes">✓</div></div></div>
    <div class="bt-row"><div class="bt-base">Tutela da saúde</div><div><div class="check-yes">✓</div></div><div><div class="check-yes">✓</div></div></div>
    <div class="bt-row"><div class="bt-base">Interesse legítimo</div><div><div class="check-yes">✓</div></div><div><div class="check-no">✗</div></div></div>
    <div class="bt-row"><div class="bt-base">Proteção do crédito</div><div><div class="check-yes">✓</div></div><div><div class="check-no">✗</div></div></div>
    <div class="bt-row"><div class="bt-base">Prevenção a fraude / segurança</div><div><div class="check-no">✗</div></div><div><div class="check-yes">✓</div></div></div>
  </div>
`;

document.getElementById('agentes').innerHTML = `
  <p class="section-title">Agentes de tratamento — art. 5º</p>
  <div class="agent-cards">
    <div class="agent-card" style="border-left:3px solid #FF781E;"><div class="agent-role">Controlador</div><div class="agent-name">Decide</div><ul class="agent-traits"><li>Define finalidade e meios do tratamento</li><li>Fornece instruções ao operador</li><li>Atua em nome próprio</li><li>Responde perante titulares e ANPD</li></ul></div>
    <div class="agent-card"><div class="agent-role">Operador</div><div class="agent-name">Executa</div><ul class="agent-traits"><li>Realiza tratamento em nome do controlador</li><li>Segue instruções do controlador</li><li>Sem poder de decisão próprio</li><li>Pode ser pessoa física ou jurídica</li></ul></div>
    <div class="agent-card" style="grid-column:1/-1;"><div class="agent-role">Co-controlador</div><div class="agent-name">Compartilha a decisão</div><ul class="agent-traits" style="flex-direction:row;flex-wrap:wrap;gap:8px;"><li style="min-width:45%;">Mais de um controlador com poder de decisão</li><li style="min-width:45%;">Objetivo em comum sobre o mesmo tratamento</li></ul></div>
  </div>
  <p class="section-title" style="margin-top:1.2rem;">Exemplo de cadeia</p>
  <div class="flow-wrap"><div class="flow-node">Loja (controlador)</div><div class="flow-arrow">→</div><div class="flow-node">CRM SaaS (operador)</div><div class="flow-arrow">→</div><div class="flow-node">Servidor (suboperador)</div></div>
  <p class="section-title" style="margin-top:1.2rem;">Responsabilidades do controlador</p>
  <div class="sanctions-list">
    <div class="sanction-item"><div class="sanction-dot"></div>Comprovar o consentimento do titular</div>
    <div class="sanction-item"><div class="sanction-dot"></div>Comunicar incidentes à ANPD</div>
    <div class="sanction-item"><div class="sanction-dot"></div>Atender titulares de dados</div>
    <div class="sanction-item"><div class="sanction-dot"></div>Nomear Encarregado (DPO) — obrigatório exceto pequeno porte</div>
    <div class="sanction-item"><div class="sanction-dot"></div>Manter registro das operações de tratamento (ROPA)</div>
    <div class="sanction-item"><div class="sanction-dot"></div>Reparar danos aos titulares</div>
  </div>
`;

document.getElementById('direitos').innerHTML = `
  <p class="section-title">Direitos dos titulares — arts. 17 a 22</p>
  <div class="highlight-box"><strong>Art. 17:</strong> Toda pessoa natural tem assegurada a titularidade de seus dados pessoais e os direitos fundamentais de liberdade, de intimidade e de privacidade. O titular <strong>não transfere</strong> a propriedade de seus dados ao permitir seu tratamento.</div>
  <p style="font-size:0.82rem;color:var(--color-text-secondary);margin-bottom:0.8rem;">Direitos do art. 18 — exercidos gratuitamente, a qualquer momento, mediante requisição ao controlador (prazo: 15 dias)</p>
  <div class="right-card"><div class="right-num">I</div><div class="right-body"><div class="right-title">Confirmação de existência</div><div class="right-desc">Saber se seus dados são tratados pelo controlador</div></div></div>
  <div class="right-card"><div class="right-num">II</div><div class="right-body"><div class="right-title">Acesso aos dados</div><div class="right-desc">Obter cópia completa em formato eletrônico ou impresso, incluindo origem, critérios e finalidade do tratamento</div></div></div>
  <div class="right-card"><div class="right-num">III</div><div class="right-body"><div class="right-title">Correção</div><div class="right-desc">Solicitar correção de dados incompletos, inexatos ou desatualizados</div></div></div>
  <div class="right-card"><div class="right-num">IV</div><div class="right-body"><div class="right-title">Anonimização, bloqueio ou eliminação</div><div class="right-desc">Quando dados forem desnecessários, excessivos ou tratados em desconformidade com a LGPD</div></div></div>
  <div class="right-card"><div class="right-num">V</div><div class="right-body"><div class="right-title">Portabilidade</div><div class="right-desc">Transferir seus dados a outro fornecedor de serviço (regulamentação da ANPD define o formato)</div></div></div>
  <div class="right-card"><div class="right-num">VI</div><div class="right-body"><div class="right-title">Eliminação após revogação</div><div class="right-desc">Quando o consentimento é retirado, os dados coletados com base nele devem ser eliminados</div></div></div>
  <div class="right-card"><div class="right-num">VII</div><div class="right-body"><div class="right-title">Informação sobre compartilhamento</div><div class="right-desc">Saber com quais entidades públicas e privadas o controlador compartilhou seus dados</div></div></div>
  <div class="right-card"><div class="right-num">VIII</div><div class="right-body"><div class="right-title">Informação sobre não consentimento</div><div class="right-desc">Ser informado sobre a possibilidade de não fornecer consentimento e quais são as consequências</div></div></div>
  <div class="right-card"><div class="right-num">IX</div><div class="right-body"><div class="right-title">Revogação do consentimento</div><div class="right-desc">Retirar o consentimento a qualquer momento, de forma gratuita e facilitada</div></div></div>
  <div class="right-card" style="margin-bottom:1rem;"><div class="right-num">X</div><div class="right-body"><div class="right-title">Peticionar à ANPD</div><div class="right-desc">Apresentar reclamação diretamente à ANPD contra o controlador em caso de descumprimento</div></div></div>
  <p class="section-title">Direitos especiais</p>
  <div class="info-card full" style="margin-bottom:10px;">
    <div class="card-label">art. 20 — revisão de decisões automatizadas</div>
    <div class="card-value">Solicitar revisão de decisões tomadas com base em tratamento automatizado (profiling)</div>
    <div class="card-detail">Inclui decisões que afetam perfil pessoal, profissional, de consumo, de crédito ou aspectos da personalidade</div>
  </div>
  <div class="info-card full" style="margin-bottom:10px;">
    <div class="card-label">art. 21 — proteção no exercício de direitos</div>
    <div class="card-value">Dados usados para o exercício regular de direitos não podem ser utilizados em prejuízo do titular</div>
  </div>
  <div class="info-card full accent">
    <div class="card-label">art. 22 — tutela coletiva</div>
    <div class="card-value">A defesa dos direitos dos titulares pode ser exercida em juízo de forma individual ou coletiva</div>
    <div class="card-detail">Por meio de Defensoria Pública, Ministério Público, Procon, IDEC ou diretamente pelo Judiciário</div>
  </div>
`;

document.getElementById('dpo').innerHTML = `
  <p class="section-title">Encarregado (DPO) — art. 41</p>
  <div class="highlight-box"><strong>Definição — art. 5º, VIII:</strong> Pessoa indicada pelo controlador e operador para atuar como <strong>canal de comunicação</strong> entre o controlador, os titulares dos dados e a ANPD.</div>
  <div style="background:var(--color-background-primary);border:0.5px solid var(--color-border-tertiary);border-radius:var(--border-radius-lg);padding:1rem;margin-bottom:1rem;">
    <p style="font-size:0.78rem;color:var(--color-text-secondary);margin-bottom:0.8rem;font-family:'Space Mono',monospace;letter-spacing:0.04em;">POSIÇÃO DO ENCARREGADO</p>
    <div style="display:grid;grid-template-columns:1fr auto 1fr auto 1fr;align-items:center;gap:8px;">
      <div class="dpo-node"><div class="dpo-icon">🏢</div><div class="dpo-lbl">Controlador</div></div>
      <div class="dpo-arrow">⇄</div>
      <div class="dpo-node dpo-center"><div style="font-size:18px;margin-bottom:6px;color:#FF781E;">⚖</div><div class="dpo-lbl">Encarregado<br>DPO</div></div>
      <div class="dpo-arrow">⇄</div>
      <div class="dpo-node"><div class="dpo-icon">👥</div><div class="dpo-lbl">Titulares / ANPD</div></div>
    </div>
  </div>
  <p class="section-title">Atribuições legais — art. 41, §2º</p>
  <div class="sanctions-list">
    <div class="sanction-item"><div class="sanction-dot"></div>Aceitar reclamações e comunicações dos titulares, prestar esclarecimentos e adotar providências</div>
    <div class="sanction-item"><div class="sanction-dot"></div>Receber comunicações da ANPD e adotar as providências necessárias</div>
    <div class="sanction-item"><div class="sanction-dot"></div>Orientar funcionários e contratados sobre práticas de proteção de dados</div>
    <div class="sanction-item"><div class="sanction-dot"></div>Executar demais atribuições determinadas pelo controlador ou por normas complementares</div>
    <div class="sanction-item"><div class="sanction-dot"></div>Auxiliar na análise de contratos e cláusulas relacionadas à proteção de dados (Guia ANPD)</div>
    <div class="sanction-item"><div class="sanction-dot"></div>Apoiar na comunicação de incidentes de segurança à ANPD</div>
  </div>
  <p class="section-title">Características do cargo</p>
  <div class="card-grid">
    <div class="info-card"><div class="card-label">quem pode ser</div><div class="card-value">Pessoa física ou jurídica</div><div class="card-detail">Interno ou externo (DPO as a Service). Sem pré-requisitos legais, mas exige conhecimento especializado em proteção de dados</div></div>
    <div class="info-card"><div class="card-label">divulgação obrigatória</div><div class="card-value">Identidade e contato públicos</div><div class="card-detail">Preferencialmente no site do controlador, de forma clara e acessível</div></div>
    <div class="info-card"><div class="card-label">responsabilidade</div><div class="card-value">Não é o responsável legal pelo tratamento</div><div class="card-detail">A responsabilidade é do controlador e do operador. O DPO orienta e intermedia</div></div>
    <div class="info-card"><div class="card-label">conflito de interesses</div><div class="card-value">Deve ser evitado</div><div class="card-detail">Não indicar quem decide sobre dados (CEO, CFO, head de TI, RH) para evitar supervisão de si mesmo</div></div>
  </div>
  <p class="section-title">Obrigatoriedade — Res. CD/ANPD nº 2/2022</p>
  <div class="bases-table">
    <div class="bt-row bt-header"><div>tipo de organização</div><div style="text-align:center;font-size:9px;">obrig.</div><div style="text-align:center;font-size:9px;">canal</div></div>
    <div class="bt-row"><div class="bt-base">Grandes e médias empresas</div><div><div class="check-yes">✓</div></div><div><div class="check-yes">✓</div></div></div>
    <div class="bt-row"><div class="bt-base">Microempresas e EPP</div><div><div class="check-no">✗</div></div><div><div class="check-yes">✓</div></div></div>
    <div class="bt-row"><div class="bt-base">Startups</div><div><div class="check-no">✗</div></div><div><div class="check-yes">✓</div></div></div>
    <div class="bt-row"><div class="bt-base">Entidades sem fins lucrativos</div><div><div class="check-no">✗</div></div><div><div class="check-yes">✓</div></div></div>
  </div>
  <div class="highlight-box" style="margin-top:0;">Mesmo dispensadas, a indicação do encarregado é considerada <strong>boa prática</strong> e pode reduzir sanções. Em qualquer caso, o controlador deve manter um <strong>canal de comunicação</strong> com os titulares.</div>
`;

document.getElementById('sancoes').innerHTML = `
  <p class="section-title">Sanções administrativas — art. 52</p>
  <div class="fine-card"><div class="fine-amount">R$ 50.000.000</div><div class="fine-label">multa máxima por infração</div></div>
  <div class="sanctions-list">
    <div class="sanction-item"><div class="sanction-dot"></div>Advertência com prazo para correção</div>
    <div class="sanction-item"><div class="sanction-dot"></div>Multa simples de até 2% do faturamento</div>
    <div class="sanction-item"><div class="sanction-dot"></div>Multa diária</div>
    <div class="sanction-item"><div class="sanction-dot"></div>Publicização da infração</div>
    <div class="sanction-item"><div class="sanction-dot"></div>Bloqueio dos dados pessoais</div>
    <div class="sanction-item"><div class="sanction-dot"></div>Eliminação dos dados pessoais</div>
    <div class="sanction-item"><div class="sanction-dot"></div>Proibição parcial ou total de atividades</div>
  </div>
  <p class="section-title" style="margin-top:1.2rem;">Fluxo do processo sancionador</p>
  <div class="incident-flow">
    <div class="if-step"><div class="if-num">1</div><div class="if-content"><div class="if-title">Origem do processo</div><div class="if-desc">Pela própria ANPD, por monitoramento ou por requerimento do titular / denúncia</div></div></div>
    <div class="if-connector"></div>
    <div class="if-step"><div class="if-num">2</div><div class="if-content"><div class="if-title">Análise de admissibilidade</div><div class="if-desc">Fase preparatória opcional caso faltem indícios suficientes</div></div></div>
    <div class="if-connector"></div>
    <div class="if-step"><div class="if-num">3</div><div class="if-content"><div class="if-title">Processo Administrativo Sancionador</div><div class="if-desc">Julgado pela Coordenação-Geral de Fiscalização da ANPD</div></div></div>
    <div class="if-connector"></div>
    <div class="if-step"><div class="if-num">4</div><div class="if-content"><div class="if-title">Resultado: arquivamento ou sanção</div><div class="if-desc">Decisão passível de recurso ao Conselho Diretor da ANPD</div></div></div>
  </div>
  <div class="highlight-box">A <strong>adoção de boas práticas e governança</strong> é critério considerado na aplicação das sanções (art. 52, §1º, IX).</div>
`;

document.getElementById('seguranca').innerHTML = `
  <p class="section-title">Incidentes de segurança</p>
  <div class="info-card full accent" style="margin-bottom:12px;"><div class="card-label">definição — Res. CD/ANPD nº 15/2024</div><div class="card-value">Qualquer evento adverso confirmado relacionado à violação das propriedades de confidencialidade, integridade, disponibilidade e autenticidade de dados pessoais</div></div>
  <p class="section-title" style="margin-top:1.2rem;">Quando comunicar à ANPD?</p>
  <div class="highlight-box">Apenas quando o incidente puder acarretar <strong>risco ou dano relevante</strong> aos titulares — afetando significativamente seus interesses ou direitos fundamentais, ou envolvendo dados sensíveis, de crianças/adolescentes/idosos.</div>
  <p class="section-title" style="margin-top:1.2rem;">Processo de comunicação</p>
  <div class="incident-flow">
    <div class="if-step"><div class="if-num">1</div><div class="if-content"><div class="if-title">Identificação do incidente</div><div class="if-desc">Confirmação do evento adverso com violação de dados pessoais</div></div></div>
    <div class="if-connector"></div>
    <div class="if-step"><div class="if-num">2</div><div class="if-content"><div class="if-title">Avaliação de risco</div><div class="if-desc">Verificar se há risco relevante aos titulares para determinar obrigatoriedade</div></div></div>
    <div class="if-connector"></div>
    <div class="if-step"><div class="if-num">3</div><div class="if-content"><div class="if-title">Comunicação à ANPD</div><div class="if-desc">Em até <strong style="color:#FF781E;">3 dias úteis</strong> pelo site gov.br/anpd — feita pelo controlador ou encarregado</div></div></div>
    <div class="if-connector"></div>
    <div class="if-step"><div class="if-num">4</div><div class="if-content"><div class="if-title">Avaliação pela ANPD</div><div class="if-desc">ANPD pode determinar providências; inação pode abrir processo administrativo sancionador</div></div></div>
  </div>
  <p class="section-title" style="margin-top:1.2rem;">Boas práticas (art. 50)</p>
  <div class="sanctions-list">
    <div class="sanction-item"><div class="sanction-dot"></div>Políticas e procedimentos internos de proteção</div>
    <div class="sanction-item"><div class="sanction-dot"></div>Privacy by Design — privacidade desde a concepção</div>
    <div class="sanction-item"><div class="sanction-dot"></div>Alinhamento com ISO/IEC 27001</div>
    <div class="sanction-item"><div class="sanction-dot"></div>Gestão de contratos com terceiros</div>
    <div class="sanction-item"><div class="sanction-dot"></div>Cultura organizacional de proteção de dados</div>
    <div class="sanction-item"><div class="sanction-dot"></div>Ações educativas para funcionários</div>
  </div>
`;

document.getElementById('ropa').innerHTML = `
  <p class="section-title">Projeto ROPA — art. 37</p>
  <div class="highlight-box"><strong>ROPA</strong> (Record of Processing Activities) = <strong>Registro de Operações de Tratamento de Dados Pessoais</strong>. Documento que detalha todo o ciclo de vida dos dados pessoais na organização — da coleta à exclusão.</div>
  <div class="card-grid">
    <div class="info-card accent"><div class="card-label">fundamento legal</div><div class="card-value">Art. 37 da LGPD</div><div class="card-detail">Controlador e operador devem manter o registro, especialmente quando a base legal for legítimo interesse</div></div>
    <div class="info-card"><div class="card-label">quem elabora</div><div class="card-value">Controlador e operador</div><div class="card-detail">Pode ser solicitado pela ANPD a qualquer momento para verificar conformidade</div></div>
  </div>
  <p class="section-title" style="margin-top:1.2rem;">O que deve constar no ROPA</p>
  <div class="tag-row">
    <span class="tag orange">Agentes de tratamento</span>
    <span class="tag orange">Finalidade</span>
    <span class="tag orange">Base legal</span>
    <span class="tag orange">Categorias de dados</span>
    <span class="tag">Dados sensíveis</span>
    <span class="tag">Categorias de titulares</span>
    <span class="tag">Período de retenção</span>
    <span class="tag">Local de armazenamento</span>
    <span class="tag">Compartilhamento</span>
    <span class="tag">Transferência internacional</span>
    <span class="tag">Medidas de segurança</span>
    <span class="tag">Critérios de descarte</span>
  </div>
  <p class="section-title">Como construir o ROPA</p>
  <div class="ropa-steps">
    <div class="ropa-step"><div class="rs-num">01 — mapeamento</div><div class="rs-title">Identificar todas as atividades</div><div class="rs-desc">Levantar cada processo que envolva dados pessoais, de cadastros de clientes a câmeras de segurança</div></div>
    <div class="ropa-step"><div class="rs-num">02 — responsáveis</div><div class="rs-title">Definir controlador e operador</div><div class="rs-desc">Indicar claramente quem decide (controlador) e quem executa (operador) em cada tratamento</div></div>
    <div class="ropa-step"><div class="rs-num">03 — finalidade</div><div class="rs-title">Documentar base legal e propósito</div><div class="rs-desc">Para cada atividade: qual hipótese do art. 7º ou 11 autoriza o tratamento e qual é a finalidade</div></div>
    <div class="ropa-step"><div class="rs-num">04 — retenção</div><div class="rs-title">Definir ciclo de vida</div><div class="rs-desc">Quanto tempo cada dado fica armazenado e como será descartado ou anonimizado</div></div>
    <div class="ropa-step"><div class="rs-num">05 — segurança</div><div class="rs-title">Registrar medidas adotadas</div><div class="rs-desc">Controles técnicos e administrativos implementados para proteção de cada categoria de dados</div></div>
    <div class="ropa-step"><div class="rs-num">06 — atualização</div><div class="rs-title">Manter o documento vivo</div><div class="rs-desc">Revisar periodicamente; qualquer novo processo ou mudança deve refletir no ROPA imediatamente</div></div>
  </div>
  <p class="section-title">Exemplo de registro</p>
  <div class="ropa-block">
    <div class="ropa-header">Atividade: cadastro de clientes</div>
    <div class="ropa-row"><span class="ropa-key">Controlador</span><span class="ropa-val">Flores de Abril Ltda.</span></div>
    <div class="ropa-row"><span class="ropa-key">Finalidade</span><span class="ropa-val">Gestão comercial e emissão de nota fiscal</span></div>
    <div class="ropa-row"><span class="ropa-key">Base legal</span><span class="ropa-val">Execução de contrato (art. 7º, V)</span></div>
    <div class="ropa-row"><span class="ropa-key">Dados tratados</span><span class="ropa-val">Nome, CPF, e-mail, endereço</span></div>
    <div class="ropa-row"><span class="ropa-key">Titulares</span><span class="ropa-val">Clientes pessoas físicas</span></div>
    <div class="ropa-row"><span class="ropa-key">Retenção</span><span class="ropa-val">5 anos após encerramento do contrato</span></div>
    <div class="ropa-row"><span class="ropa-key">Operadores</span><span class="ropa-val">Sistema CRM (SaaS)</span></div>
    <div class="ropa-row"><span class="ropa-key">Segurança</span><span class="ropa-val">Criptografia em trânsito, acesso por senha, backup diário</span></div>
  </div>
  <div class="highlight-box">O ROPA é um dos primeiros documentos solicitados pela ANPD em uma fiscalização. Empresas sem ROPA atualizado ficam expostas a <strong>multas, bloqueio de dados e sanções reputacionais</strong>. Pode ser feito em planilha, documento Word ou plataforma especializada.</div>
  <p class="section-title">ROPA vs. RIPD</p>
  <div class="card-grid">
    <div class="info-card accent"><div class="card-label">ROPA</div><div class="card-value">Registro contínuo de todas as atividades</div><div class="card-detail">Documento operacional, sempre atualizado. Base para demonstrar conformidade cotidiana</div></div>
    <div class="info-card"><div class="card-label">RIPD / DPIA</div><div class="card-value">Relatório de Impacto pontual</div><div class="card-detail">Exigido quando o tratamento pode gerar alto risco a direitos fundamentais ou for baseado em legítimo interesse</div></div>
  </div>
`;