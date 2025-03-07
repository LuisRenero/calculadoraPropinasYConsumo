import type { Dispatch, SetStateAction } from "react"

const tipOptions = [
    {
      id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
    {
      id: 'tip-50',
      value: .50,
      label: '50%'
    },
  ] 

  type TipPercentageForm={
    setTip: Dispatch<SetStateAction<number>>
    tip: number
}


export default function TipPercentageForm({setTip, tip}: TipPercentageForm){
    return(
        <div>
            <h3 className="font-black text-2xl"></h3>

            <form>
                {tipOptions.map(tipOption => (
                <div key="tip.id" className="flex gap-2">
                    <label htmlFor="tip.id">{tipOption.label}</label>
                    <input id="{tip.id}" 
                    type="radio" 
                    name="tip" 
                    value={tipOption.value}
                    onChange={e => setTip(+e.target.value)}
                    checked={tipOption.value === tip}/>
                </div>
                ))}
            </form>
        </div>
    )
}