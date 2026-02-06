import { useState } from "react";
import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";
import { StudentCard } from "./pages/StudentCard";
import { StudentCardDownload } from "./pages/StudentCardDownload";

type Page = "login" | "dashboard" | "studentCard" | "studentCardDownload";

type UserData = {
  name: string;
  course: string;
  startDate: string;
  endDate: string;
  birthDate: string;
  identification: string;
  cpf?: string;
  rg?: string;
  address?: string;
};

const STORAGE_KEY = "academic-center-user-data";

function loadSavedUserData(): UserData | null {
  try {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (!savedData) return null;
    return JSON.parse(savedData) as UserData;
  } catch (error) {
    console.error("Erro ao carregar dados salvos:", error);
    localStorage.removeItem(STORAGE_KEY);
    return null;
  }
}

function App() {
  const [currentPage, setCurrentPage] = useState<Page>(() => {
    const data = loadSavedUserData();
    return data ? "dashboard" : "login";
  });
  const [userData, setUserData] = useState<UserData | null>(() => loadSavedUserData());

  const handleLogin = (data: UserData) => {
    setUserData(data);
    // Salvar no localStorage
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
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
