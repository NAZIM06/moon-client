import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useAuth } from "./useAuth"

const useCustomer = () => {
    const { user } = useAuth()
    const { data: isStudent, isLoading: isStudentLoading } = useQuery({
        queryKey: ['student', user?.email],
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/user/student/${user.email}`)
            return res.data
        }
    })
    return [isStudent, isStudentLoading]
}