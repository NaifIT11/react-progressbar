

type ProgressProps = {
    value: number
}


export default function Progress({value}: ProgressProps){
    return (
        <div role="progressbar" className="relative w-[400px] transition-all overflow-hidden h-[80px] border rounded-full border-indigo-500" aria-valuemin={0} aria-valuemax={100} aria-valuenow={value} aria-label="Progress Bar">
            <div className="w-full h-full bg-indigo-500" style={{translate: `-${100 - value}%`}}></div>
        </div>
    )
}