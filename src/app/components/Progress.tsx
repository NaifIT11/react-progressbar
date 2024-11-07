

type ProgressProps = {
    value: number
}


export default function Progress({value}: ProgressProps){
    return (
        <div role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={value}>
            <div className="w-[]"></div>
        </div>
    )
}