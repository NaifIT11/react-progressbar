

type ProgressProps = {
    value: number
}


export default function Progress({value}: ProgressProps){
    return (
        <div role="progressbar"></div>
    )
}