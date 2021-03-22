import React from 'react'
import classNames from 'classnames'

import {
    LinkList,
    LinkItem
} from '../subcomponents'

import { linkLists } from '../data'

import styles from '../Footer.module.css'

const FooterLinks = () => {
    return (
        <div className={styles.linkListContainer}>
            {linkLists.map((linkList, i) => (
                <LinkList key={i} title={linkList.title}>
                    {linkList.items.map((listItem, j) => {
                        const classes = classNames({
                            [styles.linkItemNested]: listItem.nested
                        })

                        const itemProps = {
                            key: `linkListItem${i}-${j}`,
                            href: listItem.href,
                            target: listItem.target || '_self',
                            text: listItem.value,
                            className: classes
                        }

                        if (listItem.rel) {
                            itemProps.rel = listItem.rel
                        }

                        if (listItem.toggleChat) {
                            itemProps.onClick = () => openChat()
                        }

                        return <LinkItem {...itemProps} />
                    })}
                </LinkList>
            ))}
        </div>
    )
}

export default FooterLinks
