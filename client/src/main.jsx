import { QueryClient, QueryClientProvider } from "react-query";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddTransaction from "../pages/AddTransaction";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import TransactionDetails from "../pages/TransactionDetails";
import GetTransactions from "../pages/GetTransactions";

import Footer from "./components/Footer";
import Header from "./components/Header";

const queryClient = new QueryClient();
const isLoggedIn = localStorage.getItem("token") ? true : false;
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <div className="w-max relative overflow-scroll no-scrollbar scroll-smooth lg:border mx-auto mb-10">
      <QueryClientProvider client={queryClient}>
        <Header />
        <Router>
          <Routes>
            <Route path="/" element={<Dashboard />}>
              Home
            </Route>
            <Route path="/get-transactions" element={<GetTransactions />} />
            <Route path="/add-transaction" element={<AddTransaction />}>
              <Route
                path="income"
                element={
                  <TransactionDetails transactionType={{ type: "income" }} />
                }
              />
              <Route
                path="expense"
                element={
                  <TransactionDetails transactionType={{ type: "expense" }} />
                }
              />
            </Route>
            <Route
              path="income"
              element={
                <TransactionDetails transactionType={{ type: "income" }} />
              }
            />
            <Route
              path="expense"
              element={
                <TransactionDetails transactionType={{ type: "expense" }} />
              }
            />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
          </Routes>

          {/* Footer */}
          <Footer />
        </Router>
      </QueryClientProvider>
    </div>
  </>
);
