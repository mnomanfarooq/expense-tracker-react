import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import CountUp from 'react-countup';

export const Balance = () => {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);

    const total = amounts.reduce((acc, item) => (acc += item), 0);

    return (
        <>
            <h4>Balance</h4>
            <h1>PKR <CountUp start={0} end={total} duration={2.75} separator="," /></h1>
        </>
    )
}
