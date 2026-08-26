<script setup lang="ts">
useHead({
  title: 'Políticas e Termos — Espaço Psique e Vida',
})

const documents = [
  {
    id: 'privacidade',
    title: 'Política de Privacidade',
    summary: 'Como tratamos — ou melhor, não coletamos — seus dados pessoais.',
    intro:
      'O Espaço Psique e Vida valoriza a privacidade de quem visita este site e segue os princípios da Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD).',
    sections: [
      {
        title: 'Este site não tem cadastro nem banco de dados',
        text: 'Não existe login, criação de conta ou área restrita. O único ponto de contato é o formulário de agendamento, que funciona inteiramente no seu navegador — os dados que você preenche (nome, WhatsApp, e-mail opcional, tipo de atendimento, modalidade, dias e período de preferência, observações) servem só para montar a mensagem que abre no seu WhatsApp. Nada é enviado, armazenado ou processado em servidores do Espaço Psique e Vida.',
      },
      {
        title: 'Como sua mensagem chega até as profissionais',
        text: 'Ao confirmar o envio no WhatsApp, a conversa passa a acontecer diretamente entre você e a psicóloga responsável, pelo número de WhatsApp dela. Essa troca é regida pela política de privacidade do WhatsApp e, sobretudo, pelo sigilo profissional que rege a prática da Psicologia, conforme o Código de Ética Profissional do Psicólogo.',
      },
      {
        title: 'Links para Instagram, WhatsApp e Google Maps',
        text: 'Alguns botões e textos do site levam direto para o Instagram, o WhatsApp das profissionais ou o Google Maps. São serviços de terceiros — cada um com sua própria política de privacidade, que recomendamos consultar caso tenha dúvidas sobre como tratam seus dados.',
      },
      {
        title: 'Dados técnicos de acesso',
        text: 'Como qualquer site hospedado na internet, o provedor de hospedagem pode registrar informações técnicas básicas de acesso (como endereço IP e horário da visita), usadas apenas para segurança e funcionamento do serviço — não para identificar ou traçar o perfil de quem visita.',
      },
      {
        title: 'Seus direitos garantidos pela LGPD',
        text: 'Como este site não coleta nem armazena dados pessoais, não há informações nossas para acessar, corrigir ou excluir. Dúvidas sobre dados compartilhados diretamente com as profissionais pelo WhatsApp devem ser tratadas com elas.',
      },
      {
        title: 'Alterações nesta política',
        text: 'Esta política pode ser atualizada para refletir mudanças no site ou na legislação. A data da última atualização está sempre indicada no topo desta página.',
      },
      {
        title: 'Contato',
        text: 'Dúvidas sobre esta política podem ser enviadas pelo botão "Agendar atendimento" ou pelos perfis do Instagram indicados no rodapé.',
      },
    ],
  },
  {
    id: 'termos',
    title: 'Termos de Uso',
    summary: 'As regras de uso deste site institucional.',
    intro:
      'Este Termo de Uso rege a utilização do site do Espaço Psique e Vida. Ao navegar por ele, você concorda com as condições descritas abaixo.',
    sections: [
      {
        title: 'Aceitação dos termos',
        text: 'Ao acessar este site, você concorda com este Termo de Uso. Caso não concorde com alguma parte, pedimos que não continue a navegação.',
      },
      {
        title: 'Sobre o site',
        text: 'Este é um site institucional: apresenta o Espaço Psique e Vida, os serviços de Psicologia e Neuropsicologia oferecidos por Joana Darc e Viviane Gatis, e facilita o primeiro contato. Ele não substitui uma consulta, avaliação ou atendimento profissional, e não é um canal de urgência ou emergência.',
      },
      {
        title: 'Uso de conteúdo e propriedade intelectual',
        text: 'Textos, imagens, vídeos, identidade visual e demais materiais deste site pertencem ao Espaço Psique e Vida ou aos seus licenciadores. A reprodução, distribuição ou uso comercial desse conteúdo sem autorização prévia não é permitida.',
      },
      {
        title: 'O formulário de agendamento não é uma confirmação',
        text: 'Preencher e enviar o formulário abre uma conversa no WhatsApp com a mensagem já organizada — isso não confirma automaticamente um horário. O agendamento só se torna definitivo após a resposta e combinação direta com a profissional.',
      },
      {
        title: 'Links para serviços de terceiros',
        text: 'O site contém links para Instagram, WhatsApp e Google Maps. Não temos controle sobre o conteúdo, funcionamento ou políticas desses serviços externos.',
      },
      {
        title: 'Limitação de responsabilidade',
        text: 'Fazemos o possível para manter o site disponível e atualizado, mas não nos responsabilizamos por indisponibilidades temporárias, falhas técnicas ou problemas causados por serviços de terceiros vinculados a ele.',
      },
      {
        title: 'Em caso de emergência',
        text: 'Este site não deve ser usado como canal em situações de crise ou risco. Em caso de emergência, procure o CVV (188, ligação e chat gratuitos, 24h) ou o SAMU (192).',
      },
      {
        title: 'Alterações nestes termos',
        text: 'Este Termo de Uso pode ser atualizado a qualquer momento; a versão vigente é sempre a publicada nesta página.',
      },
      {
        title: 'Lei aplicável e foro',
        text: 'Este Termo é regido pelas leis brasileiras. Eventuais disputas serão submetidas ao foro da comarca de Salvador — BA.',
      },
      {
        title: 'Contato',
        text: 'Dúvidas sobre este Termo de Uso podem ser enviadas pelo botão "Agendar atendimento" ou pelos perfis do Instagram indicados no rodapé.',
      },
    ],
  },
  {
    id: 'cookies',
    title: 'Aviso de Cookies',
    summary: 'Este site não usa cookies de rastreamento — veja o que de fato acontece no seu navegador.',
    intro: 'Saiba como este site trata dados de navegação e preferências técnicas.',
    sections: [
      {
        title: 'O que são cookies',
        text: 'Cookies são pequenos arquivos de texto que um site pode guardar no seu navegador para lembrar preferências ou coletar dados de navegação.',
      },
      {
        title: 'O que este site usa hoje',
        text: 'Nada. Este site não usa cookies de rastreamento, publicidade ou análise de audiência (nada de Google Analytics, pixels do Facebook/Instagram ou similares), nem grava qualquer preferência no seu navegador.',
      },
      {
        title: 'Fontes tipográficas',
        text: 'As fontes usadas no site (Playfair Display, Dancing Script e Nunito Sans) ficam hospedadas junto com os arquivos do próprio site, e não são buscadas nos servidores do Google — ou seja, nenhum dado seu é enviado a terceiros só por causa da tipografia.',
      },
      {
        title: 'Links externos',
        text: 'Instagram, WhatsApp e Google Maps aparecem só como links: você sai do site do Espaço Psique e Vida para abrir esses serviços. Cookies eventualmente definidos por eles são de responsabilidade exclusiva dessas plataformas.',
      },
      {
        title: 'Se isso mudar',
        text: 'Caso o site passe a usar cookies de análise de audiência no futuro, este aviso será atualizado e, se exigido por lei, um banner de consentimento será adicionado.',
      },
      {
        title: 'Contato',
        text: 'Dúvidas sobre este aviso podem ser enviadas pelo botão "Agendar atendimento" ou pelos perfis do Instagram indicados no rodapé.',
      },
    ],
  },
]
</script>

<template>
  <div>
    <SiteHeader />
    <main>
      <section class="pv-policy-hero">
        <div class="pv-container pv-policy-head">
          <p class="pv-kicker pv-reveal" v-reveal>Políticas e Termos</p>
          <h1 class="pv-policy-title pv-reveal" v-reveal="80">
            Política de Privacidade, <span class="pv-script">Termos de Uso</span> e Aviso de Cookies
          </h1>
          <p class="pv-policy-lede pv-reveal" v-reveal="150">
            Última atualização: agosto de 2026. Este site é mantido pelo Espaço Psique e Vida,
            de Joana Darc e Viviane Gatis.
          </p>
        </div>
      </section>

      <section class="pv-policy-body">
        <div class="pv-container">
          <PolicyAccordion :documents="documents" />
        </div>
      </section>
    </main>
    <SiteFooter />
  </div>
</template>

<style scoped>
.pv-policy-hero {
  padding-top: 8.5rem;
  padding-bottom: 1rem;
}
.pv-policy-head {
  max-width: 46rem;
}
.pv-policy-title {
  font-size: clamp(1.9rem, 3.8vw, 2.7rem);
  margin-bottom: 1.1rem;
}
.pv-policy-title .pv-script {
  font-size: 1.15em;
}
.pv-policy-lede {
  color: var(--pv-ink-soft);
  font-size: 1rem;
}

.pv-policy-body {
  padding-top: 1rem;
}
</style>
