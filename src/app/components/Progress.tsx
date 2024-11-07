

type ProgressProps = {
    value: number
}


export default function Progress({value}: ProgressProps){
    const translateValue = value - 100;
    return (
        <div role="progressbar" className="relative w-[400px] overflow-hidden h-[80px] border rounded-full border-indigo-500" aria-valuemin={0} aria-valuemax={100} aria-valuenow={value}>
            <div className="w-full h-full bg-indigo-500" style={{translate: `-${value}%`}}></div>
        </div>
    )
}