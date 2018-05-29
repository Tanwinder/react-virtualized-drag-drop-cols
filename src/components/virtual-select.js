import React, { Component } from 'react'
import VirtualizedSelect from 'react-virtualized-select'
 
import 'react-select/dist/react-select.css'
import 'react-virtualized/styles.css'
import 'react-virtualized-select/styles.css'

import propTypes from 'prop-types'
 
class MySelect extends Component {

    static propTypes={
        data: propTypes.array.isRequired
    }
    constructor (props) {
      super(props)

      const creatableOptions = [
        { label: 'Blue', value: '#00F' },
        { label: 'Green', value: '#0F0' },
        { label: 'Red', value: '#F00' }
      ];
   
      this.state = {
        clearable: true,
        creatableOptions,
        disabled: false,
        multi: true,
        searchable: true,
        selectedCreatable: null,
        selectedCity: null
      }
    }
   
    render () {

    const { data } = this.props
    const { clearable, disabled, multi, searchable, selectedCity } = this.state
      return (
        <VirtualizedSelect
          autoFocus
          clearable={clearable}
          disabled={disabled}
          labelKey='name'
          multi={multi}
          onChange={(selectedCity) => this.setState({ selectedCity })}
          options={data}
          searchable={searchable}
          simpleValue
          value={selectedCity}
          valueKey='name'
        />
      )
    }
  }

export default MySelect;