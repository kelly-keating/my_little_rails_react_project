import PropTypes from 'prop-types'
import React, { useState } from 'react'
import style from './HelloWorld.module.css'

const HelloWorld = (props, railsContext) => {
  return () => {
    const [name, setName] = useState(props.name)
    return (
      <div>
        <h3>Hello, {name}!</h3>
        <p>Your locale is {railsContext.i18nLocale}.</p>
        <hr />
        <form>
          <label className={style.bright} htmlFor="name">
            Say hello to:
            <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
        </form>
      </div>
    )
  }
}

HelloWorld.propTypes = {
  name: PropTypes.string.isRequired, // this is passed from the Rails view
}

export default HelloWorld
