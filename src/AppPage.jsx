import { NavLink, Outlet } from "react-router-dom";

function AppPage() {
  return (
    <div className="text-center mt-10">
      <nav className="mb-10">
        <ul className="inline-flex space-x-4">
          <li>
            <NavLink
              to="transaction"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
            >
              Transaction
            </NavLink>
          </li>
          <li>
            <NavLink
              to="expense"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
            >
              Expense
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default AppPage;
