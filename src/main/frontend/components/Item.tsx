import React from 'react'
import classNames from 'classnames';

interface ItemProps {
    title: string;
    isTopMargin?: boolean;
}

export default function Item({title, isTopMargin = true}: ItemProps){
    return (
        <li className={classNames({"mb-2": isTopMargin})}>
            <a href="#" className="hover:underline">{title}</a>
        </li>
    );
}