import { Icon } from '@hilla/react-components/Icon.js';
import classNames from 'classnames';

interface CardProps {
  title: string;
  text: string;
  icon?: string;
  isBorder?: boolean;
  isAnimate?: boolean;
  isCenter?: boolean;
  isInline?: boolean;
}

export default function Card({ title, text, icon = "vaadin:check-circle-o", isBorder = false, isAnimate = false, isCenter=false, isInline=false }: CardProps) {
  return isInline ? (
    <div className={classNames({ 'p-6 bg-white': true, 'border border-gray-200 rounded-lg': isBorder, 'text-center': isCenter })}>
       <a href="#" className="flex gap-3 items-center">
          <Icon className={classNames({'text-xl text-yellow-500': true, 'animate-bounce': isAnimate})} icon={icon}/>
          <p className="my-2 text-2xl font-semibold tracking-tight">{title}</p>
        </a>
        <p className="font-normal text-justify">{text}</p>
    </div>
  ): (
    <div className={classNames({ 'p-6 bg-white': true, 'border border-gray-200 rounded-lg': isBorder, 'text-center': isCenter })}>
      <Icon className={classNames({'text-xl text-yellow-500': true, 'animate-bounce': isAnimate})} icon={icon}/>
      <a href="#">
        <p className="my-2 text-2xl font-semibold tracking-tight">{title}</p>
      </a>
      <p className="font-normal text-justify">{text}</p>
    </div>
  );
}
