import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, select } from '@storybook/addon-knobs/react'
// import { backgroundsSaatva } from '../../../.storybook/backgrounds'
import { withReadme } from 'storybook-readme'
import { ShowMarkup } from '../../../addons/markup'
import { Icon } from '../../components'
import iconData from '../assets/icons/icons.json'

import README from './README.md'

/* === uncomment to get correct propTypes to copy into README table === */
// import { withInfo } from '@storybook/addon-info'
// storiesOf('Icon', module).add('simple info', withInfo(`test`)(() => <Icon />))

const stories = storiesOf('Icon', module)

stories.addDecorator(withKnobs)
// stories.addDecorator(backgroundsSaatva)
stories.addDecorator(withReadme(README))

// bring in all icons from icons.json
const iconNames = iconData.map(icon => icon.name).sort()

stories
    .add('playground', () => (
        <ShowMarkup>
            <Icon
                name={select('name', iconNames, 'star')}
                className={text('className', 'new-class')}
                alt={text('alt', 'review star')}
                fill={text('fill', '#62c2b1')}
                width={text('width', '24')}
                height={text('height', '24')}
                titleId={text('titleId', '')}
            />
        </ShowMarkup>
    ))
    .add('all icons', () => {
        return (
            <div className="row">
                {
                    iconNames.map((name, i) => {
                        return (
                            <div className="col col--xs-4 col--xs-3 col--lg-2 u-marginBottom--3xl u-textCenterFlex" key={i}>
                                <Icon
                                    name={name}
                                    alt='An icon'
                                    width={text('width', '24')}
                                    height={text('height', '24')}
                                />
                                {`${name}`}
                            </div>
                        )
                    })
                }
            </div>
        )
    })
