import React from 'react'

interface ListItemProps {
    title: string;
    children?: React.ReactNode;
}

export default function ListItem({title, children}: ListItemProps){
    return (
        <div>
           <p className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">{title}</p>
           <ul className="text-white font-medium">{children}</ul>
        </div>
    );
}