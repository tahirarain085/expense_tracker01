import React from 'react';


function Child() {
    return (
        <div className="container">
            <h3 className="text-center"> Expense Tracker </h3>
            <h3>Current Balance <br />
                 $0.000
       </h3>
       <div className="expense-container">
           <h3>Inocme <br /> $5.00</h3>
           <h3>Expense <br /> $0.00</h3>
       </div>
        </div>
    );
}

export default Child;
