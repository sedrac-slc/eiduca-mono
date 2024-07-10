import { ViewConfig } from '@vaadin/hilla-file-router/types.js';
import { TabSheet } from '@hilla/react-components/TabSheet.js';
import { Tabs } from '@hilla/react-components/Tabs.js';
import { Tab } from '@hilla/react-components/Tab.js';
import { Button } from '@hilla/react-components/Button.js';
import { Icon } from '@hilla/react-components/Icon.js';
import { useTranslation } from 'react-i18next';
import '@vaadin/icons';

import Card from '../components/Card.js';

import logo from '../assets/img/school_graduation_icon.png';


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
                <p className="text-lg text-justify ident my-4">O eibuca é a solução definitiva para o gerenciamento de universidades, faculdades e escolas de ensino médio. Nossa plataforma oferece ferramentas e recursos para facilitar a administração acadêmica, financeira e administrativa.</p>
                <Button className="flex-none w-min mt-3 bg-yellow-500 text-white" theme="large">
                    <Icon icon="vaadin:lock"/>
                    <span>Autenticação</span>
                </Button>
            </article>
            <div className="flex justify-center">
                <img src={logo} alt="Logo" />
            </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-4 mx-8">
            <Card title="Usuabilidade" icon="vaadin:area-select"/>
            <Card title="Segurança" icon="vaadin:shield"/>
            <Card title="Multiplataforma" icon="vaadin:mobile-browser"/>
            <Card title="Distribuído" icon="vaadin:cubes"/>
        </section>

      </div>
      <div {...{ tab: 'payment-tab' }}>This is the Payment tab content</div>
      <div {...{ tab: 'shipping-tab' }}>This is the Shipping tab content</div>

    </TabSheet>
  );
}
