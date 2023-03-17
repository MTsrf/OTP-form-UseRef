import React, { useRef, useState } from 'react'

const UserRefExample = () => {
    const opt1Ref = useRef(null)
    const opt2Ref = useRef(null)
    const opt3Ref = useRef(null)
    const opt4Ref = useRef(null)
    const [otp1, setOtp1] = useState("")
    const [otp2, setOtp2] = useState("")
    const [otp3, setOtp3] = useState("")
    const [otp4, setOtp4] = useState("")
    return (
        <>
            <div className="exmaple">
                <input
                    ref={opt1Ref}
                    type="number"
                    maxLength={1}
                    onChange={(e) => {
                        const pin1 = e.target.value
                        setOtp1(pin1)
                        if (pin1 !== "") {
                            opt2Ref.current.focus()
                        }
                    }}
                />
                <input
                    ref={opt2Ref}
                    type="number"
                    maxLength={1}
                    onChange={(e) => {
                        const pin2 = e.target.value
                        setOtp2(pin2)
                        if (pin2 !== "") {
                            opt3Ref.current.focus()
                        }
                    }} />
                <input
                    ref={opt3Ref}
                    type="number"
                    maxLength={1}
                    onChange={(e) => {
                        const pin3 = e.target.value
                        setOtp3(pin3)
                        if (pin3 !== "") {
                            opt4Ref.current.focus()
                        }
                    }}
                />
                <input
                    ref={opt4Ref}
                    type="number"
                    maxLength={1}
                    onChange={(e) => {
                        const pin4 = e.target.value
                        setOtp4(pin4)
                    }}
                />
                <button
                // disabled={ }
                >Submit</button>
            </div>
        </>
    )
}

export default UserRefExample
