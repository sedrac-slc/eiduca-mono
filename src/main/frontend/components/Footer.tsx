import { Icon } from '@hilla/react-components/Icon.js';
import ListItem from './ListItem.js';
import Item from './Item.js';

export default function Footer() {
  return (
    <footer className="bg-yellow-500">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <a href="#" className="flex items-center">
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">eiduca</span>
              </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <ListItem title="Rede social">
                    <Item title="Facebook"/>
                    <Item title="GitHub"/>
                    <Item title="Discord"/>
                </ListItem>
              </div>
              <div>
                <ListItem title="Legislação">
                    <Item title="Política de privacidade"/>
                    <Item title="Termos de uso"/>
                    <Item title="licença"/>
                </ListItem>
              </div>
          </div>
      </div>
    </div>
</footer>

  );
}
