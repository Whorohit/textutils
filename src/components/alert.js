import React from 'react'

export default function Alert(prop) {
  return (
   prop.alert && <div class={`alert alert-${prop.alert.types} my-0 h-20`} role="alert">
<strong> {prop.alert.msg} {prop.alert.types}</strong>
</div>
  )
}
