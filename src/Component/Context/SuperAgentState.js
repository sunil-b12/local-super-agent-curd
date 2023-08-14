import React, { createContext, useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';


export const SuperAgentContext = createContext()
const SuperAgentState = (props) => {
    const superAgentData = [
        { id: uuidv4(), name: 'kanchan kharel', email: 'kanchankhl2@gmail.com', address: 'kalanki', phone: '9843040214' },
    ]
    const [superAgent, setSuperAgent] = useState(superAgentData)


    //catch the change in storage
    useEffect(() => {
        setSuperAgent(JSON.parse(localStorage.getItem('superAgent')))
    }, [])


    //we will send the initial value to local storage
    useEffect(() => {
        localStorage.setItem('superAgent', JSON.stringify(superAgent));
    })

    // first we created addStudent function to add name student to add in list
    const addSuperAgent = (name, email, address, phone) => {
        setSuperAgent([
            ...superAgent,
            {
                id: uuidv4(),
                name,
                email,
                address,
                phone
            }
        ])
    }


    const deleteSuperAgent = (id) => {
        setSuperAgent(superAgent.filter(superAgent => superAgent.id !== id))
    }
    const updateSuperAgent = (id, updateSuperAgent) => {
        setSuperAgent(superAgent.map((superAgent) => superAgent.id === id ? updateSuperAgent : superAgent))
    }
    return (
        <div>

            <SuperAgentContext.Provider value={{ superAgent, addSuperAgent, deleteSuperAgent, updateSuperAgent }}>
                {props.children}
            </SuperAgentContext.Provider>

        </div>
    )
}

export default SuperAgentState