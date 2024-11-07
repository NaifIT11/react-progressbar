

type ProgressProps = {
    value: number
}


export default function Progress({value}: ProgressProps){
    const translateValue
    return (
        <div role="progressbar" className="w-[400px] h-[80px] border rounded-full border-indigo-500" aria-valuemin={0} aria-valuemax={100} aria-valuenow={value}>
            <div className={`w-full h-full translate-x-[] bg-indigo-500 rounded-full`}></div>
        </div>
    )
}