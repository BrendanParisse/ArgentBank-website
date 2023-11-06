import InfoUser from '../../../Components/InfoUser/InfoUser.js';
import Transactions from '../../../Components/Transactions/Transactions.js';


const User = () => {
    return (
        <>
            <main className="main bg-dark">
                <InfoUser />
                <Transactions />
            </main>

        </>
    );
}

export default User;