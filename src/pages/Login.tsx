import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LogIn } from "lucide-react"

const randomCourses = [
  "Administração",
  "Engenharia de Software",
  "Direito",
  "Medicina",
  "Psicologia",
  "Arquitetura",
  "Design",
  "Ciências Contábeis",
  "Enfermagem",
  "Pedagogia",
  "Engenharia Civil",
  "Marketing",
  "Gestão de Recursos Humanos",
  "Sistemas de Informação",
  "Biomedicina",
]

interface LoginProps {
  onLogin: (data: {
    name: string
    course: string
    startDate: string
    endDate: string
    birthDate: string
    identification: string
    cpf: string
    rg: string
    address: string
  }) => void
}

export function Login({ onLogin }: LoginProps) {
  const [name, setName] = useState("")
  const [course, setCourse] = useState("")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [birthDate, setBirthDate] = useState("")
  const [identification, setIdentification] = useState("")
  const [cpf, setCpf] = useState("")
  const [rg, setRg] = useState("")
  const [address, setAddress] = useState("")

  // Preencher curso aleatório no primeiro carregamento
  useEffect(() => {
    const randomCourse = randomCourses[Math.floor(Math.random() * randomCourses.length)]
    setCourse(randomCourse)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const generateRandomId = () => {
    return Math.floor(10000000 + Math.random() * 90000000).toString()
  }

  const formatCpfDisplay = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 11)
    if (digits.length <= 3) return digits
    if (digits.length <= 6) return `${digits.slice(0, 3)}.${digits.slice(3)}`
    if (digits.length <= 9) return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6)}`
    return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6, 9)}-${digits.slice(9)}`
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name && course && startDate && endDate && birthDate && cpf && rg && address) {
      const finalIdentification = identification.trim() || generateRandomId()
      const cpfDigits = cpf.replace(/\D/g, "")
      onLogin({
        name,
        course,
        startDate,
        endDate,
        birthDate,
        identification: finalIdentification,
        cpf: cpfDigits,
        rg: rg.trim(),
        address: address.trim(),
      })
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            Portal Acadêmico
          </CardTitle>
          <CardDescription className="text-center">
            Preencha os dados para acessar seu portal
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nome</Label>
              <Input
                id="name"
                type="text"
                placeholder="Digite seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="course">Curso</Label>
              <Input
                id="course"
                type="text"
                placeholder="Digite o nome do curso"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="startDate">Data de Início</Label>
              <Input
                id="startDate"
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="endDate">Data de Término Previsto</Label>
              <Input
                id="endDate"
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="birthDate">Data de Nascimento</Label>
              <Input
                id="birthDate"
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="identification">
                Identificação <span className="text-muted-foreground text-xs">(opcional)</span>
              </Label>
              <Input
                id="identification"
                type="text"
                placeholder="Digite o número de identificação (8 dígitos)"
                value={identification}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "").slice(0, 8)
                  setIdentification(value)
                }}
                maxLength={8}
              />
              <p className="text-xs text-muted-foreground">
                Se não informado, será gerado um número aleatório de 8 dígitos
              </p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="cpf">CPF</Label>
              <Input
                id="cpf"
                type="text"
                placeholder="000.000.000-00"
                value={formatCpfDisplay(cpf)}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "").slice(0, 11)
                  setCpf(value)
                }}
                maxLength={14}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="rg">RG</Label>
              <Input
                id="rg"
                type="text"
                placeholder="Digite o número do RG"
                value={rg}
                onChange={(e) => setRg(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Endereço</Label>
              <Input
                id="address"
                type="text"
                placeholder="Digite seu endereço completo"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full" size="lg">
              <LogIn className="mr-2 h-4 w-4" />
              Acessar Portal
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

