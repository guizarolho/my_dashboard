import React from "react";
import './select.scss'

const Select = ({setPath}) => {
  return (
    <div className="outer-select">
      <div className="select">
        <select name="format" id="format" onChange={(({target}) => setPath(target.value))}>
          <option value={'registerByMonthRpc'}>Users by Month</option>
          <option value={'claimedByMonthsRpc'}>Claimed by Month</option>
          <option value={'burntByMonthRpc'}>Burnt by Month</option>
          <option value={'getStakedMonstersIdRpc'}>Staked Monsters</option>
        </select>
      </div>
    </div>
  )
}

export default React.memo(Select)