

type ProgressProps = {
    value: number
}


export default function Progress({value}: ProgressProps){
    const widthOfChildren = 400 - value;
    return (
        <div role="progressbar" className="w-[400px] h-[80px] border rounded-full border-indigo-500" aria-valuemin={0} aria-valuemax={100} aria-valuenow={value}>
            <div className={`w-[${widthOfChildren}px] h-full bg-indigo-500 rounded`}></div>
        </div>
    )
}