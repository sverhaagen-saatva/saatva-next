import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import Icon from './'
import iconList from '../assets/icons/icons.json'

describe('Icon', () => {
    const props = {
        name: 'star',
        className: 'new-class',
        alt: 'review star',
        description: 'review star',
        fill: 'yellow',
        width: '24',
        height: '24',
        style: {
            opacity: '0.5'
        },
        titleId: 'review star'
    }

    const base = (
        <Icon {...props}/>
    )

    // snapshot test
    it('renders correctly', () => {
        const tree = renderer
            .create(base)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })

    const addPropsToShallowIcon = (newProps) => {
        return shallow(<Icon {...props} {...newProps} />)
    }

    // unit tests
    describe('should render correctly', () => {
        it('when a new class is added', () => {
            const wrapper = addPropsToShallowIcon({className: 'new-class'})

            expect(wrapper.hasClass('new-class')).toEqual(true)
        })
    })

    it('should accept an external icon definition list', () => {
        const wrapper = addPropsToShallowIcon({iconList: iconList})

        expect(wrapper.props().name).toEqual('star')
    })
})
