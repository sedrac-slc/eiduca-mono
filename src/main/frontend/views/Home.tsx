import { ViewConfig } from '@vaadin/hilla-file-router/types.js';
import { TabSheet } from '@hilla/react-components/TabSheet.js';
import { Tabs } from '@hilla/react-components/Tabs.js';
import { Tab } from '@hilla/react-components/Tab.js';
import { Button } from '@hilla/react-components/Button.js';
import { Icon } from '@hilla/react-components/Icon.js';
import { useTranslation } from 'react-i18next';
import '@vaadin/icons';

import Card from '../components/Card.js';

import graduationIcon from '../assets/img/school_graduation_icon.png';

export default function Home() {
  const {t, i18n} = useTranslation();

  return (
    <TabSheet>

      <Tabs slot="tabs" theme="equal-width-tabs">
        <Tab id="dashboard-tab">
            <Icon icon="vaadin:home" />
            <span>{ t('home-page') }</span>
        </Tab>
        <Tab id="payment-tab">
            <Icon icon="vaadin:money" />
            <span>{ t('price') }</span>
        </Tab>
        <Tab id="shipping-tab">
            <Icon icon="vaadin:cog" />
            <span>{ t('support') }</span>
        </Tab>
      </Tabs>

      <div {...{ tab: 'dashboard-tab' }} className="bg-graph -mt-3 -ml-3">
        <header className="grid grid-cols-1 lg:grid-cols-2 gap-1 lg:gap-20 mx-8">
            <article className="flex flex-col justify-center ml-3">
                <p className="text-4xl font-bold">Bem-vindo ao  <span className="text-yellow-500">eiduca</span> </p>
                <p className="text-2xl font-medium my-2">Plataforma para Gerenciamento Educacional</p>
                <p className="text-lg text-justify indent-4 my-4">O eibuca é a solução definitiva para o gerenciamento de universidades, faculdades e escolas de ensino médio. Nossa plataforma oferece ferramentas e recursos para facilitar a administração acadêmica, financeira e administrativa.</p>
                <Button className="flex-none w-min mt-3 bg-yellow-500 text-white" theme="large">
                    <Icon icon="vaadin:lock"/>
                    <span>Autenticação</span>
                </Button>
            </article>
            <div className="flex justify-center">
                <img src={graduationIcon} alt="Logo" />
            </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-4 mx-8">
            <Card title="Usuabilidade" text="Facilidade de uso e experiência intuitiva para todos os usuários"  icon="vaadin:area-select" isBorder={true} isAnimate={true}/>
            <Card title="Segurança" text="Proteção robusta de dados e privacidade garantida" icon="vaadin:shield" isBorder={true} isAnimate={true}/>
            <Card title="Multiplataforma" text="Compatibilidade perfeita com diversos dispositivos e sistemas operacionais" icon="vaadin:mobile-browser" isBorder={true} isAnimate={true}/>
            <Card title="Distribuído" text="Arquitetura escalável e desempenho otimizado em ambientes distribuídos" icon="vaadin:cubes" isBorder={true} isAnimate={true}/>
        </section>

        <section className="bg-yellow-500 p-4 mt-10 text-center ">

            <div className="text-4xl text-white font-bold mt-5">Serviços que oferecemos</div>

            <div className="text-2xl text-white my-10">
                A plataforma procura oferecer o máximo de serviços necessário para gerenciar, administrar uma instituição de ensino
            </div>

            <div className="grid gri-cols-1 gap-2 p-5 md:grid-cols-2 lg:grid-cols-3 mx-10 -mb-40 bg-white border border-yellow-500">
                <Card title="Matrícula e Admissão" text="Simplificação do processo de inscrição e gerenciamento de matrículas de novos e atuais alunos" icon="vaadin:user" isCenter={true}/>
                <Card title="Gestão Acadêmica" text="Controle de turmas, horários, currículos e registro de notas" icon="vaadin:area-select" isCenter={true}/>
                <Card title="Financeiro" text="Administração de mensalidades, pagamentos, orçamentos e relatórios financeiro" icon="vaadin:dollar" isCenter={true}/>
                <Card title="Comunicação" text="Facilitação da comunicação entre alunos, professores, pais e a administração através de mensagens e notificações" icon="vaadin:chat" isCenter={true}/>
                <Card title="Biblioteca e Recursos" text="Gestão de recursos da biblioteca e acesso a materiais didáticos" icon="vaadin:book" isCenter={true}/>
                <Card title="Relatórios e Análises" text="Geração de relatórios detalhados e análise de dados para apoiar a tomada de decisões estratégicas" icon="vaadin:file-text" isCenter={true}/>
            </div>

        </section>

        <section className="pb-40 mt-15">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-10 mt-48">
                <div className="mt-10 text-center grow-0 bg-resource"/>
                <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4 grow-1">
                    <Card title="API Rest" text="Facilidade de uso e experiência intuitiva para todos os usuários"  icon="vaadin:area-select" isBorder={true} isInline={true}/>
                    <Card title="Editor documento" text="Proteção robusta de dados e privacidade garantida" icon="vaadin:shield" isBorder={true} isInline={true}/>
                    <Card title="Agendamento" text="Compatibilidade perfeita com diversos dispositivos e sistemas operacionais" icon="vaadin:mobile-browser" isBorder={true} isInline={true}/>
                    <Card title="Multilocatório" text="Arquitetura escalável e desempenho otimizado em ambientes distribuídos" icon="vaadin:cubes" isBorder={true} isInline={true}/>
                </div>
            </div>
        </section>

      </div>
      <div {...{ tab: 'payment-tab' }}>This is the Payment tab content</div>
      <div {...{ tab: 'shipping-tab' }}>This is the Shipping tab content</div>

    </TabSheet>
  );
}
