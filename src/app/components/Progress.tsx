

type ProgressProps = {
    value: number
}


export default function Progress({value}: ProgressProps){
    const translateValue = 100 - value;
    return (
        <div role="progressbar" className="relative w-[400px] overflow-hidden h-[80px] border rounded-full border-indigo-500" aria-valuemin={0} aria-valuemax={100} aria-valuenow={value}>
            <div className={`w-full h-full -translate-x-[${translateValue}%] bg-indigo-500 rounded-full`}></div>
        </div>
    )
}