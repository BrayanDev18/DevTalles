import React from 'react'
import PropTypes from 'prop-types'


export const FirstApp = ({ title }) => {

  return (
    <div>
      {title}
    </div>
  )
}

//TODO Definir el tipado de las props que recibimos
FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
}

//TODO Definir el valor por defecto de las props
FirstApp.defaultProps = {
  title: 'no hay titulo',
  subtitle: 'No hay subtitle'
}