import { Icon } from '@hilla/react-components/Icon.js';

interface CardProps {
  title: string;
  icon?: string;
}

export default function Card({ title, icon = "vaadin:check-circle-o" }: CardProps) {
  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg">
        <Icon icon={icon}/>
      <a href="#">
        <p className="mb-2 text-2xl font-semibold tracking-tight">{title}</p>
      </a>
    </div>
  );
}
