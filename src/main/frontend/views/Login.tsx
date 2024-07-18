import { Button } from '@hilla/react-components/Button.js';
import { EmailField } from '@hilla/react-components/EmailField.js';
import { PasswordField } from '@hilla/react-components/PasswordField.js';
import { VerticalLayout } from '@hilla/react-components/VerticalLayout.js';
import { NavLink } from 'react-router-dom';
import { Icon } from '@hilla/react-components/Icon.js';

export default function Login(){
    return (
        <form className="flex flex-col justify-center items-center h-full bg-graph-login">
              <div className="absolute top-0 border-b border-yellow-500 w-full p-3">
                    <NavLink to="/" className="space-x-3 text-white text-lg">
                        <Icon icon="vaadin:home"/>
                        <span>Página inicial</span>
                    </NavLink>
               </div>
              <VerticalLayout className="border bg-gray-100 w-11/12" theme="spacing padding">
                   <p className="text-4xl text-center">Faça o login</p>
                   <EmailField required label="Digita o email:" name="email" className="w-full"/>
                   <PasswordField required minlength={6} maxlength={12} label="Digita a senha:" className="w-full"/>
                   <Button theme="primary">Autenticar</Button>
              </VerticalLayout>
        </form>
    );
}