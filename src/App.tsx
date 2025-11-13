import { useState } from "react";
import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";
import { StudentCard } from "./pages/StudentCard";
import { StudentCardDownload } from "./pages/StudentCardDownload";

type Page = "login" | "dashboard" | "studentCard" | "studentCardDownload";

function App() {
  const [currentPage, setCurrentPage] = useState<Page>("login");
  const [userData, setUserData] = useState<{
    name: string;
    course: string;
    startDate: string;
    endDate: string;
    birthDate: string;
    identification: string;
  } | null>(null);

  const handleLogin = (data: {
    name: string;
    course: string;
    startDate: string;
    endDate: string;
    birthDate: string;
    identification: string;
  }) => {
    setUserData(data);
    setCurrentPage("dashboard");
  };

  const handleNavigateToCard = () => {
    setCurrentPage("studentCard");
  };

  const handleBackToDashboard = () => {
    setCurrentPage("dashboard");
  };

  const handleDownloadCard = () => {
    setCurrentPage("studentCardDownload");
  };

  if (currentPage === "login") {
    return <Login onLogin={handleLogin} />;
  }

  if (currentPage === "studentCard" && userData) {
    return (
      <StudentCard
        userData={userData}
        onBack={handleBackToDashboard}
        onDownload={handleDownloadCard}
      />
    );
  }

  if (currentPage === "studentCardDownload") {
    return <StudentCardDownload onBack={handleBackToDashboard} />;
  }

  if (currentPage === "dashboard" && userData) {
    return (
      <Dashboard userData={userData} onNavigateToCard={handleNavigateToCard} />
    );
  }

  return null;
}

export default App;
