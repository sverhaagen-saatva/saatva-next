import { useEffect } from 'react'
import PropTypes from 'prop-types'

const KlarnaMessaging = ({
    className,
    dataId,
    price
}) => {
    const purchaseAmount = price * 100

    useEffect(() => {
        window.KlarnaOnsiteService = window.KlarnaOnsiteService || []
        window.KlarnaOnsiteService.push({
            eventName: 'refresh-placements'
        })
    }, [price])

    return (
        <div className={`klarnaMessaging ${className}`}>
            <klarna-placement
                data-id={dataId}
                data-purchase_amount={purchaseAmount}
                data-inline
                tabIndex="0">
            </klarna-placement>
        </div>
    )
}

KlarnaMessaging.propTypes = {
    className: PropTypes.string,
    dataId: PropTypes.string,
    price: PropTypes.number
}

export default KlarnaMessaging
