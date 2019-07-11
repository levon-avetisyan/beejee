import React from 'react';

const Pagination = ({tasksPerPage, totalTasks, paginate}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalTasks / tasksPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <nav className="mt-3">
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <button href={null} className="page-link" onClick={()=>paginate(number)}>
                            {number}
                        </button>
                    </li>
                ))
                }
            </ul>
        </nav>
    )
};

export default Pagination;