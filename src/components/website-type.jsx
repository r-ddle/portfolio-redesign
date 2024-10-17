import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const purpose = () => {
    const [name, setName] = useState('Hi I\'m Riddle!')
    const [professional, setProfessional] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const params = new URLSearchParams(location.search)
        const purpose = params.get('professional')

        if (purpose === 'true') {
            setName(' A.Ahmed')
            setProfessional(true)
        } else {
            setName(' Riddle')
        }
    }, [location.search])

    return { name, professional }
}
