import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { CourseCard } from "@/components/CourseCard"
import { SubjectList } from "@/components/SubjectList"
import { ScheduleCard } from "@/components/ScheduleCard"
import { PaymentCenter } from "@/components/PaymentCenter"
import { User, Menu, IdCard, Calendar } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { formatDate } from "@/lib/utils"

interface DashboardProps {
  userData: {
    name: string
    course: string
    startDate: string
    endDate: string
    birthDate: string
    identification: string
  }
  onNavigateToCard: () => void
}

export function Dashboard({ userData, onNavigateToCard }: DashboardProps) {
  const [showMenu, setShowMenu] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false)
      }
    }

    if (showMenu) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [showMenu])

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
              <User className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Olá, {userData.name}</h1>
              <p className="text-sm text-muted-foreground">Bem-vindo ao seu portal</p>
            </div>
          </div>
          <div className="relative" ref={menuRef}>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setShowMenu(!showMenu)}
              className="relative"
            >
              <Menu className="h-5 w-5" />
            </Button>
            {showMenu && (
              <div className="absolute right-0 mt-2 w-56 bg-card border rounded-lg shadow-lg z-10 overflow-hidden">
                <div className="p-2">
                  <div className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase">
                    Usuário
                  </div>
                  <div className="px-3 py-2 space-y-1 border-b">
                    <div className="text-sm font-medium">{userData.name}</div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      <span>{formatDate(userData.birthDate)}</span>
                    </div>
                  </div>
                </div>
                <div className="p-2">
                  <Button
                    variant="ghost"
                    className="w-full justify-start gap-2"
                    onClick={() => {
                      onNavigateToCard()
                      setShowMenu(false)
                    }}
                  >
                    <IdCard className="h-4 w-4" />
                    Carteira de Estudante
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>

        <Separator />

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <CourseCard
            course={userData.course}
            startDate={userData.startDate}
            endDate={userData.endDate}
          />
          <SubjectList course={userData.course} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ScheduleCard />
          <PaymentCenter />
        </div>
      </div>
    </div>
  )
}

