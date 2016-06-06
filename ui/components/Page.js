import React, { Component, PropTypes } from 'react'

const Page = ({
  id,
  title
}) => (
      <tr>
        <th>{id}</th>
        <td>{title}</td>
        <td>
          <a href='javascript:void(0)'>Show</a>
        </td>
      </tr>
)
export default Page
