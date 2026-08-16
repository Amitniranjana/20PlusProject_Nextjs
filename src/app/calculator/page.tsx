"use client"
import { evaluate } from 'mathjs'
import React, { useState } from 'react'

const Page = () => {
    const [keyVal, setKeyVal] = useState("")
    const [output, setOutput] = useState<number | string>('')
    const [history, setHistory] = useState<number[]>([]);
    const keys = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        ['+', 9, '-'],
        ['*', '=', '/',]
    ];

    const storeVal = (e: React.MouseEvent<HTMLButtonElement>) => {
        const buttonValue = e.currentTarget.value;

        if (buttonValue === '=') {
            const result = evaluate(keyVal);
            setKeyVal(result.toString());
            setOutput(result);
            setHistory((prev) => [...prev, Number(result)]);
            return;
        }

        setKeyVal((prev) => prev + buttonValue);
    }
    return (

        <div className='bg-blue-700 h-screen w-screen flex justify-center items-center'>
            <div>
                <h1 className=' text-lg font-bold'>History</h1>
                {
                    history.map((val, idx) => (
                        <div className='bg-blue-500 flex w-auto p-2 m-2' key={idx}>{val}</div>
                    ))
                }
            </div>
            <div className='h-fit w-1/2 bg-slate-400 justify-center items-center'>
                <div className='bg-black h-1/3 flex '>
                    {keyVal}
                </div>
                <div>
                    {
                        keys.map((valArr, it) => {
                            return <div key={it} className='flex justify-between items-center'>
                                {
                                    valArr.map((btn, ix) => {
                                        return <div key={ix}>
                                            <button className='bg-blue-700 w-9 h-6 m-4 rounded-xl '
                                                value={btn}
                                                onClick={storeVal}>{btn}</button>
                                        </div>
                                    })
                                }
                            </div>
                        })
                    }
                    <div className='flex justify-around'>
                        <div className='flex justify-center items-center'>
                            <button className='bg-red-600 rounded-xl p-2 ' onClick={(() => (setOutput(""),
                                setKeyVal(" ")))}>clear</button>
                        </div>
                        <div className='flex justify-center items-center'>
                            <button className='bg-red-600 rounded-xl p-2 ' onClick={(() => (setKeyVal((prev)=>prev.slice(0,-1))))}>delete</button>

                        </div>

                    </div>
                </div>
            </div >
        </div >
    )
}

export default Page